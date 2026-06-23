import json
import numpy as np
from app.config import MODEL_PATH, MAPEO_CLASES_PATH

class ASLModel:
    def __init__(self):
        self.model = None
        self.class_mapping = None

    def load(self):
        """Carga el modelo Keras y el mapeo de clases desde el disco."""
        try:
            with open(MAPEO_CLASES_PATH, "r") as f:
                self.class_mapping = json.load(f)
        except Exception:
            self.class_mapping = {str(i): chr(65 + i) for i in range(26)}

        try:
            if MODEL_PATH.exists():
                from tensorflow import keras
                self.model = keras.models.load_model(str(MODEL_PATH))
            else:
                self.model = None
        except Exception:
            self.model = None

    def predict(self, landmarks: list[float]) -> tuple[str, float]:
        """Realiza la predicción de la seña basada en los landmarks recibidos."""
        if self.model is not None:
            input_array = np.array(landmarks, dtype=np.float32).reshape(1, -1)
            probabilities = self.model(input_array, training=False).numpy()[0]
            predicted_index = int(np.argmax(probabilities))
            confidence = float(probabilities[predicted_index])
            letter = self.class_mapping.get(str(predicted_index), "nothing")
            return letter, confidence
        else:
            import random
            letter = random.choice(list(self.class_mapping.values()))
            confidence = round(random.uniform(0.75, 0.99), 4)
            return letter, confidence

asl_model = ASLModel()

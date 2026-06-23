from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
MODEL_PATH = BASE_DIR / "ml" / "salidas" / "modelo_asl.keras"
MAPEO_CLASES_PATH = BASE_DIR / "ml" / "salidas" / "mapeo_clases.json"

NUM_LANDMARKS = 63
NUM_CLASSES = 29

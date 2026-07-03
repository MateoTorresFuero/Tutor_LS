import { useEffect, useRef, useState, useCallback } from "react";

const BUFFER_SIZE = 8;

export function useWebSocket(url) {
  const wsRef = useRef(null);
  const bufferRef = useRef([]);
  const [prediction, setPrediction] = useState(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onopen = () => setConnected(true);
    ws.onclose = () => {
      setConnected(false);
      bufferRef.current = [];
    };
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (!data.letra) return;

      bufferRef.current.push(data);
      if (bufferRef.current.length > BUFFER_SIZE) {
        bufferRef.current.shift();
      }

      const conteo = {};
      for (const p of bufferRef.current) {
        conteo[p.letra] = (conteo[p.letra] || 0) + 1;
      }

      const [letra, frecuencia] = Object.entries(conteo).sort((a, b) => b[1] - a[1])[0];

      if (frecuencia >= Math.ceil(BUFFER_SIZE / 2)) {
        const confianzaPromedio =
          bufferRef.current
            .filter((p) => p.letra === letra)
            .reduce((sum, p) => sum + p.confianza, 0) / frecuencia;

        setPrediction({ letra, confianza: parseFloat(confianzaPromedio.toFixed(4)) });
      }
    };

    return () => ws.close();
  }, [url]);

  const sendLandmarks = useCallback((landmarks) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ landmarks }));
    }
  }, []);

  return { prediction, connected, sendLandmarks };
}

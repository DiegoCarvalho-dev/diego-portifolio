import { useRef, useEffect } from "react";
import "./Lightning.css";

interface LightningProps {
  hue?: number;
  xOffset?: number;
  speed?: number;
  intensity?: number;
  size?: number;
}

const Lightning = ({
  hue = 230,
  xOffset = 0,
  speed = 1,
  intensity = 1,
  size = 1,
}: LightningProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawLightning = () => {
      // Limpar canvas
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += speed * 0.01;

      // Desenhar raios roxos
      for (let i = 0; i < intensity * 3; i++) {
        const randomX =
          Math.sin(time * (0.5 + i * 0.1) + xOffset) * canvas.width * 0.5 +
          canvas.width * 0.5;
        const randomY =
          Math.cos(time * (0.3 + i * 0.08)) * canvas.height * 0.5 +
          canvas.height * 0.5;

        // Cor roxo com hue
        const hueValue = (hue + i * 20) % 360;
        ctx.strokeStyle = `hsl(${hueValue}, 100%, ${50 + intensity * 20}%)`;
        ctx.lineWidth = size * (2 + Math.sin(time + i) * 1);
        ctx.globalAlpha = intensity * (0.5 + Math.cos(time * 2 + i) * 0.3);

        // Desenhar raio
        ctx.beginPath();
        ctx.moveTo(randomX, 0);
        ctx.lineTo(randomX + Math.sin(time + i) * 100, randomY);
        ctx.lineTo(randomX + Math.cos(time * 1.5 + i) * 150, canvas.height);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(drawLightning);
    };

    drawLightning();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [hue, xOffset, speed, intensity, size]);

  return <canvas ref={canvasRef} className="lightning-container" />;
};

export default Lightning;

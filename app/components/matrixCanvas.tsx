import { useEffect, useRef } from 'react';

export function MatrixCanvasEffect() {
  return (
    <MatrixRain />
  );
}

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const fontName = "Roboto";

    // Load local WOFF2 font using FontFace API (MDN recommended)
    const font = new FontFace(
      fontName,
      "url(../assets/fonts/roboto-mono-v31-latin-regular.woff2)"
    );



    let animationFrameId = 0;

    const chars =
      'アァイィウヴエカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const letters = chars.split('');
    const fontSize = 18;
    const speed = 50;
    let lastFrameTime = 0;

    const staticText = 'Frontend Entwickler';

    let columns = 0;
    let drops: number[] = [];

    const resizeCanvas = () => {
      console.log(window.innerWidth);
      if (window.innerWidth <= 1230) {
        canvas.width = window.innerWidth;
      } else {
        canvas.width = 1230;
      }
      canvas.height = 450;

      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    };

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    const draw = (timestamp: number) => {
      if (timestamp - lastFrameTime < speed) {
        animationFrameId = window.requestAnimationFrame(draw);
        return;
      }

      lastFrameTime = timestamp;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff66';
      ctx.font = `${fontSize}px '${fontName}', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text =
          letters[Math.floor(Math.random() * letters.length)] ?? '0';

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (
          drops[i] * fontSize > canvas.height &&
          Math.random() > 0.975
        ) {
          drops[i] = 0;
        }

        drops[i] += 1;
      }

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      ctx.save();
      // ctx.font = `bold ${fontSize * 2}px '${fontName}', monospace`;
      // ctx.fillStyle = '#b6ffb6';
      // ctx.textAlign = 'center';
      // ctx.textBaseline = 'middle';

      // const chars = staticText.split('');
      // const totalWidth = chars.length * fontSize;
      // const startX = centerX - totalWidth / 2;

      // chars.forEach((char, index) => {
      //   const charX = startX + index * fontSize;

      //   ctx.fillText(char, charX, centerY);
      // });

      // ctx.restore();

      animationFrameId = window.requestAnimationFrame(draw);
    };

    animationFrameId = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="block h-full w-full -z-1 absolute top-0" />;
}

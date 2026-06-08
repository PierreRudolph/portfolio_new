import { useMemo } from "react";

type Rectangle = {
    top: number;
    left: number;
    width: number;
    height: number;
    rotation: number;
    opacity: number;
    animationDelay: number;
    animationDuration: number;
    animation: string;
};

interface FloatingRectsProps {
    count?: number;
}

const animations = [
    "animate-pulse",
    "animate-ping",
    "animate-bounce",
    "animate-spin",
];

export function FloatingRects({
    count = 15,
}: FloatingRectsProps) {

    const rects = useMemo<Rectangle[]>(() => {
        return Array.from({ length: count }, () => ({
            top: Math.random() * 100,
            left: Math.random() * 100,
            width: 20 + Math.random() * 120,
            height: 20 + Math.random() * 120,
            rotation: -30 + Math.random() * 60,
            opacity: 0.03 + Math.random() * 0.12,
            animationDelay: Math.random() * 5,
            animationDuration: 4 + Math.random() * 8,
            animation: animations[Math.floor(Math.random() * animations.length)]
        }));
    }, [count]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {rects.map((rect, index) => (
                <div
                    key={index}
                    className={`dark:text-white absolute border border-current ${rect.animation} rounded-sm backdrop-blur-sm`}
                    style={{
                        top: `${rect.top}%`,
                        left: `${rect.left}%`,
                        width: `${rect.width}px`,
                        height: `${rect.height}px`,
                        opacity: rect.opacity,
                        transform: `rotate(${rect.rotation}deg)`,
                        animationDelay: `${rect.animationDelay}s`,
                        animationDuration: `${rect.animationDuration}s`,
                    }}
                />
            ))}
        </div>
    );
}
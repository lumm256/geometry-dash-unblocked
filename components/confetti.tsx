// components/Confetti.tsx - 修复版
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

interface ConfettiProps {
  isActive: boolean;
  onComplete?: () => void;
  duration?: number;
  count?: number;
  colors?: string[];
  emojis?: boolean;
}

const DEFAULT_COLORS = [
  "#FFD700", // 金色
  "#FF6347", // 红色
  "#00CED1", // 青色
  "#9370DB", // 紫色
  "#3CB371", // 绿色
  "#FF8C00", // 橙色
  "#BA55D3", // 紫红
  "#1E90FF", // 蓝色
];

export default function Confetti({
  isActive,
  onComplete,
  duration = 6000,
  count = 150,
  colors = DEFAULT_COLORS,
  emojis = true,
}: ConfettiProps) {
  // 自动结束效果
  useEffect(() => {
    if (isActive && onComplete) {
      const timer = setTimeout(() => {
        onComplete();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isActive, duration, onComplete]);

  // 生成随机纸屑
  const generateConfetti = () => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // 横向位置百分比
      y: -20 - Math.random() * 100, // 从屏幕上方开始
      size: 3 + Math.random() * 7,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      delay: Math.random() * 0.5,
      shape: Math.random() > 0.7 ? "circle" : "square", // 随机形状
    }));
  };

  const particles = generateConfetti();

  return (
    <AnimatePresence>
      {isActive && (
        <>
          {/* 关键修改: 使用fixed定位并附加到body，确保撒花覆盖整个视口 */}
          <div
            className="fixed inset-0 w-screen h-screen pointer-events-none"
            style={{
              zIndex: 9999,
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
            }}
          >
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                initial={{
                  x: `${particle.x}vw`, // 使用视口宽度单位
                  y: `${particle.y}vh`, // 使用视口高度单位
                  rotate: 0,
                  opacity: 1,
                }}
                animate={{
                  y: "120vh",
                  x: `${particle.x + (Math.random() * 20 - 10)}vw`,
                  rotate: particle.rotation * 2,
                  opacity: 0,
                }}
                transition={{
                  duration: 2.5 + Math.random() * 3.5,
                  delay: particle.delay,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                style={{
                  position: "absolute",
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  backgroundColor: particle.color,
                  borderRadius: particle.shape === "circle" ? "50%" : "0%",
                }}
              />
            ))}
          </div>

          {/* 庆祝emoji动画 - 也使用fixed定位 */}
          {emojis && (
            <motion.div
              className="fixed top-0 left-0 right-0 flex justify-center"
              style={{ zIndex: 9999 }}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 50, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl">🎉 🎊 🥳</div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}


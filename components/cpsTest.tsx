// components/CPSTest.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Confetti from "./confetti"; // 导入封装的组件

const TIMER_OPTIONS = [1, 5, 10, 15];

// CPS评级数据
const CPS_RATINGS = [
  {
    min: 0,
    max: 4,
    level: "Beginner",
    color: "#6b7280",
    description: "Basic level of most computer users",
  },
  {
    min: 4,
    max: 6,
    level: "Average",
    color: "#60a5fa",
    description: "Average user click speed",
  },
  {
    min: 6,
    max: 8,
    level: "Good",
    color: "#10b981",
    description: "Above average, good for casual gaming",
  },
  {
    min: 8,
    max: 10,
    level: "Great",
    color: "#84cc16",
    description: "Very good clicking speed",
  },
  {
    min: 10,
    max: 12,
    level: "Professional",
    color: "#facc15",
    description: "Professional level for most games",
  },
  {
    min: 12,
    max: 15,
    level: "Expert",
    color: "#f59e0b",
    description: "Expert level seen in competitive gaming",
  },
  {
    min: 15,
    max: 20,
    level: "Master",
    color: "#ef4444",
    description: "Master level, rare even among gamers",
  },
  {
    min: 20,
    max: Infinity,
    level: "Legendary",
    color: "#9333ea",
    description: "Legendary speed at human limits",
  },
];

// 获取CPS评级
const getCPSRating = (cps: number) => {
  for (const rating of CPS_RATINGS) {
    if (cps >= rating.min && cps < rating.max) {
      return rating;
    }
  }
  return CPS_RATINGS[CPS_RATINGS.length - 1];
};

// 获取平均CPS的参考值
const getAverageComparison = (cps: number) => {
  const avgCps = 5; // 平均水平参考值
  const percentage = ((cps - avgCps) / avgCps) * 100;

  if (percentage >= 0) {
    return `${percentage.toFixed(0)}% faster than average`;
  } else {
    return `${Math.abs(percentage).toFixed(0)}% slower than average`;
  }
};

export default function CPSTest() {
  const [clicks, setClicks] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [selectedTime, setSelectedTime] = useState(5);
  interface Result {
    totalClicks: number;
    cps: number;
    rating: {
      min: number;
      max: number;
      level: string;
      color: string;
      description: string;
    };
    comparison: string;
  }

  const [result, setResult] = useState<Result | null>(null);
  interface HistoryRecord {
    clicks: number;
    cps: number;
    time: number;
    rating: string;
  }

  const [history, setHistory] = useState<HistoryRecord[]>([]);
  const [clickPos, setClickPos] = useState<{ x: number; y: number } | null>(
    null
  );
  const [showInfo, setShowInfo] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  // Start test
  const startTest = useCallback(() => {
    setIsActive(true);
    setClicks(0);
    setTimeLeft(selectedTime);
    setResult(null);
    setShowConfetti(false);
  }, [selectedTime]);

  // Handle click
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isActive) {
        setClicks((prev) => prev + 1);
        // Record click position for animation
        const rect = e.currentTarget.getBoundingClientRect();
        setClickPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });

        setTimeout(() => setClickPos(null), 200);
      }
    },
    [isActive]
  );

  // Reset test
  const resetTest = useCallback(() => {
    setIsActive(false);
    setClicks(0);
    setTimeLeft(selectedTime);
    setResult(null);
    setShowConfetti(false);
  }, [selectedTime]);

  // Timer logic
  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      setIsActive(false);
      // Calculate result
      const cps = clicks / selectedTime;
      const rating = getCPSRating(cps);
      const newResult = {
        totalClicks: clicks,
        cps,
        rating,
        comparison: getAverageComparison(cps),
      };
      setResult(newResult);

      // Save to history
      setHistory((prev) => [
        ...prev,
        {
          clicks,
          cps,
          time: selectedTime,
          rating: rating.level,
        },
      ]);

      // Show celebration effect!
      setShowConfetti(true);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, selectedTime]);

  // Calculate progress
  const progress = (timeLeft / selectedTime) * 100;

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto">
      {/* Left column - Test area */}
      <div className="relative w-full lg:w-3/5 p-6 border border-gray-300 rounded-lg shadow-sm overflow-hidden">
        {/* 使用封装后的Confetti组件 */}
        <Confetti
          isActive={showConfetti}
          onComplete={() => setShowConfetti(false)}
          duration={6000}
          count={150}
          // 可以添加高分时的特殊颜色
          colors={
            result && result.cps > 15
              ? ["#FFD700", "#FFA500", "#FF4500", "#FF8C00"] // 高分使用金色系
              : undefined // 普通分数使用默认颜色
          }
        />

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          CPS Test
        </h2>

        {/* Time selector */}
        {!isActive && (
          <div className="mb-6">
            <p className="text-sm mb-2 text-gray-600">
              Select test duration (seconds):
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {TIMER_OPTIONS.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2 rounded-md border transition-all ${
                    selectedTime === time
                      ? "bg-blue-50 border-blue-400 text-blue-700 font-medium"
                      : "border-gray-300 hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Status display */}
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-6"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="text-lg text-gray-800">
                  <span className="font-bold text-xl">{clicks}</span> clicks
                </div>
                <div className="text-lg text-gray-800">
                  Time left:{" "}
                  <span className="font-bold text-xl">{timeLeft}</span>s
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-100 rounded-full h-2.5 mb-6">
                <div
                  className="bg-blue-500 h-2.5 rounded-full transition-all duration-200"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Click area */}
        <div
          onClick={handleClick}
          className={`relative mb-6 flex items-center justify-center w-full h-60 rounded-lg overflow-hidden cursor-pointer border-2 ${
            isActive
              ? "border-blue-400 hover:bg-blue-50 active:bg-blue-100"
              : "border-gray-300"
          }`}
        >
          {/* Click effect animation */}
          {clickPos && (
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute w-10 h-10 bg-blue-200/70 rounded-full -ml-5 -mt-5"
              style={{
                left: clickPos.x,
                top: clickPos.y,
              }}
            />
          )}

          {isActive ? (
            <p className="text-xl font-medium text-gray-800">Click here!</p>
          ) : result ? (
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Test Results
              </h3>

              {/* Enhanced result display */}
              <div className="flex items-center justify-center mb-3">
                <span
                  className="text-4xl font-bold mr-3"
                  style={{ color: result.rating.color }}
                >
                  {result.cps.toFixed(2)}
                </span>
                <span className="text-xl text-gray-600">CPS</span>
              </div>

              <div
                className="mb-4 p-3 rounded-lg"
                style={{ backgroundColor: `${result.rating.color}20` }}
              >
                <div
                  className="text-xl font-semibold"
                  style={{ color: result.rating.color }}
                >
                  {result.rating.level}
                </div>
                <p className="text-sm text-gray-700">
                  {result.rating.description}
                </p>
                <p className="text-sm font-medium mt-2">{result.comparison}</p>
              </div>

              <p className="mt-2 text-gray-700">
                Total clicks:{" "}
                <span className="font-bold">{result.totalClicks}</span> in{" "}
                {selectedTime} seconds
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <p className="text-lg text-gray-600 text-center mb-3">
                Ready to test your clicking speed?
              </p>
              <button
                onClick={startTest}
                className="px-8 py-3 bg-blue-500 text-white rounded-md font-medium text-lg hover:bg-blue-600 transition-colors"
              >
                Start Test
              </button>
            </div>
          )}
        </div>

        {/* Control buttons */}
        {(isActive || result) && (
          <div className="flex justify-center gap-4">
            {isActive && (
              <button
                onClick={resetTest}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            )}

            {result && (
              <button
                onClick={startTest}
                className="px-6 py-2 bg-blue-500 text-white rounded-md font-medium transition-colors hover:bg-blue-600"
              >
                Test Again
              </button>
            )}
          </div>
        )}

        {/* History section */}
        {history.length > 0 && (
          <div className="p-6 mt-9 border border-gray-300 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4 text-gray-800">
              Your History
            </h3>
            <div className="border border-gray-200 rounded-md overflow-y-auto max-h-72">
              <table className="w-full text-sm text-gray-700">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="py-2 px-3 text-left">Rating</th>
                    <th className="py-2 px-3 text-right">CPS</th>
                    <th className="py-2 px-3 text-right">Clicks</th>
                    <th className="py-2 px-3 text-right">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((record, idx) => {
                    const ratingInfo =
                      CPS_RATINGS.find((r) => r.level === record.rating) ||
                      CPS_RATINGS[0];
                    return (
                      <tr key={idx} className="border-t border-gray-100">
                        <td className="py-2 px-3 text-left">
                          <span
                            className="font-medium"
                            style={{ color: ratingInfo.color }}
                          >
                            {record.rating}
                          </span>
                        </td>
                        <td className="py-2 px-3 text-right font-medium">
                          {record.cps.toFixed(2)}
                        </td>
                        <td className="py-2 px-3 text-right">
                          {record.clicks}
                        </td>
                        <td className="py-2 px-3 text-right">{record.time}s</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Right column - Info and history */}
      <div className="w-full lg:w-2/5 flex flex-col gap-6">
        {/* CPS Rating Information */}
        <div className="p-6 border border-gray-300 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              CPS Rating Guide
            </h3>
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="text-blue-500 text-sm hover:underline"
            >
              {showInfo ? "Hide details" : "Show details"}
            </button>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            CPS (Clicks Per Second) measures how quickly you can click. Higher
            rates are advantageous in gaming and other tasks requiring rapid
            input.
          </p>

          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="space-y-2">
                  {CPS_RATINGS.map((rating, index) => (
                    <div
                      key={index}
                      className="flex items-center p-2 rounded-md"
                      style={{ backgroundColor: `${rating.color}15` }}
                    >
                      <div
                        className="w-3 h-3 rounded-full mr-3"
                        style={{ backgroundColor: rating.color }}
                      ></div>
                      <div className="flex flex-grow justify-between items-center">
                        <span
                          className="font-medium"
                          style={{ color: rating.color }}
                        >
                          {rating.level}
                        </span>
                        <span className="text-sm text-gray-600">
                          {rating.min}-
                          {rating.max === Infinity ? "∞" : rating.max} CPS
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-sm text-gray-600">
                  <p className="mb-2 font-medium">Application Context:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>For Minecraft PVP: 8-12 CPS is considered good</li>
                    <li>For most games: 6-8 CPS is sufficient</li>
                    <li>Professional gamers typically reach 10-15 CPS</li>
                    <li>Average computer users: 4-6 CPS</li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}


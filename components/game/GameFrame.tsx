"use client";
import React, { useEffect, useRef, useState } from "react";

interface GameFrameProps {
  src: string;
}

const GameFrame: React.FC<GameFrameProps> = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const iframeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleStartGame = () => {
    setGameStarted(true);
    // Try to resume audio context if available
    if (typeof window !== "undefined" && window.AudioContext) {
      try {
        const audioContext = new (window.AudioContext ||
          (window as any).webkitAudioContext)();
        if (audioContext.state === "suspended") {
          audioContext.resume();
        }
      } catch (error) {
        console.log("AudioContext initialization handled by iframe");
      }
    }
  };

  // Preload iframe document when component becomes visible
  useEffect(() => {
    if (isVisible && !gameStarted) {
      // Only prefetch the iframe document itself
      const iframeLink = document.createElement("link");
      iframeLink.rel = "prefetch";
      iframeLink.href = src;
      iframeLink.as = "document";
      document.head.appendChild(iframeLink);

      return () => {
        if (document.head.contains(iframeLink)) {
          document.head.removeChild(iframeLink);
        }
      };
    }
  }, [isVisible, gameStarted, src]);

  return (
    <>
      <div
        ref={iframeRef}
        className="game-frame-container w-[85%] flex justify-startflex-wrap"
      >
        {!isVisible ? (
          <div className="mb-4 w-full md:max-w-[760px] min-h-[600px] px-3 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="animate-pulse text-gray-500 dark:text-gray-400">
                🎮 Game loading...
              </div>
            </div>
          </div>
        ) : !gameStarted ? (
          <div className="mb-4 w-full md:max-w-[760px] min-h-[600px] px-3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-200 dark:border-blue-700">
            <div className="text-center">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                Ready to Play?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                Click the button below to start the game and enable audio
              </p>
              <button
                onClick={handleStartGame}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-2 mx-auto"
              >
                <span className="text-xl">🚀</span>
                Start Game
              </button>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                🔊 Audio will be enabled after clicking
              </p>
            </div>
          </div>
        ) : (
          <>
            <iframe
              src={src}
              allowFullScreen
              loading="eager"
              rel="nofollow"
              allow="autoplay; microphone; camera; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={() => setIsLoaded(true)}
              className="mb-4 w-full md:max-w-[760px] min-h-[600px] px-3"
              style={{ display: isLoaded ? "block" : "none" }}
            ></iframe>
            {!isLoaded && (
              <div className="mb-4 w-full md:max-w-[760px] min-h-[600px] px-3 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin text-4xl mb-4">⚡</div>
                  <div className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                    Loading game...
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-500">
                    This may take a few seconds
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      {/* <div className="w-80 mx-5">
        <span className="font-bold text-xl text-blue-600">How to play</span>
        <br />
        ● Start - [Green Flag] <br />
        ● JUMP - [Space], [W], [Up], [Ctr] or clicking the mouse <br />
        ● PAUSE - [P] is to pause. <br />
        ● LAG - [L] to toggle the special effects <br />
        ● Restart - [Green Flag] <br />
        <br />
      </div> */}
    </>
  );
};

export default GameFrame;


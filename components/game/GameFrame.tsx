import React from "react";

interface GameFrameProps {
  src: string;
  width: string;
  height: string;
}

const GameFrame: React.FC<GameFrameProps> = ({ src, width, height }) => {
  return (
    <div className="game-frame-container flex justify-between">
      <iframe
        src={src}
        width={width}
        height={height}
        allowFullScreen
        rel="nofollow"
      ></iframe>
      <div className="w-80 mx-5">
        <span className="font-bold text-xl text-blue-600">Instructions</span>
        <br />
        <br />
        ● Start - [Green Flag] <br />
        ● JUMP - [Space], [W], [Up], [Ctr] or clicking the mouse <br />
        ● PAUSE - [P] is to pause. <br />
        ● LAG - [L] to toggle the special effects <br />
        ● Restart - [Green Flag] <br />
        <br />
        Only the top 500 scores are recorded <br />
        Hope you enjoy!
      </div>
    </div>
  );
};

export default GameFrame;


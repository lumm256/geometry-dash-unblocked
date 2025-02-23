import React from "react";

interface GameFrameProps {
  src: string;
}

const GameFrame: React.FC<GameFrameProps> = ({ src }) => {
  return (
    <>
      <div className="game-frame-container w-[55%] flex justify-center flex-wrap">
        <iframe
          src={src}
          allowFullScreen
          rel="nofollow"
          className="mb-4 w-full min-h-[600px] px-3"
        ></iframe>
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


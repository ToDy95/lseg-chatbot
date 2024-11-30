import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Loader = () => {
  return (
    <div className="text-blue-500 opacity-85 flex gap-2 text-xs">
      LSEG BOT is typing
      <TypeAnimation
        sequence={['●', 100, '●', 100, '●●●', 100]}
        wrapper="span"
        speed={25}
        style={{ fontSize: '12px', display: 'inline-block' }}
        repeat={Infinity}
      />
    </div>
  );
};

export { Loader };

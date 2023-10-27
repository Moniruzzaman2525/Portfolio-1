import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

const CustomCursor = () => {
  return (
    <AnimatedCursor
      // innerSize={12}
      outerSize={12}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
  );
};

export default CustomCursor;

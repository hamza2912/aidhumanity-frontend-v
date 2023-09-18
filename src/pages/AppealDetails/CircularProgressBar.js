import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar(props) {
  let percentage = props.percentage;
  if (percentage > 100) percentage = 100;
  const { fontSize, width, height } = props.style;
  const rotateDeg = 180 - (percentage * 3.6) / 2;
  const style = {
    position: 'relative',
    width: width,
    height: height,
    overflow: 'hidden',
    borderRadius: '100%',
  };

  return (
    <div style={style}>
      <CircularProgressbar
        value={percentage}
        background
        backgroundPadding={0}
        styles={{
          root: {
            transform: `rotate(${rotateDeg}deg)`,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          },
          background: {
            fill: '#102558',
          },
          path: {
            stroke: '#00ade9',
          },
          trail: {
            stroke: 'transparent',
            transform: 'rotate(90deg)',
            transformOrigin: 'center center',
            rotation: 1 / 7 + 1 / 10,
          },
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: `${
            percentage > 50
              ? percentage + 5
              : percentage < 50
              ? percentage - 5
              : percentage
          }%`,
          background: '#00ade9',
          opacity: '0.5',
        }}
      ></div>
      <div 
        className='top-0 bottom-0 left-0 right-0 mx-auto w-fit my-auto h-5 flex'
        style={{
          position: 'absolute',
          // top: '50%',
          // left: 0,
          // width: '100%',
          // transform: `translateY(105%) ${
          //   percentage > 9 && percentage < 100
          //     ? 'translateX(32%)'
          //     : percentage < 10
          //     ? 'translateX(40%)'
          //     : percentage > 99
          //     ? 'translateX(25%)'
          //     : ''
          // }`,
          fontWeight: 'bold',
          color: '#fff',
          zIndex: '1',
          fontSize: fontSize,
        }}
      >
        {/* <div className="font flex h-2">
          <span>{percentage || 0}</span>
          <span className="text-[0.5rem] mt-1 font-normal">%</span>
        </div> */}
          <span>{percentage || 0}</span>
          <span className="text-[0.5rem] mt-1 font-normal">%</span>
      </div>
    </div>
  );
}

export default CircularProgressBar;

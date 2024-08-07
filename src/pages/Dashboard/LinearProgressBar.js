import React from 'react';

function LinearProgressBar(props) {
  const progress = props.progress > 100 ? 100 : props.progress;
  const fullDiv = {
    height: 8,
    width: '100%',
    backgroundColor: '#f1f1f1',
    borderRadius: 40,
  };

  const filledDiv = {
    height: '100%',
    width: props.progress >= 100 ? '100%' : `${props.progress}%`,
    backgroundColor: '#00ade9',
    borderRadius: 40,
    textAlign: 'right',
  };

  const progressText = {
    color: '#00C98B',
    fontWeight: 600,
    fontSize: '0.75rem',
  };

  return (
    <>
      {props.textPosition === 'right' ? (
        <div className="flex gap-4 items-center">
          <div style={fullDiv}>
            <div style={filledDiv}></div>
          </div>
          <span style={progressText}>{`${props.progress}%`}</span>
        </div>
      ) : props.textPosition === 'bottom' ? (
        <div className="relative" style={fullDiv}>
          <div style={filledDiv}></div>
          <span
            className="absolute right-0 top-5"
            style={progressText}
          >{`${progress}%`}</span>
        </div>
      ) : null}
    </>
  );
}

export default LinearProgressBar;

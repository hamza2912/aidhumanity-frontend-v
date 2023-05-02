import React from 'react'

function LinearProgressBar(props) {
	
	const fullDiv = {
		height: 10,
    width: "100%",
		backgroundColor: '#f1f1f1',
		borderRadius: 40,
	}
  
	const filledDiv = {
		height: '100%',
		width: `${props.progress}%`,
		backgroundColor: "#00ade9",
	  borderRadius:40,
		textAlign: 'right'
	}
	
	const progressText = {
		color: '#00C98B',
		fontWeight: 600,
    fontSize: "0.75rem"
	}
    
  return (
    <>
      {props.isTextRight ? (
        <div className='flex gap-8 items-center'>
          <div style={fullDiv}>
            <div style={filledDiv}></div>
          </div>
          <span style={progressText}>{`${props.progress}%`}</span>
        </div>
      ) : props.isTextBelow ? (
        <div className='relative' style={fullDiv}>
          <div style={filledDiv}></div>
          <span className='absolute right-0 top-5' style={progressText}>{`${props.progress}%`}</span>
        </div>
      ) : null}
    </>
  )
}

export default LinearProgressBar;

import React from 'react'

function Linear_progress_bar(props) {
	
	const parentDiv = {
		height: 10,
    width: "100%",
		backgroundColor: '#f1f1f1',
		borderRadius: 40,
	}
  const parentDiv2 = {
		height: 10,
    width: "100%",
		backgroundColor: '#f1f1f1',
		borderRadius: 40,
	}
	
	const childDiv = {
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
  
  const option = props.option
  if (option == 1) {
    return (
      <div className='flex gap-8 items-center'>
        <div style={parentDiv}>
          <div style={childDiv}></div>
        </div>
        <span style={progressText}>{`${props.progress}%`}</span>
      </div>
    )
  }
  if (option == 2) {
    return (
      <div className='relative' style={parentDiv2}>
        <div style={childDiv}></div>
        <span className='absolute right-0 top-5' style={progressText}>{`${props.progress}%`}</span>
      </div>
    )
  }	
}

export default Linear_progress_bar;

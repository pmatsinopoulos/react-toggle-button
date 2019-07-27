import React from 'react'

const ToggleButton = ({state, clickHandler}) => {
  let style = {backgroundColor: state === 'active' ? 'blue' : 'gray'}
  return (
    <button style={style} onClick={clickHandler}>Button</button>
  )
}

export default ToggleButton
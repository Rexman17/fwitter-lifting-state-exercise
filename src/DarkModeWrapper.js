import React from 'react'

function DarkModeWrapper(props) {
  // console.log("props in DarkModeWrapper", props.children)
  return (
    <div id="wrapper" className={props.darkMode ? "dark-mode" : ""}>
      {props.children}
    </div>
  )
}

export default DarkModeWrapper

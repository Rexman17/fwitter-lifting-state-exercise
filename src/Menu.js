import React from 'react'

function Menu(props) {
  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input onChange={() => props.handleToggle()} type="checkbox" name="public" />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu

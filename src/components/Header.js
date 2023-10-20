import React from 'react'


function Header() {
  return (
    <div className="Header">
        <h3>Mycroft logo</h3>
        <div className="Header-items">
            <h5>Features</h5>
            <h5>About</h5>
            <h5>Compare</h5>
        </div>
        <button>Log in</button>
    </div>
  )
}

export default Header
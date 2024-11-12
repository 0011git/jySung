import React from 'react'
import headerStyle from '../styles/header.module.scss'

const Header = () => {
  return (
    <div className={headerStyle.headerWrap}>
        <h1 className='logo'>logo</h1>
        <nav>
            <ul>
                <li>profile</li>
                <li>skills</li>
                <li>portfolio</li>
                <li>others</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
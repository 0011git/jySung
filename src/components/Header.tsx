import React from 'react'
import headerStyle from '../styles/header.module.scss'

// 헤더 클릭 시 스크롤 하는 법
// https://developer.mozilla.org/ko/docs/Web/API/Element/scrollIntoView
// 스크롤 할 위치는 스크롤 함수 안에서 document.queryselector로 잡기

const Header = () => {
  return (
    <div className={headerStyle.headerWrap}>
        <a href="/" className={headerStyle.linkLogo}>
          <h1 className='logo'></h1>
        </a>
        
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
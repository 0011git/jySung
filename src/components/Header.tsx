import React from 'react'
import headerStyle from '../styles/header.module.scss'
import Link from 'next/link'

// 헤더 클릭 시 스크롤 하는 법
// https://developer.mozilla.org/ko/docs/Web/API/Element/scrollIntoView
// 스크롤 할 위치는 스크롤 함수 안에서 document.queryselector로 잡기

const Header = () => {
  return (
    <div className={headerStyle.headerWrap}>
        <Link href="/" className={headerStyle.linkLogo}>
          <h1 className='logo'></h1>
        </Link>
        
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
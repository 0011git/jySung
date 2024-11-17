"use client"
import React from 'react'
import headerStyle from '../styles/header.module.scss'
import Link from 'next/link'

// 헤더 클릭 시 스크롤 하는 법
// https://developer.mozilla.org/ko/docs/Web/API/Element/scrollIntoView
// 스크롤 할 위치는 스크롤 함수 안에서 document.queryselector로 잡기

const Header = () => {

  const scrollToSection = (target:string) => {
    const profile = document.querySelector('#profile-section');
    const skills = document.querySelector('#skills-section');
    const portfolio = document.querySelector('#portfolio-section');
    const others = document.querySelector('#others-section');

    switch(target){
      case "profile":
        profile?.scrollIntoView({behavior: 'smooth'})
        break;
      case "skills":
        skills?.scrollIntoView({behavior: 'smooth'})
        break;
      case "portfolio":
        portfolio?.scrollIntoView({behavior: 'smooth'})
        break;
      case "others":
        others?.scrollIntoView({behavior: 'smooth'})
        break;
      default:
        // 아무것도 안함
        break;
    }
  }

  return (
    <div className={headerStyle.headerWrap}>
        <Link href="/" className={headerStyle.linkLogo}>
          <h1 className='logo'></h1>
        </Link>
        
        <nav>
            <ul>
                <li onClick={() => scrollToSection("profile")}>profile</li>
                <li onClick={() => scrollToSection("skills")}>skills</li>
                <li onClick={() => scrollToSection("portfolio")}>portfolio</li>
                <li onClick={() => scrollToSection("others")}>others</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
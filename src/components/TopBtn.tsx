"use client"
import React from 'react'
import topBtnStyle from '../styles/topbtn.module.scss'

const TopBtn = () => {

  const scrollToTop = () => {
    const visual = document.querySelector('#visual-section');
    visual?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className={topBtnStyle.topBtnWrap} onClick={() => scrollToTop()}>
      <button type='button'></button>
    </div>
  )
}

export default TopBtn
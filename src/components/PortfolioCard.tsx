import React from 'react'
import portfolioCardStyle from '@/styles/portfolioCard.module.scss'
import Image from 'next/image'

const PortfolioCard = () => {
  return (
    <figure className={portfolioCardStyle.portfolioCardWrap}>
        <div className={portfolioCardStyle.thumbnailWrap}>
            {/* <Image src='#' alt='#' width={960} height={640}/> */}
            <img src='#' alt='포트폴리오 대표 썸네일' />
        </div>
        <figcaption className={portfolioCardStyle.descriptionWrap}>
            <h4 className={portfolioCardStyle.title}>Seoul, W</h4>
            <span className={portfolioCardStyle.when}>2024.01.01 ~ 2024.01.31</span>
            <ul className={portfolioCardStyle.usedSkillsWrap}>
                <li className={portfolioCardStyle.skill}>기술1</li>
                <li className={portfolioCardStyle.skill}>기술2</li>
                <li className={portfolioCardStyle.skill}>기술3</li>
                <li className={portfolioCardStyle.skill}>기술4</li>
                <li className={portfolioCardStyle.skill}>기술5</li>
            </ul>
            <p className={portfolioCardStyle.summary}>프로젝트 한 줄 설명입니다. 프로젝트에 관한 간단한 개요 및 사이트에 관한 설명을 작성합니다.</p>
        </figcaption>
        
    </figure>
  )
}

export default PortfolioCard
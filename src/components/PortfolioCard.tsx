import React from 'react'
import portfolioCardStyle from '@/styles/portfolioCard.module.scss'
import Image from 'next/image'
import portfolio from '@/data/portfolio.json'

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
              {
                portfolio.team[0].techs.map((tech) => {
                  return <li className={portfolioCardStyle.skill}>
                  <img src={tech} />
                </li>
                })
              }
                {/* <li className={portfolioCardStyle.skill}><img src={portfolio.team[0].techs[1]} /></li>
                <li className={portfolioCardStyle.skill}>기술3</li>
                <li className={portfolioCardStyle.skill}>기술4</li>
                <li className={portfolioCardStyle.skill}>기술5</li> */}
            </ul>
            <p className={portfolioCardStyle.summary}>서울 문화 공연 정보 제공 PWA 사이트입니다.</p>
        </figcaption>
        
    </figure>
  )
}

export default PortfolioCard
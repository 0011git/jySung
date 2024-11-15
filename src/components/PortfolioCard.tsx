import React from 'react'
import portfolioCardStyle from '@/styles/portfolioCard.module.scss'
import portfolio from '@/data/portfolio.json'
import { PortfolioItemType } from '../type/types'



const PortfolioCard = ({item, setPopupItem, setIsClicked}:{item:PortfolioItemType, setPopupItem:any, setIsClicked:any}) => {
  return (
    <figure className={portfolioCardStyle.portfolioCardWrap} onClick={() => {setPopupItem(item); setIsClicked(true);}}>
        <div className={portfolioCardStyle.thumbnailWrap}>
            <img src={item.thumbnail} alt={`${item.title} 썸네일`} />
        </div>
        <figcaption className={portfolioCardStyle.descriptionWrap}>
            <h4 className={portfolioCardStyle.title}>{item.title}</h4>
            <span className={portfolioCardStyle.when}>{item.date[0]} ~ {item.date[1]}</span>
            <ul className={portfolioCardStyle.usedSkillsWrap}>
              {
                item.techs.map((tech) => {
                  return <li className={portfolioCardStyle.skill}>
                  <img src={tech} />
                </li>
                })
              }
            </ul>
            <p className={portfolioCardStyle.summary}>{item.summary[0]}</p>
        </figcaption>
        
    </figure>
  )
}

export default PortfolioCard
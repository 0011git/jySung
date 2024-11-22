import React from 'react'
import portfolioCardStyle from '@/styles/portfolioCard.module.scss'
import { PortfolioItemType } from '../type/types'

interface PortfolioCardProps {
  item: PortfolioItemType; // PortfolioItemType 타입을 갖는 item
  setPopupItem: React.Dispatch<React.SetStateAction<PortfolioItemType> >; // setPopupItem은 PortfolioItemType 또는 null을 받을 수 있는 함수
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>; // setIsClicked는 boolean 타입을 상태로 다루는 함수
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({item, setPopupItem, setShowModal}) => {
  return (
    <figure className={portfolioCardStyle.portfolioCardWrap} onClick={() => {setPopupItem(item); setShowModal(true);}}>
        <div className={portfolioCardStyle.thumbnailWrap}>
            <img src={item.thumbnail} alt={`${item.title} 썸네일`} />
        </div>
        <figcaption className={portfolioCardStyle.descriptionWrap}>
            <h4 className={portfolioCardStyle.title}>{item.title}</h4>
            <span className={portfolioCardStyle.when}>{item.date[0]} ~ {item.date[1]}</span>
            <ul className={portfolioCardStyle.usedSkillsWrap}>
              {
                item.techs.map((tech) => {
                  return <li className={portfolioCardStyle.skill} key={tech}>
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
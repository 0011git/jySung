import React from 'react'
import popupStyle from '@/styles/portfolioPopup.module.scss'
import { PortfolioItemType } from '../type/types'
import Link from 'next/link';

interface popupProps {
    popupItem: PortfolioItemType;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  }


const PortfolioPopup: React.FC<popupProps> = ({popupItem, setShowModal}) => {
    
    
    const closePopup = () => {
        const resetScroll = () => {
            const top = document.querySelector('#popup-container');
            top?.scrollIntoView()
        }
        resetScroll();
        setShowModal(false);
        
    }


  return (
    <div className={popupStyle.PortfolioPopupWrap} onClick={() => closePopup()}>
        <div className={popupStyle.popupBox} onClick={(e) => e.stopPropagation()}>
            <div id="popup-container" className={popupStyle.container}>
                <div className={popupStyle.infoWrap}>
                    <span className={popupStyle.closeBtnWrap}>
                        <button onClick={() => closePopup()}></button>
                    </span>
                    <span className={popupStyle.work}>
                        {popupItem.type === "team" ? '팀' : '개인'} 프로젝트
                    </span>
                    <h2 className={popupStyle.title}>
                        {popupItem.title} {popupItem.subtitle}
                    </h2>
                    <span className={popupStyle.when}>
                        {popupItem.date[0]} ~ {popupItem.date[1]} {popupItem.type === "team" ? `(${popupItem.people.length}인)` : null }
                    </span>
                    <ul className={popupStyle.links}>
                        <li className={`${popupStyle.github} ${popupStyle.linkCommon}`}>
                            <a href={popupItem.github} target="_blank">{popupItem.github}</a>
                        </li>
                        <li className={`${popupStyle.distribution} ${popupStyle.linkCommon}`}>
                            <a href={popupItem.link} target="_blank">{popupItem.link}</a>
                        </li>
                        <li className={`${popupStyle.skills} ${popupStyle.linkCommon}`}>
                            <ul className={popupStyle.usedSkillsWrap}>
                            {
                                popupItem.techs.map((tech) => {
                                    return <li className={popupStyle.skill} key={`popup_${tech}`}>
                                        <img src={tech} />
                                    </li>
                                })
                            }
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className={popupStyle.thumbnailWrap}>
                    <div className={popupStyle.imgWrap}>
                        <img src={popupItem.thumbnail} alt={`${popupItem.title} 썸네일`} />
                    </div>
                </div>

                <div className={popupStyle.descriptionWrap}>
                    <p className={popupStyle.summary}>
                        {/* summary[1] */}
                        {popupItem.summary[1]}
                    </p>

                    {
                        popupItem.description.map((description, index) => (
                            <p key={index} className={`${popupStyle[`detail${index + 1}`]} ${popupStyle.detailcommon}`}>
                                {description}
                            </p>
                        ))
                    }

                    {
                        <span>
                            <Link href={popupItem.github} target="_blank" className={popupStyle.linkToGithub}>README 바로가기</Link>
                        </span>
                    }
                </div>

                {
                    popupItem.video === '' ? <div className={popupStyle.videoWrap}></div> :
                        <div className={popupStyle.videoWrap}>
                            <h3>영상</h3>
                            <div className={popupStyle.videoFrame}>
                                {
                                    <iframe 
                                        width="960" 
                                        height="540"
                                        src={`${popupItem.video}&mute=1`} 
                                        title="YouTube video player" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        // referrerpolicy="strict-origin-when-cross-origin" 
                                        // allowfullscreen
                                    >
                                    </iframe>
                                }
                            </div>
                        </div>
                }

                <div className={popupStyle.screenshotWrap}>
                    <h3>스크린샷</h3>
                    <div className={popupStyle.imgsGroup}>
                        {
                            popupItem.screenshot.map((imgsrc) => {
                                return  <div className={popupStyle.imgWrap} key={imgsrc}>
                                    <img src={imgsrc} />
                                </div>
                            })
                        }
                    </div>
                </div>

                <div className={popupStyle.tagWrap}>
                    <span className={`${popupStyle.tag} ${popupStyle.title}`}>{popupItem.title}</span>
                    <span className={`${popupStyle.tag} ${popupStyle.workType}`}>{popupItem.type} project</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PortfolioPopup
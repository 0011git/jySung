import React from 'react'
import popupStyle from '@/styles/portfolioPopup.module.scss'

const PortfolioPopup = () => {
  return (
    <div className={popupStyle.PortfolioPopupWrap}>
        <div className={popupStyle.infoWrap}>
            <span className={popupStyle.closeBtnWrap}><button></button></span>
            <span className={popupStyle.work}>팀 프로젝트</span>
            <h2 className={popupStyle.title}>Seoul, W</h2>
            <span className={popupStyle.when}>2024.01.01 ~ 2024.01.31</span>
            <ul className={popupStyle.links}>
                <li className={`${popupStyle.github} ${popupStyle.linkCommon}`}>
                    <a href='#'>https://0011git.adfadfadf.adfadf</a>
                </li>
                <li className={`${popupStyle.distribution} ${popupStyle.linkCommon}`}>
                    <a href='#'>https://adfadfadf.vercel.app</a>
                </li>
                <li className={`${popupStyle.skills} ${popupStyle.linkCommon}`}>
                    <ul className={popupStyle.usedSkillsWrap}>
                        <li className={popupStyle.skill}>기술1</li>
                        <li className={popupStyle.skill}>기술2</li>
                        <li className={popupStyle.skill}>기술3</li>
                        <li className={popupStyle.skill}>기술4</li>
                        <li className={popupStyle.skill}>기술5</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div className={popupStyle.thumbnailWrap}>
            <div className={popupStyle.imgWrap}>
                <img src='#' />
            </div>
        </div>

        <div className={popupStyle.descriptionWrap}>
            <p className={popupStyle.summary}>
            이전 페이지의 내용을 약간 변경한 사이트 한 줄 요약/설명 입니다.
            </p>
            <p className={`${popupStyle.detail1} ${popupStyle.detailcommon}`}>
                리드미의 요약 부분을 줄글로 작성합니다. 
                주제, 목표, 핵심 기능, 주요 기술 스택, 기간, 개발 인원과 내가 맡은 역할을 작성합니다. 모든 내용은 2~3줄 이내로 작성하도록 합니다. 폰트 크기는 16px이며 line-height는 180%입니다.
            </p>
            <p className={`${popupStyle.detail2} ${popupStyle.detailcommon}`}>
                리드미에 작성한 부분 중 가장 보여주고 싶은 부분을 설명합니다. 이 단락은 3~5줄 이내로 작성하도록 합니다. 폰트 크기는 16px이며 180%로 합니다. 리드미에 작성한 부분 중 가장 보여주고 싶은 부분을 설명합니다. 이 단락은 3~6줄 이내로 작성하도록 합니다. 폰트 크기는 16px이며 180%로 합니다.  리드미에 작성한 부분 중 가장 보여주고 싶은 부분을 설명합니다. 이 단락은 3~6줄 이내로 작성하도록 합니다. 폰트 크기는 16px이며 180%로 합니다. 리드미에 작성한 부분 중 가장 보여주고 싶은 부분을 설명합니다. 이 단락은 3~6줄 이내로 작성하도록 합니다. 폰트 크기는 16px이며 줄간격은 180%로 합니다.
            </p>
            <p className={`${popupStyle.detail3} ${popupStyle.detailcommon}`}>
            마무리 부분은 2~4줄 이내로 작성하도록 합니다. github  리드미에 더 자세한 설명이 있는 경우 어떤 내용이 추가적으로 있는지와 함께 (ex. 기획서 링크, 피그마 디자인, 폴더 구조 등) 해당 링크로 유도하는 멘트를 추가합니다. 폰트 크기는 16px이며 줄간격은 180%로 합니다.
            </p>
        </div>

        <div className={popupStyle.videoWrap}>
            <h3>영상</h3>
            <div className={popupStyle.video}>
                <video></video>
            </div>
        </div>

        <div className={popupStyle.screenshotWrap}>
            <h3>스크린샷</h3>
            <div className={popupStyle.imgsGroup}>
                <div className={popupStyle.imgWrap}>
                    <img src='#' />
                </div>

                <div className={popupStyle.imgWrap}>
                    <img src='#' />
                </div>

                <div className={popupStyle.imgWrap}>
                    <img src='#' />
                </div>

                <div className={popupStyle.imgWrap}>
                    <img src='#' />
                </div>

                <div className={popupStyle.imgWrap}>
                    <img src='#' />
                </div>

                <div className={popupStyle.imgWrap}>
                    <img src='#' />
                </div>
            </div>
        </div>

        <div className={popupStyle.tagWrap}>
            <span className={popupStyle.tag}>Seoul, W</span>
            <span className={popupStyle.tag}>Team Project</span>
        </div>

    </div>
  )
}

export default PortfolioPopup
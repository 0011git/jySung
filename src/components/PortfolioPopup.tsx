import React from 'react'
import popupStyle from '@/styles/portfolioPopup.module.scss'

const PortfolioPopup = () => {
  return (
    <div className={popupStyle.PortfolioPopupWrap}>
        <div className={popupStyle.infoWrap}>
            <span className={popupStyle.closeBtnWrap}><button></button></span>
            <span className={popupStyle.work}>개인 프로젝트</span>
            <h2 className={popupStyle.title}>World News 월드 뉴스</h2>
            <span className={popupStyle.when}>2024.01.01 ~ 2024.01.31 (18일)</span>
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
                {/* summary2 */}
                기존의 노후화된 '다온 펜션' 사이트를 리뉴얼 했습니다.
            </p>
            <p className={`${popupStyle.detail1} ${popupStyle.detailcommon}`}>
                {/* description[0] */}
                다온 펜션 리뉴얼은 저의 첫 팀 프로젝트입니다. 전반적으로 노후화된 기존의 사이트를 리뉴얼해 사용자 경험을 개선하고 만족도를 향상시키는 것을 목표로 했습니다. 개발 환경은 HTML, SCSS, 바닐라 자바스크립트 입니다. 5명의 팀원이 86일간 작업했습니다.
            </p>
            <p className={`${popupStyle.detail2} ${popupStyle.detailcommon}`}>
                {/* description[1] */}
                리뉴얼 사이트 선정, 타겟층 선정, 페르소나 설정, 유스 케이스 및 플로우 차트 작성, 벤치마킹, 자사 장단점 분석 및 차별화 전략 수립, 정보 설계, 계획 수립, 계획서 작성 및 발표, 스토리보드 작성, 리디자인, 마크업, 기능 추가, 반응형 작업, 최종 발표 및 시연, 구현 보고서 작성 순서로 진행했습니다. 저는 리소스 수집과 1차 발표를 담당했고 페이지는 주변 소개와 로그인 관련 페이지를 작업했으며 해당 페이지에서 사용하는 기능을 함께 구현했습니다. 주요 구현 기능은 동적 인터페이스와 로그인 기능입니다.
            </p>
            <p className={`${popupStyle.detail3} ${popupStyle.detailcommon}`}>
                {/* description[2] */}
                다른 프로젝트에 비해 긴 기간 동안 체계적으로 진행되었기 때문에 프로젝트의 시작부터 종료까지 전체 프로세스에 대해 세세하게 배울 수 있었습니다. 또한 SNS 로그인 및 회원가입을 바닐라 자바스크립트로 구현하며 프론트에서의 로그인 프로세스를 공부하고 이해하는 기회가 되었습니다.
                <br />
                보다 자세한 설명은 상단 GitHub 링크의 README를 통해 확인하실 수 있습니다.
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
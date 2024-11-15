"use client"

import mainStyle from "@/styles/main.module.scss";
import { PortfolioItemType, SkillType } from '../type/types'
import skillsData from '../data/skills.json'
import SkillCard from "@/components/SkillCard";
import PortfolioCard from "@/components/PortfolioCard";
import PortfolioPopup from "@/components/PortfolioPopup";
import portfolioData from '@/data/portfolio.json';
import { useState } from "react";



export default function Home() {
  const [popupItem, setPopupItem] = useState<PortfolioItemType>(portfolioData.team[0]);
  const [isClicked, setIsClicked] = useState(false);

  const getAge = (): number => {
    const today = new Date();
    const todayYYYY: number = today.getFullYear();
    const todayDD: number = today.getDate();
    const age: number = (todayDD - 25 >= 0) ? (todayYYYY - 1993) + 1 : (todayYYYY - 1993);
    return age;
  }
  const age: number = getAge();

  const skillsArr: SkillType[] = skillsData.skills;

  return (
    <div className={`${mainStyle.mainStyle} ${isClicked ? 'stopScroll' : ''}`}>
      {/* 0. Visual */}
      <section className={mainStyle.visual}>
        <div className={mainStyle.greeting}>
          <p>반갑습니다,</p>
          <p>프론트엔드 개발자</p>
          <p>성주영입니다.</p>
        </div>
        <div className={mainStyle.mouseWrap}>
            <div className={mainStyle.mouse}></div>
        </div>
      </section>
      {/* 1. 프로필 */}
      <section className={mainStyle.profile}>
        <h2 className={mainStyle.sectionTitleWrap}>
          <strong className={mainStyle.sectionTitle}>profile</strong>
          <em className={mainStyle.sectionSubtitle}>프로필</em>
        </h2>
        <div className={mainStyle.profileContents}>
          <div className={`${mainStyle.personalInfo} ${mainStyle.subContentsCommon}`}>
            <ul>
              <li className={mainStyle.info}>
                <div className={mainStyle.itemWrap}>
                  <h3 className={mainStyle.itemTitle}>name</h3>
                  <p className={mainStyle.name}>성주영(Jooyoung Sung)</p>
                </div>
                <div className={mainStyle.itemWrap}>
                  <h3 className={mainStyle.itemTitle}>birth</h3>
                  <p className={mainStyle.birth}>1993.01.25 (만 {age}세)</p>
                </div>
              </li>
      
              <li className={mainStyle.contact}>
                <div className={mainStyle.itemWrap}>
                  <h3 className={mainStyle.itemTitle}>contact</h3>
                  <p className={mainStyle.email}>0125sjy@gmail.com</p>
                </div>
                <div className={mainStyle.itemWrap}>
                  <h3 className={mainStyle.itemTitle}>channel</h3>
                  <p className={mainStyle.channel}>
                    <a className={mainStyle.github} href="https://github.com/0011git">https://github.com/0011git</a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className={`${mainStyle.introduce} ${mainStyle.subContentsCommon}`}>
            <h3 className={mainStyle.itemTitle}>introduce</h3>
            <p>
              안녕하세요, 프론트엔드 개발자 성주영입니다. 2024년 5월부터 웹 개발에 도전해 현재까지 꾸준히 학습하고 있습니다.
            </p>
            <br />
            <p>
              정말 가치 있는 것은 함께 일할 때 가장 잘 만들어낼 수 있다고 생각합니다. 프론트엔드 개발자 과정을 수료할 때 팀 프로젝트에 적극적으로 참여했고 다른 팀원들의 의견을 경청하며 새로운 것을 배우려고 노력했습니다.
            </p>
            <br />
            <p>
              문제를 찾아 해결하고, 나아가 비즈니스적 가치를 창출하는 것이 개발자의 핵심 역량이라고 생각합니다. 단기적 문제 해결에 집중하기보다는, 근본 원인을 파악하고 상황을 넓은 시각에서 분석한 후 해결 방안을 세우기 위해 노력합니다. 또한 비즈니스에서 가장 중요한 기한 엄수를 위해 계획을 세우고 주기적으로 중간 점검을 진행해 목표를 체계적으로 달성할 수 있도록 합니다.
            </p>
          </div>
          <div className={`${mainStyle.education} ${mainStyle.subContentsCommon}`}>
            <h3 className={mainStyle.itemTitle}>education</h3>
            <ul>
              <li>
                  <p>2024.05 ~ 2024.11</p>
                  <p>강남그린컴퓨터아카데미</p>
                  <p>프론트엔드 웹&앱 개발자 양성과정 수료 </p>
              </li>
              <li>
                <p>2021.09 ~ 2025.02</p>
                <p>국립한국방송통신대학교</p>
                <p>컴퓨터과학 학사 (졸업예정)</p>
              </li>
              <li>
                <p>2011.03 ~ 2016.02</p>
                <p>서울여자대학교</p>
                <p>경영학, 경제학 학사</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* 2. 기술 */}
      <section className={mainStyle.skills}>
        <h2 className={mainStyle.sectionTitleWrap}>
          <strong className={mainStyle.sectionTitle}>skills</strong>
          <em className={mainStyle.sectionSubtitle}>기술</em>
        </h2>
        <ul className={mainStyle.skillCardsWrap}>
          {
            skillsArr.map((item: SkillType, idx: number) => (
              <li className={mainStyle.cardWrap} key={`${item.names[0]}${idx}`}>
                <SkillCard item={item} />
              </li>
            ))
          }
        </ul>
      </section>
      {/* 3. 포트폴리오 */}
      <section className={mainStyle.portfolio}>
        <h2 className={mainStyle.sectionTitleWrap}>
          <strong className={mainStyle.sectionTitle}>portfolio</strong>
          <em className={mainStyle.sectionSubtitle}>포트폴리오</em>
        </h2>
        <div className={mainStyle.portfolioBtnGroup}>
          <div className={mainStyle.btnWrap}><button type="button">Team</button></div>
          <div className={mainStyle.btnWrap}><button type="button">Solo</button></div>
        </div>
        <div className={`${mainStyle.portfolioCommon} ${mainStyle.teamWrap}`}>
          <h3 className={mainStyle.portfolioTitleWrap}>
            <strong className={mainStyle.portfolioTitle}>Team Projects</strong>
            <em className={mainStyle.portfolioSubtitle}>팀 프로젝트</em>
          </h3>
          <ul className={`${mainStyle.teamContents} ${mainStyle.portfolioCardsGroup}`} >
            {/* 큰카드컴포2 */}
            {
              portfolioData.team.map((item:PortfolioItemType)=> (
                <li className={mainStyle.pCardWrap} key={item.title}>
                  <PortfolioCard item={item} setPopupItem={setPopupItem}  setIsClicked={setIsClicked} />
                </li>
              ))
            }
          </ul>
        </div>
        <div className={`${mainStyle.portfolioCommon} ${mainStyle.soloWrap}`}>
          <h3 className={mainStyle.portfolioTitleWrap}>
            <strong className={mainStyle.portfolioTitle}>Solo Projects</strong>
            <em className={mainStyle.portfolioSubtitle}>개인 프로젝트</em>
          </h3>
          <ul className={`${mainStyle.soloContents} ${mainStyle.portfolioCardsGroup}`}>
            {/* {카드컴포2+4} */}
            <li className={mainStyle.bigWrap}>
              <ul>
                {/* <li className={mainStyle.pCardWrap}><PortfolioCard /></li>
                <li className={mainStyle.pCardWrap}><PortfolioCard /></li> */}
              </ul>
            </li>
            <li className={mainStyle.smallWrap}>
              <ul>
                {/* <li className={mainStyle.pCardWrap}><PortfolioCard /></li>
                <li className={mainStyle.pCardWrap}><PortfolioCard /></li>
                <li className={mainStyle.pCardWrap}><PortfolioCard /></li>
                <li className={mainStyle.pCardWrap}><PortfolioCard /></li> */}
              </ul>
            </li>
          </ul>
        </div>
      </section>
      {/* 4. 기타 경험 */}
      <section className={mainStyle.others}>
        <h2 className={mainStyle.sectionTitleWrap}>
          <strong className={mainStyle.sectionTitle}>other experiences</strong>
          <em className={mainStyle.sectionSubtitle}>기타 경험</em>
        </h2>
      </section>
      

      <div className={ isClicked ? 'show' : 'hide'}>
        <PortfolioPopup popupItem={popupItem} setIsClicked={setIsClicked} />
      </div>
    </div>
  );
}
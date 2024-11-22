"use client"

import mainStyle from "@/styles/main.module.scss";
import { PortfolioItemType, SkillType } from '../type/types'
import skillsData from '../data/skills.json'
import SkillCard from "@/components/SkillCard";
import PortfolioCard from "@/components/PortfolioCard";
import PortfolioPopup from "@/components/PortfolioPopup";
import portfolioData from '@/data/portfolio.json';
import { useEffect, useState } from "react";
import Link from "next/link";



export default function Home() {
  const [popupItem, setPopupItem] = useState<PortfolioItemType>(portfolioData.team[0]);
  const [showModal, setShowModal] = useState(false);

  //팀-솔로 버튼 클릭 시 해당 포폴로 스크롤
  const scrollToProject = (target:string) => {
    const team = document.querySelector('#team-project');
    const solo = document.querySelector('#solo-project');

    switch(target){
      case "team":
        team?.scrollIntoView({behavior: 'smooth'});
        break;
      case "solo":
        solo?.scrollIntoView({behavior: 'smooth'});
        break;
      default:
        break;
    }
  }

  // 모달창 열리면 바디 스크롤 막음
  useEffect(() => {
    if(showModal === true) {
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.removeProperty('overflow');
    }
  }, [showModal])


  // 만나이 구하는 함수
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
    <div className={mainStyle.mainStyle}>
      {/* 0. Visual */}
      <section id="visual-section" className={mainStyle.visual}>
        <div className={mainStyle.contentsWrap}>
          <div className={mainStyle.textWrap}>
            <div className={mainStyle.greetingWrap}>
              <span className={mainStyle.sayhello}>👋 반갑습니다!</span>
              <p className={mainStyle.introduceCommon}>프론트엔드 개발자</p>
              <p className={mainStyle.introduceCommon}>
                <span className={mainStyle.name}>성주영</span>입니다.
              </p>
            </div>
            <div className={mainStyle.wordWrap}>
              <p>문제를 찾아 해결하고 나아가 비즈니스적 가치를 창출하는 것이</p>
              <p>개발자의 핵심 역량이라고 생각합니다.</p>
            </div>
            <div className={mainStyle.snsWrap}>
              <button type="button" className={mainStyle.github}></button>
              <button type="button" className={mainStyle.google}></button>
              <button type="button" className={mainStyle.linkedin}></button>
            </div>
          </div>
          <div className={mainStyle.imgWrap}>
            <img src="/imgs/main.png" />
          </div>
        </div>
        <div className={mainStyle.mouseWrap}>
            <div className={mainStyle.mouse}></div>
        </div>
      </section>
      {/* 1. 프로필 */}
      <section id="profile-section" className={mainStyle.profile}>
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
                    <Link className={mainStyle.github} href="https://github.com/0011git" target="_blank">https://github.com/0011git</Link>
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
      <section id="skills-section" className={mainStyle.skills}>
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
      <section id="portfolio-section" className={mainStyle.portfolio}>
        <h2 className={mainStyle.sectionTitleWrap}>
          <strong className={mainStyle.sectionTitle}>portfolio</strong>
          <em className={mainStyle.sectionSubtitle}>포트폴리오</em>
        </h2>
        <div className={mainStyle.portfolioBtnGroup}>
          <div onClick={() => scrollToProject('team')} className={mainStyle.btnWrap}><button type="button">Team</button></div>
          <div onClick={() => scrollToProject('solo')} className={mainStyle.btnWrap}><button type="button">Solo</button></div>
        </div>
        <div id="team-project" className={`${mainStyle.portfolioCommon} ${mainStyle.teamWrap}`}>
          <h3 className={mainStyle.portfolioTitleWrap}>
            <strong className={mainStyle.portfolioTitle}>Team Projects</strong>
            <em className={mainStyle.portfolioSubtitle}>팀 프로젝트</em>
          </h3>
          <ul className={`${mainStyle.teamContents} ${mainStyle.portfolioCardsGroup}`} >
            {/* 큰카드컴포2 */}
            {
              portfolioData.team.map((item:PortfolioItemType)=> (
                <li className={mainStyle.pCardWrap} key={item.title}>
                  <PortfolioCard item={item} setPopupItem={setPopupItem} setShowModal={setShowModal} />
                </li>
              ))
            }
          </ul>
        </div>
        <div id="solo-project" className={`${mainStyle.portfolioCommon} ${mainStyle.soloWrap}`}>
          <h3 className={mainStyle.portfolioTitleWrap}>
            <strong className={mainStyle.portfolioTitle}>Solo Projects</strong>
            <em className={mainStyle.portfolioSubtitle}>개인 프로젝트</em>
          </h3>
          <ul className={`${mainStyle.soloContents} ${mainStyle.portfolioCardsGroup}`}>
            {/* {카드컴포2+4} */}
            <li className={mainStyle.bigWrap}>
              <ul>
              {
                (portfolioData.solo.slice(0,2)).map((item:PortfolioItemType) => (
                  <li className={mainStyle.pCardWrap} key={item.title}>
                    <PortfolioCard item={item} setPopupItem={setPopupItem}  setShowModal={setShowModal} />
                  </li>
                ))
              }
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
      <section id="others-section" className={mainStyle.others}>
        <h2 className={mainStyle.sectionTitleWrap}>
          <strong className={mainStyle.sectionTitle}>others</strong>
          <em className={mainStyle.sectionSubtitle}>기타 경험</em>
        </h2>
        <ul className={mainStyle.othersItemsWrap}>
          <li className={mainStyle.othersItem}>
            <h3 className={mainStyle.othersItemTitle}>기타 경험 1</h3>
            <div className={mainStyle.othersItemDescriptionsWrap}>
                <p className={mainStyle.otherItemDate}>2024.01 ~ 2024.02</p>
                <p className={mainStyle.otherItemDescription}>기타 경험 설명입니다. 이에 관한 간단한 내용을 작성합니다. 내용은 3~4줄 이내로 간단하게 작성하도록 합니다. 기타 경험 설명입니다. 이에 관한 간단한 내용을 작성합니다. 내용은 3~4줄 이내로 간단하게 작성하도록 합니다.</p>
            </div> 
          </li>
          <li className={mainStyle.othersItem}>
            <h3 className={mainStyle.othersItemTitle}>기타 경험 2</h3>
            <div className={mainStyle.othersItemDescriptionsWrap}>
                <p className={mainStyle.otherItemDate}>2024.01 ~ 2024.02</p>
                <p className={mainStyle.otherItemDescription}>기타 경험 설명입니다. 이에 관한 간단한 내용을 작성합니다. 내용은 3~4줄 이내로 간단하게 작성하도록 합니다. 줄 간격은 180%입니다. 기타 경험 설명입니다. 이에 관한 간단한 내용을 작성합니다. 내용은 3~4줄 이내로 간단하게 작성하도록 합니다. 기타 경험 설명입니다. 이에 관한 간단한 내용을 작성합니다. 내용은 3~4줄 이내로 간단하게 작성하도록 합니다.</p>
            </div> 
          </li>
        </ul>
      </section>
      
      {/* 팝업 */}
      <div className={ showModal ? 'show' : 'hide'}>
        <PortfolioPopup popupItem={popupItem} setShowModal={setShowModal} />
      </div>
    </div>
  );
}
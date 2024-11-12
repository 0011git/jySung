import React from 'react'
import Image from "next/image";
import SkillCardStyle from '../styles/skillCard.module.scss'
import { LogoType, SkillType } from '../type/types'


// item

const SkillCard = ({item}:{item:SkillType}) => {
    console.log(item);

    
  return (
    <div className={SkillCardStyle.skillCardWrap}>
      <div className={SkillCardStyle.logosWrap}>
        {item.logos.map((logo) => (
          <div className={SkillCardStyle.imgWrap}>
            <Image src={logo.src} alt={logo.alt} width={48} height={48}></Image>
          </div>
        ))}
      </div>


      <div className={SkillCardStyle.namesWrap}>
        {item.names.map((name:string) => (
          <h3>{name}</h3>
        ))}
      </div>

        <ul className={SkillCardStyle.descriptionsWrap}>
            {
              item.description.map((desc:string) => {
                return (
                  <div className={SkillCardStyle.descWrap}>
                    <span className={SkillCardStyle.disc}></span>
                    <li>{desc}</li>
                  </div>
                )
              })
            }
        </ul> 
    </div>
  )
}

export default SkillCard
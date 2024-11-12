import React from 'react'
import footerStyle from '../styles/footer.module.scss'

const Footer = () => {
  return (
    <div className={footerStyle.footerWrap}>
      <p className={footerStyle.copyright}>ⓒ 2024. Jooyoung Sung. Frontend Developer Portfolio. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
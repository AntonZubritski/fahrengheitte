import React from 'react'
import { FacebookSvg, InstagramSvg } from '../../svg/svg'
import Logo from '../logo/logo'
import NavBar from '../nav-bar/nav-bar'
import './footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className="footer-text">
        <Logo />
        <NavBar />
        <div className="icon-block">
            <div className='text'>Соц сети:</div>
            <div className='icon'>
            <InstagramSvg color="#9A593D" />
          <FacebookSvg color="#9A593D" />
            </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer

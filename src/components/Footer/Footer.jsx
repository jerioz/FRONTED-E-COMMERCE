import React from 'react'
import logo1 from '../../assets/Photos/logo1.png'
import logo2 from '../../assets/Photos/logo2.png'
import logo3 from '../../assets/Photos/logo3.png'
import '../../components/Footer/Footer.styles.scss'

const Footer = () => {
  return (
  <>
    <footer className="footer__terms">
      <div >
        <ul className='footer__terms-list'>
            <li className='footer__terms-item'>Privacy policy</li>
            <li className='footer__terms-item'>Terms of Service</li>
            <li className='footer__terms-item'>Terms of Sale</li>
            <li className='footer__terms-item'>Help</li>
            <li className='footer__terms-item'>Subscriptors</li>
        </ul>
      </div>
      <div className='footer__icon'>
        <img src={logo1} alt="facebook" className='footer__icon-item' />
        <img src={logo3} alt="twitter" className='footer__icon-item' />
        <img src={logo2} alt="instagram" className='footer__icon-item' />
      </div>
    </footer>
  </>
  )
}

export default Footer


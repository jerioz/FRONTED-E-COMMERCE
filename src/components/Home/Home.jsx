import React from 'react'
import './Home.styles.scss'
import Photo from '../../assets/Photos/Photo.jpg'
import Photo1 from '../../assets/Photos/Photo1.jpg'
import Photo2 from '../../assets/Photos/Photo2.png'
import Photo3 from '../../assets/Photos/Photo3.png'
import Photo4 from '../../assets/Photos/Photo4.jpg'
import Photo5 from '../../assets/Photos/Photo5.jpg'

const Home = () => {
  return (
    <>
    <h1 className='home__title'>New Releases</h1>
    <div className='home__photos'>
      <div className='home__eCommerce-listPhoto'>
       <img src={Photo} alt='logo' className='home__eCommerce-photo'/>
       <img src={Photo1} alt='logo' className='home__eCommerce-photo'/>
       <img src={Photo2} alt='logo' className='home__eCommerce-photo'/>
      </div>
      <div className='home__eCommerce-listPhoto'>
       <img src={Photo3} alt='logo' className='home__eCommerce-photo'/>
       <img src={Photo4} alt='logo' className='home__eCommerce-photo'/>
       <img src={Photo5} alt='logo' className='home__eCommerce-photo'/>
     </div>
    </div>
    </>
  )
}

export default Home
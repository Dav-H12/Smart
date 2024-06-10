import React from 'react'
import Button from '../Button/Button'
import './Nav.css'
const Nav = ({scrolltolessons,scrolltoWhy,scrolltoTrainers,scrolltoAboutus}) => {
  return (
    <div className='nav'>
      <img src="https://smartcode.am/public/image/logo.png?v=1"  className='navimage'/>
      <ul>
        <li onClick={()=>scrolltolessons()}>Դասընթացներ</li>
        <li onClick={()=>scrolltoWhy()}>Առավելություններ</li>
        <li onClick={()=>scrolltoTrainers()}>Թրեյներներ</li>
        <li onClick={()=>scrolltoAboutus()}>Մեր մասին</li>
      </ul>
      <Button/>
       
      </div>
  )
}

export default Nav
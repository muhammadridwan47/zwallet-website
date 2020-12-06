import React from 'react'
import { Link } from 'react-router-dom';
import { icArrowRight } from '../../../assets';
import './navigation.css';



 const NavigationMobile = ({to,page}) => {
  return (
    <>
         
         <Link to={to} >
            <div className="navigation-mobile">
                <img src={icArrowRight} alt=" "/>
                <h2>{page}</h2>
            </div> 
        </Link>

    </>
  )
}

export default NavigationMobile;

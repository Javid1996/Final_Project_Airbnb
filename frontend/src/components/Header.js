import React from 'react'
import '../Styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import src1 from '../img/ClickLogo.webp'
import { Routes,Route, Link } from "react-router-dom"
// import Image from 'react';


function Header(){

    return(

       <div className='header'>
        <Link to={`/`}>
        <img
             className="logo"
            //  src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
             src={src1}
            //  src='Users/Javid/Desktop/Final_Project_Airbnb/frontend/public/img'
             alt=""
                />
         </Link>

         <div className='header_center'>
            <input type='text'/>
             <SearchIcon/> 
         </div>

         <div className='header_right'>
            
            {/* <Link to='/login'><p>Log in</p></Link> */}
            <LanguageIcon/>
            <ExpandMoreIcon/>
            <Link to={`/profile`}><Avatar/></Link>

         </div>
       </div>
        
    )
}

export default Header
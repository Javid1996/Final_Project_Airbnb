import React from 'react'
import '../Styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
// import src1 from '../../public/img'
import { Routes,Route, Link } from "react-router-dom"



function Header(){

    return(
       <div className='header'>
        <img
             className="logo"
             src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            //  src={}
             alt=""
                />

         <div className='header_center'>
            <input type='text'/>
             <SearchIcon/> 
         </div>

         <div className='header_right'>
            <p>Log in</p>
            {/* <Link to='/login'>Log in</Link> */}
            <LanguageIcon/>
            <ExpandMoreIcon/>
            <Avatar/>

         </div>
       </div>
        
    )
}

export default Header
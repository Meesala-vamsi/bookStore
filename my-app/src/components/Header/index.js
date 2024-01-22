import {useState} from 'react'
import { withRouter ,Link} from 'react-router-dom';
import { FaBookOpen } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { IoMenu,IoCloseSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

import './index.css'

const Header=()=>{
    const [getMenuStatus,setMenu] = useState(false)
    const onClickMenu=()=>{
        setMenu(true)
    }
    
    const onClickClose=()=>{
        setMenu(false)
    }
    console.log(getMenuStatus)
    return(
        <div className='container'>
        <nav className='nav-container'>
            <div className='header-container'>
                <ul className="header-list-container">
                    <li className="logo-container">
                        <FaBookOpen className="book-logo"/>
                        <h1 className="header-heading">BookStore</h1>
                    </li>
                    <li className="desktop-search-container">
                    <div className="search-icon-container">
                        <IoIosSearch className="search-icon"/>
                    </div>
                    <input type="search" placeholder="Search..." className="search-element"/>
                    </li>
                    <li className="header-items"><CgProfile/></li>
                    <li className="header-items-container">
                        <FaHeart className="like-icon"/></li>
                        <span className="count">1</span>
                    <li className="header-items"><FaShoppingCart/></li>
                    <li className="header-menu-container">
                        <IoMenu className="menu-icon" onClick={onClickMenu}/>
                    </li>
                </ul>
                <div className="mobile-search-container">
                    <div className="search-icon-container">
                        <IoIosSearch className="search-icon"/>
                    </div>
                    <input type="search" placeholder="Search..." className="search-element"/>
                </div>
                {getMenuStatus===true?<ul className='sidebar'>
                    <li className='' ><IoCloseSharp className='close-icon' onClick={onClickClose}/></li>
                    <Link to='/'>
                        <li className='sidebar-items'>Home</li>
                    </Link>
                    <Link to='/bookshelves'>
                        <li className='sidebar-items'>BookShelves</li>
                    </Link>
                    <li className='sidebar-items'>CheckOut</li>
                    <li className=''>
                        <button className='logout-button'>Logout</button>
                    </li>
                </ul>:null}
            </div>
            <ul className='desktop-menu-container'>
                <li className='desktop-header-item'>Home</li>
                <li className='desktop-header-item'>BookShelves</li>
                <li className='desktop-header-item'>CheckOut</li>
                <li>
                    <button className='logout-button'>
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
        </div>
    )
}
export default withRouter(Header)
import { useState} from 'react'
import { withRouter ,Link} from 'react-router-dom';
import { FaBookOpen } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { IoMenu,IoCloseSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useRouting } from '../../Context/ReactContext';
import './index.css'

const Header=(props)=>{
    const {history} = props
    const {cart,getLike} = useRouting()
    const {forSearchDetails} = props
    const [getSearchElement,setSearchElement] = useState('')
    const [getMenuStatus,setMenu] = useState(false)
    const onClickMenu=()=>{
        setMenu(true)
    }
    
    const onClickClose=()=>{
        setMenu(false)
    }

    const onChangeSearch=(event)=>{
        setSearchElement(event.target.value)
    }

    const onClickSearch=()=>{
        forSearchDetails(getSearchElement)
    }

    const onClickLogout=()=>{
        history.push('/login')
    }

    return(
        <div className='container'>
        <nav className='nav-container'>
            <div className='header-container'>
                <ul className="header-list-container">
                    <li className="">
                        <Link to='/' className='nav-link logo-container' >
                            <FaBookOpen className="book-logo"/>
                            <h1 className="header-heading">BookStore</h1>
                        </Link>
                    </li>
                    
                    <li className="desktop-search-container">
                        <div className="search-icon-container">
                            <IoIosSearch className="search-icon" onClick={onClickSearch}/>
                        </div>
                        <input type="search" placeholder="Search..." className="search-element" onChange={onChangeSearch}/>
                    </li>
                    <li className="header-items"><CgProfile/></li>
                    <li className="header-items-container">
                        <FaHeart className="like-icon"/></li>
                        <span className="count">{getLike.length}</span>
                    <li className="header-items"><FaShoppingCart className='like-icon'/></li>
                    <span className="cart-count">{cart.length}</span>
                    <li className="header-menu-container">
                        <IoMenu className="menu-icon" onClick={onClickMenu}/>
                    </li>
                </ul>
                <div className="mobile-search-container">
                    <div className="search-icon-container" onClick={onClickSearch}>
                        <IoIosSearch className="search-icon"/>
                    </div>
                    <input type="search" placeholder="Search..." className="search-element" onChange={onChangeSearch}/>
                </div>
                {getMenuStatus===true?<ul className='sidebar'>
                    <li className='' ><IoCloseSharp className='close-icon' onClick={onClickClose}/></li>
                    <Link to='/' className='sidebar-items'>
                        <li>Home</li>
                    </Link>
                    <Link to='/bookshelves' className='sidebar-items'>
                        <li>BookShelves</li>
                    </Link>
                    <Link to='/checkout' className='sidebar-items'>
                    <li >CheckOut</li>
                    </Link>
                    <li className=''>
                        <button className='logout-button' onClick={onClickLogout}>Logout</button>
                    </li>
                </ul>:null}
            </div>
            <ul className='desktop-menu-container'>
                <Link to='/' className='desktop-header-item'>
                    <li >Home</li>
                </Link>
                <Link to='/bookshelves' className='desktop-header-item'>
                    <li >BookShelves</li>
                </Link>
                <Link to='/checkout' className='desktop-header-item'>
                <li >CheckOut</li>
                </Link>
                <li>
                    <button className='logout-button' onClick={onClickLogout}>
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
        
        </div>
    )
}
export default withRouter(Header)

import { useState,useEffect } from "react"
import { FaRegHeart } from "react-icons/fa";
import booksVideo from '../../Assets/readingBooks.mp4'
import Header from "../Header"
import './index.css'
import { useRouting } from "../../Context/ReactContext";

const apiStatusDetails={
    success:"SUCCESS",
    failure:"FAILURE",
    inProgress:"INPROGRESS",
    initial:"INITIAL"
}
const Home =()=>{
    const[getLike,setLike] = useState([])
    const {addToCart,addToLike}=useRouting()
    const[searchedItems,setSearchedData] = useState([])
    const [getCartItems,setCartItems] = useState([])
    const [getData,setData] = useState([])
    const [getApiStatus,setApiStatus] = useState('')
    
    useEffect(()=>{
        const getDetails= async ()=>{
            const url='https://api.itbook.store/1.0/new'
            const options={
                method:"GET"
            }

            const response = await fetch(url,options)
            const data = await response.json()
            if(response.ok){
                setApiStatus(apiStatusDetails.success)
                setData(data.books.slice(0,10).map((eachBook)=>({
                    title:eachBook.title,
                    price:eachBook.price,
                    isbn13:eachBook.isbn13,
                    image:eachBook.image,
                    url:eachBook.url,
                    likeStatus:false
                })))

                setSearchedData(
                    data.books.slice(0,10).map((eachBook)=>({
                        title:eachBook.title,
                        price:eachBook.price,
                        isbn13:eachBook.isbn13,
                        image:eachBook.image,
                        url:eachBook.url,
                        likeStatus:false
                    }))
                )
            }
           
        }
        getDetails()
        
    },[])
    const onClickLike=(id)=>{
        const filteredData=getData.filter((eachBook)=>{
            if(eachBook.isbn13=== id){
                return eachBook
            }
            return null
        })
        addToLike(filteredData)
        setLike([...getLike,filteredData])
    }

    
    const forSearchDetails=(searchElement)=>{
        const filteredData=getData.filter((eachBook=>
            eachBook.title.toLowerCase().includes(searchElement)
        ))
       setSearchedData(filteredData)
    }

    const onClickCart=(id)=>{
        const filteredData=getData.filter((eachBook)=>{
            if(eachBook.isbn13=== id){
                return eachBook
            }
            return null
        })
        addToCart(...filteredData)
        setCartItems([...getCartItems,filteredData])
    }


    const successView=()=>{
        if(searchedItems.length<=0){
            return( <div> 
                <p>null</p>
            </div>
            )
        }
    return(
        <div className="home-success-container">
        <ul className="home-books-list-container">
            {
                searchedItems.map((eachBook)=>(
                    <li key={eachBook.isbn13} className="home-book-list-items">
                        <img src={eachBook.image} alt='' className="home-books-cover-image"/>
                        <div className="home-book-details">
                            <h1>{eachBook.title}</h1>
                            <p className="book-price">Price: <span>{eachBook.price}</span></p>
                            <div className="add-cart-container">
                                <button className="add-cart-btn" onClick={()=>{onClickCart(eachBook.isbn13)}}>Add To Cart</button>
                                <FaRegHeart className="like-button" onClick={()=>onClickLike(eachBook.isbn13)}/>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
        </div>
    )
        }

    const renderDetails=()=>{
        switch(getApiStatus){
            case apiStatusDetails.success:
                return successView();
            default:
                return null;
        }
    }


    return (
        <>
        <Header forSearchDetails={forSearchDetails} cartItems={getCartItems} likeItems={getLike}/>
            <div className="video-container">
                <h1 className="video-heading">Reading is important. If you know how to read, then the whole world opens up to you.</h1>
                <button className="read-books-btn">Read Books</button>
                <video src={booksVideo} type="video/mp4" width="100%"  autoPlay muted loop>Your browser does not support the video tag.</video>
            </div>
            
            {renderDetails()}
        </>
    )
}

export default Home
import { useState,useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";

import Header from "../Header";

import './index.css'
import {useRouting} from "../../Context/ReactContext";

const apiStatusDetails={
    success:"SUCCESS",
    failure:"FAILURE",
    inProgress:"INPROGRESS",
    initial:"INITIAL"
}

const BookList=()=>{
    const [apiStatus,setApiStatus] = useState(apiStatusDetails.initial)
    const {addToCart,addToLike} = useRouting()
    const [getFilteredBooks,setFilteredBooks] = useState([])
    const [getBookList,setBookList] = useState([])
    const [getCartCount,setCartCount] = useState([])
    const [getLike,setLike] = useState([])

    useEffect(()=>{
        const getBookDetails= async ()=>{
            const url='https://api.itbook.store/1.0/new'
            const options={
                method:"GET"
            }

            const response=await fetch(url,options)
            const data = await response.json()
            if(response.ok){
                setBookList(data.books)
                setFilteredBooks(data.books)
                setApiStatus(apiStatusDetails.success)
            }else{
                setApiStatus(apiStatusDetails.failure)
            }
        }

        getBookDetails()
    },[])

    const searchFilteredBooks=(searchElement)=>{
        const filteredData=getBookList.filter((eachBook=>
            eachBook.title.toLowerCase().includes(searchElement)
        ))
        setFilteredBooks(filteredData)
    }

    const onClickLike=(id)=>{
        const filteredData=getFilteredBooks.filter((eachBook)=>{
            if(eachBook.isbn13=== id){
                return eachBook
            }
            return null
        })
        addToLike(filteredData)
        setLike([...getLike,filteredData])
    }


    const onClickCart=(id)=>{
       const filteredBooks= getFilteredBooks.filter((eachBook)=>{
            if(eachBook.isbn13===id){
                return eachBook
            }
            return null
        })

        addToCart(...filteredBooks)
        
        setCartCount([...getCartCount,filteredBooks])
    }



    const bookDetailsSuccessView=()=>{
        if(getFilteredBooks.length<=0){
            return(
                <div>
                    <p>Null</p>
                </div>
            )
        }
    return(
        <div className="book-list-success-container">
            <ul className="booklist-list-container">
                {
                    getFilteredBooks.map((eachBook)=>(
                        <li className="booklist-items" key={eachBook.isbn13}>
                            <img src={eachBook.image} alt='' className="home-books-cover-image"/>
                            <div className="booklist-section-details">
                                <h1 className="book-list-heading">{eachBook.title}</h1>
                                <p className="book-list-price">Price: <span>{eachBook.price}</span></p>
                                <div className="add-cart-container">
                                    <button className="add-cart-btn" onClick={()=>{onClickCart(eachBook.isbn13)}}>Add To Cart</button>
                                    <FaRegHeart className="book-list-like-button" onClick={()=>onClickLike(eachBook.isbn13)}/>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
            }

    const renderView=()=>{
        switch(apiStatus){
            case apiStatusDetails.success:
                return bookDetailsSuccessView()
            case apiStatusDetails.failure:
                return 'aa'
            default:
                return null
        }
    }

    return(
        <>
        <Header forSearchDetails={searchFilteredBooks}likeItems={getLike}/>
        <div className="book-list-container">
            <h1 className="book-list-main-heading">New Books</h1>
            {renderView()}
        </div>
        </>
    )

}

export default BookList
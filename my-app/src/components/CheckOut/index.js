import { useEffect, useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {useRouting} from "../../Context/ReactContext"
import { MdDelete } from "react-icons/md";
import Header from "../Header"
import './index.css'

const apiStatusDetails={
    success:"SUCCESS",
    failure:"FAILURE",
    inProgress:"INPROGRESS",
    initial:"INITIAL"
}

const CheckOut=()=>{
    const {cart} = useRouting()
    const [getCartItems,setCartItems]=useState()
    const [cartStatus,setCartStatus] = useState(apiStatusDetails.initial)
    useEffect(()=>{
        
        if(cart.length>0){
            setCartItems(cart)
            setCartStatus(apiStatusDetails.success)
        }else{
            setCartStatus(apiStatusDetails.failure)
        }
    },[cart])

    const onClickDelete=(id)=>{
        const filteredData=cart.filter((eachBook)=>(
            eachBook.isbn13 !==id
        ))
        setCartItems(filteredData)
    }

    const cartSuccessView=()=>{
        if(cart.length<=0){
            return(
                <div>
                    <p>No Items In Your Cart</p>
                </div>
            )
        }
        return(<div >
            <h1 className="cart-heading">My Bag</h1>
            <div>
                <ul className="cart-list-container">
                    {
                        getCartItems.map((eachBook)=>(
                            <><li key={eachBook.isbn13} className="cart-list-items">
                                <img src={eachBook.image} alt='' className="cart-book-image" />
                                <div className="cart-book-details">
                                    <p className="cart-book-title">{eachBook.title}</p>
                                    <p className="cart-book-price">Price: <span>{eachBook.price}</span></p>
                                    <MdDelete className="cart-delete-icon" onClick={() => (onClickDelete(eachBook.isbn13))} />
                                </div>
                            </li><hr /></>
                        ))
                    }
                </ul>
                <Link to='/bookshelves'>
                    <button className="continue-btn">Continue shopping</button>
                </Link>
            </div>
        </div>
    )
            }

    const renderView=()=>{
        switch(cartStatus){
            case apiStatusDetails.success:
                return cartSuccessView()
            default:
                return null
        }
    }
    const a = getCartItems===undefined || getCartItems.length<=1 ? "viewportHeight":null


return(
    <>
    <Header/>
    <div className={`${a} cart-main-container`}>
        {renderView()}
    </div>
    </>
)
}

export default CheckOut
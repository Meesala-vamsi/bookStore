import { useState,useEffect } from 'react'
import './index.css'

const BookList=()=>{
    const [getData,setData] = useState([])
    
    useEffect(()=>{
        const getDetails= async ()=>{
            const url='https://freetestapi.com/api/v1/books?limit=5'
            const options={
                method:"GET"
            }

            const response = await fetch(url,options)
            const data = await response.json()
            setData(data)
        }
        getDetails()
    },[])
    console.log(getData)
}


export default BookList
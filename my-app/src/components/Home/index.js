
import ReactSlick from "../ReactSlick"
import booksVideo from '../../Assets/readingBooks.mp4'
import Header from "../Header"
import './index.css'
const Home =()=>(
    <>
        <Header/>
        <div className="video-container">
            <h1 className="video-heading">Reading is important. If you know how to read, then the whole world opens up to you.</h1>
            <button className="read-books-btn">Read Books</button>
            <video src={booksVideo} type="video/mp4" width="100%"  autoPlay muted loop>Your browser does not support the video tag.</video>
        </div>
    </>
)

export default Home
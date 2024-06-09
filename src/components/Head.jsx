import {Link} from 'react-router-dom'
import './Head.css';
function Head(){
  return(
    <section className="header">
      <div className="headtop">
      <h2 className="headerTitle">
        zaph tours
      </h2>
      <div className="socials">
      <p className="contact">
        phone 
      </p>
      <p className="location">
        location
      </p>
      </div>
      </div>
      <div className="navigation">
        <Link to="/">home</Link>
        < Link to="/destination" >destination </Link>
        <Link to="/trip">trip</Link>
        <Link to="/contact">contact us</Link>
      </div>
     
      
    </section>
  )
}
export default Head
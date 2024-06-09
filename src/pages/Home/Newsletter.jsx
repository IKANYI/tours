import './Newsletter.css';
function Newsletter(){
  return(
    <div className="News">
      <h2>Newsletter</h2>
      <p>
        Subscribe to our newsletter to be on the know
      </p>
      <label htmlFor="">Email Address</label>
      <input type="text" placeholder="Email"/>
      <p><a href="">subscribe</a></p>
    </div>
  )
}
export default Newsletter 
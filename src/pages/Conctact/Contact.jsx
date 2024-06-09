import './Contact.css';
function Contact() {
  return (
    <div className="about">
      <div className="form">
        <form action="" className="items">
          <h2>
            Contact us
          </h2>
          <p>We are here to help you in whatever way we can:</p>
          <input type="text" placeholder='Name' />
          <input type="text"  placeholder='Email'/>
          <input type="text" placeholder='phone'/>
          <input type="text" className='textinput' placeholder='Type your message' />
          <button>send</button>
          <h4>contact @youremail.com</h4>
          <h4>phone +25411999958</h4>
        </form>
      </div>
      <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50826.27875226353!2d37.13277308443656!3d-0.7071941761026365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828a28207db7113%3A0xbc8b3625ac089be8!2sMurang&#39;a%2C%20Kenya!5e0!3m2!1sen!2snl!4v1717908411081!5m2!1sen!2snl"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
      </div>
    </div>
  )
}
export default Contact
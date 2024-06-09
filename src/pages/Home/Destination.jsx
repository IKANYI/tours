
import mtkenya from '../../assets/mt-kenya.jpg'
import mtruwenzori from '../../assets/mt-ruwenzori.jpg'
import lake from '../../assets/nakuru.jpg'
import tsavo from '../../assets/tsavo.jpg'
import nairobi from '../../assets/nairobi.jpg'
import coast from '../../assets/coast.jpg'
import './Destination.css'
function Destination(){
  return(
    <div className="main-container">
      <div className="componets">
        <img src={mtkenya} alt="" />
        <h3>Mt kenya</h3>
        <p></p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, hic?</p>
        <p>From Kshs 7500</p>
      </div>
      <div className="componets">
        <img src={mtruwenzori} alt=""  />
        <h3>Mount Ruwenzori</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, hic?</p>
        <p>From Kshs 9000</p>
      </div>
      <div className="componets">
        <img src={lake} alt="" />
        <h3>Lake Nakuru</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, hic?</p>
        <p>From Kshs 3500</p>
      </div>
      <div className="componets">
        <img src={tsavo} alt=""  />
        <h3>Tsavo National Park</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, hic?</p>
        <p>From Kshs 8000</p>
      </div>
      <div className="componets">
        <img src={nairobi} alt=""  />
        <h3>Nairobi National park</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, hic?</p>
        <p>From Kshs 5000</p>
      </div>
      <div className="componets">
        <img src={coast} alt=""  />
        <h3>Coastal Kenya</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, hic?</p>
        <p>From Kshs 15000</p>
      </div>
      
    </div>
  )
}
export default Destination
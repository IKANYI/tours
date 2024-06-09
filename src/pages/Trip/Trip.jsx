import './Trip.css';
import honeyimg from '../../assets/moon.jpg';
import familyimg from '../../assets/family.jpg';
import adventure from '../../assets/adventure.jpg';
import cultural from '../../assets/cultural.jpg';
import wildlife from '../../assets/safari.jpg';
import eco from '../../assets/eco.jpg';
import luxury from '../../assets/luxury.jpg';
import beach from '../../assets/coast.jpg';
import retreat from '../../assets/retreat.jpg';
import calinary from '../../assets/calinary.jpg';


function Trip(){
  return(
    <div className="trip-div">
      <div className="section">
        <img src={honeyimg} alt="" />
        <p>Honey Moon</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, exercitationem earum! Sequi, nisi.</p>
        <p>Ksh 20000</p>
      </div>
      <div className="section">
        <img src={familyimg} alt="" />
        <p>Family tour</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, exercitationem earum! Sequi, nisi.</p>
        <p>Ksh 35000</p>
      </div>
      <div className="section">
        <img src={adventure} alt="" />
        <p>Family tour</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, exercitationem earum! Sequi, nisi.</p>
        <p>Ksh 35000</p>
      </div>
      <div className="section">
        <img src={cultural} alt="" />
        <p>Family tour</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, exercitationem earum! Sequi, nisi.</p>
        <p>Ksh 35000</p>
      </div>
      <div className="section">
        <img src={wildlife} alt="" />
        <p>Family tour</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, exercitationem earum! Sequi, nisi.</p>
        <p>Ksh 35000</p>
      </div>
      <div className="section">
        <img src={eco} alt="" />
        <p>Family tour</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, exercitationem earum! Sequi, nisi.</p>
        <p>Ksh 35000</p>
      </div>
      <div className="section">
        <img src={luxury} alt="" />
        <p>Family tour</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, exercitationem earum! Sequi, nisi.</p>
        <p>Ksh 35000</p>
      </div>
      <div className="section">
        <img src={beach} alt="" />
        <p>Family tour</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, exercitationem earum! Sequi, nisi.</p>
        <p>Ksh 35000</p>
      </div>
      <div className="section">
        <img src={retreat} alt="" />
        <p>Family tour</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, exercitationem earum! Sequi, nisi.</p>
        <p>Ksh 35000</p>
      </div>
      <div className="section">
        <img src={calinary} alt="" />
        <p>Family tour</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, exercitationem earum! Sequi, nisi.</p>
        <p>Ksh 35000</p>
      </div>

    </div>
  )
}
export default Trip
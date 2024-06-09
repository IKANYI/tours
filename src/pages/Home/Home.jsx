import Hero from './Hero';
import About from './About';
import Destination from './Destination';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
function Home(){
  return(
    <section className="main">
      <Hero/>
      <About/>
      <Destination/>
       <Testimonials/>
      <Newsletter/>
    </section>
  )
}
export default Home
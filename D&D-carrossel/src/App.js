import './App.css';
import { motion } from 'framer-motion';
import {useState, useEffect, useRef} from 'react'

/*--- import das imagens ---*/

import image1 from '../src/img/ladino.png';
import image2 from '../src/img/bardo.png';
import image3 from '../src/img/mago.png';
import image4 from '../src/img/paladino.png';
import image5 from '../src/img/artifice.png';

const images = [image1,image2,image3,image4,image5]  

function App(){
  const carousel = useRef();
  const [width, setWidth] = useState (0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])




  return (
    <div className="App">
      
      <header className='tittle'>
        <h1> <span>D&D</span> classes </h1>
      </header>
      
      <section className='slider'>
      <motion.div ref={carousel} className='carousel' whileTap={{cursor:"grabbing"}}>
        <motion.div className='inner'
         drag="x" 
         dragConstraints={{right: 0, left: -width}}
         initial={{ x: 200}}
         animate={{ x: 0}}
         transition={{duration: .8}}>

          {images.map(image => (
            <motion.div className='item' key={image}>
              <img  src={image} alt="f"/>
            </motion.div>
          ))}

        </motion.div>
      </motion.div>
      </section>
            
    </div>

    
  );

  
}

export default App;

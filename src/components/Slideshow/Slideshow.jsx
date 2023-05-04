import React, {useState,useEffect}from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Slideshow.css'



const Slideshow = () => {

    const [slideshows, setslideshows] = useState([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:2424/api/slideshow/getAll");
    const data = await res.json();
    setslideshows(data);
  };
console.log(slideshows);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    
      <Fade>
        {slideshows.map((pro) => (
          <div >
            <img style={{ width: '100%' }} src={pro.picDir} />
            <h2 className='centered'>{pro.detail}</h2>
          </div>
        ))}
      </Fade>

  )
}

export default Slideshow;
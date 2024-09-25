import React, { useEffect } from 'react';
import Trophy from './../assets/trophy-removebg-preview.png';
import './../css/trophy.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Worldcup() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.container-trophy-1',
        start: '0% 95%',  
        end: '70% 80%',   
           
        scrub: true,      
      },
    });
  

    tl.to('#trophy-jpg', {
      top: '175%', 
      left: '65%', 
      ease: 'power1.inOut' 
    });

   
     return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
    };
  }, []);
  
  
  return (
    <>
      <div className="trophy-title">
        <h1>World cup</h1>
      </div>

      <div className="container-trophy">
        <img src={Trophy} alt="Trophy" id="trophy-jpg" className="trophy-image" />
        <div className="container-trophy-content">
          <h1>ODI 1983</h1>
          <p>
            In 1983, the Indian cricket team, under the captaincy of Kapil Dev, achieved a historic victory by winning
            their first-ever Cricket World Cup. In the final, held at Lord's Cricket Ground in London, India faced the
            formidable West Indies and emerged victorious. Key players in the squad included Kapil Dev, who led both as
            captain and all-rounder, and Mohinder Amarnath, who was named Man of the Match in the final. Other important
            contributors were Sunil Gavaskar, Krishnamachari Srikkanth, Yashpal Sharma, Sandeep Patil, Kirti Azad,
            Roger Binny, Madan Lal, Balwinder Sandhu, and Syed Kirmani as the wicketkeeper. This victory is considered
            one of the most significant moments in Indian cricket history.
          </p>
        </div>
      </div>

      <div className="container-trophy-1">
        <div className="container-trophy-content">
          <h1>ODI 2011</h1>
          <p>
            In 2011, the Indian cricket team, under the captaincy of Kapil Dev, achieved a historic victory by winning
            their first-ever Cricket World Cup. In the final, held at Lord's Cricket Ground in London, India faced the
            formidable West Indies and emerged victorious. Key players in the squad included Kapil Dev, who led both as
            captain and all-rounder, and Mohinder Amarnath, who was named Man of the Match in the final. Other important
            contributors were Sunil Gavaskar, Krishnamachari Srikkanth, Yashpal Sharma, Sandeep Patil, Kirti Azad,
            Roger Binny, Madan Lal, Balwinder Sandhu, and Syed Kirmani as the wicketkeeper. This victory is considered
            one of the most significant moments in Indian cricket history.
          </p>
        </div>
      </div>

      
    </>
  );
}

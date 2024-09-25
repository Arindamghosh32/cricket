import React, { useEffect, useState } from 'react';
import Viratkohli from './../assets/virat-removebg-preview.png';
import Rohitsharma from './../assets/rohit-removebg-preview.png';
import Jaspritbumrah from './../assets/jasprit-removebg-preview.png';
import Ravindrajadeja from './../assets/jadeja-removebg-preview.png';
import './../css/body.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Body() {
    

    

    useEffect(() => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
        gsap.utils.toArray('.cricketer').forEach((cricketer) => {
            const image = cricketer.querySelector('.cricketer-image img');
            const name = cricketer.querySelector('.cricketer-name');
    
           
            gsap.fromTo(image,
                { 
                    scale: 1.2, 
                    opacity: 0.5, 
                    x: '-50%',
                    y: 0
                },
                { 
                    scale: 1,
                    opacity: 1,  
                    x: '0%',
                    y: '-10%',
                    duration: 2,  
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: cricketer,
                        start: 'top 80%', 
                        end: 'top 20%', 
                        scrub: 1,
                        markers: false,  
                    }
                }
            );
    
            
            gsap.fromTo(name, 
                { 
                    x: '100%', 
                    opacity: 0, 
                    scale: 0.8,
                },
                { 
                    x: '0%', 
                    opacity: 1,
                    scale: 1, 
                    duration: 1.5, 
                    ease: 'power3.out', 
                    scrollTrigger: {
                        trigger: cricketer,
                        start: 'top 90%', 
                        end: 'top 40%', 
                        scrub: 1,
                        markers: false, 
                    }
                }
            );
        });
    }, []);
    

    return (
        <>
            <div className='pody'>
                <div className="title">
                    Grade A+
                </div>

                <div className="cricketer">
                    <div className="cricketer-image">
                        <img src={Viratkohli} alt="Virat" className="trapezium-image" />
                    </div>
                    <div className="cricketer-name">
                        Virat Kohli
                        <div className="about">
                            <p>Virat Kohli is a Grade A+ cricketer in Indian cricket due to his exceptional skills, leadership, and consistency across all formats. His ability to perform under pressure, prolific run-scoring, and
                             match-winning capabilities make him a vital asset to the team. As a former captain, Kohli transformed 
                             India into a dominant side, especially in Test cricket. His rigorous fitness regime has set new standards, contributing to his longevity and peak performance. Overall, Kohli’s global influence and contribution to Indian cricket make him deserving of the Grade A+ status, the highest BCCI contract leve</p>
                        </div>
                    </div>
                </div>

                <div className="cricketer">
                    <div className="cricketer-image">
                        <img src={Rohitsharma} alt="Rohit" className="trapezium-image" />
                    </div>
                    <div className="cricketer-name">
                        Rohit Sharma
                        <div className="about">
                            <p>Rohit Sharma, one of India’s finest cricketers, holds a Grade A+ contract due to his consistent performances and exceptional batting prowess. Known as the 'Hitman' for his ability to score big, especially in limited-overs cricket, Rohit has three double centuries in ODIs to his name, a record no other cricketer holds. As India's current captain across formats, he has demonstrated strong leadership and tactical acumen. His ability to remain calm under pressure and lead from the front makes him one of the most reliable and formidable players in world cricket today, fully deserving of the highest BCCI contract tier</p>
                        </div>
                    </div>
                </div>

                <div className="cricketer">
                    <div className="cricketer-image">
                        <img src={Jaspritbumrah} alt="Jasprit" className="trapezium-image" />
                    </div>
                    <div className="cricketer-name">
                        Jasprit Bumrah
                        <div className="about">
                            <p>Jasprit Bumrah, one of India’s premier fast bowlers, also holds a Grade A+ contract, recognizing his invaluable contributions to Indian cricket. Known for his unique bowling action and ability to bowl lethal yorkers at will, Bumrah has established himself as one of the best death-over specialists in the world. With an exceptional ability to swing the ball both ways and deliver in high-pressure situations, he has been a key figure in India’s success across all formats. His consistent performances, especially in Test and limited-overs cricket, make him a pivotal part of the Indian bowling attack, fully deserving of the highest BCCI contract tier.</p>
                        </div>
                    </div>
                </div>

                <div className="cricketer">
                    <div className="cricketer-image">
                        <img src={Ravindrajadeja} alt="Jadeja" className="trapezium-image" />
                    </div>
                    <div className="cricketer-name">
                        Ravindra Jadeja
                        <div className="about">
                            <p>Ravindra Jadeja, one of India's most dynamic all-rounders, holds a Grade A+ contract, acknowledging his crucial role in the team's success across all formats. Renowned for his exceptional fielding, accurate left-arm spin, and explosive batting, Jadeja has the rare ability to turn matches around with both ball and bat. His all-round brilliance makes him indispensable in all conditions, especially in subcontinental pitches where his spin bowling thrives. Jadeja's consistency and versatility, along with his match-winning performances under pressure, cement his position as one of India's top cricketers, fully justifying his place in the highest BCCI contract tier.</p>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

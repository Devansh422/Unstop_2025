import img1 from '../../assets/images/review1.png';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Para() {
    useEffect(() => {
        var clutter = "";
        const para = document.querySelector(".textpara")
        const characters = para.textContent.split("")
        characters.forEach(function(e) {
            
            clutter += `<span>${e}</span>`
        })
        para.innerHTML = clutter;   
        gsap.set(".textpara span", {opacity: .1})
        gsap.to(".textpara span", {
            scrollTrigger: {
                trigger: ".para",
                start: "top 70%",
                end: "bottom 90%",
                scrub: 1,
            },
            opacity: 1, 
            stagger: .03,
            
        })
    },[]);

    

  return (
    <div data-color="white" className="para section w-full flex items-center justify-center px-8  ">
        <div className="text sm:w-[80%] flex flex-col items-center sm:items-start justify-between ">
            <div className='hidden w-[50%] sm:flex items-center justify-center mb-12'>
                <hr className='bg-zinc-400 w-[20%] h-[.3vh]' />
            </div>    
            <h3 className='textpara sm:w-[50%] text-blue-600 font-[Sansita] tracking-wide text-[2.4vh] sm:text-[3.5vh] font-medium text-center leading-[5vh] mb-10'>At UNSTOP, we believe that the future of technology lies in the hands of today's students. Through a variety of events, workshops, and projects, we aim to equip our members with the skills and knowledge needed to thrive in the ever-evolving tech landscape. Whether you're a seasoned coder or just starting your journey in tech, UNSTOP offers something for everyone. Our inclusive community welcomes diverse perspectives and encourages collaboration, ensuring that every voice is heard and every idea is valued.</h3>
            <div className="pers w-[50%] flex flex-col items-center justify-center gap-2 ">
                <div className="image w-24 h-24 overflow-hidden rounded-full ">
                    <img src={img1} />
                </div>
                <h1 className=' text-[2.8vh] sm:text-[3.8vh] font-medium font-[SansitaReg]'>Arushi Goel</h1>
                <h3 className='text-zinc-500 font-[Sansita] text-[2.4vh] whitespace-nowrap'>Chief Igniter @ UNSTOP Igniters</h3>
            </div>
        </div>  
    </div>
  )
}

export default Para

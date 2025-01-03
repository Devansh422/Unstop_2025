import video from '../../assets/video/11904079_3840_2160_30fps.mp4';
import Row from '../Row';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { gsap } from "gsap";
import styles from './Style.module.css';
import { Power2, Power4 } from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { BiMenu } from "react-icons/bi";
import { Link } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

gsap.set(".slidesm", { scale: 5 });

function Home() {
    const container = useRef(null);

    useEffect(() => {
        var clutter = "";
        const para = document.querySelector(".toptext");
        const characters = para.textContent.split("");
        characters.forEach(function (e) {
            clutter += `<span>${e}</span>`;
        });
        para.innerHTML = clutter;
        gsap.set(".toptext span", { opacity: .1 });
        gsap.to(".toptext span", {
            scrollTrigger: {
                trigger: ".home",
                start: "top 50%",
                end: "bottom 90%",
                scrub: 1,
            },
            opacity: 1,
            stagger: .03,
        });
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".home",
                start: "top top",
                end: "bottom bottom",
                scrub: .5,
            }
        });
        tl.to(".vdodiv", {
            clipPath: 'circle(0% at 50% 50%)',
            ease: Power4,
        }, "start");
        tl.to(".slidesm", {
            scale: 1,
            ease: Power2,
        }, 'start');
        tl.to(".lft", {
            xPercent: -10,
            stagger: .03,
            ease: Power4,
            duration: 1,
        }, 'start');
        tl.to(".rgt", {
            xPercent: 10,
            stagger: .03,
            ease: Power4,
            duration: 1,
        }, 'start');
    }, container);

    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        console.log(previous, latest);

        if (latest > previous) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <div ref={container} data-color="black" className="home section w-full h-[200vh] relative">
            <div className='w-full sticky top-0 left-0'>
                <motion.div
                    variants={{
                        visible: { y: 0 },
                        hidden: { y: "-100%" },
                    }}
                    animate={hidden ? "hidden" : "visible"}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="section w-[100vw] sm:w-full px-6 fixed top-0 left-0 z-[9]"
                >
                    <div className="w-full flex sm:flex items-center justify-between">
                        <div className="logo w-[12vh] h-[12vh] sm:w-[16vh] sm:h-10vh] cursor-pointer z-[9] text-xl p-4">
                            Unstop
                        </div>
                        <div className="hidden md:flex gap-2 items-center z-[9] cursor-pointer">
                            {["Home", "About", "Insight", "Team", "Contact"].map((item, index) => (
                                <h4 key={index} className={`${styles.links} h-[2.5vh] relative py[2.4vh] px-[2.2vh] text-center flex flex-col font-[Sansita] text-[2.1vh] overflow-hidden font-medium leading-[2.5vh]`}>
                                    <Link
                                        activeClass="active"
                                        to={item.toLowerCase()}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className={`atag ${styles.atag} relative`}
                                    >
                                        {item}
                                    </Link>
                                    <Link
                                        activeClass="active"
                                        to={item.toLowerCase()}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className={`atag ${styles.atag} relative`}
                                    >
                                        {item}
                                    </Link>
                                </h4>
                            ))}
                        </div>
                        <BiMenu
                            style={{
                                fontSize: "5.5vw",
                            }}
                            className='inline-block sm:hidden z-[9] cursor-pointer'
                        />
                    </div>
                </motion.div>

                <div className='btmtext absolute z-[4] bottom-[4%] left-[25%] text-center sm:text-start sm:bottom-[7%] sm:left-8 w-48'>
                    <h1 className='sm:text-[2vh] font-semibold'>
                        The only limit to our realization of tomorrow will be our doubts of today.
                    </h1>
                </div>
                <div
                    className={`vdodiv w-full h-screen absolute z-[3] top-0 left-0 overflow-hidden sm:overflow-visible ${styles.vdodiv}`}
                >
                    <video
                        className="absolute w-full h-screen object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        autoPlay
                        loop
                        muted
                        src={video}
                    >
                    </video>
                </div>
                <div
                    className="marqueecontainer w-full h-screen relative overflow-hidden"
                >
                    <div
                        className='heading absolute top-[12%] sm:top-[7%] left-1/2 -translate-x-1/2 w-72'
                    >
                        <h2 className='toptext text-[2.2vh] font-[Sansita] tracking-wide font-medium text-center'>Prioritizing the well-being and privacy of users in every innovation</h2>
                    </div>

                    <div
                        className='slidesm absolute scale-[5] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]'
                    >
                        <div className='row'>
                            <Row
                                translateClass="-translate-x-1/2"
                                direction="lft"
                            />
                            <Row
                                translateClass="-translate-x-2/3"
                                direction="rgt"
                            />
                            <Row
                                translateClass="-translate-x-1/4"
                                direction="lft"
                            />
                            <Row
                                translateClass="-translate-x-1/3"
                                direction="rgt"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

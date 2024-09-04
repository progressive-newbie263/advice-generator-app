import React, {useState, useEffect} from "react";
import PdDesktop from "./svgComponent/pdDesktop.jsx";
import Dice from "./svgComponent/Dice.jsx";
import PdMobile from "./svgComponent/pdMobile.jsx";

function Advice() {
  //useEffect (an empty array) only when the component mounts
  useEffect(() => {
    getAdvice()
  }, []); 

  const [isLoaded, setIsLoaded] = useState(false);
  const [advice, setAdvice] = useState({});
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 600);
 
  //adjusting image from screensize:
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  //fetching data from API:
  const getAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice'); //api given by challenge
      const result = await response.json();
      setIsLoaded(true);
      setAdvice(result.slip);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  const adviceDisplay = () => {
    setIsLoaded(false);

    setTimeout(() => {
      getAdvice();
    },500); //0.5 secs ? Or maybe should be a bit longer
  }

  return (
    //remember to set tailwind component
    <div className="relative">
      {/* 
        text color: neon green/ hsl(150, 100%, 66%) 
        tracking-[x em] is letter-spacing
      */}
      <span className="text-center text-[#52ffa8] text-xs tracking-[0.25em]"> 
        ADVICE #{advice.id}
      </span>

      <div className="text-2xl font-bold mb-6 mt-4">
        "{advice.advice}"
      </div>
      

      {/* if screen is larger than 600px return PdDesktop component
          else return pdMobile component.*/}
      {isLargeScreen ? (
        <div className="mb-8">
        {/* <img src="./src/images/pattern-divider-desktop.svg" alt="icon-divider"/> */}
          <PdDesktop alt="icon-desktop-divider" />
        </div>
      ) : (
        <div className="mb-8">
        {/* <img src="./src/images/pattern-divider-desktop.svg" alt="icon-divider"/> */}
          <PdMobile alt="icon-mobile-divider" />
        </div>
      )}
      
      
      {/*  bg-color: neon green/ 
        hsl: hsl(150, 100%, 66%) or 
        rgb: rgb(82, 255, 168) or
        hex: #52ffa8

        - idk why, but it does not allow to enter/ break the shadow into seperated line.
      */}
      <button className={`bg-[#52ffa8] absolute -bottom-[60px] right-[165px] rounded-full p-4 
      transition-all ease-in-out delay-150 
        hover:shadow-[0_0_15px_hsla(150,100%,66%,0.5),_0_0_15px_hsla(150,100%,66%,0.5),_0_0_15px_hsl(150,100%,66%,0.5)]
      sm:right-[120px]
        ${!isLoaded ? 'loading' : ''}`} 
        onClick={adviceDisplay}
      >
        {/* <img src="./src/images/icon-dice.svg" alt="icon-submit" /> */}
        <Dice alt="icon-submit" />
      </button>
    </div>
  );
}

export default Advice
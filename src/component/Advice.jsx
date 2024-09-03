import React, {useState, useEffect} from "react";

function Advice() {
  //useEffect (an empty array) only when the component mounts
  useEffect(() => {
    getAdvice()
  }, []); 

  const [isLoaded, setIsLoaded] = useState(false);
  const [advice, setAdvice] = useState({});

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
    <div className="flex items-center justify-center h-fit w-[400px]">
      <div className="">
        <div className="">ADVICE #{advice.id}</div>
        <div className="">"{advice.advice}"</div>
        <div className="">
          <img src="./src/images/pattern-divider-desktop.svg" alt="icon-divider" />
        </div>
        <button className={`advice-generator-button ${!isLoaded ? 'loading' : ''}`} onClick={adviceDisplay}>
          <img src="./src/images/icon-dice.svg" alt="icon-submit" />
        </button>
      </div>
    </div>
  );
}

export default Advice
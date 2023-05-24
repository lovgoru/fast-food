import { useState, useEffect } from "react";
import Special from "../components/Special";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Home = () => {
  const [specials, setSpecials] = useState(null);
  const [shownDiv, setShownDiv] = useState(0);

  useEffect(() => {
    const fetchSpecials = async () => {
      const response = await fetch("http://localhost:8080/api/foods/specials");
      const json = await response.json();

      if (response.ok) {
        setSpecials(json);
      }
    };

    fetchSpecials();
  }, []);

  const nextSpecial = () => {
    setShownDiv((shownDiv + 1) % specials.length);
  };

  const previousSpecial = () => {
    setShownDiv((shownDiv - 1 + specials.length) % specials.length);
  };

  return (
    <div className="specials-div">
      <h2>Popularni proizvodi</h2>
      {specials && (
        <div className="special-with-arrays">
          <FaChevronLeft onClick={previousSpecial} className="array" />
          <Special special={specials[shownDiv]} />
          <FaChevronRight onClick={nextSpecial} className="array" />
        </div>
      )}
    </div>
  );
};

export default Home;

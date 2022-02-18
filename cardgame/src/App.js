import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import naruto_img from "./img/naruto.jpeg";
import kakashi_img from "./img/kakashi.jpeg";
import sasuke_img from "./img/sasuke.jpg";
import itachi_img from "./img/itachi.jpeg";


function App() {
  const [totalscore, setTotalScore] = useState(0);
  const [clickedArray, setclickedArray] = useState([]);

  const add_record = (name) => {
    if (clickedArray.includes(name)) {
      setTotalScore(0);
      setclickedArray([]);
    } else {
      setclickedArray([...clickedArray, name]);
      setTotalScore(totalscore + 1);
    }
  };
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  let card_array = [
    { name: "Naruto", description: "Seventh Hokage",source:naruto_img},
    { name: "Sasuke", description: "The last Uchiha",source:sasuke_img },
    { name: "Kakashi", description: "The copy ninja",source:kakashi_img },
    { name: "Itachi", description: "Itachi of the Sharingan",source:itachi_img },

  ];
  return (
    <div className="App">
      <div>Total Score :{totalscore}</div>
      {shuffle(card_array).map(({ name, description,source }) => {
        return (
          <Card
            name={name}
            description={description}
            add_record={(name) => {
              add_record(name);
            }}
            source={source}
          />
        );
      })} 
    </div>
  );
}

export default App;

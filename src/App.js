import "./app.css";
import { useState } from "react";
import data from "./data";
function App() {
  const [click, setClick] = useState(0);
  const [total, setTotal] = useState(0);
  const [dizi, setDizi] = useState([]);
  const handleclick = (item) => {
    setClick(click + 1);
    setTotal(total + item.id);
    setDizi([...dizi, item]);
  };

  const handleRandom = () => {
    data.sort(() => 0.5 - Math.random());
    data.map((item) => {
      item.disabled = false;
      item.check = false;
    });

    setClick(0);
    setTotal(0);
    setDizi([]);
  };

  const fonk = async () => {
    function timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    if (click) {
      dizi[0].disabled = true;
      if (dizi[0].id === 5) {
        dizi[0].disabled = false;
        dizi[0].check = true;
      }
      dizi[1].check = true;
      if (click === 2) {
        dizi[1].disabled = true;
        await timeout(1000);
        if (total === 10) {
          dizi.map((item) => {
            item.disabled = true;
          });
        } else {
          dizi[0].check = false;
          dizi[1].check = false;
          dizi.map((item) => (item.disabled = false));
        }
        setClick(0);
        setTotal(0);
        setDizi([]);
      }
    }
  };
  fonk();
  let render = data.map((item) => {
    return (
      <div className="block-item" key={item.id}>
        <button
          className="btn "
          disabled={item.disabled}
          onClick={() => {
            handleclick(item);
          }}
        >
          {item.id === 5 ? item.check && item.id : item.disabled && item.id}
        </button>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="block">{render}</div>
      <div className="container-btn">
        <button className="btn" onClick={handleRandom}>
          Karıştır
        </button>
      </div>
    </div>
  );
}
export default App;

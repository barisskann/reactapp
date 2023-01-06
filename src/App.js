import "./app.css";
import { useEffect, useState } from "react";
import data from "./data";
function App() {
  const [click, setClick] = useState(0);
  const [total, setTotal] = useState(0);
  const [dizi, setDizi] = useState([]);
  const [veri, setVeri] = useState(0);
  const handleclick = (item) => {
    setClick(click + 1);
    setTotal(total + item.id);
    setDizi([...dizi, item]);
  };
  console.log(data);
  const handleRandom = () => {
    setVeri(veri + 1);
  };
  if (click === 2) {
    if (total === 10) {
      dizi[0].disabled = true;
      dizi[1].disabled = true;
    }
    setClick(0);
    setTotal(0);
    setDizi([]);
  }
  useEffect(() => {
    data.sort(() => 0.5 - Math.random());
  }, [veri]);
  let render = data.map((item) => {
    return (
      <span key={item.id}>
        <button
          disabled={item.disabled}
          onClick={() => {
            handleclick(item);
          }}
        >
          {item.id}
        </button>
      </span>
    );
  });

  return (
    <div>
      <div>{render}</div>
      <div>{click}</div>
      <div>{total}</div>
      <button onClick={handleRandom}>wqeqsw</button>
    </div>
  );
}
export default App;

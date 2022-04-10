import { useEffect, useState } from 'react';
import './App.css';
import Redagavimas from './Components/crud/Redagavimas';
import Rusiuoti from './Components/crud/Rusiuoti';
import Scooters from './Components/crud/Scooters';
// import axios from 'axios';



function App() {

  const [scooters, setScooters] = useState([]);
  const [lastUpdate, setlastUpdate] = useState(Date.now());
  const [redagavimasId, setRedagavimasId] = useState(0); // modal
  const [paspirtukasSkaiciuoti, setPaspirtukasSkaiciuoti] = useState(0);
  const [ridaSkaiciuoti, setRidaSkaiciuoti] = useState(0);

    useEffect(() => {
      let data = localStorage.getItem('scooters');
      if (null === data) {
          localStorage.setItem('scooters', JSON.stringify([]));
          setScooters([]);
      }
      else {
          setScooters(JSON.parse(data));
      }
  }, []);

  const cancel = () => {
    setRedagavimasId(0);
}

const show = id => {
    setRedagavimasId(id);
}

// const getScooter = () => {
//   return scooters.filter(a => a.id === modal)[0];
// }

    // const create = data => {
    //     const scooter = {
    //         type: data.type,
    //         color: data.color,
    //         isalive: data.isalive,
    //         id: getNewId()
    //     }
    //     // localStorage logic
    //     const newData = [...scooters, scooter];
    //     localStorage.setItem('scooters', JSON.stringify(newData));
    //     //

    //     setScooters(scooters => [...scooters, scooter]);
    // }

  return (

    <div className="app">
      <div className="top">
        <h1 style={{ marginTop: "8px", marginBottom: "10px", fontSize: "50px", letterSpacing: "3px", color: "white", textAlign: "center" }}>Paspirtukų nuoma</h1>
      </div>
        <h4>Lentelė</h4>
        <div className="table-wrapper">
          <table className="fl-table">
            <thead>
              <tr>
                <th>--</th>
                <th>--</th>
                <th>--</th>
                <th>--</th>
                <th>--</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Content 1</td>
                <td>Content 1</td>
                <td>Content 1</td>
                <td>Content 1</td>
                <td>Content 1</td>
              </tr>
              <tr>
                <td>Content 2</td>
                <td>Content 2</td>
                <td>Content 2</td>
                <td>Content 2</td>
                <td>Content 2</td>
              </tr>
              <tr>
                <td>Content 3</td>
                <td>Content 3</td>
                <td>Content 3</td>
                <td>Content 3</td>
                <td>Content 3</td>
              </tr>
            </tbody>
          </table>
      </div>
      <Scooters></Scooters>
      <Rusiuoti></Rusiuoti>
      <Redagavimas></Redagavimas>
      <div className="bottom">

      </div>

    </div>

  );
}
export default App;
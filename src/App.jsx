import { useEffect, useState } from 'react';
import Create from './Components/crud/Create';
import Rusiuoti from './Components/crud/Rusiuoti';
import Scooters from './Components/crud/Scooters';
// import axios from 'axios';

import "./crud.scss" // NEPAMIRŠTI, kitaip neveiks scss


const data = [
  {
    id: 1,
    registrationCode: "08",
    isBusy: 1,
    lastUseTime: "03/04/2022",
    totalRideKilometres: 100.51,
  }, {
    id: 2,
    registrationCode: "12",
    isBusy: 1,
    lastUseTime: "11/04/2022",
    totalRideKilometres: 55.50,
  },
];

function App() {

  const [scooters, setScooters] = useState(data);
  // const [Id, setId] = useState(0);
  // const [registrationCode, setRegistrationCode] = useState(0);
  // const [isBusy, setisBusy] = useState(0);
  // const [lastUseTime, setLastUseTime] = useState(Date.now());
  // const [totalRideKilometres, setTotalRideKilometres] = useState(0);

  //     useEffect(() => {
  //       let data = localStorage.getItem('scooters');
  //       if (null === data) {
  //           localStorage.setItem('scooters', JSON.stringify([]));
  //           setScooters([]);
  //       }
  //       else {
  //           setScooters(JSON.parse(data));
  //       }
  //   }, []);

  //   const cancel = () => {
  //     setRedagavimasId(0);
  // }

  // const show = id => {
  //     setRedagavimasId(id);
  // }

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
        <h1 className="h1">Colt</h1>
        <h4 className="h4">paspirtukų nuoma</h4>
      </div>
      <div>
        <Create></Create>
        <div className="btn">
      </div>
        <Rusiuoti></Rusiuoti>
        <h4></h4>
        <Scooters scooters={scooters}></Scooters>

      </div>

    </div>

  );
}
export default App;
import Scooter from "./Scooter";
// import {useEffect, useState} from 'react';
// import axios from 'axios';


function Scooters({ scooters, deleteScooter, show }) {

    // const [scooters, setScooters] = useState([]);

    // useEffect(() => {

    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(res => {
    //         console.log(res.data);
    //         setScooters(res.data);
    //     })

    // }, []);



    return (
        <div className="table-wrapper">
            <h2 className="table-title">paspirtukų suvestinė</h2>
            <table className="fl-table">
                <thead>

                    <tr>
                        <th>Reg. numeris</th> {/* Atvaizduojama registrationCode  reikšmė (neredaguojama) */}
                        <th>Naudojimo data</th> {/* Šalia įrašo su paskutinio naudojimo data (neredaguojama) */}
                        <th>Rida (km)</th> {/* Šalia laukelio su paspirtuko rida (kilometrais, neredaguojama) */}
                        <th>Nuvažiuota (km)</th> {/* turi būti laukelis, kuriame galima būtų įvesti tos dienos paspirtuku nuvažiuotą atstumą. Per dieną nuvažiuoti kilometrai sumuojasi su bendru kiekiu ir suma įrašoma į localStorage. */}
                        <th>Užimtas / Laisvas</th> {/* Įrašas iš localStorage laukelio isBusy turi būti paverčiamas į “užimtas” arba “laisvas”, priklausomai nuo laukelio reikšmės.*/}
                    </tr>
                </thead>
                {
                    scooters.map((scooter) => (<Scooter key={scooter.id} scooter={scooter} />))
                }

            </table>
        </div>
    )

}
export default Scooters;

{/* Naudodami React biblioteką sukurkite vieno puslapio aplikaciją (SPA), kurioje vartotojas galėtų atlikti pilną “Kolt” paspirtukų administravimą (CRUD).  */ }
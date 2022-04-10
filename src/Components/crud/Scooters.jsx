import Scooter from "./Scooter";
// import {useEffect, useState} from 'react';
// import axios from 'axios';


function Scooters({ scooter, deleteScooter, show }) { 
    
    // const [scooters, setScooters] = useState([]);

    // useEffect(() => {

    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(res => {
    //         console.log(res.data);
    //         setScooters(res.data);
    //     })

    // }, []);

    

    return (
        <ul>
            {
                // scooters.map((scooter) => (<Scooter key={scooter.id} scooter={scooter} deleteScooter={deleteScooter} />))
            } 
        </ul>
    )

}
export default Scooters;

{/* Naudodami React biblioteką sukurkite vieno puslapio aplikaciją (SPA), kurioje vartotojas galėtų atlikti pilną “Kolt” paspirtukų administravimą (CRUD).  */}
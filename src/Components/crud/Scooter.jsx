// import dateformat from 'dateformat';

function Scooter({ scooter, deleteScooter, show }) { 

    const handleDelete = id => {
        deleteScooter(parseInt(id));
    }
    
    return (
        <>
        
        <tr>
                    <td>{scooter.registrationCode}</td>
                    <td>{scooter.lastUseTime}</td>
                    <td>{scooter.newDate}</td>
                    <td>{scooter.totalRideKilometres}</td>
                    <td>{scooter.isBusy}</td>
                        <td>
                        <button type="button" className="btn delete" onClick={() => deleteScooter(scooter.id)}>
                            Trinti
                        </button>
                        </td>
                        <td>
                        <button type="button" className="btn edit" onClick={() => show(scooter.id)}>
                            Redaguoti
                        </button>
                        </td>
        </tr>
        </>
    )

}
export default Scooter;
{/* Kiekvienas paspirtukas turi turėti savo vizualiai atskirtą aprašą (eilutę), kuriame būtų pateikta visa informaciją apie jį. Šalia turi būti mygtukas “Trinti”, kurį paspaudus atitinkamo paspirtuko įrašas būtų pašalinamas iš localStorage. Šalia turi būti mygtukas “Redaguoti”, kurį paspaudus atitinkamo paspirtuko įrašas būtų atvaizduojamas modal lange su galimybe jį redaguoti, o redaguotą įrašą išsaugoti  localStorage.   */}
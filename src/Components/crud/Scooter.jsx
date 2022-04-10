// import dateformat from 'dateformat';

function Scooter({ scooter, deleteScooter, show }) { 

    const handleDelete = id => {
        deleteScooter(parseInt(id));
    }
    
    return (
        <>
        {/* <div className="col-lg-12 col-md-12 col-sm-10">
            <div className="card m-2">
                <div style={{ boxShadow: "5px 5px #888888" }} className="card-body"> */}
                    {/* <h5>Paspirtuko registracijos kodas</h5>
                    <h6>///{}</h6>
                    <span>Paspirtuko paskutinio naudojimo data: {}</span>
                    <span>Paspirtuko nuvažiuoti kilometrai: {}</span>
                    <span>Laisvas: {}</span> */}
                <li>
                    <div className="content">
                        <span>{scooter.type}</span>
                        <i>{scooter.color}</i>
                        {
                            scooter.isalive ? <div className="isalive"></div> : null
                        }
                    </div>
                    <div className="butons">
                        <button type="button" className="btn" onClick={() => deleteScooter(scooter.id)}>
                            Trinti
                        </button>
                        <button type="button" className="btn" onClick={() => show(scooter.id)}>
                            Redaguoti
                        </button>
                    </div>
                </li>
                {/* </div>
            </div>
        </div> */}
        </>
    )

}
export default Scooter;
{/* Kiekvienas paspirtukas turi turėti savo vizualiai atskirtą aprašą (eilutę), kuriame būtų pateikta visa informaciją apie jį. Šalia turi būti mygtukas “Trinti”, kurį paspaudus atitinkamo paspirtuko įrašas būtų pašalinamas iš localStorage. Šalia turi būti mygtukas “Redaguoti”, kurį paspaudus atitinkamo paspirtuko įrašas būtų atvaizduojamas modal lange su galimybe jį redaguoti, o redaguotą įrašą išsaugoti  localStorage.   */}
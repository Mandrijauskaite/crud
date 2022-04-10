
function Rusiuoti() { //top

    return (

        <>
        <div className="container">
            <div className="row">
                <div className="column">
                    <div className="card m-3">
                        <div className="card-body">
                            <h5 className="">Rūšiuoti pagal:</h5>
                            <button type="button" className="btn">Paskutinio naudojimo data</button>
                            <button type="button" className="btn">Nuvažiuoti kilometrai</button>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card m-3">
                        <div className="card-body">
                            <h5>Statistika</h5>
                            <h6>Paspirtukų kiekis</h6>
                            <h6>Nuvažiuoti kilometrai</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    )

}
export default Rusiuoti;
{/* Užduotis 3.
Sukurkite rūšiavimo galimybę pagal nuvažiuotų kilometrų kiekį ir paskutinio naudojimo datą (sukurkite du mygtukus, kuriuos paspaudus paspirtukų aprašai išsirikiuotų atitinkama tvarka). Tam panaudokite React galimybes. */}
import { useEffect, useState } from 'react';

function Redagavimas() { // modal

    return (
        <>
        <div className=''>
            <h5 className=''>Redaguojama</h5>
            <div className=''>
                <input type="text" style={{ fontWeight: "border", techtAlign: "center" }} />
                <small className=''> Registracijos kodas</small>
            </div>
            <div className=''>
                <input type="text" style={{ fontWeight: "border", techtAlign: "center" }} />
                <small className=''> Paskutinio naudojimo data</small>
            </div>
            <div className=''>
                <input type="text" style={{ fontWeight: "border", techtAlign: "center" }} />
                <small className=''> Nauja data</small>
            </div>
            <div className=''>
                <input type="text" style={{ fontWeight: "border", techtAlign: "center" }} />
                <small className=''> Paspirtuko rida, km</small>
            </div>
            <div className=''>
                <input type="text" style={{ fontWeight: "border", techtAlign: "center" }} />
                <small className=''> Nuomos laikotarpiu nuvažiuotas atstumas, km</small>
            </div>
            <div>
                <input type="text" style={{ fontWeight: "border", techtAlign: "center" }} />
                <small className=''> Laisvas paspirtukas?</small>
            </div>
            <div>
                <label htmlFor="">Laisvas/Užimtas</label>
                <input type="text"  />
            </div>
        <button type="button" className="btn">SAUGOTI</button>
        </div>

        </>
    )

}
export default Redagavimas;

{/* Redagavimo langas turi atrodyti sekančiai. Atvaizduojama registrationCode  reikšmė (neredaguojama). Šalia įrašo su paskutinio naudojimo data (neredaguojama) turi būti tuščias laukelis su naujos datos įvedimu (redaguojama). Šalia laukelio su paspirtuko rida (kilometrais, neredaguojama) turi būti laukelis, kuriame galima būtų įvesti tos dienos paspirtuku nuvažiuotą atstumą. Per dieną nuvažiuoti kilometrai sumuojasi su bendru kiekiu ir suma įrašoma į localStorage. Įrašas iš localStorage laukelio isBusy turi būti paverčiamas į “užimtas” arba “laisvas”, priklausomai nuo laukelio reikšmės.  Šalia šio laukelio turi būti checkbox tipo įvedimas, kuris leistų keisti užimtumą. Duomenų redagavimas turi būti atliekamas paspaudus “Saugoti” mygtuką, esantį radagavimo modale. Registracijos kodas (aštuoni rand raidiniai skaitiniai simboliai) neturi būti radaguotinas (įrašomas tik kuriant naują paspirtuką). */}
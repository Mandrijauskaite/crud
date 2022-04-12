import { useState } from "react";

function Create({ create }) {

    const [text, setText] = useState('');
    const [date, setDate] = useState('--');
    const [number, setNumber] = useState(1);

    const handleCreate = () => {
        const data = {
            text: text,
            date: date,
            number: number
        }
        create(data);
        setText('');
        setDate('--');
        setNumber(1);
    }

    const handleInput = (e, d) => {
        switch (d) {
            case 'text':
                setText(e.target.value);
                break;
            case 'date':
                setDate(e.target.value);
                break;
            case 'number':
                setNumber(i => i === 0 ? 1 : 0);
                break;
            default:
        }
    }


    return (
        <div className="table-wrapper">
            <h2 className="table-title">Naujas paspirtukas</h2>
            <table className="fl-table">

                <thead>

                    <tr>
                        {/* <h2>Naujas paspirtukas</h2> */}
                        <td>
                            <label for="registration">Registracijos Nr.: </label>
                            <input type="text" name="registration" disadled value="20967855"></input>
                        </td>

                        <td>
                            <label for="date">Data: </label>
                            <input type="date" value></input>
                        </td>

                        <td>
                            <label for="distance">Nuvažiuota (km.): </label>
                            <input type="number" name="distance" min="0" value="0"></input>
                        </td>

                        <td>
                            <input type="checkbox" name id="form-checkbox"></input>
                            <button className="btn">Įkelti</button>
                        </td>

                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Create;

{/* Redagavimo langas turi atrodyti sekančiai. Atvaizduojama registrationCode  reikšmė (neredaguojama). Šalia įrašo su paskutinio naudojimo data (neredaguojama) turi būti tuščias laukelis su naujos datos įvedimu (redaguojama). Šalia laukelio su paspirtuko rida (kilometrais, neredaguojama) turi būti laukelis, kuriame galima būtų įvesti tos dienos paspirtuku nuvažiuotą atstumą. Per dieną nuvažiuoti kilometrai sumuojasi su bendru kiekiu ir suma įrašoma į localStorage. Įrašas iš localStorage laukelio isBusy turi būti paverčiamas į “užimtas” arba “laisvas”, priklausomai nuo laukelio reikšmės.  Šalia šio laukelio turi būti checkbox tipo įvedimas, kuris leistų keisti užimtumą. Duomenų redagavimas turi būti atliekamas paspaudus “Saugoti” mygtuką, esantį radagavimo modale. Registracijos kodas (aštuoni rand raidiniai skaitiniai simboliai) neturi būti radaguotinas (įrašomas tik kuriant naują paspirtuką). */ }
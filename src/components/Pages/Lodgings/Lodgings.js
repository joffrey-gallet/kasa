import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Err404 from "../Err404/Err404";
import data from "../../../data.json";
import Dropdown from "../../Layout/Dropdown/Dropdown";


const Lodgings = () => {
    const { id } = useParams();
    const [dataHouse, setDataHouse] = useState(
        data.filter((data) => data.id === id)[0]
    );
    useEffect(() => {
        setDataHouse(dataHouse);
    }, [dataHouse]);
    return dataHouse ? (
        <main>
            <section>
                <div>
                    <h1>{dataHouse.title}</h1>
                    <h2>{dataHouse.location}</h2>
                </div>
            </section>
            <section>
                <Dropdown
                    title="Description"
                    description={dataHouse.description}
                    className="LodgingsDropdown"
                />
                <Dropdown
                    title="Équipements"
                    description={dataHouse.equipments.map((list) => {
                        return <ul>{list}</ul>;
                    })}
                    className="LodgingsDropdown"
                />
            </section>
        </main>
    ) : (
        <Err404 />
    );
};



export default Lodgings;

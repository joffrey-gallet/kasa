import React from "react";
import Banner from "../../Layout/Banner/Banner";
import Card from "../../Layout/Card/Card";
import data from "../../../data.json";


const Home = () => {
    return (
        <div>
            <div>
                <Banner />
            </div>
            <main className="container">
                {data.map((data) => (
                    <Card
                        key={data.id}
                        title={data.title}
                        cover={data.cover}
                        id={`/lodgings/${data.id}`}
                    />
                ))}
            </main>
        </div>
    )
}


export default Home;
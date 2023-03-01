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
                {data.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        cover={item.cover}
                        id={`/lodgings/${item.id}`}
                    />
                ))}
            </main>
        </div>
    )
}


export default Home;
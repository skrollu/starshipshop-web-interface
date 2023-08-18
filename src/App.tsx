import { useKeycloak } from "@react-keycloak/web";
import "./App.sass";
import { FilterBar, FilterDialog } from "./shared/layout/filter-bar/filter-components.tsx";
import Header from "./shared/layout/header/header.tsx";
import HeroBanner from "./shared/layout/header/heroBanner.tsx";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState();

    const getData = async () => {
        axios.get("http://localhost:9103/api/v1/products/starship").then(data => {
            console.log(data);
            setData(data as any);
        }).catch(error => {
            console.log("Error occured", error);
        })
        // https://jsonplaceholder.typicode.com/todos/1
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Header />
            <HeroBanner />
            <div className="filter-container">
                <div className="center">
                    <FilterBar />
                </div>
                <FilterDialog />
            </div>
        </>
    );
}

export default App;

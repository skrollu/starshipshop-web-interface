import "./App.sass";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./config/store.ts";
import { fetchStarships } from "./features/starshipSlice.ts";
import { Starship } from "./models/starship.ts"

const LandingPage: React.FC = () => {
    const dispatch = useDispatch();
    const starships: Starship[] = useSelector((state: RootState) => state.starship.starships);

    useEffect(() => {
        dispatch(fetchStarships());
    }, [dispatch]);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }

    return (
        <div>
            <h1>Landing Page</h1>
            <ul>
                {starships.map((item) => (
                    <li>{item.name}</li>
                ))}
            </ul>
        </div >
    );

    // return (
    //     <>
    //         <Header />
    //         <HeroBanner />
    //         <div className="filter-container">
    //             <div className="center">
    //                 <FilterBar />
    //             </div>
    //             <FilterDialog />
    //         </div>
    //     </>
    // );
}

export default LandingPage;

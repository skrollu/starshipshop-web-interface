import "./App.sass";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./config/store.ts";
import { fetchStarshipsAsyncThunk } from "./features/starshipSlice.ts";
import { FilterBar } from "./shared/layout/filter-bar/filter-components.tsx";
import Header from "./shared/layout/header/header.tsx";
import HeroBanner from "./shared/layout/header/heroBanner.tsx";

const LandingPage: React.FC = () => {
    const { starshipsPage, loading } = useAppSelector((state) => state.starship);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchStarshipsAsyncThunk());
    }, []);

    return (
        <>
            <Header />
            <HeroBanner />
            <div id="filter-container">
                <FilterBar />
            </div>
            <ul id="starships-list">
                <>
                    {loading ?
                        "...loading"
                        :
                        <ul>
                            {
                                starshipsPage.content.map((starship) => <li key={starship.id}>{starship.description}</li>)
                            }
                        </ul>
                    }
                </>
            </ul>
        </>
    );
}

export default LandingPage;

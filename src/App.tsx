import "./App.sass";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./config/store.ts";
import { fetchStarshipsAsyncThunk } from "./features/starshipSlice.ts";

const LandingPage: React.FC = () => {
    const { starshipsPage, loading } = useAppSelector((state) => state.starship);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchStarshipsAsyncThunk());
    }, []);

    return (
        <div>
            <h1>Landing Page</h1>
            <ul>
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

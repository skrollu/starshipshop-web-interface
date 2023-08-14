import "./App.sass";
import {FilterBar, FilterDialog } from "./shared/layout/filter-bar/filter-components.tsx";
import Header from "./shared/layout/header/header.tsx";
import HeroBanner from "./shared/layout/header/heroBanner.tsx";

function App() {
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

import React from "react";
import './filter.sass'
import arrowDown from "../../../assets/images/arrow-down.svg"
import filterIcon from "../../../assets/images/filter-icon.svg"

function FilterBar() {
    return (
        <div id="filter-bar">
            <button id="sort-block">
                <span>sort</span>
                <img src={arrowDown} alt="" />
            </button>
            <button id="filter-block">
                <span>filter</span>
                <img src={filterIcon} alt="" />
            </button>
        </div>
    );
}

export default FilterBar;

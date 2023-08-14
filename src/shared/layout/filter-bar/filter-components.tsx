import React from "react";
import "./filter-components.sass";
import arrowDown from "../../../assets/images/arrow-down.svg";
import filterIcon from "../../../assets/images/filter-icon.svg";
import empireIcon from "../../../assets/images/empire.svg";
import rebelsIcon from "../../../assets/images/rebels.svg";

export const FilterBar = () => (
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

export const FilterDialog = () => (
    <div id="filter-dialog">
        <FilterList text="Model" />
        <FilterList text="Brand" />
        <FilterRange text="Numbers of engines" />
        <FilterRange text="Speed" />
        <FilterIcon iconUrl={empireIcon} />
        <FilterIcon iconUrl={rebelsIcon} />
    </div>
);

type FilterListProps = {
    text: string;
};

function FilterList({ text }: FilterListProps) {
    return (
        <button className="filter-list">
            <span>{text}</span>
            <img src={arrowDown} alt="" />
        </button>
    )
}
export { FilterList };

type FilterRangeProps = {
    text: string;
};

function FilterRange({ text }: FilterRangeProps) {
    return (
        <div className="filter-range">
            <span>{text}</span>
            <div id="range">
                <div className="min-range">
                    <label htmlFor="min-select">Min</label>
                    <select name="" id="min-select"></select>
                </div>
                <div className="max-range">
                    <label htmlFor="max-select">Max</label>
                    <select name="" id="max-select"></select>
                </div>
            </div>
        </div>
    )
}
export { FilterRange };

type FilterIconProps = {
    iconUrl: string;
};

function FilterIcon({ iconUrl }: FilterIconProps) {



    return (
        <div className="filter-icon">
            <button>
                <img src={iconUrl} alt="" />
            </button>
        </div>
    )
}
export { FilterIcon };
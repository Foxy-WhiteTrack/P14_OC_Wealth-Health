import React from 'react';
import FilterOptions from '../../components/FilterOptions/FilterOptions';
import SearchFilter from '../SearchFilter/SearchFilter';

import "./FilterZone.css";

export default function FilterZone() {

    return (
        <div className='filterZone'>
            <div className="ctn-nbr-entries">
                <FilterOptions />
            </div>
            <div>
                <SearchFilter />
            </div>
        </div>

    );
}
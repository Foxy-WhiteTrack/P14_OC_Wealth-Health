import React from 'react';
import FilterOptions from '../../components/FilterOptions/FilterOptions';
import SearchFilter from '../SearchFilter/SearchFilter';

/**
 * Composant de la zone de filtrage des employés.
 * @component
 * @returns {JSX.Element} Le composant de la zone de filtrage.
 */
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

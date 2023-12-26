import React from 'react';
import './Pagination.css';

export default function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
    // nbr total de pages
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // navigation (vers la page préc.)
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    // navigation (vers la page suiv.)
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="pagination">
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0 L0 8 L10 16"></path>
                </svg>
            </button>
            <span>
                {currentPage}
            </span>
            <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0 L10 8 L0 16"></path>
                </svg>
            </button>
        </div>
    );
}

import React from 'react';
import './Pagination.css';

/**
 * Composant pour gérer la pagination.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.totalItems - Le nombre total d'éléments à paginer.
 * @param {number} props.itemsPerPage - Le nombre d'éléments par page.
 * @param {number} props.currentPage - La page actuelle.
 * @param {function} props.onPageChange - La fonction de gestion du changement de page.
 * @returns {JSX.Element} Le composant de pagination.
 */
export default function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
    // nbr total de pages
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    /**
     * Fonction de navigation vers la page précédente.
     */
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    /**
     * Fonction de navigation vers la page suivante.
     */
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

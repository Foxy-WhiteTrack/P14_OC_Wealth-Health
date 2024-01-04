import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Outlet } from 'react-router-dom';

/**
 * Composant de mise en page de base.
 * @component
 * @returns {JSX.Element} Le composant de mise en page.
 */
export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

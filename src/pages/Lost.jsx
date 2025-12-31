import React from 'react';
import Header from '../components/Header';
import LostItems from '../components/LostItems';
import Footer from '../components/Footer';

const Lost = () => {
    return (
        <div>
            <Header />
            <main>
                <LostItems />
            </main>
            <Footer />
        </div>
    );
};

export default Lost;

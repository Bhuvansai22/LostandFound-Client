import React from 'react';
import Header from '../components/Header';
import FoundItems from '../components/FoundItems';
import Footer from '../components/Footer';

const Found = () => {
    return (
        <div>
            <Header />
            <main>
                <FoundItems />
            </main>
            <Footer />
        </div>
    );
};

export default Found;

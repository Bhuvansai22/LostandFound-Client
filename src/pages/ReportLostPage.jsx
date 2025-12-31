import React from 'react';
import Header from '../components/Header';
import ReportLost from '../components/ReportLost';
import Footer from '../components/Footer';

const ReportLostPage = () => {
    return (
        <div>
            <Header />
            <main>
                <ReportLost />
            </main>
            <Footer />
        </div>
    );
};

export default ReportLostPage;

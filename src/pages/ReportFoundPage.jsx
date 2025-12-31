import React from 'react';
import Header from '../components/Header';
import ReportFound from '../components/ReportFound';
import Footer from '../components/Footer';

const ReportFoundPage = () => {
    return (
        <div>
            <Header />
            <main>
                <ReportFound />
            </main>
            <Footer />
        </div>
    );
};

export default ReportFoundPage;

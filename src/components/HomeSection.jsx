import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeSection = () => {
    const navigate = useNavigate();

    const goToLost = () => {
        navigate('/lost');
    };

    const goToFound = () => {
        navigate('/found');
    };

    return (
        <section id="home">
            <div id="left-main">
                <p id="heading">Find & <br />Recover <br /><span>With Ease</span></p>
                <p>
                    Experience effortless recovery with our dedicated lost and found
                    service.
                </p>
            </div>
            <div id="right-main">
                <div className="btns">
                    <button id="lost" type="submit" onClick={goToLost}>
                        Lost 🔍
                    </button>
                    <button id="found" type="submit" onClick={goToFound}>
                        Found ✅
                    </button>
                </div>

                <div className="sample-img">
                    <img id="s1" src="/images/s1.svg" alt="random-image" />
                    <img id="s2" src="/images/s2.svg" alt="random-image" />
                </div>
            </div>
        </section>
    );
};

export default HomeSection;

import React from 'react';

const Hero = () => {
    const scrollToLost = () => {
        document.getElementById('Lost-items').scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToFound = () => {
        document.getElementById('found-items-section').scrollIntoView({ behavior: 'smooth' });
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
                    <button id="lost" type="submit" onClick={scrollToLost}>
                        Lost <img src="/images/lost.svg" alt="lost" />
                    </button>
                    <button id="found" type="submit" onClick={scrollToFound}>
                        Found <img src="/images/found.svg" alt="found" />
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

export default Hero;

import React from 'react';
import Banner from '../Banner/Banner';
import Information from '../Information/Information';
import Interesting from '../Interesting/Interesting';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Information></Information>
            <Interesting></Interesting>
        </div>
    );
};

export default Home;
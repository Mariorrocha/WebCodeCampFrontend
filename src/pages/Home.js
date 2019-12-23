import React from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import EventPresentation from '../components/Event-presentation';
import FeaturedConferences from '../components/Featured-conferences';
import Conferencists from '../components/Conferencists';
import GeneralData from '../components/General-data';
import Prices from '../components/Prices';
import Map from '../components/Map';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Counter from '../components/Counter';
import FooterTop from '../components/Footer-top';
import Copyright from '../components/Copyright';

const Home = () => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 1);
    return (
        <React.Fragment>
            <header>
                <Hero />
            </header>
                <Navigation />
            <main>
                <EventPresentation />
                <FeaturedConferences />
                <Conferencists />
                <GeneralData />
                <Prices />
                <Map />
                <Testimonials />
                <Newsletter />
                <Counter deadline={deadline}/>
            </main>
            <footer>
                <FooterTop />
                <Copyright />
            </footer>
        </React.Fragment>
    );
};

export default Home;

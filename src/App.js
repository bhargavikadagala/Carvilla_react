

import React from 'react';



import Header from './components/Header';
import WelcomeHero from './components/WelcomeHero';
import Service from './components/Service';
import NewCars from './components/NewCars';
import FeaturedCars from './components/FeaturedCars';
import ClientsSay from './components/ClientsSay';
import Brand from './components/Brand';
import Blog from './components/Blog';
import Footer from './components/Footer';



function App() {
  return (
    <div className = "App">
      <Header />
      <WelcomeHero />
      <Service />
      <NewCars />
      <FeaturedCars />
      <ClientsSay />
      <Brand />
      <Blog />
      <Footer />
     
    </div>
  );
}

export default App;
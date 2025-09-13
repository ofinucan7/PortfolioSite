import React from 'react';
import Nav from '../../../components/Nav';
import { Footer } from '../../../components/Footer';
import ProjLeftCol from './ProjLeftCol';
import ProjRightCol from './ProjRightCol';

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <div className="w-full z-10">
        <Nav />
      </div>

      <main className="flex-grow w-full px-4 py-8 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjLeftCol />
          <ProjRightCol />
        </div>
      </main>

      <div className="w-full z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
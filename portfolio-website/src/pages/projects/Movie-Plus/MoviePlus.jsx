import React from 'react';
import Nav from '../../../components/Nav';
import { Footer } from '../../../components/Footer';
import ProjLeftCol from './ProjLeftCol';
import ProjRightCol from './ProjRightCol';

const MoviePlus = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <div className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* left col (title, links, stack) */}
          <div>
            <ProjLeftCol />
          </div>

          {/* right col (imgs/interaction, dialogue) */}
          <div>
            <ProjRightCol />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MoviePlus;
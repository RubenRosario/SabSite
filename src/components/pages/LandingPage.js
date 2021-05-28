import React, { useEffect, useState } from 'react';
import Renato from '../../Renato_medium.png';
import Danny from '../../Danny_medium.png';
import './LandingPage.css';

const LandingPage = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="landing-page">
      <section className="art-container">
        <img
          className="renato"
          src={Renato}
          alt="renato"
          style={{ transform: `translateX(-${offsetY * 0.2}px)` }}
        />
        <img
          className="danny"
          src={Danny}
          alt="danny"
          style={{ transform: `translateX(${offsetY * 0.2}px)` }}
        />
      </section>
      <section className="about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eaque
        ipsam dicta adipisci beatae magnam expedita atque voluptates sit
        officiis consectetur, temporibus autem illo numquam ipsa nam mollitia
        commodi. Rem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Maiores eaque ipsam dicta adipisci beatae magnam expedita atque
        voluptates sit officiis consectetur, temporibus autem illo numquam ipsa
        nam mollitia commodi. Rem.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Maiores eaque ipsam dicta adipisci beatae magnam
        expedita atque voluptates sit officiis consectetur, temporibus autem
        illo numquam ipsa nam mollitia commodi. Rem.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Maiores eaque ipsam dicta adipisci beatae
        magnam expedita atque voluptates sit officiis consectetur, temporibus
        autem illo numquam ipsa nam mollitia commodi. Rem.Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Maiores eaque ipsam dicta adipisci
        beatae magnam expedita atque voluptates sit officiis consectetur,
        temporibus autem illo numquam ipsa nam mollitia commodi. Rem.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Maiores eaque ipsam dicta
        adipisci beatae magnam expedita atque voluptates sit officiis
        consectetur, temporibus autem illo numquam ipsa nam mollitia commodi.
        Rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        eaque ipsam dicta adipisci beatae magnam expedita atque voluptates sit
        officiis consectetur, temporibus autem illo numquam ipsa nam mollitia
        commodi. Rem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Maiores eaque ipsam dicta adipisci beatae magnam expedita atque
        voluptates sit officiis consectetur, temporibus autem illo numquam ipsa
        nam mollitia commodi. Rem.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Maiores eaque ipsam dicta adipisci beatae magnam
        expedita atque voluptates sit officiis consectetur, temporibus autem
        illo numquam ipsa nam mollitia commodi. Rem.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Maiores eaque ipsam dicta adipisci beatae
        magnam expedita atque voluptates sit officiis consectetur, temporibus
        autem illo numquam ipsa nam mollitia commodi. Rem.Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Maiores eaque ipsam dicta adipisci
        beatae magnam expedita atque voluptates sit officiis consectetur,
        temporibus autem illo numquam ipsa nam mollitia commodi. Rem.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Maiores eaque ipsam dicta
        adipisci beatae magnam expedita atque voluptates sit officiis
        consectetur, temporibus autem illo numquam ipsa nam mollitia commodi.
        Rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        eaque ipsam dicta adipisci beatae magnam expedita atque voluptates sit
        officiis consectetur, temporibus autem illo numquam ipsa nam mollitia
        commodi. Rem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Maiores eaque ipsam dicta adipisci beatae magnam expedita atque
        voluptates sit officiis consectetur, temporibus autem illo numquam ipsa
        nam mollitia commodi. Rem.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Maiores eaque ipsam dicta adipisci beatae magnam
        expedita atque voluptates sit officiis consectetur, temporibus autem
        illo numquam ipsa nam mollitia commodi. Rem.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Maiores eaque ipsam dicta adipisci beatae
        magnam expedita atque voluptates---------- {offsetY}------ sit officiis
        consectetur, temporibus autem illo numquam ipsa nam mollitia commodi.
        Rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        eaque ipsam dicta adipisci beatae magnam expedita atque voluptates sit
        officiis consectetur, temporibus autem illo numquam ipsa nam mollitia
        commodi. Rem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Maiores eaque ipsam dicta adipisci beatae magnam expedita atque
        voluptates sit officiis consectetur, temporibus autem illo numquam ipsa
        nam mollitia commodi. Rem.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Maiores eaque ipsam dicta adipisci beatae magnam
        expedita atque voluptates sit officiis consectetur, temporibus autem
        illo numquam ipsa nam mollitia commodi. Rem.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Maiores eaque ipsam dicta adipisci beatae
        magnam expedita atque voluptates sit officiis consectetur, temporibus
        autem illo numquam ipsa nam mollitia commodi. Rem.Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Maiores eaque ipsam dicta adipisci
        beatae magnam expedita atque voluptates sit officiis consectetur,
        temporibus autem illo numquam ipsa nam mollitia commodi. Rem.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Maiores eaque ipsam dicta
        adipisci beatae magnam expedita atque voluptates sit officiis
        consectetur, temporibus autem illo numquam ipsa nam mollitia commodi.
        Rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        eaque ipsam dicta adipisci beatae magnam expedita atque voluptates sit
        officiis consectetur, temporibus autem illo numquam ipsa nam mollitia
        commodi. Rem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Maiores eaque ipsam dicta adipisci beatae magnam expedita atque
        voluptates sit officiis consectetur, temporibus autem illo numquam ipsa
        nam mollitia commodi. Rem.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Maiores eaque ipsam dicta adipisci beatae magnam
        expedita atque voluptates sit officiis consectetur, temporibus autem
        illo numquam ipsa nam mollitia commodi. Rem.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Maiores eaque ipsam dicta adipisci beatae
        magnam expedita atque voluptates sit officiis consectetur, temporibus
        autem illo numquam ipsa nam mollitia commodi. Rem.Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Maiores eaque ipsam dicta adipisci
        beatae magnam expedita atque voluptates sit officiis consectetur,
        temporibus autem illo numquam ipsa nam mollitia commodi. Rem.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Maiores eaque ipsam dicta
        adipisci beatae magnam expedita atque voluptates sit officiis
        consectetur, temporibus autem illo numquam ipsa nam mollitia commodi.
        Rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        eaque ipsam dicta adipisci beatae magnam expedita atque voluptates sit
        officiis consectetur, temporibus autem illo numquam ipsa nam mollitia
        commodi. Rem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Maiores eaque ipsam dicta adipisci beatae magnam expedita atque
        voluptates sit officiis consectetur, temporibus autem illo numquam ipsa
        nam mollitia commodi. Rem.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Maiores eaque ipsam dicta adipisci beatae magnam
        expedita atque voluptates sit officiis consectetur, temporibus autem
        illo numquam ipsa nam mollitia commodi. Rem.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Maiores eaque ipsam dicta adipisci beatae
        magnam expedita atque voluptates sit officiis consectetur, temporibus
        autem illo numquam ipsa nam mollitia commodi. Rem.
      </section>
    </div>
  );
};
export default LandingPage;

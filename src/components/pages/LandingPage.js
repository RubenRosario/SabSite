import React, { useEffect, useState } from 'react';
import RenatoM from '../../Renato_medium.png';
import DannyM from '../../Danny_medium.png';
import RenatoS from '../../Renato_small.png';
import DannyS from '../../Danny_small.png';
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
        <picture
          className="danny"
          style={{
            transform: `translate(-${offsetY * 0.1}px, ${offsetY * 0.5}px)`,
          }}
        >
          <source srcSet={DannyM} media="(min-width: 600px)" />
          <source srcSet={DannyS} media="(min-width: 300px)" />
          <img src={DannyM} alt="danny" />
        </picture>
        <picture
          className="renato"
          style={{
            transform: `translate(${offsetY * 0.1}px, ${offsetY * 0.5}px)`,
          }}
        >
          <source srcSet={RenatoM} media="(min-width: 600px)" />
          <source srcSet={RenatoS} media="(min-width: 300px)" />
          <img src={RenatoM} alt="renato" />
        </picture>
      </section>
      <div className="sab-lettering">SAB</div>
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

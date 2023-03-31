// components/Home.js

import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Home = () => {
  const { t } = useTranslation('home');

  return (
    <section id="home">
      <div className="container">
        <div className="home-content">
          <h1>{t('title')}</h1>
          <p>{t('description')}</p>
        </div>
      </div>
    </section>
  );
};

export default Home;

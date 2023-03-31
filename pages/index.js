// pages/index.js

import useTranslation from 'next-translate/useTranslation';
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import WorkingPrinciples from '../components/WorkingPrinciples';

export default function IndexPage() {
  const { t } = useTranslation('home');

  return (
    <>
      <Home />
      <About />
      <Portfolio />
      <Blog />
      <WorkingPrinciples />
    </>
  );
}

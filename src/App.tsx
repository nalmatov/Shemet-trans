import { lazy } from 'react';


const Layout = lazy(() => import('@components/Layout/Layout'));
const Hero = lazy(() => import('@components/Hero/Hero'));
const AboutUS = lazy(() => import('@components/AboutUs/AboutUS'));
const Advantages = lazy(() => import('@components/Advantages/Advantages'));
const Delivery = lazy(() => import('@components/Delivery/Delivery'));
const Calculate = lazy(() => import('@components/Calculate/Calculate'));
const Vacancies = lazy(() => import('@components/Vacancies/Vacancies'));

function App() {
  return (
    <Layout>
      <main className='content'>
        <Hero/>
        <AboutUS/>
        <Advantages/>
        <Delivery/>
        <Calculate/>
        <Vacancies/>
      </main>
    </Layout>
  )
}

export default App

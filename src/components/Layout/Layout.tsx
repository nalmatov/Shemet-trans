import { lazy } from 'react';

const Header = lazy(() => import('@components/Header/Header'));
const Footer = lazy(() => import('@components/Footer/Footer'));

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout;

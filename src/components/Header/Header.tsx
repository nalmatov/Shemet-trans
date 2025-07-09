import { lazy, useEffect, useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import logo from '../../assets/icons/logo.svg';
import telegram from '../../assets/icons/telegram.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import viber from '../../assets/icons/viber.svg';
import { nav_links } from '../../common/contstants';
import classes from './Header.module.scss';


const Burger  = lazy(() => import('@components/Burger/Burger'));

const Header = () => {
  const isMobile = useMediaQuery("(min-width : 600px)");

  const [isOpen , setIsOpen ] = useState(false);

  const handleOpen = (): void => (setIsOpen(true));
  const handleClose = (): void => (setIsOpen(false));

  useEffect(() => {
    setIsOpen(false);
  }, [ isMobile ]);
  return (
    <>
      <header className={`container ${classes.header}`}>
        <nav>
          <ul className={classes.navList}>
            {
              nav_links.map((l, k) => (
                <li key={k}>
                  <a href={l.link} className={classes.link}>{l.title}</a>
                </li>
              ))
            }
          </ul>
        </nav>
        <a href='#'><img src={logo} alt="Logo" className={classes.logo} /></a>
        <nav>
          <ul className={classes.navContacts}>
            <li><a href="#"><img src={telegram} alt="Telegram" /></a></li>
            <li><a href="#"><img src={whatsapp} alt="Whatsapp" /></a></li>
            <li><a href="#"><img src={viber} alt="Viber" /></a></li>
            <li>
              <a href="tel:+375-29-685-62-42">
                <span className={classes.phone}>+375 29 685 62 42</span>
              </a>
            </li>
          </ul>
        </nav>
        <Burger className={classes.burger} onClick={handleOpen}/>
      </header>
      <div className={`${classes.navBg} ${isOpen ? classes.openedBg : ''}`} onClick={handleClose}></div>
      <div className={`${classes.navbar} ${isOpen ? classes.opened : ''}`}>
        <button onClick={handleClose} className={classes.closeBtn}>
          <hr className={classes.closeIcon} /><hr className={classes.closeIcon} />
        </button>
        <nav className={classes.mobileNav}>
          <ul className={classes.links}>
            {
              nav_links.map((l, k) => (
                <li key={k}>
                  <a onClick={handleClose} href={l.link} className={classes.link}>{l.title}</a>
                </li>
              ))
            }
          </ul>
          <ul className={classes.navContacts}>
            <li><a href="#"><img src={telegram} alt="Telegram" /></a></li>
            <li><a href="#"><img src={whatsapp} alt="Whatsapp" /></a></li>
            <li><a href="#"><img src={viber} alt="Viber" /></a></li>
            <li>
              <a href="tel:+375-29-685-62-42">
                <span className={classes.phone}>+375 29 685 62 42</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header;

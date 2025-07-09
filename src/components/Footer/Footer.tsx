import logo from '../../assets/icons/logo.svg';
import telegram from '../../assets/icons/telegram.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import viber from '../../assets/icons/viber.svg';
import instagram from '@/assets/icons/instagram.svg';
import { nav_links } from '../../common/contstants';
import classes from './Footer.module.scss'


const Footer = () => {
  return (
    <footer className={`${classes.footer} container`}>
      <hr className={classes.divider} />
      <nav id='contacts' className={classes.upNav}>
        <ul className={classes.contacts}>
          <li className={classes.first}><a href="#"><img src={logo} alt="" className={classes.logo} /></a></li>
          <li className={classes.mid}><a href="tel:+375-29-685-62-42"><span>+375-29-685-62-42</span></a></li>
          <li><a href="tel:+7 911-399-69-48"><span>+7 911-399-69-48</span></a></li>
          <li className={classes.last}><a href="mailto:shemet-trans@mail.ru" className={classes.link}>shemet-trans@mail.ru</a></li>
        </ul>
        <ul className={classes.links}>
          {
            nav_links.map((l, k) => (
              <li key={k}>
                <a href={l.link} className={classes.link}>{l.title}</a>
              </li>
            ))
          }
        </ul>
        <ul className={classes.socMedias}>
          <li><a href="#"><img src={instagram} alt="Instagram" /></a></li>
          <li><a href="#"><img src={whatsapp} alt="Whatsapp" width={35} height={35} /></a></li>
          <li><a href="#"><img src={telegram} alt="Telegram" width={35} height={35} /></a></li>
          <li><a href="#"><img src={viber} alt="Viber" width={35} height={35} /></a></li>
        </ul>
      </nav>
      <hr className={classes.divider} />
      <nav className={classes.bottomNav}>
        <ul className={`${classes.socMedias} ${classes.soc}`}>
          <li><a href="#"><img src={instagram} alt="Instagram" /></a></li>
          <li><a href="#"><img src={whatsapp} alt="Whatsapp" width={35} height={35} /></a></li>
          <li><a href="#"><img src={telegram} alt="Telegram" width={35} height={35} /></a></li>
          <li><a href="#"><img src={viber} alt="Viber" width={35} height={35} /></a></li>
        </ul>
        <ul className={classes.disclaimer}>
          <li><a href="#" className={classes.link}>2025 Все права защищены</a></li>
          <li><a href="#" className={classes.link}>Политика конфиденциальности</a></li>
          <li><a href="#" className={classes.link}>Разработка сайта</a></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;

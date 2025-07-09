import { lazy } from 'react';
import heroBg from '@/assets/images/hero-bg-mobile.png'
import classes from './Hero.module.scss';

const Button = lazy(() => import('@components/Button/Button'));

const title = 'Надежные \nгрузоперевозки \nпо Европе и СНГ';

const Hero = () => {
  return (
    <section className={`container ${classes.hero}`}>
      <div className={classes.hero__inner}>
        <div className={classes.hero_shadow}>
          <div className={classes.content}>
            <h1 className={classes.title}>{title}</h1>
            <div className={classes.link}>
              <p className={classes.description}>Подберем оптимальный маршрут и вид транспортировки для доставки вашего груза</p>
              <img src={heroBg} alt="" className={classes.heroBg} />
              <Button className={classes.button} link='#calculate'>ЗАПРОСИТЬ РАСЧЕТ</Button>
            </div>
          </div>
          <div className={classes.counter}>
            <ul className={classes.counter_list}>
              <li>
                <div className={classes.counter_item}>
                  <span className={classes.count}>{'>'}15 лет</span>
                  <span className={classes.count_text}>Стабильной работы</span>
                </div>
              </li>
              <li><hr className={classes.divider}/></li>
              <li>
                <div className={classes.counter_item}>
                  <span className={classes.count}>20+</span>
                  <span className={classes.count_text}>Стран в географии</span>
                </div>
              </li>
              <li><hr className={classes.divider}/></li>
              <li>
                <div className={classes.counter_item}>
                  <span className={classes.count}>5000+</span>
                  <span className={classes.count_text}>Рейсов выполнено</span>
                </div>
              </li>
              <li><hr className={classes.divider}/></li>
              <li>
                <div className={classes.counter_item}>
                  <span className={classes.count}>24/7</span>
                  <span className={classes.count_text}>На связи и готовы помочь</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;

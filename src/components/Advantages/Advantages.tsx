import { lazy } from 'react';
import first from '@/assets/icons/advantages/first.svg';
import second from '@/assets/icons/advantages/second.svg';
import third from '@/assets/icons/advantages/third.svg';
import fourth from '@/assets/icons/advantages/fourth.svg';
import fifth from '@/assets/icons/advantages/fifth.svg';
import classes from './Advantages.module.scss';


const Title = lazy(() => import('@components/Title/Title'));
const Button = lazy(() => import('@components/Button/Button'));

const CARDS: ICards[] = [
  {
    title: 'Собственный \nавтопарк',
    icon: first,
    description: 'Современные транспортные \nсредства, регулярно проходящие \nтехническое обслуживание',
  },
  {
    title: 'Профессиональная \nкоманда',
    icon: second,
    description: 'Опытные логисты, водители \nи диспетчеры — каждый знает своё \nдело и работает на результат',
  },
  {
    title: 'Индивидуальный \nподход',
    icon: third,
    description: 'Разработка оптимальных \nлогистических решений, \nучитывающих специфику вашего \nгруза и маршрута',
  },
  {
    title: 'Собственный \nавтопарк',
    icon: fourth,
    description: 'Современные транспортные \nсредства, регулярно проходящие \nтехническое обслуживание',
  },
  {
    title: 'Готовность \nк партнёрству',
    icon: fifth,
    description: 'Работаем на долгосрочную \nперспективу. Выстраиваем доверие \nи стабильные отношения — \nс клиентами и сотрудниками',
  },
];
const description = 'Свяжитесь с нами сегодня, и мы \nпоможем вам организовать надежную \nи эффективную доставку вашего груза!';

const Advantages = () => {
  return (
    <section id='pleasures' className={`container ${classes.advantages}`}>
      <Title className={classes.title}>Преимущества работы с нами</Title>
      <ul className={classes.cards}>
        {
          CARDS.map((card, key) => (
            <li key={key}>
              <div className={`${classes.card} ${!key ? ` ${classes.first}` : ''}`}>
                {!key ? <div className={classes.shadow}></div> : null}
                <div className={classes.icon}><img src={card.icon} alt="Icon" /></div>
                <h3 className={classes.cardTitle}>{card.title}</h3>
                <hr className={classes.divider} />
                <p className={classes.description}>{card.description}</p>
              </div>
            </li>
          ))
        }
        <li className={classes.last}>
          <p className={classes._description}>{description}</p>
          <Button variant='outlined'>ЗАПРОСИТЬ РАСЧЕТ</Button>
        </li>
      </ul>
    </section>
  )
}

export default Advantages;

interface ICards {
  title: string,
  icon: string,
  description: string,
}

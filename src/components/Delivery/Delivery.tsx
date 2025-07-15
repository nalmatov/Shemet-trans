import { type tagType } from '@components/Tag/Tag';
import { lazy, useState } from 'react';
import first from '@/assets/images/first-trans.webp'
import second from '@/assets/images/second-trans.webp'
import classes from './Delivery.module.scss';


const Title = lazy(() => import('@components/Title/Title'));
const Tabs = lazy(() => import('@components/Tabs/Tabs'));
const Tag = lazy(() => import('@components/Tag/Tag'));

const TABS = [ 'Рефрижераторные', 'тентованные' ];

const DELIVERIES: IDelivery[] = [
  {
    title: 'Перевозка температурных грузов',
    description: [
      'Современные полуприцепы – рефрижераторы',
      'Поддержание необходимого температурного режима на протяжении всего маршрута',
      'Гарантия сохранности чувствительных к температуре грузов',
    ],
    tags: [ 'food', 'health', 'cosmetics', 'cold', 'flowers', 'chemistry', ],
    image: first,
  },
  {
    title: 'Перевозки широкого спектра грузов',
    description: [
      'Универсальные полуприцепы с тентом',
      'Защита от осадков, пыли и внешних факторов',
      'Удобная боковая, верхняя и задняя загрузка',
      'Грузоподъемность до 20 тонн',
    ],
    tags: [ 'building', 'equipment', 'furniture', 'cleaning', 'autoparts', ],
    image: second,
  },
];

const Delivery = () => {
  const [ tab , setTab ] = useState(0);

  const handleClick = (index: number) => (setTab(index));

  return (
    <section className={`container ${classes.delivery}`}>
      <Title className={classes.title}>Виды перевозок</Title>
      <div className={classes.tabs}><Tabs tabs={TABS} currentTab={tab} onClick={handleClick}/></div>
      <ul className={classes.deliveries}>
        {
          DELIVERIES.map((d, i) => (
            <li key={i} className={i === tab ? '' : classes.inactive}>
              <div className={classes.transfer}>
                <img src={d.image} alt="Transfer image" className={classes.image} />
                <div className={classes.about}>
                  <div className={classes.texts}>
                    <h3 className={classes.titleInner}>{d.title}</h3>
                    <ul className={classes.items}>
                      {
                        d.description.map((t, k) => (
                          <li key={k} className={classes.item}>{t}</li>
                        ))
                      }
                    </ul>
                  </div>
                  <ul className={classes.tags}>
                    {
                      d.tags.map((tag, key) => <li key={key}><Tag tag={tag}/></li>)
                    }
                  </ul>
                  <img src={d.image} alt="Transfer image" className={classes.mobImage} />
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Delivery;

interface IDelivery {
  title: string,
  description: string[],
  tags: tagType[],
  image: string,
}


import Title from '../Title/Title';
import map from '@/assets/icons/map.svg';
import check from '@/assets/icons/check.svg';
import bCheck from '@/assets/icons/bCheck.svg';
import classes from './AboutUS.module.scss';


const description = `С момента своего основания в 2008 году, компания «Шемет-Транс» зарекомендовала себя как надёжный и опытный партнёр в сфере международных грузоперевозок\n\nНаша компания обладает обширной географией деятельности, позволяя нам успешно осуществлять перевозки в самых разных направлениях`;

const counts: {count:string,label:string}[] = [
  {
    count: '>15 лет',
    label: 'Стабильной работы',
  },
  {
    count: '20+',
    label: 'Стран в географии',
  },
  {
    count: '5000+',
    label: 'Рейсов выполнено',
  },
  {
    count: '24/7',
    label: 'На связи и готовы помочь',
  },
];

const AboutUS = () => {
  return (
    <section id="about-us" className={`${classes.aboutUs} container`}>
      <div className={classes.aboutUsInner}>
        <div className={classes.text}>
          <Title className={classes.title}>о нас</Title>
          <p className={classes.description}>{description}</p>
        </div>
        <ul className={classes.counters}>
          {
            counts.map(({ count, label }, k) => (
              <li key={k}>
                <div className={classes.counter}>
                  <h4 className={classes.countTitle}>{count}</h4>
                  <p className={classes.countLabel}>{label}</p>
                </div>
              </li>
            ))
          }
        </ul>
        <div className={classes.location}>
          <div className={classes.locationInner}>
            <img src={map} alt="Map" className={classes.map} />
            <div className={classes.mark}>
              <div className={classes.check}>
                <img src={check} alt="Check mark" />
              </div>
              <div className={classes.mark_text}>
                <img src={bCheck} alt="Check mark" className={classes.checkIcon} />
                <p className={classes.mark_description}>{'работаем по Европе, \nстранам СНГ, включая Беларусь, \nРоссию, Казахстан и Китай'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUS;


import { lazy } from 'react';
import classes from './Vacancies.module.scss';


const Title = lazy(() => import('@components/Title/Title'));
const Button = lazy(() => import('@components/Button/Button'));

const Vacancies = () => {
  return (
    <section id="career" className={`container ${classes.vacancies}`}>
      <Title className={classes.title}>{'карьера И ВАКАНСИИ в «шемет-транс»'}</Title>
      <div className={classes.cards}>
        <div className={classes.card}>
          <ThreeDot count={1}/>
          <p className={classes.description}>{'Хотите построить карьеру \nв крупной международной компании?'}</p>
        </div>
        <div className={classes.welcomeCard}>
          <div className={classes.shadow}>
            <h3 className={classes.cardTitle}>{'Добро пожаловать \nв команду Шемет-Транс!'}</h3>
            <Button isLink={false} size='normal' className={classes.button}>ПЕРЕЗВОНИТЕ МНЕ</Button>
          </div>
        </div>
        <div className={classes.cards}>
          <div className={classes.card}>
            <ThreeDot count={2}/>
            <p className={classes.description}>{'Вы логист, водитель \nмеждународник, \nведущий специалист? '}</p>
          </div>
          <div className={classes.card}>
            <ThreeDot count={3}/>
            <p className={classes.description}>{'Энергичны \nи нацелены на результат?'}</p>
          </div>
        </div>
        <div className={`${classes.card} ${classes.lastCard}`}>
          <h3 className={classes.cardTitle}>ОТДЕЛ КАДРОВ</h3>
          <ul className={classes.contacts}>
            <li className={classes.contactsItem}><a href="tel:+375447449165"><span>+375-44-744-91-65</span> <p>Алексей Николаевич</p></a></li>
            <li className={classes.contactsItem}><a href="tel:+375445909421"><span>+375-44-590-94-21</span> <p>Вадим Игоревич </p></a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Vacancies;


const DOTCLS = new Map();
DOTCLS.set(true, classes.dot);
DOTCLS.set(false, classes.undot);

function ThreeDot({ count=1 }: { count: 1 | 2 | 3 }) {
  const dots = Array.from({ length: 3 }, (_, i) => i < count);

  return (
    <ul className={classes.dots}>
      {dots.map((dot, key) => (<li key={key}><div className={DOTCLS.get(dot)}></div></li>))}
    </ul>
  );
}

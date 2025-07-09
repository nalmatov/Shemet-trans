import wArrow from '@/assets/icons/white-arrow.svg';
import bArrow from '@/assets/icons/black-arrow.svg';
import classes from './Button.module.scss';


const Button: React.FC<IButton> = ({
  isLink=true,
  link='',
  children=null,
  size='large',
  variant='contained',
  className="",
  type="button",
}) => {
  const options = `${classes[variant]} ${classes[size]} ${className}`;

  if (isLink) return (
    <a href={link} className={`${classes.link} ${options}`}>
      {children}
      {
        variant === 'outlined'
        ?
        <img src={bArrow} alt="Arrow" className={classes.arrow} />
        :
        <img src={wArrow} alt="Arrow" className={classes.arrow} />
      }
    </a>
  );

  return <button className={`${classes.button} ${options}`} type={type}>{children}</button>;
}

export default Button;

interface IButton {
  isLink?: boolean,
  link?: string,
  children?: React.ReactNode,
  size?: size,
  variant?: variant,
  className?: string,
  type?: 'button' | 'submit',
}

type size = 'large' | 'normal';
type variant = 'contained' | 'outlined';

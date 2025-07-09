import classes from "./Burger.module.scss";


const Burger: React.FC<{ onClick?: () => void, className?: string }> = ({ onClick=()=>{}, className='' }) => {
  return (
    <button onClick={onClick} className={`${classes.burger} ${className}`}>
      <hr className={classes.burgerDivider}/>
      <hr className={classes.burgerDivider}/>
      <hr className={classes.burgerDivider}/>
    </button>
  )
}

export default Burger;


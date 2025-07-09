import classes from './Title.module.scss';


const Title: React.FC<{ children: React.ReactNode, className?: string }> = (props) => {
  return <h2 {...props} className={`${classes.title} ${props.className || ''}`}>{props.children}</h2>;
}

export default Title;

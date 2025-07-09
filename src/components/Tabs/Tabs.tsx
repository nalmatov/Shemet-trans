import classes from './Tabs.module.scss';


const Tabs: React.FC<TabsProps> = ({ tabs, currentTab=0, onClick=()=>{} }) => {

  return (
    <ul className={classes.tabs}>
      {
        tabs.map((tab, index) => (
          <li key={index}>
            <button
              onClick={() => onClick(index)}
              className={`${classes.tab} ${index === currentTab ? classes.current : ''}`}
            >
              {tab}
            </button>
          </li>
        ))
      }
    </ul>
  )
}

export default Tabs;

interface TabsProps {
  tabs: (number|string)[],
  currentTab: number,
  onClick: (index: number) => void,
}

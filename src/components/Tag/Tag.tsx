import classes from './Tag.module.scss';

const labels = {
  "autoparts": "Автозапчасти",
  "building": "Стройматериалы",
  "chemistry": "Химия",
  "cleaning": "Бытовая химия",
  "cold": "Заморозка",
  "cosmetics": "Косметика",
  "equipment": "Оборудование",
  "flowers": "Цветы",
  "food": "Продукты питания",
  "furniture": "Мебель",
  "health": "Лекарства",
};

const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <div className={classes.tag}>
      <img src={`/assets/icons/tags/${tag}.svg`} alt={tag} />
      <p className={classes.label}>{labels[tag]}</p>
    </div>
  )
}

export default Tag;

interface TagProps {
  tag: tagType,
}

export type tagType = "autoparts" | "building" | "chemistry" | "cleaning" | "cold" | "cosmetics" | "equipment" | "flowers" | "food" | "furniture" | "health";


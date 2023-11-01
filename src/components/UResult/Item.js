import classes from "./Item.module.css";

function Item({ user }) {
  return (
    <div className={classes.item_container}>
      <div className={classes.item}>
        <label>
          {user.name} "({user.age} year old)"
        </label>
      </div>
    </div>
  );
}
export default Item;

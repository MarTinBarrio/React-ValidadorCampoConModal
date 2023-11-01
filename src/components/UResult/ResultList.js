import Item from "./Item";

import classes from "./ResultLists.module.css";

function ResultList({ userList }) {
  return (
    <div className={classes.list_container}>
      {userList.map((oneUser) => (
        <Item key={oneUser.key} user={oneUser} />
      ))}
    </div>
  );
}
export default ResultList;

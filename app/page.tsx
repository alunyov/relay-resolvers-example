import { getValues } from "src/stores/RemoteClient";
import { TodoInstance } from "src/stores/TodoStore";
import styles from "styles/Todo.module.css";

import Todos from "./todos";

const Page = async () => {
  const todos = await getValues<TodoInstance>();
  return (
    <div className={styles.main}>
      <Todos fetchedTodos={todos} />
    </div>
  );
};

export default Page;

export const revalidate = 0;

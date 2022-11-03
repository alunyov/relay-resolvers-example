import type { NextPage } from "next";
import styles from "styles/Todo.module.css";
import { TodoQueryComponent } from "src/components/TodoQuery";

const Index: NextPage = () => {
  return (
    <div className={styles.main}>
      <TodoQueryComponent />
    </div>
  );
};

export default Index;

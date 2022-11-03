import { graphql, useFragment } from "react-relay";
import styles from "styles/Todo.module.css";

import type { TodoItemFragment$key } from "__generated__/TodoItemFragment.graphql";
import { DeleteTodo } from "./DeleteTodo";
import { ToggleTodo } from "./ToggleTodo";

export function TodoItem({ todo }: { todo: TodoItemFragment$key | null }) {
  const data = useFragment(
    graphql`
      fragment TodoItemFragment on Todo {
        id
        description
        completed
        ...ToggleTodoFragment
      }
    `,
    todo
  );
  if (data == null) {
    return null;
  }

  const description = data?.description ?? "Unknown";
  const labelClassName = [styles.label];
  if (data.completed) {
    labelClassName.push(styles.completed);
  }
  return (
    <div className={styles.todo}>
      <label className={labelClassName.join(" ")} title={description}>
        <ToggleTodo todo={data} />
        {description}
      </label>
      <DeleteTodo todoID={data.id} />
    </div>
  );
}

import * as React from "react";
import { graphql, useFragment } from "react-relay";
import { TodoItem } from "./TodoItem";
import styles from "styles/Todo.module.css";
import { TodoListFragment$key } from "__generated__/TodoListFragment.graphql";

export function TodoList({ todos }: { todos: TodoListFragment$key }) {
  const data = useFragment(
    graphql`
      fragment TodoListFragment on Query {
        todos {
          id
          ...TodoItemFragment
        }
      }
    `,
    todos
  );
  return (
    <>
      <h1>Todo List</h1>
      {data.todos?.map((item) => {
        return <TodoItem todo={item} key={item?.id} />;
      })}
      {data.todos?.length == 0 && (
        <div className={styles.noItems}>Add new todo item</div>
      )}
    </>
  );
}

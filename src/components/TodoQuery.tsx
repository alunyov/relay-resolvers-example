import { graphql, useClientQuery } from "react-relay";
import type { TodoQuery } from "__generated__/TodoQuery.graphql";
import { CreateTodo } from "./CreateTodo";
import { TodoList } from "./TodoList";

export function TodoQueryComponent() {
  const todos = useClientQuery<TodoQuery>(
    graphql`
      query TodoQuery {
        ...TodoListFragment
      }
    `,
    {}
  );
  return (
    <>
      <CreateTodo />
      <TodoList todos={todos} />
    </>
  );
}

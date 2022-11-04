"use client";

import { initRelayEnvironment } from "src/RelayEnvironment";
import { TodoQueryComponent } from "src/components/TodoQuery";
import { RelayEnvironmentProvider } from "react-relay";
import { initLocalStore, TodoInstance } from "src/stores/TodoStore";

const Todos = (props: { fetchedTodos: ReadonlyArray<TodoInstance> }) => {
  initLocalStore(props.fetchedTodos.map((todo) => [todo.id, todo]));

  const environment = initRelayEnvironment();

  return (
    <RelayEnvironmentProvider environment={environment}>
      <TodoQueryComponent />
    </RelayEnvironmentProvider>
  );
};

export default Todos;

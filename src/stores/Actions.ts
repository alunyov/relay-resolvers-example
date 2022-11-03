import { TodoStore, TodoID, TodoInstance } from "src/stores/TodoStore";

export type Action =
  | {
      kind: "SET";
      payload: TodoInstance;
    }
  | {
      kind: "TOGGLE";
      payload: {
        id: TodoID;
      };
    }
  | { kind: "DELETE"; payload: { id: TodoID } };

export function addTodo(store: TodoStore, id: string, text: string): void {
  store.processAction({
    kind: "SET",
    payload: {
      id,
      text,
      complete: false,
    },
  });
}

export function toggleTodo(store: TodoStore, todoID: TodoID): void {
  store.processAction({
    kind: "TOGGLE",
    payload: {
      id: todoID,
    },
  });
}

export function deleteTodo(store: TodoStore, id: TodoID): void {
  store.processAction({
    kind: "DELETE",
    payload: { id },
  });
}

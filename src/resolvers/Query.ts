import { getCurrentStore } from "src/stores/TodoStore";
import { TodoID } from "src/stores/TodoStore";
import { LiveState } from "./types";

/**
 * @RelayResolver Query.todo(id: ID!): Todo
 */
export function todo(args: { id: string }): string | null {
  return args.id;
}

/**
 * @RelayResolver Query.todos: [Todo]
 * @live
 */
export function todos(): LiveState<ReadonlyArray<TodoID>> {
  const store = getCurrentStore();
  return {
    read() {
      return Array.from(store.getState().todoItems.keys());
    },
    subscribe(callback) {
      return store.subscribe(callback);
    },
  };
}

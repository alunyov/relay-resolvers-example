import { getCurrentStore, TodoInstance } from "src/stores/TodoStore";
import { LiveState } from "src/resolvers/types";

/**
 * @RelayResolver Todo
 * @live
 */
export function Todo(id: string): LiveState<TodoInstance | undefined> {
  const store = getCurrentStore();
  return {
    read() {
      return store.getState().todoItems.get(id);
    },
    subscribe(fn: () => void) {
      return store.subscribe(fn);
    },
  };
}

/**
 * @RelayResolver Todo.description: String
 */
export function description(
  todo: undefined | TodoInstance
): undefined | string {
  return todo?.text;
}

/**
 * @RelayResolver Todo.completed: Boolean
 */
export function completed(todo: undefined | TodoInstance): undefined | boolean {
  return todo?.complete;
}

import { Action } from "src/stores/Actions";
import { State } from "src/stores/TodoStore";

export function localReducer(state: State, action: Action): State {
  switch (action.kind) {
    case "SET": {
      const nextTodoItems = new Map(state.todoItems);
      nextTodoItems.set(action.payload.id, action.payload);
      return {
        todoItems: nextTodoItems,
      };
    }
    case "DELETE": {
      const nextTodoItems = new Map(state.todoItems);
      nextTodoItems.delete(action.payload.id);
      return {
        todoItems: nextTodoItems,
      };
    }
    case "TOGGLE": {
      const todo = state.todoItems.get(action.payload.id);
      if (todo != null) {
        const nextTodoItems = new Map(state.todoItems);
        nextTodoItems.set(action.payload.id, {
          ...todo,
          complete: !todo.complete,
        });
        return {
          todoItems: nextTodoItems,
        };
      } else {
        return state;
      }
    }
  }
}

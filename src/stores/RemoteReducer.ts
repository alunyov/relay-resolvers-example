import { Action } from "src/stores/Actions";
import { deleteValue, getValue, setValue } from "src/stores/RemoteClient";
import { State, TodoInstance } from "src/stores/TodoStore";

async function remoteAsyncReducer(action: Action): Promise<void> {
  switch (action.kind) {
    case "SET": {
      await setValue(action.payload.id, action.payload);
      break;
    }
    case "DELETE": {
      await deleteValue(action.payload.id);
      break;
    }
    case "TOGGLE": {
      const todo = await getValue<TodoInstance>(action.payload.id);
      if (todo != null) {
        const nextInstance = {
          ...todo,
          complete: !todo.complete,
        };
        await setValue(action.payload.id, nextInstance);
      }
      break;
    }
    default: {
      throw new Error("Unsupported action");
    }
  }
}

export function remoteReducer(state: State, action: Action): State {
  process.nextTick(async () => {
    try {
      await remoteAsyncReducer(action);
    } catch (error) {
      console.error(error);
    }
  });
  return state;
}

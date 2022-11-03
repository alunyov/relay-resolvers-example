/**
 * A simplified version of the "flux/redux"-like store.
 *
 * The store has an immutable State, a Reducer that creates
 * the new version a State when processing an Action, and a
 * list of Subscribers. Subscribers are notified (local-only version)
 * when the new State is created, as the result of the Action
 * processing by the Reducer.
 *
 * We're passing two different implementations of the "reducers":
 * Local and Remote - one runs on the client, another on the server.
 * The local actions changes the client state and we're notifying
 * subscribers. Remote reducer just sends request to the remote
 * server.
 *
 * PLEASE NOTE: This is not a "production" ready store, nor a
 * reference implementation of the local/remote store. This is
 * a quick prototype to connect with the Relay's live resolvers.
 */

import { Action } from "src/stores/Actions";
import { localReducer } from "./LocalReducer";
import { getValues } from "./RemoteClient";
import { remoteReducer } from "./RemoteReducer";

let currentStore: TodoStore | undefined;

export type TodoInstance = {
  id: TodoID;
  text: string;
  complete: boolean;
};

export type TodoID = string;
export type StoreSnapshot = ReadonlyArray<[TodoID, TodoInstance]>;
export type StoreSubscription = () => void;

export type State = {
  todoItems: Map<TodoID, TodoInstance>;
};

type SubscribeFn = () => void;
type UnsubscribeFn = () => void;

type Reducer = (state: State, action: Action) => State;

export class TodoStore {
  _state: State;
  _subscriptions: Set<SubscribeFn>;
  _reducer: Reducer;

  constructor(processor: Reducer) {
    this._state = {
      todoItems: new Map(),
    };
    this._reducer = processor;
    this._subscriptions = new Set();
  }

  processAction(action: Action) {
    this._state = this._reducer(this._state, action);
    this._notify();
  }

  getState(): State {
    return this._state;
  }

  restoreStateFromSnapshot(snapshot: StoreSnapshot): void {
    this._state = {
      todoItems: new Map(snapshot),
    };
  }

  subscribe(callback: SubscribeFn): UnsubscribeFn {
    this._subscriptions.add(callback);
    return () => {
      this._subscriptions.delete(callback);
    };
  }
  _notify() {
    this._subscriptions.forEach((callback) => callback());
  }
}

export function getCurrentStore(): TodoStore {
  if (currentStore != null) {
    return currentStore;
  }
  if (typeof window === "undefined") {
    currentStore = new TodoStore(remoteReducer);
  } else {
    currentStore = new TodoStore(localReducer);
  }
  return currentStore;
}

export async function getStoreSnapshot(): Promise<StoreSnapshot> {
  if (typeof window === "undefined") {
    const items = await getValues<TodoInstance>();
    const result = new Map();
    items.forEach((item) => {
      result.set(item.id, item);
    });
    return Array.from(result.entries());
  } else {
    return Promise.resolve(
      Array.from(currentStore?.getState().todoItems.entries() ?? [])
    );
  }
}

export function initLocalStore(snapshot: StoreSnapshot): void {
  getCurrentStore().restoreStateFromSnapshot(snapshot);
}

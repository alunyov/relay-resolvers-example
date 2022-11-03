# Live Resolvers Example

## Overview

The purpose of this example (simple Todo App) is to demo and test the new experimental Relay API in the open-source setup, using TypeScript.

### Live Resolvers

Live Resolvers (similar to regular [Relay Resolvers](https://relay.dev/docs/guides/relay-resolvers/) is a new Relay API that allows to extend the server schema with client-only fields, backed by resolver functions.
They can expose arbitrary local state on the graph with the ability to “read” the values for these fields from the local state, and “subscribe” to the changes of that state. Whereas regular resolvers derive their values from the existing data on the graph.
The primary goal of Live Resolvers is to expose the Application State that is typically located in the “flux”/“redux” stores, and subscribe to the underlying stores, making these exposed fields “live”. But the Live Resolvers use-case is not limited to these use cases, you can expose any “live” local data with them.

### Defining a Live Resolver

Live resolver is as a function, marked with special docblock tag `@live`. The function has to return a LiveState value.

```typescript
type SubscribeFn = () => void;
type UnsubscribeFn = () => void;

interface LiveState<T> {
   read(): T,
   subscribe(callback: SubscribeFn): UnsubscribeFn
}

/**
* @RelayResolver MyType.my_live_field: String
* @live
*/
function my_live_field(...): LiveState<string> {
   return {
      read() {
         return readFromStore(store, 'my_field')
      },
      subscribe(cb) {
         return store.subscribe(cb)
      }
   }
}
```

## The Todo Example

This example models the full schema for a simple Todo App using a combination of Live and regular Relay Resolvers. See `src/resolvers` directory.

Live Resolvers are connected to a simplified version of the “flux”-like store, where we can read the state of the store, and we can subscribe to the changes of the store.

The same code is run both on the server and the client. The client store contains the Map of `Todo` items, we can add, remove, and toggle the state of the `Todo` item by “dispatching” store actions. These actions are executed as side-effects in the resolvers that defined on the `Mutation` type.

The initial state of the store is fetched from the “database” and passed to the client as the `storeSnapshot` - this ensures that the output of the Server Rendering is matching the client output.

The server resolvers are using “server” implementation of the Store’s reducer: it process the actions by writing/deleting data to the “database”,

In this example we’re “abusing” the fact that we can run these resolvers and the server with different implementations, and using them to perform mutations. Local mutations are sending actions to update the store, where the same mutation on the server a sending requests to the remote API that performs “databases” writes.
[Image: Screen Shot 2022-11-03 at 9.59.17 AM.png]
But, for the “server” API we don’t have a good way of “waiting” for the execution of the resolver, as all resolver’s reads/executed are synchronously. So in the current example, we just “reading” (environment.lookup) the mutations on the server, without waiting for the “database” response.

---

## Getting Started with this Example

First, run the development server:

```sh
yarn dev
```

Open _[http://localhost:3000](http://localhost:3000/)_ with your browser to see the result.

You can start looking/editing components in the `src/components`. Relay Resolvers are defined in `src/resolvers`.

If you change any GraphQL Relay documents, run:

```sh
yarn relay
```

To rebuild relay artifacts.

- This example requires “watchman” server: [https://facebook.github.io/watchman/](https://facebook.github.io/watchman/)
- More details about Relay: [https://relay.dev/](https://relay.dev/)
- Next.js documentation: [https://nextjs.org/docs/getting-started](https://nextjs.org/docs/getting-started)

---

Overall, I think it is possible to use this example as reference implementation to setup live resolvers with the existing app, but excluding the server/client mutations part.

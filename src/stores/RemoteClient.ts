// A super basic API to save todos to the "permanent" storage.
// We need this just to simulate the "real" app that may want
// to use database/storage to store/read and otherwise communicate
// with Relay Resolvers.

// :-) Currently, this is only one-way communication...

function url(path: string) {
  return new URL(path, "http://localhost:3000");
}

// `T` can be anything? Nice.
export async function setValue<T>(key: string, value: T): Promise<void> {
  await fetch(url("/api/todos"), {
    method: "POST",
    body: JSON.stringify({
      key,
      value,
    }),
    headers: { "Content-Type": "application/json" },
  });
}

// The return type here is a lie.
export async function getValue<T>(key: string): Promise<T | undefined> {
  const response = await fetch(url(`/api/todos/${key}`), {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const { data } = await response.json();
  return data;
}

// Fair.
export async function deleteValue(key: string): Promise<void> {
  await fetch(url("/api/todos"), {
    method: "DELETE",
    body: JSON.stringify({
      key,
    }),
    headers: { "Content-Type": "application/json" },
  });
}

// Again, the return type here is a lie.
export async function getValues<T>(): Promise<ReadonlyArray<T>> {
  const response = await fetch(url("/api/todos"), {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const { data } = await response.json();
  return data;
}

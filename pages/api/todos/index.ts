import { NextApiRequest, NextApiResponse } from "next";
import { TodoInstance } from "src/stores/TodoStore";

import { getThings, setThings } from "src/hacks/fakeDb";

type Data =
  | {
      data: Array<TodoInstance>;
    }
  | {
      data: TodoInstance;
    };

const dbName = "todo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const todos = getThings<TodoInstance>("todo") ?? new Map();
  switch (req.method) {
    case "POST": {
      const id = req.body.key;
      const instance = req.body.value;
      const isNew = todos.has(id);
      todos.set(req.body.key, instance);
      setThings(dbName, todos);

      res.status(isNew ? 201 : 200).json({
        data: instance,
      });
      break;
    }
    case "DELETE": {
      todos.delete(req.body.key);
      setThings(dbName, todos);

      res.status(204);
      break;
    }
    default:
    case "GET": {
      res.status(200).json({
        data: Array.from(todos.values()),
      });
      break;
    }
  }
}

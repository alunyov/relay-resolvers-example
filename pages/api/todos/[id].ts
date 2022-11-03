import { NextApiRequest, NextApiResponse } from "next";
import { getThings } from "src/hacks/fakeDb";
import { TodoInstance } from "src/stores/TodoStore";

type Data =
  | {
      data: TodoInstance;
    }
  | {
      error: string;
    };

const dbName = "todo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const todos = getThings<TodoInstance>(dbName);
  const { id } = req.query;
  const todo = todos?.get(String(id));
  if (todo == null) {
    res.status(404).json({
      error: "Not found",
    });
  } else {
    res.status(200).json({
      data: todo,
    });
  }
}

import { addTodo, toggleTodo, deleteTodo } from "src/stores/Actions";
import { getCurrentStore } from "src/stores/TodoStore";

/**
 * @RelayResolver Mutation.create_todo(id: ID!, text: String): Boolean
 */
export function create_todo(args: {
  id: string;
  text: string | undefined;
}): boolean {
  addTodo(getCurrentStore(), args.id, args.text ?? "No Text");
  return true;
}

/**
 * @RelayResolver Mutation.toggle_todo(id: ID!): Boolean
 */
export function toggle_todo(args: { id: string }): boolean {
  toggleTodo(getCurrentStore(), args.id);
  return true;
}

/**
 * @RelayResolver Mutation.delete_todo(id: ID!): Boolean
 */
export function delete_todo(args: { id: string }): boolean {
  deleteTodo(getCurrentStore(), args.id);
  return true;
}

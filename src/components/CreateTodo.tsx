import { useState } from "react";
import { graphql, useMutation } from "react-relay";
import { CreateTodoMutation } from "__generated__/CreateTodoMutation.graphql";
import { TodoInput } from "./TodoInput";
import { v4 as uuidv4 } from "uuid";
import styles from "styles/Todo.module.css";

export function CreateTodo() {
  const [text, setText] = useState<string>("");
  const [commit] = useMutation<CreateTodoMutation>(graphql`
    mutation CreateTodoMutation($id: ID!, $todo: String) {
      create_todo(id: $id, text: $todo)
    }
  `);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const todoText = text.trim();
        if (todoText === "") {
          return;
        }
        commit({
          variables: {
            // Creating ID on the client. Maybe should be done on the server...
            id: uuidv4(),
            todo: todoText,
          },
          onCompleted() {
            setText("");
          },
          onError(err) {
            console.log("err", err);
          },
        });
      }}
    >
      <div className={styles.form}>
        <div className={styles.row}>
          <label>
            Enter todo text:
            <TodoInput value={text} onChange={(text) => setText(text)} />
          </label>
        </div>
        <div className={styles.row}>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}

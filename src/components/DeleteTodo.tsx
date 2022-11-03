import { useMutation } from "react-relay";
import { graphql } from "relay-runtime";
import { DeleteTodoMutation } from "__generated__/DeleteTodoMutation.graphql";
import styles from "styles/Todo.module.css";

export function DeleteTodo({ todoID }: { todoID: string }) {
  const [commit] = useMutation<DeleteTodoMutation>(graphql`
    mutation DeleteTodoMutation($todoID: ID!) {
      delete_todo(id: $todoID)
    }
  `);

  return (
    <button
      className={styles.delete}
      onClick={() => {
        commit({
          variables: {
            todoID,
          },
          onError(err) {
            console.log("err", err);
          },
        });
      }}
    >
      &#x2715;
    </button>
  );
}

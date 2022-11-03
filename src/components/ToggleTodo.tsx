import { graphql, useFragment, useMutation } from "react-relay";
import { ToggleTodoFragment$key } from "__generated__/ToggleTodoFragment.graphql";
import { ToggleTodoMutation } from "__generated__/ToggleTodoMutation.graphql";

export function ToggleTodo({ todo }: { todo: ToggleTodoFragment$key | null }) {
  const data = useFragment(
    graphql`
      fragment ToggleTodoFragment on Todo {
        id
        completed
      }
    `,
    todo
  );

  const mutation = graphql`
    mutation ToggleTodoMutation($todoID: ID!) {
      toggle_todo(id: $todoID)
    }
  `;
  const [commit] = useMutation<ToggleTodoMutation>(mutation);

  if (data == null) {
    return null;
  }

  return (
    <input
      type="checkbox"
      alt={"Toggle Todo"}
      checked={data.completed ?? false}
      onChange={() => {
        commit({
          variables: {
            todoID: data.id,
          },
          onError(err) {
            console.log("err", err);
          },
        });
      }}
    />
  );
}

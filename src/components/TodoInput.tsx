type Props = {
  onChange: (text: string) => void;
  value: string;
};

export function TodoInput(props: Props) {
  return (
    <input
      alt="Text for your todo"
      name="todo"
      type="text"
      value={props.value}
      onChange={(event) => props.onChange(event.target.value)}
    />
  );
}

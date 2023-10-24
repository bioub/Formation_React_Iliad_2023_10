type Props = {
  name: string;
  age: number;
  isActive?: boolean;
};

function Hello({ name, age, isActive = false }: Props) {
  return (
    <div className="Hello">
      Hello my name is {name}, I'm {age}{' '}
      {isActive ? '(active)' : '(not active)'}
    </div>
  );
}

export default Hello;

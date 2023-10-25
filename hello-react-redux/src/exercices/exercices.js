import Helloworld from "./helloworld";
import MultiStateButton from "./multi-state-button";
import { useDispatch, useSelector } from "react-redux";
import { nameSelector } from "../store/selectors";
import { updateName } from "../store/actions";

function Exercices() {
  const names = ['Toto', 'Titi', 'Tata'];
  const name = useSelector(nameSelector);
  const dispatch = useDispatch();

  function handleSelected(val) {
    dispatch(updateName(val));
  }

  return (
    <div className="Exercices">
      <Helloworld name={name} onNameChange={handleSelected} />
      <MultiStateButton items={names} selected={name} onSelected={handleSelected} />
      <p>Selected name : {name}</p>
    </div>
  );
}

export default Exercices;
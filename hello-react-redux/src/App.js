import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Hello from './Hello';
import LikeButtonControlled from './LikeButtonControlled';
import Exercices from './exercices/exercices';
import { likesSelector } from './store/selectors';
import { incrementLikes } from './store/actions';

function App() {
  const likesInApp = useSelector(likesSelector);
  const dispatch = useDispatch();

  function handleIncrement(newLikesValue) {
    dispatch(incrementLikes(newLikesValue));
  }

  return (
    <div className="App">
      <h2>Hello (Props)</h2>
      <Hello name="Romain" age={38} isActive />

      <h2>Exercices</h2>
      <Exercices />

      <h2>LikeButtonControlled</h2>
      <LikeButtonControlled likes={likesInApp} onIncrement={handleIncrement} />
      <LikeButtonControlled likes={likesInApp} onIncrement={handleIncrement} />
    </div>
  );
}

export default App;

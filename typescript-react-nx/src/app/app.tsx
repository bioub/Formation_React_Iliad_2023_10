// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Hello from './hello';

function App() {
  return (
    <div className="App">
      <Hello name="Romain" age={38} isActive />
      <Hello name="Romain" age={38} />
    </div>
  );
}

export default App;

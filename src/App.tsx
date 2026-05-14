import Home from './pages/Home/Home';


import styles from './App.module.css';
import SecondPage from './pages/secondpage/SecondPage';

function App() {
  return (
    <div className={styles.app}>
      <Home />
      <SecondPage />
    </div>
  );
}

export default App;
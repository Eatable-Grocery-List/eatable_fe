import './App.css';
import Header from "./components/Header/Header";
import SearchForm from './components/SearchForm/SearchForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      <SearchForm />
      </header>
    </div>
  );
}

export default App;
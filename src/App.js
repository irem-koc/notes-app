import './App.css';
import Filter from './components/Filter';
import Form from './components/Form';
import Header from './components/Header';
import NoteList from './components/NoteList';

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Form />
      <NoteList />
    </div>
  );
}

export default App;

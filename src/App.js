import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <h1>Tha man, the mith, the legend!</h1>
      <Contact
        name="Chuck"
        avatar="https://fox17.com/resources/media/fcd7a380-eab6-4467-891e-be2ea75fe52b-large3x4_ChuckNorris.jpg?1560772299261"
        online={true}
      />
    </div>
  );
}

export default App;

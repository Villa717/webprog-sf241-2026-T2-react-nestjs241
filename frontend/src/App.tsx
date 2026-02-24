import Guestbook from './Guestbook';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="profile-header">
        <h1>Andrei Villa</h1>
        <p>I am a Web Programming student building a NestJS + React app!</p>
      </header>
      
      <main>
        <Guestbook />
      </main>
    </div>
  );
}

export default App;
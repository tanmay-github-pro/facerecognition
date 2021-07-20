import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Logo />
        {/* 
        <ImageLinkForm />
        <FaceRecognition /> */}
      </header>
    </div>
  );
}

export default App;

import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';
import Rank from './Components/Rank/Rank';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* 
        
        <FaceRecognition /> */}
      </header>
    </div>
  );
}

export default App;

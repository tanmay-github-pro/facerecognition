import React, { Component } from 'react';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';
import Rank from './Components/Rank/Rank';
import Clarifai from 'clarifai';
import FaceRecognition from './FaceRecognition/FaceRecognition';


const app = new Clarifai.App(
  {apiKey: '2bd452c74363437cbc11632971d98f8a'}
)
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: ''
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value)
  } 
  onButtonSubmit = () => {
    console.log('click');
    app.models.predict(
      Clarifai.COLOR_MODEL,
      "https://samples.clarifai.com/face-det.jpg")
      .then(
        (response) => console.log(response),
        (err) => console.log(err)
      );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition />
        </header>
      </div>
    );
  }  
}

export default App;

import React, { Component } from 'react';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Logo from './Components/Logo/Logo';
import Navigation from './Components/Navigation/Navigation';
import Rank from './Components/Rank/Rank';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import './App.css';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App(
  { apiKey: '2bd452c74363437cbc11632971d98f8a' }
)

const particleOptions = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }

}
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {}
    }
  }

  calculateFaceLocation = (response) => {
    const clarifaiFace = response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return (
      {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.top_row * width),
        bottomRow: height - (clarifaiFace.top_row * height),
      }
    )
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }
  onButtonSubmit = () => {
    this.setState({ imageURL: this.state.input });
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => 
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particleOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageURL} />
      </div>
    );
  }
}

export default App;

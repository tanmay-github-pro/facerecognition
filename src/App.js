import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import Loader from './components/Loader/Loader';

//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
  apiKey: '2bd452c74363437cbc11632971d98f8a'
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      loading: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box: box });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(
        // HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
        // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
        // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
        // If that isn't working, then that means you will have to wait until their servers are back up. Another solution
        // is to use a different version of their model that works like: `c0c0ac362b03416da06ab3fa36fb58e3`
        // so you would change from:
        // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        // to:
        // .predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        console.log('hi', response)
        if (response) {
          fetch('https://lit-taiga-64278.herokuapp.com/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }))
            })
            .catch(console.log)

        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }

  setLoading = (cond) => {
    this.setState({ loading: cond });
  }

  switchRoute = () => {
    const { isSignedIn, imageUrl, route, box } = this.state;

    // Default value of route in state is signin to show the signin page
    switch (route) {
      case 'home':
        return (
          <div>
            <div
              className='homepage'
              style={
                {
                  // display: 'flex',
                  // flexFlow: 'row wrap',
                  // justifyContent: 'space-between',
                  // alignItems: 'center',
                  // padding: '2rem',
                  // alignItems: 'center'
                }
              }>
              <Logo />
              <Rank
                name={this.state.user.name}
                entries={this.state.user.entries}
              />
              <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
            </div>
            <ImageLinkForm
              setLoading={this.setLoading}
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
        );

      case 'signin':
        return (
          <>
            <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
            <Signin setLoading={this.setLoading} loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          </>
        );

      case 'signout':
        return (
          <>
            <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
            <Signin setLoading={this.setLoading} loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          </>
        );

      case 'register':
        return (
          <>
            <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
            <Register setLoading={this.setLoading} loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          </>
        );

      default:
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        {
          this.state.loading ? <Loader /> :
            this.switchRoute()
        }
      </div>
    );
  }
}

export default App;

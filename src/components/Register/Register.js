import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  onSubmitSignIn = () => {
    fetch('https://lit-taiga-64278.herokuapp.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log(`Enter key pressed!!`);
      this.props.setLoading(true);
      this.onSubmitSignIn();
    }
  }

  render() {
    return (
      <article style={{ borderRadius: '1rem' }} className="br3 ba b--black-10 mv4 w-75 w-75-m w-25-l mw6 shadow-5 center">
        <main
          onKeyPress={this.handleKeyPress}
          style={{
            backgroundImage: 'linear-gradient(89deg, #ao86de 0%, #59a3de 100%)',
            backdropFilter: 'blur(0.1rem)',
            boxShadow: '1.5rem 1.35rem 1.5rem rgba(30,30,30,0.5)',
            borderRadius: '1rem'
          }}
          className="pa4 w-100 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 f1-m f1-l f3 fw5 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="pa2 db fw6 lh-copy f5 f5-m f5-l f7" htmlFor="name">Name</label>
                <input
                  style={{ height: '3rem' }}
                  className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="pa2 db fw6 lh-copy f5 f5-m f5-l f7" htmlFor="email-address">Email</label>
                <input
                  style={{ height: '3rem' }}
                  className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="pa2 db fw6 lh-copy f5 f5-m f5-l f7" htmlFor="password">Password</label>
                <input
                  style={{ height: '3rem' }}
                  className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={() => {
                  this.props.setLoading(true);
                  this.onSubmitSignIn();
                }}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
                style={{
                  transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
                  borderRadius: '28px'
                }}
              />
              <div className='sign-in-form__or-divider'>
                <span className='sign-in-form__or-span'>or</span>
              </div>
              <div className="lh-copy mt3">
                <p>
                  Already a Member? <span onClick={() => this.props.onRouteChange('signin')} className="link dim black pointer">Sign In</span>
                </p>
              </div>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
import React from 'react';
import './Signin.css';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value })
  }

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value })
  }

  onSubmitSignIn = () => {
    fetch('https://lit-taiga-64278.herokuapp.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
          setTimeout(() => { this.props.setLoading(false); }, 750)
        }
        else {
          setTimeout(() => { this.props.setLoading(false); }, 2000)
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
    const { onRouteChange } = this.props;
    return (
      <article style={{ borderRadius: '1rem' }} className="br3 ba b--black-10 mv4 w-75 w-75-m w-25-l mw6 shadow-5 center">
        <main
          onKeyPress={this.handleKeyPress}
          // style={{
          //   backgroundImage: 'linear-gradient(89deg, #ao86de 0%, #59a3de 100%)',
          //   backdropFilter: 'blur(0.1rem)',
          //   boxShadow: '1.5rem 1.35rem 1.5rem rgba(30,30,30,0.5)',
          //   borderRadius: '1rem'
          // }}
          className="pa4 w-100 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 f1-m f1-l f3 fw5 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="pa2 db fw6 lh-copy f5 f5-m f5-l f7" htmlFor="email-address">Email</label>
                <input
                  // style={{ height: '3rem' }}
                  className="text_input pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="pa2 db fw6 lh-copy f5 f5-m f5-l f7" htmlFor="password">Password</label>
                <input
                  // style={{ height: '3rem' }}
                  className="text_input b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                // style = {{ height: '2rem' }}
                onClick={() => {
                  this.props.setLoading(true);
                  this.onSubmitSignIn();
                }}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 f6-m f6-l f7 dib"
                type="submit"
                value="Sign in"
                style={{
                  transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
                  borderRadius: '28px'
                }}
              />
            </div>
            <div className='sign-in-form__or-divider'>
              <span className='sign-in-form__or-span'>or</span>
            </div>
            <div className="lh-copy mt3">
              <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;
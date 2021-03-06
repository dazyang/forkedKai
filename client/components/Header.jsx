import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import {logoutUser} from '../actions/logout'
import SkyLight from 'react-skylight'

class Header extends React.Component {
  render () {
    const logInForm = {
      backgroundColor: '#2e7a84',
      color: '#ffffff',
      width: '50%',
      height: '200px'
    }

    const {auth, dispatch} = this.props

    return (
      <div>
        <header>
          <Link to='/'>
            <h1>Kai Time!</h1>
            {/* <span>Your healthy vegetarian diet begins here.</span> */}
          </Link>

          {this.props.auth.isAuthenticated
            ? <div className='logged-in'>
              <h4>Hi, {auth.user.username}</h4>
              <Link to={`/profile`}><p> Go to profile </p></Link>
              <button className='login' onClick={() => dispatch(logoutUser())}>Logout</button>
            </div>
            : <div>
              <span><button className='login' onClick={() => this.loginForm.show()}>Log In</button></span>
              <SkyLight dialogStyles={logInForm} hideOnOverlayClicked ref={ref => (this.loginForm = ref)} >
                <Login />
              </SkyLight>
              <span className='aboutus'><Link to={'/aboutus'}>
                <a className="button is-focused">About us</a></Link>
              </span>
            </div>
          }

        </header>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Header)

{/* <span className='login'><button onClick={() => this.signupForm.show()}>SIGN UP</button></span>
                <SkyLight dialogStyles={signUpForm} hideOnOverlayClicked ref={ref => (this.signupForm = ref)} title="Sign Me Up">
                  <Register />
                </SkyLight> */}
import { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoginForm from './loginForm';

class Login extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="2xl:container min-ht-vh relative master">
        <Header />
        <LoginForm />
        <Footer />
      </div>
    );
  }
}

export default Login;

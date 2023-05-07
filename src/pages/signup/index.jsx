import { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SignupForm from './signupForm';

class Signup extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="w-full min-ht-vh relative master">
        <Header />
        <SignupForm />
        <Footer />
      </div>
    );
  }
}

export default Signup;

import { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SignupForm from './signupForm';
// import { prepareSignup } from '../../utils/EventHandlers';

class Signup extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="2xl:container min-ht-vh relative">
        <Header />
        <SignupForm />
        <Footer />
      </div>
    );
  }
}

export default Signup;

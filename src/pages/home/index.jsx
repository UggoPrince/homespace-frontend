import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useAuth } from '../../auth/AuthProvider';
// import { prepareSearchPageSearch } from '../../utils/EventHandlers';
import Header, { HeaderBottomMargin } from '../../components/Header';
import LandingPage from '../landing';
import HomeBody from './body';
import Properties from '../../data/property/PropertiesAndDetailsBox';
import '../style.css';
import Search from '../search';

const Home = (props) => {
  const {
    children, qEmpty, start, q,
  } = props;
  const { token } = useAuth();
  if (!token && qEmpty === true) return <LandingPage />;
  if (!token && qEmpty === false) {
    return <Search />;
  }
  return children;
};

class HomePage extends Component {
  componentDidMount() {
    // prepareSearchPageSearch();
  }

  render() {
    const { property } = this.props;
    // const { q } = getSearchString();
    const { q, propsSearchOffset } = this.props;
    const qEmpty = q === undefined;
    return (
      <Home qEmpty={qEmpty} start={propsSearchOffset} q={q}>
        <div className="2xl:container min-ht-vh relative">
          <Header search={q} />
          <Properties property={property} number={2}>
            <HeaderBottomMargin />
            <HomeBody qEmpty={qEmpty} />
          </Properties>
        </div>
      </Home>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(HomePage);

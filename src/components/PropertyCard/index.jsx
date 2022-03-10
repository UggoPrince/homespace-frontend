import { Component } from 'react';
import './style.css';

class PropertyCard extends Component {
  constructor(props) {
    super(props);
    this.property = props.property;
  }

  render() {
    const { property } = this;
    const {
      photos, intent, price, propertyType, address,
    } = property;
    let photo1;
    if (photos.length > 0 && photos[0] !== null) {
      const { photo } = photos[0];
      photo1 = photo;
    }
    const theIntent = intent.charAt(0).toUpperCase() + intent.slice(1);
    return (
      <div className="propCard rounded-lg">
        <div className="cardImageDiv relative rounded-t-lg" style={{ backgroundImage: `url(${photo1})` }}>
          <div className="text-white font-medium inline-block absolute bottom-7 left-2">
            For
            {' '}
            {theIntent}
          </div>
          <div className="text-white font-bold absolute bottom-2 left-2">{price}</div>
        </div>
        <div className="px-2 py-2">
          <div>{propertyType}</div>
          <div>{address}</div>
        </div>
      </div>
    );
  }
}

export default PropertyCard;

/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect } from 'react';
import {
  FaUsers, FaMapMarkerAlt, FaTimes, FaChevronCircleLeft, FaChevronCircleRight,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { closeCardDetails } from '../../Utils/EventHandlers';
import isEmptyString from '../../Utils/Checkers';

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export default (props) => {
  const { property, number } = props;
  const {
    id, agency, address, state, country, propertyType, intent, price, photos, status, description,
  } = property;
  let {
    title, area, bedRooms, bathRooms,
  } = property;
  area = (!isEmptyString(area)) ? `${area}sqm` : 'N/A';
  bedRooms = (!isEmptyString(bedRooms) ? bedRooms : 'N/A');
  bathRooms = (!isEmptyString(bathRooms) ? bathRooms : 'N/A');
  title = capitalizeFirstLetter(title);
  // eslint-disable-next-line no-console
  // console.log(!isEmptyString(area));
  let photo1 = '';
  const imgData = photos[0];
  if (imgData) photo1 = imgData.photo;
  const numberOfPhotos = photos.length;
  let detailsDivImg = document.getElementById('detailsDivImg');
  let currentPixOnDetails = '';
  let photoPos = 0;
  const getCurrentPixOnDetails = () => {
    detailsDivImg = document.getElementById('detailsDivImg');
    currentPixOnDetails = document.getElementById('currentPixOnDetails');
    currentPixOnDetails.innerHTML = photoPos + 1;
  };
  useEffect(() => {
    getCurrentPixOnDetails();
  });
  const switchPhoto = () => {
    detailsDivImg.setAttribute('src', photos[photoPos].photo);
    currentPixOnDetails.innerHTML = photoPos + 1;
  };
  const changePhoto = (e, i) => {
    const boolPlus = photoPos === (numberOfPhotos - 1);
    const boolMinus = photoPos === 0;
    if (numberOfPhotos > 1) {
      if (i === 1) {
        if (boolPlus) photoPos = 0;
        else photoPos += 1;
        switchPhoto();
      } else {
        if (boolMinus) photoPos = (numberOfPhotos - 1);
        else photoPos -= 1;
        switchPhoto();
      }
    }
  };
  return (
    <div id="propertyDiv" className="propertyDetails">
      <div className="pb-2 flex flex-row">
        <div className="flex-1 ">
          <FaTimes
            onClick={(e) => { closeCardDetails(e, number); }}
            className="cursor-pointer inline-block bg-gray-500 text-white rounded-full text-3xl p-2 hover:bg-gray-700"
          />
        </div>
        <div className="inline-block flex-1 text-center"><span id="currentPixOnDetails" /> / {numberOfPhotos}</div>
        <div className="inline-block flex-1 text-right">
          <FaChevronCircleLeft
            onClick={(e) => { changePhoto(e, -1); }}
            className="inline-block bg-white text-gray-500 rounded-full mr-6 text-3xl hover:text-gray-700 cursor-pointer"
          />
          <FaChevronCircleRight
            onClick={(e) => { changePhoto(e, 1); }}
            className="inline-block bg-white text-gray-500 rounded-full text-3xl hover:text-gray-700 cursor-pointer"
          />
        </div>
      </div>
      <div id="propertyDetailsFromSearchDivContent">
        <div className="w-full inline-block">
          <div className="w-12/12 content-center">
            <img id="detailsDivImg" src={photo1} alt={property.title} className=" m-auto object-center h-72" />
          </div>
          <div>
            <Link to={`/agencies/${agency.username}`} className=" text-indigo-600 mt-6 cursor-pointer"><FaUsers className="inline text-sm" /> {agency.name}</Link>
            <div className=" text-gray-700 text-lg mb-2 mt-3">{title}</div>
            <div className="mb-2">
              <FaMapMarkerAlt className=" text-red-400 inline" />
              <span className="align-text-bottom"> {address}, {state}, {country}</span>
            </div>
            <div>{description}</div>
            <div><pre className=" text-purple-500">{status}</pre></div>
            <div className=" w-full flex flex-row">
              <div className="min-w-min flex-1">
                <div><pre className="text-indigo-600 inline">{'For:    '}</pre>{intent}</div>
                <div><pre className="text-indigo-600 inline">{'Type:   '}</pre>{propertyType}</div>
                <div><pre className="text-indigo-600 inline">{'Price:  '}</pre>{price}</div>
              </div>
              <div className="min-w-min flex-1">
                <div><pre className="text-indigo-600 inline">{'Area: '}</pre>{area}</div>
                <div><pre className="text-indigo-600 inline">{'Bedrooms:   '}</pre>{bedRooms}</div>
                <div><pre className="text-indigo-600 inline">{'BathRooms:  '}</pre>{bathRooms}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

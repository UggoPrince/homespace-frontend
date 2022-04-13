/* eslint-disable no-console */
// import { useLocation, useSearchParams } from 'react-router-dom';
import store, { setNewState, getState } from './Store';
import {
  // computeSearchPath,
  computeSearchUrl, getPath, getSearchString, setSearchUrl, setUrlOnAddressBar,
} from './Urls';

const runSearch = (form) => {
  const searchText = form.elements.searchText.value;
  if (searchText !== '') {
    // computeSearchUrl(searchText);
    const newUrl = computeSearchUrl(searchText);
    setNewState({ type: 'SEARCH_PROPERTIES', q: searchText, start: 0 });
    // setSearchUrl(newUrl);
    setUrlOnAddressBar(newUrl, 'Home');
    //
    // history.push(newUrl);
  }
};

export const prepareLandingPageSearch = () => {
  const searchForm = document.getElementById('searchForm');
  const searchTextInput = document.getElementById('homeSearchTextInput');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      runSearch(searchForm);
    });
  }
  if (searchTextInput) {
    searchTextInput.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        runSearch(searchForm);
      }
    });
  }
};

export const prepareSearchPageSearch = () => {
  const searchForm = document.getElementById('searchForm2');
  const searchTextInput = document.getElementById('searchPageSearchTextInput');
  const button = document.getElementById('searchPageSearchButton');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      runSearch(searchForm);
    });
  }
  if (searchTextInput) {
    searchTextInput.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        runSearch(searchForm);
      }
    });
    button.addEventListener('click', (e) => {
      e.preventDefault();
      runSearch(searchForm);
    });
  }
};

export const displayCardDetails = (e, property, num) => {
  store.dispatch({ type: 'PROPERTY_DETAILS_FROM_SEARCH', property });
  const propertyDetailsDiv = document.getElementById(`propertyDetailsFromSearchDiv${num}`);
  const propertiesDiv = document.getElementById(`propertiesDiv${num}`);
  // const contentDiv = document.getElementById('propertyDetailsFromSearchDivContent');
  propertiesDiv.style.width = '60%';
  propertyDetailsDiv.style.display = 'inline-block';
  propertyDetailsDiv.style.width = '40%';
  propertyDetailsDiv.style.minWidth = '400px';
  // contentDiv.innerHTML = (() => <div>{property.state}</div>);
};

export const closeCardDetails = (e, num) => {
  const propertyDetailsDiv = document.getElementById(`propertyDetailsFromSearchDiv${num}`);
  const propertiesDiv = document.getElementById(`propertiesDiv${num}`);
  // const contentDiv = document.getElementById('propertyDetailsFromSearchDivContent');
  propertyDetailsDiv.style.width = '0%';
  propertiesDiv.style.width = '100%';
  propertyDetailsDiv.style.display = 'none';
  // contentDiv.innerText = '';
};

export const moveToNewPage = (data) => {
  const { selected } = data;
  const offset = selected * 10;
  const { q } = getSearchString();
  if (q) {
    const newUrl = computeSearchUrl(q, offset);
    setUrlOnAddressBar(newUrl, 'Home');
    // history.push(newUrl);
  }
  setNewState({ type: 'SET_OFFSET', start: offset });
};

export const paginator = (data) => {
  const { selected } = data;
  const offset = selected * 10;
  const { q } = getSearchString();
  const newUrl = computeSearchUrl(q, offset);
  retrieveProperties(q, offset);
  // setSearchUrl(newUrl);
  // console.log(data); propsSearchOffset
};

export const prepareSignup = () => {
  const signupForm = document.getElementById('signupForm');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });
};

const rerenderProperties = () => {
  const { q, start } = getSearchString();
  if (q && start) {
    setNewState({ type: 'SET_QUERY_AND_OFFSET', q, start: parseInt(start, 10) });
  } else if (start && !q) {
    setNewState({ type: 'SET_OFFSET', start: parseInt(start, 10) });
  } else if (!q && !start) {
    setNewState({ type: 'SET_QUERY_AND_OFFSET', q, start: 0 });
  }
};

export const setNavMenuButtonEvent = () => {
  const navMenu = document.getElementById('navMenu');
  const navMenuButton = document.getElementById('navMenuButton');
  navMenuButton.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
  });
};

/* window.addEventListener('DOMContentLoaded', (e) => {
  setNavMenuButtonEvent();
}); */

window.onpopstate = () => {
  const path = getPath();
  if (path === '/' || path === '') rerenderProperties();
};

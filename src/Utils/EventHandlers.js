/* eslint-disable no-console */
import store, { setNewState, getState } from './Store';
import { computeSearchUrl, getSearchString, setSearchUrl } from './Urls';

const runSearch = (form) => {
  const searchText = form.elements.searchText.value;
  if (searchText !== '') {
    computeSearchUrl(searchText);
    const newUrl = computeSearchUrl(searchText);
    setNewState({ type: 'SEARCH_PROPERTIES', q: searchText, start: 0 });
    setSearchUrl(newUrl);
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

export const displayCardDetails = (e, property) => {
  store.dispatch({ type: 'PROPERTY_DETAILS_FROM_SEARCH', property });
  const propertyDetailsDiv = document.getElementById('propertyDetailsFromSearchDiv');
  const propertiesDiv = document.getElementById('propertiesDiv');
  // const contentDiv = document.getElementById('propertyDetailsFromSearchDivContent');
  propertiesDiv.style.width = '60%';
  propertyDetailsDiv.style.display = 'inline-block';
  propertyDetailsDiv.style.width = '40%';
  propertyDetailsDiv.style.minWidth = '400px';
  // contentDiv.innerHTML = (() => <div>{property.state}</div>);
};

export const closeCardDetails = (e) => {
  const propertyDetailsDiv = document.getElementById('propertyDetailsFromSearchDiv');
  const propertiesDiv = document.getElementById('propertiesDiv');
  const contentDiv = document.getElementById('propertyDetailsFromSearchDivContent');
  propertyDetailsDiv.style.width = '0%';
  propertiesDiv.style.width = '100%';
  propertyDetailsDiv.style.display = 'none';
  // contentDiv.innerText = '';
};

export const paginator = (data) => {
  const { selected } = data;
  const offset = selected * 10;
  const { q } = getSearchString();
  const newUrl = computeSearchUrl(q, offset);
  setSearchUrl(newUrl);
  // console.log(data); propsSearchOffset
};

export const prepareSignup = () => {
  const signupForm = document.getElementById('signupForm');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });
};

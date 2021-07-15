export const prepareLandingPageSearch = () => {
  const searchForm = document.getElementById('searchForm');
  const searchTextInput = document.getElementById('homeSearchTextInput');
  const runSearch = () => {
    const searchText = searchForm.elements.searchText.value;
    if (searchText !== '') {
      const searchUrl = `${window.location.origin}/search?q=${searchText}`;
      window.location.href = `${searchUrl}`;
    }
  };
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    runSearch();
  });
  searchTextInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      runSearch();
    }
  });
};

export default () => {
  document.addEventListener('DOMContentLoaded', () => {
    prepareLandingPageSearch();
  });
};

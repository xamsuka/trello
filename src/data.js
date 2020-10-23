const getUserData = (dispatch) => {
  if (typeof(Storage) !== 'undefined') {
    return JSON.parse(localStorage.getItem('userData'));
  } else {
    return undefined;
  }
}

export { getUserData };

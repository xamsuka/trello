export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const KEYS = {
  ENTER_KEY: `Enter`,
  ESCAPE_KEY: `Escape`
};

export const closeModals = {
  isEscPress(evt, action) {
    if (evt.key === KEYS.ESCAPE_KEY) {
      action();
    }
  },
  isClickOut: function (evt, action) {
    if (evt.target.closest('.modal__window') === null) {
      action();
    }
  },
}

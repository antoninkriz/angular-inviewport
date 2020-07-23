export const WINDOW_MOCK_WITHOUT_INTERSECTION_OBSERVER = {
  closed: null,
  defaultStatus: null,
  document: null,
  frameElement: null,
  frames: null,
  history: null,
  innerHeight: null,
  innerWidth: null,
  length: null,
  localStorage: null,
  location: null,
  name: null,
  navigator: null,
  opener: null,
  outerHeight: null,
  outerWidth: null,
  pageXOffset: null,
  pageYOffset: null,
  parent: null,
  screen: null,
  screenLeft: null,
  screenTop: null,
  screenX: null,
  screenY: null,
  sessionStorage: null,
  scrollX: null,
  scrollY: null,
  self: null,
  status: null,
  top: null,
  print: (..._) => null,
};

export const WINDOW_MOCK = {
  ...WINDOW_MOCK_WITHOUT_INTERSECTION_OBSERVER,
  IntersectionObserver: function (..._) {
    this.observe = () => null;
    this.unobserve = () => null;
  },
  IntersectionObserverEntry: class IntersectionObserverEntryMock {},
};

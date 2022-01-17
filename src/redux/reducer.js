import { types } from "./constants";
const initialStateAuth = {
  isLoggingIn: false,
  isLoggingOut: false,
  isVerifying: false,
  emailVerified: false,
  verifyingError: false,
  loginError: false,
  logoutError: false,
  isAuthenticated: false,
  user: {},
};
const initialStateService = {
  toggle: false,
  active: false,
  numberCourse: 0,
  imageRef: [],
  videoRef: "",
  modalWindow: false,
  fadeModalSwitch: false,
  switchModalForm: false,
  userInputInfo: "",
  checkAuth: false,
};
const initialStateUser = {
  paidTarifs: false,
  selectedTariff: false,
};

const userReducer = (state = initialStateUser, action) => {
  switch (action.type) {
    case types.BUY_TARIFS:
      return {
        ...state,
        paidTarifs: true,
        selectedTariff: action.tariff, //professional
      };
    default:
      return state;
  }
};
const authReducer = (state = initialStateAuth, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        // emailVerified: action.user.emailVerified,
        user: action.user,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true,
      };
    case types.LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {},
      };
    case types.LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true,
      };
    case types.VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
        verifyingError: false,
        user: {},
      };
    case types.VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false,
      };
    case types.VERIFY_ERROR:
      return {
        ...state,
        verifyingError: true,
      };
    default:
      return state;
  }
};
const serviceReducer = (state = initialStateService, action) => {
  switch (action.type) {
    case types.DEFAULT_STATE:
      return { ...state, ...initialStateService };
    case types.SET_TOGGLE:
      return { ...state, toggle: action.payload };
    case types.SET_ACTIVE:
      return { ...state, active: action.payload };
    case types.SET_NUMBER_COURSE:
      return { ...state, numberCourse: action.payload };
    // case types.SET_IMAGE_REF:
    //   return { ...state, imageRef: [...state.imageRef, action.url]};
    case types.SET_IMAGE_REF:
      return { ...state, imageRef: action.url };
    case types.SET_VIDEO_REF:
      return { ...state, videoRef: action.payload };
    case types.SET_USER_INFO:
      if (
        action.id === "countryCode" ||
        action.id === "operatorCode" ||
        action.id === "phoneNumber"
      ) {
        return {
          ...state,
          userInputInfo: {
            ...state.userInputInfo,
            [action.id]: action.value.replace(/[a-z][A-Z]?$/, ""),
          },
        };
      } else {
        return {
          ...state,
          userInputInfo: { ...state.userInputInfo, [action.id]: action.value },
        };
      }
    case types.DISABLE_MODAL_FORM:
      return {
        ...state,
        modalWindow: false,
        fadeModalSwitch: false,
        switchModalForm: false,
      };
    case types.SWITCH_MODAL_FORM:
      return { ...state, switchModalForm: !state.switchModalForm };
    case types.OPEN_CLOSE_MODAL:
      return { ...state, modalWindow: !state.modalWindow, fadeModalSwitch: false };
    case types.FADE_MODAL_SWITCH:
      return { ...state, fadeModalSwitch: !state.fadeModalSwitch };
    case types.SET_CHECK_AUTH:
      return {
        ...state,
        checkAuth: {
          ...state.checkAuth,
          displayName: action.payload.displayName,
          email: action.payload.email,
          emailVerified: action.payload.emailVerified,
          phoneNumber: action.payload.phoneNumber,
          photoURL: action.payload.photoURL,
          uid: action.payload.uid,
        },
      };
    default:
      return state;
  }
};

export { authReducer, serviceReducer, userReducer };

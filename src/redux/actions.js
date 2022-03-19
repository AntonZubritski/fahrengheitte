import { types } from './constants';
import { fBaseStorage, fBaseAuth, fBaseData } from '../firebase/firebase';

//--------------------APP---------------------------
export const setCheckAuth = (payload) => ({
  type: types.SET_CHECK_AUTH,
  payload,
});

//-----------------HomePage-------------------------
// export const getAndSetSliderRef = () => {
//   return (dispatch) => {
//     fBaseData.ref("images/slides/").on("value", (name) => {
//       const data = name.val();
//       data.map((snap) => {
//         fBaseStorage
//         .ref(`images/slides/${snap}.png`)
//         .getDownloadURL()
//         .then((link) => dispatch(setImageRef(link)));
//       })
//     });
//   };
// };
export const getAndSetSliderRef = () => {
  return (dispatch) => {
    fBaseData.ref('images/slides/').on('value', (name) => {
      const data = name.val();
      dispatch(setImageRef(data));
    });
  };
};
//--------------------------------------------------
export const setImageRef = (url) => ({
  type: types.SET_IMAGE_REF,
  url,
});

//-----------------UserPage END---------------------
//-----------------UserPage-------------------------

export const getAndSetVideoRef = (numberCourse, paidTarifs) => {
  if (numberCourse && paidTarifs) {
    return (dispatch) => {
      fBaseStorage
        .ref(`/video/fahrengheitte_${numberCourse}.mov`)
        .getDownloadURL()
        .then((url) => dispatch(setVideoRef(url)));
    };
  } else {
    return (dispatch) => {
      fBaseStorage
        .ref(`/video/free/course_free.mov`)
        .getDownloadURL()
        .then((url) => dispatch(setVideoRef(url)));
    };
  }
};

// export const getAndSetVideoRef = (numberCourse, paidTarifs) => {
//   if (numberCourse && paidTarifs) {
//     return (dispatch) => {
//       fBaseStorage
//         .ref(`/video/fahrengheitte_${numberCourse}.mov`)
//         .getDownloadURL()
//         .then((url) => dispatch(setVideoRef(url)));
//     };
//   } else {
//     return (dispatch) => {
//       fBaseStorage
//         .ref("/video/output/output.mpd")
//         .getDownloadURL()
//         .then((url) => dispatch(setVideoRef(url)));
//     };
//   }
// };

export const choiceLesson = (number) => {
  return (dispatch) => {
    setTimeout(() => dispatch(setNumberCourse(number)), 400);
    dispatch(setToggle(false));
    dispatch(setActive(true));
    setTimeout(() => dispatch(setActive(false)), 700);
  };
};
//--------------------------------------------------
export const setToggle = (payload) => ({
  type: types.SET_TOGGLE,
  payload,
});
const setVideoRef = (payload) => ({
  type: types.SET_VIDEO_REF,
  payload,
});
const setNumberCourse = (payload) => ({
  type: types.SET_NUMBER_COURSE,
  payload,
});
const setActive = (payload) => ({
  type: types.SET_ACTIVE,
  payload,
});
//-----------------UserPage END----------------------

//-----------------Header----------------------
export const openCloseModal = () => ({
  type: types.OPEN_CLOSE_MODAL,
});
export const defaultState = () => ({
  type: types.DEFAULT_STATE,
});
//-----------------Header END----------------------
//-----------------Modal Block---------------------
export const setUserInfo = (value, id) => ({
  type: types.SET_USER_INFO,
  value,
  id,
});
export const switchModalForm = () => ({
  type: types.SWITCH_MODAL_FORM,
});
export const fadeModal = () => ({
  type: types.FADE_MODAL_SWITCH,
});
export const disableModal = () => ({
  type: types.DISABLE_MODAL_FORM,
});

//-----------------Modal Block END-----------------

//--------------FireBase function------------------

//Create new user in firebase authentication
export const createNewUser = (e, userInputInfo) => (dispatch) => {
  e.preventDefault();
  fBaseAuth
    .createUserWithEmailAndPassword(userInputInfo.email, userInputInfo.password)
    .then((userInfo) => console.log('Ура', userInfo))
    .then(() => {
      dispatch(verificationUs());
    })
    .then(() => dispatch(sendUserInfo(userInputInfo)))
    .catch(() => dispatch(loginError()));
};

const sendUserInfo = (userInputInfo) => (dispatch) => {
  const { phoneNumber, countryCode, operatorCode } = userInputInfo;
  const info = {
    name: userInputInfo.name,
    surname: userInputInfo.surname,
    phoneNumber: `${countryCode}(${operatorCode})${phoneNumber}`,
    email: userInputInfo.email,
  };
  //save user-data in firebase
  fBaseData
    .ref('users')
    .push(info)
    .catch((err) => alert('Уупс, что-то пошло не так:', err.message));
};

//Verification Send Mail
export const verificationUs = () => (dispatch) => {
  fBaseAuth.currentUser.sendEmailVerification().catch(() => dispatch(verifyError()));
};
//Сброс пароля
export const resetPassword = (email) => (dispatch) => {
  fBaseAuth
    .sendPasswordResetEmail(email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
};
//-------------FireBase function END---------------

export const loginUser = (e, email, password) => (dispatch) => {
  e.preventDefault();
  dispatch(requestLogin());
  fBaseAuth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(receiveLogin(user));
    })
    .catch((error) => {
      //Do something with the error if you want!
      dispatch(loginError());
    });
};
export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout());
  fBaseAuth
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
      dispatch(defaultState());
    })
    .catch((error) => {
      //Do something with the error if you want!
      dispatch(logoutError());
    });
};
export const verifyAuth = () => (dispatch) => {
  dispatch(verifyRequest());
  fBaseAuth.onAuthStateChanged((user) => {
    if (user !== null) {
      dispatch(receiveLogin(user));
      dispatch(disableModal());
    }
    setTimeout(() => dispatch(verifySuccess()), 2000);
    dispatch(defaultState()); // После входа или регистрации закрывается модальное окно
  });
};

const requestLogin = () => ({
  type: types.LOGIN_REQUEST,
});
const receiveLogin = (user) => ({
  type: types.LOGIN_SUCCESS,
  user,
});
const loginError = () => ({
  type: types.LOGIN_FAILURE,
});
const requestLogout = () => ({
  type: types.LOGOUT_REQUEST,
});
const receiveLogout = () => ({
  type: types.LOGOUT_SUCCESS,
});
const logoutError = () => ({
  type: types.LOGOUT_FAILURE,
});
const verifyRequest = () => ({
  type: types.VERIFY_REQUEST,
});
const verifySuccess = () => ({
  type: types.VERIFY_SUCCESS,
});
const verifyError = () => ({
  type: types.VERIFY_ERROR,
});

//------------------AdminPage----------------------
const checkForAdministrator = () => ({
  type: types.CHEK_FOR_ADMINISTRATOR,
});

// export const logIntoken = (payload) => ({
//   type: types.LOGIN_TOKEN,
//   payload
// });

export const logIntoken = (e, token) => (dispatch) => {
  e.preventDefault();
  console.log(token);
  fBaseAuth.signInWithCustomToken(token).then((info) => {
    console.log(info);
  });
};

//----------------END-AdminPage--------------------

import { combineReducers } from "redux";
import {
  ABILITIES_NEXT_RECOGNITION,
  HEADING_NEXT_WORK_HISTORY,
  SOFT_SKILL_NEXT_SUMMARY,
  RECOGNITION_NEXT_SOFT_SKILL,
  SIGN_IN,
  SIGN_OUT,
  SUMMARY_NEXT_FINALIZE,
  THEORETICAL_NEXT_ABILITIES,
  WORK_HISTORY_NEXT_THEORETICAL,
} from "../actions/types";
const initialState = {
  heading: {
    firstName: "",
    lastName: "",
    profession: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
  },
  workHistory: [
    {
      id: Date.now(),
      jobTitle: "",
      employer: "",
      city: "",
      state: "",
      startDate: "",
      endDate: "",
      currentlyWorkHere: true,
      jobDescription: "",
    },
  ],
  theoretical: {
    education: [],
    certificates: [],
  },
  abilities: {
    skills: [],
    technicalSkills: [],
  },
  recognition: {
    awards: [],
    achievements: [],
  },
  softSkill: [],
  summary: "",
};
const initialAuthState = {
  isSignedIn: null,
  userId: null,
};
const selectedTabReducer = (selectedTabData = initialState, action) => {
  if (action.type === HEADING_NEXT_WORK_HISTORY) {
    selectedTabData["heading"] = action.payload.heading;
    return { ...selectedTabData };
  }
  if (action.type === WORK_HISTORY_NEXT_THEORETICAL) {
    selectedTabData["workHistory"] = action.payload.workHistory;
    return { ...selectedTabData };
  }
  if (action.type === THEORETICAL_NEXT_ABILITIES) {
    selectedTabData["theoretical"] = action.payload.theoretical;
    return { ...selectedTabData };
  }
  if (action.type === ABILITIES_NEXT_RECOGNITION) {
    selectedTabData["abilities"] = action.payload.abilities;
    return { ...selectedTabData };
  }
  if (action.type === RECOGNITION_NEXT_SOFT_SKILL) {
    selectedTabData["recognition"] = action.payload.recognition;
    return { ...selectedTabData };
  }
  if (action.type === SOFT_SKILL_NEXT_SUMMARY) {
    selectedTabData["softSkill"] = action.payload.softSkill;
    return { ...selectedTabData };
  }
  if (action.type === SUMMARY_NEXT_FINALIZE) {
    selectedTabData["summary"] = action.payload.summary;
    return { ...selectedTabData };
  }

  return selectedTabData;
};

const authenticationReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};

export default combineReducers({
  selectedTabData: selectedTabReducer,
  auth: authenticationReducer,
});

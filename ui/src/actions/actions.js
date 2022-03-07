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
} from "./types";

export const nextWorkHistoryAction = (data) => {
  return {
    type: HEADING_NEXT_WORK_HISTORY,
    payload: data,
  };
};

export const nextTheoreticalAction = (data) => {
  return {
    type: WORK_HISTORY_NEXT_THEORETICAL,
    payload: data,
  };
};

export const nextAbilitiesAction = (data) => {
  return {
    type: THEORETICAL_NEXT_ABILITIES,
    payload: data,
  };
};

export const nextRecognitionAction = (data) => {
  return {
    type: ABILITIES_NEXT_RECOGNITION,
    payload: data,
  };
};

export const nextPersonalityAction = (data) => {
  return {
    type: RECOGNITION_NEXT_SOFT_SKILL,
    payload: data,
  };
};

export const nextSummaryAction = (data) => {
  return {
    type: SOFT_SKILL_NEXT_SUMMARY,
    payload: data,
  };
};

export const nextFinalizeAction = (data) => {
  return {
    type: SUMMARY_NEXT_FINALIZE,
    payload: data,
  };
};

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

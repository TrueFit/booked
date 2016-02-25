export const SET_PLATFORM = 'SET_PLATFORM';

export const setPlatform = platform => {
  return {
    type: SET_PLATFORM,
    payload: platform
  };
};

import * as types from './types'
import Spotify from 'spotify-web-api-js';

const spotifyApi = new Spotify();

/** set the app's access and refresh tokens */
export function setTokens({accessToken, refreshToken}) {
  console.log("Setting tokens from actions")
  if (accessToken) {
    spotifyApi.setAccessToken(accessToken);
  }
  return { type: types.SPOTIFY_TOKENS, accessToken, refreshToken };
}

/* get the user's info from the /me api */
export function setMe() {
  return dispatch => {
    dispatch({ type: types.SPOTIFY_ME_BEGIN});
    spotifyApi.getMe().then(data => {
      console.log("Retrieved me from actions!")
      dispatch({ type: types.SPOTIFY_ME_SUCCESS, data: data });
    }).catch(e => {
      dispatch({ type: types.SPOTIFY_ME_FAILURE, error: e });
    });
  };
}

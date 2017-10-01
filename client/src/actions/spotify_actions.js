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

/* get the user's currently playing song */
export function setCurrentSong() {
  return dispatch => {
    spotifyApi.getMyCurrentPlayingTrack().then(data => {
      let id = data.item.uri.split(":").slice(-1)[0]
      spotifyApi.getTrack(id).then(trackdata => {
        spotifyApi.getAudioFeaturesForTrack(id).then(features => {
          dispatch({
            type: types.SPOTIFY_SET_CURRENT_SONG,
            uri: trackdata.uri,
            name: trackdata.name,
            artist: trackdata.album.artists[0].name,
            key: features.key,
            danceability: features.danceability,
            energy: features.energy,
            loudness: features.loudness,
            mode: features.mode,
            speechiness: features.speechiness,
            acousticness: features.acousticness,
            instrumentalness: features.instrumentalness,
            liveness: features.liveness,
            valence: features.valence,
            tempo: features.tempo
          })
        })
      })
    }).catch((e) => {console.log(e)})
  }
}

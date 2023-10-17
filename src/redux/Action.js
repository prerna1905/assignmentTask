import axios from 'axios';

export const GET_MOVIE_DETAILS_REQUEST = 'GET_MOVIE_DETAILS_REQUEST';
export const GET_MOVIE_DETAILS_SUCCESS = 'GET_MOVIE_DETAILS_SUCCESS';
export const GET_MOVIE_DETAILS_FAILURE = 'GET_MOVIE_DETAILS_FAILURE';
export const GET_MOVIEBYID_DETAILS_REQUEST = 'GET_MOVIEBYID_DETAILS_REQUEST';
export const GET_MOVIEBYID_DETAILS_SUCCESS = 'GET_MOVIEBYID_DETAILS_SUCCESS';
export const GET_MOVIEBYID_DETAILS_FAILURE = 'GET_MOVIEBYID_DETAILS_FAILURE';

export const getMovieDetails = () => {
  return async (dispatch) => {
    dispatch({ type: GET_MOVIE_DETAILS_REQUEST });

    try {
      const res = await axios.get(
        'https://www.omdbapi.com/?apikey=b686258&s=kabhi'
      );

      if (res.data.Response) {
        dispatch({
          type: GET_MOVIE_DETAILS_SUCCESS,
          payload: res.data.Search,
        });
      } else {
        dispatch({
          type: GET_MOVIE_DETAILS_FAILURE,
          error: 'Unable to fetch data',
        });
      }
    } catch (error) {
      dispatch({
        type: GET_MOVIE_DETAILS_FAILURE,
        error: 'An error occurred while fetching data',
      });
    }
  };
};

// get by id 
export const getMovieDetailsById = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_MOVIEBYID_DETAILS_REQUEST });

    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=b686258&i=${id}`
      );

      if (res.data.Response) {
        dispatch({
          type: GET_MOVIEBYID_DETAILS_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_MOVIEBYID_DETAILS_FAILURE,
          error: 'Unable to fetch data',
        });
      }
    } catch (error) {
      dispatch({
        type: GET_MOVIEBYID_DETAILS_FAILURE,
        error: 'An error occurred while fetching data',
      });
    }
  };
};


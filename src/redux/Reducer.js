import {
  GET_MOVIE_DETAILS_REQUEST,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_FAILURE,
  GET_MOVIEBYID_DETAILS_REQUEST,
  GET_MOVIEBYID_DETAILS_SUCCESS,
  GET_MOVIEBYID_DETAILS_FAILURE
} from './Action';

const initialState = {
  movie: [],
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_MOVIE_DETAILS_SUCCESS:
      return { ...state, loading: false, movie: action.payload, error: null };

    case GET_MOVIE_DETAILS_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default movieReducer;

const initialMovieState = {
  movieById: {},
  loading: false,
  error: null,
};

export const movieByIdReducer = (state = initialMovieState, action) => {
  switch (action.type) {
    case GET_MOVIEBYID_DETAILS_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_MOVIEBYID_DETAILS_SUCCESS:
      return { ...state, loading: false, movieById: action.payload, error: null };

    case GET_MOVIEBYID_DETAILS_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

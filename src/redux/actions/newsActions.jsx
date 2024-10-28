import axios from 'axios';
import { fetchNewsSuccess, fetchNewsFailure } from '../slices/newsSlice';

export const fetchNews = (category) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://newsdata.io/api/1/news?apikey=pub_57532e9510e28fc2156a9ec59f237bac2361a&image=1&category=${category}&language=en&removeduplicate=1`
    );

    console.log(response.data.results)
    dispatch(fetchNewsSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchNewsFailure(error.message));
  }
};

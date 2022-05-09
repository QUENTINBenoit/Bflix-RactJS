export const FETCH_SERIES_FROM_API = 'FETCH_SERIES_FROM_API';

export const fetchSeriesFromApi = () => ({

  type: FETCH_SERIES_FROM_API,

});

export const SAVE_SERIES = 'SAVE_RECIPES';

export const saveSeries = (series) => ({
  type: SAVE_SERIES,
  series,
});

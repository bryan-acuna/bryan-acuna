import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { WeatherDetailsProps } from "../../pages/Weather/WeatherDetails";

const WEATHER_API_KEY = "7c838682953a2ff39254d47495b5b0ab";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5",
  }),
  endpoints: (builder) => ({
    fetchWeather: builder.query<WeatherDetailsProps, string | null>({
      query: (q = "quito") =>
        `/weather?q=${q}&units=metric&appid=${WEATHER_API_KEY}`,
    }),
  }),
});

export const { useFetchWeatherQuery } = apiSlice;

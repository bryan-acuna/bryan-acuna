import styles from "./Weather.module.css";

import {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import WeatherDetails, { WeatherDetailsProps } from "./WeatherDetails";
import { useFetchWeatherQuery } from "../../store/weather/weather-api-slice";

const SearchMain = () => {
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("quito");
  const { data, isFetching } = useFetchWeatherQuery(searchCity);



  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCity(e.target.value);
  };

  const getWeatherInfo: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    setSearchCity(city);
  };
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.search}>
          <input
            onChange={onChangeInput}
            placeholder="type city name..."
            value={city}
            id="search"
            type="text"
          />
        </div>
        <button onClick={getWeatherInfo} className={styles.searchButton}>
          search
        </button>
      </div>
      {data && (
        <WeatherDetails
          sys={data.sys}
          name={data.name}
          wind={data.wind}
          main={data.main}
          weather={data.weather}
        />
      )}
    </>
  );
};

export default SearchMain;

import styles from "./Weather.module.css";
import {
  TiWeatherPartlySunny,
  TiWeatherWindy,
  TiWeatherShower,
  TiWeatherCloudy,
} from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import { BsCloudFog, BsCloudHaze1, BsCloudRain } from "react-icons/bs";
import { useEffect, useState } from "react";

export interface WeatherDetailsProps {
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  sys: {
    country: string;
    sunset: number;
  };
  wind: { speed: number };
  name: string;
  weather: WeatherProps[];
}

interface WeatherProps {
  main: string;
}

const WeatherDetails = ({
  main,
  sys,
  name,
  wind,
  weather,
}: WeatherDetailsProps) => {
  let weatherType = weather[0].main;
  const [weatherState, setWeatherState] = useState(
    <BsCloudRain className={styles.weatherIcon} />
  );
  useEffect(() => {
    if (weatherType) {
      switch (weatherType) {
        case "Clouds":
          setWeatherState(<TiWeatherCloudy className={styles.weatherIcon} />);
          break;
        case "Haze":
          setWeatherState(<BsCloudFog className={styles.weatherIcon} />);
          break;
        case "Clear":
          setWeatherState(
            <TiWeatherPartlySunny className={styles.weatherIcon} />
          );
          break;
        case "Mist":
          setWeatherState(<BsCloudHaze1 className={styles.weatherIcon} />);
          break;
        case "Rain":
          setWeatherState(<TiWeatherShower className={styles.weatherIcon} />);
          break;

        default:
          setWeatherState(
            <TiWeatherPartlySunny className={styles.weatherIcon} />
          );
          break;
      }
    }
  }, [weatherType]);
  let date = new Date(sys.sunset * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <body className={styles.weather__body}>
      <article className={styles.widget}>
        <div className={styles.weatherIcon}>{weatherState}</div>
        <div className={styles.weatherInfo}>
          <div className={styles.temperature}>
            <span>{main?.temp}&deg;C</span>
          </div>
          <div className={styles.description}>
            <div className={styles.weatherCondition}>{weatherType}</div>
            <div className={styles.place}>
              {name}, {sys?.country}
            </div>
          </div>
        </div>
        <div className={styles.date}>{new Date().toLocaleString()}</div>
        <div className={styles.extra__temp}>
          <div className={styles.temp__info__minmax}>
            <div className={styles.two__sided__section}>
              <p className={styles.icon__p}>
                <TiWeatherPartlySunny />
              </p>
              <p className={styles.extra__info__leftSide}>
                {timeStr} <br />
                Sunset
              </p>
            </div>
            <div className={styles.two__sided__section}>
              <p className={styles.icon__p}>
                <WiHumidity />
              </p>
              <p className={styles.extra__info__leftSide}>
                {main?.humidity} <br />
                Humidity
              </p>
            </div>
          </div>
          <div className={styles.temp__info__minmax}>
            <div className={styles.two__sided__section}>
              <p className={styles.icon__p}>
                <BsCloudRain />
              </p>
              <p className={styles.extra__info__leftSide}>
                {main?.pressure} <br />
                Pressure
              </p>
            </div>
            <div className={styles.two__sided__section}>
              <p className={styles.icon__p}>
                <TiWeatherWindy />
              </p>
              <p className={styles.extra__info__leftSide}>
                {wind?.speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </body>
  );
};

export default WeatherDetails;

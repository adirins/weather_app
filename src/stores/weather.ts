import { defineStore } from "pinia";
import axios from "axios";

const API_KEY = "5796abbde9106b7da4febfae8c44c232";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

interface WeatherData {
  name: string;
  weather: {
    description: string;
    icon: string;
    main: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
}

interface OneCallWeather {
  lat: number;
  lon: number;
  timezone: string;
  current: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    wind_speed: number;
    weather: {
      description: string;
      icon: string;
      main: string;
    }[];
  };
  // optionally include `daily`, `hourly`, etc.
}

interface CityListResponse {
  cod: string;
  count: number;
  list: WeatherData[];
}

interface WeatherState {
  weatherLoading: boolean;
  cityListLoading: boolean;
  currentWeather: OneCallWeather | null;
  cityList: CityListResponse | null;
  error: string | null;
}

type Units = 'standard' | 'metric' | 'imperial';

interface WeatherRequestOptions {
  city?: string;
  units?: Units;
}

export const useWeatherStore = defineStore("weatherStore", {
  state: (): WeatherState => ({
    cityListLoading: false,
    cityList: null,
    weatherLoading: false,
    currentWeather: null,
    error: null,
  }),

  actions: {
    getCityList({ city = "London", units = "metric" }: WeatherRequestOptions): Promise<CityListResponse> {
      this.cityListLoading = true;
      this.error = null;

      const params = {
        q: city,
        appid: API_KEY,
        units,
      };

      return new Promise((resolve, reject) => {
        axios
          .get<CityListResponse>(`${BASE_URL}/find`, { params })
          .then((response) => {
            if (response.data.cod === "200") {
              this.cityList = response.data;
              resolve(response.data);
            } else {
              const message = `City list fetch failed with code: ${response.data.cod}`;
              this.error = message;
              reject(new Error(message));
            }
          })
          .catch((error) => {
            this.error = axios.isAxiosError(error)
              ? error.response?.data?.message || error.message
              : "An unknown error occurred.";
            console.error("City list fetch error:", error);
            reject(error);
          })
          .finally(() => {
            this.cityListLoading = false;
          });
      });
    },

    getCurrentWeather({ units = "metric" }: WeatherRequestOptions): Promise<OneCallWeather> {
      this.weatherLoading = true;
      this.error = null;

      const params = {
        lat: 34.0901,
        lon: -118.4065,
        appid: API_KEY,
        units,
      };

      return new Promise((resolve, reject) => {
        axios
          .get<OneCallWeather>(`${BASE_URL}/onecall`, { params })
          .then((response) => {
            this.currentWeather = response.data;
            resolve(response.data);
          })
          .catch((error) => {
            this.error = axios.isAxiosError(error)
              ? error.response?.data?.message || error.message
              : "An unknown error occurred.";
            console.error("Current weather fetch error:", error);
            reject(error);
          })
          .finally(() => {
            this.weatherLoading = false;
          });
      });
    },
  },
});

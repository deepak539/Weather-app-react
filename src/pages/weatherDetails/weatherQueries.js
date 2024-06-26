import { useQuery } from "@tanstack/react-query";
import {
  fetchLocationDetails,
  fetchWeatherDetails,
  fetchWeatherForecastDetails,
} from "../../apiUtils";

export const useFetchSearchResults = (searchedText) => {
  const { data: searchedCities, error: searchedError } = useQuery({
    queryKey: ["locationDetails", searchedText],
    queryFn: fetchLocationDetails,
    enabled: !!searchedText,
  });

  return { searchedCities, searchedError };
};

export const useFetchWeatherDetails = (selectedCityDetails) => {
  const {
    isLoading,
    data: weatherDetails,
    error: weatherError,
  } = useQuery({
    queryKey: ["weatherDetails", selectedCityDetails],
    queryFn: fetchWeatherDetails,
    enabled: !!selectedCityDetails,
  });

  return { weatherDetails, weatherError, isLoading };
};

export const useFetchWeatherForecastDetails = (selectedCityDetails) => {
  const {
    isLoading,
    data: weatherForecastDetails,
    error: weatherForecastError,
  } = useQuery({
    queryKey: ["weatherForecastDetails", selectedCityDetails],
    queryFn: fetchWeatherForecastDetails,
    enabled: !!selectedCityDetails,
  });

  return { weatherForecastDetails, weatherForecastError, isLoading };
};

export const WEATHER_ICONS = {
  Clear:        '☀️',
  Clouds:       '⛅',
  Rain:         '🌧️',
  Drizzle:      '🌦️',
  Thunderstorm: '⛈️',
  Snow:         '❄️',
  Mist:         '🌫️',
  Fog:          '🌫️',
  Haze:         '🌁',
  Smoke:        '💨',
  Dust:         '🌪️',
  Sand:         '🌪️',
  Ash:          '🌋',
  Squall:       '💨',
  Tornado:      '🌪️',
};

export const API_KEY = process.env.REACT_APP_WEATHER_KEY;
export const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export function kelvinTo(k, unit) {
  return unit === 'C'
    ? Math.round(k - 273.15)
    : Math.round((k - 273.15) * 9 / 5 + 32);
}

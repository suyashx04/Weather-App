import { useState, useCallback } from 'react';
import SearchBar   from './components/SearchBar';
import UnitToggle  from './components/UnitToggle';
import WeatherHero from './components/WeatherHero';
import Forecast    from './components/Forecast';
import { API_KEY, BASE_URL } from './utils';

export default function App() {
  const [unit, setUnit]         = useState('C');
  const [current, setCurrent]   = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState(false);

  const fetchWeather = useCallback(async (city) => {
    setLoading(true);
    setError(false);
    setCurrent(null);
    setForecast(null);

    try {
      const [curRes, fcRes] = await Promise.all([
        fetch(`${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}`),
        fetch(`${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}`),
      ]);
      if (!curRes.ok || !fcRes.ok) throw new Error('not found');

      const curData = await curRes.json();
      const fcData  = await fcRes.json();
      setCurrent(curData);
      setForecast(fcData.list);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center"
         style={{ background: 'linear-gradient(160deg, #B8D8EF 0%, #D4E9F7 40%, #E8F4FB 100%)' }}>

      {/* Animated cloud blobs */}
      {[
        'w-40 h-12 top-[8%] opacity-70 cloud-drift-1',
        'w-24 h-8  top-[22%] opacity-50 cloud-drift-2',
        'w-56 h-16 top-[6%]  opacity-45 cloud-drift-3',
      ].map((cls, i) => (
        <div
          key={i}
          className={`fixed rounded-[60px] pointer-events-none z-0 bg-white/55 blur-[8px] ${cls}`}
        />
      ))}

      {/* Card */}
      <div className="
        relative z-10 w-full max-w-[540px] mx-6 my-8
        bg-white/70 backdrop-blur-xl
        border border-white/80 rounded-2xl
        p-7 shadow-[0_8px_40px_rgba(43,100,150,0.12)]
      ">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <span className="text-[11px] text-slate-400 uppercase tracking-widest">weather</span>
          <UnitToggle unit={unit} onToggle={setUnit} />
        </div>

        {/* Search */}
        <SearchBar onSearch={fetchWeather} />

        {/* States */}
        {loading && (
          <p className="text-center text-sm text-slate-400 tracking-widest py-6">fetching data…</p>
        )}

        {error && !loading && (
          <div className="bg-red-50/80 border border-red-200/60 rounded-xl px-4 py-3 text-sm text-red-700">
            city not found — try a different name
          </div>
        )}

        {current && !loading && (
          <>
            <WeatherHero data={current} unit={unit} />
            {forecast && <Forecast list={forecast} unit={unit} />}
          </>
        )}

        {!current && !loading && !error && (
          <p className="text-center text-sm text-slate-400 tracking-wide py-6">
            search for a city to see the weather ☁️
          </p>
        )}
      </div>
    </div>
  );
}

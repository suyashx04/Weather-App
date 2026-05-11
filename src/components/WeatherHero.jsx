import { WEATHER_ICONS, kelvinTo } from '../utils';

export default function WeatherHero({ data, unit }) {
  const { main, weather, wind, visibility, name, sys } = data;
  const w = weather[0];
  const now = new Date();

  return (
    <div className="fade-up">
      {/* City + datetime */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800 tracking-tight" style={{ fontFamily: 'Fraunces, serif' }}>
            {name}
          </h1>
          <p className="text-xs text-slate-400 uppercase tracking-widest mt-0.5">{sys.country}</p>
        </div>
        <div className="text-right text-xs text-slate-400">
          <div>{now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
          <div>{now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}</div>
        </div>
      </div>

      {/* Icon + temp */}
      <div className="flex items-center gap-5 my-5">
        <div className="w-[72px] h-[72px] shrink-0 bg-white/70 rounded-full flex items-center justify-center border border-sky-100 text-4xl">
          {WEATHER_ICONS[w.main] || '🌤️'}
        </div>
        <div>
          <div className="text-6xl font-light text-slate-800 leading-none tracking-tighter" style={{ fontFamily: 'Fraunces, serif' }}>
            {kelvinTo(main.temp, unit)}
            <span className="text-2xl text-slate-400 font-light align-super">°{unit}</span>
          </div>
          <p className="text-sm text-slate-400 capitalize tracking-wide mt-1">{w.description}</p>
          <p className="text-xs text-slate-400 mt-1">
            feels like {kelvinTo(main.feels_like, unit)}°{unit}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2.5 fade-up-delay">
        {[
          { label: 'humidity',   value: `${main.humidity}%` },
          { label: 'wind',       value: `${Math.round(wind.speed * 3.6)} km/h` },
          { label: 'visibility', value: visibility ? `${(visibility / 1000).toFixed(1)} km` : '—' },
        ].map(stat => (
          <div key={stat.label} className="bg-white/40 border border-sky-100/80 rounded-xl p-3 text-center">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-sm font-medium text-slate-700">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { WEATHER_ICONS, kelvinTo } from '../utils';

export default function Forecast({ list, unit }) {
  // Group 3-hourly slots by calendar day
  const days = {};
  list.forEach(item => {
    const d = new Date(item.dt * 1000);
    const key = d.toDateString();
    if (!days[key]) {
      days[key] = { label: d.toLocaleDateString([], { weekday: 'short' }), items: [] };
    }
    days[key].items.push(item);
  });

  return (
    <div className="mt-5 fade-up-delay-2">
      <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-2.5">5-day forecast</p>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {Object.values(days).slice(0, 5).map(day => {
          const temps = day.items.map(i => i.main.temp);
          const hi    = Math.max(...temps);
          const lo    = Math.min(...temps);
          const mid   = day.items[Math.floor(day.items.length / 2)];
          const icon  = WEATHER_ICONS[mid.weather[0].main] || '🌤️';

          return (
            <div
              key={day.label}
              className="shrink-0 min-w-[58px] bg-white/40 border border-sky-100/80 rounded-xl px-3 py-2.5 text-center"
            >
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">{day.label}</p>
              <div className="text-xl my-1">{icon}</div>
              <p className="text-xs font-medium text-slate-700">{kelvinTo(hi, unit)}°</p>
              <p className="text-[10px] text-slate-400">{kelvinTo(lo, unit)}°</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

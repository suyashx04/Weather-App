import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('London');

  const handleSearch = () => {
    if (value.trim()) onSearch(value.trim());
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSearch()}
        placeholder="enter city name…"
        className="
          flex-1 bg-white/70 border border-sky-200/60 rounded-xl
          px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400
          font-[inherit] outline-none
          focus:border-sky-400 transition-colors duration-200
        "
      />
      <button
        onClick={handleSearch}
        className="
          bg-sky-500 hover:bg-sky-600 active:scale-95
          text-white text-sm rounded-xl px-5 py-2.5
          font-[inherit] tracking-wide transition-all duration-150 cursor-pointer
        "
      >
        search
      </button>
    </div>
  );
}

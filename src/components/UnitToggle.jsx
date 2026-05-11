export default function UnitToggle({ unit, onToggle }) {
  return (
    <div className="flex gap-1.5">
      {['C', 'F'].map(u => (
        <button
          key={u}
          onClick={() => onToggle(u)}
          className={`
            text-xs px-3 py-1 rounded-md border font-[inherit] tracking-wider cursor-pointer transition-all duration-150
            ${unit === u
              ? 'bg-sky-500 text-white border-sky-500'
              : 'bg-transparent text-slate-400 border-sky-200/60 hover:border-sky-300'}
          `}
        >
          °{u}
        </button>
      ))}
    </div>
  );
}

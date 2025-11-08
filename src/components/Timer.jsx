
import React from 'react';

const Timer = ({ 
  timeLeft, 
  isPlaying,
  onPrevStep,
  onNextStep,
  onTogglePlay,
  onToggleTheme,
  isDarkMode,
  canPrev = false,
  canNext = false,
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 animate-slideIn">
      <div className="bg-white/95 rounded-2xl shadow-xl p-4 border border-blue-200 min-w-[160px] max-w-[180px] backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
        <div className="flex flex-col items-center gap-2">
          <div className="flex w-full items-center justify-between">
            <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide dark:text-gray-300">
              Time
            </div>
            <button
              type="button"
              onClick={onToggleTheme}
              className="h-6 w-6 rounded-full bg-white text-xs shadow hover:shadow-md transition dark:bg-slate-800 dark:text-yellow-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
          <div className="relative w-20 h-20">
            <svg className="transform -rotate-90 w-20 h-20">
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke="#e5e7eb"
                strokeWidth="6"
                fill="none"
              />
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke="url(#gradient)"
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 32}`}
                strokeDashoffset={`${2 * Math.PI * 32 * (1 - timeLeft / 6)}`}
                strokeLinecap="round"
                className="transition-all duration-100"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-purple-300">
                {Math.ceil(timeLeft)}s
              </span>
            </div>
          </div>
          <div className="text-[11px] text-gray-500 text-center dark:text-gray-300">
            {isPlaying ? '▶️ Playing' : '⏸️ Paused'}
          </div>
          <div className="flex items-center justify-center gap-2 mt-1">
            <button
              type="button"
              onClick={onPrevStep}
              disabled={!canPrev}
              className={`h-7 w-7 rounded-full text-xs font-semibold shadow-sm transition ${
                canPrev
                  ? 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-slate-800 dark:text-gray-200 dark:hover:bg-slate-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-slate-700 dark:text-slate-500'
              }`}
              aria-label="Previous step"
            >
              ←
            </button>
            <button
              type="button"
              onClick={onTogglePlay}
              className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold shadow-md hover:shadow-lg transition dark:from-cyan-400 dark:to-fuchsia-500"
              aria-label={isPlaying ? 'Pause tour' : 'Play tour'}
            >
              {isPlaying ? '⏸' : '▶️'}
            </button>
            <button
              type="button"
              onClick={onNextStep}
              disabled={!canNext}
              className={`h-7 w-7 rounded-full text-xs font-semibold shadow-sm transition ${
                canNext
                  ? 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-slate-800 dark:text-gray-200 dark:hover:bg-slate-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-slate-700 dark:text-slate-500'
              }`}
              aria-label="Next step"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;

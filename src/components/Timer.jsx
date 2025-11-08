
import React from 'react';

const Timer = ({ timeLeft, isPlaying }) => {
  return (
    <div className="fixed top-8 left-8 z-40 animate-slideIn">
      <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-blue-300 min-w-[200px] backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
        <div className="flex flex-col items-center gap-3">
          <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide dark:text-gray-300">
            Time Remaining
          </div>
          <div className="relative w-24 h-24">
            <svg className="transform -rotate-90 w-24 h-24">
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - timeLeft / 6)}`}
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
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-purple-300">
                {Math.ceil(timeLeft)}s
              </span>
            </div>
          </div>
          <div className="text-xs text-gray-500 text-center dark:text-gray-300">
            {isPlaying ? '▶️ Playing' : '⏸️ Paused'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;

import React from 'react';

const TourControls = ({
  tourStep,
  isPlaying,
  allItemsLength,
  selectedColumn,
  onStartTour,
  onStopTour,
  onPrevStep,
  onNextStep,
  onTogglePlay,
  onSelectColumn
}) => {
  return (
    <div className="flex justify-center gap-4 mb-8 flex-wrap">
      <button
        onClick={onStartTour}
        disabled={tourStep >= 0}
        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
          tourStep >= 0 
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-slate-700 dark:text-slate-400' 
            : 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg hover:scale-105 dark:from-emerald-400 dark:to-teal-400'
        }`}
      >
        ▶️ Start Guided Tour
      </button>
      
      {tourStep >= 0 && (
        <>
          <button 
            onClick={onPrevStep} 
            disabled={tourStep === 0} 
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              tourStep === 0 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-slate-700 dark:text-slate-400' 
                : 'bg-blue-500 text-white hover:bg-blue-600 dark:bg-indigo-500 dark:hover:bg-indigo-400'
            }`}
          >
            ← Previous
          </button>
          
          <button 
            onClick={onTogglePlay} 
            className="px-6 py-3 rounded-full font-semibold bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-300 dark:bg-amber-400 dark:text-slate-900 dark:hover:bg-amber-300"
          >
            {isPlaying ? '⏸ Pause' : '▶️ Play'}
          </button>
          
          <button 
            onClick={onNextStep} 
            disabled={tourStep === allItemsLength - 1} 
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              tourStep === allItemsLength - 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-slate-700 dark:text-slate-400' 
                : 'bg-blue-500 text-white hover:bg-blue-600 dark:bg-indigo-500 dark:hover:bg-indigo-400'
            }`}
          >
            Next →
          </button>
          
          <button 
            onClick={onStopTour} 
            className="px-6 py-3 rounded-full font-semibold bg-red-500 text-white hover:bg-red-600 transition-all duration-300 dark:bg-rose-500 dark:hover:bg-rose-400"
          >
            ✕ Stop Tour
          </button>
        </>
      )}
      
      {tourStep < 0 && (
        <>
          <button 
            onClick={() => onSelectColumn('dangers')} 
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedColumn === 'dangers' 
                ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg scale-105 dark:from-rose-500 dark:to-orange-400' 
                : 'bg-white text-gray-700 hover:shadow-md dark:bg-slate-800 dark:text-gray-200'
            }`}
          >
            Focus on Dangers
          </button>
          <button 
            onClick={() => onSelectColumn('manifestations')} 
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedColumn === 'manifestations' 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105 dark:from-sky-500 dark:to-violet-500' 
                : 'bg-white text-gray-700 hover:shadow-md dark:bg-slate-800 dark:text-gray-200'
            }`}
          >
            Focus on Manifestations
          </button>
          {selectedColumn && (
            <button 
              onClick={() => onSelectColumn(null)} 
              className="px-6 py-3 rounded-full font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all duration-300 dark:bg-slate-700 dark:text-gray-200 dark:hover:bg-slate-600"
            >
              Show All
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default TourControls;

import React from 'react';

const ProgressBar = ({ tourStep, totalSteps }) => {
  return (
    <div className="mb-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-full p-2 shadow-lg dark:bg-slate-800/70 dark:border dark:border-slate-700">
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-gray-700 ml-2 dark:text-gray-200">
            Step {tourStep + 1} of {totalSteps}
          </span>
          <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden dark:bg-slate-700">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-300 dark:from-sky-400 dark:to-fuchsia-500" 
              style={{ width: `${((tourStep + 1) / totalSteps) * 100}%` }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

import React from 'react';

const CompletionModal = ({ show, onClose, onRestart }) => {
  if (!show) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" 
      onClick={onClose}
    >
      <div 
        className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl max-w-2xl w-full p-1 shadow-2xl transform scale-100 animate-scaleIn dark:from-cyan-500 dark:via-purple-500 dark:to-pink-500" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-3xl p-8 dark:bg-slate-900/95">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-4xl">✓</span>
              </div>
            </div>
            
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-sky-300 dark:via-purple-300 dark:to-pink-300">
              Tour Completed!
            </h2>
            
            <p className="text-xl text-gray-700 mb-6 leading-relaxed dark:text-gray-200">
              Thank you for taking the time to understand stress and its impacts.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 dark:from-slate-800 dark:to-slate-900">
              <p className="text-2xl font-semibold text-gray-800 italic dark:text-gray-100">
                "Managing stress is not about eliminating it, but mastering the art of balance and resilience."
              </p>
              <p className="text-sm text-gray-600 mt-3 dark:text-gray-300">- Your journey to wellness starts with awareness</p>
            </div>
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={onRestart}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 dark:from-sky-500 dark:to-fuchsia-500"
              >
                🔄 Restart Tour
              </button>
              <button
                onClick={onClose}
                className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-all duration-300 dark:bg-slate-700 dark:text-gray-100 dark:hover:bg-slate-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletionModal;

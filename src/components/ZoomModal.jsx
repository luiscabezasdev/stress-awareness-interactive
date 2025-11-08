import React from 'react';

const ZoomModal = ({ zoomedItem, onClose }) => {
  if (!zoomedItem) return null;

  const Icon = zoomedItem.item.icon;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl transform scale-100 animate-scaleIn dark:bg-slate-900/95 dark:border dark:border-slate-700" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div className={`p-5 rounded-2xl bg-gradient-to-br ${zoomedItem.item.color}`}>
            <Icon className="w-12 h-12 text-white" />
          </div>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 text-3xl leading-none dark:text-gray-300 dark:hover:text-white"
          >
            ×
          </button>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
          {zoomedItem.item.text}
        </h2>
        
        <div className="mb-4">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
            zoomedItem.column === 'dangers' 
              ? 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-200' 
              : 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-200'
          }`}>
            {zoomedItem.column === 'dangers' ? '⚠️ Danger' : '📋 Manifestation'}
          </span>
        </div>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-6 dark:text-gray-200">
          {zoomedItem.item.explanation}
        </p>
        
        <button 
          onClick={onClose} 
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 dark:from-sky-500 dark:to-fuchsia-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ZoomModal;

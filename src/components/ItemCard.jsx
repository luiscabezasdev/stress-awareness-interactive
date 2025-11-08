import React from 'react';

const ItemCard = ({ 
  item, 
  column, 
  isHovered, 
  isTourActive, 
  shouldHighlight,
  tourStep,
  onMouseEnter, 
  onMouseLeave, 
  onClick 
}) => {
  const Icon = item.icon;
  const itemId = `item-${column === 'dangers' ? 'danger' : 'manifestation'}-${item.id}`;

  return (
    <div
      id={itemId}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={`relative rounded-xl border-2 cursor-pointer transition-all duration-500 transform backdrop-blur ${
        isHovered || isTourActive ? 'scale-105 shadow-xl -translate-y-1' : 'shadow-md'
      } ${
        shouldHighlight && !isTourActive ? 'opacity-100' : isTourActive ? 'opacity-100 ring-4 ring-blue-400' : 'opacity-40'
      } ${item.bgColor} ${item.borderColor} dark:bg-slate-800/70 dark:border-slate-700`}
    >
      <div className={`p-4 transition-all duration-500 ${isTourActive ? 'pb-2' : ''}`}>
        <div className="flex items-start gap-3">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} transition-transform duration-300 ${
            isHovered || isTourActive ? 'rotate-12 scale-110' : 'rotate-0'
          }`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <p className={`flex-1 text-gray-800 font-medium leading-relaxed transition-all duration-300 ${
            isHovered || isTourActive ? 'text-gray-900 dark:text-white' : 'dark:text-gray-200'
          }`}>
            {item.text}
          </p>
        </div>
      </div>
      
      <div className={`overflow-hidden transition-all duration-500 ${
        isTourActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className={`px-4 pb-4 pt-2 border-t-2 ${item.borderColor} bg-white/50 dark:bg-slate-900/60 dark:border-slate-700`}>
          <p className="text-gray-700 text-sm leading-relaxed dark:text-gray-200">
            {item.explanation}
          </p>
        </div>
      </div>
      
      {(isHovered || isTourActive) && (
        <div className="absolute inset-0 rounded-xl bg-white/20 pointer-events-none animate-pulse" />
      )}
      
      {isTourActive && tourStep >= 0 && (
        <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shadow-lg animate-bounce dark:bg-cyan-400 dark:text-slate-900">
          {tourStep + 1}
        </div>
      )}
    </div>
  );
};

export default ItemCard;

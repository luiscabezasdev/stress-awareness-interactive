import React, { useState, useEffect } from 'react';
import { AlertCircle, Activity } from 'lucide-react';
import { dangers, manifestations } from './data/stressData';
import useTour from './hooks/useTour';
import Timer from './components/Timer';
import ItemCard from './components/ItemCard';
import TourControls from './components/TourControls';
import ProgressBar from './components/ProgressBar';
import ZoomModal from './components/ZoomModal';
import CompletionModal from './components/CompletionModal';

const App = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [zoomedItem, setZoomedItem] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const allItems = [
    ...dangers.map(d => ({ ...d, category: 'danger' })),
    ...manifestations.map(m => ({ ...m, category: 'manifestation' }))
  ];

  const {
    tourStep,
    isPlaying,
    timeLeft,
    showCompletionModal,
    setShowCompletionModal,
    startTour,
    stopTour,
    nextStep,
    prevStep,
    togglePlay
  } = useTour(allItems);

  const handleStartTour = () => {
    setSelectedColumn(null);
    setZoomedItem(null);
    startTour();
  };

  const handleStopTour = () => {
    stopTour();
    setSelectedColumn(null);
  };

  const handleZoom = (item, column) => {
    setZoomedItem({ item, column });
  };

  const closeZoom = () => {
    setZoomedItem(null);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleSelectColumn = (column) => {
    if (selectedColumn === column) {
      setSelectedColumn(null);
    } else {
      setSelectedColumn(column);
    }
  };

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const renderItemCard = (item, column) => {
    const currentItem = allItems[tourStep];
    const isTourActive = tourStep >= 0 && currentItem && currentItem.id === item.id;
    const isHovered = hoveredItem === `${column}-${item.id}`;
    const isColumnSelected = selectedColumn === column;
    const shouldHighlight = !selectedColumn || isColumnSelected;

    return (
      <ItemCard
        key={item.id}
        item={item}
        column={column}
        isHovered={isHovered}
        isTourActive={isTourActive}
        shouldHighlight={shouldHighlight}
        tourStep={tourStep}
        onMouseEnter={() => setHoveredItem(`${column}-${item.id}`)}
        onMouseLeave={() => setHoveredItem(null)}
        onClick={() => handleZoom(item, column)}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-8 transition-colors duration-500 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      {/* Timer */}
      {tourStep >= 0 && (
        <Timer
          timeLeft={timeLeft}
          isPlaying={isPlaying}
          onPrevStep={prevStep}
          onNextStep={nextStep}
          onTogglePlay={togglePlay}
          onToggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
          canPrev={tourStep > 0}
          canNext={tourStep < allItems.length - 1}
        />
      )}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn flex flex-col items-center gap-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-purple-300 dark:to-pink-300 max-w-4xl">
            Dangers and Manifestations of Stress
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl dark:text-gray-300">
            Explore the serious health impacts and common signs of stress. Start the tour or click any card to learn more.
          </p>
          <button
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-2 text-sm font-semibold text-slate-700 shadow-md transition-all duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
          >
            {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        {/* Tour Controls */}
        <TourControls
          tourStep={tourStep}
          isPlaying={isPlaying}
          allItemsLength={allItems.length}
          selectedColumn={selectedColumn}
          onStartTour={handleStartTour}
          onStopTour={handleStopTour}
          onPrevStep={prevStep}
          onNextStep={nextStep}
          onTogglePlay={togglePlay}
          onSelectColumn={handleSelectColumn}
        />

        {/* Progress Bar */}
        {tourStep >= 0 && (
          <ProgressBar tourStep={tourStep} totalSteps={allItems.length} />
        )}

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Dangers Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg shadow-red-200/60 dark:shadow-red-900/60">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Dangers of Stress</h2>
            </div>
            <div className="space-y-4">
              {dangers.map((danger) => renderItemCard(danger, 'dangers'))}
            </div>
          </div>

          {/* Manifestations Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-200/60 dark:shadow-purple-900/60">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Manifestations of Stress</h2>
            </div>
            <div className="space-y-4">
              {manifestations.map((manifestation) => renderItemCard(manifestation, 'manifestations'))}
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg dark:bg-slate-800/80 dark:border dark:border-slate-700">
            <p className="text-gray-600 text-sm dark:text-gray-200">
              💡 <span className="font-semibold">Tips:</span> Start the tour to see explanations expand in each card • Click any card anytime for detailed zoom • Hover to highlight
            </p>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ZoomModal zoomedItem={zoomedItem} onClose={closeZoom} />
      <CompletionModal
        show={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        onRestart={handleStartTour}
      />
    </div>
  );
};

export default App;

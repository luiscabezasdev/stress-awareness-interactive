import { useState, useEffect } from 'react';
import { scrollToElement, generateItemId } from '../utils/scrollToElement';

const useTour = (allItems) => {
  const [tourStep, setTourStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(6);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  const startTour = () => {
    setTourStep(0);
    setIsPlaying(true);
    setTimeLeft(6);
    setShowCompletionModal(false);
  };

  const stopTour = () => {
    setTourStep(-1);
    setIsPlaying(false);
    setTimeLeft(6);
  };

  const nextStep = () => {
    if (tourStep < allItems.length - 1) {
      setTourStep(tourStep + 1);
      setTimeLeft(6);
    } else {
      setShowCompletionModal(true);
      stopTour();
    }
  };

  const prevStep = () => {
    if (tourStep > 0) {
      setTourStep(tourStep - 1);
      setTimeLeft(6);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-advance timer
  useEffect(() => {
    if (isPlaying && tourStep >= 0 && tourStep < allItems.length) {
      const timer = setTimeout(() => {
        if (tourStep < allItems.length - 1) {
          setTourStep(tourStep + 1);
          setTimeLeft(6);
        } else {
          setShowCompletionModal(true);
          stopTour();
        }
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [tourStep, isPlaying, allItems.length]);

  // Countdown timer
  useEffect(() => {
    if (isPlaying && tourStep >= 0 && timeLeft > 0) {
      const countdown = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 0.1) return 0;
          return prev - 0.1;
        });
      }, 100);
      return () => clearInterval(countdown);
    }
  }, [isPlaying, tourStep, timeLeft]);

  // Auto-scroll to element
  useEffect(() => {
    if (tourStep >= 0 && allItems[tourStep]) {
      const { category, id } = allItems[tourStep];
      const elementId = generateItemId(category, id);
      scrollToElement(elementId);
    }
  }, [tourStep, allItems]);

  return {
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
  };
};

export default useTour;

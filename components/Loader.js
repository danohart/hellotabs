import React, { useState, useEffect } from "react";
import Meta from "./Meta";
import Header from "./Header";

export default function Loader({
  loadingSteps = [
    { step: "Connecting...", duration: 800 },
    { step: "Loading data...", duration: 1200 },
    { step: "Processing results...", duration: 600 },
    { step: "Almost ready...", duration: 400 },
  ],
  showSkeleton = true,
  partialContent = null,
  day,
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const totalDuration = loadingSteps.reduce(
      (sum, step) => sum + step.duration,
      0
    );
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += 50;
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(newProgress);

      // Update current step based on elapsed time
      let stepTime = 0;
      let newCurrentStep = 0;
      for (let i = 0; i < loadingSteps.length; i++) {
        stepTime += loadingSteps[i].duration;
        if (elapsed < stepTime) {
          newCurrentStep = i;
          break;
        }
        newCurrentStep = i + 1;
      }
      setCurrentStep(Math.min(newCurrentStep, loadingSteps.length - 1));

      if (elapsed >= totalDuration) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [loadingSteps]);

  const SkeletonCard = ({ delay = 0 }) => (
    <div
      className={`bg-white rounded-lg shadow-md p-6 mb-4 animate-pulse dark:bg-slate-600 w-3/4 mx-auto`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className='flex items-center space-x-4 mb-4'>
        <div className='w-12 h-12 bg-gray-200 dark:bg-gray-400 rounded-full'></div>
        <div className='flex-1'>
          <div className='h-4 bg-gray-200 dark:bg-gray-400 rounded w-3/4 mb-2'></div>
          <div className='h-3 bg-gray-200 dark:bg-gray-400 rounded w-1/2'></div>
        </div>
      </div>
      <div className='space-y-3'>
        <div className='h-3 bg-gray-200 dark:bg-gray-400 rounded'></div>
        <div className='h-3 bg-gray-200 dark:bg-gray-400 rounded w-5/6'></div>
        <div className='h-3 bg-gray-200 dark:bg-gray-400 rounded w-4/6'></div>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <div className='h-3 bg-gray-200 dark:bg-gray-400 rounded w-1/4'></div>
        <div className='h-8 bg-gray-200 dark:bg-gray-400 rounded w-20'></div>
      </div>
    </div>
  );

  const PartialContentCard = ({ content, isLoading = false }) => (
    <div className='bg-white rounded-lg shadow-md p-6 mb-4 transition-all duration-500'>
      <div className='flex items-center space-x-4 mb-4'>
        <div
          className={`w-12 h-12 rounded-full ${
            isLoading
              ? "bg-gray-200 dark:bg-gray-400 animate-pulse"
              : "bg-purple-500"
          }`}
        >
          {!isLoading && (
            <div className='w-full h-full flex items-center justify-center text-white font-bold'>
              ✓
            </div>
          )}
        </div>
        <div className='flex-1'>
          <div
            className={`h-4 rounded mb-2 ${
              isLoading
                ? "bg-gray-200 dark:bg-gray-400 animate-pulse w-3/4"
                : "text-lg font-semibold"
            }`}
          >
            {!isLoading && (content?.title || "Content Loaded")}
          </div>
          <div
            className={`h-3 rounded ${
              isLoading
                ? "bg-gray-200 dark:bg-gray-400 animate-pulse w-1/2"
                : "text-sm text-gray-600"
            }`}
          >
            {!isLoading && (content?.subtitle || "Ready to view")}
          </div>
        </div>
      </div>
      {content?.preview && !isLoading && (
        <div className='text-gray-700 mb-4'>{content.preview}</div>
      )}
      <div
        className={`h-3 rounded ${
          isLoading
            ? "bg-gray-200 dark:bg-gray-400 animate-pulse"
            : "bg-green-200"
        }`}
      >
        {!isLoading && (
          <div className='text-xs text-green-800 p-1'>
            ✓ Loaded successfully
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <Header title={`${day} Specials`} />
      <div className='text-center mb-8'>
        <div className='inline-flex items-center space-x-2 mb-4'>
          <div className='w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin'></div>
          <h1 className='text-3xl font-bold text-gray-800 dark:text-gray-200'>
            {loadingSteps[currentStep]?.step || "Loading..."}
          </h1>
        </div>

        {/* Progress Bar */}
        <div className='w-full max-w-md mx-auto bg-gray-200 dark:bg-gray-400 rounded-full h-2 mb-2'>
          <div
            className='bg-purple-500 h-2 rounded-full transition-all duration-200 ease-out'
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className='text-sm text-gray-600'>
          {Math.round(progress)}% complete
        </div>
      </div>

      {partialContent && (
        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-4 text-gray-800'>
            Content Preview
          </h2>
          <PartialContentCard
            content={partialContent}
            isLoading={currentStep < 2}
          />
        </div>
      )}

      {/* Skeleton Screen */}
      {showSkeleton && (
        <div>
          <div className='space-y-4'>
            <SkeletonCard delay={0} />
            <SkeletonCard delay={200} />
            <SkeletonCard delay={400} />
          </div>
        </div>
      )}
    </>
  );
}

// Example usage with different configurations:
//
// // Basic usage (replaces your current Loader)
// <EnhancedLoader pageInfo={pageInfo} />
//
// // With custom loading steps
// <EnhancedLoader
//   pageInfo={pageInfo}
//   loadingSteps={[
//     { step: 'Fetching restaurant data...', duration: 1000 },
//     { step: 'Loading specials...', duration: 800 },
//     { step: 'Finalizing...', duration: 400 }
//   ]}
// />
//
// // With partial content preview
// <EnhancedLoader
//   pageInfo={pageInfo}
//   partialContent={{
//     title: "Restaurant Found!",
//     subtitle: "Loading full details...",
//     preview: "Found 12 daily specials"
//   }}
// />
//
// // Skeleton only (no partial content)
// <EnhancedLoader
//   pageInfo={pageInfo}
//   showSkeleton={true}
//   partialContent={null}
// />

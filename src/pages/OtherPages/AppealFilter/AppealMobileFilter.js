import { cleanup } from '@testing-library/react';
import React, { useState } from 'react';
import { useEffect } from 'react';

export const AppealMobileFilter = ({
  selectedCategory,
  selectedOption,
  setFilterState,
  options,
  categories,
}) => {
  const [state, setState] = useState({
    categoryName: selectedCategory,
    appealTag: selectedOption,
  });

  const handleApplyChanges = ({ appealTag = null, categoryName = null }) => {
    setFilterState({
      ...state,
      selectedOption: appealTag || state.appealTag,
      selectedCategory: categoryName || state.categoryName,
    });
  };

  

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    }
  }, []);

  return (
    <div className='overflow-auto h-100vh pb-32'>
      <div className="w-full h-auto flex justify-between lg:py-8 py-2 p-4 lg:p-0 my-8">
        <div className="w-1/2 h-auto flex flex-col gap-4">
          {options.map(option => (
            <p
              className="text-sm text-mont text-black-50 font-medium flex gap-2 items-center"
              href=""
            >
              <input
                type="radio"
                id={option}
                name="appeal_tag"
                value={option}
                classname="w-5 h-5 mr-2"
                checked={state.appealTag === option}
                onChange={() => setState({ ...state, appealTag: option })}
              />{' '}
              {option}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full h-auto flex flex-col gap-4 pt-2 lg:pb-12 py-2 p-4 lg:p-0 overflow-y-auto">
        {categories.map(category => (
          <button
            key={category}
            className={`text-black-50 ${
              state.categoryName === category ? 'border-sblue border-2' : ''
            } bg-white text-base font-bold px-6 h-16 flex items-center rounded-2xl text-mont`}
            onClick={() => setState({ ...state, categoryName: category })}
          >
            {category !== 'All' && (
              <img
                className="mr-3"
                src={`./Icons/icon_${category
                  .toLowerCase()
                  .replace(/ /g, '_')}.svg`}
                alt={`icon_${category.toLowerCase().replace(/ /g, '_')}`}
              />
            )}
            {category}
          </button>
        ))}
        <button
          className="w-full mt-4 h-auto py-3 text-center text-mont text-xs text-dgray font-bold bg-white border-2 border-platinum rounded-lg"
          onClick={() =>
            handleApplyChanges({
              appealTag: options[0],
              categoryName: categories[0],
            })
          }
        >
          RESET FILTERS
        </button>
      </div>
      <button
        className="lg:relative fixed py-4 lg:w-1/4 w-full bottom-0 left-0 bg-green text-white font-bold text-sm lg:rounded-lg uppercase mt-8 z-20"
        onClick={handleApplyChanges}
      >
        Apply
      </button>
    </div>
  );
};

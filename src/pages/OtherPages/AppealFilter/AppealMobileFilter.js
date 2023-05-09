import React, { useState } from 'react';

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

  return (
    <>
      <div className="w-full h-auto flex justify-between lg:py-8 py-2 p-4 lg:p-0 mt-6">
        <div className="w-1/2 h-auto flex flex-col gap-3">
          {options.map(option => (
            <p
              className="text-sm text-mont text-black-50 font-medium flex items-center"
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
      <div className="w-full h-auto flex flex-col gap-4 pt-2 lg:pb-12 py-2 p-4 lg:p-0 overflow-y-scroll">
        {categories.map(category => (
          <button
            key={category}
            className={`text-black-50 shadow-lg ${
              state.categoryName === category ? 'bg-sblue text-white' : ''
            } owhite border text-base font-bold px-6 h-16 flex items-center rounded-md text-mont`}
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
          className="w-full h-auto py-3 text-center text-mont text-xs text-gray font-bold bg-white border-2 border-lgray rounded-md"
          onClick={() =>
            handleApplyChanges({
              appealTag: options[0],
              categoryName: categories[0],
            })
          }
        >
          Reset
        </button>
      </div>
      <button
        className="lg:relative fixed py-4 lg:w-1/4 w-full bottom-0 left-0 bg-green text-black font-bold text-sm lg:rounded-lg uppercase mt-8 z-20"
        onClick={handleApplyChanges}
      >
        Apply Changes
      </button>
    </>
  );
};
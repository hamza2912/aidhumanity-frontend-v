import React from 'react';
import AppealTagRadio from './AppealFilter/AppealTags';
import CategorySelector from './AppealFilter/CategorySelector';

const AppealFilter = ({
  options,
  categories,
  selectedCategory,
  selectedOption,
  handleFilterChange,
}) => {
  return (
    <section className="w-full h-auto container mx-auto px-4 lg:px-0 lg:mt-40 mt-4">
      <div className="w-full h-auto lg:flex hidden gap-2 text-base text-mont text-99 font-normal">
        <a href="">
          Home
        </a>
        <p>/</p>
        <p>Appeals</p>
      </div>
      <div className="w-full h-auto flex justify-between lg:py-8 py-2 p-4 lg:p-0 mt-6">
        <div className="lg:w-1/2 w-full h-auto">
          <h1 className="hidden sm:flex text-black-50 lg:text-start lg:text-4xl text-3xl text-mont font-bold">
            Appeals
          </h1>
        </div>
        <AppealTagRadio
          options={options}
          selectedOption={selectedOption}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        handleFilterChange={handleFilterChange}
      />
    </section>
  );
};

export default AppealFilter;

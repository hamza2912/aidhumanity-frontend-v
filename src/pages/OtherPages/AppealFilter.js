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
    <section className="w-full h-auto container mx-auto px-5 lg:mt-12 mt-4">
      <div className="w-full h-auto lg:flex hidden gap-2">
        <a className="text-base text-mont text-gray" href="">
          Home
        </a>
        <p className="text-base text-mont text-gray">/</p>
        <p className="text-base text-mont text-gray">Appeals</p>
      </div>
      <div className="w-full h-auto flex justify-between lg:py-8 py-2 p-4 lg:p-0 mt-6">
        <div className="lg:w-1/2 w-full h-auto">
          <h1 className="text-black-50 lg:text-start lg:text-4xl text-3xl text-mont font-bold">
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

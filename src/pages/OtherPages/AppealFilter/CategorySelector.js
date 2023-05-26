const CategorySelector = ({
  categories,
  selectedCategory,
  handleFilterChange,
}) => {
  const handleCategoryChange = category => {
    handleFilterChange('category_name', category);
  };

  return (
    <div className="w-full h-auto hidden lg:flex gap-4 items-center border-b border-platinum pt-2 lg:pb-12 py-2  p-4 lg:p-0">
      {categories.map(category => (
        <button
          key={category}
          className={`text-black-50 text-base font-bold px-6 h-16 flex items-center rounded-xl text-mont ${
            selectedCategory === category ? 'bg-white border-sblue border-2' : 'bg-owhite border border-platinum'
          }`}
          onClick={() => handleCategoryChange(category)}
        >
          {category !== categories[0] && (
            <img
              className="mr-3"
              src={`./Icons/icon_${category
                .toLowerCase()
                .replace(/ /g, '_')}.svg`}
              alt={`icon_${category.toLowerCase().replace(/ /g, '_')}`}
            />
          )}{' '}
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;

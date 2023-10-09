import { Link } from 'react-router-dom';

export const CategoryList = ({ categories, active }) => {
  const columnLimit = 6;

  const generateSections = categoriesArray => {
    let currentCount = 0;
    let section = [];
    const allSections = [];

    categoriesArray.forEach(category => {
      const length = category.appeals?.length + 1; // +1 for the category itself

      if (currentCount + length <= columnLimit) {
        section.push(category);
        currentCount += length;
      } else {
        allSections.push(section);
        section = [category];
        currentCount = length;
      }
    });

    if (section.length > 0) allSections.push(section);

    return allSections;
  };

  const renderCategories = categoriesArray => {
    return categoriesArray.map((category, i) => (
      <div key={i} className="w-full h-auto flex justify-between px-4">
        <div className="h-auto">
          <img
            className="flex"
            src={category.icon || '/Icons/icon_build_a_mosque.svg'}
            alt="category_icon"
          />
        </div>
        <div className="w-full h-auto ml-4 flex flex-col">
          <Link
            className="text-nblue text-mont text-lg font-bold mb-2 cursor-default"
            to=""
          >
            {category.name}
          </Link>
          {category?.appeals?.slice(0, columnLimit - 1).map(appeal => (
            <Link to={`/appeal/${appeal.id}`} key={appeal.id} className="mt-1">
              <Link
                className="text-base text-dgray tet-mont font-medium mt-2 hover:underline cursor-pointer"
                to={`/appeal/${appeal.id}`}
              >
                {appeal.title}
              </Link>
            </Link>
          ))}
        </div>
      </div>
    ));
  };

  const sections = generateSections(categories[active]);

  return (
    <div className="flex space-x-4">
      {sections.map((sect, idx) => (
        <div
          className={`w-full h-auto flex justify-between ${
            idx < sections.length - 1 ? 'border-r-2 border-gray-100' : ''
          }`}
          key={idx}
        >
          <div className="flex flex-col gap-6">{renderCategories(sect)}</div>
        </div>
      ))}
    </div>
  );
};

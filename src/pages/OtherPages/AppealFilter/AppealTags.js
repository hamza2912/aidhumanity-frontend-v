const AppealTagRadio = ({ options, selectedOption, handleFilterChange }) => {
  const handleChange = option => {
    handleFilterChange('appeal_tag', option);
  };

  return (
    <div className="w-1/2 h-auto hidden lg:flex justify-between">
      {options.map(option => (
        <p
          key={option}
          className="text-sm text-mont text-black-50 font-medium flex items-center"
        >
          <input
            type="radio"
            id={option}
            name="option"
            value={option}
            checked={selectedOption === option}
            onChange={() => handleChange(option)}
            className="w-5 h-5 mr-2 cursor-pointer"
          />
          {option}
        </p>
      ))}
    </div>
  );
};

export default AppealTagRadio;

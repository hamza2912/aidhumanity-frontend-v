import React, { useCallback, useMemo } from 'react';

const ValidationText = ({ validationResults }) => {
  const showValidationMessage = name => {
    if (!validationResults.hasOwnProperty(name)) {
      return 'neutral';
    } else {
      return validationResults[name];
    }
  };

  const validationMessage = name => {
    const showValidationMessageResult = showValidationMessage(name);
    if (showValidationMessageResult === 'neutral') {
      return (
        <div className="w-5 h-5 mt-1 rounded-full border-2 border-gray-400"></div>
      );
    } else if (showValidationMessageResult) {
      return <img src="Icons/icon_check-circle.svg" alt="" />;
    } else {
      return <img src="Icons/icon_info-circle.svg" alt="" />;
    }
  };

  const validations = {
    length: 'Must be at least 12 characters',
    pattern:
      'Must include at least one number, a lower or upper case letter and a special character (#,$,%,&,@etc.)',
    history: 'Must not be the same as the last 6 used passwords',
    emailOrName: 'Must not include your email or name',
  };

  return (
    <div className="flex flex-col gap-8 mt-5">
      {Object.keys(validations).map((key, index) => (
        <div className="flex" key={index}>
          {validationMessage(key)}{' '}
          <label
            className={`font-medium ${
              showValidationMessage(key) === 'neutral'
                ? 'text-inherit'
                : showValidationMessage(key)
                ? 'text-green'
                : 'text-red-500'
            }`}
            for="html"
          >
            {validations[key]}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ValidationText;

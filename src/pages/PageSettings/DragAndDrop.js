import React from 'react';

export const DragAndDrop = ({
  handleImagesChange,
  fileNames,
  setFileNames,
}) => {
  const fileInputRef = React.useRef();

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDrop = e => {
    e.preventDefault();
    handleImagesChange(e.dataTransfer.files);
    setFileNames(Array.from(e.dataTransfer.files).map(file => file.name));
  };

  const handleFileInputChange = e => {
    handleImagesChange(e.target.files);
    setFileNames(Array.from(e.target.files).map(file => file.name));
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div
        className="w-full h-36 rounded-xl border border-dashed border-gray-400 bg-gray flex flex-col items-center py-10 mt-6"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="flex gap-2">
          <img
            className="w-full z-20"
            src="images/icons/dashboard/icon_cloud-upload.svg"
            alt=""
          />
          <p
            className="text-sm text-blue font-bold cursor-pointer"
            onClick={handleBrowseClick}
          >
            BROWSE
          </p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
          multiple
        />
        <p className="text-sm font-bold">Drag & Drop files here</p>
        <p className="text-xs text-gray-400 w-1/2 text-center">
          * Supported image formats: jpg, jpeg, png, max. filesize 2 MB
        </p>
      </div>
      <div className="flex flex-wrap">
        {fileNames.length > 0 &&
          fileNames.map((fileName, index) => (
            <div
              key={index}
              className="bg-gray-100 border border-gray-200 text-gray-700 px-2 py-2 mt-4 rounded shadow-sm text-sm mr-4 group"
            >
              {fileName}
            </div>
          ))}
      </div>
    </>
  );
};

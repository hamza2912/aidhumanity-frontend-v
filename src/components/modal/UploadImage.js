import { useState } from 'react';
import userService from '../../services/user';
import './modal.css';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/auth/userSlice';

const UploadImage = ({ setshowModal }) => {
  const [selectedFile, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();

  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

  const handleDrop = e => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('user[avatar]', selectedFile);
      const user = await userService.setUserImage(formData);
      dispatch(addUser(user));
      toast.success('Profile updated successfully');
      setshowModal(false);
    } catch (error) {
      console.error(error);
      toast.error('Unable to upload the Photo');
    }
  };

  return (
    <div>
      <div className="dimmer"></div>
      <div className="messageBox lg:w-1/2 w-4/5 bg-white rounded-xl w-full z-50">
        <div className="p-4 flex justify-between items-center border-b-2">
          <h2 className="text-lg text-black-50 font-bold">
            Upload a new image
          </h2>
          <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex justify-center items-center">
            <i
              onClick={() => setshowModal(false)}
              className="fas fa-close text-xs text-gray-300 cursor-pointer"
            ></i>
          </div>
        </div>
        <div className="pt-4 pb-6 px-4">
          <p className="text-gray-600">
            Please select an image by clicking on the icon below.
          </p>
          <div
            className="w-full h-36 rounded-xl border border-dashed border-lgray bg-gray flex flex-col items-center py-10 mt-4"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="flex gap-2 cursor-pointer">
              <label for="file-upload">
                <input
                  id="file-upload"
                  type="file"
                  accept="image/jpeg,image/png"
                  className="cursor-pointer"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <img
                  className="w-full z-20 cursor-pointer"
                  src="images/icons/dashboard/icon_cloud-upload.svg"
                  alt=""
                />
              </label>
              <p className="text-sm text-blue font-bold">BROWSE</p>
            </div>
            <p className="text-sm font-bold mt-1">Drag & Drop files here</p>
            <p className="text-[0.63rem] text-lblack w-1/2 text-center">
              * Supported image formats: jpg, jpeg, png, max. filesize 2 MB
            </p>
          </div>
          {selectedFile && (
            <p className="mt-4">
              Selected file: <strong>{selectedFile.name}</strong>
            </p>
          )}
          <button
            className="py-4 w-1/3 bg-green hover:bg-dgreen text-black hover:text-white font-bold text-xs rounded-lg uppercase mt-5"
            disabled={uploading || !selectedFile}
            onClick={handleUpload}
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;

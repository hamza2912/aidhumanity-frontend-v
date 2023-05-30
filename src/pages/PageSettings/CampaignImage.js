import { SERVER_URL } from '../../services/config';

export const Image = ({ image, setCoverImage, handleDelete, index }) => (
  <div className="w-full bg-gray-dark h-64 shadow-lg flex justify-center items-center relative rounded-2xl hover:bg-gray-light transition-colors duration-200 rounded-2xl">
    <img
      className="w-full h-full rounded-2xl	hover:bg-gray-light transition-colors duration-200"
      src={SERVER_URL + image.url}
      alt=""
    />
    <button
      onClick={() => setCoverImage(image)}
      className="w-1/2 bg-green text-black font-bold text-sm rounded-lg uppercase absolute top-0 bottom-0 my-auto h-12 opacity-0 hover:opacity-100 transition-opacity duration-200 px-5"
    >
      Set as Cover
    </button>
    <button
      onClick={() => {
        handleDelete(index, image);
      }}
      className="absolute top-2 right-2 w-6 h-6 bg-red-600 rounded-full text-white flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
    >
      X
    </button>
  </div>
);

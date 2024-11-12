import React from 'react';

const WebCard = ({ image, title, description, pdfLink }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 transition transform hover:shadow-2xl hover:scale-105 w-[80%] ">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4 flex flex-col items-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2 text-center">{description}</p>
        <div className="mt-4">
          <a
            href={pdfLink}
            download
            className="bg-custom-gradient3 text-white py-2 px-4 rounded-3xl hover:bg-blue-600 inline-flex items-center justify-center"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebCard;

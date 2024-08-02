/* eslint-disable react/prop-types */

const TabContent = ({ title, content, image }) => {
  return (
    <div className="p-6 py-24">
      <div className="flex flex-col md:flex-row items-center md:items-start bg-custum-gray">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-2 w-full md:w-1/2 flex justify-center">
          {image ? (
            <img
              src={image}
              alt="Tab Content"
              className="w-32 h-32 md:w-60 md:h-48 object-cover rounded-full pb-5"
            />
          ) : (
            <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-100 rounded-full flex items-center justify-center">
              <span>No Image</span>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 text-lg">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default TabContent;

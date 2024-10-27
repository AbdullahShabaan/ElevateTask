import PropTypes from "prop-types";
import MenuSkeleton from "../skeletons/MenuSkeleton";
import { memo } from "react";

const TopMenu = memo(
  ({
    categories,
    categoriesLoading,
    categoriesIsError,
    categoriesErrorMessage,
    setCurrentCategory,
    currentCategory,
  }) => {
    const changeCategory = (cat) => {
      setCurrentCategory(cat);
    };

    return (
      <div className="flex flex-wrap items-center overflow-x-auto overflow-y-hidden py-10 justify-center bg-white text-gray-800">
        {categoriesLoading ? (
          <MenuSkeleton />
        ) : (
          categories?.map((cat, index) => (
            <button
              onClick={() => changeCategory(cat)}
              key={index}
              className={`${
                currentCategory === cat
                  ? "text-blue-500 border-b-2 font-semibold"
                  : "text-gray-600"
              } flex items-center flex-shrink-0 px-5 py-3 hover:text-blue-600 cursor-pointer`}
            >
              <span className="capitalize">{cat}</span>
            </button>
          ))
        )}
        {categoriesIsError && (
          <p className="text-red-400">
            Server Error:{" "}
            {categoriesErrorMessage.message || categoriesErrorMessage}
          </p>
        )}
      </div>
    );
  }
);

// Set the display name for the component
TopMenu.displayName = "TopMenu";

TopMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  categoriesErrorMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  currentCategory: PropTypes.string.isRequired,
  categoriesIsError: PropTypes.bool.isRequired,
  categoriesLoading: PropTypes.bool.isRequired,
  setCurrentCategory: PropTypes.func.isRequired,
};

export default TopMenu;

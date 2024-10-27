import PropTypes from "prop-types";

const HeaderTitle = ({ title }) => {
  return (
    <div className="pt-32 bg-white">
      <h1
        className="text-center text-3xl font-extrabold text-gray-800"
        aria-label={title}
      >
        {title}
      </h1>
    </div>
  );
};

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderTitle;

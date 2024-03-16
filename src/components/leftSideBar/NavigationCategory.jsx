import PropTypes from "prop-types";

const NavigationCategory = ({ label, icon, isActive }) => {
  const hoverColor = "lightgray";
  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = hoverColor;
  };
  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = "";
  };

  console.log(label, isActive);

  const activeClass = isActive ? hoverColor : "";
  return (
    <div
      className={`category d-flex justify-content-start align-items-center border p-2 my-1 rounded`}
      style={{ backgroundColor: activeClass, activeClass, cursor: "pointer" }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="indicator"></div>
      <div className="icon ms-2">{icon}</div>
      <div className="label ms-3">{label}</div>
    </div>
  );
};

NavigationCategory.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  isActive: PropTypes.bool,
};
export default NavigationCategory;

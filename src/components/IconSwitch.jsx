import React from "react";
import propTypes from "prop-types";

function IconSwitch(props) {
  const { icon, onSwitch } = props;
  console.log(icon);
  return (
    <div>
      <button icon={icon} onClick={onSwitch} className="material-icons">
        {icon}
      </button>
    </div>
  );
}

IconSwitch.propTypes = {
  onSwitch: propTypes.func,
  icon: propTypes.string,
};

export default IconSwitch;

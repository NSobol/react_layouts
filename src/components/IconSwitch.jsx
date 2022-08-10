import React from "react";
import propTypes from "prop-types";

function IconSwitch(props) {
  const { icon, onSwitch } = props;
  return (
    <div>
      <button icon={icon} onClick={onSwitch} className="material-icons btn">
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

import React from "react";

function IconSwitch(props) {
	const { icon, onSwitch } = props;
	console.log(icon);
  return (
    <div>
      <button onClick={onSwitch} className="material-icons">
        {icon}
      </button>
    </div>
  );
}

export default IconSwitch;

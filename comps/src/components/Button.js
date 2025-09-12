import PropTypes from "prop-types";
import className from "classnames";
import { twMerge } from 'tailwind-merge';

function Button({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  info,
  outline,
  rounded,
  ...rest
}) {

  const classes = twMerge(
    className(
      rest.className,
    "px-3 py-1.5 border flex items-center cursor-pointer",
      {
        "border-blue-600 bg-blue-500 text-white": primary,
        "border-gray-900 bg-gray-900 text-white": secondary,
        "border-green-600 bg-green-500 text-white": success,
        "border-red-600 bg-red-500 text-white": danger,
        "border-yellow-400 bg-yellow-300 text-white": warning,
        "border-teal-400 bg-teal-300 text-white": info,
        // "text-white": !outline,
        "rounded-full": rounded,
        "bg-white": outline,
        "text-blue-500": outline && primary,
        "text-gray-900": outline && secondary,
        "text-green-600": outline && success,
        "text-red-600": outline && danger,
        "text-yellow-400": outline && warning,
        "text-teal-400": outline && info
      }
    ),
  );

  return (
    <button {...rest} className={classes}>
        {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ( { primary, secondary, success, warning, danger, info}) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) +
                  Number(!!warning) + Number(!!danger) + Number(!!info);
    if (count > 1) {
      return new Error("Only one of primary, secondary, success, warning, danger, or info can be true.");
    }
  },
  children: PropTypes.node
}

export default Button;
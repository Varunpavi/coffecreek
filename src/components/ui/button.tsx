import React from "react";

interface ButtonProps {
  className?: string;
  variant?: "normal" | "outline" | "custom";
  size?: "big" | "medium" | "small";
  active?: boolean;
  loading?: boolean;
  disabled?: boolean;
  label?: string;
  type?: "button" | "submit" | "reset";
}
const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'normal',
  size = 'medium',
  active,
  loading,
  disabled,
  type = "button",
  label = "click me",
}) => {

  const baseStyles = `mx-auto mt-[10px] p-3 my-5 text-white focus:outline-none focus:ring-2 focus:ring-[secondary] hover:transition-all transition-colors duration-200 ease-in-out delay-150 ${className || ''} ${size} ${active ? 'active' : ''}`;

  const normalStyles = `my-2 w-52 bg-primary hover:bg-secondary shadow-lg text-white p-2 rounded-full ${baseStyles}`;

  const outlineStyles = `my-2 w-52 ring ring-primary ring-offset-0 hover:bg-secondary shadow-lg text-primary p-2 rounded-full`;

  const buttonClassName = variant === "outline" ? outlineStyles : normalStyles;

  return (
    <div>
      <button type={type} className={buttonClassName} disabled={disabled}>
        {loading ? 'Loading...' : label}
      </button>
    </div>
  );
};

export default Button;

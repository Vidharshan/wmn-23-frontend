import React from "react";

const variantClasses = {
  h1: "font-normal text-3xl sm:text-[26px] md:text-[28px]",
  h2: "font-normal text-xl",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

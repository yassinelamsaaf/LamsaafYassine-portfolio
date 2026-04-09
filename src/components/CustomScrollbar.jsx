import "./CustomScrollbar.css";

export const CustomScrollbar = ({ children, className = "" }) => {
  return (
    <div className={`custom-scrollbar ${className}`}>
      {children}
    </div>
  );
};

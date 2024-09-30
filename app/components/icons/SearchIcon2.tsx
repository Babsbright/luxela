const SearchIcon2 = (props: React.SVGProps<SVGSVGElement>) => {
  //   const { style, ...restOfProps } = props;
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="6.60156"
        cy="6.60156"
        r="6"
        stroke="white"
        strokeWidth="1.2"
      />
      <path
        d="M11 11L15.2426 15.2426"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SearchIcon2;

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  //   const { style, ...restOfProps } = props;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.6641 11.6641L13.7474 13.7474"
        stroke="#F2F2F2"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path
        d="M13.6931 15.4324C13.2117 14.951 13.2117 14.1706 13.6931 13.6892C14.1745 13.2078 14.955 13.2078 15.4363 13.6892L17.971 16.2238C18.4524 16.7052 18.4524 17.4857 17.971 17.9671C17.4896 18.4485 16.7091 18.4485 16.2277 17.9671L13.6931 15.4324Z"
        stroke="#F2F2F2"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M13.3307 7.4974C13.3307 4.27573 10.7191 1.66406 7.4974 1.66406C4.27573 1.66406 1.66406 4.27573 1.66406 7.4974C1.66406 10.7191 4.27573 13.3307 7.4974 13.3307C10.7191 13.3307 13.3307 10.7191 13.3307 7.4974Z"
        stroke="#F2F2F2"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SearchIcon;

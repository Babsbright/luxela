const SalesIcon = (props: React.SVGProps<SVGSVGElement>) => {
  //   const { style, ...restOfProps } = props;
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 21.6406H10C6.70017 21.6406 5.05025 21.6406 4.02513 20.6155C3 19.5904 3 17.9405 3 14.6406V3.64062"
        stroke="#ACACAC"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17.7048 9.97396L14.8311 14.6252C14.4123 15.3029 13.9369 16.3266 13.0749 16.175C12.0611 15.9966 11.5742 14.4855 10.7026 13.9852C9.99285 13.5777 9.47971 14.0687 9.06475 14.6406M21 4.64062L19.1465 7.64062M5 20.6406L7.52632 16.9073"
        stroke="#ACACAC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SalesIcon;

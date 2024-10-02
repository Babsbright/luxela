const PendingOrdersIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M12 8.64062V12.6406L13.5 14.1406"
        stroke="#ACACAC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5454 17.094C21.1818 17.9777 22 18.4195 22 19.1406C22 19.8617 21.1818 20.3036 19.5454 21.1872L18.4311 21.789C17.1744 22.4676 16.5461 22.807 16.2439 22.5603C15.504 21.956 16.6567 20.3968 16.9403 19.8444C17.2277 19.2846 17.2225 18.9865 16.9403 18.4369C16.6567 17.8845 15.504 16.3252 16.2439 15.721C16.5461 15.4743 17.1744 15.8136 18.4311 16.4923L19.5454 17.094Z"
        stroke="#ACACAC"
        strokeWidth="1.5"
      />
      <path
        d="M13.0261 22.5886C12.6888 22.623 12.3464 22.6406 12 22.6406C6.47715 22.6406 2 18.1635 2 12.6406C2 7.11778 6.47715 2.64062 12 2.64062C17.5228 2.64062 22 7.11778 22 12.6406C22 13.3256 21.9311 13.9944 21.8 14.6406"
        stroke="#ACACAC"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default PendingOrdersIcon;

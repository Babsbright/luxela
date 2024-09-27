const MobileFilterIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path
        d="M1 4H15"
        stroke="#8451E1"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 8H12"
        stroke="#8451E1"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12H10"
        stroke="#8451E1"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default MobileFilterIcon;

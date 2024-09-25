const HamburgerIcon = (props: React.SVGProps<SVGSVGElement>) => {
  //   const { style, ...restOfProps } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 12L10 12"
        stroke="#FEFEFE"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 5L4 5"
        stroke="#FEFEFE"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 19L4 19"
        stroke="#FEFEFE"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default HamburgerIcon;

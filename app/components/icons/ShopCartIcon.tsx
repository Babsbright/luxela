const ShopCartIcon = (props: React.SVGProps<SVGSVGElement>) => {
//   const { style, ...restOfProps } = props;
  return (
    <svg
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.66667 11.8307H10.8114C13.9901 11.8307 14.4736 9.83383 15.0599 6.92132C15.229 6.08127 15.3136 5.66124 15.1102 5.3814C14.9068 5.10156 14.5171 5.10156 13.7375 5.10156H4.25"
        stroke="#FEFEFE"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M5.66732 11.8307L3.81059 2.98714C3.65292 2.35648 3.08628 1.91406 2.43622 1.91406H1.77148"
        stroke="#FEFEFE"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M6.29 11.8281H5.99857C5.03286 11.8281 4.25 12.6436 4.25 13.6496C4.25 13.8172 4.38048 13.9531 4.54143 13.9531H12.3958"
        stroke="#FEFEFE"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="7.4375"
        cy="15.0156"
        r="1.0625"
        stroke="#FEFEFE"
        strokeWidth="1.2"
      />
      <circle
        cx="12.3965"
        cy="15.0156"
        r="1.0625"
        stroke="#FEFEFE"
        strokeWidth="1.2"
      />
    </svg>
  );
};
export default ShopCartIcon;

const FilterIcon = (props: React.SVGProps<SVGSVGElement>) => {
  //   const { style, ...restOfProps } = props;
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.25 15.75L5.25 13.5"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.75 15.75L12.75 11.25"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.75 4.5L12.75 2.25"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 6.75L5.25 2.25"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 13.5C4.55109 13.5 4.20163 13.5 3.92597 13.3858C3.55843 13.2336 3.26642 12.9416 3.11418 12.574C3 12.2984 3 11.9489 3 11.25C3 10.5511 3 10.2016 3.11418 9.92597C3.26642 9.55843 3.55843 9.26642 3.92597 9.11418C4.20163 9 4.55109 9 5.25 9C5.94891 9 6.29837 9 6.57403 9.11418C6.94157 9.26642 7.23358 9.55843 7.38582 9.92597C7.5 10.2016 7.5 10.5511 7.5 11.25C7.5 11.9489 7.5 12.2984 7.38582 12.574C7.23358 12.9416 6.94157 13.2336 6.57403 13.3858C6.29837 13.5 5.94891 13.5 5.25 13.5Z"
        stroke="white"
        strokeWidth="1.2"
      />
      <path
        d="M12.75 9C12.0511 9 11.7016 9 11.426 8.88582C11.0584 8.73358 10.7664 8.44157 10.6142 8.07403C10.5 7.79837 10.5 7.44891 10.5 6.75C10.5 6.05109 10.5 5.70163 10.6142 5.42597C10.7664 5.05843 11.0584 4.76642 11.426 4.61418C11.7016 4.5 12.0511 4.5 12.75 4.5C13.4489 4.5 13.7984 4.5 14.074 4.61418C14.4416 4.76642 14.7336 5.05843 14.8858 5.42597C15 5.70163 15 6.05109 15 6.75C15 7.44891 15 7.79837 14.8858 8.07403C14.7336 8.44157 14.4416 8.73358 14.074 8.88582C13.7984 9 13.4489 9 12.75 9Z"
        stroke="white"
        strokeWidth="1.2"
      />
    </svg>
  );
};
export default FilterIcon;

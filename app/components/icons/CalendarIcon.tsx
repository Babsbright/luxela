const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M8.25 9.75H12M6 9.75H6.00674M9.75 12.75H6M12 12.75H11.9933"
        stroke="#8451E1"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 1.5V3M4.5 1.5V3"
        stroke="#8451E1"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.875 9.18243C1.875 5.91445 1.875 4.28046 2.81409 3.26523C3.75318 2.25 5.26462 2.25 8.2875 2.25H9.7125C12.7354 2.25 14.2468 2.25 15.1859 3.26523C16.125 4.28046 16.125 5.91445 16.125 9.18243V9.56757C16.125 12.8355 16.125 14.4695 15.1859 15.4848C14.2468 16.5 12.7354 16.5 9.7125 16.5H8.2875C5.26462 16.5 3.75318 16.5 2.81409 15.4848C1.875 14.4695 1.875 12.8355 1.875 9.56757V9.18243Z"
        stroke="#8451E1"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.25 6H15.75"
        stroke="#8451E1"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default CalendarIcon;

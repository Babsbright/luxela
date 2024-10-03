const SettingsIcon = (props: React.SVGProps<SVGSVGElement>) => {
  //   const { style, ...restOfProps } = props;
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.5 10C14.5 11.933 12.933 13.5 11 13.5C9.067 13.5 7.5 11.933 7.5 10C7.5 8.067 9.067 6.5 11 6.5C12.933 6.5 14.5 8.067 14.5 10Z"
        stroke="#ACACAC"
        strokeWidth="1.2"
      />
      <path
        d="M19.7906 7.15201C20.5969 8.54176 21 9.23664 21 10C21 10.7634 20.5969 11.4582 19.7906 12.848L17.8669 16.1638C17.0638 17.548 16.6623 18.2402 16.0019 18.6201C15.3416 19 14.5402 19 12.9373 19L9.06267 19C7.45982 19 6.6584 19 5.99807 18.6201C5.33774 18.2402 4.93619 17.548 4.13311 16.1638L2.20942 12.848C1.40314 11.4582 1 10.7634 1 10C1 9.23664 1.40314 8.54176 2.20942 7.152L4.13311 3.83621C4.93619 2.45196 5.33774 1.75984 5.99807 1.37992C6.6584 1 7.45982 1 9.06267 1L12.9373 1C14.5402 1 15.3416 1 16.0019 1.37992C16.6623 1.75984 17.0638 2.45197 17.8669 3.83622L19.7906 7.15201Z"
        stroke="#ACACAC"
        strokeWidth="1.2"
      />
    </svg>
  );
};
export default SettingsIcon;

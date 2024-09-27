const NotificatIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M2.10697 11.9924C1.92975 13.12 2.72203 13.9026 3.69208 14.2926C7.41104 15.7879 12.5864 15.7879 16.3053 14.2926C17.2754 13.9026 18.0676 13.12 17.8904 11.9924C17.7815 11.2995 17.243 10.7225 16.844 10.1591C16.3214 9.412 16.2695 8.59716 16.2694 7.73024C16.2694 4.37998 13.4619 1.66406 9.9987 1.66406C6.53547 1.66406 3.72797 4.37998 3.72797 7.73024C3.72789 8.59716 3.67597 9.412 3.15337 10.1591C2.7544 10.7225 2.21587 11.2995 2.10697 11.9924Z"
        fill="#F2F2F2"
      />
      <path
        d="M7.5 17.5C8.16345 18.0182 9.03956 18.3333 10 18.3333C10.9604 18.3333 11.8366 18.0182 12.5 17.5"
        stroke="#F2F2F2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default NotificatIcon;

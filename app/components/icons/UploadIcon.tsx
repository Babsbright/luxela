const UploadIcon = (props: React.SVGProps<SVGSVGElement>) => {
  //   const { style, ...restOfProps } = props;
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.3801 40C12.1297 41.828 12 43.6979 12 45.6C12 66.8077 28.1177 84 48 84C67.8823 84 84 66.8077 84 45.6C84 43.6979 83.8703 41.828 83.6199 40"
        stroke="#8451E1"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M48 12L48 52M48 12C45.1991 12 39.9661 19.9772 38 22M48 12C50.8009 12 56.0339 19.9772 58 22"
        stroke="#8451E1"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default UploadIcon;

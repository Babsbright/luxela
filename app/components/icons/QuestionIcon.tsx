const QuestionIcon = (props: React.SVGProps<SVGSVGElement>) => {
  //   const { style, ...restOfProps } = props;
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 2.0625C9.23233 2.0625 7.50436 2.58668 6.0346 3.56874C4.56483 4.55081 3.41929 5.94665 2.74283 7.57977C2.06637 9.21288 1.88938 11.0099 2.23424 12.7436C2.57909 14.4773 3.43031 16.0698 4.68024 17.3198C5.93017 18.5697 7.52268 19.4209 9.25638 19.7658C10.9901 20.1106 12.7871 19.9336 14.4202 19.2572C16.0534 18.5807 17.4492 17.4352 18.4313 15.9654C19.4133 14.4956 19.9375 12.7677 19.9375 11C19.935 8.6304 18.9926 6.35856 17.317 4.683C15.6414 3.00743 13.3696 2.065 11 2.0625ZM11 16.5C10.796 16.5 10.5967 16.4395 10.4271 16.3262C10.2575 16.2129 10.1253 16.0518 10.0473 15.8634C9.9692 15.675 9.94878 15.4676 9.98857 15.2676C10.0284 15.0675 10.1266 14.8838 10.2708 14.7395C10.415 14.5953 10.5988 14.4971 10.7988 14.4573C10.9989 14.4175 11.2062 14.4379 11.3946 14.516C11.5831 14.5941 11.7441 14.7262 11.8575 14.8958C11.9708 15.0654 12.0313 15.2648 12.0313 15.4688C12.0313 15.7423 11.9226 16.0046 11.7292 16.198C11.5358 16.3913 11.2735 16.5 11 16.5ZM11.6875 12.3131V12.375C11.6875 12.5573 11.6151 12.7322 11.4861 12.8611C11.3572 12.9901 11.1823 13.0625 11 13.0625C10.8177 13.0625 10.6428 12.9901 10.5139 12.8611C10.3849 12.7322 10.3125 12.5573 10.3125 12.375V11.6875C10.3125 11.5052 10.3849 11.3303 10.5139 11.2014C10.6428 11.0724 10.8177 11 11 11C12.137 11 13.0625 10.2266 13.0625 9.28125C13.0625 8.33594 12.137 7.5625 11 7.5625C9.86305 7.5625 8.9375 8.33594 8.9375 9.28125V9.625C8.9375 9.80734 8.86507 9.9822 8.73614 10.1111C8.60721 10.2401 8.43234 10.3125 8.25 10.3125C8.06767 10.3125 7.8928 10.2401 7.76387 10.1111C7.63494 9.9822 7.5625 9.80734 7.5625 9.625V9.28125C7.5625 7.57539 9.10422 6.1875 11 6.1875C12.8958 6.1875 14.4375 7.57539 14.4375 9.28125C14.4375 10.7748 13.255 12.0252 11.6875 12.3131Z"
        fill="#895AE0"
      />
    </svg>
  );
};
export default QuestionIcon;

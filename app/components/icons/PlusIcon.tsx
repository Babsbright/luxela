const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => {
  //   const { style, ...restOfProps } = props;
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="21.6667" cy="21.9987" r="21.6667" fill="#2F2F2F" />
      <path
        d="M21.6667 13.332V30.6654M30.3333 21.9987H13"
        stroke="#212121"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default PlusIcon;

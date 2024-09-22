interface HeaderProps {
  heading: string;
}
export default function Header(props: HeaderProps) {
  return (
    <>
        <div className="text-center">
          <h2 className="font-aeonik font-medium text-base">{props.heading} </h2>
          <p className="font-spaceGrotesk max-w-lg mt-2 mx-auto text-gray-400 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
            ratione consequuntur ut laborum inventore sequi assumenda paria
          </p>
        </div>
    </>
  );
}

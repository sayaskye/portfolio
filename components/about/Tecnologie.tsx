interface Props {
  name: string;
  svgname: string;
}

const tecnologie = ({ name, svgname }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-2">
        <img
          className="m-3 h-[80px] w-[80px] md:h-[110px] md:w-[110px] lg:h-[140px] lg:w-[140px]"
          src={`/tecnologies/${svgname}.svg`}
          alt="Technologie"
          loading="lazy"
        />
        <p className="mx-auto dark:text-white text-black font-bold text-base lg:text-xl popovers duration-300 ease-in">
          {name}
        </p>
      </div>
    </>
  );
};

export default tecnologie;

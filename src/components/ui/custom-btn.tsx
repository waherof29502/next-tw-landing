interface ButtonProps {
  title: string;
  fontType: string;
}
export default function CustomBtn({ title, fontType }: ButtonProps) {
  return (
    <button className="flex mx-12 ml-[125px] xs:ml-[150px] md:ml-0 my-[10px] md:my-0 py-[50px] transition-all ">
      <div className="group flex w-[180px] items-center justify-between ">
        <p
          className={`text-primary translate-x-13 ${fontType} text-[16px] tracking-[1.48px] transition-all  group-hover:translate-x-12 ease-linear duration-800`}
        >
          {title}
        </p>
        <div className="relative w-[60px] group-hover:w-5 h-[1.2px] bg-primary transform transition-transform group-hover:ease-linear group-hover:translate-x-2 duration-800" />
        <div className="relative -ml-[50px]  rounded-full border-[1.5px] border-primary border-solid w-8 h-8 ease-linear group-hover:bg-black duration-800" />
        <div className="absolute w-0 group-hover:w-4 h-[1.2px] bg-blue-200 transform transition-transform group-hover:ease-linear group-hover:translate-x-[148px] duration-800 " />
      </div>
    </button>
  );
}

export const SectionH = ({ backgroundClass,titleH, subTitle, from$, spanNum, revert}) => {
    return (
      <section className={`${backgroundClass} bg-cover bg-center h-screen w-full flex flex-col justify-between items-center pb-8`}>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-[56px] font-medium mt-[115px]">{titleH}</h1>
          <h3 className="text-white text-[28px] font-medium leading-[36px] shadow-[0px_2px_0px_-1px_#fff]">
            {subTitle}
          </h3>
          <div className="flex mt-[4px] px-[24px]">
            <p className="text-[17px] font-medium leading-5">{from$}</p>
            <span className="text-[7px] ml-1">{spanNum}</span>
          </div>
        </div>
        <div className="flex flex-row h-10 gap-4 justify-center w-[544px]">
          <button className="bg-[#3e6ae1] text-sm leading-[16.8px] w-52 rounded px-6 py-1 text-center flex-grow">
            Order Now
          </button>
          <button className="bg-white text-black text-sm leading-[16.8px] w-52 rounded px-6 py-1 text-center flex-grow">
            Demo Drive
          </button>
        </div>
      </section>
    );
  };
  
  export default SectionH;
  
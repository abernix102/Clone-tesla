import SectionH from "../components/SectionH"
import svgIcon from "../assets/iconHome.svg"
export const Home = () => {
    return(
        <>
        <SectionH backgroundClass={"bg-custom-bg-home"} titleH={"model 3"} subTitle="1.99% APR Financing Ending August 31" from$={"From $34,990"} spanNum={"1"}/>
        <SectionH backgroundClass={"bg-custom-bg-home2"} titleH={"model y"} subTitle={"1.99% APR Financing Ending August 31" } from$={"From $31,490"} spanNum={"2"}/>
        <SectionH backgroundClass={"bg-custom-bg-home3"} titleH={"model x"} subTitle={"1.99% APR Financing Ending August 31" } from$={"From $31,490"} spanNum={"2"}/>
        <SectionH backgroundClass={"bg-custom-bg-home4"} titleH={"model s"} subTitle={"1.99% APR Financing Ending August 31" } from$={"From $31,490"} spanNum={"2"}/>
        <section className="bg-custom-bg-home5  bg-cover bg-center h-screen w-full flex flex-col justify-between items-center pb-8">
        <div className="w-[450px] h-10 mt-[115px]">
          <img className="w-full" src={svgIcon} alt="" />
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
      <SectionH backgroundClass={"bg-custom-bg-home6"} titleH={"Solar Panels"} subTitle={"Schedule a Virtual Consultation"}/>
      <SectionH backgroundClass={"bg-custom-bg-home7"} titleH={"Solar Roof"} subTitle={"Produce Clean Energy From Your Roof"}/>

        </>
    )
}

export default Home
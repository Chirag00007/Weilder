import styles from "@/app/style";


const stats = [
    {
        id  : 1,
        value : "15",
        title : "Projects"
    },
    {
        id  : 1,
        value : "3",
        title : "Founders"
    },
    {
        id  : 1,
        value : "5",
        title : "Tech"
    },
]

const Page = () => (
   
  <section className={`${styles.flexCenter} xs:flex-row  flex-col flex-wrap  sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-center items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold sm:text-[40.89px] text-[25px] sm:leading-[53.16px] leading-[30.16px] text-white :">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[16px] xs:leading-[26.58px] leading-[20px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Page;

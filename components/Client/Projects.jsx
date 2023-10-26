import styles, { layout } from "@/app/style";
import CarouselCont from "./Carousel";


const Projects = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={`flex-1 flex ${styles.flexCenter} md:mr-10 mr-0  md:mt-0 mt-10 relative md:w-[40vw] w-[90vw]`}>
        <CarouselCont />
    </div>

    <div className={`layout.sectionInfo relative`}>
      <h2 className={`${styles.heading2} md:text-start text-center`}>
        Check our Projects <br className="sm:block hidden " /> for clients
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 md:text-start text-center md:mx-[0.1px] mx-auto`}>
        We have a created a fruitfull websites for our clients which helps them to grow, through over the internet. These websites are created according to client needs. <span className="text-sky-600 cursor-help"> [Slide to See projects.]</span>
      </p>
    </div>
  </section>
);

export default Projects;

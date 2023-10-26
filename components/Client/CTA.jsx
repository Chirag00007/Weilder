import styles from "@/app/style"
import Link from "next/link";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} sm:px-16 px-6 sm:py-12 py-3 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`font-poppins font-semibold sm:text-[48px] text-[27px]  text-white sm:leading-[76.8px] leading-[45.8px] w-full`}>Let’s try our service now!</h2>
      <p className={`font-poppins font-normal text-dimWhite sm:text-[15px] text-[12px] sm:leading-[30.8px] leading-[20px] sm:max-w-[470px] max-w-full sm:mt-5 mt-2`}>
        Everything you just need to drop us email or call us on number in footer or email through form.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-4`}>
    <Link href="/contact" type="button" className={`sm:py-4 py-2 px-6 font-poppins font-medium sm:text-[18px] text-[12px] text-white bg-blue-gradient rounded-[10px] outline-none `}>
    Get Started
  </Link> 
    </div>
  </section>
);

export default CTA;

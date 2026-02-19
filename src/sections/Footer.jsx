import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-between gap-10 pb-16 text-base sm:text-lg text-neutral-500 c-space border-t border-white/5 pt-12 mt-32">
      <div className="flex gap-8 order-2 sm:order-1">
        <p className="hover:text-white transition-colors cursor-pointer font-medium">Terms & Conditions</p>
        <p className="hover:text-white transition-colors cursor-pointer font-medium">Privacy Policy</p>
      </div>
      <div className="flex gap-8 order-1 sm:order-2">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index} className="opacity-40 hover:opacity-100 transition-all hover:scale-110">
            <img src={social.icon} className="w-7 h-7" alt={social.name} />
          </a>
        ))}
      </div>
      <p className="order-3 sm:w-full sm:text-center lg:w-auto font-light">© 2026 Mayur. All rights reserved.</p>
    </section>
  );
};

export default Footer;

import { mySocials } from "../Constants";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      {/* Divider line */}
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Terms & Privacy */}
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      {/* Social icons */}
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <img
              src={social.icon}
              className="w-5 h-5 hover:opacity-80 transition-opacity"
              alt={social.name}
            />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p>© 2025 Abdul Rauf. All rights reserved.</p>
    </section>
  );
};

export default Footer;

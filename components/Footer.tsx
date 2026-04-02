"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 md:py-20">
      <div className="w-full px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-6">
              <span className="font-display text-2xl font-light tracking-wide">
                Danny <span className="italic font-extralight">&amp;</span> Jones
              </span>
            </div>
            <p className="font-body text-xs text-white/40 leading-relaxed mb-6">
              Handcrafted bespoke shoes and tailored apparel for the discerning gentleman.
            </p>
            <div className="flex gap-4">
              {["Instagram", "LinkedIn", "Pinterest"].map((social) => (
                <a key={social} href="#" className="font-body text-[0.6rem] font-medium tracking-[0.15em] uppercase text-white/30 hover:text-white transition-colors duration-300">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-body text-[0.65rem] font-medium tracking-[0.25em] uppercase text-white/50 mb-6">
              Collections
            </h4>
            <ul className="space-y-3">
              {["Oxford Shoes", "Brogues", "Chelsea Boots", "Tuxedo Shoes", "Loafers"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-sm text-white/40 hover:text-white transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tailoring */}
          <div>
            <h4 className="font-body text-[0.65rem] font-medium tracking-[0.25em] uppercase text-white/50 mb-6">
              Tailoring
            </h4>
            <ul className="space-y-3">
              {["Bespoke Suits", "Tuxedos", "Custom Shirts", "Two-Piece", "Three-Piece"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-sm text-white/40 hover:text-white transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[0.65rem] font-medium tracking-[0.25em] uppercase text-white/50 mb-6">
              Atelier
            </h4>
            <div className="space-y-4">
              <p className="font-body text-sm text-white/40 leading-relaxed">
                By Appointment Only<br />Savile Row, London<br />W1S 3PR
              </p>
              <a href="mailto:atelier@dannyandjones.com" className="block font-body text-sm text-white/40 hover:text-white transition-colors duration-300">
                atelier@dannyandjones.com
              </a>
              <a href="tel:+442071234567" className="block font-body text-sm text-white/40 hover:text-white transition-colors duration-300">
                +44 (0) 207 123 4567
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-body text-[0.6rem] tracking-[0.15em] uppercase text-white/20">
            &copy; {new Date().getFullYear()} Danny &amp; Jones. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Shipping"].map((link) => (
              <a key={link} href="#" className="font-body text-[0.6rem] tracking-[0.15em] uppercase text-white/20 hover:text-white/50 transition-colors duration-300">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

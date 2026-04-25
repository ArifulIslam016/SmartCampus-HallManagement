import Link from "next/link";

// ─── DATA ─────────────────────────────────────────────────
const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Institute", href: "/about" },
  { label: "Hall Management", href: "/halls" },
  { label: "Notices", href: "/notices" },
  { label: "Contact Us", href: "/contact" },
];

const STUDENT_LINKS = [
  { label: "Apply for Hall Seat", href: "/apply" },
  { label: "Check Application", href: "/profile/applications" },
  { label: "Fee Payment", href: "/profile/fees" },
  { label: "Complaint Box", href: "/complaint" },
  { label: "Dashboard", href: "/dashboard" },
];

const CONTACT_INFO = {
  address: "Mohammodpur, Dhaka-1207, Bangladesh",
  phone: "+8802-58151777",
  email: "info@gai.polytech.gov.bd",
  website: "http://gai.polytech.gov.bd",
};

// ─── ICONS (SVG only) ─────────────────────────────────────
function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#F42A41]">
      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.065a8 8 0 10-16 0c0 3.368 1.556 6.062 3.5 8.065a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0 text-[#F42A41]">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0 text-[#F42A41]">
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0 text-[#F42A41]">
      <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
    </svg>
  );
}

// ─── FOOTER COMPONENT ─────────────────────────────────────
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1f1a] text-gray-300">

      {/* ── Top divider accent ── */}
      <div className="w-full h-1 bg-gradient-to-r from-[#006A4E] via-[#F42A41] to-[#006A4E]" />

      {/* ── Main footer content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Col 1: Brand Info ── */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-[#006A4E] flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-white font-black text-sm tracking-tight">GAI</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">Smart Campus</p>
                <p className="text-gray-400 text-[11px] leading-tight">Govt. Graphic Arts Institute</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-3">
              A digital platform for smart campus and hall management — simplifying student life at Government Graphic Arts Institute, Dhaka.
            </p>
            {/* Badge */}
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-[#006A4E]/15 border border-[#006A4E]/30 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
              <span className="text-[11px] font-semibold text-green-400 uppercase tracking-wide">
                Under Bangladesh Technical Education Board
              </span>
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-[#006A4E]/30">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#4ade80] transition-colors duration-200 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006A4E] group-hover:bg-[#4ade80] transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Student Portal ── */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-[#006A4E]/30">
              Student Portal
            </h3>
            <ul className="space-y-2.5">
              {STUDENT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#4ade80] transition-colors duration-200 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006A4E] group-hover:bg-[#4ade80] transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact Info ── */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-[#006A4E]/30">
              Contact
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <LocationIcon />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <PhoneIcon />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-[#4ade80] transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <MailIcon />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#4ade80] transition-colors break-all">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <GlobeIcon />
                <a
                  href={CONTACT_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4ade80] transition-colors"
                >
                  gai.polytech.gov.bd
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Government Graphic Arts Institute. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Smart Campus &amp; Hall Management System
          </p>
        </div>
      </div>
    </footer>
  );
}
export default function Footer() {
  const links = ["About Us", "How It Works", "Categories", "Privacy", "Terms"];
  return (
    <footer className="bg-black border-t border-white/10 py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-display font-black text-xl uppercase text-white">
          GROUPTEA
        </span>
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="font-body text-xs text-white/50 hover:text-white transition-colors duration-200 no-underline"
            >
              {l}
            </a>
          ))}
        </div>
        <p className="font-body text-xs text-white/30">
          © 2025 GroupTea. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

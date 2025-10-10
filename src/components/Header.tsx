import sojernLogo from "@/assets/sojern-logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={sojernLogo} alt="Sojern" className="h-8" />
        </div>
      </div>
    </header>
  );
};

export default Header;

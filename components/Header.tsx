import ActiveLink from "./ActiveLink";

const HeaderLink = ({ label, path }: { path: string; label: string }) => (
  <ActiveLink
    href={path}
    activeClassName="bg-gray-900 text-white"
    inActiveClassName="text-gray-300 hover:bg-gray-700 hover:text-white"
  >
    <a className="px-3 py-2 rounded-md text-sm font-medium">{label}</a>
  </ActiveLink>
);

const Header = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-baseline space-x-4">
            <HeaderLink path="/" label="Home" />
            <HeaderLink path="/test" label="Test" />
            <HeaderLink path="/map" label="Map" />
          </div>
          <p>hey</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import CompanyDropdown from "./sites/CompanyDropdown";
import ServicesDropdown from "./sites/ServicesDropdown";

const NavBarSites = () => {
  return (
    <div className="flex gap-10 text-lg">
      <ServicesDropdown />
      <CompanyDropdown />
    </div>
  );
};

export default NavBarSites;

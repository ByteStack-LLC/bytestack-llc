import CompanyDropdown from "./sites/CompanyDropdown";
import ServicesDropdown from "./sites/ServicesDropdown";

const NavBarSites = () => {
  return (
    <div className="flex gap-10 text-lg space-x-10">
      <ServicesDropdown />
      <CompanyDropdown />
    </div>
  );
};

export default NavBarSites;

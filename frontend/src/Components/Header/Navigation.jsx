import { useState } from "react";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import { ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import NavDropDown from "./NavDropDown";
import DynamicCustomLink from "../DynamicComponents/DynamicCustomLink";

function Navigation() {
  const [dropDown, setDropDown] = useState(false);

  const onHover = () => {
    setDropDown((d) => (d = !d));
  };

  // DROPWDOWN TEMPLATE

  const navigationArr = [
    {
      route: "/accounts",
      navName: "Accounts",
    },
    {
      route: "/walkIn",
      navName: "Walk In",
    },
  ];

  return (
    <nav className=" flex ml-6 justify-between max-h-12 gap-4 text-base">
      <div className={`relative`} onMouseEnter={onHover}>
        <DynamicCustomLink to="/accounts">
          <div>
            <UserGroupIcon className="size-6 " />
          </div>
          <p>Customers</p>
        </DynamicCustomLink>
        <div onMouseEnter={onHover} onMouseLeave={onHover}>
          {dropDown && (
            <div className={`absolute mt-2 flex flex-col item-center`}>
              <NavDropDown navigationArr={navigationArr} />
            </div>
          )}
        </div>
      </div>
      <DynamicCustomLink to="/products">
        <div>
          <ArchiveBoxIcon className="size-6 " />
        </div>
        <p>Products</p>
      </DynamicCustomLink>

      <DynamicCustomLink to="/suppliers">
        <div>
          <BuildingStorefrontIcon className="size-6 " />
        </div>
        <p>Suppliers</p>
      </DynamicCustomLink>

      <DynamicCustomLink to="/inventory">
        <div>
          <ArchiveBoxArrowDownIcon className="size-6 " />
        </div>
        <p>Inventory</p>
      </DynamicCustomLink>
      <DynamicCustomLink to="/orders">
        <div>
          <ShoppingCartIcon className="size-6 " />
        </div>
        <p>Order Tracking</p>
      </DynamicCustomLink>
      <DynamicCustomLink to="/orderList">
        <div>
          <ClipboardDocumentListIcon className="size-6 " />
        </div>
        <p>Order History</p>
      </DynamicCustomLink>
      <DynamicCustomLink to="/stockinlogs">
        <div>
          <ClipboardDocumentListIcon className="size-6 " />
        </div>
        <p>Stock-in Logs</p>
      </DynamicCustomLink>
      <DynamicCustomLink to="/employees">
        <div>
          <ClipboardDocumentListIcon className="size-6 " />
        </div>
        <p>Employees</p>
      </DynamicCustomLink>
    </nav>
  );
}

export default Navigation;

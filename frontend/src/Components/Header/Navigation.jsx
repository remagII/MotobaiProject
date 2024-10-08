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
  const [accountDropDown, setAccountDropDown] = useState(false);
  const [inventoryDropDown, setInventoryDropDown] = useState(false);

  const onHoverAccounts = () => {
    setAccountDropDown((d) => (d = !d));
  };
  const onHoverInventory = () => {
    setInventoryDropDown((d) => (d = !d));
  };

  // DROPWDOWN TEMPLATE

  const accountNavigationArr = [
    {
      route: "/accounts",
      navName: "Companies",
    },
    {
      route: "/walkIn",
      navName: "Walk In",
    },
  ];

  const inventoryNavigationArr = [
    {
      route: "/stockinlogs",
      navName: "Logs",
    },
  ];

  return (
    <nav className=" flex ml-6 justify-between max-h-12 gap-4 text-base">
      <div className={`relative`} onMouseEnter={onHoverAccounts}>
        <DynamicCustomLink to="/accounts">
          <div>
            <UserGroupIcon className="size-6 " />
          </div>
          <p>Accounts</p>
        </DynamicCustomLink>
        <div
          className="absolute mt-2"
          onMouseEnter={onHoverAccounts}
          onMouseLeave={onHoverAccounts}
        >
          {accountDropDown && (
            <div className={`flex flex-col item-center`}>
              <NavDropDown navigationArr={accountNavigationArr} />
            </div>
          )}
        </div>
      </div>
      <DynamicCustomLink to="/employees">
        <div>
          <ClipboardDocumentListIcon className="size-6 " />
        </div>
        <p>Employees</p>
      </DynamicCustomLink>
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

      <div className={`relative `} onMouseEnter={onHoverInventory}>
        <DynamicCustomLink to="/inventory">
          <div>
            <ArchiveBoxArrowDownIcon className="size-6 " />
          </div>
          <p>Inventory</p>
        </DynamicCustomLink>
        <div
          className="absolute mt-2 w-12"
          onMouseEnter={onHoverInventory}
          onMouseLeave={onHoverInventory}
        >
          {inventoryDropDown && (
            <div className={`flex flex-col item-center `}>
              <NavDropDown navigationArr={inventoryNavigationArr} />
            </div>
          )}
        </div>
      </div>
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
    </nav>
  );
}

export default Navigation;

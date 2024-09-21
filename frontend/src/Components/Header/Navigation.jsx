import { UserGroupIcon } from "@heroicons/react/24/outline";
import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import { ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";

import DynamicCustomLink from "../DynamicCustomLink";

function Navigation() {
  return (
    <nav className=" flex justify-between max-h-12 gap-4 text-base">
      <DynamicCustomLink to="/companies">
        <div>
          <UserGroupIcon className="size-6 " />
        </div>
        <p>Customers</p>
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
        <p>Orders</p>
      </DynamicCustomLink>
      <DynamicCustomLink to="/orderList">
        <div>
          <ClipboardDocumentListIcon className="size-6 " />
        </div>
        <p>Order List</p>
      </DynamicCustomLink>
    </nav>
  );
}

export default Navigation;

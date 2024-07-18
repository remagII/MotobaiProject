import { UserGroupIcon } from "@heroicons/react/24/outline";
import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import { ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <button
      as={Link}
      to={to}
      className={` transition-all duration-150  text-black rounded-md border-2 border-red-600  hover:bg-red-600  min-w-max  hover:text-white ${
        isActive ? "bg-red-600 text-white" : "bg-white"
      } `}
    >
      <Link className={`flex gap-3 px-4 py-2`} to={to} {...props}>
        {children}
      </Link>
    </button>
  );
}

function Navigation() {
  return (
    <nav className=" flex justify-between max-h-12 gap-4 text-base">
      <CustomLink to="/companies">
        <div>
          <UserGroupIcon className="size-6 " />
        </div>
        <p>Companies</p>
      </CustomLink>
      <CustomLink to="/products">
        <div>
          <ArchiveBoxIcon className="size-6 " />
        </div>
        <p>Products</p>
      </CustomLink>

      <CustomLink to="/inventory">
        <div>
          <ArchiveBoxArrowDownIcon className="size-6 " />
        </div>
        <p>Inventory</p>
      </CustomLink>
      <CustomLink to="/orders">
        <div>
          <ShoppingCartIcon className="size-6 " />
        </div>
        <p>Orders</p>
      </CustomLink>
      <CustomLink to="/orderList">
        <div>
          <ClipboardDocumentListIcon className="size-6 " />
        </div>
        <p>Order List</p>
      </CustomLink>
    </nav>
  );
}

export default Navigation;

// OVERVIEW COMPONENT
export default function Overview({ title, quantity }) {
  return (
    <div
      className={` flex flex-col gap-10 text-xl bg-red-600 p-10 rounded-lg w-1/6 min-h-full shadow-shadow m-8 `}
    >
      <h2 className={`text-base text-gray-300 font-semibold`}>Overview</h2>
      <div className={`flex flex-col gap-1`}>
        <h2 className={`text-xl text-white`}>{title}</h2>
        <h1 className={`text-3xl text-white font-semibold`}>{quantity}</h1>
      </div>
    </div>
  );
}

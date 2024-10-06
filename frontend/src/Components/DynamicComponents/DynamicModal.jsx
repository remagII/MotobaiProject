export default function DynamicModal({ children, toggleModal, modal }) {
  return (
    modal && (
      <>
        <div
          onClick={toggleModal}
          className="fixed w-screen h-screen left-0 top-0 z-10 backdrop-blur-sm bg-black bg-opacity-60  "
        ></div>
        <div>
          <div>{children}</div>
        </div>
      </>
    )
  );
}

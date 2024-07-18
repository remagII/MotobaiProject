import Logo from "./Logo.png";

export default function Modal({ children, toggleModal, modal }) {
  return (
    modal && (
      <>
        <div
          onClick={toggleModal}
          className="fixed w-screen h-screen left-0 top-0 z-0 backdrop-blur-sm bg-black bg-opacity-60  "
        ></div>
        <div>
          <div>{children}</div>
        </div>
      </>
    )
  );
}

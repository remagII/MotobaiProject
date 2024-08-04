export default function Container(props) {
  return (
    <section className="h-screen w-screen flex flex-col">
      {props.children}
    </section>
  );
}

export default function Container(props) {
  return (
    <section className="h-screen max-w-screen flex flex-col min-h-0 overflow-hidden">
      {props.children}
    </section>
  );
}

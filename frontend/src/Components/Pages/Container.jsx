export default function Container(props) {
  return <section className="h-screen flex flex-col">{props.children}</section>;
}

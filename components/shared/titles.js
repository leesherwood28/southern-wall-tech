export function ServicesTitle() {
  return <Title text='Services'></Title>;
}

export function ProductsTitle() {
  return <Title text='Products'></Title>;
}

export function Title({ icon, text }) {
  return <h1>{text}</h1>;
}

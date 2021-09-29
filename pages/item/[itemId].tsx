export default function Item(props: any) {
  console.log(props);
  return <div>item</div>;
}

export async function getStaticProps() {
  return {
    props: {
      items: [1, 2, 3, 4, 5, 6],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { itemId: "1" } },
      { params: { itemId: "2" } },
      { params: { itemId: "3" } },
      { params: { itemId: "4" } },
    ],
    fallback: false,
  };
}

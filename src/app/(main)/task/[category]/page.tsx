export default function page({ params }: { params: { category: string } }) {
  return <div>{params.category}</div>;
}

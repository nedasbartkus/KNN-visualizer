export default function Renderer({ dataset }) {
  console.log(dataset)
  return <p>I received {dataset.length} points</p>
}

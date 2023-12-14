export default function Combo({ combo }) {
  console.log(combo);
  return (
    <>
      <div className="w-80 my-5 overflow-hidden bg-UFD-Char-bg rounded-md border ">
        <figcaption className="text-center"  >{combo.title}</figcaption>
        <p>Starting Percent|Range: {combo.startingpercent}% | 0% - 50% </p>
        <img className="h-56 w-96 " src={combo.file} />
        <p>Starting Move: {combo.startingMove}</p>
      </div>
    </>
  );
}

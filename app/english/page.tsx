export default function English() {
  return (
    <div>
      <WorldItem word="essential" meaning="必要的，必不可少的" />
      <WorldItem word="combining" meaning="组合" />
    </div>
  );
}
interface WordItemProps {
  word: string;
  meaning: string;
}
function WorldItem(props: WordItemProps) {
  return (
    <div>
      <div> {props.word} </div>
      <div> {props.meaning} </div>
    </div>
  );
}

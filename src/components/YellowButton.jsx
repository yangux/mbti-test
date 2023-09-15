import Button from "./Button";

export default function YellowButton({ text, clickEvent }) {
  return (
    <Button
      mainColor="gold"
      subColor="orange"
      hoverColor="yellow"
      text={text}
      clickEvent={clickEvent}
    />
  );
}

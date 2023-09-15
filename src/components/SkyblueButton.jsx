import Button from "./Button";

export default function SkyblueButton({ text, clickEvent }) {
  return (
    <Button
      mainColor="aliceblue"
      subColor="skyblue"
      hoverColor="lavender"
      text={text}
      clickEvent={clickEvent}
    />
  );
}

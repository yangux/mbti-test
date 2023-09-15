import Button from "./Button";

export default function PinkButton({ text, clickEvent }) {
  return (
    <Button
      mainColor="violet"
      subColor="fuchsia"
      hoverColor="#faa1ff"
      text={text}
      clickEvent={clickEvent}
    />
  );
}

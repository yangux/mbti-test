import styled from "styled-components";
import PinkButton from "../components/PinkButton";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../store/modules/mbti";

const Header = styled.p`
  font-size: 3rem;
`;
const Explanation = styled.p`
  font-size: 1.5rem;
  color: #777;
`;
const Result = styled.p`
  font-size: 3rem;
  color: dodgerblue;
`;

const Img = styled.img`
  width: 500px;
  transform: translateX(-35px);
`;

export default function Show() {
  const mbtiResult = useSelector((state) => state.mbti.mbtiResult);
  const explanation = useSelector(
    (state) => state.mbti.explanations[mbtiResult]
  );
  const dispatch = useDispatch();
  return (
    <>
      <Header>당신의 개발자 MBTI 결과는?</Header>
      <Explanation>{explanation.text}</Explanation>
      <Result>{mbtiResult}</Result>
      <Img src={explanation.img} alt="{mbtiResult} 설명" />
      <PinkButton text="다시 검사하기" clickEvent={() => dispatch(reset())} />
    </>
  );
}

import styled from "styled-components";
export default function Tester() {
  // return <h1>Tester</h1>;
  return (
    <Container>
      <Styled>styled component</Styled>
      <Styled>styled component</Styled>
      <div>tester</div>
      {/* <div>tester</div> */}
      <div>tester 2</div>
    </Container>
  );
}

const Container = styled.div`
  margin:100px;
`

const Styled = styled.div`
  background-color:#505050;
  color:#0f0f0f;
`;

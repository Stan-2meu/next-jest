import styled from "@emotion/styled";
export default function Tester() {
  // return <h1>Tester</h1>;
  return (
    <Container>
      <div>tester</div>
      {/* <div>tester</div> */}
      <div>tester 2</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding:200px;
`;

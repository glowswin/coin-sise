import styled from "styled-components";
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
`;
const Header = styled.header`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinInfoList = styled.ul``;
const CoinInfo = styled.li`
  padding: 10px 20px;
  background-color: white;
  border-radius: 40px;
  margin-bottom: 10px;
`;
function Coins() {
  return (
    <Container>
      <Header>코인시세</Header>
      <CoinInfoList>
        <CoinInfo>비트코인</CoinInfo>
        <CoinInfo>비트</CoinInfo>
        <CoinInfo>케아</CoinInfo>
      </CoinInfoList>
    </Container>
  );
}
export default Coins;

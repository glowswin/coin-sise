import { useQuery } from "react-query";
import styled from "styled-components";
import { coninList } from "../api";
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
const IsLoading = styled.div`
  text-align: center;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: string;
  is_new: string;
  is_active: string;
}
function Coins() {
  const { isLoading, data: coinData } = useQuery<ICoin[]>(
    "coinlist",
    coninList
  );
  return (
    <Container>
      <Header>코인시세</Header>
      {isLoading ? (
        <IsLoading>로딩중</IsLoading>
      ) : (
        <CoinInfoList>
          {coinData?.map((coin) => (
            <CoinInfo key={coin.id}>{coin.name}</CoinInfo>
          ))}
        </CoinInfoList>
      )}
    </Container>
  );
}
export default Coins;

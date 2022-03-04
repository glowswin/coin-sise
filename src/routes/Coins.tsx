import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { coninList } from "../api";
import { isDarkAtom } from "../atom";
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.strongColor};
`;
const Container = styled.div`
  max-width: 480px;
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
  color: ${(props) => props.theme.txtColor};
  a {
    padding: 5px;
    display: flex;
    align-items: center;
  }
`;
const IsLoading = styled.div`
  text-align: center;
`;
const Symbol = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
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
  const [isDark, setDarkAtom] = useRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((current) => !current);
  const { isLoading, data: coinData } = useQuery<ICoin[]>(
    "coinlist",
    coninList
  );
  return (
    <Container>
      <Helmet>
        <title>코인시세</title>
      </Helmet>
      <Header>
        <Title>
          코인시세
          <button onClick={toggleDarkAtom}>
            {isDark ? "화이트모드" : "블랙모드"}
          </button>
        </Title>
      </Header>
      {isLoading ? (
        <IsLoading>로딩중...</IsLoading>
      ) : (
        <CoinInfoList>
          {coinData?.slice(0, 100).map((coin) => (
            <CoinInfo key={coin.id}>
              <Link to={`/${coin.id}`}>
                <Symbol
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name}
              </Link>
            </CoinInfo>
          ))}
        </CoinInfoList>
      )}
    </Container>
  );
}
export default Coins;

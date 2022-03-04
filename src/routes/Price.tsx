import styled from "styled-components";

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px 20px;
  border-radius: 40px;
  margin-bottom: 10px;
`;
const Tag = styled.span`
  width: 50%;
`;

const Value = styled.div`
  width: 50%;
`;

const Sign = styled.span<{ isPositive?: Boolean }>`
  font-weight: 600;
  color: ${(props) => (props.isPositive ? "lightgreen" : "red")};
`;

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}
interface PriceProps {
  coinId: string;
  tickersData?: PriceData;
}
function checkValue(value: number | undefined) {
  if (value) {
    return value > 0;
  }
}
function Price({ coinId, tickersData }: PriceProps) {
  return (
    <>
      <Overview>
        <Tag>가격 :</Tag>
        <Value>
          <Sign isPositive={true}>
            $ {tickersData?.quotes.USD.price.toFixed(3)}
          </Sign>
        </Value>
      </Overview>

      <Overview>
        <Tag> 지난30분간변화:</Tag>
        <Value>
          <Sign
            isPositive={
              checkValue(tickersData?.quotes.USD.percent_change_30m) === true
            }
          >
            {tickersData?.quotes.USD.percent_change_30m} %
          </Sign>
        </Value>
      </Overview>

      <Overview>
        <Tag> 지난1시간변화:</Tag>
        <Value>
          <Sign
            isPositive={
              checkValue(tickersData?.quotes.USD.percent_change_1h) === true
            }
          >
            {tickersData?.quotes.USD.percent_change_1h} %
          </Sign>
        </Value>
      </Overview>

      <Overview>
        <Tag> 지난12시간변화:</Tag>
        <Value>
          <Sign
            isPositive={
              checkValue(tickersData?.quotes.USD.percent_change_12h) === true
            }
          >
            {tickersData?.quotes.USD.percent_change_12h} %
          </Sign>
        </Value>
      </Overview>

      <Overview>
        <Tag> 지난24시간변화:</Tag>
        <Value>
          <Sign
            isPositive={
              checkValue(tickersData?.quotes.USD.percent_change_24h) === true
            }
          >
            {tickersData?.quotes.USD.percent_change_24h} %
          </Sign>
        </Value>
      </Overview>
      <Overview>
        <Tag> 지난7일간변화:</Tag>
        <Value>
          <Sign
            isPositive={
              checkValue(tickersData?.quotes.USD.percent_change_7d) === true
            }
          >
            {tickersData?.quotes.USD.percent_change_7d} %
          </Sign>
        </Value>
      </Overview>
    </>
  );
}

export default Price;

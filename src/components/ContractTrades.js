import { TrademarkOutlined } from "@ant-design/icons";
import { Button, Modal, Skeleton, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { getContractTrades } from "../utils";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip as ChartTooltip,
} from "recharts";

const ratio = 6900000000000000 / 1300;

const ModalContent = ({tokenAddress}) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        getContractTrades(tokenAddress)
          .then((resp) => {
            setData(
              resp.result.reverse().map((item) => {
                return {
                  ...item,
                  price: Math.floor(Number(item.price) / ratio),
                  block_timestamp: new Date(
                    item.block_timestamp
                  ).toLocaleDateString(),
                };
              })
            );
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);
    
      if (loading) {
        return <Skeleton active />
      }

      return ();
};


export default ContractTrades;
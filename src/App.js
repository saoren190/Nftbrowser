import {Button, Input, Layout, Card, List, message} from "antd";
import { useState } from "react";
import { getContractNFTs } from "./util";
import './App.css';


const {Header, Content} = Layout;

function App() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearch = async () => {
    if (searchText === "") {
      return;
    }

    setLoading(true);
    try {
      const data = await getContractNFTs(searchText);
      setNfts(data.result);
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout style={{height: "100vh"}}>
      <header>
        <div style={{fontSize:16, fontWeight: 600, color:"white"}}>
          NFT Browser
        </div>
      </header>
      <Content style={{height: "calc(100% - 64px)", padding:20, overflowY: "auto"}}>
        <Input.Group compact>
          <Input 
            style={{width: 300}}
            placeholder="Enter a NFT contract address to search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button type="primary" onClick={handleSearch}>Search</Button>
        </Input.Group>
        <List
          loading = {loading}
          style={{
            marginTop: 20,
            height: "calc(100% - 64px)",
            overflow: "auto",
          }}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={[1, 2, 3]}
          renderItem={(nft) => (
              <List.Item key={nft}>
                <Card title={nft}/>
              </List.Item>
            )}
        />
      </Content>
    </Layout>
  );
}

export default App;

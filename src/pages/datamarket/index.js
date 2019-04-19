import React from 'react';
import { connect } from 'dva';
import { Card, List, Avatar,Breadcrumb ,Icon} from 'antd';
import Meta from 'antd/lib/card/Meta';

const moduleList = [
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '指数数据',
    desc: '沪深市场指数600+介',
    id: 0,
  },
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '股票数据',
    desc: '沪深A股2005年至今',
    id: 1,
  },
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '期货数据',
    desc: '中金所、上期所、郑商所、大商所',
    id: 2,
  },
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '期权数据',
    desc: '股票期权商品期权',
    // eslint-disable-next-line no-script-url
    id: 3,
  },

];
const bread={
  height:'40px',
  lineHeight:'40px',
  fontSize:'16px',
  marginBottom:'12px'
}
@connect()
class DataMarket extends React.Component {
  render() {
    return (
      <div className='normal'>
        <Breadcrumb separator=">" style={bread}>
          <Breadcrumb.Item>数据市场</Breadcrumb.Item>
        </Breadcrumb>
        <List
          grid={{ gutter: 24, xs: 4, }}
          dataSource={moduleList}
          renderItem={item => (
            <List.Item key={item.id} >
              <Card
                hoverable
              >
                <Meta
                  avatar={<Avatar src={item.icon} />}
                  title={<div>{item.title}<Icon type="exclamation-circle"  style={{float:'right'}}/></div>}
                  description={<div>{item.desc}<div><Icon type="api" /></div></div>}
                />
              </Card>
            </List.Item>
          )}
      />
      </div>
    );
  }
}

export default DataMarket;

import React from 'react';
import { connect } from 'dva';
import { Row, Col, Table, Breadcrumb, Timeline, Tag, Tabs } from "antd";
import styles from './index.less';
import Link from "umi/link";

const TabPane = Tabs.TabPane;

const bread = {
  height: '40px',
  lineHeight: '40px',
  fontSize: '16px',
  marginBottom: '12px'
}

const columns = [
  {
    title: '标题',
    dataIndex: 'title',
    render: (text) => {
      return (
        <a >{text}</a>
      )
    },
  },
  {
    title: '波及股票',
    dataIndex: 'stock',
    render: (text) => {
      return (
        <a >{text}</a>
      )
    },
  },
  {
    title: '时间',
    dataIndex: 'time',
  },
  {
    title: '来源',
    dataIndex: 'source',
  }
];

const dataSource = [
  {
    key: '1',
    title: '长江投资股票可能被实施退市风险警示的第三次提示性公告',
    stock: '长江投资',
    time: '2019-04-19 20:00:59',
    source: '上海证券交易所',
  },
  {
    key: '2',
    title: '恺英网络董事长回应被网上追逃传言：仍在公司，从未内幕交易',
    stock: '恺英网络',
    time: '2019-04-19 18:47:13',
    source: '新浪网',
  },
  {
    key: '3',
    title: '可能被实施退市风险警示 奥瑞德早盘一字跌停',
    stock: '奥瑞德',
    time: '2019-04-19 18:32:02',
    source: '证券市场红周刊',
  },
  {
    key: '4',
    title: '凯迪生态环境科技股份有限公司关于中国证监会立案调查进展暨风险提示性公告2019-04-19',
    stock: '凯迪生态',
    time: '2019-04-19 15:45:15',
    source: '上海清算所网',
  },
  {
    key: '5',
    title: '中国证券监督管理委员会广东监管局行政处罚决定书〔2019〕3号（曹志亚）',
    stock: '海航基础',
    time: '2019-04-19 13:00:06',
    source: '中国证监会',
  },
  {
    key: '6',
    title: '神州B：关于立案调查事项进展暨风险提示性公告',
    stock: '神州长城',
    time: '2019-04-19 8:30:50',
    source: '东方财富网',
  },
  {
    key: '7',
    title: '沈阳金山能源股份有限公司关于公司股票可能被实施退市风险警示的第三次提示公告',
    stock: '金山股份',
    time: '2019-04-19 3:15:23',
    source: '证券时报网',
  },
  {
    key: '8',
    title: '吉林利源精制股份有限公司关于立案调查事项进展暨风险提示的公告',
    stock: '利源精制',
    time: '2019-04-19 3:15:23',
    source: '证券时报网',
  },
  {
    key: '9',
    title: '雏鹰农牧集团股份有限公司关于立案调查进展暨风险提示公告',
    stock: '雏鹰农牧',
    time: '2019-04-19 3:15:23',
    source: '证券时报网',
  },
  {
    key: '10',
    title: '浔兴股份:关于立案调查事项进展暨风险提示的公告',
    stock: '浔兴股份',
    time: '2019-04-18 17:32:10',
    source: '巨潮资讯',
  }
];

@connect()
class AppCenter extends React.Component {
  render() {
    return (
      <div className='normal'>
        <Breadcrumb separator=">" style={bread}>
          <Breadcrumb.Item ><Link to='/appcenter'>场景中心</Link></Breadcrumb.Item>
          <Breadcrumb.Item>负面舆情</Breadcrumb.Item>
        </Breadcrumb>
        <div className='tablebg'>
          <Tabs defaultActiveKey="1">
            <TabPane tab="时间线" key="1">
              <Timeline>
                  {
                    dataSource.map(item=>{
                      return(
                <Timeline.Item color='#58bfc0'>
                  <p style={{ fontSize: '16px' }}>
                    <span style={{ marginRight: '20px' }}>{item.time}</span><Tag color='orange'>{item.stock}</Tag>
                  </p>
                  <p>{item.source}</p>
                  <a>{item.title}</a>

                </Timeline.Item>
                )
                    })
                  }

              </Timeline>
            </TabPane>
            <TabPane tab="列表" key="2">
              <Col span={24}>
                <div className={styles.platform}>
                  <div className={styles.headerTitle}>
                    <span className={styles.title}>负面舆情</span>
                  </div>
                  <div className={styles.contenttable}>
                    <Table
                      size='middle'
                      columns={columns}
                      dataSource={dataSource}
                      pagination={false}
                    />
                  </div>
                </div>
              </Col>
            </TabPane>
          </Tabs>

        </div>

      </div>
    );
  }
}

export default AppCenter;

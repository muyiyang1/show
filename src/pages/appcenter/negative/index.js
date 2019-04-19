import React from 'react';
import { connect } from 'dva';
import { Row, Col, Table, Breadcrumb, Timeline, Tag, Tabs } from "antd";
import styles from './index.less';

const TabPane = Tabs.TabPane;

const bread = {
  height: '40px',
  lineHeight: '40px',
  fontSize: '16px',
  marginBottom: '12px'
}

const columns = [
  {
    title: '事件',
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
    title: '快讯：银鸽投资涨停 报于3.87元',
    stock: '银鸽投资',
    time: '2018-09-21 21:00:09',
    source: '中金在线',
  },
  {
    key: '2',
    title: '太平洋证券股份有限公司上调伊利股份评级',
    stock: '平安银行',
    time: '2018-09-21 21:00:09',
    source: '金融界',
  },
  {
    key: '3',
    title: '粤传媒打开涨停 股价创逾8个月新高',
    stock: '中国宝安',
    time: '2018-09-20 20:59:09',
    source: '人民网',
  },
  {
    key: '4',
    title: '万达电影百亿重组过会 完成全产业链布局关键一步',
    stock: '深圳能源',
    time: '2018-09-19 20:57:09',
    source: '同花顺金融网',
  },
  {
    key: '5',
    title: '雷曼股份将于3月7日解禁731.72万股',
    stock: '中集集团',
    time: '2018-09-19 20:57:09',
    source: '每经网',
  },
  {
    key: '6',
    title: '北控水务现升近4% 大摩上调评级至增持',
    stock: '泛海控股',
    time: '2018-09-18 20:58:09',
    source: '界面',
  },
  {
    key: '7',
    title: '长城国瑞证券有限公司上调乐普医疗评级',
    stock: '雷曼股份',
    time: '2018-09-17 20:59:09',
    source: '证券时报网',
  },
  {
    key: '8',
    title: '超高清视频概念股涨停潮继续',
    stock: '中兴通讯',
    time: '2018-09-16 20:57:09',
    source: '证券之星',
  },
  {
    key: '9',
    title: '121家公司公布年度分红方案',
    stock: '中国石化',
    time: '2018-09-16 20:56:30',
    source: '21世纪经济报道',
  },
  {
    key: '10',
    title: '连续2年慷慨分红 安靠智电上市以来过半盈利回报股东',
    stock: '中金岭南',
    time: '2018-09-15 20:57:29',
    source: '搜狐网',
  }
];

@connect()
class AppCenter extends React.Component {
  render() {
    return (
      <div className='normal'>
        <Breadcrumb separator=">" style={bread}>
          <Breadcrumb.Item href="/appcenter">场景中心</Breadcrumb.Item>
          <Breadcrumb.Item>负面舆情</Breadcrumb.Item>
        </Breadcrumb>
        <div className='tablebg'>
          <Tabs defaultActiveKey="1">
            <TabPane tab="列表" key="1">
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
            <TabPane tab="时间轴" key="2">
              <Timeline>
                <Timeline.Item color='#58bfc0'>
                  <p style={{ fontSize: '16px' }}>
                    <span style={{ marginRight: '20px' }}>2019-04-16 21:34:12</span><Tag color='orange'>中国石化</Tag>
                  </p>
                  <p>**轮船</p>
                  <p>在北太平洋</p>
                  <p>沉船漏油</p>
                  <p>污染地球</p>
                  <a>全文</a>
                </Timeline.Item>
                <Timeline.Item color='#58bfc0'>
                  <p style={{ fontSize: '16px' }}>
                    <span style={{ marginRight: '20px' }}>2019-04-16 21:34:12</span><Tag color='orange'>中国石化</Tag>
                  </p>
                  <p>**轮船</p>
                  <p>在南极洲附近海域</p>
                  <p>沉船漏油</p>
                  <p>影响企鹅栖息地环境</p>
                  <a>全文</a>
                </Timeline.Item>
                <Timeline.Item color='#58bfc0'>
                  <p style={{ fontSize: '16px' }}>
                    <span style={{ marginRight: '20px' }}>2019-04-16 21:34:12</span><Tag color='orange'>中国石化</Tag>
                  </p>
                  <p>**轮船</p>
                  <p>在日本近海海域</p>
                  <p>沉船漏油</p>
                  <p>造成恶劣影响</p>
                  <a>全文</a>
                </Timeline.Item>
              </Timeline>
            </TabPane>
          </Tabs>

        </div>

      </div>
    );
  }
}

export default AppCenter;

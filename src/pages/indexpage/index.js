
import React from 'react';
import { Card, List, Avatar, } from 'antd';
import Link from 'umi/link';
import Meta from 'antd/lib/card/Meta';
// import { styles } from 'ansi-colors';
import styles from './index.less';

const moduleList = [
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '量化研究',
    desc: '提供基于nootbook的研究环境，可实现因子管理和因子检测，支持多品类策略的编写...',
    link: 'appcenter/hot',
    disabled: true,
    id: 0,
  },
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '智能投研',
    desc: '以企业画像为基础，利用大数据和AI实现快速智能标签选股，海量舆情信息快速筛选识别...',
    link: 'appcenter/negative',
    disabled: true,
    id: 1,
  },
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '机器学习',
    desc: 'APS机器学习平台，集数据准备、特征工程、算法实现、模型开发、模型发布...',
    link: 'appcenter/new',
    disabled: true,
    id: 2,
  },
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '投资交易',
    desc: '敬请期待...',
    // eslint-disable-next-line no-script-url
    link: 'appcenter/heattrend',
    disabled: true,
    id: 3,
  },
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '组合管理',
    desc: '敬请期待...',
    // eslint-disable-next-line no-script-url
    link: 'appcenter/knowledgemap',
    disabled: true,
    id: 4,
  }
  ,
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '实时风控',
    desc: '敬请期待...',
    // eslint-disable-next-line no-script-url
    link: 'appcenter/wordcloud',
    disabled: true,
    id: 5,
  }
  ,
];
const modulesList = [

  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '数据市场',
    desc: '这是一句话模块介绍这是一句话模块介绍这是一句话模块介',
    link: 'datamarket',
    disabled: false,
    id: 1,
  },
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '场景中心',
    desc: '这是一句话模块介绍这是一句话模块介绍这是一句话模块介',
    link: 'appcenter',
    disabled: false,
    id: 0,
  },
];
function IndexPage() {
  return (
    <div className={styles.container}>
      <h2>功能区</h2>
      <List
        grid={{ gutter: 24, xs: 3 }}
        dataSource={moduleList}
        renderItem={item => (
          <List.Item key={item.id} className={item.disabled ? styles.disabled : styles.abled}>
            <Card
              hoverable
              actions={[
                item.disabled ? <a>进入模块</a>:<Link to={item.link}>进入模块</Link>,
              ]}
            >
              <Meta
                avatar={<Avatar src={item.icon} />}
                title={item.title}
                description={item.desc}
              />
            </Card>
          </List.Item>
        )}
      />
      <h2>应用区</h2>
       <List
        grid={{ gutter: 24, xs: 3 }}
        dataSource={modulesList}
        renderItem={item => (
          <List.Item key={item.id} className={item.disabled ? styles.disabled : styles.abled}>
            <Card
              hoverable
              actions={[
                item.disabled ?  <a>进入模块</a>:<Link to={item.link}>进入模块</Link>,
              ]}
            >
              <Meta
                avatar={<Avatar src={item.icon} />}
                title={item.title}
                description={item.desc}
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

export default IndexPage;

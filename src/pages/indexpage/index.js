
import React from 'react';
import { Card, List, Avatar, } from 'antd';
import Link from 'umi/link';
import Meta from 'antd/lib/card/Meta';
// import { styles } from 'ansi-colors';
import styles from './index.less';

const moduleList = [
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '热门个股',
    desc: '这是一句话模块介绍这是一句话模块介绍这是一句话模块介',
    link: 'appcenter/hot',
    disabled: false,
    id: 0,
  },
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '负面舆情',
    desc: '这是一句话模块介绍这是一句话模块介绍这是一句话模块介',
    link: 'appcenter/negative',
    disabled: false,
    id: 1,
  },
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '新兴概念',
    desc: '这是一句话模块介绍这是一句话模块介绍这是一句话模块介',
    link: 'appcenter/new',
    disabled: false,
    id: 2,
  },
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '热度趋势',
    desc: '这是一句话模块介绍这是一句话模块介绍这是一句话模块介',
    // eslint-disable-next-line no-script-url
    link: 'appcenter/heattrend',
    disabled: false,
    id: 3,
  },
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '知识图谱',
    desc: '这是一句话模块介绍这是一句话模块介绍这是一句话模块介',
    // eslint-disable-next-line no-script-url
    link: 'appcenter/knowledgemap',
    disabled: false,
    id: 4,
  }
  ,
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '综合词云',
    desc: '这是一句话模块介绍这是一句话模块介绍这是一句话模块介',
    // eslint-disable-next-line no-script-url
    link: 'appcenter/wordcolud',
    disabled: false,
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
                <Link to={item.link}>更多</Link>,
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
                <Link to={item.link}>更多</Link>,
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

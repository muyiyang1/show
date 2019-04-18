
import React from 'react';
import { Card, List, Avatar } from 'antd';
import Meta from 'antd/lib/card/Meta';
// import { styles } from 'ansi-colors';
import styles from './index.less';

const moduleList = [
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '热门个股',
    desc: '这是一句话模块介绍这是一句话模块介绍这是一句话模块介',
    link: '/datamarket',
    disabled: false,
    id: 0,
  },
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '负面舆情',
    desc: '这是一句话模块介绍这是一句话模块介绍这是一句话模块介',
    link: '/',
    disabled: false,
    id: 1,
  },
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '新兴概念',
    desc: '这是一句话模块介绍这是一句话模块介绍这是一句话模块介',
    link: '/',
    disabled: false,
    id: 2,
  },
  {
    icon: 'https://ws4.sinaimg.cn/large/006tNc79ly1g1wkozvgoxj305k05k3yj.jpg',
    title: '热度关注',
    desc: '这是一句话模块介绍这是一句话模块介绍这是一句话模块介',
    // eslint-disable-next-line no-script-url
    link: 'javascript:void(0)',
    disabled: false,
    id: 3,
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
                <a href={item.link}>更多</a>,
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

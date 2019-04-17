

import React from 'react';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';
import {
  Layout, Dropdown, Icon, Menu, LocaleProvider,
} from 'antd';
import router from 'umi/router';
import { urlToList } from '@/utils/util';
import menuConfig from '@/config/menu';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import styles from './index.less';

const { Content, Header } = Layout;
const { SubMenu } = Menu;

@withRouter
@connect()
class GlobalLayout extends React.Component {
  logout = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/frontEndLogout',
    });
  }

getMenu = () => {
  return (
    <Menu style={{ width: '244px', padding: '0' }}>
      <Menu.Item
        key='logout'
        onClick={this.logout}
        style={{ padding: '12px' }}
      >
        <Icon type='logout' /> 退出登录
      </Menu.Item>
    </Menu>
  );
}

 onMenuClick = (url) => {
   router.push(url);
 }

renderChildMenu = (currMenu, urlList) => {
  return Object.keys(currMenu.children).map(childkey => {
    const key = `${currMenu.url}${currMenu.children[childkey].url}`;
    const currChildKey = currMenu.children[childkey].url.replace('/', '');
    return (
      <Menu.Item
        className={`${styles.menuChildLi} ${urlList.includes(currChildKey) && styles.menuChildLiActive}`}
        key={key}
        id={childkey}
        onClick={() => { this.onMenuClick(key); }}
      >
        {currMenu.children[childkey].name}
      </Menu.Item>
    );
  });
}

gohome=() => {
  router.push('/indexpage');
}

render() {
  const { location: { pathname }, children } = this.props;
  const dropDownMenu = this.getMenu();
  const urlList = urlToList(pathname);
  const sk = (() => {
    // if (urlList[0] === 'factor' || urlList[0] === 'strategy') {
    //   return `/${urlList[0]}/${urlList[1]}`;
    // }
    return `/${urlList[0]}`;
  })();
  const menu = Object.keys(menuConfig)
    .map(key => {
      // if (!menuConfig[key].authority) {
      return (
        menuConfig[key].children ? (
          <SubMenu title={<span>{menuConfig[key].name}</span>} key={menuConfig[key].url} id={key}>
            {this.renderChildMenu(menuConfig[key], urlList)}
          </SubMenu>
        ) : (
          <Menu.Item
            key={menuConfig[key].url}
            id={key}
          >{menuConfig[key].name}
          </Menu.Item>
        )
      );
      // }
      // return null;
    });
  if (pathname === '/user/login') {
    return <React.Fragment>{ children }</React.Fragment>;
  }

  return (
    <LocaleProvider locale={zhCN}>
      <Layout className={styles.layout}>

        <Header>
          <div
            className={styles.header}
          >
            {/* <div className={styles.logo}><img alt='logo' src={logo} /></div> */}
            {pathname !== '/indexpage' && (
            <Menu
              mode='horizontal'
              theme='dark'
              selectedKeys={[sk]}
              style={{ lineHeight: '64px' }}
              className={styles.menu}
              onClick={({ key }) => { this.onMenuClick(key); }}
            >
              {menu}
            </Menu>)
          }

            <div className={styles.headerRight}>
              {pathname !== '/indexpage' && (
              <span className={styles.backhome} onClick={this.gohome}><Icon type="home" style={{ marginRight: 12 }} />返回首页</span>)
          }
              <span>
                <Dropdown
                  overlay={dropDownMenu}
                  placement="bottomRight"
                >
                  <span className={styles.account}>
                    {/* <ZetIcon type='zeticon-Artboard1' /> */}
                    <span
                      className={styles.name}
                      style={{ marginLeft: 8 }}
                    > liming
                    </span>
                  </span>
                </Dropdown>
              </span>

            </div>
          </div>
        </Header>
        <Content className={styles.content}>{this.props.children}</Content>
      </Layout>
    </LocaleProvider>
  );
}
}

export default GlobalLayout;

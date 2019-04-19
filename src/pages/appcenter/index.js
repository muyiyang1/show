import React from 'react';
import { connect } from 'dva';
import { Col,Row,Card,Icon} from "antd";
import router from 'umi/router';
import WordcloudChart from "../wordcloud";
import styles from './index.less'



@connect()
class AppCenter extends React.Component {
  hot=()=>{
    router.push('appcenter/hot')
  }
  negative=()=>{
     router.push('appcenter/negative')
  }
  wordcloud=()=>{
     router.push('appcenter/wordcloud')
  }
  new=()=>{
     router.push('appcenter/new')
  }
  knowledgemap=()=>{
     router.push('appcenter/knowledgemap')
  }
  heattrend=()=>{
     router.push('appcenter/heattrend')
  }
  render() {

    const hotlistdata = {
       "rows":[
          {"id":1,"stocksName":"平安银行","heat":100,"heattrend":0},
          {"id":2,"stocksName":"中兴通讯","heat":99,"heattrend":0},
          {"id":3,"stocksName":"中国宝安","heat":98,"heattrend":1},

       ]
      }

     const discussdata = {
       "rows":[
          {"id":1,"stocksName":"银鸽投资","heat":100,"heattrend":1},
          {"id":2,"stocksName":"平安银行","heat":99,"heattrend":1},
          {"id":3,"stocksName":"中国宝安","heat":98,"heattrend":0},

       ]
      }

    return (
      <div className='normal'>
        <Card
          title={<span>热门个股<span onClick={this.hot} style={{float:'right',fontWeight:100,cursor:'pointer',fontSize:14}}>更多</span></span>}
          bordered={false}
          style={{marginBottom:24}}
        >
          <Row gutter={48}>
            <Col span={6}>
                <div className={styles.card}>
                  <span>个股舆论热度排行</span>
                  {hotlistdata.rows.map(item=>{
                    return (
                      <div className={styles.list}>
                        {item.stocksName}
                         {item.heattrend ===0 ?
                         <Icon type="arrow-up" style={{color:'red',lineHeight:'40px',float:'right'}}/>:
                         <Icon type="arrow-down" style={{color:'green',lineHeight:'40px',float:'right'}}/>}
                      </div>
                    )
                  })}
                </div>
            </Col>
             <Col span={6}>
                <div className={styles.card}>
                  <span>个股讨论热度排行</span>
                  {discussdata.rows.map(item=>{
                    return (
                      <div className={styles.list}>
                        {item.stocksName}
                         {item.heattrend ===0 ?
                         <Icon type="arrow-up" style={{color:'red',lineHeight:'40px',float:'right'}}/>:
                         <Icon type="arrow-down" style={{color:'green',lineHeight:'40px',float:'right'}}/>}
                      </div>
                    )
                  })}
                </div>
            </Col>
          </Row>
        </Card>
        <Card
         title={<span>综合词云<span onClick={this.wordcloud} style={{float:'right',fontWeight:100,cursor:'pointer',fontSize:14}}>更多</span></span>}
          bordered={false}
          style={{marginBottom:24}}
        >
        <Row gutter={48}>
          <Col span={6}>
            <WordcloudChart height={240}/>
          </Col>
        </Row>

        </Card>
         <Card
         title={<span>负面舆情<span onClick={this.negative} style={{float:'right',fontWeight:100,cursor:'pointer',fontSize:14}}>更多</span></span>}
          bordered={false}
          style={{marginBottom:24}}
        >
        </Card>
         <Card
         title={<span>新兴概念<span onClick={this.new} style={{float:'right',fontWeight:100,cursor:'pointer',fontSize:14}}>更多</span></span>}
          bordered={false}
          style={{marginBottom:24}}
        >
        </Card>
         <Card
         title={<span>热度趋势<span onClick={this.heattrend} style={{float:'right',fontWeight:100,cursor:'pointer',fontSize:14}}>更多</span></span>}
          bordered={false}
          style={{marginBottom:24}}
        >
        </Card>
         <Card
         title={<span>知识图谱<span onClick={this.knowledgemap} style={{float:'right',fontWeight:100,cursor:'pointer',fontSize:14}}>更多</span></span>}
          bordered={false}
          style={{marginBottom:24}}
        >
        </Card>

      </div>
    );
  }
}

export default AppCenter;

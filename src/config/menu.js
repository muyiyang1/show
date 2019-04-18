export default {
  datamarket: {
    url: '/datamarket',
    name: '数据市场',
    // intlkey: 'dashboard',
    icon: '',
  },
  appcenter: {
    url: '/appcenter',
    name: '应用中心',
    icon: '',
    children: {
      hot: {
        url: '/hot',
        name: '热门个股',
        icon: '',
      },
      wordcloud: {
        url: '/wordcloud',
        name: '综合词云',
        icon: '',
      },
      negative:{
        url: '/negative',
        name: '负面舆情',
        icon: '',
      },
      emerging:{
        url: '/emerging',
        name: '新兴概念',
        icon: '',
      },
      heattrend:{
        url: '/heattrend',
        name: '热度趋势',
        icon: '',
      },
      knowledge:{
        url: '/knowledge',
        name: '知识图谱',
        icon: '',
      }
    },
  },


};

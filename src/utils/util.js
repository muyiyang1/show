// import parser from 'intl-messageformat-parser';
import moment from 'moment';
import uuidv4 from 'uuid/v4';
// import localStorage from 'utils/localStorage';
// import { queryList } from 'services/tag';
// import intl from 'utils/intl';

/**
 * 生成UUID
 */
export const UUID = () => {
  return uuidv4();
};
/**
 * URL拆分
 * @param {*} url URL
 */
export function urlToList(url) {
  const urllist = url.split('/').filter(i => i);
  return urllist;
}
/**
 * 获取服务器当前时间
 */
export const getServerCurrentTime = () => {
  const { timeOffest } = window.g_app._store.getState().global;
  return moment(new Date()).add(timeOffest, 'milliseconds');
};

/**
 * 在新窗口打开url
 */
export const openNewWindow = (url) => {
  window.open(url);
};

/**
 * 日期格式化
 * @param {String, timestamp} data
 * @param {String} type
 * @param {String} durtionFormat
 */
export const DateTimeFormat = (data, type, durtionFormat = 'ms', show) => {
  if (type === 'date') {
    return moment(data).format('YYYY/MM/DD');
  }
  if (type === 'fromNow') {
    return moment(data).fromNow();
  }
  if (type === 'durtion') {
    const startTime = moment(data[0]);
    const endTime = moment(data[1]);
    if (durtionFormat) {
      return moment.duration(endTime - startTime, durtionFormat);
    }
    return moment.duration(endTime - startTime);
  }
  let du = null;
  if (type === 'hms') {
    if (data && data.length > 0 && data[1]) {
      const startTime = moment(data[0]);
      const endTime = moment(data[1]);
      du = moment.duration(endTime - startTime, durtionFormat);
    } else {
      du = moment.duration(data, durtionFormat);
    }
    const Y = du.get('years');
    const M = du.get('months');
    const D = du.get('days');
    const h = du.get('hours');
    const m = du.get('minutes');
    const s = du.get('seconds');
    const ms = du.get('millisecond');
    if (show === 'hms') {
      return `${h > 9 ? h : `0${h}`}:${m > 9 ? m : `0${m}`}:${s > 9 ? s : `0${s}`}`;
    }
    let v = '';
    if (Y) { v += `${Y}Y `; }
    if (M) { v += ` ${M}M `; }
    if (D) { v += ` ${D}D `; }
    if (h) { v += ` ${h}h `; }
    if (m) { v += ` ${m}m `; }
    if (s) {
      const value = ms ? s + ms / 1000 : s;
      v += ` ${value !== parseInt(value, 10) ? value.toFixed(2) : value}s`;
    } else if (ms) {
      const value = ms / 1000;
      v += `${value !== parseInt(value, 10) ? value.toFixed(2) : value}s`;
    }
    if (!v) return '--';
    return v;
  }
  if (type === 'bar') {
    return moment(data).format('YYYY-MM-DD HH:mm:ss');
  }
  return moment(data).format('YYYY/MM/DD HH:mm:ss');
};

/**
 * 替换字符串中的 {} 内容
 * @param {*} cString 字符串
 * @param {*} obj
 */
// export const replaceStringBrace = (cString, obj) => {
//   let result = '';
//   const hasValue = obj && Object.keys(obj).length > 0;
//   if (hasValue) {
//     const { elements } = parser.parse(cString);
//     elements.forEach(item => {
//       if (item.type === 'argumentElement') {
//         result += obj[item.id];
//       } else {
//         result += item.value;
//       }
//     });
//   } else {
//     result = cString;
//   }
//   return result;
// };

// 验证交互探索上传文件名称
export const checkStrProbe = (str) => {
  const reg = /^[a-zA-Z0-9\u4e00-\u9fa5][\w\u4e00-\u9fa5\-\\.]*$/;
  if (!reg.test(str)) {
    return false;
  }
  return true;
};
export const numberUnit = (number) => {
  const { lang } = window.g_app._store.getState().global;
  if (lang === 'zh-CN') {
    if (number <= 10000) {
      return number;
    }
    if (number > 10000 && number < 100000000) {
      return `${(number / 10000).toFixed(2)}万`;
    }
    if (number >= 100000000) {
      return `${(number / 100000000).toFixed(2)}亿`;
    }
  } else if (lang === 'en-US') {
    if (number <= 1000) {
      return number;
    }
    if (number > 1000 && number < 1000000) {
      return `${(number / 1000).toFixed(2)}k`;
    }
    if (number >= 1000000 && number < 1000000000) {
      return `${(number / 100000000).toFixed(2)}m`;
    }
    if (number >= 1000000000) {
      return `${(number / 100000000).toFixed(2)}b`;
    }
  }

  return '-';
};

/**
 * 全局文件大小换算
 * @param {*} bytes 字节数
 */
export const fileSize = (bytes) => {
  if (bytes === 0 || !bytes) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / (k ** i)).toFixed(1)}  ${sizes[i]}`;
};

/**
 * 全局文件大小换算
 * @param {*} bytes 字节数
 */
export const fileSizes = (bytes) => {
  if (bytes === 0 || !bytes) return '--';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / (k ** i)).toFixed(1)}  ${sizes[i]}`;
};
/**
 * 转换单位 G
 * @param {*} size
 */
export const convertMem = (size) => {
  return Number.isNaN(size) ? 0 : (size / 1024).toFixed(2) * 100 / 100;
};

/**
 * 单位 G 转换成 M
 */
export const convertGByM = (size) => {
  return (size * 1024).toFixed(2) * 100 / 100;
};


const checkNumber = (theObj) => {
  const reg = /^[0-9]+.?[0-9]*$/;
  if (reg.test(theObj)) {
    return true;
  }
  return false;
};

export const checkStrInS = (str) => {
  const reg = /^[a-zA-Z0-9\u4e00-\u9fa5][\w\u4e00-\u9fa5\-\\.]*$/;
  if (!reg.test(str)) {
    return false;
  }
  if (checkNumber(str)) {
    return false;
  }
  return true;
};

export const trimNumber = (str) => {
  return str.replace(/\d+/g, '');
};
/**
 * onchange 的延时操作
 */
export const delayChange = (() => {
  let timer = null;
  return (fn, value) => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn(value);
      clearTimeout(timer);
      timer = null;
    }, 300);
  };
})();

/**
 * 格式化日期
 * @param {*} date
 * @param {*} format
 */
export const dateFormat = (date, format = 'YYYY-MM-DD HH:mm:ss', type) => {
  if (type === 'fuzzy') {
    return moment(date, format).fromNow();
  }
  return moment(date).format(format);
};

/**
 * 判断是否为数字
 * @param {*} number
 */
export const isNumber = (number) => {
  const regPos = /^\d+(\.\d+)?$/; // 非负浮点数
  const regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; // 负浮点数
  if (regPos.test(number) || regNeg.test(number)) {
    return true;
  }
  return false;
};

/**
 * 快速排序
 * @param {*} arr
 */
export const quickSort = (arr) => {
  // 如果数组<=1,则直接返回
  if (arr.length <= 1) { return arr; }
  const pivotIndex = Math.floor(arr.length / 2);
  // 找基准，并把基准从原数组删除
  const pivot = arr.splice(pivotIndex, 1)[0];
  // 定义左右数组
  const left = [];
  const right = [];

  // 比基准小的放在left，比基准大的放在right
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // 递归
  return quickSort(left).concat([pivot], quickSort(right));
};

/**
 * 小数转换为百分数
 */
export const toPercent = (number, dec = 0) => {
  return `${Number(number * 100).toFixed(dec)}%`;
};

export const randomHexColor = () => { // 随机生成十六进制颜色
  let hex = Math.floor(Math.random() * 16777216).toString(16); // 生成ffffff以内16进制数
  while (hex.length < 6) { // while循环判断hex位数，少于6位前面加0凑够6位
    hex = `0${hex}`;
  }
  return `#${hex}`; // 返回#开头16进制颜色
};


export const setName = (name, arr) => {
  const ar = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.indexOf(name) !== -1) {
      if (arr[i].name.indexOf('-', name.length) !== -1) {
        const num = Number(arr[i].name.split('-')[arr[i].name.split('-').length - 1]);
        if (num) {
          ar.push(num);
        }
      } else {
        ar.push(0);
      }
    }
  }
  ar.sort((x, y) => { return y - x; });
  return ar[0] || ar[0] === 0 ? `${name}-${ar[0] + 1}` : name;
};

export const getTypeEnum = (detailData) => {
  let sum = 0;
  detailData.analysisData.length > 0 && (sum += 1);
  detailData.datasetData.length > 0 && (sum += 2);
  detailData.workflowData && (sum = 4);
  return [0, 1, 2, 4, 3].indexOf(sum);
};

export const zetSetInterval = (action, ms) => {
  action();
  return setInterval(action, ms);
};


/**
 * 获取 localStorage pageSize
 */
// export const getStorageTableSize = () => {
//   const tablePageSize = localStorage.get('table-page-size');
//   return (tablePageSize && parseInt(tablePageSize, 10)) || 10;
// };

export const getGlobalVariableName = () => {
  return '__global__';
};

/**
 * 'HH-mm-ss' -> timestamp
 */
export const momentToTimerStamp = (string, format) => {
  return moment(string, format).valueOf();
};

// export const queryTags = async (type) => {
//   const params = {
//     typeId: type,
//     pageIndex: 1,
//     pageNum: 9999,
//   };
//   let tags = [];
//   const res = await queryList(params);
//   if (res && res.rows) {
//     res.rows = res.rows.map(r => {
//       return {
//         title: r.name,
//         key: r.id,
//         value: r.id,
//       };
//     });
//     tags = res.rows;
//   }
//   return tags;
// };

// 分析模块main文件名称
export const mainFileName = () => {
  return ['main.py', 'main.R'];
};

/**
 * 退出页面提示
 */
// export const windowConfirm = (onOk, onCancel) => {
//   const message = () => {
//     const leave = window.confirm(intl.get('project.isSaveConfig'));
//     if (leave) {
//       onOk && onOk();
//     } else {
//       onCancel && onCancel();
//     }
//     return true;
//   };
//   return message;
// };

/**
 * 1 minutes => 60s
 */
export const timerStringTransfer = (timeNum = 0, unit = 'seconds') => {
  return Number(timeNum) * { seconds: 1, minutes: 60, hours: 60 * 60 }[unit];
};

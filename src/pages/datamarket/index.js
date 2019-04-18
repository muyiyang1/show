import React from 'react';
import { connect } from 'dva';

@connect()
class DataMarket extends React.Component {
  render() {
    return (
      <div className='normal'>
        DataMarket
      </div>
    );
  }
}

export default DataMarket;

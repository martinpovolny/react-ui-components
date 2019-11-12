import * as ReactDOM from 'react-dom';
import * as React from 'react';
// import { GTLView, TileView } from '../src/gtl';
import { StaticGTLView } from '../src/gtl/StaticGTLView';

console.log('StaticGTLView:', StaticGTLView);

const gtlData = require('../src/gtl/data/gtl-small.json');

const settings = {
  sortObject: {
    isAscending: false,
    sortObject: {
      col_idx: 1,
    },
  },
};

const wrapperComponent = () => (
  <React.Fragment>
    <h1>TileView</h1>
    <div className="foobar">
      <StaticGTLView
        gtlType="list"
        settings={settings}
        head={gtlData.data.head}
        rows={gtlData.data.rows}
        onItemSelect={arg => console.log('onItemSelect: ', arg)}
      />
    </div>
    <h1>GridView</h1>
    <div className="foobar">
      <StaticGTLView
        gtlType="grid"
        settings={settings}
        head={gtlData.data.head}
        rows={gtlData.data.rows}
        onItemSelect={arg => console.log('onItemSelect: ', arg)}
      />
    </div>
  </React.Fragment>
);

export default function renderApp() {
  ReactDOM.render(
    wrapperComponent(),
    document.getElementById('demo-app'),
  );
}

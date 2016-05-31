'use strict'

import './picture/ErminePic.jpg';
import './HelloClass.less';
import './ErminesoftClass.scss';

// let Loader = require('react-loader');
let React = require('react');
let ReactDOM = require('react-dom')

var showerMessage = React.createClass({
  render: function(){
    return (
      // <div> Покажись, пожалуйста!</div>
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
          <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        </Row>
      </Grid>
    );
  }
});
ReactDOM.render(
  <showerMessage />,
  document.getElementById('root')
);

// console.log(showerMessage);

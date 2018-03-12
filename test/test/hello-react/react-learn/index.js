// import { React } from "react";
// import { ReactDOM } from "react-dom";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// class Content extends React.Component{
//     constructor(str) {
//         super(str);
//         this.state.str = str;
//     }
//     render() {
//         return  <h1>{this.state.str}</h1>
//     }
// }

// const renderContent = (str) => {
//     let Header = new Content(str);
//     ReactDOM.render(
//         Header,
//         document.getElementById('root')
//     )
// }
// renderContent('达理')


// export default Content


// import React, { Component } from 'react'
// import ReactDOM from 'react-dom' //可以帮助我们把 React 组件渲染到页面上去，没有其它的作用了

// class Header extends Component {
//   render () {
//     return (
//       <div>
//         <h1>React 小书</h1>
//       </div>
//     )
//   }
// }



// 课后练习一

function renderContent (content) {
    ReactDOM.render(<h1>{content}</h1>, document.getElementById('root'))
}
  
renderContent('达理')


// 课后练习二
class Notification extends Component {
    render () {
      // TODO
      const unreadNumber = getNotificationsCount()
      return (
          <div>
            {   unreadNumber>0 ?
                <span>有(N)条未读消息</span>
                :<span>没有未读消息</span>
            }
          </div>
      )
    }
}
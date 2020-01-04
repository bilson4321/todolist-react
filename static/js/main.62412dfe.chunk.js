(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(8),r=a.n(s),l=a(9),o=a(1),i=a(2),u=a(4),m=a(3),d=a(5),h=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("header",{className:"bg-dark text-white mb-2"},c.a.createElement("div",{className:"container p-3"},c.a.createElement("h1",null,"TO-DO List")))}}]),t}(c.a.Component),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).changeState=function(){a.setState({completed:!a.state.completed})},a.deleteTask=function(e){a.props.deleteTask(e)},a.state={id:a.props.item.id,title:a.props.item.title,completed:a.props.item.completed},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"custom-control custom-checkbox mb-1",onClick:this.changeState},c.a.createElement("input",{className:"custom-control-input",type:"checkbox",onChange:this.changeState,checked:this.state.completed}),c.a.createElement("label",{className:"custom-control-label"},this.state.completed?c.a.createElement("del",null,this.state.title):this.state.title),c.a.createElement("button",{className:"float-right",onClick:function(){return e.deleteTask(e.state.id)}},"X"))}}]),t}(c.a.Component),b=function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("article",null,c.a.createElement("div",{className:"container"},c.a.createElement("ul",{className:"list-group"},this.props.todoTask.map((function(t){return c.a.createElement("li",{className:"list-group-item",key:t.id},c.a.createElement(p,{item:t,deleteTask:e.props.deleteTask}))})))))}}]),t}(c.a.Component),k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).changeSearchQuery=function(t){e.props.changeSearchKeyWord(t.target.value),e.setState({searchQuery:t.target.value})},e.state={searchQuery:""},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container mb-4"},c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search tasks.....",onChange:this.changeSearchQuery}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{className:"btn btn-success",type:"submit"},"Search"))))}}]),t}(c.a.Component),f=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).buttonClick=function(t){e.props.view(t)},e.handleTaskInput=function(t){e.setState({taskInput:t.target.value})},e.addTask=function(t){t.preventDefault(),e.setState({taskInput:""}),e.props.addTask(e.state.taskInput)},e.state={showForm:!1,taskInput:""},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container mb-4"},c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(t){return e.buttonClick("all")}},"All"),c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(t){return e.buttonClick("completed")}},"Completed"),c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(t){return e.buttonClick("pending")}},"Not Completed")),c.a.createElement("button",{type:"button",className:"btn btn-primary float-right"},"Add Task")),c.a.createElement("div",{className:"container mb-2"},c.a.createElement("form",null,c.a.createElement("div",{className:"input-group"},c.a.createElement("label",{htmlFor:"task"},"Task : "),c.a.createElement("input",{id:"task",className:"form-control",type:"text",placeholder:"Task",onChange:this.handleTaskInput}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{className:"btn btn-success",type:"submit",onClick:this.addTask},"Add"))))))}}]),t}(c.a.Component),v=a(6),E=a.n(v),g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).changeSearchQuery=function(t){e.setState({searchKeyWord:t})},e.changeView=function(t){e.setState({view:t})},e.addNewTask=function(t){var a={id:E()(),title:t,completed:!1};e.setState({tasks:[].concat(Object(l.a)(e.state.tasks),[a])})},e.deleteTask=function(t){var a=e.state.tasks.find((function(e){return e.id===t})),n=e.state.tasks.filter((function(e){return e!==a}));e.setState({tasks:n})},e.state={tasks:[{id:E()(),title:"Cook breakFast",completed:!1},{id:2,title:"Go to College",completed:!1},{id:E()(),title:"Study in College",completed:!0}],view:"all",searchKeyWord:""},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t="";return t=(t="completed"===this.state.view?this.state.tasks.filter((function(e){return!0===e.completed})):"pending"===this.state.view?this.state.tasks.filter((function(e){return!1===e.completed})):this.state.tasks).filter((function(t){return t.title.includes(e.state.searchKeyWord)})),c.a.createElement(c.a.Fragment,null,c.a.createElement(h,null),c.a.createElement(f,{view:this.changeView,addTask:this.addNewTask}),c.a.createElement(k,{changeSearchKeyWord:this.changeSearchQuery}),c.a.createElement(b,{todoTask:t,deleteTask:this.deleteTask}))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);r.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.62412dfe.chunk.js.map
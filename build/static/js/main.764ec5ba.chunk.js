(this.webpackJsonphackernews=this.webpackJsonphackernews||[]).push([[0],{30:function(e,t){e.exports="data:image/gif;base64,R0lGODlhCgAKALMJANPT06enp/b29r+/v52dnfn5+bq6usLCwpqamv///wAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAkALAAAAAAKAAoAAAQcMMlJq712GIzQDV1QFV0nUETZTYDaAdIhz3ISAQA7"},38:function(e,t,a){e.exports=a(70)},43:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},62:function(e,t,a){},64:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(27),s=a.n(r),c=(a(43),a(34)),l=(a(44),a(11)),i=a(12),u=a(28),h=a.n(u),d=new(function(){function e(){Object(l.a)(this,e),this.apiurl="https://hn.algolia.com/api/v1/search?page="}return Object(i.a)(e,[{key:"getRecords",value:function(e){return h.a.get("https://hn.algolia.com/api/v1/search?page="+e)}}]),e}()),m=(a(62),a(8)),p=a(13),v=a(37),b=a(35),f=(a(63),a(36)),A=(a(64),a(29)),g=a.n(A),E=a(30),w=a.n(E),y=a(2),k=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state=null,n.state={pageID:null,data:{},chartdata:[{color:"steelblue",points:[]}]},n.HideClick=n.HideClick.bind(Object(p.a)(n)),n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){e&&this.props.pageIndex!=e.pageIndex&&(console.log("previous",e),this.getValuesFromAPi(this.props.pageIndex))}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.passParent(e)}},{key:"getValuesFromAPi",value:function(e){var t=this;d.getRecords(e).then((function(e){t.setState({data:Object(m.a)({},e.data)})}))}},{key:"updateChart",value:function(){if(this.state.data.hits&&this.state.data.hits instanceof Array){var e=0;this.state.chartdata[0].points=this.state.data.hits.filter((function(e){return 1!=e.hiderow})).map((function(t){return e+=1,{id:t.objectID,x:e,y:t.votecount}}))}}},{key:"HideClick",value:function(e){}},{key:"rendertableRow",value:function(){var e=this;if(this.state.data.hits&&this.state.data.hits instanceof Array)return o.a.createElement("tbody",null,this.state.data.hits.map((function(t,a){var n=function(e){var t=e.objectID+"less",a=e.objectID+"vote",n=e.objectID+"vote";localStorage.hasOwnProperty(t)&&(e.show=localStorage.getItem(t));localStorage.hasOwnProperty(n)&&(e.hiderow=localStorage.getItem(n));localStorage.hasOwnProperty(a)&&(e.votecount=parseInt(localStorage.getItem(a)));return{voteKey:a,lessKey:t,hiderowKey:n}}(t),r=n.voteKey,s=n.lessKey,c=n.hiderowKey;if(t.votecount=void 0==t.votecount?0:t.votecount,t.show=void 0==t.show?0:t.show,t.hiderow=void 0==t.hiderow?0:t.hiderow,a==e.state.data.hits.length-1&&e.updateChart(),1!=t.hiderow)return o.a.createElement("tr",{key:a},o.a.createElement("td",null,t.num_comments),o.a.createElement("td",null,t.votecount),o.a.createElement("td",null,o.a.createElement("span",{className:"up-arrow",onClick:function(){t.votecount=t.votecount+1,localStorage.setItem(r,t.votecount),e.setState({data:Object(m.a)({},e.state.data)})}},o.a.createElement("img",{src:w.a}))),o.a.createElement("td",{align:"left"},t.title,0==t.show&&o.a.createElement("section",{className:"detail-section"},o.a.createElement("span",{className:"url"},"(",t.url?t.url.replace("http://","").replace("https://","").split(/[/?#]/)[0]:"",")"),o.a.createElement("span",{className:"by"},"by"),o.a.createElement("span",{className:"author"},t.author),o.a.createElement("span",{className:"time"},Math.trunc((new Date-new Date(1e3*t.created_at_i))/36e5)," hours ago")),o.a.createElement("section",{className:"detail-section"}," ",0==t.show?o.a.createElement("a",{onClick:function(){t.show=1,localStorage.setItem(s,t.show),e.setState({data:Object(m.a)({},e.state.data)})}},"[ less ]"):o.a.createElement("a",{onClick:function(){t.show=0,localStorage.setItem(s,t.show),e.setState({data:Object(m.a)({},e.state.data)})}.bind(e)},"[ more ]"),o.a.createElement("a",{onClick:function(){t.hiderow=1,localStorage.setItem(c,t.hiderow),e.setState({data:Object(m.a)({},e.state.data)})}.bind(e)},"[ Hide ]"))))})))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("span",null,"Active page :  ",this.props.pageIndex),o.a.createElement(f.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},o.a.createElement("thead",{className:"table-header"},o.a.createElement("tr",null,o.a.createElement("th",null,"Comments"),o.a.createElement("th",null,"Vote Count"),o.a.createElement("th",null,"Up Vote"),o.a.createElement("th",null,"News"))),this.rendertableRow()),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("section",null,o.a.createElement(g.a,{width:1200,height:400,ticks:100,yMin:-5,pointRadius:4,data:this.state.chartdata,xParser:function(e){return e},yLabel:"votes",xLabel:"ID",xDisplay:function(t){if(t%1==0&&e.state.chartdata[0].points)return console.log(e.state.chartdata[0].points[t-1].id),t},interpolate:"cardinal",showLegends:!0,labelClass:"svg-line-chart-label"})))}}]),a}(n.Component),I=Object(y.g)(k);var j=function(e){var t=Object(y.f)(),a=Object(n.useState)(null),r=Object(c.a)(a,2),s=r[0],l=r[1],i=function(e){l(parseInt(e))};return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},"Sapient Test"),o.a.createElement(y.b,{exact:!0,path:"/",render:function(){return o.a.createElement(y.a,{to:"/1"})}}),o.a.createElement(y.b,{path:"/:id",render:function(e){return o.a.createElement(I,Object.assign({},e,{pageIndex:s,passParent:i}))}}),o.a.createElement("footer",{className:"footer-section"},o.a.createElement("button",{disabled:s<=1,className:"btn btn-nav",onClick:function(){var e=parseInt(s)-1;e<=0&&(e=1),t.push("/"+e),l(e)}},"Prev")," \xa0",o.a.createElement("span",{className:"pipe-line"}," |")," \xa0",o.a.createElement("button",{disabled:s>=20,className:"btn btn-nav",onClick:function(){var e=parseInt(s)+1;e>=20&&(e=20),t.push("/"+e),l(e)}},"Next")),o.a.createElement("hr",{className:"line-brk"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(10);s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O.a,null,o.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.764ec5ba.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),u=a(5),m=a(7),o=a(1),i=a(2),d=a.n(i),s=a(6),E=Object(s.union)(["AddTrack","RemoveTrack","SetTrackName","SetStartTrack","SetEndTrack","ToggleJSON"]),k=(new Date).toISOString(),S=[{tracks:[{date:k,name:"Time track loaded \u2013 jew.ski/time-track"}],startTrack:k,endTrack:k,isJSON:!1}],f=function(e,t){return[E.match(e,{AddTrack:function(){var e=(new Date).toISOString(),a={date:e,name:e};return Object(o.a)({},t,{tracks:[a].concat(Object(m.a)(t.tracks))})},RemoveTrack:function(e){return Object(o.a)({},t,{tracks:t.tracks.filter(function(t){return t.date!==e})})},SetTrackName:function(e){var a=e.date,n=e.name;return Object(o.a)({},t,{tracks:t.tracks.map(function(e){return e.date===a?Object(o.a)({},e,{name:n}):e})})},SetStartTrack:function(e){return Object(o.a)({},t,{startTrack:e})},SetEndTrack:function(e){return Object(o.a)({},t,{endTrack:e})},ToggleJSON:function(){return Object(o.a)({},t,{isJSON:!t.isJSON})}})]},T=function(e,t){var a;if(e.startTrack&&e.endTrack){var n=Math.abs(new Date(e.startTrack).valueOf()-new Date(e.endTrack).valueOf());a=d.a.duration(n)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"toolbar"},r.a.createElement("button",{onClick:function(){return t(E.AddTrack())}},"Record current time"),r.a.createElement("label",{className:"check"},r.a.createElement("input",{type:"checkbox",value:e.isJSON,onClick:function(){return t(E.ToggleJSON())}}),"Toggle JSON")),a&&r.a.createElement("div",{className:"duration"},r.a.createElement("p",null,"Duration between A and B"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Hours"),r.a.createElement("td",null,r.a.createElement("code",null,a.asHours().toFixed(5)))),r.a.createElement("tr",null,r.a.createElement("td",null,"Minutes"),r.a.createElement("td",null,r.a.createElement("code",null,a.asMinutes().toFixed(5)))),r.a.createElement("tr",null,r.a.createElement("td",null,"Seconds"),r.a.createElement("td",null,r.a.createElement("code",null,a.asSeconds().toFixed(5))))))),e.isJSON?r.a.createElement("pre",null,JSON.stringify(e.tracks,null,2)):r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"A"),r.a.createElement("th",null,"B"),r.a.createElement("th",null,"Recorded Time"))),r.a.createElement("tbody",null,e.tracks.map(function(a){return r.a.createElement("tr",{key:a.date},r.a.createElement("td",null,r.a.createElement("button",{title:"Set as A time",onClick:function(){return t(E.SetStartTrack(a.date))}},a.date===e.startTrack?"A":"-")),r.a.createElement("td",null,r.a.createElement("button",{title:"Set as B time",onClick:function(){return t(E.SetEndTrack(a.date))}},a.date===e.endTrack?"B":"-")),r.a.createElement("td",{style:{width:"100%"}},r.a.createElement("div",{className:"time-item"},r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:a.name,onChange:function(e){return t(E.SetTrackName({date:a.date,name:e.target.value}))}})),r.a.createElement("div",{className:"times"},r.a.createElement("p",null,r.a.createElement("code",null,d()(a.date).format("hh : mm : ss : SSSS"))),r.a.createElement("p",null,d()(a.date).fromNow())))),r.a.createElement("td",null,r.a.createElement("button",{title:"Remove",onClick:function(){return t(E.RemoveTrack(a.date))}},"\u2715")))})))),r.a.createElement("footer",null,r.a.createElement("p",null,"Made by ",r.a.createElement("a",{href:"https://jew.ski"},"Chris Andrejewski"),", view"," ",r.a.createElement("a",{href:"https://github.com/andrejewski/time-track"},"source code"))))};a(17);var b=Object(u.program)(r.a.Component,function(){return{init:S,update:f,view:T}});l.a.render(r.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.e09c7388.chunk.js.map
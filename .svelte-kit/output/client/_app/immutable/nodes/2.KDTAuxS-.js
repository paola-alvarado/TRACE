import{t as G,a as L}from"../chunks/C5CMfB9T.js";import"../chunks/DgCaneqZ.js";import{F as U,z as T,A as Z,g as m,G as j,H as ee,I as O,J as D,K as C,L as x,M as ae,N as P,O as W,P as re,Q as N,R as X,e as V,T as ne,V as te,s as Y,W as le,X as ie,Y as se,Z as ue,_ as fe,$ as ve,a0 as oe,a1 as ce,i as _e,a2 as $,C as de,D as B,v as w,E as pe,q as R,a3 as he,a4 as me,w as S,c as ge}from"../chunks/Bh_pQRl2.js";import{l as be,e as ye,s as Ee}from"../chunks/DYPMIxbg.js";import{i as Te}from"../chunks/CzQvxr8r.js";import{i as xe}from"../chunks/BmalmlnO.js";import{g as Ae}from"../chunks/BNWC5ssn.js";function ke(a,e){return e}function Ie(a,e,r,t){for(var i=[],s=e.length,u=0;u<s;u++)ie(e[u].e,i,!0);var d=s>0&&i.length===0&&r!==null;if(d){var _=r.parentNode;se(_),_.append(r),t.clear(),E(a,e[0].prev,e[s-1].next)}ue(i,()=>{for(var p=0;p<s;p++){var n=e[p];d||(t.delete(n.k),E(a,n.prev,n.next)),fe(n.e,!d)}})}function we(a,e,r,t,i,s=null){var u=a,d={flags:e,items:new Map,first:null};T&&Z();var _=null,p=!1,n=j(()=>{var v=r();return _e(v)?v:v==null?[]:X(v)});U(()=>{var v=m(n),l=v.length;if(p&&l===0)return;p=l===0;let o=!1;if(T){var c=u.data===ee;c!==(l===0)&&(u=O(),D(u),C(!1),o=!0)}if(T){for(var g=null,b,f=0;f<l;f++){if(x.nodeType===8&&x.data===ae){u=x,o=!0,C(!1);break}var h=v[f],k=t(h,f);b=z(x,d,g,null,h,k,f,i,e,r),d.items.set(k,b),g=b}l>0&&D(O())}T||Se(v,d,u,i,e,t,r),s!==null&&(l===0?_?P(_):_=W(()=>s(u)):_!==null&&re(_,()=>{_=null})),o&&C(!0),m(n)}),T&&(u=x)}function Se(a,e,r,t,i,s,u){var d=a.length,_=e.items,p=e.first,n=p,v,l=null,o=[],c=[],g,b,f,h;for(h=0;h<d;h+=1){if(g=a[h],b=s(g,h),f=_.get(b),f===void 0){var k=n?n.e.nodes_start:r;l=z(k,e,l,l===null?e.first:l.next,g,b,h,t,i,u),_.set(b,l),o=[],c=[],n=l.next;continue}if(Me(f,g,h),(f.e.f&N)!==0&&P(f.e),f!==n){if(v!==void 0&&v.has(f)){if(o.length<c.length){var I=c[0],y;l=I.prev;var H=o[0],M=o[o.length-1];for(y=0;y<o.length;y+=1)F(o[y],I,r);for(y=0;y<c.length;y+=1)v.delete(c[y]);E(e,H.prev,M.next),E(e,l,H),E(e,M,I),n=I,l=M,h-=1,o=[],c=[]}else v.delete(f),F(f,n,r),E(e,f.prev,f.next),E(e,f,l===null?e.first:l.next),E(e,l,f),l=f;continue}for(o=[],c=[];n!==null&&n.k!==b;)(n.e.f&N)===0&&(v??(v=new Set)).add(n),c.push(n),n=n.next;if(n===null)continue;f=n}o.push(f),l=f,n=f.next}if(n!==null||v!==void 0){for(var q=v===void 0?[]:X(v);n!==null;)(n.e.f&N)===0&&q.push(n),n=n.next;var K=q.length;if(K>0){var Q=null;Ie(e,q,Q,_)}}V.first=e.first&&e.first.e,V.last=l&&l.e}function Me(a,e,r,t){ne(a.v,e),a.i=r}function z(a,e,r,t,i,s,u,d,_,p){var n=(_&ve)!==0,v=(_&oe)===0,l=n?v?te(i):Y(i):i,o=(_&le)===0?u:Y(u),c={i:o,v:l,k:s,a:null,e:null,prev:r,next:t};try{return c.e=W(()=>d(a,l,o,p),T),c.e.prev=r&&r.e,c.e.next=t&&t.e,r===null?e.first=c:(r.next=c,r.e.next=c.e),t!==null&&(t.prev=c,t.e.prev=c.e),c}finally{}}function F(a,e,r){for(var t=a.next?a.next.e.nodes_start:r,i=e?e.e.nodes_start:r,s=a.e.nodes_start;s!==t;){var u=ce(s);i.before(s),s=u}}function E(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function J(a,e,r){if(a.multiple)return Ne(a,e);for(var t of a.options){var i=A(t);if(Te(i,e)){t.selected=!0;return}}(!r||e!==void 0)&&(a.selectedIndex=-1)}function qe(a,e){$(()=>{var r=new MutationObserver(()=>{var t=a.__value;J(a,t)});return r.observe(a,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{r.disconnect()}})}function Ce(a,e,r=e){var t=!0;be(a,"change",i=>{var s=i?"[selected]":":checked",u;if(a.multiple)u=[].map.call(a.querySelectorAll(s),A);else{var d=a.querySelector(s)??a.querySelector("option:not([disabled])");u=d&&A(d)}r(u)}),$(()=>{var i=e();if(J(a,i,t),t&&i===void 0){var s=a.querySelector(":checked");s!==null&&(i=A(s),r(i))}a.__value=i,t=!1}),qe(a)}function Ne(a,e){for(var r of a.options)r.selected=~e.indexOf(A(r))}function A(a){return"__value"in a?a.__value:a.value}var Re=G("<option> </option>"),He=G('<main class="container svelte-1cif63y"><div class="island svelte-1cif63y"><label for="attack-select">Select an Option:</label> <select id="attack-select" class="svelte-1cif63y"><option disabled selected>Select...</option><!></select> <button class="svelte-1cif63y">Go</button></div></main>');function Ge(a,e){de(e,!1);let r=["Webcrawler","Bruteforcer","ML Algorithm"],t=he("");function i(){m(t)&&Ae(`/${m(t).toLowerCase().replace(/\s+/g,"-")}`)}xe();var s=He(),u=w(s),d=R(w(u),2);B(()=>{m(t),me(()=>{})});var _=w(d);_.value=((_.__value="")==null,"");var p=R(_);we(p,1,()=>r,ke,(v,l)=>{var o=Re(),c={},g=w(o,!0);S(o),B(()=>{c!==(c=m(l))&&(o.value=(o.__value=m(l))==null?"":m(l)),Ee(g,m(l))}),L(v,o)}),S(d);var n=R(d,2);S(u),S(s),Ce(d,()=>m(t),v=>ge(t,v)),ye("click",n,i),L(a,s),pe()}export{Ge as component};

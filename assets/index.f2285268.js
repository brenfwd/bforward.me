const pe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))i(_);new MutationObserver(_=>{for(const r of _)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(_){const r={};return _.integrity&&(r.integrity=_.integrity),_.referrerpolicy&&(r.referrerPolicy=_.referrerpolicy),_.crossorigin==="use-credentials"?r.credentials="include":_.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(_){if(_.ep)return;_.ep=!0;const r=n(_);fetch(_.href,r)}};pe();var $,f,K,Q,P,X,q,Z,O={},ee=[],fe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function w(e,t){for(var n in t)e[n]=t[n];return e}function te(e){var t=e.parentNode;t&&t.removeChild(e)}function F(e,t,n){var i,_,r,l={};for(r in t)r=="key"?i=t[r]:r=="ref"?_=t[r]:l[r]=t[r];if(arguments.length>2&&(l.children=arguments.length>3?$.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)l[r]===void 0&&(l[r]=e.defaultProps[r]);return A(e,l,i,_,null)}function A(e,t,n,i,_){var r={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:_==null?++K:_};return _==null&&f.vnode!=null&&f.vnode(r),r}function he(){return{current:null}}function E(e){return e.children}function I(e,t){this.props=e,this.context=t}function S(e,t){if(t==null)return e.__?S(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?S(e):null}function ne(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ne(e)}}function z(e){(!e.__d&&(e.__d=!0)&&P.push(e)&&!T.__r++||q!==f.debounceRendering)&&((q=f.debounceRendering)||X)(T)}function T(){for(var e;T.__r=P.length;)e=P.sort(function(t,n){return t.__v.__b-n.__v.__b}),P=[],e.some(function(t){var n,i,_,r,l,u;t.__d&&(l=(r=(n=t).__v).__e,(u=n.__P)&&(i=[],(_=w({},r)).__v=r.__v+1,W(u,r,_,n.__n,u.ownerSVGElement!==void 0,r.__h!=null?[l]:null,i,l==null?S(r):l,r.__h),le(i,r),r.__e!=l&&ne(r)))})}function re(e,t,n,i,_,r,l,u,d,h){var o,m,a,c,s,x,v,y=i&&i.__k||ee,b=y.length;for(n.__k=[],o=0;o<t.length;o++)if((c=n.__k[o]=(c=t[o])==null||typeof c=="boolean"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?A(null,c,null,null,c):Array.isArray(c)?A(E,{children:c},null,null,null):c.__b>0?A(c.type,c.props,c.key,null,c.__v):c)!=null){if(c.__=n,c.__b=n.__b+1,(a=y[o])===null||a&&c.key==a.key&&c.type===a.type)y[o]=void 0;else for(m=0;m<b;m++){if((a=y[m])&&c.key==a.key&&c.type===a.type){y[m]=void 0;break}a=null}W(e,c,a=a||O,_,r,l,u,d,h),s=c.__e,(m=c.ref)&&a.ref!=m&&(v||(v=[]),a.ref&&v.push(a.ref,null,c),v.push(m,c.__c||s,c)),s!=null?(x==null&&(x=s),typeof c.type=="function"&&c.__k===a.__k?c.__d=d=oe(c,d,e):d=ie(e,c,a,y,s,d),typeof n.type=="function"&&(n.__d=d)):d&&a.__e==d&&d.parentNode!=e&&(d=S(a))}for(n.__e=x,o=b;o--;)y[o]!=null&&(typeof n.type=="function"&&y[o].__e!=null&&y[o].__e==n.__d&&(n.__d=S(i,o+1)),ae(y[o],y[o]));if(v)for(o=0;o<v.length;o++)ce(v[o],v[++o],v[++o])}function oe(e,t,n){for(var i,_=e.__k,r=0;_&&r<_.length;r++)(i=_[r])&&(i.__=e,t=typeof i.type=="function"?oe(i,t,n):ie(n,i,i,_,i.__e,t));return t}function _e(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){_e(n,t)}):t.push(e)),t}function ie(e,t,n,i,_,r){var l,u,d;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||_!=r||_.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(_),l=null;else{for(u=r,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==_)break e;e.insertBefore(_,r),l=r}return l!==void 0?l:_.nextSibling}function me(e,t,n,i,_){var r;for(r in n)r==="children"||r==="key"||r in t||j(e,r,null,n[r],i);for(r in t)_&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||j(e,r,t[r],n[r],i)}function G(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||fe.test(t)?n:n+"px"}function j(e,t,n,i,_){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||G(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||G(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?i||e.addEventListener(t,r?Y:V,r):e.removeEventListener(t,r?Y:V,r);else if(t!=="dangerouslySetInnerHTML"){if(_)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function V(e){this.l[e.type+!1](f.event?f.event(e):e)}function Y(e){this.l[e.type+!0](f.event?f.event(e):e)}function W(e,t,n,i,_,r,l,u,d){var h,o,m,a,c,s,x,v,y,b,C,R,L,g=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=t.__e=n.__e,t.__h=null,r=[u]),(h=f.__b)&&h(t);try{e:if(typeof g=="function"){if(v=t.props,y=(h=g.contextType)&&i[h.__c],b=h?y?y.props.value:h.__:i,n.__c?x=(o=t.__c=n.__c).__=o.__E:("prototype"in g&&g.prototype.render?t.__c=o=new g(v,b):(t.__c=o=new I(v,b),o.constructor=g,o.render=ye),y&&y.sub(o),o.props=v,o.state||(o.state={}),o.context=b,o.__n=i,m=o.__d=!0,o.__h=[]),o.__s==null&&(o.__s=o.state),g.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=w({},o.__s)),w(o.__s,g.getDerivedStateFromProps(v,o.__s))),a=o.props,c=o.state,m)g.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(g.getDerivedStateFromProps==null&&v!==a&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(v,b),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(v,o.__s,b)===!1||t.__v===n.__v){o.props=v,o.state=o.__s,t.__v!==n.__v&&(o.__d=!1),o.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(M){M&&(M.__=t)}),o.__h.length&&l.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(v,o.__s,b),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(a,c,s)})}if(o.context=b,o.props=v,o.__v=t,o.__P=e,C=f.__r,R=0,"prototype"in g&&g.prototype.render)o.state=o.__s,o.__d=!1,C&&C(t),h=o.render(o.props,o.state,o.context);else do o.__d=!1,C&&C(t),h=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++R<25);o.state=o.__s,o.getChildContext!=null&&(i=w(w({},i),o.getChildContext())),m||o.getSnapshotBeforeUpdate==null||(s=o.getSnapshotBeforeUpdate(a,c)),L=h!=null&&h.type===E&&h.key==null?h.props.children:h,re(e,Array.isArray(L)?L:[L],t,n,i,_,r,l,u,d),o.base=t.__e,t.__h=null,o.__h.length&&l.push(o),x&&(o.__E=o.__=null),o.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=ve(n.__e,t,n,i,_,r,l,d);(h=f.diffed)&&h(t)}catch(M){t.__v=null,(d||r!=null)&&(t.__e=u,t.__h=!!d,r[r.indexOf(u)]=null),f.__e(M,t,n)}}function le(e,t){f.__c&&f.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){f.__e(i,n.__v)}})}function ve(e,t,n,i,_,r,l,u){var d,h,o,m=n.props,a=t.props,c=t.type,s=0;if(c==="svg"&&(_=!0),r!=null){for(;s<r.length;s++)if((d=r[s])&&"setAttribute"in d==!!c&&(c?d.localName===c:d.nodeType===3)){e=d,r[s]=null;break}}if(e==null){if(c===null)return document.createTextNode(a);e=_?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,a.is&&a),r=null,u=!1}if(c===null)m===a||u&&e.data===a||(e.data=a);else{if(r=r&&$.call(e.childNodes),h=(m=n.props||O).dangerouslySetInnerHTML,o=a.dangerouslySetInnerHTML,!u){if(r!=null)for(m={},s=0;s<e.attributes.length;s++)m[e.attributes[s].name]=e.attributes[s].value;(o||h)&&(o&&(h&&o.__html==h.__html||o.__html===e.innerHTML)||(e.innerHTML=o&&o.__html||""))}if(me(e,a,m,_,u),o)t.__k=[];else if(s=t.props.children,re(e,Array.isArray(s)?s:[s],t,n,i,_&&c!=="foreignObject",r,l,r?r[0]:n.__k&&S(n,0),u),r!=null)for(s=r.length;s--;)r[s]!=null&&te(r[s]);u||("value"in a&&(s=a.value)!==void 0&&(s!==e.value||c==="progress"&&!s||c==="option"&&s!==m.value)&&j(e,"value",s,m.value,!1),"checked"in a&&(s=a.checked)!==void 0&&s!==e.checked&&j(e,"checked",s,m.checked,!1))}return e}function ce(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){f.__e(i,n)}}function ae(e,t,n){var i,_;if(f.unmount&&f.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||ce(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){f.__e(r,t)}i.base=i.__P=null}if(i=e.__k)for(_=0;_<i.length;_++)i[_]&&ae(i[_],t,typeof e.type!="function");n||e.__e==null||te(e.__e),e.__e=e.__d=void 0}function ye(e,t,n){return this.constructor(e,n)}function B(e,t,n){var i,_,r;f.__&&f.__(e,t),_=(i=typeof n=="function")?null:n&&n.__k||t.__k,r=[],W(t,e=(!i&&n||t).__k=F(E,null,[e]),_||O,O,t.ownerSVGElement!==void 0,!i&&n?[n]:_?null:t.firstChild?$.call(t.childNodes):null,r,!i&&n?n:_?_.__e:t.firstChild,i),le(r,e)}function se(e,t){B(e,t,se)}function ge(e,t,n){var i,_,r,l=w({},e.props);for(r in t)r=="key"?i=t[r]:r=="ref"?_=t[r]:l[r]=t[r];return arguments.length>2&&(l.children=arguments.length>3?$.call(arguments,2):n),A(e.type,l,i||e.key,_||e.ref,null)}function be(e,t){var n={__c:t="__cC"+Z++,__:e,Consumer:function(i,_){return i.children(_)},Provider:function(i){var _,r;return this.getChildContext||(_=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&_.some(z)},this.sub=function(l){_.push(l);var u=l.componentWillUnmount;l.componentWillUnmount=function(){_.splice(_.indexOf(l),1),u&&u.call(l)}}),i.children}};return n.Provider.__=n.Consumer.contextType=n}$=ee.slice,f={__e:function(e,t,n,i){for(var _,r,l;t=t.__;)if((_=t.__c)&&!_.__)try{if((r=_.constructor)&&r.getDerivedStateFromError!=null&&(_.setState(r.getDerivedStateFromError(e)),l=_.__d),_.componentDidCatch!=null&&(_.componentDidCatch(e,i||{}),l=_.__d),l)return _.__E=_}catch(u){e=u}throw e}},K=0,Q=function(e){return e!=null&&e.constructor===void 0},I.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof e=="function"&&(e=e(w({},n),this.props)),e&&w(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),z(this))},I.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),z(this))},I.prototype.render=E,P=[],X=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,T.__r=0,Z=0;var ke=Object.freeze(Object.defineProperty({__proto__:null,render:B,hydrate:se,createElement:F,h:F,Fragment:E,createRef:he,get isValidElement(){return Q},Component:I,cloneElement:ge,createContext:be,toChildArray:_e,get options(){return f}},Symbol.toStringTag,{value:"Module"}));const we="_App_9t9az_1",xe="_SidebarContainer_9t9az_8",Se="_main_9t9az_12";var D={App:we,SidebarContainer:xe,main:Se};const Ce="_Icon_1jgdi_6";var Pe={"material-symbols-rounded":"_material-symbols-rounded_1jgdi_2",Icon:Ce};function Ae(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var i=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return e[n]}})}),t}var Ie=Ae(ke),ue,de,H=Ie,$e=0;function J(e,t,n,i,_){var r,l,u={};for(l in t)l=="ref"?r=t[l]:u[l]=t[l];var d={type:e,props:u,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--$e,__source:_,__self:i};if(typeof e=="function"&&(r=e.defaultProps))for(l in r)u[l]===void 0&&(u[l]=r[l]);return H.options.vnode&&H.options.vnode(d),d}H.Fragment,de=J,ue=J;const p=de,k=ue;function U(e){return p("span",{class:`material-symbols-rounded ${Pe.Icon}`,children:e.name})}const Ee="_Sidebar_19vxz_1",Le="_title_19vxz_9",Me="_subtitle_19vxz_17",Ne="_copyright_19vxz_39";var N={Sidebar:Ee,title:Le,subtitle:Me,copyright:Ne};function Oe(){return k("div",{class:N.Sidebar,children:[p("a",{href:"/",class:N.title,children:"Brenden Forward"}),k("p",{class:N.subtitle,children:[p(U,{name:"computer"})," Full-stack developer"]}),k("ul",{children:[p("li",{children:k("a",{href:"https://github.com/bren0xa",target:"_blank",rel:"noopener noreferrer",children:[p(U,{name:"code"})," GitHub.com/bren0xa"]})}),p("li",{children:k("a",{href:"mailto:contact@bforward.me",children:[p(U,{name:"email"})," contact@bforward.me"]})})]}),k("p",{class:N.copyright,children:["\xA9 ",new Date().getFullYear()," Brenden Forward. All rights reserved."]})]})}function Te(){return k("div",{class:D.App,children:[p("div",{class:D.SidebarContainer,children:p(Oe,{})}),k("div",{class:D.main,children:[p("h2",{children:"About"}),p("p",{children:"Hi! I'm Brenden. I am a full-stack developer with a passion for building robust web and infrastructure applications that people love. My main interests are in the back-end development space, where I focus on building networking-heavy and real-time applications."}),p("p",{children:"I have a background and degree in software engineering, and I am currently working on a bachelor's degree in computer science."}),p("h2",{children:"Skills"}),k("p",{children:["I have 3+ years of professional experience with web development and database administration. I have a strong background in front-end development, and I am proficient in many languages and frameworks, including:",k("ul",{children:[p("li",{children:"TypeScript"}),p("li",{children:"JavaScript"}),p("li",{children:"HTML/CSS"}),p("li",{children:"Node.js"}),p("li",{children:"Express"}),p("li",{children:"Rust"}),p("li",{children:"Python"}),p("li",{children:"SQL"}),p("li",{children:"PHP"}),p("li",{children:"C/C++"})]})]}),p("p",{children:"I have worked with a wide variety of technologies, and I am always open to learn new things. I am always looking to improve my skills and learn new ones."}),p("h2",{children:"Contact"}),k("p",{children:["You can reach me by clicking the email link in the sidebar, or by emailing me at ",p("a",{href:"mailto:contact@bforward.me",children:"contact@bforward.me"}),"."]})]})]})}B(p(Te,{}),document.body);

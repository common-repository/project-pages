(()=>{"use strict";var e,t={170:(e,t,l)=>{const n=window.wp.blocks,r=window.React,o=window.wp.i18n,a=window.wp.blockEditor,s=window.wp.components,c=window.wp.serverSideRender;var i=l.n(c);const p=JSON.parse('{"UU":"project-pages-blocks/logs"}');(0,n.registerBlockType)(p.UU,{edit:function({attributes:e,setAttributes:t}){const l=(0,a.useBlockProps)({className:"project-pages-blocks"}),{align:n,contentWidth:c}=e;return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(a.InspectorControls,null,(0,r.createElement)(s.PanelBody,{title:(0,o.__)("Content Settings","projectpages"),initialOpen:!0},(0,r.createElement)(s.PanelRow,null,(0,r.createElement)("fieldset",null,(0,r.createElement)(s.SelectControl,{label:(0,o.__)("Content Width","projectpages"),value:c,options:[{label:(0,o.__)("Full width","projectpages"),value:"full"},{label:(0,o.__)("Narrow","projectpages"),value:"narrow"}],onChange:e=>{t({contentWidth:e})}})))),(0,r.createElement)(s.PanelBody,{title:(0,o.__)("Project Pages","projectpages"),initialOpen:!0},(0,r.createElement)(s.PanelRow,null,(0,r.createElement)(s.__experimentalText,{color:"#1e1e1e",size:"12px",weight:"400",align:"justify"},"Project Pages is a side project made for the ❤️ of making. It really helps me to hear what you think, so please do give feedback by clicking the button below:")),(0,r.createElement)(s.PanelRow,null,(0,r.createElement)(s.Button,{variant:"primary",href:"https://forms.gle/sAhUjTcNABN6ZgGLA",target:"_blank"},"Give Feedback")))),(0,r.createElement)(a.BlockControls,{group:"block"},(0,r.createElement)(a.AlignmentControl,{value:n,onChange:e=>{t({align:void 0===e?"none":e})}})),(0,r.createElement)("div",{...l},(0,r.createElement)(s.Disabled,null,(0,r.createElement)(i(),{block:p.UU,skipBlockSupportAttributes:!0,attributes:e}))))},save:function({attributes:e}){const t=a.useBlockProps.save({className:"project-pages-blocks-log-summary"}),{align:l,contentWidth:n}=e,s=t.className;return(0,r.createElement)(r.Fragment,null,(0,r.createElement)("div",{...t,className:s},(0,r.createElement)(a.RichText.Content,{tagName:"div",value:(0,o.__)("Project logs will display here","projectpages"),style:{textAlign:l}})))}})}},l={};function n(e){var r=l[e];if(void 0!==r)return r.exports;var o=l[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,l,r,o)=>{if(!l){var a=1/0;for(p=0;p<e.length;p++){for(var[l,r,o]=e[p],s=!0,c=0;c<l.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((e=>n.O[e](l[c])))?l.splice(c--,1):(s=!1,o<a&&(a=o));if(s){e.splice(p--,1);var i=r();void 0!==i&&(t=i)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[l,r,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={251:0,395:0};n.O.j=t=>0===e[t];var t=(t,l)=>{var r,o,[a,s,c]=l,i=0;if(a.some((t=>0!==e[t]))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var p=c(n)}for(t&&t(l);i<a.length;i++)o=a[i],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(p)},l=globalThis.webpackChunkproject_pages_blocks=globalThis.webpackChunkproject_pages_blocks||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var r=n.O(void 0,[395],(()=>n(170)));r=n.O(r)})();
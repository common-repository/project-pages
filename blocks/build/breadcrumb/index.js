(()=>{"use strict";var e,t={492:(e,t,l)=>{const a=window.wp.blocks,r=window.React,o=window.wp.i18n,n=window.wp.blockEditor,c=window.wp.components,s=window.wp.serverSideRender;var p=l.n(s);const i=JSON.parse('{"UU":"project-pages-blocks/breadcrumb"}');(0,a.registerBlockType)(i.UU,{edit:function({attributes:e,setAttributes:t}){const l=(0,n.useBlockProps)({className:"project-pages-blocks-breadcrumb"}),{align:a,separator:s,showHomeLevel:m,homeLabel:u,projectsLabel:g}=e;return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(n.InspectorControls,null,(0,r.createElement)(c.PanelBody,{title:(0,o.__)("Breadcrumb Settings","projectpages"),initialOpen:!0},(0,r.createElement)(c.PanelRow,null,(0,r.createElement)("fieldset",null,(0,r.createElement)(c.ToggleControl,{label:(0,o.__)("Show Home Level","projectpages"),checked:m,onChange:()=>{t({showHomeLevel:!m})}}))),m&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(c.PanelRow,null,(0,r.createElement)("fieldset",null,(0,r.createElement)(c.TextControl,{label:(0,o.__)("Home Label","projectpages"),value:u,placeholder:(0,o.__)("e.g. Home","projectpages"),onChange:e=>{t({homeLabel:e})},help:(0,o.__)("Leave blank to use Site title","projectpages")})))),(0,r.createElement)(c.PanelRow,null,(0,r.createElement)("fieldset",null,(0,r.createElement)(c.TextControl,{label:(0,o.__)("Projects Label","projectpages"),value:g,placeholder:(0,o.__)("e.g. Projects","projectpages"),onChange:e=>{t({projectsLabel:e})},help:(0,o.__)("Leave blank to use Projects","projectpages")}))),(0,r.createElement)(c.PanelRow,null,(0,r.createElement)("fieldset",null,(0,r.createElement)(c.TextControl,{label:(0,o.__)("Separator","projectpages"),value:s,placeholder:(0,o.__)("e.g. >>","projectpages"),onChange:e=>{t({separator:e})},help:(0,o.__)("Leave blank to use default","projectpages")})))),(0,r.createElement)(c.PanelBody,{title:(0,o.__)("Project Pages","projectpages"),initialOpen:!0},(0,r.createElement)(c.PanelRow,null,(0,r.createElement)(c.__experimentalText,{color:"#1e1e1e",size:"12px",weight:"400",align:"justify"},"Project Pages is a side project made for the ❤️ of making. It really helps me to hear what you think, so please do give feedback by clicking the button below:")),(0,r.createElement)(c.PanelRow,null,(0,r.createElement)(c.Button,{variant:"primary",href:"https://forms.gle/sAhUjTcNABN6ZgGLA",target:"_blank"},"Give Feedback")))),(0,r.createElement)(n.BlockControls,{group:"block"},(0,r.createElement)(n.AlignmentControl,{value:a,onChange:e=>{t({align:void 0===e?"none":e})}})),(0,r.createElement)("div",{...l},(0,r.createElement)(c.Disabled,null,(0,r.createElement)(p(),{block:i.UU,skipBlockSupportAttributes:!0,attributes:e}))))},save:function({attributes:e}){const t=n.useBlockProps.save({className:"project-pages-blocks-breadcrumb"}),{align:l,separator:a,showHomeLevel:c,homeLabel:s,projectsLabel:p}=e,i=t.className;return(0,r.createElement)(r.Fragment,null,(0,r.createElement)("div",{...t,className:i},(0,r.createElement)(n.RichText.Content,{tagName:"div",value:(0,o.__)("Breadcrumb will display here","projectpages"),style:{textAlign:l}})))}})}},l={};function a(e){var r=l[e];if(void 0!==r)return r.exports;var o=l[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,l,r,o)=>{if(!l){var n=1/0;for(i=0;i<e.length;i++){for(var[l,r,o]=e[i],c=!0,s=0;s<l.length;s++)(!1&o||n>=o)&&Object.keys(a.O).every((e=>a.O[e](l[s])))?l.splice(s--,1):(c=!1,o<n&&(n=o));if(c){e.splice(i--,1);var p=r();void 0!==p&&(t=p)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[l,r,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={509:0,393:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var r,o,[n,c,s]=l,p=0;if(n.some((t=>0!==e[t]))){for(r in c)a.o(c,r)&&(a.m[r]=c[r]);if(s)var i=s(a)}for(t&&t(l);p<n.length;p++)o=n[p],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(i)},l=globalThis.webpackChunkproject_pages_blocks=globalThis.webpackChunkproject_pages_blocks||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var r=a.O(void 0,[393],(()=>a(492)));r=a.O(r)})();
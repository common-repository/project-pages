(()=>{"use strict";var e,t={99:(e,t,l)=>{const r=window.wp.blocks,a=window.React,o=window.wp.i18n,n=window.wp.blockEditor,c=window.wp.components,s=window.wp.serverSideRender;var p=l.n(s);const u=JSON.parse('{"UU":"project-pages-blocks/hero"}');(0,r.registerBlockType)(u.UU,{edit:function({attributes:e,setAttributes:t}){const l=(0,n.useBlockProps)({className:"project-pages-blocks-breadcrumb"}),{align:r,separator:s,showBreadcrumbs:i,showHomeLevel:m,homeLabel:g,projectsLabel:_,heroTextColour:d,heroTextAltColour:b,bgImgUrl:h,bgVidUrl:E,bgColour:w}=e;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(n.InspectorControls,null,(0,a.createElement)(c.PanelBody,{title:(0,o.__)("Project Page Breadcrumbs","projectpages"),initialOpen:!0},(0,a.createElement)(c.PanelRow,null,(0,a.createElement)("fieldset",null,(0,a.createElement)(c.ToggleControl,{label:(0,o.__)("Show Breadcrumbs","projectpages"),checked:i,onChange:()=>{t({showBreadcrumbs:!i})}}))),i&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(c.PanelRow,null,(0,a.createElement)("fieldset",null,(0,a.createElement)(c.ToggleControl,{label:(0,o.__)("Show Home Level (Breadcrumb)","projectpages"),checked:m,onChange:()=>{t({showHomeLevel:!m})}}))),m&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(c.PanelRow,null,(0,a.createElement)("fieldset",null,(0,a.createElement)(c.TextControl,{label:(0,o.__)("Home Label","projectpages"),value:g,placeholder:(0,o.__)("e.g. Home","projectpages"),onChange:e=>{t({homeLabel:e})},help:(0,o.__)("Leave blank to use Site title","projectpages")})))),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)("fieldset",null,(0,a.createElement)(c.TextControl,{label:(0,o.__)("Projects Label","projectpages"),value:_,placeholder:(0,o.__)("e.g. Projects","projectpages"),onChange:e=>{t({projectsLabel:e})},help:(0,o.__)("Leave blank to use Projects","projectpages")}))),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)("fieldset",null,(0,a.createElement)(c.TextControl,{label:(0,o.__)("Separator","projectpages"),value:s,placeholder:(0,o.__)("e.g. >>","projectpages"),onChange:e=>{t({separator:e})},help:(0,o.__)("Leave blank to use default","projectpages")}))))),(0,a.createElement)(c.PanelBody,{title:(0,o.__)("Project Page Hero Defaults","projectpages"),initialOpen:!1},(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(c.__experimentalText,{color:"#1e1e1e",size:"14px",upperCase:"true",weight:"500"},(0,o.__)("Background","projectpages"))),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(c.__experimentalText,{color:"#757575",size:"12px"},(0,o.__)("Set a default background for your single Project Pages which have no bg set.","projectpages"))),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)("fieldset",null,(0,a.createElement)(c.TextControl,{label:(0,o.__)("Default Background Image","projectpages"),value:h,placeholder:(0,o.__)("e.g. https://example.com/example.png","projectpages"),onChange:e=>{t({bgImgUrl:e})}}))),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)("fieldset",null,(0,a.createElement)(c.TextControl,{label:(0,o.__)("Default Background Video","projectpages"),value:E,placeholder:(0,o.__)("e.g. https://example.com/example.mp4","projectpages"),onChange:e=>{t({bgVidUrl:e})}}))),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(c.__experimentalText,{color:"#1e1e1e",size:"11px",upperCase:"true",weight:"500"},(0,o.__)("Default Background Color","projectpages"))),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)("fieldset",null,(0,a.createElement)(c.ColorPicker,{label:(0,o.__)("Default Hero BG Color","projectpages"),color:w,onChange:e=>{t({bgColour:e})},defaultValue:"#000"}))),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(c.__experimentalText,{color:"#1e1e1e",size:"14px",upperCase:"true",weight:"500"},(0,o.__)("Fonts","projectpages"))),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(c.__experimentalText,{color:"#757575",size:"12px"},(0,o.__)("Set font colours for your default Project Pages","projectpages"))),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(c.__experimentalText,{color:"#1e1e1e",size:"11px",upperCase:"true",weight:"500"},(0,o.__)("Default Font Color","projectpages"))),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)("fieldset",null,(0,a.createElement)(c.ColorPicker,{label:(0,o.__)("Default Hero Font Color","projectpages"),color:d,onChange:e=>{t({heroTextColour:e})},defaultValue:"#FFF"}))),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(c.__experimentalText,{color:"#1e1e1e",size:"11px",upperCase:"true",weight:"500"},(0,o.__)("Default Alt Font Color","projectpages"))),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)("fieldset",null,(0,a.createElement)(c.ColorPicker,{label:(0,o.__)("Default Hero Alt Font Color","projectpages"),color:b,onChange:e=>{t({heroTextAltColour:e})},defaultValue:"#CCC"})))),(0,a.createElement)(c.PanelBody,{title:(0,o.__)("Project Pages","projectpages"),initialOpen:!0},(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(c.__experimentalText,{color:"#1e1e1e",size:"12px",weight:"400",align:"justify"},"Project Pages is a side project made for the ❤️ of making. It really helps me to hear what you think, so please do give feedback by clicking the button below:")),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(c.Button,{variant:"primary",href:"https://forms.gle/sAhUjTcNABN6ZgGLA",target:"_blank"},"Give Feedback")))),(0,a.createElement)("div",{...l},(0,a.createElement)(c.Disabled,null,(0,a.createElement)(p(),{block:u.UU,skipBlockSupportAttributes:!0,attributes:e}))))},save:function({attributes:e}){const t=n.useBlockProps.save({className:"project-pages-blocks-breadcrumb"}),{align:l,separator:r,showBreadcrumbs:c,showHomeLevel:s,homeLabel:p,projectsLabel:u,heroTextColour:i,heroTextAltColour:m,bgImgUrl:g,bgVidUrl:_,bgColour:d}=e,b=t.className;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{...t,className:b},(0,a.createElement)(n.RichText.Content,{tagName:"div",value:(0,o.__)("Hero will display here","projectpages"),style:{textAlign:l}})))}})}},l={};function r(e){var a=l[e];if(void 0!==a)return a.exports;var o=l[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,l,a,o)=>{if(!l){var n=1/0;for(u=0;u<e.length;u++){for(var[l,a,o]=e[u],c=!0,s=0;s<l.length;s++)(!1&o||n>=o)&&Object.keys(r.O).every((e=>r.O[e](l[s])))?l.splice(s--,1):(c=!1,o<n&&(n=o));if(c){e.splice(u--,1);var p=a();void 0!==p&&(t=p)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[l,a,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={730:0,622:0};r.O.j=t=>0===e[t];var t=(t,l)=>{var a,o,[n,c,s]=l,p=0;if(n.some((t=>0!==e[t]))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(s)var u=s(r)}for(t&&t(l);p<n.length;p++)o=n[p],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},l=globalThis.webpackChunkproject_pages_blocks=globalThis.webpackChunkproject_pages_blocks||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var a=r.O(void 0,[622],(()=>r(99)));a=r.O(a)})();
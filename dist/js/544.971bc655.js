"use strict";(self["webpackChunkmusic_downloader"]=self["webpackChunkmusic_downloader"]||[]).push([[544],{2642:(e,t,o)=>{o.r(t),o.d(t,{startFocusVisible:()=>c});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s="ion-focused",n="ion-focusable",r=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=e=>{let t=[],o=!0;const c=e?e.shadowRoot:document,d=e||document.body,i=e=>{t.forEach((e=>e.classList.remove(s))),e.forEach((e=>e.classList.add(s))),t=e},a=()=>{o=!1,i([])},u=e=>{o=r.includes(e.key),o||i([])},v=e=>{if(o&&void 0!==e.composedPath){const t=e.composedPath().filter((e=>!!e.classList&&e.classList.contains(n)));i(t)}},m=()=>{c.activeElement===d&&i([])};c.addEventListener("keydown",u),c.addEventListener("focusin",v),c.addEventListener("focusout",m),c.addEventListener("touchstart",a),c.addEventListener("mousedown",a);const E=()=>{c.removeEventListener("keydown",u),c.removeEventListener("focusin",v),c.removeEventListener("focusout",m),c.removeEventListener("touchstart",a),c.removeEventListener("mousedown",a)};return{destroy:E,setFocus:i}}}}]);
//# sourceMappingURL=544.971bc655.js.map
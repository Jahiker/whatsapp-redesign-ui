(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a=[{name:"Ingo da Cunha",picture:"https://randomuser.me/api/portraits/men/47.jpg"},{name:"Joy Kennedy",picture:"https://randomuser.me/api/portraits/women/79.jpg"},{name:"Naim Rolland",picture:"https://randomuser.me/api/portraits/men/19.jpg"},{name:"Gianfranco Robin",picture:"https://randomuser.me/api/portraits/men/89.jpg"},{name:"Debbie Snyder",picture:"https://randomuser.me/api/portraits/women/65.jpg"},{name:"Theodore Cox",picture:"https://randomuser.me/api/portraits/men/15.jpg"},{name:"Marshall Mills",picture:"https://randomuser.me/api/portraits/men/94.jpg"}];console.log("Happy Hacking! :-)");class u extends HTMLElement{constructor(){super(),this.countStatus=this.dataset.statutsElement,console.log(this.countStatus),this.renderStatus()}renderStatus(){a.map(r=>{const o=document.createElement("li"),n=document.createElement("img");n.src=r.picture,n.alt=r.name,o.append(n),this.querySelector("ul").append(o)})}}customElements.define("status-list",u);
/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,o,r){void 0===r&&(r=o),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,r){void 0===r&&(r=o),e[r]=t[o]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__decorate=this&&this.__decorate||function(e,t,o,r){var i,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(n<3?i(s):n>3?i(t,o,s):i(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s},__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&__createBinding(t,e,o);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};define(["require","exports","codemirror","lit","lit/decorators","TYPO3/CMS/Backend/Element/SpinnerElement"],(function(e,t,o,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodeMirrorElement=void 0,o=__importDefault(o);let n=class extends r.LitElement{constructor(){super(...arguments),this.addons=["codemirror/addon/display/panel"],this.options={},this.scrollto=0,this.marktext=[],this.lineDigits=0,this.autoheight=!1,this.nolazyload=!1,this.panel="bottom",this.loaded=!1}render(){return r.html`
      <slot></slot>
      <slot name="codemirror"></slot>
      ${this.loaded?"":r.html`<typo3-backend-spinner size="large" variant="dark"></typo3-backend-spinner>`}
    `}firstUpdated(){if(this.nolazyload)return void this.initializeEditor(this.firstElementChild);const e={root:document.body};let t=new IntersectionObserver(e=>{e.forEach(e=>{e.intersectionRatio>0&&(t.unobserve(e.target),this.firstElementChild&&"textarea"===this.firstElementChild.nodeName.toLowerCase()&&this.initializeEditor(this.firstElementChild))})},e);t.observe(this)}createPanelNode(e,t){const o=document.createElement("div");o.setAttribute("class","CodeMirror-panel CodeMirror-panel-"+e),o.setAttribute("id","panel-"+e);const r=document.createElement("span");return r.textContent=t,o.appendChild(r),o}initializeEditor(t){const r=this.mode.split("/"),i=this.options;Promise.all([this.mode,...this.addons].map(t=>new Promise((o,r)=>{e([t],o,r)}).then(__importStar))).then(()=>{const e=o.default(e=>{const o=document.createElement("div");o.setAttribute("slot","codemirror"),o.appendChild(e),this.insertBefore(o,t)},{value:t.value,extraKeys:{"Ctrl-F":"findPersistent","Cmd-F":"findPersistent","Ctrl-Alt-F":e=>{e.setOption("fullScreen",!e.getOption("fullScreen"))},"Ctrl-Space":"autocomplete",Esc:e=>{e.getOption("fullScreen")&&e.setOption("fullScreen",!1)}},fullScreen:!1,lineNumbers:!0,lineWrapping:!0,mode:r[r.length-1]});Object.keys(i).map(t=>{e.setOption(t,i[t])}),e.on("change",()=>{t.value=e.getValue(),t.dispatchEvent(new CustomEvent("change",{bubbles:!0}))});const n=this.createPanelNode(this.panel,this.label);if(e.addPanel(n,{position:this.panel,stable:!1}),t.getAttribute("rows")){const o=18,r=4;e.setSize(null,parseInt(t.getAttribute("rows"),10)*o+r+n.getBoundingClientRect().height)}else e.getWrapperElement().style.height="auto",e.setOption("viewportMargin",1/0);this.autoheight&&e.setOption("viewportMargin",1/0),this.lineDigits>0&&e.setOption("lineNumberFormatter",e=>e.toString().padStart(this.lineDigits," ")),this.scrollto>0&&e.scrollIntoView({line:this.scrollto,ch:0});for(let t of this.marktext)t.from&&t.to&&e.markText(t.from,t.to,{className:"CodeMirror-markText"});this.loaded=!0})}};n.styles=r.css`
   :host {
     display: block;
     position: relative;
   }
   typo3-backend-spinner {
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
   }
  `,__decorate([i.property()],n.prototype,"mode",void 0),__decorate([i.property()],n.prototype,"label",void 0),__decorate([i.property({type:Array})],n.prototype,"addons",void 0),__decorate([i.property({type:Object})],n.prototype,"options",void 0),__decorate([i.property({type:Number})],n.prototype,"scrollto",void 0),__decorate([i.property({type:Object})],n.prototype,"marktext",void 0),__decorate([i.property({type:Number})],n.prototype,"lineDigits",void 0),__decorate([i.property({type:Boolean})],n.prototype,"autoheight",void 0),__decorate([i.property({type:Boolean})],n.prototype,"nolazyload",void 0),__decorate([i.property({type:String})],n.prototype,"panel",void 0),__decorate([i.state()],n.prototype,"loaded",void 0),n=__decorate([i.customElement("typo3-t3editor-codemirror")],n),t.CodeMirrorElement=n}));
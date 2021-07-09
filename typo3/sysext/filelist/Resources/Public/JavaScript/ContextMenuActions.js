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
var __importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};define(["require","exports","TYPO3/CMS/Backend/Enum/Severity","jquery","TYPO3/CMS/Core/Ajax/AjaxRequest","TYPO3/CMS/Backend/Modal","TYPO3/CMS/Backend/Hashing/Md5"],(function(t,e,n,o,a,r,s){"use strict";o=__importDefault(o);class i{static getReturnUrl(){return encodeURIComponent(top.list_frame.document.location.pathname+top.list_frame.document.location.search)}static renameFile(t,e){top.TYPO3.Backend.ContentContainer.setUrl(top.TYPO3.settings.FileRename.moduleUrl+"&target="+encodeURIComponent(e)+"&returnUrl="+i.getReturnUrl())}static editFile(t,e){top.TYPO3.Backend.ContentContainer.setUrl(top.TYPO3.settings.FileEdit.moduleUrl+"&target="+encodeURIComponent(e)+"&returnUrl="+i.getReturnUrl())}static editMetadata(){const t=o.default(this).data("metadata-uid");t&&top.TYPO3.Backend.ContentContainer.setUrl(top.TYPO3.settings.FormEngine.moduleUrl+"&edit[sys_file_metadata]["+parseInt(t,10)+"]=edit&returnUrl="+i.getReturnUrl())}static editFileStorage(t,e){top.TYPO3.Backend.ContentContainer.setUrl(top.TYPO3.settings.FormEngine.moduleUrl+"&edit[sys_file_storage]["+parseInt(e,10)+"]=edit&returnUrl="+i.getReturnUrl())}static openInfoPopUp(t,e){"sys_file_storage"===t?top.TYPO3.InfoWindow.showItem(t,e):top.TYPO3.InfoWindow.showItem("_FILE",e)}static uploadFile(t,e){top.TYPO3.Backend.ContentContainer.setUrl(top.TYPO3.settings.FileUpload.moduleUrl+"&target="+encodeURIComponent(e)+"&returnUrl="+i.getReturnUrl())}static createFile(t,e){top.TYPO3.Backend.ContentContainer.setUrl(top.TYPO3.settings.FileCreate.moduleUrl+"&target="+encodeURIComponent(e)+"&returnUrl="+i.getReturnUrl())}static createFilemount(t,e){const n=e.split(":");2===n.length&&top.TYPO3.Backend.ContentContainer.setUrl(top.TYPO3.settings.FormEngine.moduleUrl+"&edit[sys_filemounts][0]=new&defVals[sys_filemounts][base]="+encodeURIComponent(n[0])+"&defVals[sys_filemounts][path]="+encodeURIComponent(n[1])+"&returnUrl="+i.getReturnUrl())}static deleteFile(t,e){const a=o.default(this),s=()=>{top.TYPO3.Backend.ContentContainer.setUrl(top.TYPO3.settings.FileCommit.moduleUrl+"&data[delete][0][data]="+encodeURIComponent(e)+"&data[delete][0][redirect]="+i.getReturnUrl())};if(!a.data("title"))return void s();r.confirm(a.data("title"),a.data("message"),n.SeverityEnum.warning,[{text:o.default(this).data("button-close-text")||TYPO3.lang["button.cancel"]||"Cancel",active:!0,btnClass:"btn-default",name:"cancel"},{text:o.default(this).data("button-ok-text")||TYPO3.lang["button.delete"]||"Delete",btnClass:"btn-warning",name:"delete"}]).on("button.clicked",t=>{"delete"===t.target.name&&s(),r.dismiss()})}static copyFile(t,e){const n=s.hash(e).substring(0,10),o=TYPO3.settings.ajaxUrls.contextmenu_clipboard,r={CB:{el:{["_FILE%7C"+n]:e},setCopyMode:"1"}};new a(o).withQueryArguments(r).get().finally(()=>{top.TYPO3.Backend.ContentContainer.refresh(!0)})}static copyReleaseFile(t,e){const n=s.hash(e).substring(0,10),o=TYPO3.settings.ajaxUrls.contextmenu_clipboard,r={CB:{el:{["_FILE%7C"+n]:"0"},setCopyMode:"1"}};new a(o).withQueryArguments(r).get().finally(()=>{top.TYPO3.Backend.ContentContainer.refresh(!0)})}static cutFile(t,e){const n=s.hash(e).substring(0,10),o=TYPO3.settings.ajaxUrls.contextmenu_clipboard,r={CB:{el:{["_FILE%7C"+n]:e}}};new a(o).withQueryArguments(r).get().finally(()=>{top.TYPO3.Backend.ContentContainer.refresh(!0)})}static cutReleaseFile(t,e){const n=s.hash(e).substring(0,10),o=TYPO3.settings.ajaxUrls.contextmenu_clipboard,r={CB:{el:{["_FILE%7C"+n]:"0"}}};new a(o).withQueryArguments(r).get().finally(()=>{top.TYPO3.Backend.ContentContainer.refresh(!0)})}static pasteFileInto(t,e){const a=o.default(this),s=a.data("title"),l=()=>{top.TYPO3.Backend.ContentContainer.setUrl(top.TYPO3.settings.FileCommit.moduleUrl+"&CB[paste]=FILE|"+encodeURIComponent(e)+"&CB[pad]=normal&redirect="+i.getReturnUrl())};if(!s)return void l();r.confirm(s,a.data("message"),n.SeverityEnum.warning,[{text:o.default(this).data("button-close-text")||TYPO3.lang["button.cancel"]||"Cancel",active:!0,btnClass:"btn-default",name:"cancel"},{text:o.default(this).data("button-ok-text")||TYPO3.lang["button.ok"]||"OK",btnClass:"btn-warning",name:"ok"}]).on("button.clicked",t=>{"ok"===t.target.name&&l(),r.dismiss()})}static dropInto(t,e,n){const a=o.default(this).data("drop-target");top.TYPO3.Backend.ContentContainer.setUrl(top.TYPO3.settings.FileCommit.moduleUrl+"&file["+n+"][0][data]="+encodeURIComponent(e)+"&file["+n+"][0][target]="+encodeURIComponent(a)+"&redirect="+i.getReturnUrl())}static dropMoveInto(t,e){i.dropInto.bind(o.default(this))(t,e,"move")}static dropCopyInto(t,e){i.dropInto.bind(o.default(this))(t,e,"copy")}}return i}));
import{r as De}from"./index.LFf77hJu.js";var hd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function N0(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var s=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,s.get?s:{enumerable:!0,get:function(){return t[n]}})}),r}var k0={exports:{}},Oc={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm=De,hm=Symbol.for("react.element"),fm=Symbol.for("react.fragment"),pm=Object.prototype.hasOwnProperty,gm=dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mm={key:!0,ref:!0,__self:!0,__source:!0};function M0(t,e,r){var n,s={},i=null,o=null;r!==void 0&&(i=""+r),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)pm.call(e,n)&&!mm.hasOwnProperty(n)&&(s[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)s[n]===void 0&&(s[n]=e[n]);return{$$typeof:hm,type:t,key:i,ref:o,props:s,_owner:gm.current}}Oc.Fragment=fm;Oc.jsx=M0;Oc.jsxs=M0;k0.exports=Oc;var Tt=k0.exports;let Aa;function wm(t){t&&(Aa=t)}function bm(){if(!Aa)throw new Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');async function t(r){await Aa?.open(r)}async function e(){await Aa?.close()}return{open:t,close:e}}function U0(t,e={}){const{fees:r=t.fees,formatters:n=t.formatters,serializers:s=t.serializers}=e;return{...t,fees:r,formatters:n,serializers:s}}const ym="1.21.3",vm=t=>t,Pc=t=>t,xm=()=>`viem@${ym}`;class Z extends Error{constructor(e,r={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:xm()});const n=r.cause instanceof Z?r.cause.details:r.cause?.message?r.cause.message:r.details,s=r.cause instanceof Z&&r.cause.docsPath||r.docsPath;this.message=[e||"An error occurred.","",...r.metaMessages?[...r.metaMessages,""]:[],...s?[`Docs: https://viem.sh${s}.html${r.docsSlug?`#${r.docsSlug}`:""}`]:[],...n?[`Details: ${n}`]:[],`Version: ${this.version}`].join(`
`),r.cause&&(this.cause=r.cause),this.details=n,this.docsPath=s,this.metaMessages=r.metaMessages,this.shortMessage=e}walk(e){return B0(this,e)}}function B0(t,e){return e?.(t)?t:t&&typeof t=="object"&&"cause"in t?B0(t.cause,e):e?null:t}class _m extends Z{constructor({max:e,min:r,signed:n,size:s,value:i}){super(`Number "${i}" is not in safe ${s?`${s*8}-bit ${n?"signed":"unsigned"} `:""}integer range ${e?`(${r} to ${e})`:`(above ${r})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class Cm extends Z{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class Em extends Z{constructor({givenSize:e,maxSize:r}){super(`Size cannot exceed ${r} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}function Cr(t,{strict:e=!0}={}){return!t||typeof t!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x")}function gt(t){return Cr(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}function zn(t,{dir:e="left"}={}){let r=typeof t=="string"?t.replace("0x",""):t,n=0;for(let s=0;s<r.length-1&&r[e==="left"?s:r.length-s-1].toString()==="0";s++)n++;return r=e==="left"?r.slice(n):r.slice(0,r.length-n),typeof t=="string"?(r.length===1&&e==="right"&&(r=`${r}0`),`0x${r.length%2===1?`0${r}`:r}`):r}class j0 extends Z{constructor({offset:e,position:r,size:n}){super(`Slice ${r==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class L0 extends Z{constructor({size:e,targetSize:r,type:n}){super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (${e}) exceeds padding size (${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}function ls(t,{dir:e,size:r=32}={}){return typeof t=="string"?un(t,{dir:e,size:r}):Sm(t,{dir:e,size:r})}function un(t,{dir:e,size:r=32}={}){if(r===null)return t;const n=t.replace("0x","");if(n.length>r*2)throw new L0({size:Math.ceil(n.length/2),targetSize:r,type:"hex"});return`0x${n[e==="right"?"padEnd":"padStart"](r*2,"0")}`}function Sm(t,{dir:e,size:r=32}={}){if(r===null)return t;if(t.length>r)throw new L0({size:t.length,targetSize:r,type:"bytes"});const n=new Uint8Array(r);for(let s=0;s<r;s++){const i=e==="right";n[i?s:r-s-1]=t[i?s:t.length-s-1]}return n}const Am=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Gr(t,e={}){return typeof t=="number"||typeof t=="bigint"?ve(t,e):typeof t=="string"?fd(t,e):typeof t=="boolean"?F0(t,e):Fs(t,e)}function F0(t,e={}){const r=`0x${Number(t)}`;return typeof e.size=="number"?(En(r,{size:e.size}),ls(r,{size:e.size})):r}function Fs(t,e={}){let r="";for(let s=0;s<t.length;s++)r+=Am[t[s]];const n=`0x${r}`;return typeof e.size=="number"?(En(n,{size:e.size}),ls(n,{dir:"right",size:e.size})):n}function ve(t,e={}){const{signed:r,size:n}=e,s=BigInt(t);let i;n?r?i=(1n<<BigInt(n)*8n-1n)-1n:i=2n**(BigInt(n)*8n)-1n:typeof t=="number"&&(i=BigInt(Number.MAX_SAFE_INTEGER));const o=typeof i=="bigint"&&r?-i-1n:0;if(i&&s>i||s<o){const c=typeof t=="bigint"?"n":"";throw new _m({max:i?`${i}${c}`:void 0,min:`${o}${c}`,signed:r,size:n,value:`${t}${c}`})}const a=`0x${(r&&s<0?(1n<<BigInt(n*8))+BigInt(s):s).toString(16)}`;return n?ls(a,{size:n}):a}const $m=new TextEncoder;function fd(t,e={}){const r=$m.encode(t);return Fs(r,e)}const Tm=new TextEncoder;function fn(t,e={}){return typeof t=="number"||typeof t=="bigint"?Rm(t,e):typeof t=="boolean"?Im(t,e):Cr(t)?pd(t,e):Fr(t,e)}function Im(t,e={}){const r=new Uint8Array(1);return r[0]=Number(t),typeof e.size=="number"?(En(r,{size:e.size}),ls(r,{size:e.size})):r}const Mr={zero:48,nine:57,A:65,F:70,a:97,f:102};function Mh(t){if(t>=Mr.zero&&t<=Mr.nine)return t-Mr.zero;if(t>=Mr.A&&t<=Mr.F)return t-(Mr.A-10);if(t>=Mr.a&&t<=Mr.f)return t-(Mr.a-10)}function pd(t,e={}){let r=t;e.size&&(En(r,{size:e.size}),r=ls(r,{dir:"right",size:e.size}));let n=r.slice(2);n.length%2&&(n=`0${n}`);const s=n.length/2,i=new Uint8Array(s);for(let o=0,a=0;o<s;o++){const c=Mh(n.charCodeAt(a++)),l=Mh(n.charCodeAt(a++));if(c===void 0||l===void 0)throw new Z(`Invalid byte sequence ("${n[a-2]}${n[a-1]}" in "${n}").`);i[o]=c*16+l}return i}function Rm(t,e){const r=ve(t,e);return pd(r)}function Fr(t,e={}){const r=Tm.encode(t);return typeof e.size=="number"?(En(r,{size:e.size}),ls(r,{dir:"right",size:e.size})):r}function En(t,{size:e}){if(gt(t)>e)throw new Em({givenSize:gt(t),maxSize:e})}function Dc(t,e={}){const{signed:r}=e;e.size&&En(t,{size:e.size});const n=BigInt(t);if(!r)return n;const s=(t.length-2)/2,i=(1n<<BigInt(s)*8n-1n)-1n;return n<=i?n:n-BigInt(`0x${"f".padStart(s*2,"f")}`)-1n}function Om(t,e={}){let r=t;if(e.size&&(En(r,{size:e.size}),r=zn(r)),zn(r)==="0x00")return!1;if(zn(r)==="0x01")return!0;throw new Cm(r)}function Et(t,e={}){return Number(Dc(t,e))}function gd(t,e={}){let r=pd(t);return e.size&&(En(r,{size:e.size}),r=zn(r,{dir:"right"})),new TextDecoder().decode(r)}const W0={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function z0(t){const e={...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,chainId:t.chainId?Et(t.chainId):void 0,gas:t.gas?BigInt(t.gas):void 0,gasPrice:t.gasPrice?BigInt(t.gasPrice):void 0,maxFeePerGas:t.maxFeePerGas?BigInt(t.maxFeePerGas):void 0,maxPriorityFeePerGas:t.maxPriorityFeePerGas?BigInt(t.maxPriorityFeePerGas):void 0,nonce:t.nonce?Et(t.nonce):void 0,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,type:t.type?W0[t.type]:void 0,typeHex:t.type?t.type:void 0,value:t.value?BigInt(t.value):void 0,v:t.v?BigInt(t.v):void 0};return e.yParity=(()=>{if(t.yParity)return Number(t.yParity);if(typeof e.v=="bigint"){if(e.v===0n||e.v===27n)return 0;if(e.v===1n||e.v===28n)return 1;if(e.v>=35n)return e.v%2n===0n?1:0}})(),e.type==="legacy"&&(delete e.accessList,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas,delete e.yParity),e.type==="eip2930"&&(delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e}function H0(t){const e=t.transactions?.map(r=>typeof r=="string"?r:z0(r));return{...t,baseFeePerGas:t.baseFeePerGas?BigInt(t.baseFeePerGas):null,difficulty:t.difficulty?BigInt(t.difficulty):void 0,gasLimit:t.gasLimit?BigInt(t.gasLimit):void 0,gasUsed:t.gasUsed?BigInt(t.gasUsed):void 0,hash:t.hash?t.hash:null,logsBloom:t.logsBloom?t.logsBloom:null,nonce:t.nonce?t.nonce:null,number:t.number?BigInt(t.number):null,size:t.size?BigInt(t.size):void 0,timestamp:t.timestamp?BigInt(t.timestamp):void 0,transactions:e,totalDifficulty:t.totalDifficulty?BigInt(t.totalDifficulty):null}}function ar(t,{args:e,eventName:r}={}){return{...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,logIndex:t.logIndex?Number(t.logIndex):null,transactionHash:t.transactionHash?t.transactionHash:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,...r?{args:e,eventName:r}:{}}}const Pm={"0x0":"reverted","0x1":"success"};function Dm(t){return{...t,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs?t.logs.map(e=>ar(e)):null,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Et(t.transactionIndex):null,status:t.status?Pm[t.status]:null,type:t.type?W0[t.type]||t.type:null}}const Nm={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function Nc(t){return{...t,gas:typeof t.gas<"u"?ve(t.gas):void 0,gasPrice:typeof t.gasPrice<"u"?ve(t.gasPrice):void 0,maxFeePerGas:typeof t.maxFeePerGas<"u"?ve(t.maxFeePerGas):void 0,maxPriorityFeePerGas:typeof t.maxPriorityFeePerGas<"u"?ve(t.maxPriorityFeePerGas):void 0,nonce:typeof t.nonce<"u"?ve(t.nonce):void 0,type:typeof t.type<"u"?Nm[t.type]:void 0,value:typeof t.value<"u"?ve(t.value):void 0}}class Ws extends Z{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}class au extends Z{constructor({blockNumber:e,chain:r,contract:n}){super(`Chain "${r.name}" does not support contract "${n.name}".`,{metaMessages:["This could be due to any of the following:",...e&&n.blockCreated&&n.blockCreated>e?[`- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${n.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}let km=class extends Z{constructor({chain:e,currentChainId:r}){super(`The current chain of the wallet (id: ${r}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${r}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}};class Mm extends Z{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class q0 extends Z{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}const Um={gwei:9,wei:18},Bm={ether:-9,wei:9},jm={ether:-18,gwei:-9};function Ma(t,e){let r=t.toString();const n=r.startsWith("-");n&&(r=r.slice(1)),r=r.padStart(e,"0");let[s,i]=[r.slice(0,r.length-e),r.slice(r.length-e)];return i=i.replace(/(0+)$/,""),`${n?"-":""}${s||"0"}${i?`.${i}`:""}`}function Ut(t,e="wei"){return Ma(t,Bm[e])}class Di extends Z{constructor({cause:e,message:r}={}){const n=r?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${n?`with reason: ${n}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(Di,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(Di,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class Ua extends Z{constructor({cause:e,maxFeePerGas:r}={}){super(`The fee cap (\`maxFeePerGas\`${r?` = ${Ut(r)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(Ua,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class cu extends Z{constructor({cause:e,maxFeePerGas:r}={}){super(`The fee cap (\`maxFeePerGas\`${r?` = ${Ut(r)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(cu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class lu extends Z{constructor({cause:e,nonce:r}={}){super(`Nonce provided for the transaction ${r?`(${r}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(lu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class uu extends Z{constructor({cause:e,nonce:r}={}){super([`Nonce provided for the transaction ${r?`(${r}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(uu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class du extends Z{constructor({cause:e,nonce:r}={}){super(`Nonce provided for the transaction ${r?`(${r}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(du,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class hu extends Z{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(hu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class fu extends Z{constructor({cause:e,gas:r}={}){super(`The amount of gas ${r?`(${r}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(fu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class pu extends Z{constructor({cause:e,gas:r}={}){super(`The amount of gas ${r?`(${r}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(pu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class gu extends Z{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(gu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class Ba extends Z{constructor({cause:e,maxPriorityFeePerGas:r,maxFeePerGas:n}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${r?` = ${Ut(r)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${n?` = ${Ut(n)} gwei`:""}).`].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(Ba,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class kc extends Z{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}const Lm=/^0x[a-fA-F0-9]{40}$/;function Er(t){return Lm.test(t)}function zr(t){return typeof t[0]=="string"?md(t):Fm(t)}function Fm(t){let e=0;for(const s of t)e+=s.length;const r=new Uint8Array(e);let n=0;for(const s of t)r.set(s,n),n+=s.length;return r}function md(t){return`0x${t.reduce((e,r)=>e+r.replace("0x",""),"")}`}function Wm(t,e){return t.exec(e)?.groups}const Uh=/^tuple(?<array>(\[(\d*)\])*)$/;function mu(t){let e=t.type;if(Uh.test(t.type)&&"components"in t){e="(";const r=t.components.length;for(let s=0;s<r;s++){const i=t.components[s];e+=mu(i),s<r-1&&(e+=", ")}const n=Wm(Uh,t.type);return e+=`)${n?.array??""}`,mu({...t,type:e})}return"indexed"in t&&t.indexed&&(e=`${e} indexed`),t.name?`${e} ${t.name}`:e}function xs(t){let e="";const r=t.length;for(let n=0;n<r;n++){const s=t[n];e+=mu(s),n!==r-1&&(e+=", ")}return e}function zm(t){return t.type==="function"?`function ${t.name}(${xs(t.inputs)})${t.stateMutability&&t.stateMutability!=="nonpayable"?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${xs(t.outputs)})`:""}`:t.type==="event"?`event ${t.name}(${xs(t.inputs)})`:t.type==="error"?`error ${t.name}(${xs(t.inputs)})`:t.type==="constructor"?`constructor(${xs(t.inputs)})${t.stateMutability==="payable"?" payable":""}`:t.type==="fallback"?"fallback()":"receive() external payable"}function pe(t,e,r){return n=>t[e.name||r]?.(n)??e(t,n)}function Hr(t,{includeName:e=!1}={}){if(t.type!=="function"&&t.type!=="event"&&t.type!=="error")throw new nw(t.type);return`${t.name}(${Mc(t.inputs,{includeName:e})})`}function Mc(t,{includeName:e=!1}={}){return t?t.map(r=>Hm(r,{includeName:e})).join(e?", ":","):""}function Hm(t,{includeName:e}){return t.type.startsWith("tuple")?`(${Mc(t.components,{includeName:e})})${t.type.slice(5)}`:t.type+(e&&t.name?` ${t.name}`:"")}class qm extends Z{constructor({docsPath:e}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class Bh extends Z{constructor({docsPath:e}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class wd extends Z{constructor({data:e,params:r,size:n}){super([`Data size of ${n} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${Mc(r,{includeName:!0})})`,`Data:   ${e} (${n} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=r,this.size=n}}class Uc extends Z{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class Vm extends Z{constructor({expectedLength:e,givenLength:r,type:n}){super([`ABI encoding array length mismatch for type ${n}.`,`Expected length: ${e}`,`Given length: ${r}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class Zm extends Z{constructor({expectedSize:e,value:r}){super(`Size of bytes "${r}" (bytes${gt(r)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class Gm extends Z{constructor({expectedLength:e,givenLength:r}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${r}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class V0 extends Z{constructor(e,{docsPath:r}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class Km extends Z{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class Qm extends Z{constructor(e,{docsPath:r}){super([`Encoded event signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class jh extends Z{constructor(e,{docsPath:r}={}){super([`Event ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class ja extends Z{constructor(e,{docsPath:r}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class Ym extends Z{constructor(e,{docsPath:r}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class Jm extends Z{constructor(e,r){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${Hr(e.abiItem)}\`, and`,`\`${r.type}\` in \`${Hr(r.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class Xm extends Z{constructor({expectedSize:e,givenSize:r}){super(`Expected bytes${e}, got bytes${r}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class qn extends Z{constructor({abiItem:e,data:r,params:n,size:s}){super([`Data size of ${s} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${Mc(n,{includeName:!0})})`,`Data:   ${r} (${s} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=r,this.params=n,this.size=s}}class us extends Z{constructor({abiItem:e,param:r}){super([`Expected a topic for indexed event parameter${r.name?` "${r.name}"`:""} on event "${Hr(e,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class ew extends Z{constructor(e,{docsPath:r}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class tw extends Z{constructor(e,{docsPath:r}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class rw extends Z{constructor(e){super([`Value "${e}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class nw extends Z{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}class iw extends Z{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}function sw(t){let e=!0,r="",n=0,s="",i=!1;for(let o=0;o<t.length;o++){const a=t[o];if(["(",")",","].includes(a)&&(e=!0),a==="("&&n++,a===")"&&n--,!!e){if(n===0){if(a===" "&&["event","function",""].includes(s))s="";else if(s+=a,a===")"){i=!0;break}continue}if(a===" "){t[o-1]!==","&&r!==","&&r!==",("&&(r="",e=!1);continue}s+=a,r+=a}}if(!i)throw new Z("Unable to normalize signature.");return s}const Z0=t=>{const e=typeof t=="string"?t:zm(t);return sw(e)},ow=t=>Z0(t);function Lh(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function G0(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function Fh(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function aw(t,e){G0(t);const r=e.outputLen;if(t.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}const fa=BigInt(2**32-1),Wh=BigInt(32);function cw(t,e=!1){return e?{h:Number(t&fa),l:Number(t>>Wh&fa)}:{h:Number(t>>Wh&fa)|0,l:Number(t&fa)|0}}function lw(t,e=!1){let r=new Uint32Array(t.length),n=new Uint32Array(t.length);for(let s=0;s<t.length;s++){const{h:i,l:o}=cw(t[s],e);[r[s],n[s]]=[i,o]}return[r,n]}const uw=(t,e,r)=>t<<r|e>>>32-r,dw=(t,e,r)=>e<<r|t>>>32-r,hw=(t,e,r)=>e<<r-32|t>>>64-r,fw=(t,e,r)=>t<<r-32|e>>>64-r;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const pw=t=>t instanceof Uint8Array,gw=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),mw=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!mw)throw new Error("Non little-endian hardware is not supported");function ww(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function K0(t){if(typeof t=="string"&&(t=ww(t)),!pw(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}class bw{clone(){return this._cloneInto()}}function yw(t){const e=n=>t().update(K0(n)).digest(),r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=()=>t(),e}const[Q0,Y0,J0]=[[],[],[]],vw=BigInt(0),_s=BigInt(1),xw=BigInt(2),_w=BigInt(7),Cw=BigInt(256),Ew=BigInt(113);for(let t=0,e=_s,r=1,n=0;t<24;t++){[r,n]=[n,(2*r+3*n)%5],Q0.push(2*(5*n+r)),Y0.push((t+1)*(t+2)/2%64);let s=vw;for(let i=0;i<7;i++)e=(e<<_s^(e>>_w)*Ew)%Cw,e&xw&&(s^=_s<<(_s<<BigInt(i))-_s);J0.push(s)}const[Sw,Aw]=lw(J0,!0),zh=(t,e,r)=>r>32?hw(t,e,r):uw(t,e,r),Hh=(t,e,r)=>r>32?fw(t,e,r):dw(t,e,r);function $w(t,e=24){const r=new Uint32Array(10);for(let n=24-e;n<24;n++){for(let o=0;o<10;o++)r[o]=t[o]^t[o+10]^t[o+20]^t[o+30]^t[o+40];for(let o=0;o<10;o+=2){const a=(o+8)%10,c=(o+2)%10,l=r[c],u=r[c+1],f=zh(l,u,1)^r[a],m=Hh(l,u,1)^r[a+1];for(let g=0;g<50;g+=10)t[o+g]^=f,t[o+g+1]^=m}let s=t[2],i=t[3];for(let o=0;o<24;o++){const a=Y0[o],c=zh(s,i,a),l=Hh(s,i,a),u=Q0[o];s=t[u],i=t[u+1],t[u]=c,t[u+1]=l}for(let o=0;o<50;o+=10){for(let a=0;a<10;a++)r[a]=t[o+a];for(let a=0;a<10;a++)t[o+a]^=~r[(a+2)%10]&r[(a+4)%10]}t[0]^=Sw[n],t[1]^=Aw[n]}r.fill(0)}class bd extends bw{constructor(e,r,n,s=!1,i=24){if(super(),this.blockLen=e,this.suffix=r,this.outputLen=n,this.enableXOF=s,this.rounds=i,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Lh(n),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=gw(this.state)}keccak(){$w(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){Fh(this);const{blockLen:r,state:n}=this;e=K0(e);const s=e.length;for(let i=0;i<s;){const o=Math.min(r-this.pos,s-i);for(let a=0;a<o;a++)n[this.pos++]^=e[i++];this.pos===r&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:r,pos:n,blockLen:s}=this;e[n]^=r,r&128&&n===s-1&&this.keccak(),e[s-1]^=128,this.keccak()}writeInto(e){Fh(this,!1),G0(e),this.finish();const r=this.state,{blockLen:n}=this;for(let s=0,i=e.length;s<i;){this.posOut>=n&&this.keccak();const o=Math.min(n-this.posOut,i-s);e.set(r.subarray(this.posOut,this.posOut+o),s),this.posOut+=o,s+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return Lh(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(aw(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:r,suffix:n,outputLen:s,rounds:i,enableXOF:o}=this;return e||(e=new bd(r,n,s,o,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=n,e.outputLen=s,e.enableXOF=o,e.destroyed=this.destroyed,e}}const Tw=(t,e,r)=>yw(()=>new bd(e,t,r)),Iw=Tw(1,136,256/8);function It(t,e){const r=e||"hex",n=Iw(Cr(t,{strict:!1})?fn(t):t);return r==="bytes"?n:Gr(n)}const Rw=t=>It(fn(t)),yd=t=>Rw(ow(t));function ft(t,e,r,{strict:n}={}){return Cr(t,{strict:!1})?Pw(t,e,r,{strict:n}):Ow(t,e,r,{strict:n})}function X0(t,e){if(typeof e=="number"&&e>0&&e>gt(t)-1)throw new j0({offset:e,position:"start",size:gt(t)})}function ep(t,e,r){if(typeof e=="number"&&typeof r=="number"&&gt(t)!==r-e)throw new j0({offset:r,position:"end",size:gt(t)})}function Ow(t,e,r,{strict:n}={}){X0(t,e);const s=t.slice(e,r);return n&&ep(s,e,r),s}function Pw(t,e,r,{strict:n}={}){X0(t,e);const s=`0x${t.replace("0x","").slice((e??0)*2,(r??t.length)*2)}`;return n&&ep(s,e,r),s}function Ho(t,e){if(t.length!==e.length)throw new Gm({expectedLength:t.length,givenLength:e.length});const r=Dw({params:t,values:e}),n=xd(r);return n.length===0?"0x":n}function Dw({params:t,values:e}){const r=[];for(let n=0;n<t.length;n++)r.push(vd({param:t[n],value:e[n]}));return r}function vd({param:t,value:e}){const r=Bc(t.type);if(r){const[n,s]=r;return kw(e,{length:n,param:{...t,type:s}})}if(t.type==="tuple")return Lw(e,{param:t});if(t.type==="address")return Nw(e);if(t.type==="bool")return Uw(e);if(t.type.startsWith("uint")||t.type.startsWith("int")){const n=t.type.startsWith("int");return Bw(e,{signed:n})}if(t.type.startsWith("bytes"))return Mw(e,{param:t});if(t.type==="string")return jw(e);throw new ew(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function xd(t){let e=0;for(let i=0;i<t.length;i++){const{dynamic:o,encoded:a}=t[i];o?e+=32:e+=gt(a)}const r=[],n=[];let s=0;for(let i=0;i<t.length;i++){const{dynamic:o,encoded:a}=t[i];o?(r.push(ve(e+s,{size:32})),n.push(a),s+=gt(a)):r.push(a)}return zr([...r,...n])}function Nw(t){if(!Er(t))throw new Ws({address:t});return{dynamic:!1,encoded:un(t.toLowerCase())}}function kw(t,{length:e,param:r}){const n=e===null;if(!Array.isArray(t))throw new rw(t);if(!n&&t.length!==e)throw new Vm({expectedLength:e,givenLength:t.length,type:`${r.type}[${e}]`});let s=!1;const i=[];for(let o=0;o<t.length;o++){const a=vd({param:r,value:t[o]});a.dynamic&&(s=!0),i.push(a)}if(n||s){const o=xd(i);if(n){const a=ve(i.length,{size:32});return{dynamic:!0,encoded:i.length>0?zr([a,o]):a}}if(s)return{dynamic:!0,encoded:o}}return{dynamic:!1,encoded:zr(i.map(({encoded:o})=>o))}}function Mw(t,{param:e}){const[,r]=e.type.split("bytes"),n=gt(t);if(!r){let s=t;return n%32!==0&&(s=un(s,{dir:"right",size:Math.ceil((t.length-2)/2/32)*32})),{dynamic:!0,encoded:zr([un(ve(n,{size:32})),s])}}if(n!==parseInt(r))throw new Zm({expectedSize:parseInt(r),value:t});return{dynamic:!1,encoded:un(t,{dir:"right"})}}function Uw(t){return{dynamic:!1,encoded:un(F0(t))}}function Bw(t,{signed:e}){return{dynamic:!1,encoded:ve(t,{size:32,signed:e})}}function jw(t){const e=fd(t),r=Math.ceil(gt(e)/32),n=[];for(let s=0;s<r;s++)n.push(un(ft(e,s*32,(s+1)*32),{dir:"right"}));return{dynamic:!0,encoded:zr([un(ve(gt(e),{size:32})),...n])}}function Lw(t,{param:e}){let r=!1;const n=[];for(let s=0;s<e.components.length;s++){const i=e.components[s],o=Array.isArray(t)?s:i.name,a=vd({param:i,value:t[o]});n.push(a),a.dynamic&&(r=!0)}return{dynamic:r,encoded:r?xd(n):zr(n.map(({encoded:s})=>s))}}function Bc(t){const e=t.match(/^(.*)\[(\d+)?\]$/);return e?[e[2]?Number(e[2]):null,e[1]]:void 0}const Fw=t=>It(fn(t)),_d=t=>ft(Fw(Z0(t)),0,4);function qo({abi:t,args:e=[],name:r}){const n=Cr(r,{strict:!1}),s=t.filter(o=>n?o.type==="function"?_d(o)===r:o.type==="event"?yd(o)===r:!1:"name"in o&&o.name===r);if(s.length===0)return;if(s.length===1)return s[0];let i;for(const o of s){if(!("inputs"in o))continue;if(!e||e.length===0){if(!o.inputs||o.inputs.length===0)return o;continue}if(!o.inputs||o.inputs.length===0||o.inputs.length!==e.length)continue;if(e.every((c,l)=>{const u="inputs"in o&&o.inputs[l];return u?wu(c,u):!1})){if(i&&"inputs"in i&&i.inputs){const c=tp(o.inputs,i.inputs,e);if(c)throw new Jm({abiItem:o,type:c[0]},{abiItem:i,type:c[1]})}i=o}}return i||s[0]}function wu(t,e){const r=typeof t,n=e.type;switch(n){case"address":return Er(t);case"bool":return r==="boolean";case"function":return r==="string";case"string":return r==="string";default:return n==="tuple"&&"components"in e?Object.values(e.components).every((s,i)=>wu(Object.values(t)[i],s)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n)?r==="number"||r==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n)?r==="string"||t instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n)?Array.isArray(t)&&t.every(s=>wu(s,{...e,type:n.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function tp(t,e,r){for(const n in t){const s=t[n],i=e[n];if(s.type==="tuple"&&i.type==="tuple"&&"components"in s&&"components"in i)return tp(s.components,i.components,r[n]);const o=[s.type,i.type];if(o.includes("address")&&o.includes("bytes20")?!0:o.includes("address")&&o.includes("string")||o.includes("address")&&o.includes("bytes")?Er(r[n]):!1)return o}}function Vo({abi:t,eventName:e,args:r}){let n=t[0];if(e&&(n=qo({abi:t,args:r,name:e}),!n))throw new jh(e,{docsPath:"/docs/contract/encodeEventTopics"});if(n.type!=="event")throw new jh(void 0,{docsPath:"/docs/contract/encodeEventTopics"});const s=Hr(n),i=yd(s);let o=[];if(r&&"inputs"in n){const a=n.inputs?.filter(l=>"indexed"in l&&l.indexed),c=Array.isArray(r)?r:Object.values(r).length>0?a?.map(l=>r[l.name])??[]:[];c.length>0&&(o=a?.map((l,u)=>Array.isArray(c[u])?c[u].map((f,m)=>qh({param:l,value:c[u][m]})):c[u]?qh({param:l,value:c[u]}):null)??[])}return[i,...o]}function qh({param:t,value:e}){if(t.type==="string"||t.type==="bytes")return It(fn(e));if(t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/))throw new iw(t.type);return Ho([t],[e])}function jc(t,{method:e}){const r={};return t.transport.type==="fallback"&&t.transport.onResponse?.(({method:n,response:s,status:i,transport:o})=>{i==="success"&&e===n&&(r[s]=o.request)}),n=>r[n]||t.request}async function rp(t,{address:e,abi:r,args:n,eventName:s,fromBlock:i,strict:o,toBlock:a}){const c=jc(t,{method:"eth_newFilter"}),l=s?Vo({abi:r,args:n,eventName:s}):void 0,u=await t.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof i=="bigint"?ve(i):i,toBlock:typeof a=="bigint"?ve(a):a,topics:l}]});return{abi:r,args:n,eventName:s,id:u,request:c(u),strict:o,type:"event"}}function er(t){return typeof t=="string"?{address:t,type:"json-rpc"}:t}function Sn({abi:t,args:e,functionName:r}){let n=t[0];if(r&&(n=qo({abi:t,args:e,name:r}),!n))throw new ja(r,{docsPath:"/docs/contract/encodeFunctionData"});if(n.type!=="function")throw new ja(void 0,{docsPath:"/docs/contract/encodeFunctionData"});const s=Hr(n),i=_d(s),o="inputs"in n&&n.inputs?Ho(n.inputs,e??[]):void 0;return md([i,o??"0x"])}const np={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},Ww={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},zw={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function Cd(t,e){const r=e?`${e}${t.toLowerCase()}`:t.substring(2).toLowerCase(),n=It(Fr(r),"bytes"),s=(e?r.substring(`${e}0x`.length):r).split("");for(let i=0;i<40;i+=2)n[i>>1]>>4>=8&&s[i]&&(s[i]=s[i].toUpperCase()),(n[i>>1]&15)>=8&&s[i+1]&&(s[i+1]=s[i+1].toUpperCase());return`0x${s.join("")}`}function Ht(t,e){if(!Er(t))throw new Ws({address:t});return Cd(t,e)}function Lc(t,e){if(e==="0x"&&t.length>0)throw new Uc;if(gt(e)&&gt(e)<32)throw new wd({data:e,params:t,size:gt(e)});return Hw({data:e,params:t})}function Hw({data:t,params:e}){const r=[];let n=0;for(let s=0;s<e.length;s++){if(n>=gt(t))throw new wd({data:t,params:e,size:gt(t)});const i=e[s],{consumed:o,value:a}=Ni({data:t,param:i,position:n});r.push(a),n+=o}return r}function Ni({data:t,param:e,position:r}){const n=Bc(e.type);if(n){const[i,o]=n;return Vw(t,{length:i,param:{...e,type:o},position:r})}if(e.type==="tuple")return Yw(t,{param:e,position:r});if(e.type==="string")return Qw(t,{position:r});if(e.type.startsWith("bytes"))return Gw(t,{param:e,position:r});const s=ft(t,r,r+32,{strict:!0});if(e.type.startsWith("uint")||e.type.startsWith("int"))return Kw(s,{param:e});if(e.type==="address")return qw(s);if(e.type==="bool")return Zw(s);throw new tw(e.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function qw(t){return{consumed:32,value:Cd(ft(t,-20))}}function Vw(t,{param:e,length:r,position:n}){if(!r){const o=Et(ft(t,n,n+32,{strict:!0})),a=Et(ft(t,o,o+32,{strict:!0}));let c=0;const l=[];for(let u=0;u<a;++u){const f=Ni({data:ft(t,o+32),param:e,position:c});c+=f.consumed,l.push(f.value)}return{value:l,consumed:32}}if(La(e)){const a=!Bc(e.type)?.[0];let c=0;const l=[];for(let u=0;u<r;++u){const f=Et(ft(t,n,n+32,{strict:!0})),m=Ni({data:ft(t,f),param:e,position:a?c:u*32});c+=m.consumed,l.push(m.value)}return{value:l,consumed:32}}let s=0;const i=[];for(let o=0;o<r;++o){const a=Ni({data:t,param:e,position:n+s});s+=a.consumed,i.push(a.value)}return{value:i,consumed:s}}function Zw(t){return{consumed:32,value:Om(t)}}function Gw(t,{param:e,position:r}){const[n,s]=e.type.split("bytes");if(!s){const o=Et(ft(t,r,r+32,{strict:!0})),a=Et(ft(t,o,o+32,{strict:!0}));return a===0?{consumed:32,value:"0x"}:{consumed:32,value:ft(t,o+32,o+32+a,{strict:!0})}}return{consumed:32,value:ft(t,r,r+parseInt(s),{strict:!0})}}function Kw(t,{param:e}){const r=e.type.startsWith("int");return{consumed:32,value:parseInt(e.type.split("int")[1]||"256")>48?Dc(t,{signed:r}):Et(t,{signed:r})}}function Qw(t,{position:e}){const r=Et(ft(t,e,e+32,{strict:!0})),n=Et(ft(t,r,r+32,{strict:!0}));return n===0?{consumed:32,value:""}:{consumed:32,value:gd(zn(ft(t,r+32,r+32+n,{strict:!0})))}}function Yw(t,{param:e,position:r}){const n=e.components.length===0||e.components.some(({name:o})=>!o),s=n?[]:{};let i=0;if(La(e)){const o=Et(ft(t,r,r+32,{strict:!0}));for(let a=0;a<e.components.length;++a){const c=e.components[a],l=Ni({data:ft(t,o),param:c,position:i});i+=l.consumed,s[n?a:c?.name]=l.value}return{consumed:32,value:s}}for(let o=0;o<e.components.length;++o){const a=e.components[o],c=Ni({data:t,param:a,position:r+i});i+=c.consumed,s[n?o:a?.name]=c.value}return{consumed:i,value:s}}function La(t){const{type:e}=t;if(e==="string"||e==="bytes"||e.endsWith("[]"))return!0;if(e==="tuple")return t.components?.some(La);const r=Bc(t.type);return!!(r&&La({...t,type:r[1]}))}function Jw({abi:t,data:e}){const r=ft(e,0,4);if(r==="0x")throw new Uc;const s=[...t||[],Ww,zw].find(i=>i.type==="error"&&r===_d(Hr(i)));if(!s)throw new V0(r,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:s,args:"inputs"in s&&s.inputs&&s.inputs.length>0?Lc(s.inputs,ft(e,4)):void 0,errorName:s.name}}const Ot=(t,e,r)=>JSON.stringify(t,(n,s)=>{const i=typeof s=="bigint"?s.toString():s;return typeof e=="function"?e(n,i):i},r);function ip({abiItem:t,args:e,includeFunctionName:r=!0,includeName:n=!1}){if("name"in t&&"inputs"in t&&t.inputs)return`${r?t.name:""}(${t.inputs.map((s,i)=>`${n&&s.name?`${s.name}: `:""}${typeof e[i]=="object"?Ot(e[i]):e[i]}`).join(", ")})`}function Ed(t,e="wei"){return Ma(t,Um[e])}function Zo(t){const e=Object.entries(t).map(([n,s])=>s===void 0||s===!1?null:[n,s]).filter(Boolean),r=e.reduce((n,[s])=>Math.max(n,s.length),0);return e.map(([n,s])=>`  ${`${n}:`.padEnd(r+1)}  ${s}`).join(`
`)}class Xw extends Z{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class eb extends Z{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",Zo(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class tb extends Z{constructor(e,{account:r,docsPath:n,chain:s,data:i,gas:o,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:f,value:m}){const g=Zo({chain:s&&`${s?.name} (id: ${s?.id})`,from:r?.address,to:f,value:typeof m<"u"&&`${Ed(m)} ${s?.nativeCurrency?.symbol||"ETH"}`,data:i,gas:o,gasPrice:typeof a<"u"&&`${Ut(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${Ut(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${Ut(l)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class sp extends Z{constructor({blockHash:e,blockNumber:r,blockTag:n,hash:s,index:i}){let o="Transaction";n&&i!==void 0&&(o=`Transaction at block time "${n}" at index "${i}"`),e&&i!==void 0&&(o=`Transaction at block hash "${e}" at index "${i}"`),r&&i!==void 0&&(o=`Transaction at block number "${r}" at index "${i}"`),s&&(o=`Transaction with hash "${s}"`),super(`${o} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class op extends Z{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class rb extends Z{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}class ap extends Z{constructor(e,{account:r,docsPath:n,chain:s,data:i,gas:o,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:f,value:m}){const g=r?er(r):void 0,w=Zo({from:g?.address,to:f,value:typeof m<"u"&&`${Ed(m)} ${s?.nativeCurrency?.symbol||"ETH"}`,data:i,gas:o,gasPrice:typeof a<"u"&&`${Ut(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${Ut(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${Ut(l)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class Sd extends Z{constructor(e,{abi:r,args:n,contractAddress:s,docsPath:i,functionName:o,sender:a}){const c=qo({abi:r,args:n,name:o}),l=c?ip({abiItem:c,args:n,includeFunctionName:!1,includeName:!1}):void 0,u=c?Hr(c,{includeName:!0}):void 0,f=Zo({address:s&&vm(s),function:u,args:l&&l!=="()"&&`${[...Array(o?.length??0).keys()].map(()=>" ").join("")}${l}`,sender:a});super(e.shortMessage||`An unknown error occurred while executing the contract function "${o}".`,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",f].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=r,this.args=n,this.cause=e,this.contractAddress=s,this.functionName=o,this.sender=a}}class bu extends Z{constructor({abi:e,data:r,functionName:n,message:s}){let i,o,a,c;if(r&&r!=="0x")try{o=Jw({abi:e,data:r});const{abiItem:u,errorName:f,args:m}=o;if(f==="Error")c=m[0];else if(f==="Panic"){const[g]=m;c=np[g]}else{const g=u?Hr(u,{includeName:!0}):void 0,w=u&&m?ip({abiItem:u,args:m,includeFunctionName:!1,includeName:!1}):void 0;a=[g?`Error: ${g}`:"",w&&w!=="()"?`       ${[...Array(f?.length??0).keys()].map(()=>" ").join("")}${w}`:""]}}catch(u){i=u}else s&&(c=s);let l;i instanceof V0&&(l=i.signature,a=[`Unable to decode signature "${l}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${l}.`]),super(c&&c!=="execution reverted"||l?[`The contract function "${n}" reverted with the following ${l?"signature":"reason"}:`,c||l].join(`
`):`The contract function "${n}" reverted.`,{cause:i,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=o,this.reason=c,this.signature=l}}class nb extends Z{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class Ad extends Z{constructor({data:e,message:r}){super(r||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}class Ds extends Z{constructor({body:e,details:r,headers:n,status:s,url:i}){super("HTTP request failed.",{details:r,metaMessages:[s&&`Status: ${s}`,`URL: ${Pc(i)}`,e&&`Request body: ${Ot(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=n,this.status=s,this.url=i}}class ib extends Z{constructor({body:e,details:r,url:n}){super("WebSocket request failed.",{details:r,metaMessages:[`URL: ${Pc(n)}`,`Request body: ${Ot(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class $d extends Z{constructor({body:e,error:r,url:n}){super("RPC Request failed.",{cause:r,details:r.message,metaMessages:[`URL: ${Pc(n)}`,`Request body: ${Ot(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=r.code}}class yu extends Z{constructor({body:e,url:r}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${Pc(r)}`,`Request body: ${Ot(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}const sb=-1;class jt extends Z{constructor(e,{code:r,docsPath:n,metaMessages:s,shortMessage:i}){super(i,{cause:e,docsPath:n,metaMessages:s||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof $d?e.code:r??sb}}class ds extends jt{constructor(e,r){super(e,r),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=r.data}}class zs extends jt{constructor(e){super(e,{code:zs.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(zs,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class Hs extends jt{constructor(e){super(e,{code:Hs.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(Hs,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class qs extends jt{constructor(e){super(e,{code:qs.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(qs,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class Vs extends jt{constructor(e){super(e,{code:Vs.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(Vs,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class ji extends jt{constructor(e){super(e,{code:ji.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(ji,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class Vn extends jt{constructor(e){super(e,{code:Vn.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(Vn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class Zs extends jt{constructor(e){super(e,{code:Zs.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(Zs,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class Li extends jt{constructor(e){super(e,{code:Li.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(Li,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class Gs extends jt{constructor(e){super(e,{code:Gs.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(Gs,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class Ks extends jt{constructor(e){super(e,{code:Ks.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(Ks,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class Qs extends jt{constructor(e){super(e,{code:Qs.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(Qs,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class Ys extends jt{constructor(e){super(e,{code:Ys.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(Ys,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class Mt extends ds{constructor(e){super(e,{code:Mt.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(Mt,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class Js extends ds{constructor(e){super(e,{code:Js.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(Js,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class Xs extends ds{constructor(e){super(e,{code:Xs.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(Xs,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class eo extends ds{constructor(e){super(e,{code:eo.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(eo,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class to extends ds{constructor(e){super(e,{code:to.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(to,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class cr extends ds{constructor(e){super(e,{code:cr.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(cr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class ob extends jt{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}const ab=3;function ro(t,{abi:e,address:r,args:n,docsPath:s,functionName:i,sender:o}){const{code:a,data:c,message:l,shortMessage:u}=t instanceof Ad?t:t instanceof Z?t.walk(m=>"data"in m)||t.walk():{},f=t instanceof Uc?new nb({functionName:i}):[ab,ji.code].includes(a)&&(c||l||u)?new bu({abi:e,data:typeof c=="object"?c.data:c,functionName:i,message:u??l}):t;return new Sd(f,{abi:e,args:n,contractAddress:r,docsPath:s,functionName:i,sender:o})}class hs extends Z{constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}class cb extends Z{constructor(e,{account:r,docsPath:n,chain:s,data:i,gas:o,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:f,value:m}){const g=Zo({from:r?.address,to:f,value:typeof m<"u"&&`${Ed(m)} ${s?.nativeCurrency?.symbol||"ETH"}`,data:i,gas:o,gasPrice:typeof a<"u"&&`${Ut(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${Ut(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${Ut(l)} gwei`,nonce:u});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}function Td(t,e){const r=(t.details||"").toLowerCase(),n=t.walk(s=>s.code===Di.code);return n instanceof Z?new Di({cause:t,message:n.details}):Di.nodeMessage.test(r)?new Di({cause:t,message:t.details}):Ua.nodeMessage.test(r)?new Ua({cause:t,maxFeePerGas:e?.maxFeePerGas}):cu.nodeMessage.test(r)?new cu({cause:t,maxFeePerGas:e?.maxFeePerGas}):lu.nodeMessage.test(r)?new lu({cause:t,nonce:e?.nonce}):uu.nodeMessage.test(r)?new uu({cause:t,nonce:e?.nonce}):du.nodeMessage.test(r)?new du({cause:t,nonce:e?.nonce}):hu.nodeMessage.test(r)?new hu({cause:t}):fu.nodeMessage.test(r)?new fu({cause:t,gas:e?.gas}):pu.nodeMessage.test(r)?new pu({cause:t,gas:e?.gas}):gu.nodeMessage.test(r)?new gu({cause:t}):Ba.nodeMessage.test(r)?new Ba({cause:t,maxFeePerGas:e?.maxFeePerGas,maxPriorityFeePerGas:e?.maxPriorityFeePerGas}):new kc({cause:t})}function lb(t,{docsPath:e,...r}){const n=(()=>{const s=Td(t,r);return s instanceof kc?t:s})();return new cb(n,{docsPath:e,...r})}function Id(t,{format:e}){if(!e)return{};const r={};function n(i){const o=Object.keys(i);for(const a of o)a in t&&(r[a]=t[a]),i[a]&&typeof i[a]=="object"&&!Array.isArray(i[a])&&n(i[a])}const s=e(t||{});return n(s),r}function Go(t){const{account:e,gasPrice:r,maxFeePerGas:n,maxPriorityFeePerGas:s,to:i}=t,o=e?er(e):void 0;if(o&&!Er(o.address))throw new Ws({address:o.address});if(i&&!Er(i))throw new Ws({address:i});if(typeof r<"u"&&(typeof n<"u"||typeof s<"u"))throw new Xw;if(n&&n>2n**256n-1n)throw new Ua({maxFeePerGas:n});if(s&&n&&s>n)throw new Ba({maxFeePerGas:n,maxPriorityFeePerGas:s})}class ub extends Z{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class Rd extends Z{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class db extends Z{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Ut(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class cp extends Z{constructor({blockHash:e,blockNumber:r}){let n="Block";e&&(n=`Block at hash "${e}"`),r&&(n=`Block at number "${r}"`),super(`${n} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}async function pn(t,{blockHash:e,blockNumber:r,blockTag:n,includeTransactions:s}={}){const i=n??"latest",o=s??!1,a=r!==void 0?ve(r):void 0;let c=null;if(e?c=await t.request({method:"eth_getBlockByHash",params:[e,o]}):c=await t.request({method:"eth_getBlockByNumber",params:[a||i,o]}),!c)throw new cp({blockHash:e,blockNumber:r});return(t.chain?.formatters?.block?.format||H0)(c)}async function Od(t){const e=await t.request({method:"eth_gasPrice"});return BigInt(e)}async function hb(t,e){return lp(t,e)}async function lp(t,e){const{block:r,chain:n=t.chain,request:s}=e||{};if(typeof n?.fees?.defaultPriorityFee=="function"){const i=r||await pe(t,pn,"getBlock")({});return n.fees.defaultPriorityFee({block:i,client:t,request:s})}if(typeof n?.fees?.defaultPriorityFee<"u")return n?.fees?.defaultPriorityFee;try{const i=await t.request({method:"eth_maxPriorityFeePerGas"});return Dc(i)}catch{const[i,o]=await Promise.all([r?Promise.resolve(r):pe(t,pn,"getBlock")({}),pe(t,Od,"getGasPrice")({})]);if(typeof i.baseFeePerGas!="bigint")throw new Rd;const a=o-i.baseFeePerGas;return a<0n?0n:a}}async function fb(t,e){return vu(t,e)}async function vu(t,e){const{block:r,chain:n=t.chain,request:s,type:i="eip1559"}=e||{},o=await(async()=>typeof n?.fees?.baseFeeMultiplier=="function"?n.fees.baseFeeMultiplier({block:r,client:t,request:s}):n?.fees?.baseFeeMultiplier??1.2)();if(o<1)throw new ub;const c=10**(o.toString().split(".")[1]?.length??0),l=m=>m*BigInt(Math.ceil(o*c))/BigInt(c),u=r||await pe(t,pn,"getBlock")({});if(typeof n?.fees?.estimateFeesPerGas=="function")return n.fees.estimateFeesPerGas({block:r,client:t,multiply:l,request:s,type:i});if(i==="eip1559"){if(typeof u.baseFeePerGas!="bigint")throw new Rd;const m=s?.maxPriorityFeePerGas?s.maxPriorityFeePerGas:await lp(t,{block:u,chain:n,request:s}),g=l(u.baseFeePerGas);return{maxFeePerGas:s?.maxFeePerGas??g+m,maxPriorityFeePerGas:m}}return{gasPrice:s?.gasPrice??l(await pe(t,Od,"getGasPrice")({}))}}async function up(t,{address:e,blockTag:r="latest",blockNumber:n}){const s=await t.request({method:"eth_getTransactionCount",params:[e,n?ve(n):r]});return Et(s)}function pb(t){if(t.type)return t.type;if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")return"eip1559";if(typeof t.gasPrice<"u")return typeof t.accessList<"u"?"eip2930":"legacy";throw new eb({transaction:t})}async function Fc(t,e){const{account:r=t.account,chain:n,gas:s,nonce:i,type:o}=e;if(!r)throw new hs;const a=er(r),c=await pe(t,pn,"getBlock")({blockTag:"latest"}),l={...e,from:a.address};if(typeof i>"u"&&(l.nonce=await pe(t,up,"getTransactionCount")({address:a.address,blockTag:"pending"})),typeof o>"u")try{l.type=pb(l)}catch{l.type=typeof c.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(l.type==="eip1559"){const{maxFeePerGas:u,maxPriorityFeePerGas:f}=await vu(t,{block:c,chain:n,request:l});if(typeof e.maxPriorityFeePerGas>"u"&&e.maxFeePerGas&&e.maxFeePerGas<f)throw new db({maxPriorityFeePerGas:f});l.maxPriorityFeePerGas=f,l.maxFeePerGas=u}else{if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")throw new Rd;const{gasPrice:u}=await vu(t,{block:c,chain:n,request:l,type:"legacy"});l.gasPrice=u}return typeof s>"u"&&(l.gas=await pe(t,Pd,"estimateGas")({...l,account:{address:a.address,type:"json-rpc"}})),Go(l),l}async function Pd(t,e){const r=e.account??t.account;if(!r)throw new hs({docsPath:"/docs/actions/public/estimateGas"});const n=er(r);try{const{accessList:s,blockNumber:i,blockTag:o,data:a,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:f,nonce:m,to:g,value:w,..._}=n.type==="local"?await Fc(t,e):e,T=(i?ve(i):void 0)||o;Go(e);const b=t.chain?.formatters?.transactionRequest?.format,x=(b||Nc)({...Id(_,{format:b}),from:n.address,accessList:s,data:a,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:f,nonce:m,to:g,value:w}),C=await t.request({method:"eth_estimateGas",params:T?[x,T]:[x]});return BigInt(C)}catch(s){throw lb(s,{...e,account:n,chain:t.chain})}}async function gb(t,{abi:e,address:r,args:n,functionName:s,...i}){const o=Sn({abi:e,args:n,functionName:s});try{return await pe(t,Pd,"estimateGas")({data:o,to:r,...i})}catch(a){const c=i.account?er(i.account):void 0;throw ro(a,{abi:e,address:r,args:n,docsPath:"/docs/contract/estimateContractGas",functionName:s,sender:c?.address})}}const Vh="/docs/contract/decodeEventLog";function Ko({abi:t,data:e,strict:r,topics:n}){const s=r??!0,[i,...o]=n;if(!i)throw new Km({docsPath:Vh});const a=t.find(w=>w.type==="event"&&i===yd(Hr(w)));if(!(a&&"name"in a)||a.type!=="event")throw new Qm(i,{docsPath:Vh});const{name:c,inputs:l}=a,u=l?.some(w=>!("name"in w&&w.name));let f=u?[]:{};const m=l.filter(w=>"indexed"in w&&w.indexed);for(let w=0;w<m.length;w++){const _=m[w],v=o[w];if(!v)throw new us({abiItem:a,param:_});f[_.name||w]=mb({param:_,value:v})}const g=l.filter(w=>!("indexed"in w&&w.indexed));if(g.length>0){if(e&&e!=="0x")try{const w=Lc(g,e);if(w)if(u)f=[...f,...w];else for(let _=0;_<g.length;_++)f[g[_].name]=w[_]}catch(w){if(s)throw w instanceof wd?new qn({abiItem:a,data:w.data,params:w.params,size:w.size}):w}else if(s)throw new qn({abiItem:a,data:"0x",params:g,size:0})}return{eventName:c,args:Object.values(f).length>0?f:void 0}}function mb({param:t,value:e}){return t.type==="string"||t.type==="bytes"||t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/)?e:(Lc([t],e)||[])[0]}async function Dd(t,{address:e,blockHash:r,fromBlock:n,toBlock:s,event:i,events:o,args:a,strict:c}={}){const l=c??!1,u=o??(i?[i]:void 0);let f=[];u&&(f=[u.flatMap(g=>Vo({abi:[g],eventName:g.name,args:a}))],i&&(f=f[0]));let m;return r?m=await t.request({method:"eth_getLogs",params:[{address:e,topics:f,blockHash:r}]}):m=await t.request({method:"eth_getLogs",params:[{address:e,topics:f,fromBlock:typeof n=="bigint"?ve(n):n,toBlock:typeof s=="bigint"?ve(s):s}]}),m.map(g=>{try{const{eventName:w,args:_}=u?Ko({abi:u,data:g.data,topics:g.topics,strict:l}):{eventName:void 0,args:void 0};return ar(g,{args:_,eventName:w})}catch(w){let _,v;if(w instanceof qn||w instanceof us){if(l)return;_=w.abiItem.name,v=w.abiItem.inputs?.some(T=>!("name"in T&&T.name))}return ar(g,{args:v?[]:{},eventName:_})}}).filter(Boolean)}async function dp(t,{abi:e,address:r,args:n,blockHash:s,eventName:i,fromBlock:o,toBlock:a,strict:c}){const l=i?qo({abi:e,name:i}):void 0,u=l?void 0:e.filter(f=>f.type==="event");return pe(t,Dd,"getLogs")({address:r,args:n,blockHash:s,event:l,events:u,fromBlock:o,toBlock:a,strict:c})}const Tl="/docs/contract/decodeFunctionResult";function fs({abi:t,args:e,functionName:r,data:n}){let s=t[0];if(r&&(s=qo({abi:t,args:e,name:r}),!s))throw new ja(r,{docsPath:Tl});if(s.type!=="function")throw new ja(void 0,{docsPath:Tl});if(!s.outputs)throw new Ym(s.name,{docsPath:Tl});const i=Lc(s.outputs,n);if(i&&i.length>1)return i;if(i&&i.length===1)return i[0]}const wb="modulepreload",bb=function(t){return"/"+t},Zh={},Zn=function(e,r,n){let s=Promise.resolve();if(r&&r.length>0){const i=document.getElementsByTagName("link");s=Promise.all(r.map(o=>{if(o=bb(o),o in Zh)return;Zh[o]=!0;const a=o.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!n)for(let f=i.length-1;f>=0;f--){const m=i[f];if(m.href===o&&(!a||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":wb,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((f,m)=>{u.addEventListener("load",f),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},xu=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],hp=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],fp=[...hp,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],yb=[...hp,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],Gh=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],Kh=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],vb=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}],xb="0x82ad56cb";function ps({blockNumber:t,chain:e,contract:r}){const n=e?.contracts?.[r];if(!n)throw new au({chain:e,contract:{name:r}});if(t&&n.blockCreated&&n.blockCreated>t)throw new au({blockNumber:t,chain:e,contract:{name:r,blockCreated:n.blockCreated}});return n.address}function _b(t,{docsPath:e,...r}){const n=(()=>{const s=Td(t,r);return s instanceof kc?t:s})();return new ap(n,{docsPath:e,...r})}const Il=new Map;function Nd({fn:t,id:e,shouldSplitBatch:r,wait:n=0,sort:s}){const i=async()=>{const u=c();o();const f=u.map(({args:m})=>m);f.length!==0&&t(f).then(m=>{s&&Array.isArray(m)&&m.sort(s);for(let g=0;g<u.length;g++){const{pendingPromise:w}=u[g];w.resolve?.([m[g],m])}}).catch(m=>{for(let g=0;g<u.length;g++){const{pendingPromise:w}=u[g];w.reject?.(m)}})},o=()=>Il.delete(e),a=()=>c().map(({args:u})=>u),c=()=>Il.get(e)||[],l=u=>Il.set(e,[...c(),u]);return{flush:o,async schedule(u){const f={},m=new Promise((_,v)=>{f.resolve=_,f.reject=v});return r?.([...a(),u])&&i(),c().length>0?(l({args:u,pendingPromise:f}),m):(l({args:u,pendingPromise:f}),setTimeout(i,n),m)}}}async function Wc(t,e){const{account:r=t.account,batch:n=!!t.batch?.multicall,blockNumber:s,blockTag:i="latest",accessList:o,data:a,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:f,nonce:m,to:g,value:w,..._}=e,v=r?er(r):void 0;try{Go(e);const b=(s?ve(s):void 0)||i,E=t.chain?.formatters?.transactionRequest?.format,C=(E||Nc)({...Id(_,{format:E}),from:v?.address,accessList:o,data:a,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:f,nonce:m,to:g,value:w});if(n&&Cb({request:C}))try{return await Eb(t,{...C,blockNumber:s,blockTag:i})}catch(h){if(!(h instanceof q0)&&!(h instanceof au))throw h}const A=await t.request({method:"eth_call",params:b?[C,b]:[C]});return A==="0x"?{data:void 0}:{data:A}}catch(T){const b=Sb(T),{offchainLookup:E,offchainLookupSignature:x}=await Zn(()=>import("./ccip._fmMKy-U.js"),__vite__mapDeps([0,1]));if(b?.slice(0,10)===x&&g)return{data:await E(t,{data:b,to:g})};throw _b(T,{...e,account:v,chain:t.chain})}}function Cb({request:t}){const{data:e,to:r,...n}=t;return!(!e||e.startsWith(xb)||!r||Object.values(n).filter(s=>typeof s<"u").length>0)}async function Eb(t,e){const{batchSize:r=1024,wait:n=0}=typeof t.batch?.multicall=="object"?t.batch.multicall:{},{blockNumber:s,blockTag:i="latest",data:o,multicallAddress:a,to:c}=e;let l=a;if(!l){if(!t.chain)throw new q0;l=ps({blockNumber:s,chain:t.chain,contract:"multicall3"})}const f=(s?ve(s):void 0)||i,{schedule:m}=Nd({id:`${t.uid}.${f}`,wait:n,shouldSplitBatch(_){return _.reduce((T,{data:b})=>T+(b.length-2),0)>r*2},fn:async _=>{const v=_.map(E=>({allowFailure:!0,callData:E.data,target:E.to})),T=Sn({abi:xu,args:[v],functionName:"aggregate3"}),b=await t.request({method:"eth_call",params:[{data:T,to:l},f]});return fs({abi:xu,args:[v],functionName:"aggregate3",data:b||"0x"})}}),[{returnData:g,success:w}]=await m({data:o,to:c});if(!w)throw new Ad({data:g});return g==="0x"?{data:void 0}:{data:g}}function Sb(t){if(!(t instanceof Z))return;const e=t.walk();return typeof e.data=="object"?e.data.data:e.data}async function gn(t,{abi:e,address:r,args:n,functionName:s,...i}){const o=Sn({abi:e,args:n,functionName:s});try{const{data:a}=await pe(t,Wc,"call")({data:o,to:r,...i});return fs({abi:e,args:n,functionName:s,data:a||"0x"})}catch(a){throw ro(a,{abi:e,address:r,args:n,docsPath:"/docs/contract/readContract",functionName:s})}}async function Ab(t,{abi:e,address:r,args:n,dataSuffix:s,functionName:i,...o}){const a=o.account?er(o.account):void 0,c=Sn({abi:e,args:n,functionName:i});try{const{data:l}=await pe(t,Wc,"call")({batch:!1,data:`${c}${s?s.replace("0x",""):""}`,to:r,...o});return{result:fs({abi:e,args:n,functionName:i,data:l||"0x"}),request:{abi:e,address:r,args:n,dataSuffix:s,functionName:i,...o}}}catch(l){throw ro(l,{abi:e,address:r,args:n,docsPath:"/docs/contract/simulateContract",functionName:i,sender:a?.address})}}const Rl=new Map,Qh=new Map;let $b=0;function gs(t,e,r){const n=++$b,s=()=>Rl.get(t)||[],i=()=>{const u=s();Rl.set(t,u.filter(f=>f.id!==n))},o=()=>{const u=Qh.get(t);s().length===1&&u&&u(),i()},a=s();if(Rl.set(t,[...a,{id:n,fns:e}]),a&&a.length>0)return o;const c={};for(const u in e)c[u]=(...f)=>{const m=s();if(m.length!==0)for(const g of m)g.fns[u]?.(...f)};const l=r(c);return typeof l=="function"&&Qh.set(t,l),o}async function Fa(t){return new Promise(e=>setTimeout(e,t))}function Qo(t,{emitOnBegin:e,initialWaitTime:r,interval:n}){let s=!0;const i=()=>s=!1;return(async()=>{let a;e&&(a=await t({unpoll:i}));const c=await r?.(a)??n;await Fa(c);const l=async()=>{s&&(await t({unpoll:i}),await Fa(n),l())};l()})(),i}const Tb=new Map,Ib=new Map;function Rb(t){const e=(s,i)=>({clear:()=>i.delete(s),get:()=>i.get(s),set:o=>i.set(s,o)}),r=e(t,Tb),n=e(t,Ib);return{clear:()=>{r.clear(),n.clear()},promise:r,response:n}}async function Ob(t,{cacheKey:e,cacheTime:r=1/0}){const n=Rb(e),s=n.response.get();if(s&&r>0&&new Date().getTime()-s.created.getTime()<r)return s.data;let i=n.promise.get();i||(i=t(),n.promise.set(i));try{const o=await i;return n.response.set({created:new Date,data:o}),o}finally{n.promise.clear()}}const Pb=t=>`blockNumber.${t}`;async function Yo(t,{cacheTime:e=t.cacheTime,maxAge:r}={}){const n=await Ob(()=>t.request({method:"eth_blockNumber"}),{cacheKey:Pb(t.uid),cacheTime:r??e});return BigInt(n)}async function zc(t,{filter:e}){const r="strict"in e&&e.strict;return(await e.request({method:"eth_getFilterChanges",params:[e.id]})).map(s=>{if(typeof s=="string")return s;try{const{eventName:i,args:o}="abi"in e&&e.abi?Ko({abi:e.abi,data:s.data,topics:s.topics,strict:r}):{eventName:void 0,args:void 0};return ar(s,{args:o,eventName:i})}catch(i){let o,a;if(i instanceof qn||i instanceof us){if("strict"in e&&e.strict)return;o=i.abiItem.name,a=i.abiItem.inputs?.some(c=>!("name"in c&&c.name))}return ar(s,{args:a?[]:{},eventName:o})}}).filter(Boolean)}async function Hc(t,{filter:e}){return e.request({method:"eth_uninstallFilter",params:[e.id]})}function Db(t,{abi:e,address:r,args:n,batch:s=!0,eventName:i,onError:o,onLogs:a,poll:c,pollingInterval:l=t.pollingInterval,strict:u}){return(typeof c<"u"?c:t.transport.type!=="webSocket")?(()=>{const w=Ot(["watchContractEvent",r,n,s,t.uid,i,l]),_=u??!1;return gs(w,{onLogs:a,onError:o},v=>{let T,b,E=!1;const x=Qo(async()=>{if(!E){try{b=await pe(t,rp,"createContractEventFilter")({abi:e,address:r,args:n,eventName:i,strict:_})}catch{}E=!0;return}try{let C;if(b)C=await pe(t,zc,"getFilterChanges")({filter:b});else{const A=await pe(t,Yo,"getBlockNumber")({});T&&T!==A?C=await pe(t,dp,"getContractEvents")({abi:e,address:r,args:n,eventName:i,fromBlock:T+1n,toBlock:A,strict:_}):C=[],T=A}if(C.length===0)return;if(s)v.onLogs(C);else for(const A of C)v.onLogs([A])}catch(C){b&&C instanceof Vn&&(E=!1),v.onError?.(C)}},{emitOnBegin:!0,interval:l});return async()=>{b&&await pe(t,Hc,"uninstallFilter")({filter:b}),x()}})})():(()=>{let w=!0,_=()=>w=!1;return(async()=>{try{const v=i?Vo({abi:e,eventName:i,args:n}):[],{unsubscribe:T}=await t.transport.subscribe({params:["logs",{address:r,topics:v}],onData(b){if(!w)return;const E=b.result;try{const{eventName:x,args:C}=Ko({abi:e,data:E.data,topics:E.topics,strict:u}),A=ar(E,{args:C,eventName:x});a([A])}catch(x){let C,A;if(x instanceof qn||x instanceof us){if(u)return;C=x.abiItem.name,A=x.abiItem.inputs?.some(S=>!("name"in S&&S.name))}const h=ar(E,{args:A?[]:{},eventName:C});a([h])}},onError(b){o?.(b)}});_=T,w||_()}catch(v){o?.(v)}})(),_})()}function pp({chain:t,currentChainId:e}){if(!t)throw new Mm;if(e!==t.id)throw new km({chain:t,currentChainId:e})}function Nb(t,{docsPath:e,...r}){const n=(()=>{const s=Td(t,r);return s instanceof kc?t:s})();return new tb(n,{docsPath:e,...r})}async function no(t){const e=await t.request({method:"eth_chainId"});return Et(e)}async function kd(t,{serializedTransaction:e}){return t.request({method:"eth_sendRawTransaction",params:[e]})}async function Md(t,e){const{account:r=t.account,chain:n=t.chain,accessList:s,data:i,gas:o,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:f,value:m,...g}=e;if(!r)throw new hs({docsPath:"/docs/actions/wallet/sendTransaction"});const w=er(r);try{Go(e);let _;if(n!==null&&(_=await pe(t,no,"getChainId")({}),pp({currentChainId:_,chain:n})),w.type==="local"){const E=await pe(t,Fc,"prepareTransactionRequest")({account:w,accessList:s,chain:n,data:i,gas:o,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:f,value:m,...g});_||(_=await pe(t,no,"getChainId")({}));const x=n?.serializers?.transaction,C=await w.signTransaction({...E,chainId:_},{serializer:x});return await pe(t,kd,"sendRawTransaction")({serializedTransaction:C})}const v=t.chain?.formatters?.transactionRequest?.format,b=(v||Nc)({...Id(g,{format:v}),accessList:s,data:i,from:w.address,gas:o,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:f,value:m});return await t.request({method:"eth_sendTransaction",params:[b]})}catch(_){throw Nb(_,{...e,account:w,chain:e.chain||void 0})}}async function kb(t,{abi:e,address:r,args:n,dataSuffix:s,functionName:i,...o}){const a=Sn({abi:e,args:n,functionName:i});return await pe(t,Md,"sendTransaction")({data:`${a}${s?s.replace("0x",""):""}`,to:r,...o})}async function Mb(t,{chain:e}){const{id:r,name:n,nativeCurrency:s,rpcUrls:i,blockExplorers:o}=e;await t.request({method:"wallet_addEthereumChain",params:[{chainId:ve(r),chainName:n,nativeCurrency:s,rpcUrls:i.default.http,blockExplorerUrls:o?Object.values(o).map(({url:a})=>a):void 0}]})}const _u=256;let pa=_u,ga;function Ub(t=11){if(!ga||pa+t>_u*2){ga="",pa=0;for(let e=0;e<_u;e++)ga+=(256+Math.random()*256|0).toString(16).substring(1)}return ga.substring(pa,pa+++t)}function gp(t){const{batch:e,cacheTime:r=t.pollingInterval??4e3,key:n="base",name:s="Base Client",pollingInterval:i=4e3,type:o="base"}=t,a=t.chain,c=t.account?er(t.account):void 0,{config:l,request:u,value:f}=t.transport({chain:a,pollingInterval:i}),m={...l,...f},g={account:c,batch:e,cacheTime:r,chain:a,key:n,name:s,pollingInterval:i,request:u,transport:m,type:o,uid:Ub()};function w(_){return v=>{const T=v(_);for(const E in g)delete T[E];const b={..._,...T};return Object.assign(b,{extend:w(b)})}}return Object.assign(g,{extend:w(g)})}function Cu(t,{delay:e=100,retryCount:r=2,shouldRetry:n=()=>!0}={}){return new Promise((s,i)=>{const o=async({count:a=0}={})=>{const c=async({error:l})=>{const u=typeof e=="function"?e({count:a,error:l}):e;u&&await Fa(u),o({count:a+1})};try{const l=await t();s(l)}catch(l){if(a<r&&await n({count:a,error:l}))return c({error:l});i(l)}};o()})}const mp=t=>"code"in t?t.code!==-1&&t.code!==-32004&&t.code!==-32005&&t.code!==-32042&&t.code!==-32603:t instanceof Ds&&t.status?t.status!==403&&t.status!==408&&t.status!==413&&t.status!==429&&t.status!==500&&t.status!==502&&t.status!==503&&t.status!==504:!1;function Bb(t,{retryDelay:e=150,retryCount:r=3}={}){return async n=>Cu(async()=>{try{return await t(n)}catch(s){const i=s;switch(i.code){case zs.code:throw new zs(i);case Hs.code:throw new Hs(i);case qs.code:throw new qs(i);case Vs.code:throw new Vs(i);case ji.code:throw new ji(i);case Vn.code:throw new Vn(i);case Zs.code:throw new Zs(i);case Li.code:throw new Li(i);case Gs.code:throw new Gs(i);case Ks.code:throw new Ks(i);case Qs.code:throw new Qs(i);case Ys.code:throw new Ys(i);case Mt.code:throw new Mt(i);case Js.code:throw new Js(i);case Xs.code:throw new Xs(i);case eo.code:throw new eo(i);case to.code:throw new to(i);case cr.code:throw new cr(i);case 5e3:throw new Mt(i);default:throw s instanceof Z?s:new ob(i)}}},{delay:({count:s,error:i})=>{if(i&&i instanceof Ds){const o=i?.headers?.get("Retry-After");if(o?.match(/\d/))return parseInt(o)*1e3}return~~(1<<s)*e},retryCount:r,shouldRetry:({error:s})=>!mp(s)})}function qc({key:t,name:e,request:r,retryCount:n=3,retryDelay:s=150,timeout:i,type:o},a){return{config:{key:t,name:e,request:r,retryCount:n,retryDelay:s,timeout:i,type:o},request:Bb(r,{retryCount:n,retryDelay:s}),value:a}}function Vc(t,e={}){const{key:r="custom",name:n="Custom Provider",retryDelay:s}=e;return({retryCount:i})=>qc({key:r,name:n,request:t.request.bind(t),retryCount:e.retryCount??i,retryDelay:s,type:"custom"})}function Yh(t,e={}){const{key:r="fallback",name:n="Fallback",rank:s=!1,retryCount:i,retryDelay:o}=e;return({chain:a,pollingInterval:c=4e3,timeout:l})=>{let u=t,f=()=>{};const m=qc({key:r,name:n,async request({method:g,params:w}){const _=async(v=0)=>{const T=u[v]({chain:a,retryCount:0,timeout:l});try{const b=await T.request({method:g,params:w});return f({method:g,params:w,response:b,transport:T,status:"success"}),b}catch(b){if(f({error:b,method:g,params:w,transport:T,status:"error"}),mp(b)||v===u.length-1)throw b;return _(v+1)}};return _()},retryCount:i,retryDelay:o,type:"fallback"},{onResponse:g=>f=g,transports:u.map(g=>g({chain:a,retryCount:0}))});if(s){const g=typeof s=="object"?s:{};jb({chain:a,interval:g.interval??c,onTransports:w=>u=w,sampleCount:g.sampleCount,timeout:g.timeout,transports:u,weights:g.weights})}return m}}function jb({chain:t,interval:e=4e3,onTransports:r,sampleCount:n=10,timeout:s=1e3,transports:i,weights:o={}}){const{stability:a=.7,latency:c=.3}=o,l=[],u=async()=>{const f=await Promise.all(i.map(async w=>{const _=w({chain:t,retryCount:0,timeout:s}),v=Date.now();let T,b;try{await _.request({method:"net_listening"}),b=1}catch{b=0}finally{T=Date.now()}return{latency:T-v,success:b}}));l.push(f),l.length>n&&l.shift();const m=Math.max(...l.map(w=>Math.max(...w.map(({latency:_})=>_)))),g=i.map((w,_)=>{const v=l.map(C=>C[_].latency),b=1-v.reduce((C,A)=>C+A,0)/v.length/m,E=l.map(C=>C[_].success),x=E.reduce((C,A)=>C+A,0)/E.length;return x===0?[0,_]:[c*b+a*x,_]}).sort((w,_)=>_[0]-w[0]);r(g.map(([,w])=>i[w])),await Fa(e),u()};u()}class wp extends Z{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}function Lb(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}const Jh=Lb();function bp(t,{errorInstance:e=new Error("timed out"),timeout:r,signal:n}){return new Promise((s,i)=>{(async()=>{let o;try{const a=new AbortController;r>0&&(o=setTimeout(()=>{n?a.abort():i(e)},r)),s(await t({signal:a?.signal}))}catch(a){a.name==="AbortError"&&i(e),i(a)}finally{clearTimeout(o)}})()})}let Eu=0;async function Fb(t,{body:e,fetchOptions:r={},timeout:n=1e4}){const{headers:s,method:i,signal:o}=r;try{const a=await bp(async({signal:l})=>await fetch(t,{...r,body:Array.isArray(e)?Ot(e.map(f=>({jsonrpc:"2.0",id:f.id??Eu++,...f}))):Ot({jsonrpc:"2.0",id:e.id??Eu++,...e}),headers:{...s,"Content-Type":"application/json"},method:i||"POST",signal:o||(n>0?l:void 0)}),{errorInstance:new yu({body:e,url:t}),timeout:n,signal:!0});let c;if(a.headers.get("Content-Type")?.startsWith("application/json")?c=await a.json():c=await a.text(),!a.ok)throw new Ds({body:e,details:Ot(c.error)||a.statusText,headers:a.headers,status:a.status,url:t});return c}catch(a){throw a instanceof Ds||a instanceof yu?a:new Ds({body:e,details:a.message,url:t})}}const Ol=new Map;async function Pl(t){let e=Ol.get(t);if(e)return e;const{schedule:r}=Nd({id:t,fn:async()=>{const i=new Jh(t),o=new Map,a=new Map,c=({data:u})=>{const f=JSON.parse(u),m=f.method==="eth_subscription",g=m?f.params.subscription:f.id,w=m?a:o,_=w.get(g);_&&_({data:u}),m||w.delete(g)},l=()=>{Ol.delete(t),i.removeEventListener("close",l),i.removeEventListener("message",c)};return i.addEventListener("close",l),i.addEventListener("message",c),i.readyState===Jh.CONNECTING&&await new Promise((u,f)=>{i&&(i.onopen=u,i.onerror=f)}),e=Object.assign(i,{requests:o,subscriptions:a}),Ol.set(t,e),[e]}}),[n,[s]]=await r();return s}function Wb(t,{body:e,onResponse:r}){if(t.readyState===t.CLOSED||t.readyState===t.CLOSING)throw new ib({body:e,url:t.url,details:"Socket is closed."});const n=Eu++,s=({data:i})=>{const o=JSON.parse(i);typeof o.id=="number"&&n!==o.id||(r?.(o),e.method==="eth_subscribe"&&typeof o.result=="string"&&t.subscriptions.set(o.result,s),e.method==="eth_unsubscribe"&&t.subscriptions.delete(e.params?.[0]))};return t.requests.set(n,s),t.send(JSON.stringify({jsonrpc:"2.0",...e,id:n})),t}async function zb(t,{body:e,timeout:r=1e4}){return bp(()=>new Promise(n=>ki.webSocket(t,{body:e,onResponse:n})),{errorInstance:new yu({body:e,url:t.url}),timeout:r})}const ki={http:Fb,webSocket:Wb,webSocketAsync:zb};function Hb(t,e={}){const{batch:r,fetchOptions:n,key:s="http",name:i="HTTP JSON-RPC",retryDelay:o}=e;return({chain:a,retryCount:c,timeout:l})=>{const{batchSize:u=1e3,wait:f=0}=typeof r=="object"?r:{},m=e.retryCount??c,g=l??e.timeout??1e4,w=t||a?.rpcUrls.default.http[0];if(!w)throw new wp;return qc({key:s,name:i,async request({method:_,params:v}){const T={method:_,params:v},{schedule:b}=Nd({id:`${t}`,wait:f,shouldSplitBatch(A){return A.length>u},fn:A=>ki.http(w,{body:A,fetchOptions:n,timeout:g}),sort:(A,h)=>A.id-h.id}),E=async A=>r?b(A):[await ki.http(w,{body:A,fetchOptions:n,timeout:g})],[{error:x,result:C}]=await E(T);if(x)throw new $d({body:T,error:x,url:w});return C},retryCount:m,retryDelay:o,timeout:g,type:"http"},{fetchOptions:n,url:t})}}function Ud(t,e){if(!(t instanceof Z))return!1;const r=t.walk(n=>n instanceof bu);return r instanceof bu?!!(r.data?.errorName==="ResolverNotFound"||r.data?.errorName==="ResolverWildcardNotSupported"||r.reason?.includes("Wildcard on non-extended resolvers is not supported")||e==="reverse"&&r.reason===np[50]):!1}function yp(t){if(t.length!==66||t.indexOf("[")!==0||t.indexOf("]")!==65)return null;const e=`0x${t.slice(1,65)}`;return Cr(e)?e:null}function $a(t){let e=new Uint8Array(32).fill(0);if(!t)return Fs(e);const r=t.split(".");for(let n=r.length-1;n>=0;n-=1){const s=yp(r[n]),i=s?fn(s):It(Fr(r[n]),"bytes");e=It(zr([e,i]),"bytes")}return Fs(e)}function qb(t){return`[${t.slice(2)}]`}function Vb(t){const e=new Uint8Array(32).fill(0);return t?yp(t)||It(Fr(t)):Fs(e)}function Zc(t){const e=t.replace(/^\.|\.$/gm,"");if(e.length===0)return new Uint8Array(1);const r=new Uint8Array(Fr(e).byteLength+2);let n=0;const s=e.split(".");for(let i=0;i<s.length;i++){let o=Fr(s[i]);o.byteLength>255&&(o=Fr(qb(Vb(s[i])))),r[n]=o.length,r.set(o,n+1),n+=o.length+1}return r.byteLength!==n+1?r.slice(0,n+1):r}async function Zb(t,{blockNumber:e,blockTag:r,coinType:n,name:s,universalResolverAddress:i}){let o=i;if(!o){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=ps({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const a=Sn({abi:Kh,functionName:"addr",...n!=null?{args:[$a(s),BigInt(n)]}:{args:[$a(s)]}}),c=await pe(t,gn,"readContract")({address:o,abi:fp,functionName:"resolve",args:[Gr(Zc(s)),a],blockNumber:e,blockTag:r});if(c[0]==="0x")return null;const l=fs({abi:Kh,args:n!=null?[$a(s),BigInt(n)]:void 0,functionName:"addr",data:c[0]});return l==="0x"||zn(l)==="0x00"?null:l}catch(a){if(Ud(a,"resolve"))return null;throw a}}class Gb extends Z{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class Cs extends Z{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class Bd extends Z{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class Kb extends Z{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const Qb=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,Yb=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,Jb=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,Xb=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function e2(t){try{const e=await fetch(t,{method:"HEAD"});return e.status===200?e.headers.get("content-type")?.startsWith("image/"):!1}catch(e){return typeof e=="object"&&typeof e.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(r=>{const n=new Image;n.onload=()=>{r(!0)},n.onerror=()=>{r(!1)},n.src=t})}}function Xh(t,e){return t?t.endsWith("/")?t.slice(0,-1):t:e}function vp({uri:t,gatewayUrls:e}){const r=Jb.test(t);if(r)return{uri:t,isOnChain:!0,isEncoded:r};const n=Xh(e?.ipfs,"https://ipfs.io"),s=Xh(e?.arweave,"https://arweave.net"),i=t.match(Qb),{protocol:o,subpath:a,target:c,subtarget:l=""}=i?.groups||{},u=o==="ipns:/"||a==="ipns/",f=o==="ipfs:/"||a==="ipfs/"||Yb.test(t);if(t.startsWith("http")&&!u&&!f){let g=t;return e?.arweave&&(g=t.replace(/https:\/\/arweave.net/g,e?.arweave)),{uri:g,isOnChain:!1,isEncoded:!1}}if((u||f)&&c)return{uri:`${n}/${u?"ipns":"ipfs"}/${c}${l}`,isOnChain:!1,isEncoded:!1};if(o==="ar:/"&&c)return{uri:`${s}/${c}${l||""}`,isOnChain:!1,isEncoded:!1};let m=t.replace(Xb,"");if(m.startsWith("<svg")&&(m=`data:image/svg+xml;base64,${btoa(m)}`),m.startsWith("data:")||m.startsWith("{"))return{uri:m,isOnChain:!0,isEncoded:!1};throw new Bd({uri:t})}function xp(t){if(typeof t!="object"||!("image"in t)&&!("image_url"in t)&&!("image_data"in t))throw new Gb({data:t});return t.image||t.image_url||t.image_data}async function t2({gatewayUrls:t,uri:e}){try{const r=await fetch(e).then(s=>s.json());return await jd({gatewayUrls:t,uri:xp(r)})}catch{throw new Bd({uri:e})}}async function jd({gatewayUrls:t,uri:e}){const{uri:r,isOnChain:n}=vp({uri:e,gatewayUrls:t});if(n||await e2(r))return r;throw new Bd({uri:e})}function r2(t){let e=t;e.startsWith("did:nft:")&&(e=e.replace("did:nft:","").replace(/_/g,"/"));const[r,n,s]=e.split("/"),[i,o]=r.split(":"),[a,c]=n.split(":");if(!i||i.toLowerCase()!=="eip155")throw new Cs({reason:"Only EIP-155 supported"});if(!o)throw new Cs({reason:"Chain ID not found"});if(!c)throw new Cs({reason:"Contract address not found"});if(!s)throw new Cs({reason:"Token ID not found"});if(!a)throw new Cs({reason:"ERC namespace not found"});return{chainID:parseInt(o),namespace:a.toLowerCase(),contractAddress:c,tokenID:s}}async function n2(t,{nft:e}){if(e.namespace==="erc721")return gn(t,{address:e.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(e.tokenID)]});if(e.namespace==="erc1155")return gn(t,{address:e.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(e.tokenID)]});throw new Kb({namespace:e.namespace})}async function i2(t,{gatewayUrls:e,record:r}){return/eip155:/i.test(r)?s2(t,{gatewayUrls:e,record:r}):jd({uri:r,gatewayUrls:e})}async function s2(t,{gatewayUrls:e,record:r}){const n=r2(r),s=await n2(t,{nft:n}),{uri:i,isOnChain:o,isEncoded:a}=vp({uri:s,gatewayUrls:e});if(o&&(i.includes("data:application/json;base64,")||i.startsWith("{"))){const l=a?atob(i.replace("data:application/json;base64,","")):i,u=JSON.parse(l);return jd({uri:xp(u),gatewayUrls:e})}let c=n.tokenID;return n.namespace==="erc1155"&&(c=c.replace("0x","").padStart(64,"0")),t2({gatewayUrls:e,uri:i.replace(/(?:0x)?{id}/,c)})}async function _p(t,{blockNumber:e,blockTag:r,name:n,key:s,universalResolverAddress:i}){let o=i;if(!o){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=ps({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const a=await pe(t,gn,"readContract")({address:o,abi:fp,functionName:"resolve",args:[Gr(Zc(n)),Sn({abi:Gh,functionName:"text",args:[$a(n),s]})],blockNumber:e,blockTag:r});if(a[0]==="0x")return null;const c=fs({abi:Gh,functionName:"text",data:a[0]});return c===""?null:c}catch(a){if(Ud(a,"resolve"))return null;throw a}}async function o2(t,{blockNumber:e,blockTag:r,gatewayUrls:n,name:s,universalResolverAddress:i}){const o=await pe(t,_p,"getEnsText")({blockNumber:e,blockTag:r,key:"avatar",name:s,universalResolverAddress:i});if(!o)return null;try{return await i2(t,{record:o,gatewayUrls:n})}catch{return null}}async function a2(t,{address:e,blockNumber:r,blockTag:n,universalResolverAddress:s}){let i=s;if(!i){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");i=ps({blockNumber:r,chain:t.chain,contract:"ensUniversalResolver"})}const o=`${e.toLowerCase().substring(2)}.addr.reverse`;try{const[a,c]=await pe(t,gn,"readContract")({address:i,abi:yb,functionName:"reverse",args:[Gr(Zc(o))],blockNumber:r,blockTag:n});return e.toLowerCase()!==c.toLowerCase()?null:a}catch(a){if(Ud(a,"reverse"))return null;throw a}}async function c2(t,{blockNumber:e,blockTag:r,name:n,universalResolverAddress:s}){let i=s;if(!i){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");i=ps({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}const[o]=await pe(t,gn,"readContract")({address:i,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[Gr(Zc(n))],blockNumber:e,blockTag:r});return o}async function l2(t){const e=jc(t,{method:"eth_newBlockFilter"}),r=await t.request({method:"eth_newBlockFilter"});return{id:r,request:e(r),type:"block"}}async function Cp(t,{address:e,args:r,event:n,events:s,fromBlock:i,strict:o,toBlock:a}={}){const c=s??(n?[n]:void 0),l=jc(t,{method:"eth_newFilter"});let u=[];c&&(u=[c.flatMap(m=>Vo({abi:[m],eventName:m.name,args:r}))],n&&(u=u[0]));const f=await t.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof i=="bigint"?ve(i):i,toBlock:typeof a=="bigint"?ve(a):a,...u.length?{topics:u}:{}}]});return{abi:c,args:r,eventName:n?n.name:void 0,fromBlock:i,id:f,request:l(f),strict:o,toBlock:a,type:"event"}}async function Ep(t){const e=jc(t,{method:"eth_newPendingTransactionFilter"}),r=await t.request({method:"eth_newPendingTransactionFilter"});return{id:r,request:e(r),type:"transaction"}}async function u2(t,{address:e,blockNumber:r,blockTag:n="latest"}){const s=r?ve(r):void 0,i=await t.request({method:"eth_getBalance",params:[e,s||n]});return BigInt(i)}async function d2(t,{blockHash:e,blockNumber:r,blockTag:n="latest"}={}){const s=r!==void 0?ve(r):void 0;let i;return e?i=await t.request({method:"eth_getBlockTransactionCountByHash",params:[e]}):i=await t.request({method:"eth_getBlockTransactionCountByNumber",params:[s||n]}),Et(i)}async function h2(t,{address:e,blockNumber:r,blockTag:n="latest"}){const s=r!==void 0?ve(r):void 0,i=await t.request({method:"eth_getCode",params:[e,s||n]});if(i!=="0x")return i}function f2(t){return{baseFeePerGas:t.baseFeePerGas.map(e=>BigInt(e)),gasUsedRatio:t.gasUsedRatio,oldestBlock:BigInt(t.oldestBlock),reward:t.reward?.map(e=>e.map(r=>BigInt(r)))}}async function p2(t,{blockCount:e,blockNumber:r,blockTag:n="latest",rewardPercentiles:s}){const i=r?ve(r):void 0,o=await t.request({method:"eth_feeHistory",params:[ve(e),i||n,s]});return f2(o)}async function g2(t,{filter:e}){const r=e.strict??!1;return(await e.request({method:"eth_getFilterLogs",params:[e.id]})).map(s=>{try{const{eventName:i,args:o}="abi"in e&&e.abi?Ko({abi:e.abi,data:s.data,topics:s.topics,strict:r}):{eventName:void 0,args:void 0};return ar(s,{args:o,eventName:i})}catch(i){let o,a;if(i instanceof qn||i instanceof us){if("strict"in e&&e.strict)return;o=i.abiItem.name,a=i.abiItem.inputs?.some(c=>!("name"in c&&c.name))}return ar(s,{args:a?[]:{},eventName:o})}}).filter(Boolean)}const m2=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,w2=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function b2({domain:t,message:e,primaryType:r,types:n}){const s=typeof t>"u"?{}:t,i={EIP712Domain:Rp({domain:s}),...n};Ip({domain:s,message:e,primaryType:r,types:i});const o=["0x1901"];return s&&o.push(y2({domain:s,types:i})),r!=="EIP712Domain"&&o.push(Sp({data:e,primaryType:r,types:i})),It(zr(o))}function y2({domain:t,types:e}){return Sp({data:t,primaryType:"EIP712Domain",types:e})}function Sp({data:t,primaryType:e,types:r}){const n=Ap({data:t,primaryType:e,types:r});return It(n)}function Ap({data:t,primaryType:e,types:r}){const n=[{type:"bytes32"}],s=[v2({primaryType:e,types:r})];for(const i of r[e]){const[o,a]=Tp({types:r,name:i.name,type:i.type,value:t[i.name]});n.push(o),s.push(a)}return Ho(n,s)}function v2({primaryType:t,types:e}){const r=Gr(x2({primaryType:t,types:e}));return It(r)}function x2({primaryType:t,types:e}){let r="";const n=$p({primaryType:t,types:e});n.delete(t);const s=[t,...Array.from(n).sort()];for(const i of s)r+=`${i}(${e[i].map(({name:o,type:a})=>`${a} ${o}`).join(",")})`;return r}function $p({primaryType:t,types:e},r=new Set){const s=t.match(/^\w*/u)?.[0];if(r.has(s)||e[s]===void 0)return r;r.add(s);for(const i of e[s])$p({primaryType:i.type,types:e},r);return r}function Tp({types:t,name:e,type:r,value:n}){if(t[r]!==void 0)return[{type:"bytes32"},It(Ap({data:n,primaryType:r,types:t}))];if(r==="bytes")return n=`0x${(n.length%2?"0":"")+n.slice(2)}`,[{type:"bytes32"},It(n)];if(r==="string")return[{type:"bytes32"},It(Gr(n))];if(r.lastIndexOf("]")===r.length-1){const s=r.slice(0,r.lastIndexOf("[")),i=n.map(o=>Tp({name:e,type:s,types:t,value:o}));return[{type:"bytes32"},It(Ho(i.map(([o])=>o),i.map(([,o])=>o)))]}return[{type:r},n]}function Ip({domain:t,message:e,primaryType:r,types:n}){const s=n,i=(o,a)=>{for(const c of o){const{name:l,type:u}=c,f=u,m=a[l],g=f.match(w2);if(g&&(typeof m=="number"||typeof m=="bigint")){const[v,T,b]=g;ve(m,{signed:T==="int",size:parseInt(b)/8})}if(f==="address"&&typeof m=="string"&&!Er(m))throw new Ws({address:m});const w=f.match(m2);if(w){const[v,T]=w;if(T&&gt(m)!==parseInt(T))throw new Xm({expectedSize:parseInt(T),givenSize:gt(m)})}const _=s[f];_&&i(_,m)}};if(s.EIP712Domain&&t&&i(s.EIP712Domain,t),r!=="EIP712Domain"){const o=s[r];i(o,e)}}function Rp({domain:t}){return[typeof t?.name=="string"&&{name:"name",type:"string"},t?.version&&{name:"version",type:"string"},typeof t?.chainId=="number"&&{name:"chainId",type:"uint256"},t?.verifyingContract&&{name:"verifyingContract",type:"address"},t?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}const Dl="/docs/contract/encodeDeployData";function Op({abi:t,args:e,bytecode:r}){if(!e||e.length===0)return r;const n=t.find(i=>"type"in i&&i.type==="constructor");if(!n)throw new qm({docsPath:Dl});if(!("inputs"in n))throw new Bh({docsPath:Dl});if(!n.inputs||n.inputs.length===0)throw new Bh({docsPath:Dl});const s=Ho(n.inputs,e);return md([r,s])}const _2=`Ethereum Signed Message:
`;function C2(t,e){const r=typeof t=="string"?Fr(t):t.raw instanceof Uint8Array?t.raw:fn(t.raw),n=Fr(`${_2}${r.length}`);return It(zr([n,r]),e)}function E2(t){return t.map(e=>({...e,value:BigInt(e.value)}))}function S2(t){return{...t,balance:t.balance?BigInt(t.balance):void 0,nonce:t.nonce?Et(t.nonce):void 0,storageProof:t.storageProof?E2(t.storageProof):void 0}}async function A2(t,{address:e,blockNumber:r,blockTag:n,storageKeys:s}){const i=n??"latest",o=r!==void 0?ve(r):void 0,a=await t.request({method:"eth_getProof",params:[e,s,o||i]});return S2(a)}async function $2(t,{address:e,blockNumber:r,blockTag:n="latest",slot:s}){const i=r!==void 0?ve(r):void 0;return await t.request({method:"eth_getStorageAt",params:[e,s,i||n]})}async function Ld(t,{blockHash:e,blockNumber:r,blockTag:n,hash:s,index:i}){const o=n||"latest",a=r!==void 0?ve(r):void 0;let c=null;if(s?c=await t.request({method:"eth_getTransactionByHash",params:[s]}):e?c=await t.request({method:"eth_getTransactionByBlockHashAndIndex",params:[e,ve(i)]}):(a||o)&&(c=await t.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[a||o,ve(i)]})),!c)throw new sp({blockHash:e,blockNumber:r,blockTag:o,hash:s,index:i});return(t.chain?.formatters?.transaction?.format||z0)(c)}async function T2(t,{hash:e,transactionReceipt:r}){const[n,s]=await Promise.all([pe(t,Yo,"getBlockNumber")({}),e?pe(t,Ld,"getBlockNumber")({hash:e}):void 0]),i=r?.blockNumber||s?.blockNumber;return i?n-i+1n:0n}async function Su(t,{hash:e}){const r=await t.request({method:"eth_getTransactionReceipt",params:[e]});if(!r)throw new op({hash:e});return(t.chain?.formatters?.transactionReceipt?.format||Dm)(r)}async function I2(t,e){const{allowFailure:r=!0,batchSize:n,blockNumber:s,blockTag:i,contracts:o,multicallAddress:a}=e,c=n??(typeof t.batch?.multicall=="object"&&t.batch.multicall.batchSize||1024);let l=a;if(!l){if(!t.chain)throw new Error("client chain not configured. multicallAddress is required.");l=ps({blockNumber:s,chain:t.chain,contract:"multicall3"})}const u=[[]];let f=0,m=0;for(let _=0;_<o.length;_++){const{abi:v,address:T,args:b,functionName:E}=o[_];try{const x=Sn({abi:v,args:b,functionName:E});m+=(x.length-2)/2,c>0&&m>c&&u[f].length>0&&(f++,m=(x.length-2)/2,u[f]=[]),u[f]=[...u[f],{allowFailure:!0,callData:x,target:T}]}catch(x){const C=ro(x,{abi:v,address:T,args:b,docsPath:"/docs/contract/multicall",functionName:E});if(!r)throw C;u[f]=[...u[f],{allowFailure:!0,callData:"0x",target:T}]}}const g=await Promise.allSettled(u.map(_=>pe(t,gn,"readContract")({abi:xu,address:l,args:[_],blockNumber:s,blockTag:i,functionName:"aggregate3"}))),w=[];for(let _=0;_<g.length;_++){const v=g[_];if(v.status==="rejected"){if(!r)throw v.reason;for(let b=0;b<u[_].length;b++)w.push({status:"failure",error:v.reason,result:void 0});continue}const T=v.value;for(let b=0;b<T.length;b++){const{returnData:E,success:x}=T[b],{callData:C}=u[_][b],{abi:A,address:h,functionName:S,args:P}=o[w.length];try{if(C==="0x")throw new Uc;if(!x)throw new Ad({data:E});const D=fs({abi:A,args:P,data:E,functionName:S});w.push(r?{result:D,status:"success"}:D)}catch(D){const k=ro(D,{abi:A,address:h,args:P,docsPath:"/docs/contract/multicall",functionName:S});if(!r)throw k;w.push({error:k,result:void 0,status:"failure"})}}}if(w.length!==o.length)throw new Z("multicall results mismatch");return w}const R2="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);BigInt(1);BigInt(2);function O2(t,e){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}function P2(t,e){const r=Cr(t)?fn(t):t,n=Cr(e)?fn(e):e;return O2(r,n)}async function Pp(t,{address:e,hash:r,signature:n,...s}){const i=Cr(n)?n:Gr(n);try{const{data:o}=await pe(t,Wc,"call")({data:Op({abi:vb,args:[e,r,i],bytecode:R2}),...s});return P2(o??"0x0","0x1")}catch(o){if(o instanceof ap)return!1;throw o}}async function D2(t,{address:e,message:r,signature:n,...s}){const i=C2(r);return Pp(t,{address:e,hash:i,signature:n,...s})}async function N2(t,{address:e,signature:r,message:n,primaryType:s,types:i,domain:o,...a}){const c=b2({message:n,primaryType:s,types:i,domain:o});return Pp(t,{address:e,hash:c,signature:r,...a})}function Dp(t,{emitOnBegin:e=!1,emitMissed:r=!1,onBlockNumber:n,onError:s,poll:i,pollingInterval:o=t.pollingInterval}){const a=typeof i<"u"?i:t.transport.type!=="webSocket";let c;return a?(()=>{const f=Ot(["watchBlockNumber",t.uid,e,r,o]);return gs(f,{onBlockNumber:n,onError:s},m=>Qo(async()=>{try{const g=await pe(t,Yo,"getBlockNumber")({cacheTime:0});if(c){if(g===c)return;if(g-c>1&&r)for(let w=c+1n;w<g;w++)m.onBlockNumber(w,c),c=w}(!c||g>c)&&(m.onBlockNumber(g,c),c=g)}catch(g){m.onError?.(g)}},{emitOnBegin:e,interval:o}))})():(()=>{let f=!0,m=()=>f=!1;return(async()=>{try{const{unsubscribe:g}=await t.transport.subscribe({params:["newHeads"],onData(w){if(!f)return;const _=Dc(w.result?.number);n(_,c),c=_},onError(w){s?.(w)}});m=g,f||m()}catch(g){s?.(g)}})(),m})()}async function k2(t,{confirmations:e=1,hash:r,onReplaced:n,pollingInterval:s=t.pollingInterval,timeout:i}){const o=Ot(["waitForTransactionReceipt",t.uid,r]);let a,c,l,u=!1;return new Promise((f,m)=>{i&&setTimeout(()=>m(new rb({hash:r})),i);const g=gs(o,{onReplaced:n,resolve:f,reject:m},w=>{const _=pe(t,Dp,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:s,async onBlockNumber(v){if(u)return;let T=v;const b=E=>{_(),E(),g()};try{if(l){if(e>1&&(!l.blockNumber||T-l.blockNumber+1n<e))return;b(()=>w.resolve(l));return}if(a||(u=!0,await Cu(async()=>{a=await pe(t,Ld,"getTransaction")({hash:r}),a.blockNumber&&(T=a.blockNumber)},{delay:({count:E})=>~~(1<<E)*200,retryCount:6}),u=!1),l=await pe(t,Su,"getTransactionReceipt")({hash:r}),e>1&&(!l.blockNumber||T-l.blockNumber+1n<e))return;b(()=>w.resolve(l))}catch(E){if(a&&(E instanceof sp||E instanceof op))try{c=a,u=!0;const x=await Cu(()=>pe(t,pn,"getBlock")({blockNumber:T,includeTransactions:!0}),{delay:({count:h})=>~~(1<<h)*200,retryCount:6,shouldRetry:({error:h})=>h instanceof cp});u=!1;const C=x.transactions.find(({from:h,nonce:S})=>h===c.from&&S===c.nonce);if(!C||(l=await pe(t,Su,"getTransactionReceipt")({hash:C.hash}),e>1&&(!l.blockNumber||T-l.blockNumber+1n<e)))return;let A="replaced";C.to===c.to&&C.value===c.value?A="repriced":C.from===C.to&&C.value===0n&&(A="cancelled"),b(()=>{w.onReplaced?.({reason:A,replacedTransaction:c,transaction:C,transactionReceipt:l}),w.resolve(l)})}catch(x){b(()=>w.reject(x))}else b(()=>w.reject(E))}}})})})}function M2(t,{blockTag:e="latest",emitMissed:r=!1,emitOnBegin:n=!1,onBlock:s,onError:i,includeTransactions:o,poll:a,pollingInterval:c=t.pollingInterval}){const l=typeof a<"u"?a:t.transport.type!=="webSocket",u=o??!1;let f;return l?(()=>{const w=Ot(["watchBlocks",t.uid,r,n,u,c]);return gs(w,{onBlock:s,onError:i},_=>Qo(async()=>{try{const v=await pe(t,pn,"getBlock")({blockTag:e,includeTransactions:u});if(v.number&&f?.number){if(v.number===f.number)return;if(v.number-f.number>1&&r)for(let T=f?.number+1n;T<v.number;T++){const b=await pe(t,pn,"getBlock")({blockNumber:T,includeTransactions:u});_.onBlock(b,f),f=b}}(!f?.number||e==="pending"&&!v?.number||v.number&&v.number>f.number)&&(_.onBlock(v,f),f=v)}catch(v){_.onError?.(v)}},{emitOnBegin:n,interval:c}))})():(()=>{let w=!0,_=()=>w=!1;return(async()=>{try{const{unsubscribe:v}=await t.transport.subscribe({params:["newHeads"],onData(T){if(!w)return;const E=(t.chain?.formatters?.block?.format||H0)(T.result);s(E,f),f=E},onError(T){i?.(T)}});_=v,w||_()}catch(v){i?.(v)}})(),_})()}function U2(t,{address:e,args:r,batch:n=!0,event:s,events:i,onError:o,onLogs:a,poll:c,pollingInterval:l=t.pollingInterval,strict:u}){const f=typeof c<"u"?c:t.transport.type!=="webSocket",m=u??!1;return f?(()=>{const _=Ot(["watchEvent",e,r,n,t.uid,s,l]);return gs(_,{onLogs:a,onError:o},v=>{let T,b,E=!1;const x=Qo(async()=>{if(!E){try{b=await pe(t,Cp,"createEventFilter")({address:e,args:r,event:s,events:i,strict:m})}catch{}E=!0;return}try{let C;if(b)C=await pe(t,zc,"getFilterChanges")({filter:b});else{const A=await pe(t,Yo,"getBlockNumber")({});T&&T!==A?C=await pe(t,Dd,"getLogs")({address:e,args:r,event:s,events:i,fromBlock:T+1n,toBlock:A}):C=[],T=A}if(C.length===0)return;if(n)v.onLogs(C);else for(const A of C)v.onLogs([A])}catch(C){b&&C instanceof Vn&&(E=!1),v.onError?.(C)}},{emitOnBegin:!0,interval:l});return async()=>{b&&await pe(t,Hc,"uninstallFilter")({filter:b}),x()}})})():(()=>{let _=!0,v=()=>_=!1;return(async()=>{try{const T=i??(s?[s]:void 0);let b=[];T&&(b=[T.flatMap(x=>Vo({abi:[x],eventName:x.name,args:r}))],s&&(b=b[0]));const{unsubscribe:E}=await t.transport.subscribe({params:["logs",{address:e,topics:b}],onData(x){if(!_)return;const C=x.result;try{const{eventName:A,args:h}=Ko({abi:T,data:C.data,topics:C.topics,strict:m}),S=ar(C,{args:h,eventName:A});a([S])}catch(A){let h,S;if(A instanceof qn||A instanceof us){if(u)return;h=A.abiItem.name,S=A.abiItem.inputs?.some(D=>!("name"in D&&D.name))}const P=ar(C,{args:S?[]:{},eventName:h});a([P])}},onError(x){o?.(x)}});v=E,_||v()}catch(T){o?.(T)}})(),v})()}function B2(t,{batch:e=!0,onError:r,onTransactions:n,poll:s,pollingInterval:i=t.pollingInterval}){return(typeof s<"u"?s:t.transport.type!=="webSocket")?(()=>{const l=Ot(["watchPendingTransactions",t.uid,e,i]);return gs(l,{onTransactions:n,onError:r},u=>{let f;const m=Qo(async()=>{try{if(!f)try{f=await pe(t,Ep,"createPendingTransactionFilter")({});return}catch(w){throw m(),w}const g=await pe(t,zc,"getFilterChanges")({filter:f});if(g.length===0)return;if(e)u.onTransactions(g);else for(const w of g)u.onTransactions([w])}catch(g){u.onError?.(g)}},{emitOnBegin:!0,interval:i});return async()=>{f&&await pe(t,Hc,"uninstallFilter")({filter:f}),m()}})})():(()=>{let l=!0,u=()=>l=!1;return(async()=>{try{const{unsubscribe:f}=await t.transport.subscribe({params:["newPendingTransactions"],onData(m){if(!l)return;const g=m.result;n([g])},onError(m){r?.(m)}});u=f,l||u()}catch(f){r?.(f)}})(),u})()}function j2(t){return{call:e=>Wc(t,e),createBlockFilter:()=>l2(t),createContractEventFilter:e=>rp(t,e),createEventFilter:e=>Cp(t,e),createPendingTransactionFilter:()=>Ep(t),estimateContractGas:e=>gb(t,e),estimateGas:e=>Pd(t,e),getBalance:e=>u2(t,e),getBlock:e=>pn(t,e),getBlockNumber:e=>Yo(t,e),getBlockTransactionCount:e=>d2(t,e),getBytecode:e=>h2(t,e),getChainId:()=>no(t),getContractEvents:e=>dp(t,e),getEnsAddress:e=>Zb(t,e),getEnsAvatar:e=>o2(t,e),getEnsName:e=>a2(t,e),getEnsResolver:e=>c2(t,e),getEnsText:e=>_p(t,e),getFeeHistory:e=>p2(t,e),estimateFeesPerGas:e=>fb(t,e),getFilterChanges:e=>zc(t,e),getFilterLogs:e=>g2(t,e),getGasPrice:()=>Od(t),getLogs:e=>Dd(t,e),getProof:e=>A2(t,e),estimateMaxPriorityFeePerGas:e=>hb(t,e),getStorageAt:e=>$2(t,e),getTransaction:e=>Ld(t,e),getTransactionConfirmations:e=>T2(t,e),getTransactionCount:e=>up(t,e),getTransactionReceipt:e=>Su(t,e),multicall:e=>I2(t,e),prepareTransactionRequest:e=>Fc(t,e),readContract:e=>gn(t,e),sendRawTransaction:e=>kd(t,e),simulateContract:e=>Ab(t,e),verifyMessage:e=>D2(t,e),verifyTypedData:e=>N2(t,e),uninstallFilter:e=>Hc(t,e),waitForTransactionReceipt:e=>k2(t,e),watchBlocks:e=>M2(t,e),watchBlockNumber:e=>Dp(t,e),watchContractEvent:e=>Db(t,e),watchEvent:e=>U2(t,e),watchPendingTransactions:e=>B2(t,e)}}function ef(t){const{key:e="public",name:r="Public Client"}=t;return gp({...t,key:e,name:r,type:"publicClient"}).extend(j2)}function L2(t,{abi:e,args:r,bytecode:n,...s}){const i=Op({abi:e,args:r,bytecode:n});return Md(t,{...s,data:i})}async function F2(t){return t.account?.type==="local"?[t.account.address]:(await t.request({method:"eth_accounts"})).map(r=>Cd(r))}async function W2(t){return await t.request({method:"wallet_getPermissions"})}async function z2(t){return(await t.request({method:"eth_requestAccounts"})).map(r=>Ht(r))}async function H2(t,e){return t.request({method:"wallet_requestPermissions",params:[e]})}async function q2(t,{account:e=t.account,message:r}){if(!e)throw new hs({docsPath:"/docs/actions/wallet/signMessage"});const n=er(e);if(n.type==="local")return n.signMessage({message:r});const s=typeof r=="string"?fd(r):r.raw instanceof Uint8Array?Gr(r.raw):r.raw;return t.request({method:"personal_sign",params:[s,n.address]})}async function V2(t,e){const{account:r=t.account,chain:n=t.chain,...s}=e;if(!r)throw new hs({docsPath:"/docs/actions/wallet/signTransaction"});const i=er(r);Go({account:i,...e});const o=await pe(t,no,"getChainId")({});n!==null&&pp({currentChainId:o,chain:n});const c=(n?.formatters||t.chain?.formatters)?.transactionRequest?.format||Nc;return i.type==="local"?i.signTransaction({...s,chainId:o},{serializer:t.chain?.serializers?.transaction}):await t.request({method:"eth_signTransaction",params:[{...c(s),chainId:ve(o),from:i.address}]})}async function Z2(t,{account:e=t.account,domain:r,message:n,primaryType:s,types:i}){if(!e)throw new hs({docsPath:"/docs/actions/wallet/signTypedData"});const o=er(e),a={EIP712Domain:Rp({domain:r}),...i};if(Ip({domain:r,message:n,primaryType:s,types:a}),o.type==="local")return o.signTypedData({domain:r,primaryType:s,types:a,message:n});const c=Ot({domain:r??{},primaryType:s,types:a,message:n},(l,u)=>Cr(u)?u.toLowerCase():u);return t.request({method:"eth_signTypedData_v4",params:[o.address,c]})}async function G2(t,{id:e}){await t.request({method:"wallet_switchEthereumChain",params:[{chainId:ve(e)}]})}async function K2(t,e){return await t.request({method:"wallet_watchAsset",params:e})}function Q2(t){return{addChain:e=>Mb(t,e),deployContract:e=>L2(t,e),getAddresses:()=>F2(t),getChainId:()=>no(t),getPermissions:()=>W2(t),prepareTransactionRequest:e=>Fc(t,e),requestAddresses:()=>z2(t),requestPermissions:e=>H2(t,e),sendRawTransaction:e=>kd(t,e),sendTransaction:e=>Md(t,e),signMessage:e=>q2(t,e),signTransaction:e=>V2(t,e),signTypedData:e=>Z2(t,e),switchChain:e=>G2(t,e),watchAsset:e=>K2(t,e),writeContract:e=>kb(t,e)}}function Gc(t){const{key:e="wallet",name:r="Wallet Client",transport:n}=t;return gp({...t,key:e,name:r,transport:i=>n({...i,retryCount:0}),type:"walletClient"}).extend(Q2)}function Y2(t,e={}){const{key:r="webSocket",name:n="WebSocket JSON-RPC",retryDelay:s}=e;return({chain:i,retryCount:o,timeout:a})=>{const c=e.retryCount??o,l=a??e.timeout??1e4,u=t||i?.rpcUrls.default.webSocket?.[0];if(!u)throw new wp;return qc({key:r,name:n,async request({method:f,params:m}){const g={method:f,params:m},w=await Pl(u),{error:_,result:v}=await ki.webSocketAsync(w,{body:g,timeout:l});if(_)throw new $d({body:g,error:_,url:u});return v},retryCount:c,retryDelay:s,timeout:l,type:"webSocket"},{getSocket(){return Pl(u)},async subscribe({params:f,onData:m,onError:g}){const w=await Pl(u),{result:_}=await new Promise((v,T)=>ki.webSocket(w,{body:{method:"eth_subscribe",params:f},onResponse(b){if(b.error){T(b.error),g?.(b.error);return}if(typeof b.id=="number"){v(b);return}b.method==="eth_subscription"&&m(b.params)}}));return{subscriptionId:_,async unsubscribe(){return new Promise(v=>ki.webSocket(w,{body:{method:"eth_unsubscribe",params:[_]},onResponse:v}))}}}})}}const J2=U0({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0}),Fd=U0({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var Np=class extends Error{constructor({chainId:t,connectorId:e}){super(`Chain "${t}" not configured for connector "${e}".`),this.name="ChainNotConfiguredForConnectorError"}},vr=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}};function Wa(t){return typeof t=="string"?Number.parseInt(t,t.trim().substring(0,2)==="0x"?16:10):typeof t=="bigint"?Number(t):t}var kp={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,r="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(r=!1));function s(c,l,u){this.fn=c,this.context=l,this.once=u||!1}function i(c,l,u,f,m){if(typeof u!="function")throw new TypeError("The listener must be a function");var g=new s(u,f||c,m),w=r?r+l:l;return c._events[w]?c._events[w].fn?c._events[w]=[c._events[w],g]:c._events[w].push(g):(c._events[w]=g,c._eventsCount++),c}function o(c,l){--c._eventsCount===0?c._events=new n:delete c._events[l]}function a(){this._events=new n,this._eventsCount=0}a.prototype.eventNames=function(){var l=[],u,f;if(this._eventsCount===0)return l;for(f in u=this._events)e.call(u,f)&&l.push(r?f.slice(1):f);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(u)):l},a.prototype.listeners=function(l){var u=r?r+l:l,f=this._events[u];if(!f)return[];if(f.fn)return[f.fn];for(var m=0,g=f.length,w=new Array(g);m<g;m++)w[m]=f[m].fn;return w},a.prototype.listenerCount=function(l){var u=r?r+l:l,f=this._events[u];return f?f.fn?1:f.length:0},a.prototype.emit=function(l,u,f,m,g,w){var _=r?r+l:l;if(!this._events[_])return!1;var v=this._events[_],T=arguments.length,b,E;if(v.fn){switch(v.once&&this.removeListener(l,v.fn,void 0,!0),T){case 1:return v.fn.call(v.context),!0;case 2:return v.fn.call(v.context,u),!0;case 3:return v.fn.call(v.context,u,f),!0;case 4:return v.fn.call(v.context,u,f,m),!0;case 5:return v.fn.call(v.context,u,f,m,g),!0;case 6:return v.fn.call(v.context,u,f,m,g,w),!0}for(E=1,b=new Array(T-1);E<T;E++)b[E-1]=arguments[E];v.fn.apply(v.context,b)}else{var x=v.length,C;for(E=0;E<x;E++)switch(v[E].once&&this.removeListener(l,v[E].fn,void 0,!0),T){case 1:v[E].fn.call(v[E].context);break;case 2:v[E].fn.call(v[E].context,u);break;case 3:v[E].fn.call(v[E].context,u,f);break;case 4:v[E].fn.call(v[E].context,u,f,m);break;default:if(!b)for(C=1,b=new Array(T-1);C<T;C++)b[C-1]=arguments[C];v[E].fn.apply(v[E].context,b)}}return!0},a.prototype.on=function(l,u,f){return i(this,l,u,f,!1)},a.prototype.once=function(l,u,f){return i(this,l,u,f,!0)},a.prototype.removeListener=function(l,u,f,m){var g=r?r+l:l;if(!this._events[g])return this;if(!u)return o(this,g),this;var w=this._events[g];if(w.fn)w.fn===u&&(!m||w.once)&&(!f||w.context===f)&&o(this,g);else{for(var _=0,v=[],T=w.length;_<T;_++)(w[_].fn!==u||m&&!w[_].once||f&&w[_].context!==f)&&v.push(w[_]);v.length?this._events[g]=v.length===1?v[0]:v:o(this,g)}return this},a.prototype.removeAllListeners=function(l){var u;return l?(u=r?r+l:l,this._events[u]&&o(this,u)):(this._events=new n,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=r,a.EventEmitter=a,t.exports=a})(kp);var X2=kp.exports;const ey=Rc(X2);var Wd=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)},We=(t,e,r)=>(Wd(t,e,"read from private field"),r?r.call(t):e.get(t)),kt=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},io=(t,e,r,n)=>(Wd(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r),vt=(t,e,r)=>(Wd(t,e,"access private method"),r),Kc=class extends ey{constructor({chains:t=[Fd,J2],options:e}){super(),this.chains=t,this.options=e}getBlockExplorerUrls(t){const{default:e,...r}=t.blockExplorers??{};if(e)return[e.url,...Object.values(r).map(n=>n.url)]}isChainUnsupported(t){return!this.chains.some(e=>e.id===t)}setStorage(t){this.storage=t}};function ty(t){if(!t)return"Injected";const e=r=>{if(r.isApexWallet)return"Apex Wallet";if(r.isAvalanche)return"Core Wallet";if(r.isBackpack)return"Backpack";if(r.isBifrost)return"Bifrost Wallet";if(r.isBitKeep)return"BitKeep";if(r.isBitski)return"Bitski";if(r.isBlockWallet)return"BlockWallet";if(r.isBraveWallet)return"Brave Wallet";if(r.isCoin98)return"Coin98 Wallet";if(r.isCoinbaseWallet)return"Coinbase Wallet";if(r.isDawn)return"Dawn Wallet";if(r.isDefiant)return"Defiant";if(r.isDesig)return"Desig Wallet";if(r.isEnkrypt)return"Enkrypt";if(r.isExodus)return"Exodus";if(r.isFordefi)return"Fordefi";if(r.isFrame)return"Frame";if(r.isFrontier)return"Frontier Wallet";if(r.isGamestop)return"GameStop Wallet";if(r.isHaqqWallet)return"HAQQ Wallet";if(r.isHyperPay)return"HyperPay Wallet";if(r.isImToken)return"ImToken";if(r.isHaloWallet)return"Halo Wallet";if(r.isKuCoinWallet)return"KuCoin Wallet";if(r.isMathWallet)return"MathWallet";if(r.isNovaWallet)return"Nova Wallet";if(r.isOkxWallet||r.isOKExWallet)return"OKX Wallet";if(r.isOktoWallet)return"Okto Wallet";if(r.isOneInchIOSWallet||r.isOneInchAndroidWallet)return"1inch Wallet";if(r.isOneKey)return"OneKey Wallet";if(r.isOpera)return"Opera";if(r.isPhantom)return"Phantom";if(r.isPortal)return"Ripio Portal";if(r.isRabby)return"Rabby Wallet";if(r.isRainbow)return"Rainbow";if(r.isSafePal)return"SafePal Wallet";if(r.isStatus)return"Status";if(r.isSubWallet)return"SubWallet";if(r.isTalisman)return"Talisman";if(r.isTally)return"Taho";if(r.isTokenPocket)return"TokenPocket";if(r.isTokenary)return"Tokenary";if(r.isTrust||r.isTrustWallet)return"Trust Wallet";if(r.isTTWallet)return"TTWallet";if(r.isXDEFI)return"XDEFI Wallet";if(r.isZeal)return"Zeal";if(r.isZerion)return"Zerion";if(r.isMetaMask)return"MetaMask"};if(t.providers?.length){const r=new Set;let n=1;for(const i of t.providers){let o=e(i);o||(o=`Unknown Wallet #${n}`,n+=1),r.add(o)}const s=[...r];return s.length?s:s[0]??"Injected"}return e(t)??"Injected"}var Ta,zd=class extends Kc{constructor({chains:t,options:e}={}){const r={shimDisconnect:!0,getProvider(){if(typeof window>"u")return;const s=window.ethereum;return s?.providers&&s.providers.length>0?s.providers[0]:s},...e};super({chains:t,options:r}),this.id="injected",kt(this,Ta,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=s=>{s.length===0?this.emit("disconnect"):this.emit("change",{account:Ht(s[0])})},this.onChainChanged=s=>{const i=Wa(s),o=this.isChainUnsupported(i);this.emit("change",{chain:{id:i,unsupported:o}})},this.onDisconnect=async s=>{s.code===1013&&await this.getProvider()&&await this.getAccount()||(this.emit("disconnect"),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))};const n=r.getProvider();if(typeof r.name=="string")this.name=r.name;else if(n){const s=ty(n);r.name?this.name=r.name(s):typeof s=="string"?this.name=s:this.name=s[0]}else this.name="Injected";this.ready=!!n}async connect({chainId:t}={}){try{const e=await this.getProvider();if(!e)throw new vr;e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});const r=await e.request({method:"eth_requestAccounts"}),n=Ht(r[0]);let s=await this.getChainId(),i=this.isChainUnsupported(s);return t&&s!==t&&(s=(await this.switchChain(t)).id,i=this.isChainUnsupported(s)),this.options.shimDisconnect&&this.storage?.setItem(this.shimDisconnectKey,!0),{account:n,chain:{id:s,unsupported:i}}}catch(e){throw this.isUserRejectedRequestError(e)?new Mt(e):e.code===-32002?new Li(e):e}}async disconnect(){const t=await this.getProvider();t?.removeListener&&(t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))}async getAccount(){const t=await this.getProvider();if(!t)throw new vr;const e=await t.request({method:"eth_accounts"});return Ht(e[0])}async getChainId(){const t=await this.getProvider();if(!t)throw new vr;return t.request({method:"eth_chainId"}).then(Wa)}async getProvider(){const t=this.options.getProvider();return t&&io(this,Ta,t),We(this,Ta)}async getWalletClient({chainId:t}={}){const[e,r]=await Promise.all([this.getProvider(),this.getAccount()]),n=this.chains.find(s=>s.id===t);if(!e)throw new Error("provider is required.");return Gc({account:r,chain:n,transport:Vc(e)})}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.storage?.getItem(this.shimDisconnectKey))return!1;if(!await this.getProvider())throw new vr;return!!await this.getAccount()}catch{return!1}}async switchChain(t){const e=await this.getProvider();if(!e)throw new vr;const r=ve(t);try{return await Promise.all([e.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),new Promise(n=>this.on("change",({chain:s})=>{s?.id===t&&n()}))]),this.chains.find(n=>n.id===t)??{id:t,name:`Chain ${r}`,network:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(n){const s=this.chains.find(i=>i.id===t);if(!s)throw new Np({chainId:t,connectorId:this.id});if(n.code===4902||n?.data?.originalError?.code===4902)try{if(await e.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:s.name,nativeCurrency:s.nativeCurrency,rpcUrls:[s.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(s)}]}),await this.getChainId()!==t)throw new Mt(new Error("User rejected switch after adding network."));return s}catch(i){throw new Mt(i)}throw this.isUserRejectedRequestError(n)?new Mt(n):new cr(n)}}async watchAsset({address:t,decimals:e=18,image:r,symbol:n}){const s=await this.getProvider();if(!s)throw new vr;return s.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:r,symbol:n}}})}isUserRejectedRequestError(t){return t.code===4001}};Ta=new WeakMap;var Hd=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)},Nl=(t,e,r)=>(Hd(t,e,"read from private field"),r?r.call(t):e.get(t)),kl=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},ma=(t,e,r,n)=>(Hd(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r),ry=(t,e,r)=>(Hd(t,e,"access private method"),r);const ny=t=>(e,r,n)=>{const s=n.subscribe;return n.subscribe=(o,a,c)=>{let l=o;if(a){const u=c?.equalityFn||Object.is;let f=o(n.getState());l=m=>{const g=o(m);if(!u(f,g)){const w=f;a(f=g,w)}},c?.fireImmediately&&a(f,f)}return s(l)},t(e,r,n)},iy=ny;function sy(t,e){let r;try{r=t()}catch{return}return{getItem:s=>{var i;const o=c=>c===null?null:JSON.parse(c,e?.reviver),a=(i=r.getItem(s))!=null?i:null;return a instanceof Promise?a.then(o):o(a)},setItem:(s,i)=>r.setItem(s,JSON.stringify(i,e?.replacer)),removeItem:s=>r.removeItem(s)}}const so=t=>e=>{try{const r=t(e);return r instanceof Promise?r:{then(n){return so(n)(r)},catch(n){return this}}}catch(r){return{then(n){return this},catch(n){return so(n)(r)}}}},oy=(t,e)=>(r,n,s)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:v=>v,version:0,merge:(v,T)=>({...T,...v}),...e},o=!1;const a=new Set,c=new Set;let l;try{l=i.getStorage()}catch{}if(!l)return t((...v)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),r(...v)},n,s);const u=so(i.serialize),f=()=>{const v=i.partialize({...n()});let T;const b=u({state:v,version:i.version}).then(E=>l.setItem(i.name,E)).catch(E=>{T=E});if(T)throw T;return b},m=s.setState;s.setState=(v,T)=>{m(v,T),f()};const g=t((...v)=>{r(...v),f()},n,s);let w;const _=()=>{var v;if(!l)return;o=!1,a.forEach(b=>b(n()));const T=((v=i.onRehydrateStorage)==null?void 0:v.call(i,n()))||void 0;return so(l.getItem.bind(l))(i.name).then(b=>{if(b)return i.deserialize(b)}).then(b=>{if(b)if(typeof b.version=="number"&&b.version!==i.version){if(i.migrate)return i.migrate(b.state,b.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return b.state}).then(b=>{var E;return w=i.merge(b,(E=n())!=null?E:g),r(w,!0),f()}).then(()=>{T?.(w,void 0),o=!0,c.forEach(b=>b(w))}).catch(b=>{T?.(void 0,b)})};return s.persist={setOptions:v=>{i={...i,...v},v.getStorage&&(l=v.getStorage())},clearStorage:()=>{l?.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>_(),hasHydrated:()=>o,onHydrate:v=>(a.add(v),()=>{a.delete(v)}),onFinishHydration:v=>(c.add(v),()=>{c.delete(v)})},_(),w||g},ay=(t,e)=>(r,n,s)=>{let i={storage:sy(()=>localStorage),partialize:_=>_,version:0,merge:(_,v)=>({...v,..._}),...e},o=!1;const a=new Set,c=new Set;let l=i.storage;if(!l)return t((..._)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),r(..._)},n,s);const u=()=>{const _=i.partialize({...n()});return l.setItem(i.name,{state:_,version:i.version})},f=s.setState;s.setState=(_,v)=>{f(_,v),u()};const m=t((..._)=>{r(..._),u()},n,s);let g;const w=()=>{var _,v;if(!l)return;o=!1,a.forEach(b=>{var E;return b((E=n())!=null?E:m)});const T=((v=i.onRehydrateStorage)==null?void 0:v.call(i,(_=n())!=null?_:m))||void 0;return so(l.getItem.bind(l))(i.name).then(b=>{if(b)if(typeof b.version=="number"&&b.version!==i.version){if(i.migrate)return i.migrate(b.state,b.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return b.state}).then(b=>{var E;return g=i.merge(b,(E=n())!=null?E:m),r(g,!0),u()}).then(()=>{T?.(g,void 0),g=n(),o=!0,c.forEach(b=>b(g))}).catch(b=>{T?.(void 0,b)})};return s.persist={setOptions:_=>{i={...i,..._},_.storage&&(l=_.storage)},clearStorage:()=>{l?.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>w(),hasHydrated:()=>o,onHydrate:_=>(a.add(_),()=>{a.delete(_)}),onFinishHydration:_=>(c.add(_),()=>{c.delete(_)})},i.skipHydration||w(),g||m},cy=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?oy(t,e):ay(t,e),ly=cy,tf=t=>{let e;const r=new Set,n=(c,l)=>{const u=typeof c=="function"?c(e):c;if(!Object.is(u,e)){const f=e;e=l??(typeof u!="object"||u===null)?u:Object.assign({},e,u),r.forEach(m=>m(e,f))}},s=()=>e,a={setState:n,getState:s,subscribe:c=>(r.add(c),()=>r.delete(c)),destroy:()=>{r.clear()}};return e=t(n,s,a),a},uy=t=>t?tf(t):tf;function qd(t,e){if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(const[n,s]of t)if(!Object.is(s,e.get(n)))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0}const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!1;for(let n=0;n<r.length;n++)if(!Object.prototype.hasOwnProperty.call(e,r[n])||!Object.is(t[r[n]],e[r[n]]))return!1;return!0}function dy(t,e,{batch:r={multicall:{wait:32}},pollingInterval:n=4e3,rank:s,retryCount:i,retryDelay:o,stallTimeout:a}={}){if(!t.length)throw new Error("must have at least one chain");let c=[];const l={},u={};for(const f of t){let m=!1;for(const g of e){const w=g(f);w&&(m=!0,c.some(({id:_})=>_===f.id)||(c=[...c,w.chain]),l[f.id]=[...l[f.id]||[],...w.rpcUrls.http],w.rpcUrls.webSocket&&(u[f.id]=[...u[f.id]||[],...w.rpcUrls.webSocket]))}if(!m)throw new Error([`Could not find valid provider configuration for chain "${f.name}".
`,"You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.","Read more: https://wagmi.sh/core/providers/jsonRpc"].join(`
`))}return{chains:c,publicClient:({chainId:f})=>{const m=c.find(_=>_.id===f)??t[0],g=l[m.id];if(!g||!g[0])throw new Error(`No providers configured for chain "${m.id}"`);const w=ef({batch:r,chain:m,transport:Yh(g.map(_=>Hb(_,{timeout:a})),{rank:s,retryCount:i,retryDelay:o}),pollingInterval:n});return Object.assign(w,{chains:c})},webSocketPublicClient:({chainId:f})=>{const m=c.find(_=>_.id===f)??t[0],g=u[m.id];if(!g||!g[0])return;const w=ef({batch:r,chain:m,transport:Yh(g.map(_=>Y2(_,{timeout:a})),{rank:s,retryCount:i,retryDelay:o}),pollingInterval:n});return Object.assign(w,{chains:c})}}}var hy=class extends Error{constructor({activeChain:t,targetChain:e}){super(`Chain mismatch: Expected "${e}", received "${t}".`),this.name="ChainMismatchError"}},fy=class extends Error{constructor({chainId:t,connectorId:e}){super(`Chain "${t}" not configured${e?` for connector "${e}"`:""}.`),this.name="ChainNotConfigured"}},py=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},gy=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},my=class extends Error{constructor({connector:t}){super(`"${t.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}};function Au(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let r,n;if(Array.isArray(t)&&Array.isArray(e)){if(r=t.length,r!=e.length)return!1;for(n=r;n--!==0;)if(!Au(t[n],e[n]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const s=Object.keys(t);if(r=s.length,r!==Object.keys(e).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(e,s[n]))return!1;for(n=r;n--!==0;){const i=s[n];if(i&&!Au(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}var $u=(t,{find:e,replace:r})=>t&&e(t)?r(t):typeof t!="object"?t:Array.isArray(t)?t.map(n=>$u(n,{find:e,replace:r})):t instanceof Object?Object.entries(t).reduce((n,[s,i])=>({...n,[s]:$u(i,{find:e,replace:r})}),{}):t;function wy(t){const e=JSON.parse(t);return $u(e,{find:n=>typeof n=="string"&&n.startsWith("#bigint."),replace:n=>BigInt(n.replace("#bigint.",""))})}function rf(t){return typeof t=="number"?t:t==="wei"?0:Math.abs(jm[t])}function nf(t,e){return t.slice(0,e).join(".")||"."}function sf(t,e){const{length:r}=t;for(let n=0;n<r;++n)if(t[n]===e)return n+1;return 0}function by(t,e){const r=typeof t=="function",n=typeof e=="function",s=[],i=[];return function(a,c){if(typeof c=="object")if(s.length){const l=sf(s,this);l===0?s[s.length]=this:(s.splice(l),i.splice(l)),i[i.length]=a;const u=sf(s,c);if(u!==0)return n?e.call(this,a,c,nf(i,u)):`[ref=${nf(i,u)}]`}else s[0]=c,i[0]=a;return r?t.call(this,a,c):c}}function yy(t,e,r,n){return JSON.stringify(t,by((s,i)=>{const o=typeof i=="bigint"?`#bigint.${i.toString()}`:i;return e?.(s,o)||o},n),r??void 0)}var Mp={getItem:t=>"",setItem:(t,e)=>null,removeItem:t=>null};function Up({deserialize:t=wy,key:e="wagmi",serialize:r=yy,storage:n}){return{...n,getItem:(s,i=null)=>{const o=n.getItem(`${e}.${s}`);try{return o?t(o):i}catch(a){return console.warn(a),i}},setItem:(s,i)=>{if(i===null)n.removeItem(`${e}.${s}`);else try{n.setItem(`${e}.${s}`,r(i))}catch(o){console.error(o)}},removeItem:s=>n.removeItem(`${e}.${s}`)}}var of="store",$i,Is,Tu,Bp,vy=class{constructor({autoConnect:t=!1,connectors:e=[new zd],publicClient:r,storage:n=Up({storage:typeof window<"u"?window.localStorage:Mp}),logger:s={warn:console.warn},webSocketPublicClient:i}){kl(this,Tu),this.publicClients=new Map,this.webSocketPublicClients=new Map,kl(this,$i,void 0),kl(this,Is,void 0),this.args={autoConnect:t,connectors:e,logger:s,publicClient:r,storage:n,webSocketPublicClient:i};let o="disconnected",a;if(t)try{const u=n.getItem(of)?.state?.data;o=u?.account?"reconnecting":"connecting",a=u?.chain?.id}catch{}const c=typeof e=="function"?e():e;c.forEach(l=>l.setStorage(n)),this.store=uy(iy(ly(()=>({connectors:c,publicClient:this.getPublicClient({chainId:a}),status:o,webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}),{name:of,storage:n,partialize:l=>({...t&&{data:{account:l?.data?.account,chain:l?.data?.chain}},chains:l?.chains}),version:2}))),this.storage=n,ma(this,Is,n?.getItem("wallet")),ry(this,Tu,Bp).call(this),t&&typeof window<"u"&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){return this.data?.chain?.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(t){const e=typeof t=="function"?t(this.store.getState()):t;this.store.setState(e,!0)}clearState(){this.setState(t=>({...t,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){this.connector&&await this.connector.disconnect?.(),ma(this,$i,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(Nl(this,$i))return;ma(this,$i,!0),this.setState(r=>({...r,status:r.data?.account?"reconnecting":"connecting"}));const t=Nl(this,Is)?[...this.connectors].sort(r=>r.id===Nl(this,Is)?-1:1):this.connectors;let e=!1;for(const r of t){if(!r.ready||!r.isAuthorized||!await r.isAuthorized())continue;const s=await r.connect();this.setState(i=>({...i,connector:r,chains:r?.chains,data:s,status:"connected"})),e=!0;break}return e||this.setState(r=>({...r,data:void 0,status:"disconnected"})),ma(this,$i,!1),this.data}setConnectors(t){this.args={...this.args,connectors:t};const e=typeof t=="function"?t():t;e.forEach(r=>r.setStorage(this.args.storage)),this.setState(r=>({...r,connectors:e}))}getPublicClient({chainId:t}={}){let e=this.publicClients.get(-1);if(e&&e?.chain.id===t||(e=this.publicClients.get(t??-1),e))return e;const{publicClient:r}=this.args;return e=typeof r=="function"?r({chainId:t}):r,this.publicClients.set(t??-1,e),e}setPublicClient(t){const e=this.data?.chain?.id;this.args={...this.args,publicClient:t},this.publicClients.clear(),this.setState(r=>({...r,publicClient:this.getPublicClient({chainId:e})}))}getWebSocketPublicClient({chainId:t}={}){let e=this.webSocketPublicClients.get(-1);if(e&&e?.chain.id===t||(e=this.webSocketPublicClients.get(t??-1),e))return e;const{webSocketPublicClient:r}=this.args;return e=typeof r=="function"?r({chainId:t}):r,e&&this.webSocketPublicClients.set(t??-1,e),e}setWebSocketPublicClient(t){const e=this.data?.chain?.id;this.args={...this.args,webSocketPublicClient:t},this.webSocketPublicClients.clear(),this.setState(r=>({...r,webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})}))}setLastUsedConnector(t=null){this.storage?.setItem("wallet",t)}};$i=new WeakMap;Is=new WeakMap;Tu=new WeakSet;Bp=function(){const t=a=>{this.setState(c=>({...c,data:{...c.data,...a}}))},e=()=>{this.clearState()},r=a=>{this.setState(c=>({...c,error:a}))};this.store.subscribe(({connector:a})=>a,(a,c)=>{c?.off?.("change",t),c?.off?.("disconnect",e),c?.off?.("error",r),a&&(a.on?.("change",t),a.on?.("disconnect",e),a.on?.("error",r))});const{publicClient:n,webSocketPublicClient:s}=this.args;(typeof n=="function"||typeof s=="function")&&this.store.subscribe(({data:a})=>a?.chain?.id,a=>{this.setState(c=>({...c,publicClient:this.getPublicClient({chainId:a}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}))})};var Iu;function xy(t){const e=new vy(t);return Iu=e,e}function qt(){if(!Iu)throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return Iu}async function af({chainId:t,connector:e}){const r=qt(),n=r.connector;if(n&&e.id===n.id)throw new py;try{r.setState(i=>({...i,status:"connecting"}));const s=await e.connect({chainId:t});return r.setLastUsedConnector(e.id),r.setState(i=>({...i,connector:e,chains:e?.chains,data:s,status:"connected"})),r.storage.setItem("connected",!0),{...s,connector:e}}catch(s){throw r.setState(i=>({...i,status:i.connector?"connected":"disconnected"})),s}}async function _y(){const t=qt();t.connector&&await t.connector.disconnect(),t.clearState(),t.storage.removeItem("connected")}var Cy=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],Ey=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function Jt({chainId:t}={}){const e=qt();return t&&e.getPublicClient({chainId:t})||e.publicClient}async function Jo({chainId:t}={}){return await qt().connector?.getWalletClient?.({chainId:t})||null}function Sy(t,e){const r=qt(),n=async()=>e(Jt(t));return r.subscribe(({publicClient:i})=>i,n)}function Ay({chainId:t},e){const r=qt(),n=async({chainId:i})=>{if(t&&i&&t!==i)return;const o=await Jo({chainId:t});return qt().connector?e(o):e(null)};return r.subscribe(({data:i,connector:o})=>({account:i?.account,chainId:i?.chain?.id,connector:o}),n,{equalityFn:qd})}async function $y({chainId:t,contracts:e,blockNumber:r,blockTag:n,...s}){const i=Jt({chainId:t});if(!i.chains)throw new gy;if(t&&i.chain.id!==t)throw new fy({chainId:t});return i.multicall({allowFailure:s.allowFailure??!0,blockNumber:r,blockTag:n,contracts:e})}async function Ty({address:t,account:e,chainId:r,abi:n,args:s,functionName:i,blockNumber:o,blockTag:a}){return Jt({chainId:r}).readContract({abi:n,address:t,account:e,functionName:i,args:s,blockNumber:o,blockTag:a})}async function Iy({contracts:t,blockNumber:e,blockTag:r,...n}){const{allowFailure:s=!0}=n;try{const i=Jt(),o=t.reduce((u,f,m)=>{const g=f.chainId??i.chain.id;return{...u,[g]:[...u[g]||[],{contract:f,index:m}]}},{}),a=()=>Object.entries(o).map(([u,f])=>$y({allowFailure:s,chainId:parseInt(u),contracts:f.map(({contract:m})=>m),blockNumber:e,blockTag:r})),c=(await Promise.all(a())).flat(),l=Object.values(o).flatMap(u=>u.map(({index:f})=>f));return c.reduce((u,f,m)=>(u&&(u[l[m]]=f),u),[])}catch(i){if(i instanceof Sd)throw i;const o=()=>t.map(a=>Ty({...a,blockNumber:e,blockTag:r}));return s?(await Promise.allSettled(o())).map(a=>a.status==="fulfilled"?{result:a.value,status:"success"}:{error:a.reason,result:void 0,status:"failure"}):await Promise.all(o())}}async function Ry({address:t,chainId:e,formatUnits:r,token:n}){const s=qt(),i=Jt({chainId:e});if(n){const l=async({abi:u})=>{const f={abi:u,address:n,chainId:e},[m,g,w]=await Iy({allowFailure:!1,contracts:[{...f,functionName:"balanceOf",args:[t]},{...f,functionName:"decimals"},{...f,functionName:"symbol"}]});return{decimals:g,formatted:Ma(m??"0",rf(r??g)),symbol:w,value:m}};try{return await l({abi:Cy})}catch(u){if(u instanceof Sd){const{symbol:f,...m}=await l({abi:Ey});return{symbol:gd(zn(f,{dir:"right"})),...m}}throw u}}const o=[...s.publicClient.chains||[],...s.chains??[]],a=await i.getBalance({address:t}),c=o.find(l=>l.id===i.chain.id);return{decimals:c?.nativeCurrency.decimals??18,formatted:Ma(a??"0",rf(r??18)),symbol:c?.nativeCurrency.symbol??"ETH",value:a}}function za(){const{data:t,connector:e,status:r}=qt();switch(r){case"connected":return{address:t?.account,connector:e,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:r};case"reconnecting":return{address:t?.account,connector:e,isConnected:!!t?.account,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:r};case"connecting":return{address:t?.account,connector:e,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:r};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:r}}}function oo(){const t=qt(),e=t.data?.chain?.id,r=t.chains??[],n=[...t.publicClient?.chains||[],...r].find(s=>s.id===e)??{id:e,name:`Chain ${e}`,network:`${e}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:e?{...n,...t.data?.chain,id:e}:void 0,chains:r}}async function Oy(t){const e=await Jo();if(!e)throw new vr;return await e.signMessage({message:t.message})}async function Py({chainId:t}){const{connector:e}=qt();if(!e)throw new vr;if(!e.switchChain)throw new my({connector:e});return e.switchChain(t)}function jp(t,{selector:e=r=>r}={}){const r=qt(),n=()=>t(za());return r.subscribe(({data:i,connector:o,status:a})=>e({address:i?.account,connector:o,status:a}),n,{equalityFn:qd})}function Lp(t,{selector:e=r=>r}={}){const r=qt(),n=()=>t(oo());return r.subscribe(({data:i,chains:o})=>e({chainId:i?.chain?.id,chains:o}),n,{equalityFn:qd})}async function Dy({chainId:t,name:e}){const{normalize:r}=await Zn(()=>import("./index._HghUQKF.js"),__vite__mapDeps([2,1])),s=await Jt({chainId:t}).getEnsAddress({name:r(e)});try{return s==="0x0000000000000000000000000000000000000000"?null:s?Ht(s):null}catch{return null}}async function Ny({name:t,chainId:e}){const{normalize:r}=await Zn(()=>import("./index._HghUQKF.js"),__vite__mapDeps([2,1]));return await Jt({chainId:e}).getEnsAvatar({name:r(t)})}async function ky({address:t,chainId:e}){return Jt({chainId:e}).getEnsName({address:Ht(t)})}async function Fp({accessList:t,account:e,chainId:r,data:n,gas:s,gasPrice:i,maxFeePerGas:o,maxPriorityFeePerGas:a,nonce:c,to:l,value:u,walletClient:f}){const m=Jt({chainId:r}),g=f??await Jo({chainId:r});if(!g)throw new vr;r&&Wp({chainId:r});const w=(l&&!Er(l)?await Dy({name:l}):l)||void 0;if(w&&!Er(w))throw new Error("Invalid address");const _=typeof s>"u"?await m.estimateGas({accessList:t,account:g.account,data:n,gas:s??void 0,gasPrice:i,maxFeePerGas:o,maxPriorityFeePerGas:a,nonce:c,to:w,value:u}):s||void 0;return{accessList:t,account:e,data:n,gas:_,gasPrice:i,maxFeePerGas:o,maxPriorityFeePerGas:a,mode:"prepared",nonce:c,to:w,value:u,...r?{chainId:r}:{}}}async function My({accessList:t,account:e,chainId:r,data:n,gas:s,gasPrice:i,maxFeePerGas:o,maxPriorityFeePerGas:a,mode:c,nonce:l,to:u,value:f}){const m=await Jo({chainId:r});if(!m)throw new vr;r&&Wp({chainId:r});let g;return c==="prepared"?g={account:e,accessList:t,chain:null,data:n,gas:s,gasPrice:i,maxFeePerGas:o,maxPriorityFeePerGas:a,nonce:l,to:u,value:f}:g=await Fp({accessList:t,account:e,chainId:r,data:n,gas:s||null,gasPrice:i,maxFeePerGas:o,maxPriorityFeePerGas:a,nonce:l,to:u,value:f}),{hash:await m.sendTransaction({...g,chain:r?{id:r}:null})}}async function Uy({chainId:t,confirmations:e=1,hash:r,onReplaced:n,timeout:s=0}){const i=Jt({chainId:t}),o=await i.waitForTransactionReceipt({hash:r,confirmations:e,onReplaced:n,timeout:s});if(o.status==="reverted"){const a=await i.getTransaction({hash:o.transactionHash}),c=await i.call({...a,gasPrice:a.type!=="eip1559"?a.gasPrice:void 0,maxFeePerGas:a.type==="eip1559"?a.maxFeePerGas:void 0,maxPriorityFeePerGas:a.type==="eip1559"?a.maxPriorityFeePerGas:void 0}),l=gd(`0x${c.substring(138)}`);throw new Error(l)}return o}function Wp({chainId:t}){const{chain:e,chains:r}=oo(),n=e?.id;if(n&&t!==n)throw new hy({activeChain:r.find(s=>s.id===n)?.name??`Chain ${n}`,targetChain:r.find(s=>s.id===t)?.name??`Chain ${t}`})}const By=Symbol(),cf=Object.getPrototypeOf,Ru=new WeakMap,jy=t=>t&&(Ru.has(t)?Ru.get(t):cf(t)===Object.prototype||cf(t)===Array.prototype),Ly=t=>jy(t)&&t[By]||null,lf=(t,e=!0)=>{Ru.set(t,e)},Ml=t=>typeof t=="object"&&t!==null,rn=new WeakMap,Rs=new WeakSet,Fy=(t=Object.is,e=(l,u)=>new Proxy(l,u),r=l=>Ml(l)&&!Rs.has(l)&&(Array.isArray(l)||!(Symbol.iterator in l))&&!(l instanceof WeakMap)&&!(l instanceof WeakSet)&&!(l instanceof Error)&&!(l instanceof Number)&&!(l instanceof Date)&&!(l instanceof String)&&!(l instanceof RegExp)&&!(l instanceof ArrayBuffer),n=l=>{switch(l.status){case"fulfilled":return l.value;case"rejected":throw l.reason;default:throw l}},s=new WeakMap,i=(l,u,f=n)=>{const m=s.get(l);if(m?.[0]===u)return m[1];const g=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l));return lf(g,!0),s.set(l,[u,g]),Reflect.ownKeys(l).forEach(w=>{if(Object.getOwnPropertyDescriptor(g,w))return;const _=Reflect.get(l,w),v={value:_,enumerable:!0,configurable:!0};if(Rs.has(_))lf(_,!1);else if(_ instanceof Promise)delete v.value,v.get=()=>f(_);else if(rn.has(_)){const[T,b]=rn.get(_);v.value=i(T,b(),f)}Object.defineProperty(g,w,v)}),Object.preventExtensions(g)},o=new WeakMap,a=[1,1],c=l=>{if(!Ml(l))throw new Error("object required");const u=o.get(l);if(u)return u;let f=a[0];const m=new Set,g=(P,D=++a[0])=>{f!==D&&(f=D,m.forEach(k=>k(P,D)))};let w=a[1];const _=(P=++a[1])=>(w!==P&&!m.size&&(w=P,T.forEach(([D])=>{const k=D[1](P);k>f&&(f=k)})),f),v=P=>(D,k)=>{const K=[...D];K[1]=[P,...K[1]],g(K,k)},T=new Map,b=(P,D)=>{if(m.size){const k=D[3](v(P));T.set(P,[D,k])}else T.set(P,[D])},E=P=>{var D;const k=T.get(P);k&&(T.delete(P),(D=k[1])==null||D.call(k))},x=P=>(m.add(P),m.size===1&&T.forEach(([k,K],Y)=>{const W=k[3](v(Y));T.set(Y,[k,W])}),()=>{m.delete(P),m.size===0&&T.forEach(([k,K],Y)=>{K&&(K(),T.set(Y,[k]))})}),C=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l)),h=e(C,{deleteProperty(P,D){const k=Reflect.get(P,D);E(D);const K=Reflect.deleteProperty(P,D);return K&&g(["delete",[D],k]),K},set(P,D,k,K){const Y=Reflect.has(P,D),W=Reflect.get(P,D,K);if(Y&&(t(W,k)||o.has(k)&&t(W,o.get(k))))return!0;E(D),Ml(k)&&(k=Ly(k)||k);let j=k;if(k instanceof Promise)k.then(M=>{k.status="fulfilled",k.value=M,g(["resolve",[D],M])}).catch(M=>{k.status="rejected",k.reason=M,g(["reject",[D],M])});else{!rn.has(k)&&r(k)&&(j=c(k));const M=!Rs.has(j)&&rn.get(j);M&&b(D,M)}return Reflect.set(P,D,j,K),g(["set",[D],k,W]),!0}});o.set(l,h);const S=[C,_,i,x];return rn.set(h,S),Reflect.ownKeys(l).forEach(P=>{const D=Object.getOwnPropertyDescriptor(l,P);"value"in D&&(h[P]=l[P],delete D.value,delete D.writable),Object.defineProperty(C,P,D)}),h})=>[c,rn,Rs,t,e,r,n,s,i,o,a],[Wy]=Fy();function Nt(t={}){return Wy(t)}function Kr(t,e,r){const n=rn.get(t);let s;const i=[],o=n[3];let a=!1;const l=o(u=>{if(i.push(u),r){e(i.splice(0));return}s||(s=Promise.resolve().then(()=>{s=void 0,a&&e(i.splice(0))}))});return a=!0,()=>{a=!1,l()}}function m9(t,e){const r=rn.get(t),[n,s,i]=r;return i(n,s(),e)}function ao(t){return Rs.add(t),t}function pr(t,e,r,n){let s=t[e];return Kr(t,()=>{const i=t[e];Object.is(s,i)||r(s=i)},n)}var zp={exports:{}},Hp={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fi=De;function zy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hy=typeof Object.is=="function"?Object.is:zy,qy=Fi.useState,Vy=Fi.useEffect,Zy=Fi.useLayoutEffect,Gy=Fi.useDebugValue;function Ky(t,e){var r=e(),n=qy({inst:{value:r,getSnapshot:e}}),s=n[0].inst,i=n[1];return Zy(function(){s.value=r,s.getSnapshot=e,Ul(s)&&i({inst:s})},[t,r,e]),Vy(function(){return Ul(s)&&i({inst:s}),t(function(){Ul(s)&&i({inst:s})})},[t]),Gy(r),r}function Ul(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Hy(t,r)}catch{return!0}}function Qy(t,e){return e()}var Yy=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Qy:Ky;Hp.useSyncExternalStore=Fi.useSyncExternalStore!==void 0?Fi.useSyncExternalStore:Yy;zp.exports=Hp;var Vd=zp.exports;const Bl="https://secure.web3modal.com",cn={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:Bl,SECURE_SITE_DASHBOARD:`${Bl}/dashboard`,SECURE_SITE_FAVICON:`${Bl}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},de={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const t=window.navigator.userAgent.toLowerCase();return de.isMobile()&&t.includes("android")},isIos(){const t=window.navigator.userAgent.toLowerCase();return de.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=cn.TEN_SEC_MS:!0},isAllowedRetry(t){return Date.now()-t>=cn.ONE_SEC_MS},copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry(){return Date.now()+cn.FOUR_MINUTES_MS},getPlainAddress(t){return t.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let r;return(...n)=>{function s(){t(...n)}r&&clearTimeout(r),r=setTimeout(s,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(de.isHttpUrl(t))return this.formatUniversalUrl(t,e);let r=t;r.includes("://")||(r=t.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);const n=encodeURIComponent(e);return{redirect:`${r}wc?uri=${n}`,href:r}},formatUniversalUrl(t,e){if(!de.isHttpUrl(t))return this.formatNativeUrl(t,e);let r=t;r.endsWith("/")||(r=`${r}/`);const n=encodeURIComponent(e);return{redirect:`${r}wc?uri=${n}`,href:r}},openHref(t,e){window.open(t,e,"noreferrer noopener")},async preloadImage(t){const e=new Promise((r,n)=>{const s=new Image;s.onload=r,s.onerror=n,s.crossOrigin="anonymous",s.src=t});return Promise.race([e,de.wait(2e3)])},formatBalance(t,e){let r;if(t==="0")r="0.000";else if(typeof t=="string"){const n=Number(t);n&&(r=n.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return r?`${r} ${e}`:`0.000 ${e}`},isRestrictedRegion(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return cn.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return de.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return de.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return de.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})},parseError(t){return typeof t=="string"?t:typeof t?.issues?.[0]?.message=="string"?t.issues[0].message:t instanceof Error?t.message:"Unknown error"}},dt=Nt({isConnected:!1}),Ue={state:dt,subscribe(t){return Kr(dt,()=>t(dt))},subscribeKey(t,e){return pr(dt,t,e)},setIsConnected(t){dt.isConnected=t},setCaipAddress(t){dt.caipAddress=t,dt.address=t?de.getPlainAddress(t):void 0},setBalance(t,e){dt.balance=t,dt.balanceSymbol=e},setProfileName(t){dt.profileName=t},setProfileImage(t){dt.profileImage=t},setAddressExplorerUrl(t){dt.addressExplorerUrl=t},resetAccount(){dt.isConnected=!1,dt.caipAddress=void 0,dt.address=void 0,dt.balance=void 0,dt.balanceSymbol=void 0,dt.profileName=void 0,dt.profileImage=void 0,dt.addressExplorerUrl=void 0}};class Zd{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...r}){const n=this.createUrl(r);return(await fetch(n,{method:"GET",headers:e})).json()}async getBlob({headers:e,...r}){const n=this.createUrl(r);return(await fetch(n,{method:"GET",headers:e})).blob()}async post({body:e,headers:r,...n}){const s=this.createUrl(n);return(await fetch(s,{method:"POST",headers:r,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:r,...n}){const s=this.createUrl(n);return(await fetch(s,{method:"PUT",headers:r,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:r,...n}){const s=this.createUrl(n);return(await fetch(s,{method:"DELETE",headers:r,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:r}){const n=new URL(e,this.baseUrl);return r&&Object.entries(r).forEach(([s,i])=>{i&&n.searchParams.append(s,i)}),n}}const jl="WALLETCONNECT_DEEPLINK_CHOICE",uf="@w3m/recent",df="@w3m/connected_wallet_image_url",hf="@w3m/connected_connector",Rt={setWalletConnectDeepLink({href:t,name:e}){try{localStorage.setItem(jl,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const t=localStorage.getItem(jl);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(jl)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{const e=Rt.getRecentWallets();e.find(n=>n.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),localStorage.setItem(uf,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const t=localStorage.getItem(uf);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(t){try{localStorage.setItem(df,t)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(df)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(t){try{localStorage.setItem(hf,t)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(hf)}catch{console.info("Unable to get Connected Connector")}}},en=Nt({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),Mi={state:en,subscribeNetworkImages(t){return Kr(en.networkImages,()=>t(en.networkImages))},subscribeKey(t,e){return pr(en,t,e)},setWalletImage(t,e){en.walletImages[t]=e},setNetworkImage(t,e){en.networkImages[t]=e},setConnectorImage(t,e){en.connectorImages[t]=e},setTokenImage(t,e){en.tokenImages[t]=e}},xi=Nt({connectors:[]}),Je={state:xi,subscribeKey(t,e){return pr(xi,t,e)},setConnectors(t){xi.connectors=t.map(e=>ao(e))},addConnector(t){xi.connectors.push(ao(t))},getEmailConnector(){return xi.connectors.find(t=>t.type==="EMAIL")},getConnectors(){return xi.connectors}},Es=Nt({open:!1,selectedNetworkId:void 0}),Wi={state:Es,subscribe(t){return Kr(Es,()=>t(Es))},set(t){Object.assign(Es,{...Es,...t})}},_t=Nt({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),nt={state:_t,subscribeKey(t,e){return pr(_t,t,e)},_getClient(){if(!_t._client)throw new Error("NetworkController client not set");return _t._client},setClient(t){_t._client=ao(t)},setCaipNetwork(t){_t.caipNetwork=t,Wi.set({selectedNetworkId:t?.id})},setDefaultCaipNetwork(t){_t.caipNetwork=t,Wi.set({selectedNetworkId:t?.id}),_t.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(t){_t.requestedCaipNetworks=t},async getApprovedCaipNetworksData(){const t=await this._getClient().getApprovedCaipNetworksData();_t.supportsAllNetworks=t.supportsAllNetworks,_t.approvedCaipNetworkIds=t.approvedCaipNetworkIds},async switchActiveNetwork(t){await this._getClient().switchCaipNetwork(t),_t.caipNetwork=t},resetNetwork(){_t.isDefaultCaipNetwork||(_t.caipNetwork=void 0),_t.approvedCaipNetworkIds=void 0,_t.supportsAllNetworks=!0}},Wt=Nt({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),je={state:Wt,subscribeKey(t,e){return pr(Wt,t,e)},setProjectId(t){Wt.projectId=t},setIncludeWalletIds(t){Wt.includeWalletIds=t},setExcludeWalletIds(t){Wt.excludeWalletIds=t},setFeaturedWalletIds(t){Wt.featuredWalletIds=t},setTokens(t){Wt.tokens=t},setTermsConditionsUrl(t){Wt.termsConditionsUrl=t},setPrivacyPolicyUrl(t){Wt.privacyPolicyUrl=t},setCustomWallets(t){Wt.customWallets=t},setEnableAnalytics(t){Wt.enableAnalytics=t},setSdkVersion(t){Wt.sdkVersion=t},setMetadata(t){Wt.metadata=t}},Jy=de.getApiUrl(),wr=new Zd({baseUrl:Jy}),Xy="40",ff="4",$t=Nt({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),Re={state:$t,subscribeKey(t,e){return pr($t,t,e)},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:r}=je.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":r}},async _fetchWalletImage(t){const e=`${wr.baseUrl}/getWalletImage/${t}`,r=await wr.getBlob({path:e,headers:Re._getApiHeaders()});Mi.setWalletImage(t,URL.createObjectURL(r))},async _fetchNetworkImage(t){const e=`${wr.baseUrl}/public/getAssetImage/${t}`,r=await wr.getBlob({path:e,headers:Re._getApiHeaders()});Mi.setNetworkImage(t,URL.createObjectURL(r))},async _fetchConnectorImage(t){const e=`${wr.baseUrl}/public/getAssetImage/${t}`,r=await wr.getBlob({path:e,headers:Re._getApiHeaders()});Mi.setConnectorImage(t,URL.createObjectURL(r))},async fetchNetworkImages(){const{requestedCaipNetworks:t}=nt.state,e=t?.map(({imageId:r})=>r).filter(Boolean);e&&await Promise.allSettled(e.map(r=>Re._fetchNetworkImage(r)))},async fetchConnectorImages(){const{connectors:t}=Je.state,e=t.map(({imageId:r})=>r).filter(Boolean);await Promise.allSettled(e.map(r=>Re._fetchConnectorImage(r)))},async fetchFeaturedWallets(){const{featuredWalletIds:t}=je.state;if(t?.length){const{data:e}=await wr.get({path:"/getWallets",headers:Re._getApiHeaders(),params:{page:"1",entries:t?.length?String(t.length):ff,include:t?.join(",")}});e.sort((n,s)=>t.indexOf(n.id)-t.indexOf(s.id));const r=e.map(n=>n.image_id).filter(Boolean);await Promise.allSettled(r.map(n=>Re._fetchWalletImage(n))),$t.featured=e}},async fetchRecommendedWallets(){const{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:r}=je.state,n=[...e??[],...r??[]].filter(Boolean),{data:s,count:i}=await wr.get({path:"/getWallets",headers:Re._getApiHeaders(),params:{page:"1",entries:ff,include:t?.join(","),exclude:n?.join(",")}}),o=Rt.getRecentWallets(),a=s.map(l=>l.image_id).filter(Boolean),c=o.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a,...c].map(l=>Re._fetchWalletImage(l))),$t.recommended=s,$t.count=i??0},async fetchWallets({page:t}){const{includeWalletIds:e,excludeWalletIds:r,featuredWalletIds:n}=je.state,s=[...$t.recommended.map(({id:c})=>c),...r??[],...n??[]].filter(Boolean),{data:i,count:o}=await wr.get({path:"/getWallets",headers:Re._getApiHeaders(),params:{page:String(t),entries:Xy,include:e?.join(","),exclude:s.join(",")}}),a=i.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a.map(c=>Re._fetchWalletImage(c)),de.wait(300)]),$t.wallets=[...$t.wallets,...i],$t.count=o>$t.count?o:$t.count,$t.page=t},async searchWallet({search:t}){const{includeWalletIds:e,excludeWalletIds:r}=je.state;$t.search=[];const{data:n}=await wr.get({path:"/getWallets",headers:Re._getApiHeaders(),params:{page:"1",entries:"100",search:t,include:e?.join(","),exclude:r?.join(",")}}),s=n.map(i=>i.image_id).filter(Boolean);await Promise.allSettled([...s.map(i=>Re._fetchWalletImage(i)),de.wait(300)]),$t.search=n},prefetch(){$t.prefetchPromise=Promise.race([Promise.allSettled([Re.fetchFeaturedWallets(),Re.fetchRecommendedWallets(),Re.fetchNetworkImages(),Re.fetchConnectorImages()]),de.wait(3e3)])}},ev=de.getAnalyticsUrl(),tv=new Zd({baseUrl:ev}),rv=["MODAL_CREATED"],_i=Nt({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),Me={state:_i,subscribe(t){return Kr(_i,()=>t(_i))},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:r}=je.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":r}},async _sendAnalyticsEvent(t){try{if(rv.includes(t.data.event)||typeof window>"u")return;await tv.post({path:"/e",headers:Me._getApiHeaders(),body:{eventId:de.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:t.data}})}catch{}},sendEvent(t){_i.timestamp=Date.now(),_i.data=t,je.state.enableAnalytics&&Me._sendAnalyticsEvent(_i)}},Ke=Nt({view:"Connect",history:["Connect"]}),re={state:Ke,subscribeKey(t,e){return pr(Ke,t,e)},push(t,e){t!==Ke.view&&(Ke.view=t,Ke.history.push(t),Ke.data=e)},reset(t){Ke.view=t,Ke.history=[t]},replace(t,e){Ke.history.length>1&&Ke.history.at(-1)!==t&&(Ke.view=t,Ke.history[Ke.history.length-1]=t,Ke.data=e)},goBack(){if(Ke.history.length>1){Ke.history.pop();const[t]=Ke.history.slice(-1);t&&(Ke.view=t)}},goBackToIndex(t){if(Ke.history.length>1){Ke.history=Ke.history.slice(0,t+1);const[e]=Ke.history.slice(-1);e&&(Ke.view=e)}}},Nn=Nt({loading:!1,open:!1}),qe={state:Nn,subscribe(t){return Kr(Nn,()=>t(Nn))},subscribeKey(t,e){return pr(Nn,t,e)},async open(t){await Re.state.prefetchPromise,t?.view?re.reset(t.view):Ue.state.isConnected?re.reset("Account"):re.reset("Connect"),Nn.open=!0,Wi.set({open:!0}),Me.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){Nn.open=!1,Wi.set({open:!1}),Me.sendEvent({type:"track",event:"MODAL_CLOSE"})},setLoading(t){Nn.loading=t}},nv=de.getBlockchainApiUrl(),pf=new Zd({baseUrl:nv}),qp={fetchIdentity({caipChainId:t,address:e}){return pf.get({path:`/v1/identity/${e}`,params:{chainId:t,projectId:je.state.projectId}})},fetchTransactions({account:t,projectId:e,cursor:r}){const n=r?{cursor:r}:{};return pf.get({path:`/v1/account/${t}/history?projectId=${e}`,params:n})}},Ur=Nt({message:"",variant:"success",open:!1}),Xe={state:Ur,subscribeKey(t,e){return pr(Ur,t,e)},showSuccess(t){Ur.message=t,Ur.variant="success",Ur.open=!0},showError(t){const e=de.parseError(t);Ur.message=e,Ur.variant="error",Ur.open=!0},hide(){Ur.open=!1}},ht=Nt({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),nr={state:ht,subscribe(t){return Kr(ht,()=>t(ht))},async fetchTransactions(t){const{projectId:e}=je.state;if(!e||!t)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");ht.loading=!0;try{const r=await qp.fetchTransactions({account:t,projectId:e,cursor:ht.next}),n=this.filterSpamTransactions(r.data),s=[...ht.transactions,...n];ht.loading=!1,ht.transactions=s,ht.transactionsByYear=this.groupTransactionsByYear(ht.transactionsByYear,n),ht.empty=s.length===0,ht.next=r.next?r.next:void 0}catch{Me.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:e,cursor:ht.next}}),Xe.showError("Failed to fetch transactions"),ht.loading=!1,ht.empty=!0}},groupTransactionsByYear(t={},e=[]){const r=t;return e.forEach(n=>{const s=new Date(n.metadata.minedAt).getFullYear();r[s]||(r[s]=[]),r[s]?.push(n)}),r},filterSpamTransactions(t){return t.filter(e=>!e.transfers.every(n=>n.nft_info?.flags.is_spam===!0))},resetTransactions(){ht.transactions=[],ht.transactionsByYear={},ht.loading=!1,ht.empty=!1,ht.next=void 0}},yt=Nt({wcError:!1,buffering:!1}),Pe={state:yt,subscribeKey(t,e){return pr(yt,t,e)},_getClient(){if(!yt._client)throw new Error("ConnectionController client not set");return yt._client},setClient(t){yt._client=ao(t)},connectWalletConnect(){yt.wcPromise=this._getClient().connectWalletConnect(t=>{yt.wcUri=t,yt.wcPairingExpiry=de.getPairingExpiry()})},async connectExternal(t){await this._getClient().connectExternal?.(t),Rt.setConnectedConnector(t.type)},async signMessage(t){return this._getClient().signMessage(t)},checkInstalled(t){return this._getClient().checkInstalled?.(t)},resetWcConnection(){yt.wcUri=void 0,yt.wcPairingExpiry=void 0,yt.wcPromise=void 0,yt.wcLinking=void 0,yt.recentWallet=void 0,nr.resetTransactions(),Rt.deleteWalletConnectDeepLink()},setWcLinking(t){yt.wcLinking=t},setWcError(t){yt.wcError=t,yt.buffering=!1},setRecentWallet(t){yt.recentWallet=t},setBuffering(t){yt.buffering=t},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},zt=Nt({status:"uninitialized",isSiweEnabled:!1}),ot={state:zt,subscribeKey(t,e){return pr(zt,t,e)},subscribe(t){return Kr(zt,()=>t(zt))},_getClient(){if(!zt._client)throw new Error("SIWEController client not set");return zt._client},async getNonce(){const e=await this._getClient().getNonce();return this.setNonce(e),e},async getSession(){const e=await this._getClient().getSession();return e&&(this.setSession(e),this.setStatus("success")),e},createMessage(t){const r=this._getClient().createMessage(t);return this.setMessage(r),r},async verifyMessage(t){return await this._getClient().verifyMessage(t)},async signIn(){return await this._getClient().signIn()},async signOut(){const t=this._getClient();await t.signOut(),this.setStatus("ready"),t.onSignOut?.()},onSignIn(t){this._getClient().onSignIn?.(t)},onSignOut(){this._getClient().onSignOut?.()},setSIWEClient(t){zt._client=ao(t),zt.status="ready",zt.isSiweEnabled=t.options.enabled},setNonce(t){zt.nonce=t},setStatus(t){zt.status=t},setMessage(t){zt.message=t},setSession(t){zt.session=t}},Ci=Nt({themeMode:"dark",themeVariables:{}}),Kt={state:Ci,subscribe(t){return Kr(Ci,()=>t(Ci))},setThemeMode(t){Ci.themeMode=t},setThemeVariables(t){Ci.themeVariables={...Ci.themeVariables,...t}}},rt={getWalletImage(t){if(t?.image_url)return t?.image_url;if(t?.image_id)return Mi.state.walletImages[t.image_id]},getNetworkImage(t){if(t?.imageUrl)return t?.imageUrl;if(t?.imageId)return Mi.state.networkImages[t.imageId]},getConnectorImage(t){if(t?.imageUrl)return t.imageUrl;if(t?.imageId)return Mi.state.connectorImages[t.imageId]}},Vp={goBackOrCloseModal(){re.state.history.length>1?re.goBack():qe.close()},navigateAfterNetworkSwitch(){const{history:t}=re.state,e=t.findIndex(r=>r==="Networks");e>=1?re.goBackToIndex(e-1):qe.close()}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ia=globalThis,Gd=Ia.ShadowRoot&&(Ia.ShadyCSS===void 0||Ia.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kd=Symbol(),gf=new WeakMap;let Zp=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==Kd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Gd&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=gf.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&gf.set(r,e))}return e}toString(){return this.cssText}};const yr=t=>new Zp(typeof t=="string"?t:t+"",void 0,Kd),oe=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,s,i)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new Zp(r,t,Kd)},iv=(t,e)=>{if(Gd)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),s=Ia.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,t.appendChild(n)}},mf=Gd?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return yr(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:sv,defineProperty:ov,getOwnPropertyDescriptor:av,getOwnPropertyNames:cv,getOwnPropertySymbols:lv,getPrototypeOf:uv}=Object,Qc=globalThis,wf=Qc.trustedTypes,dv=wf?wf.emptyScript:"",hv=Qc.reactiveElementPolyfillSupport,Ns=(t,e)=>t,Ha={toAttribute(t,e){switch(e){case Boolean:t=t?dv:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Qd=(t,e)=>!sv(t,e),bf={attribute:!0,type:String,converter:Ha,reflect:!1,hasChanged:Qd};Symbol.metadata??=Symbol("metadata"),Qc.litPropertyMetadata??=new WeakMap;let Ti=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=bf){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(e,n,r);s!==void 0&&ov(this.prototype,e,s)}}static getPropertyDescriptor(e,r,n){const{get:s,set:i}=av(this.prototype,e)??{get(){return this[r]},set(o){this[r]=o}};return{get(){return s?.call(this)},set(o){const a=s?.call(this);i.call(this,o),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??bf}static _$Ei(){if(this.hasOwnProperty(Ns("elementProperties")))return;const e=uv(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ns("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ns("properties"))){const r=this.properties,n=[...cv(r),...lv(r)];for(const s of n)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,s]of r)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const s=this._$Eu(r,n);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)r.unshift(mf(s))}else e!==void 0&&r.push(mf(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$E_??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return iv(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EO(e,r){const n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){const i=(n.converter?.toAttribute!==void 0?n.converter:Ha).toAttribute(r,n.type);this._$Em=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(e,r){const n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const i=n.getPropertyOptions(s),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Ha;this._$Em=s,this[s]=o.fromAttribute(r,i.type),this._$Em=null}}requestUpdate(e,r,n,s=!1,i){if(e!==void 0){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??Qd)(s?i:this[e],r))return;this.C(e,r,n)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,r,n){this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,i]of n)i.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.C(s,this[s],i)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$E_?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$ET()}catch(n){throw e=!1,this._$ET(),n}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$E_?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(r=>this._$EO(r,this[r])),this._$ET()}updated(e){}firstUpdated(e){}};Ti.elementStyles=[],Ti.shadowRootOptions={mode:"open"},Ti[Ns("elementProperties")]=new Map,Ti[Ns("finalized")]=new Map,hv?.({ReactiveElement:Ti}),(Qc.reactiveElementVersions??=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yd=globalThis,qa=Yd.trustedTypes,yf=qa?qa.createPolicy("lit-html",{createHTML:t=>t}):void 0,Gp="$lit$",sn=`lit$${(Math.random()+"").slice(9)}$`,Kp="?"+sn,fv=`<${Kp}>`,Gn=document,co=()=>Gn.createComment(""),lo=t=>t===null||typeof t!="object"&&typeof t!="function",Qp=Array.isArray,pv=t=>Qp(t)||typeof t?.[Symbol.iterator]=="function",Ll=`[ 	
\f\r]`,Ss=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vf=/-->/g,xf=/>/g,kn=RegExp(`>|${Ll}(?:([^\\s"'>=/]+)(${Ll}*=${Ll}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_f=/'/g,Cf=/"/g,Yp=/^(?:script|style|textarea|title)$/i,Jp=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),F=Jp(1),G=Jp(2),Kn=Symbol.for("lit-noChange"),at=Symbol.for("lit-nothing"),Ef=new WeakMap,jn=Gn.createTreeWalker(Gn,129);function Xp(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return yf!==void 0?yf.createHTML(e):e}const gv=(t,e)=>{const r=t.length-1,n=[];let s,i=e===2?"<svg>":"",o=Ss;for(let a=0;a<r;a++){const c=t[a];let l,u,f=-1,m=0;for(;m<c.length&&(o.lastIndex=m,u=o.exec(c),u!==null);)m=o.lastIndex,o===Ss?u[1]==="!--"?o=vf:u[1]!==void 0?o=xf:u[2]!==void 0?(Yp.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=kn):u[3]!==void 0&&(o=kn):o===kn?u[0]===">"?(o=s??Ss,f=-1):u[1]===void 0?f=-2:(f=o.lastIndex-u[2].length,l=u[1],o=u[3]===void 0?kn:u[3]==='"'?Cf:_f):o===Cf||o===_f?o=kn:o===vf||o===xf?o=Ss:(o=kn,s=void 0);const g=o===kn&&t[a+1].startsWith("/>")?" ":"";i+=o===Ss?c+fv:f>=0?(n.push(l),c.slice(0,f)+Gp+c.slice(f)+sn+g):c+sn+(f===-2?a:g)}return[Xp(t,i+(t[r]||"<?>")+(e===2?"</svg>":"")),n]};let Ou=class e1{constructor({strings:e,_$litType$:r},n){let s;this.parts=[];let i=0,o=0;const a=e.length-1,c=this.parts,[l,u]=gv(e,r);if(this.el=e1.createElement(l,n),jn.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=jn.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(Gp)){const m=u[o++],g=s.getAttribute(f).split(sn),w=/([.?@])?(.*)/.exec(m);c.push({type:1,index:i,name:w[2],strings:g,ctor:w[1]==="."?wv:w[1]==="?"?bv:w[1]==="@"?yv:Yc}),s.removeAttribute(f)}else f.startsWith(sn)&&(c.push({type:6,index:i}),s.removeAttribute(f));if(Yp.test(s.tagName)){const f=s.textContent.split(sn),m=f.length-1;if(m>0){s.textContent=qa?qa.emptyScript:"";for(let g=0;g<m;g++)s.append(f[g],co()),jn.nextNode(),c.push({type:2,index:++i});s.append(f[m],co())}}}else if(s.nodeType===8)if(s.data===Kp)c.push({type:2,index:i});else{let f=-1;for(;(f=s.data.indexOf(sn,f+1))!==-1;)c.push({type:7,index:i}),f+=sn.length-1}i++}}static createElement(e,r){const n=Gn.createElement("template");return n.innerHTML=e,n}};function zi(t,e,r=t,n){if(e===Kn)return e;let s=n!==void 0?r._$Co?.[n]:r._$Cl;const i=lo(e)?void 0:e._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(t),s._$AT(t,r,n)),n!==void 0?(r._$Co??=[])[n]=s:r._$Cl=s),s!==void 0&&(e=zi(t,s._$AS(t,e.values),s,n)),e}let mv=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,s=(e?.creationScope??Gn).importNode(r,!0);jn.currentNode=s;let i=jn.nextNode(),o=0,a=0,c=n[0];for(;c!==void 0;){if(o===c.index){let l;c.type===2?l=new Jd(i,i.nextSibling,this,e):c.type===1?l=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(l=new vv(i,this,e)),this._$AV.push(l),c=n[++a]}o!==c?.index&&(i=jn.nextNode(),o++)}return jn.currentNode=Gn,s}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}},Jd=class t1{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,n,s){this.type=2,this._$AH=at,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=zi(this,e,r),lo(e)?e===at||e==null||e===""?(this._$AH!==at&&this._$AR(),this._$AH=at):e!==this._$AH&&e!==Kn&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):pv(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==at&&lo(this._$AH)?this._$AA.nextSibling.data=e:this.$(Gn.createTextNode(e)),this._$AH=e}g(e){const{values:r,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Ou.createElement(Xp(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===s)this._$AH.p(r);else{const i=new mv(s,this),o=i.u(this.options);i.p(r),this.$(o),this._$AH=i}}_$AC(e){let r=Ef.get(e.strings);return r===void 0&&Ef.set(e.strings,r=new Ou(e)),r}T(e){Qp(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,s=0;for(const i of e)s===r.length?r.push(n=new t1(this.k(co()),this.k(co()),this,this.options)):n=r[s],n._$AI(i),s++;s<r.length&&(this._$AR(n&&n._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Yc=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,s,i){this.type=1,this._$AH=at,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=at}_$AI(e,r=this,n,s){const i=this.strings;let o=!1;if(i===void 0)e=zi(this,e,r,0),o=!lo(e)||e!==this._$AH&&e!==Kn,o&&(this._$AH=e);else{const a=e;let c,l;for(e=i[0],c=0;c<i.length-1;c++)l=zi(this,a[n+c],r,c),l===Kn&&(l=this._$AH[c]),o||=!lo(l)||l!==this._$AH[c],l===at?e=at:e!==at&&(e+=(l??"")+i[c+1]),this._$AH[c]=l}o&&!s&&this.O(e)}O(e){e===at?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},wv=class extends Yc{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===at?void 0:e}},bv=class extends Yc{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==at)}},yv=class extends Yc{constructor(e,r,n,s,i){super(e,r,n,s,i),this.type=5}_$AI(e,r=this){if((e=zi(this,e,r,0)??at)===Kn)return;const n=this._$AH,s=e===at&&n!==at||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==at&&(n===at||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},vv=class{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){zi(this,e)}};const xv=Yd.litHtmlPolyfillSupport;xv?.(Ou,Jd),(Yd.litHtmlVersions??=[]).push("3.1.0");const _v=(t,e,r)=>{const n=r?.renderBefore??e;let s=n._$litPart$;if(s===void 0){const i=r?.renderBefore??null;n._$litPart$=s=new Jd(e.insertBefore(co(),i),i,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ce=class extends Ti{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_v(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Kn}};ce._$litElement$=!0,ce.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ce});const Cv=globalThis.litElementPolyfillSupport;Cv?.({LitElement:ce});(globalThis.litElementVersions??=[]).push("4.0.2");let ks,dn,hn;function r1(t,e){ks=document.createElement("style"),dn=document.createElement("style"),hn=document.createElement("style"),ks.textContent=Ui(t).core.cssText,dn.textContent=Ui(t).dark.cssText,hn.textContent=Ui(t).light.cssText,document.head.appendChild(ks),document.head.appendChild(dn),document.head.appendChild(hn),Xd(e)}function Xd(t){dn&&hn&&(t==="light"?(dn.removeAttribute("media"),hn.media="enabled"):(hn.removeAttribute("media"),dn.media="enabled"))}function n1(t){ks&&dn&&hn&&(ks.textContent=Ui(t).core.cssText,dn.textContent=Ui(t).dark.cssText,hn.textContent=Ui(t).light.cssText)}function Ui(t){return{core:oe`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${yr(t?.["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${yr(t?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${yr(t?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${yr(t?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${yr(t?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:oe`
      :root {
        --w3m-color-mix: ${yr(t?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${yr(t?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:oe`
      :root {
        --w3m-color-mix: ${yr(t?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${yr(t?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const ge=oe`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,et=oe`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,eh=oe`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function Ev(t,e){const{kind:r,elements:n}=e;return{kind:r,elements:n,finisher(s){customElements.get(t)||customElements.define(t,s)}}}function Sv(t,e){return customElements.get(t)||customElements.define(t,e),e}function z(t){return function(r){return typeof r=="function"?Sv(t,r):Ev(t,r)}}const Av=oe`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var $v=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Va=class extends ce{render(){return F`<slot></slot>`}};Va.styles=[ge,Av];Va=$v([z("wui-card")],Va);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tv={attribute:!0,type:String,converter:Ha,reflect:!1,hasChanged:Qd},Iv=(t=Tv,e,r)=>{const{kind:n,metadata:s}=r;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(r.name,t),n==="accessor"){const{name:o}=r;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,c,t)},init(a){return a!==void 0&&this.C(o,void 0,t),a}}}if(n==="setter"){const{name:o}=r;return function(a){const c=this[o];e.call(this,a),this.requestUpdate(o,c,t)}}throw Error("Unsupported decorator location: "+n)};function R(t){return(e,r)=>typeof r=="object"?Iv(t,e,r):((n,s,i)=>{const o=s.hasOwnProperty(i);return s.constructor.createProperty(i,o?{...n,wrapped:!0}:n),o?Object.getOwnPropertyDescriptor(s,i):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function th(t){return R({...t,state:!0,attribute:!1})}const Rv=oe`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,Ov=G`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,Pv=G`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,Dv=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Nv=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,kv=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,Mv=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Uv=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,Bv=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,jv=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,Lv=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Fv=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,Wv=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,zv=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Hv=G`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,qv=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Vv=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,Zv=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,Gv=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,Kv=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,Qv=G` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,Yv=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,Jv=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Xv=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,e3=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,t3=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,r3=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,n3=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,i3=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,s3=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,o3=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,a3=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,c3=G`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,l3=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,u3=G`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,d3=G`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,h3=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,f3=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,p3=G` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,g3=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,m3=G`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,w3=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,b3=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,y3=G`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,v3=G`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,x3=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,_3=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,C3=G`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,E3=G`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,S3=G`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,A3=G`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,$3=G`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,T3=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,I3=G`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,R3=G`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var Jc=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};const O3={allWallets:Ov,appStore:Pv,chromeStore:Hv,apple:Dv,arrowBottom:Nv,arrowLeft:kv,arrowRight:Mv,arrowTop:Uv,browser:Bv,checkmark:jv,chevronBottom:Lv,chevronLeft:Fv,chevronRight:Wv,chevronTop:zv,clock:qv,close:Vv,compass:Gv,coinPlaceholder:Zv,copy:Kv,cursor:Qv,desktop:Yv,disconnect:Jv,discord:Xv,etherscan:e3,extension:t3,externalLink:r3,facebook:n3,filters:i3,github:s3,google:o3,helpCircle:a3,infoCircle:c3,mail:l3,mobile:u3,networkPlaceholder:d3,nftPlaceholder:h3,off:f3,playStore:p3,qrCode:g3,refresh:m3,search:w3,swapHorizontal:b3,swapHorizontalBold:y3,swapVertical:v3,telegram:x3,twitch:_3,twitter:C3,twitterIcon:E3,verify:S3,verifyFilled:A3,wallet:T3,walletConnect:I3,walletPlaceholder:$3,warningCircle:R3};let Qn=class extends ce{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,F`${O3[this.name]}`}};Qn.styles=[ge,eh,Rv];Jc([R()],Qn.prototype,"size",void 0);Jc([R()],Qn.prototype,"name",void 0);Jc([R()],Qn.prototype,"color",void 0);Qn=Jc([z("wui-icon")],Qn);const P3=oe`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var rh=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Hi=class extends ce{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return F`<img src=${this.src} alt=${this.alt} />`}};Hi.styles=[ge,eh,P3];rh([R()],Hi.prototype,"src",void 0);rh([R()],Hi.prototype,"alt",void 0);Hi=rh([z("wui-image")],Hi);const D3=oe`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var N3=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Za=class extends ce{render(){return F`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Za.styles=[ge,D3];Za=N3([z("wui-loading-hexagon")],Za);const k3=oe`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var nh=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let qi=class extends ce{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,F`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};qi.styles=[ge,k3];nh([R()],qi.prototype,"color",void 0);nh([R()],qi.prototype,"size",void 0);qi=nh([z("wui-loading-spinner")],qi);const M3=oe`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var i1=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let uo=class extends ce{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,n=36-e,s=116+n,i=245+n,o=360+n*1.75;return F`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${s} ${i}"
          stroke-dashoffset=${o}
        />
      </svg>
    `}};uo.styles=[ge,M3];i1([R({type:Number})],uo.prototype,"radius",void 0);uo=i1([z("wui-loading-thumbnail")],uo);const U3=oe`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Xc=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Yn=class extends ce{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,F`<slot></slot>`}};Yn.styles=[U3];Xc([R()],Yn.prototype,"width",void 0);Xc([R()],Yn.prototype,"height",void 0);Xc([R()],Yn.prototype,"borderRadius",void 0);Yn=Xc([z("wui-shimmer")],Yn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s1={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o1=t=>(...e)=>({_$litDirective$:t,values:e});let a1=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B3=o1(class extends a1{constructor(t){if(super(t),t.type!==s1.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!this.st?.has(n)&&this.it.add(n);return this.render(e)}const r=t.element.classList;for(const n of this.it)n in e||(r.remove(n),this.it.delete(n));for(const n in e){const s=!!e[n];s===this.it.has(n)||this.st?.has(n)||(s?(r.add(n),this.it.add(n)):(r.remove(n),this.it.delete(n)))}return Kn}}),j3=oe`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var el=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Jn=class extends ce{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,F`<slot class=${B3(e)}></slot>`}};Jn.styles=[ge,j3];el([R()],Jn.prototype,"variant",void 0);el([R()],Jn.prototype,"color",void 0);el([R()],Jn.prototype,"align",void 0);Jn=el([z("wui-text")],Jn);const L3=G`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,F3=G`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,W3=G`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,z3=G`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,H3=G`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,q3=G`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,V3=G`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Z3=G`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,G3=G`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,K3=G`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,Q3=G`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Y3=G`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,J3=G`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,X3=oe`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var c1=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};const e5={browser:L3,dao:F3,defi:W3,defiAlt:z3,eth:H3,layers:q3,lock:V3,login:Z3,network:G3,nft:K3,noun:Q3,profile:Y3,system:J3};let ho=class extends ce{constructor(){super(...arguments),this.name="browser"}render(){return F`${e5[this.name]}`}};ho.styles=[ge,X3];c1([R()],ho.prototype,"name",void 0);ho=c1([z("wui-visual")],ho);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _r=t=>t??at,Fe={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){return new URL(t).hostname},getTruncateString({string:t,charsStart:e,charsEnd:r,truncate:n}){return t.length<=e+r?t:n==="end"?`${t.substring(0,e)}...`:n==="start"?`...${t.substring(t.length-r)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(r))}`},generateAvatarColors(t){const r=t.toLowerCase().replace(/^0x/iu,"").substring(0,6),n=this.hexToRgb(r),s=[];for(let i=0;i<5;i+=1){const o=this.tintColor(n,.15*i);s.push(`rgb(${o[0]}, ${o[1]}, ${o[2]})`)}return`
    --local-color-1: ${s[0]};
    --local-color-2: ${s[1]};
    --local-color-3: ${s[2]};
    --local-color-4: ${s[3]};
    --local-color-5: ${s[4]};
   `},hexToRgb(t){const e=parseInt(t,16),r=e>>16&255,n=e>>8&255,s=e&255;return[r,n,s]},tintColor(t,e){const[r,n,s]=t,i=Math.round(r+(255-r)*e),o=Math.round(n+(255-n)*e),a=Math.round(s+(255-s)*e);return[i,o,a]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}},t5=oe`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var Zt=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let St=class extends ce{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Fe.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Fe.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Fe.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Fe.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Fe.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Fe.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Fe.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Fe.getSpacingStyles(this.margin,3)};
    `,F`<slot></slot>`}};St.styles=[ge,t5];Zt([R()],St.prototype,"flexDirection",void 0);Zt([R()],St.prototype,"flexWrap",void 0);Zt([R()],St.prototype,"flexBasis",void 0);Zt([R()],St.prototype,"flexGrow",void 0);Zt([R()],St.prototype,"flexShrink",void 0);Zt([R()],St.prototype,"alignItems",void 0);Zt([R()],St.prototype,"justifyContent",void 0);Zt([R()],St.prototype,"columnGap",void 0);Zt([R()],St.prototype,"rowGap",void 0);Zt([R()],St.prototype,"gap",void 0);Zt([R()],St.prototype,"padding",void 0);Zt([R()],St.prototype,"margin",void 0);St=Zt([z("wui-flex")],St);const r5=oe`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var tl=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Xn=class extends ce{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return F`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",F`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=Fe.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};Xn.styles=[ge,r5];tl([R()],Xn.prototype,"imageSrc",void 0);tl([R()],Xn.prototype,"alt",void 0);tl([R()],Xn.prototype,"address",void 0);Xn=tl([z("wui-avatar")],Xn);const n5=oe`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    box-shadow: 0 0 0 1px var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var Qr=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Xt=class extends ce{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,r=this.size==="lg",n=this.size==="xl",s=r?"12%":"16%",i=r?"xxs":n?"s":"3xl",o=this.background==="gray",a=this.background==="opaque",c=this.backgroundColor==="accent-100"&&a||this.backgroundColor==="success-100"&&a||this.backgroundColor==="error-100"&&a||this.backgroundColor==="inverse-100"&&a;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:o&&(l=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${l};
       --local-bg-mix: ${c||o?"100%":s};
       --local-border-radius: var(--wui-border-radius-${i});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,F` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Xt.styles=[ge,et,n5];Qr([R()],Xt.prototype,"size",void 0);Qr([R()],Xt.prototype,"backgroundColor",void 0);Qr([R()],Xt.prototype,"iconColor",void 0);Qr([R()],Xt.prototype,"iconSize",void 0);Qr([R()],Xt.prototype,"background",void 0);Qr([R({type:Boolean})],Xt.prototype,"border",void 0);Qr([R()],Xt.prototype,"borderColor",void 0);Qr([R()],Xt.prototype,"icon",void 0);Xt=Qr([z("wui-icon-box")],Xt);const i5=oe`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button > wui-flex {
      border-radius: 0px;
      border: none;
      background: transparent;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var hi=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Sr=class extends ce{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return F`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${_r(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${Fe.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const e=this.networkSrc?F`<wui-image src=${this.networkSrc}></wui-image>`:F`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return F`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};Sr.styles=[ge,et,i5];hi([R()],Sr.prototype,"networkSrc",void 0);hi([R()],Sr.prototype,"avatarSrc",void 0);hi([R()],Sr.prototype,"balance",void 0);hi([R({type:Boolean})],Sr.prototype,"disabled",void 0);hi([R({type:Boolean})],Sr.prototype,"isProfileName",void 0);hi([R()],Sr.prototype,"address",void 0);Sr=hi([z("wui-account-button")],Sr);const s5=oe`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var fi=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Ar=class extends ce{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),F`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
      ${this.templateInstalledBadge()}
    `}templateVisual(){return this.imageSrc?F`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?F`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:F`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}templateInstalledBadge(){return this.installed?F`
        <wui-icon-box
          size=${this.badgeSize}
          iconSize=${this.badgeSize}
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      `:null}};Ar.styles=[ge,s5];fi([R()],Ar.prototype,"size",void 0);fi([R()],Ar.prototype,"name",void 0);fi([R()],Ar.prototype,"imageSrc",void 0);fi([R()],Ar.prototype,"walletIcon",void 0);fi([R({type:Boolean})],Ar.prototype,"installed",void 0);fi([R()],Ar.prototype,"badgeSize",void 0);Ar=fi([z("wui-wallet-image")],Ar);const o5=oe`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var l1=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};const Fl=4;let fo=class extends ce{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<Fl;return F`${this.walletImages.slice(0,Fl).map(({src:r,walletName:n})=>F`
            <wui-wallet-image
              size="inherit"
              imageSrc=${r}
              name=${_r(n)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(Fl-this.walletImages.length)].map(()=>F` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};fo.styles=[ge,o5];l1([R({type:Array})],fo.prototype,"walletImages",void 0);fo=l1([z("wui-all-wallets-image")],fo);const a5=oe`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var An=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let lr=class extends ce{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;const e=this.size==="md"?"paragraph-600":"small-600";return F`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?F`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:F``}};lr.styles=[ge,et,a5];An([R()],lr.prototype,"size",void 0);An([R({type:Boolean})],lr.prototype,"disabled",void 0);An([R({type:Boolean})],lr.prototype,"fullWidth",void 0);An([R({type:Boolean})],lr.prototype,"loading",void 0);An([R()],lr.prototype,"variant",void 0);An([R({type:Boolean})],lr.prototype,"hasIconLeft",void 0);An([R({type:Boolean})],lr.prototype,"hasIconRight",void 0);lr=An([z("wui-button")],lr);const u1=G`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,c5=oe`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var d1=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let po=class extends ce{constructor(){super(...arguments),this.type="wallet"}render(){return F`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?F` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${u1}`:F`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};po.styles=[ge,et,c5];d1([R()],po.prototype,"type",void 0);po=d1([z("wui-card-select-loader")],po);const l5=G`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,u5=oe`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Xo=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let mn=class extends ce{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e=this.size==="lg";return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,F`${this.templateVisual()} ${e?l5:u1}`}templateVisual(){return this.imageSrc?F`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:F`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};mn.styles=[ge,u5];Xo([R()],mn.prototype,"size",void 0);Xo([R()],mn.prototype,"name",void 0);Xo([R()],mn.prototype,"imageSrc",void 0);Xo([R({type:Boolean})],mn.prototype,"selected",void 0);mn=Xo([z("wui-network-image")],mn);const d5=oe`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var pi=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let $r=class extends ce{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return F`
      <button data-selected=${_r(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?F`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${_r(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:F`
      <wui-wallet-image
        size="md"
        imageSrc=${_r(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};$r.styles=[ge,et,d5];pi([R()],$r.prototype,"name",void 0);pi([R()],$r.prototype,"type",void 0);pi([R()],$r.prototype,"imageSrc",void 0);pi([R({type:Boolean})],$r.prototype,"disabled",void 0);pi([R({type:Boolean})],$r.prototype,"selected",void 0);pi([R({type:Boolean})],$r.prototype,"installed",void 0);$r=pi([z("wui-card-select")],$r);const h5=oe`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }
`;var gi=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Tr=class extends ce{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const r=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return F`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${r} color="inherit">
          ${this.title?this.title:Fe.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?F`<wui-image src=${this.imageSrc}></wui-image>`:null}};Tr.styles=[ge,et,h5];gi([R()],Tr.prototype,"variant",void 0);gi([R()],Tr.prototype,"imageSrc",void 0);gi([R({type:Boolean})],Tr.prototype,"disabled",void 0);gi([R()],Tr.prototype,"icon",void 0);gi([R()],Tr.prototype,"href",void 0);gi([R()],Tr.prototype,"text",void 0);Tr=gi([z("wui-chip")],Tr);const f5=oe`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var ih=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Vi=class extends ce{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return F`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?F`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Vi.styles=[ge,et,f5];ih([R()],Vi.prototype,"size",void 0);ih([R({type:Boolean})],Vi.prototype,"loading",void 0);Vi=ih([z("wui-connect-button")],Vi);const p5=oe`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var rl=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let ei=class extends ce{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return F`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};ei.styles=[ge,et,p5];rl([R({type:Boolean})],ei.prototype,"disabled",void 0);rl([R()],ei.prototype,"label",void 0);rl([R()],ei.prototype,"buttonLabel",void 0);ei=rl([z("wui-cta-button")],ei);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g5=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ms=(t,e)=>{const r=t._$AN;if(r===void 0)return!1;for(const n of r)n._$AO?.(e,!1),Ms(n,e);return!0},Ga=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while(r?.size===0)},h1=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),b5(e)}};function m5(t){this._$AN!==void 0?(Ga(this),this._$AM=t,h1(this)):this._$AM=t}function w5(t,e=!1,r=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(n))for(let i=r;i<n.length;i++)Ms(n[i],!1),Ga(n[i]);else n!=null&&(Ms(n,!1),Ga(n));else Ms(this,t)}const b5=t=>{t.type==s1.CHILD&&(t._$AP??=w5,t._$AQ??=m5)};let y5=class extends a1{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,n){super._$AT(e,r,n),h1(this),this.isConnected=e._$AU}_$AO(e,r=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),r&&(Ms(this,e),Ga(this))}setValue(e){if(g5(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f1=()=>new v5;let v5=class{};const Wl=new WeakMap,p1=o1(class extends y5{render(t){return at}update(t,[e]){const r=e!==this.G;return r&&this.G!==void 0&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=e,this.ct=t.options?.host,this.ot(this.lt=t.element)),at}ot(t){if(typeof this.G=="function"){const e=this.ct??globalThis;let r=Wl.get(e);r===void 0&&(r=new WeakMap,Wl.set(e,r)),r.get(this.G)!==void 0&&this.G.call(this.ct,void 0),r.set(this.G,t),t!==void 0&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){return typeof this.G=="function"?Wl.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),x5=oe`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var $n=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let ur=class extends ce{constructor(){super(...arguments),this.inputElementRef=f1(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){const e=`wui-size-${this.size}`;return F` ${this.templateIcon()}
      <input
        ${p1(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${_r(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${_r(this.value)}
      />
      <slot></slot>`}templateIcon(){return this.icon?F`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};ur.styles=[ge,et,x5];$n([R()],ur.prototype,"size",void 0);$n([R()],ur.prototype,"icon",void 0);$n([R({type:Boolean})],ur.prototype,"disabled",void 0);$n([R()],ur.prototype,"placeholder",void 0);$n([R()],ur.prototype,"type",void 0);$n([R()],ur.prototype,"keyHint",void 0);$n([R()],ur.prototype,"value",void 0);ur=$n([z("wui-input-text")],ur);const _5=oe`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var nl=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let ti=class extends ce{constructor(){super(...arguments),this.disabled=!1}render(){return F`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?F`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};ti.styles=[ge,_5];nl([R()],ti.prototype,"errorMessage",void 0);nl([R({type:Boolean})],ti.prototype,"disabled",void 0);nl([R()],ti.prototype,"value",void 0);ti=nl([z("wui-email-input")],ti);const C5=oe`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var ea=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let wn=class extends ce{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return F`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};wn.styles=[ge,et,eh,C5];ea([R()],wn.prototype,"size",void 0);ea([R({type:Boolean})],wn.prototype,"disabled",void 0);ea([R()],wn.prototype,"icon",void 0);ea([R()],wn.prototype,"iconColor",void 0);wn=ea([z("wui-icon-link")],wn);const E5=oe`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var g1=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let go=class extends ce{constructor(){super(...arguments),this.icon="copy"}render(){return F`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};go.styles=[ge,et,E5];g1([R()],go.prototype,"icon",void 0);go=g1([z("wui-input-element")],go);const S5=oe`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`;var m1=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let mo=class extends ce{constructor(){super(...arguments),this.disabled=!1}render(){return F`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};mo.styles=[ge,et,S5];m1([R({type:Boolean})],mo.prototype,"disabled",void 0);mo=m1([z("wui-input-numeric")],mo);const A5=oe`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var sh=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Zi=class extends ce{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return F`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Zi.styles=[ge,et,A5];sh([R({type:Boolean})],Zi.prototype,"disabled",void 0);sh([R()],Zi.prototype,"color",void 0);Zi=sh([z("wui-link")],Zi);const $5=oe`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Nr=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Vt=class extends ce{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return F`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${_r(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return F`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return F`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",r=this.iconVariant==="square-blue"?"mdl":"md",n=this.iconSize?this.iconSize:r;return F`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${n}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${r}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?F`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:F``}chevronTemplate(){return this.chevron?F`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};Vt.styles=[ge,et,$5];Nr([R()],Vt.prototype,"icon",void 0);Nr([R()],Vt.prototype,"iconSize",void 0);Nr([R()],Vt.prototype,"variant",void 0);Nr([R()],Vt.prototype,"iconVariant",void 0);Nr([R({type:Boolean})],Vt.prototype,"disabled",void 0);Nr([R()],Vt.prototype,"imageSrc",void 0);Nr([R()],Vt.prototype,"alt",void 0);Nr([R({type:Boolean})],Vt.prototype,"chevron",void 0);Nr([R({type:Boolean})],Vt.prototype,"loading",void 0);Vt=Nr([z("wui-list-item")],Vt);var Pu;(function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"})(Pu||(Pu={}));const T5=oe`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var mi=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Ir=class extends ce{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,r]=this.images,n=e?.type==="NFT",s=r?.url?r.type==="NFT":n,i=n?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",o=s?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${i};
    --local-right-border-radius: ${o};
    `,F`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,r]=this.images,n=e?.type;return this.images.length===2&&(e?.url||r?.url)?F`<div class="swap-images-container">
        ${e?.url?F`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${r?.url?F`<wui-image src=${r.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?F`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:n==="NFT"?F`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:F`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",r;return r=this.getIcon(),this.status&&(e=this.getStatusColor()),r?F`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${r}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};Ir.styles=[T5];mi([R()],Ir.prototype,"type",void 0);mi([R()],Ir.prototype,"status",void 0);mi([R()],Ir.prototype,"direction",void 0);mi([R({type:Boolean})],Ir.prototype,"onlyDirectionIcon",void 0);mi([R({type:Array})],Ir.prototype,"images",void 0);mi([R({type:Object})],Ir.prototype,"secondImage",void 0);Ir=mi([z("wui-transaction-visual")],Ir);const I5=oe`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Tn=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let dr=class extends ce{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return F`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${_r(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${_r(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${Pu[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const e=this.descriptions?.[0];return e?F`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){const e=this.descriptions?.[1];return e?F`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};dr.styles=[ge,I5];Tn([R()],dr.prototype,"type",void 0);Tn([R({type:Array})],dr.prototype,"descriptions",void 0);Tn([R()],dr.prototype,"date",void 0);Tn([R({type:Boolean})],dr.prototype,"onlyDirectionIcon",void 0);Tn([R()],dr.prototype,"status",void 0);Tn([R()],dr.prototype,"direction",void 0);Tn([R({type:Array})],dr.prototype,"images",void 0);dr=Tn([z("wui-transaction-list-item")],dr);const R5=oe`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var O5=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Ka=class extends ce{render(){return F`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};Ka.styles=[ge,R5];Ka=O5([z("wui-transaction-list-item-loader")],Ka);const P5=oe`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var w1=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let wo=class extends ce{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,F`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};wo.styles=[ge,P5];w1([R()],wo.prototype,"variant",void 0);wo=w1([z("wui-tag")],wo);const D5=oe`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var gr=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Bt=class extends ce{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return F`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?F` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?F` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?F`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?F`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?F`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?F`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Bt.styles=[ge,et,D5];gr([R({type:Array})],Bt.prototype,"walletImages",void 0);gr([R()],Bt.prototype,"imageSrc",void 0);gr([R()],Bt.prototype,"name",void 0);gr([R()],Bt.prototype,"tagLabel",void 0);gr([R()],Bt.prototype,"tagVariant",void 0);gr([R()],Bt.prototype,"icon",void 0);gr([R()],Bt.prototype,"walletIcon",void 0);gr([R({type:Boolean})],Bt.prototype,"installed",void 0);gr([R({type:Boolean})],Bt.prototype,"disabled",void 0);gr([R({type:Boolean})],Bt.prototype,"showAllWallets",void 0);Bt=gr([z("wui-list-wallet")],Bt);const N5=oe`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var b1=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let bo=class extends ce{constructor(){super(...arguments),this.logo="google"}render(){return F`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};bo.styles=[ge,N5];b1([R()],bo.prototype,"logo",void 0);bo=b1([z("wui-logo")],bo);const k5=oe`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var oh=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Gi=class extends ce{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return F`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Gi.styles=[ge,et,k5];oh([R()],Gi.prototype,"logo",void 0);oh([R({type:Boolean})],Gi.prototype,"disabled",void 0);Gi=oh([z("wui-logo-select")],Gi);const M5=oe`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var ah=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Ki=class extends ce{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return F`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?F`<wui-image src=${this.imageSrc}></wui-image>`:F`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Ki.styles=[ge,et,M5];ah([R()],Ki.prototype,"imageSrc",void 0);ah([R({type:Boolean})],Ki.prototype,"disabled",void 0);Ki=ah([z("wui-network-button")],Ki);const U5=oe`
  :host {
    position: relative;
    display: block;
  }
`;var y1=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let yo=class extends ce{constructor(){super(...arguments),this.length=6,this.numerics=[],this.valueArr=Array.from({length:this.length}).map(()=>""),this.handleKeyDown=(e,r)=>{const n=e.target,s=this.getInputElement(n),i=["ArrowLeft","ArrowRight","Shift","Delete"];if(!s)return;i.includes(e.key)&&e.preventDefault();const o=s.selectionStart;switch(e.key){case"ArrowLeft":o&&s.setSelectionRange(o+1,o+1),this.focusInputField("prev",r);break;case"ArrowRight":this.focusInputField("next",r);break;case"Shift":this.focusInputField("next",r);break;case"Delete":s.value===""?this.focusInputField("prev",r):(s.value="",this.valueArr[r]="");break;case"Backspace":s.value===""?this.focusInputField("prev",r):(s.value="",this.valueArr[r]="");break}},this.focusInputField=(e,r)=>{if(e==="next"){const n=r+1,s=this.numerics[n<this.length?n:r],i=s?this.getInputElement(s):void 0;i&&i.focus()}if(e==="prev"){const n=r-1,s=this.numerics[n>-1?n:r],i=s?this.getInputElement(s):void 0;i&&i.focus()}}}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e))}render(){return F`
      <wui-flex gap="xxs">
        ${Array.from({length:this.length}).map((e,r)=>F`
            <wui-input-numeric
              @input=${n=>this.handleInput(n,r)}
              @keydown=${n=>this.handleKeyDown(n,r)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(e,r){const n=e.target,s=this.getInputElement(n);if(s){const i=s.value;e.inputType==="insertFromPaste"?this.handlePaste(s,i,r):Fe.isNumber(i)&&e.data?(s.value=e.data,this.valueArr[r]=e.data,this.focusInputField("next",r)):(s.value="",this.valueArr[r]="")}this.dispatchInputChangeEvent()}handlePaste(e,r,n){const s=r[0];if(s&&Fe.isNumber(s)){e.value=s,this.valueArr[n]=s;const o=r.substring(1);if(n+1<this.length&&o.length){const a=this.numerics[n+1],c=a?this.getInputElement(a):void 0;c&&this.handlePaste(c,o,n+1)}else this.focusInputField("next",n)}else e.value="",this.valueArr[n]=""}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.valueArr.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};yo.styles=[ge,U5];y1([R({type:Number})],yo.prototype,"length",void 0);yo=y1([z("wui-otp")],yo);var ta={},B5=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},v1={},Gt={};let ch;const j5=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Gt.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};Gt.getSymbolTotalCodewords=function(e){return j5[e]};Gt.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};Gt.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');ch=e};Gt.isKanjiModeEnabled=function(){return typeof ch<"u"};Gt.toSJIS=function(e){return ch(e)};var il={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+r)}}t.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},t.from=function(n,s){if(t.isValid(n))return n;try{return e(n)}catch{return s}}})(il);function x1(){this.buffer=[],this.length=0}x1.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let r=0;r<e;r++)this.putBit((t>>>e-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var L5=x1;function ra(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}ra.prototype.set=function(t,e,r,n){const s=t*this.size+e;this.data[s]=r,n&&(this.reservedBit[s]=!0)};ra.prototype.get=function(t,e){return this.data[t*this.size+e]};ra.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r};ra.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var F5=ra,_1={};(function(t){const e=Gt.getSymbolSize;t.getRowColCoords=function(n){if(n===1)return[];const s=Math.floor(n/7)+2,i=e(n),o=i===145?26:Math.ceil((i-13)/(2*s-2))*2,a=[i-7];for(let c=1;c<s-1;c++)a[c]=a[c-1]-o;return a.push(6),a.reverse()},t.getPositions=function(n){const s=[],i=t.getRowColCoords(n),o=i.length;for(let a=0;a<o;a++)for(let c=0;c<o;c++)a===0&&c===0||a===0&&c===o-1||a===o-1&&c===0||s.push([i[a],i[c]]);return s}})(_1);var C1={};const W5=Gt.getSymbolSize,Sf=7;C1.getPositions=function(e){const r=W5(e);return[[0,0],[r-Sf,0],[0,r-Sf]]};var E1={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(s){return s!=null&&s!==""&&!isNaN(s)&&s>=0&&s<=7},t.from=function(s){return t.isValid(s)?parseInt(s,10):void 0},t.getPenaltyN1=function(s){const i=s.size;let o=0,a=0,c=0,l=null,u=null;for(let f=0;f<i;f++){a=c=0,l=u=null;for(let m=0;m<i;m++){let g=s.get(f,m);g===l?a++:(a>=5&&(o+=e.N1+(a-5)),l=g,a=1),g=s.get(m,f),g===u?c++:(c>=5&&(o+=e.N1+(c-5)),u=g,c=1)}a>=5&&(o+=e.N1+(a-5)),c>=5&&(o+=e.N1+(c-5))}return o},t.getPenaltyN2=function(s){const i=s.size;let o=0;for(let a=0;a<i-1;a++)for(let c=0;c<i-1;c++){const l=s.get(a,c)+s.get(a,c+1)+s.get(a+1,c)+s.get(a+1,c+1);(l===4||l===0)&&o++}return o*e.N2},t.getPenaltyN3=function(s){const i=s.size;let o=0,a=0,c=0;for(let l=0;l<i;l++){a=c=0;for(let u=0;u<i;u++)a=a<<1&2047|s.get(l,u),u>=10&&(a===1488||a===93)&&o++,c=c<<1&2047|s.get(u,l),u>=10&&(c===1488||c===93)&&o++}return o*e.N3},t.getPenaltyN4=function(s){let i=0;const o=s.data.length;for(let c=0;c<o;c++)i+=s.data[c];return Math.abs(Math.ceil(i*100/o/5)-10)*e.N4};function r(n,s,i){switch(n){case t.Patterns.PATTERN000:return(s+i)%2===0;case t.Patterns.PATTERN001:return s%2===0;case t.Patterns.PATTERN010:return i%3===0;case t.Patterns.PATTERN011:return(s+i)%3===0;case t.Patterns.PATTERN100:return(Math.floor(s/2)+Math.floor(i/3))%2===0;case t.Patterns.PATTERN101:return s*i%2+s*i%3===0;case t.Patterns.PATTERN110:return(s*i%2+s*i%3)%2===0;case t.Patterns.PATTERN111:return(s*i%3+(s+i)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}t.applyMask=function(s,i){const o=i.size;for(let a=0;a<o;a++)for(let c=0;c<o;c++)i.isReserved(c,a)||i.xor(c,a,r(s,c,a))},t.getBestMask=function(s,i){const o=Object.keys(t.Patterns).length;let a=0,c=1/0;for(let l=0;l<o;l++){i(l),t.applyMask(l,s);const u=t.getPenaltyN1(s)+t.getPenaltyN2(s)+t.getPenaltyN3(s)+t.getPenaltyN4(s);t.applyMask(l,s),u<c&&(c=u,a=l)}return a}})(E1);var sl={};const ln=il,wa=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],ba=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];sl.getBlocksCount=function(e,r){switch(r){case ln.L:return wa[(e-1)*4+0];case ln.M:return wa[(e-1)*4+1];case ln.Q:return wa[(e-1)*4+2];case ln.H:return wa[(e-1)*4+3];default:return}};sl.getTotalCodewordsCount=function(e,r){switch(r){case ln.L:return ba[(e-1)*4+0];case ln.M:return ba[(e-1)*4+1];case ln.Q:return ba[(e-1)*4+2];case ln.H:return ba[(e-1)*4+3];default:return}};var S1={},ol={};const Us=new Uint8Array(512),Qa=new Uint8Array(256);(function(){let e=1;for(let r=0;r<255;r++)Us[r]=e,Qa[e]=r,e<<=1,e&256&&(e^=285);for(let r=255;r<512;r++)Us[r]=Us[r-255]})();ol.log=function(e){if(e<1)throw new Error("log("+e+")");return Qa[e]};ol.exp=function(e){return Us[e]};ol.mul=function(e,r){return e===0||r===0?0:Us[Qa[e]+Qa[r]]};(function(t){const e=ol;t.mul=function(n,s){const i=new Uint8Array(n.length+s.length-1);for(let o=0;o<n.length;o++)for(let a=0;a<s.length;a++)i[o+a]^=e.mul(n[o],s[a]);return i},t.mod=function(n,s){let i=new Uint8Array(n);for(;i.length-s.length>=0;){const o=i[0];for(let c=0;c<s.length;c++)i[c]^=e.mul(s[c],o);let a=0;for(;a<i.length&&i[a]===0;)a++;i=i.slice(a)}return i},t.generateECPolynomial=function(n){let s=new Uint8Array([1]);for(let i=0;i<n;i++)s=t.mul(s,new Uint8Array([1,e.exp(i)]));return s}})(S1);const A1=S1;function lh(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}lh.prototype.initialize=function(e){this.degree=e,this.genPoly=A1.generateECPolynomial(this.degree)};lh.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(e.length+this.degree);r.set(e);const n=A1.mod(r,this.genPoly),s=this.degree-n.length;if(s>0){const i=new Uint8Array(this.degree);return i.set(n,s),i}return n};var z5=lh,$1={},In={},uh={};uh.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var kr={};const T1="[0-9]+",H5="[A-Z $%*+\\-./:]+";let vo="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";vo=vo.replace(/u/g,"\\u");const q5="(?:(?![A-Z0-9 $%*+\\-./:]|"+vo+`)(?:.|[\r
]))+`;kr.KANJI=new RegExp(vo,"g");kr.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");kr.BYTE=new RegExp(q5,"g");kr.NUMERIC=new RegExp(T1,"g");kr.ALPHANUMERIC=new RegExp(H5,"g");const V5=new RegExp("^"+vo+"$"),Z5=new RegExp("^"+T1+"$"),G5=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");kr.testKanji=function(e){return V5.test(e)};kr.testNumeric=function(e){return Z5.test(e)};kr.testAlphanumeric=function(e){return G5.test(e)};(function(t){const e=uh,r=kr;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(i,o){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?i.ccBits[0]:o<27?i.ccBits[1]:i.ccBits[2]},t.getBestModeForData=function(i){return r.testNumeric(i)?t.NUMERIC:r.testAlphanumeric(i)?t.ALPHANUMERIC:r.testKanji(i)?t.KANJI:t.BYTE},t.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},t.isValid=function(i){return i&&i.bit&&i.ccBits};function n(s){if(typeof s!="string")throw new Error("Param is not a string");switch(s.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+s)}}t.from=function(i,o){if(t.isValid(i))return i;try{return n(i)}catch{return o}}})(In);(function(t){const e=Gt,r=sl,n=il,s=In,i=uh,o=7973,a=e.getBCHDigit(o);function c(m,g,w){for(let _=1;_<=40;_++)if(g<=t.getCapacity(_,w,m))return _}function l(m,g){return s.getCharCountIndicator(m,g)+4}function u(m,g){let w=0;return m.forEach(function(_){const v=l(_.mode,g);w+=v+_.getBitsLength()}),w}function f(m,g){for(let w=1;w<=40;w++)if(u(m,w)<=t.getCapacity(w,g,s.MIXED))return w}t.from=function(g,w){return i.isValid(g)?parseInt(g,10):w},t.getCapacity=function(g,w,_){if(!i.isValid(g))throw new Error("Invalid QR Code version");typeof _>"u"&&(_=s.BYTE);const v=e.getSymbolTotalCodewords(g),T=r.getTotalCodewordsCount(g,w),b=(v-T)*8;if(_===s.MIXED)return b;const E=b-l(_,g);switch(_){case s.NUMERIC:return Math.floor(E/10*3);case s.ALPHANUMERIC:return Math.floor(E/11*2);case s.KANJI:return Math.floor(E/13);case s.BYTE:default:return Math.floor(E/8)}},t.getBestVersionForData=function(g,w){let _;const v=n.from(w,n.M);if(Array.isArray(g)){if(g.length>1)return f(g,v);if(g.length===0)return 1;_=g[0]}else _=g;return c(_.mode,_.getLength(),v)},t.getEncodedBits=function(g){if(!i.isValid(g)||g<7)throw new Error("Invalid QR Code version");let w=g<<12;for(;e.getBCHDigit(w)-a>=0;)w^=o<<e.getBCHDigit(w)-a;return g<<12|w}})($1);var I1={};const Du=Gt,R1=1335,K5=21522,Af=Du.getBCHDigit(R1);I1.getEncodedBits=function(e,r){const n=e.bit<<3|r;let s=n<<10;for(;Du.getBCHDigit(s)-Af>=0;)s^=R1<<Du.getBCHDigit(s)-Af;return(n<<10|s)^K5};var O1={};const Q5=In;function Qi(t){this.mode=Q5.NUMERIC,this.data=t.toString()}Qi.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Qi.prototype.getLength=function(){return this.data.length};Qi.prototype.getBitsLength=function(){return Qi.getBitsLength(this.data.length)};Qi.prototype.write=function(e){let r,n,s;for(r=0;r+3<=this.data.length;r+=3)n=this.data.substr(r,3),s=parseInt(n,10),e.put(s,10);const i=this.data.length-r;i>0&&(n=this.data.substr(r),s=parseInt(n,10),e.put(s,i*3+1))};var Y5=Qi;const J5=In,zl=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Yi(t){this.mode=J5.ALPHANUMERIC,this.data=t}Yi.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Yi.prototype.getLength=function(){return this.data.length};Yi.prototype.getBitsLength=function(){return Yi.getBitsLength(this.data.length)};Yi.prototype.write=function(e){let r;for(r=0;r+2<=this.data.length;r+=2){let n=zl.indexOf(this.data[r])*45;n+=zl.indexOf(this.data[r+1]),e.put(n,11)}this.data.length%2&&e.put(zl.indexOf(this.data[r]),6)};var X5=Yi,e6=function(e){for(var r=[],n=e.length,s=0;s<n;s++){var i=e.charCodeAt(s);if(i>=55296&&i<=56319&&n>s+1){var o=e.charCodeAt(s+1);o>=56320&&o<=57343&&(i=(i-55296)*1024+o-56320+65536,s+=1)}if(i<128){r.push(i);continue}if(i<2048){r.push(i>>6|192),r.push(i&63|128);continue}if(i<55296||i>=57344&&i<65536){r.push(i>>12|224),r.push(i>>6&63|128),r.push(i&63|128);continue}if(i>=65536&&i<=1114111){r.push(i>>18|240),r.push(i>>12&63|128),r.push(i>>6&63|128),r.push(i&63|128);continue}r.push(239,191,189)}return new Uint8Array(r).buffer};const t6=e6,r6=In;function Ji(t){this.mode=r6.BYTE,typeof t=="string"&&(t=t6(t)),this.data=new Uint8Array(t)}Ji.getBitsLength=function(e){return e*8};Ji.prototype.getLength=function(){return this.data.length};Ji.prototype.getBitsLength=function(){return Ji.getBitsLength(this.data.length)};Ji.prototype.write=function(t){for(let e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)};var n6=Ji;const i6=In,s6=Gt;function Xi(t){this.mode=i6.KANJI,this.data=t}Xi.getBitsLength=function(e){return e*13};Xi.prototype.getLength=function(){return this.data.length};Xi.prototype.getBitsLength=function(){return Xi.getBitsLength(this.data.length)};Xi.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let r=s6.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),t.put(r,13)}};var o6=Xi,P1={exports:{}};(function(t){var e={single_source_shortest_paths:function(r,n,s){var i={},o={};o[n]=0;var a=e.PriorityQueue.make();a.push(n,0);for(var c,l,u,f,m,g,w,_,v;!a.empty();){c=a.pop(),l=c.value,f=c.cost,m=r[l]||{};for(u in m)m.hasOwnProperty(u)&&(g=m[u],w=f+g,_=o[u],v=typeof o[u]>"u",(v||_>w)&&(o[u]=w,a.push(u,w),i[u]=l))}if(typeof s<"u"&&typeof o[s]>"u"){var T=["Could not find a path from ",n," to ",s,"."].join("");throw new Error(T)}return i},extract_shortest_path_from_predecessor_list:function(r,n){for(var s=[],i=n;i;)s.push(i),r[i],i=r[i];return s.reverse(),s},find_path:function(r,n,s){var i=e.single_source_shortest_paths(r,n,s);return e.extract_shortest_path_from_predecessor_list(i,s)},PriorityQueue:{make:function(r){var n=e.PriorityQueue,s={},i;r=r||{};for(i in n)n.hasOwnProperty(i)&&(s[i]=n[i]);return s.queue=[],s.sorter=r.sorter||n.default_sorter,s},default_sorter:function(r,n){return r.cost-n.cost},push:function(r,n){var s={value:r,cost:n};this.queue.push(s),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(P1);var a6=P1.exports;(function(t){const e=In,r=Y5,n=X5,s=n6,i=o6,o=kr,a=Gt,c=a6;function l(T){return unescape(encodeURIComponent(T)).length}function u(T,b,E){const x=[];let C;for(;(C=T.exec(E))!==null;)x.push({data:C[0],index:C.index,mode:b,length:C[0].length});return x}function f(T){const b=u(o.NUMERIC,e.NUMERIC,T),E=u(o.ALPHANUMERIC,e.ALPHANUMERIC,T);let x,C;return a.isKanjiModeEnabled()?(x=u(o.BYTE,e.BYTE,T),C=u(o.KANJI,e.KANJI,T)):(x=u(o.BYTE_KANJI,e.BYTE,T),C=[]),b.concat(E,x,C).sort(function(h,S){return h.index-S.index}).map(function(h){return{data:h.data,mode:h.mode,length:h.length}})}function m(T,b){switch(b){case e.NUMERIC:return r.getBitsLength(T);case e.ALPHANUMERIC:return n.getBitsLength(T);case e.KANJI:return i.getBitsLength(T);case e.BYTE:return s.getBitsLength(T)}}function g(T){return T.reduce(function(b,E){const x=b.length-1>=0?b[b.length-1]:null;return x&&x.mode===E.mode?(b[b.length-1].data+=E.data,b):(b.push(E),b)},[])}function w(T){const b=[];for(let E=0;E<T.length;E++){const x=T[E];switch(x.mode){case e.NUMERIC:b.push([x,{data:x.data,mode:e.ALPHANUMERIC,length:x.length},{data:x.data,mode:e.BYTE,length:x.length}]);break;case e.ALPHANUMERIC:b.push([x,{data:x.data,mode:e.BYTE,length:x.length}]);break;case e.KANJI:b.push([x,{data:x.data,mode:e.BYTE,length:l(x.data)}]);break;case e.BYTE:b.push([{data:x.data,mode:e.BYTE,length:l(x.data)}])}}return b}function _(T,b){const E={},x={start:{}};let C=["start"];for(let A=0;A<T.length;A++){const h=T[A],S=[];for(let P=0;P<h.length;P++){const D=h[P],k=""+A+P;S.push(k),E[k]={node:D,lastCount:0},x[k]={};for(let K=0;K<C.length;K++){const Y=C[K];E[Y]&&E[Y].node.mode===D.mode?(x[Y][k]=m(E[Y].lastCount+D.length,D.mode)-m(E[Y].lastCount,D.mode),E[Y].lastCount+=D.length):(E[Y]&&(E[Y].lastCount=D.length),x[Y][k]=m(D.length,D.mode)+4+e.getCharCountIndicator(D.mode,b))}}C=S}for(let A=0;A<C.length;A++)x[C[A]].end=0;return{map:x,table:E}}function v(T,b){let E;const x=e.getBestModeForData(T);if(E=e.from(b,x),E!==e.BYTE&&E.bit<x.bit)throw new Error('"'+T+'" cannot be encoded with mode '+e.toString(E)+`.
 Suggested mode is: `+e.toString(x));switch(E===e.KANJI&&!a.isKanjiModeEnabled()&&(E=e.BYTE),E){case e.NUMERIC:return new r(T);case e.ALPHANUMERIC:return new n(T);case e.KANJI:return new i(T);case e.BYTE:return new s(T)}}t.fromArray=function(b){return b.reduce(function(E,x){return typeof x=="string"?E.push(v(x,null)):x.data&&E.push(v(x.data,x.mode)),E},[])},t.fromString=function(b,E){const x=f(b,a.isKanjiModeEnabled()),C=w(x),A=_(C,E),h=c.find_path(A.map,"start","end"),S=[];for(let P=1;P<h.length-1;P++)S.push(A.table[h[P]].node);return t.fromArray(g(S))},t.rawSplit=function(b){return t.fromArray(f(b,a.isKanjiModeEnabled()))}})(O1);const al=Gt,Hl=il,c6=L5,l6=F5,u6=_1,d6=C1,Nu=E1,ku=sl,h6=z5,Ya=$1,f6=I1,p6=In,ql=O1;function g6(t,e){const r=t.size,n=d6.getPositions(e);for(let s=0;s<n.length;s++){const i=n[s][0],o=n[s][1];for(let a=-1;a<=7;a++)if(!(i+a<=-1||r<=i+a))for(let c=-1;c<=7;c++)o+c<=-1||r<=o+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?t.set(i+a,o+c,!0,!0):t.set(i+a,o+c,!1,!0))}}function m6(t){const e=t.size;for(let r=8;r<e-8;r++){const n=r%2===0;t.set(r,6,n,!0),t.set(6,r,n,!0)}}function w6(t,e){const r=u6.getPositions(e);for(let n=0;n<r.length;n++){const s=r[n][0],i=r[n][1];for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)o===-2||o===2||a===-2||a===2||o===0&&a===0?t.set(s+o,i+a,!0,!0):t.set(s+o,i+a,!1,!0)}}function b6(t,e){const r=t.size,n=Ya.getEncodedBits(e);let s,i,o;for(let a=0;a<18;a++)s=Math.floor(a/3),i=a%3+r-8-3,o=(n>>a&1)===1,t.set(s,i,o,!0),t.set(i,s,o,!0)}function Vl(t,e,r){const n=t.size,s=f6.getEncodedBits(e,r);let i,o;for(i=0;i<15;i++)o=(s>>i&1)===1,i<6?t.set(i,8,o,!0):i<8?t.set(i+1,8,o,!0):t.set(n-15+i,8,o,!0),i<8?t.set(8,n-i-1,o,!0):i<9?t.set(8,15-i-1+1,o,!0):t.set(8,15-i-1,o,!0);t.set(n-8,8,1,!0)}function y6(t,e){const r=t.size;let n=-1,s=r-1,i=7,o=0;for(let a=r-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!t.isReserved(s,a-c)){let l=!1;o<e.length&&(l=(e[o]>>>i&1)===1),t.set(s,a-c,l),i--,i===-1&&(o++,i=7)}if(s+=n,s<0||r<=s){s-=n,n=-n;break}}}function v6(t,e,r){const n=new c6;r.forEach(function(c){n.put(c.mode.bit,4),n.put(c.getLength(),p6.getCharCountIndicator(c.mode,t)),c.write(n)});const s=al.getSymbolTotalCodewords(t),i=ku.getTotalCodewordsCount(t,e),o=(s-i)*8;for(n.getLengthInBits()+4<=o&&n.put(0,4);n.getLengthInBits()%8!==0;)n.putBit(0);const a=(o-n.getLengthInBits())/8;for(let c=0;c<a;c++)n.put(c%2?17:236,8);return x6(n,t,e)}function x6(t,e,r){const n=al.getSymbolTotalCodewords(e),s=ku.getTotalCodewordsCount(e,r),i=n-s,o=ku.getBlocksCount(e,r),a=n%o,c=o-a,l=Math.floor(n/o),u=Math.floor(i/o),f=u+1,m=l-u,g=new h6(m);let w=0;const _=new Array(o),v=new Array(o);let T=0;const b=new Uint8Array(t.buffer);for(let h=0;h<o;h++){const S=h<c?u:f;_[h]=b.slice(w,w+S),v[h]=g.encode(_[h]),w+=S,T=Math.max(T,S)}const E=new Uint8Array(n);let x=0,C,A;for(C=0;C<T;C++)for(A=0;A<o;A++)C<_[A].length&&(E[x++]=_[A][C]);for(C=0;C<m;C++)for(A=0;A<o;A++)E[x++]=v[A][C];return E}function _6(t,e,r,n){let s;if(Array.isArray(t))s=ql.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){const u=ql.rawSplit(t);l=Ya.getBestVersionForData(u,r)}s=ql.fromString(t,l||40)}else throw new Error("Invalid data");const i=Ya.getBestVersionForData(s,r);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=i;else if(e<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);const o=v6(e,r,s),a=al.getSymbolSize(e),c=new l6(a);return g6(c,e),m6(c),w6(c,e),Vl(c,r,0),e>=7&&b6(c,e),y6(c,o),isNaN(n)&&(n=Nu.getBestMask(c,Vl.bind(null,c,r))),Nu.applyMask(n,c),Vl(c,r,n),{modules:c,version:e,errorCorrectionLevel:r,maskPattern:n,segments:s}}v1.create=function(e,r){if(typeof e>"u"||e==="")throw new Error("No input text");let n=Hl.M,s,i;return typeof r<"u"&&(n=Hl.from(r.errorCorrectionLevel,Hl.M),s=Ya.from(r.version),i=Nu.from(r.maskPattern),r.toSJISFunc&&al.setToSJISFunction(r.toSJISFunc)),_6(e,s,n,i)};var D1={},dh={};(function(t){function e(r){if(typeof r=="number"&&(r=r.toString()),typeof r!="string")throw new Error("Color should be defined as hex string");let n=r.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+r);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(i){return[i,i]}))),n.length===6&&n.push("F","F");const s=parseInt(n.join(""),16);return{r:s>>24&255,g:s>>16&255,b:s>>8&255,a:s&255,hex:"#"+n.slice(0,6).join("")}}t.getOptions=function(n){n||(n={}),n.color||(n.color={});const s=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,i=n.width&&n.width>=21?n.width:void 0,o=n.scale||4;return{width:i,scale:i?4:o,margin:s,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},t.getScale=function(n,s){return s.width&&s.width>=n+s.margin*2?s.width/(n+s.margin*2):s.scale},t.getImageWidth=function(n,s){const i=t.getScale(n,s);return Math.floor((n+s.margin*2)*i)},t.qrToImageData=function(n,s,i){const o=s.modules.size,a=s.modules.data,c=t.getScale(o,i),l=Math.floor((o+i.margin*2)*c),u=i.margin*c,f=[i.color.light,i.color.dark];for(let m=0;m<l;m++)for(let g=0;g<l;g++){let w=(m*l+g)*4,_=i.color.light;if(m>=u&&g>=u&&m<l-u&&g<l-u){const v=Math.floor((m-u)/c),T=Math.floor((g-u)/c);_=f[a[v*o+T]?1:0]}n[w++]=_.r,n[w++]=_.g,n[w++]=_.b,n[w]=_.a}}})(dh);(function(t){const e=dh;function r(s,i,o){s.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=o,i.width=o,i.style.height=o+"px",i.style.width=o+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(i,o,a){let c=a,l=o;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),o||(l=n()),c=e.getOptions(c);const u=e.getImageWidth(i.modules.size,c),f=l.getContext("2d"),m=f.createImageData(u,u);return e.qrToImageData(m.data,i,c),r(f,l,u),f.putImageData(m,0,0),l},t.renderToDataURL=function(i,o,a){let c=a;typeof c>"u"&&(!o||!o.getContext)&&(c=o,o=void 0),c||(c={});const l=t.render(i,o,c),u=c.type||"image/png",f=c.rendererOpts||{};return l.toDataURL(u,f.quality)}})(D1);var N1={};const C6=dh;function $f(t,e){const r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function Zl(t,e,r){let n=t+e;return typeof r<"u"&&(n+=" "+r),n}function E6(t,e,r){let n="",s=0,i=!1,o=0;for(let a=0;a<t.length;a++){const c=Math.floor(a%e),l=Math.floor(a/e);!c&&!i&&(i=!0),t[a]?(o++,a>0&&c>0&&t[a-1]||(n+=i?Zl("M",c+r,.5+l+r):Zl("m",s,0),s=0,i=!1),c+1<e&&t[a+1]||(n+=Zl("h",o),o=0)):s++}return n}N1.render=function(e,r,n){const s=C6.getOptions(r),i=e.modules.size,o=e.modules.data,a=i+s.margin*2,c=s.color.light.a?"<path "+$f(s.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+$f(s.color.dark,"stroke")+' d="'+E6(o,i,s.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(s.width?'width="'+s.width+'" height="'+s.width+'" ':"")+u+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof n=="function"&&n(null,m),m};const S6=B5,Mu=v1,k1=D1,A6=N1;function hh(t,e,r,n,s){const i=[].slice.call(arguments,1),o=i.length,a=typeof i[o-1]=="function";if(!a&&!S6())throw new Error("Callback required as last argument");if(a){if(o<2)throw new Error("Too few arguments provided");o===2?(s=r,r=e,e=n=void 0):o===3&&(e.getContext&&typeof s>"u"?(s=n,n=void 0):(s=n,n=r,r=e,e=void 0))}else{if(o<1)throw new Error("Too few arguments provided");return o===1?(r=e,e=n=void 0):o===2&&!e.getContext&&(n=r,r=e,e=void 0),new Promise(function(c,l){try{const u=Mu.create(r,n);c(t(u,e,n))}catch(u){l(u)}})}try{const c=Mu.create(r,n);s(null,t(c,e,n))}catch(c){s(c)}}ta.create=Mu.create;ta.toCanvas=hh.bind(null,k1.render);ta.toDataURL=hh.bind(null,k1.renderToDataURL);ta.toString=hh.bind(null,function(t,e,r){return A6.render(t,r)});const $6=.1,Tf=2.5,Br=7;function Gl(t,e,r){return t===e?!1:(t-e<0?e-t:t-e)<=r+$6}function T6(t,e){const r=Array.prototype.slice.call(ta.create(t,{errorCorrectionLevel:e}).modules.data,0),n=Math.sqrt(r.length);return r.reduce((s,i,o)=>(o%n===0?s.push([i]):s[s.length-1].push(i))&&s,[])}const I6={generate(t,e,r){const n="#141414",s="transparent",o=[],a=T6(t,"Q"),c=e/a.length,l=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];l.forEach(({x:_,y:v})=>{const T=(a.length-Br)*c*_,b=(a.length-Br)*c*v,E=.45;for(let x=0;x<l.length;x+=1){const C=c*(Br-x*2);o.push(G`
            <rect
              fill=${x===2?n:s}
              width=${x===0?C-5:C}
              rx= ${x===0?(C-5)*E:C*E}
              ry= ${x===0?(C-5)*E:C*E}
              stroke=${n}
              stroke-width=${x===0?5:0}
              height=${x===0?C-5:C}
              x= ${x===0?b+c*x+5/2:b+c*x}
              y= ${x===0?T+c*x+5/2:T+c*x}
            />
          `)}});const u=Math.floor((r+25)/c),f=a.length/2-u/2,m=a.length/2+u/2-1,g=[];a.forEach((_,v)=>{_.forEach((T,b)=>{if(a[v][b]&&!(v<Br&&b<Br||v>a.length-(Br+1)&&b<Br||v<Br&&b>a.length-(Br+1))&&!(v>f&&v<m&&b>f&&b<m)){const E=v*c+c/2,x=b*c+c/2;g.push([E,x])}})});const w={};return g.forEach(([_,v])=>{w[_]?w[_]?.push(v):w[_]=[v]}),Object.entries(w).map(([_,v])=>{const T=v.filter(b=>v.every(E=>!Gl(b,E,c)));return[Number(_),T]}).forEach(([_,v])=>{v.forEach(T=>{o.push(G`<circle cx=${_} cy=${T} fill=${n} r=${c/Tf} />`)})}),Object.entries(w).filter(([_,v])=>v.length>1).map(([_,v])=>{const T=v.filter(b=>v.some(E=>Gl(b,E,c)));return[Number(_),T]}).map(([_,v])=>{v.sort((b,E)=>b<E?-1:1);const T=[];for(const b of v){const E=T.find(x=>x.some(C=>Gl(b,C,c)));E?E.push(b):T.push([b])}return[_,T.map(b=>[b[0],b[b.length-1]])]}).forEach(([_,v])=>{v.forEach(([T,b])=>{o.push(G`
              <line
                x1=${_}
                x2=${_}
                y1=${T}
                y2=${b}
                stroke=${n}
                stroke-width=${c/(Tf/2)}
                stroke-linecap="round"
              />
            `)})}),o}},R6=oe`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var ms=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let qr=class extends ce{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,F`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return G`
      <svg height=${e} width=${e}>
        ${I6.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?F`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:F`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};qr.styles=[ge,R6];ms([R()],qr.prototype,"uri",void 0);ms([R({type:Number})],qr.prototype,"size",void 0);ms([R()],qr.prototype,"theme",void 0);ms([R()],qr.prototype,"imageSrc",void 0);ms([R()],qr.prototype,"alt",void 0);qr=ms([z("wui-qr-code")],qr);const O6=oe`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var P6=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Ja=class extends ce{constructor(){super(...arguments),this.inputComponentRef=f1()}render(){return F`
      <wui-input-text
        ${p1(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const r=this.inputComponentRef.value?.inputElementRef.value;r&&(r.value="",r.focus(),r.dispatchEvent(new Event("input")))}};Ja.styles=[ge,O6];Ja=P6([z("wui-search-bar")],Ja);const D6=oe`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var na=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let bn=class extends ce{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return F`
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};bn.styles=[ge,D6];na([R()],bn.prototype,"backgroundColor",void 0);na([R()],bn.prototype,"iconColor",void 0);na([R()],bn.prototype,"icon",void 0);na([R()],bn.prototype,"message",void 0);bn=na([z("wui-snackbar")],bn);const N6=oe`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var Rn=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let hr=class extends ce{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,r)=>{const n=r===this.activeTab;return F`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(r)}
          data-active=${n}
        >
          <wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,r){const n=this.buttons[this.activeTab],s=this.buttons[e],i=n?.querySelector("wui-text"),o=s?.querySelector("wui-text"),a=s?.getBoundingClientRect(),c=o?.getBoundingClientRect();n&&i&&!r&&e!==this.activeTab&&(i.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),n.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),s&&a&&c&&o&&(e!==this.activeTab||r)&&(this.localTabWidth=`${Math.round(a.width+c.width)+6}px`,s.animate([{width:`${a.width+c.width}px`}],{duration:r?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:r?0:125,delay:r?0:200,fill:"forwards",easing:"ease"}))}};hr.styles=[ge,et,N6];Rn([R({type:Array})],hr.prototype,"tabs",void 0);Rn([R()],hr.prototype,"onTabChange",void 0);Rn([R({type:Array})],hr.prototype,"buttons",void 0);Rn([R({type:Boolean})],hr.prototype,"disabled",void 0);Rn([th()],hr.prototype,"activeTab",void 0);Rn([th()],hr.prototype,"localTabWidth",void 0);Rn([th()],hr.prototype,"isDense",void 0);hr=Rn([z("wui-tabs")],hr);const k6=oe`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var fh=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let es=class extends ce{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return F`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};es.styles=[ge,et,k6];fh([R()],es.prototype,"placement",void 0);fh([R()],es.prototype,"message",void 0);es=fh([z("wui-tooltip")],es);const M6=oe`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var cl=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let ri=class extends ce{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,F`${this.templateVisual()}`}templateVisual(){return this.imageSrc?F`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:F`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};ri.styles=[ge,M6];cl([R()],ri.prototype,"imageSrc",void 0);cl([R()],ri.prototype,"alt",void 0);cl([R({type:Boolean})],ri.prototype,"borderRadiusFull",void 0);ri=cl([z("wui-visual-thumbnail")],ri);const U6=oe`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var ll=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let ni=class extends ce{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return F`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};ni.styles=[ge,et,U6];ll([R()],ni.prototype,"label",void 0);ll([R()],ni.prototype,"description",void 0);ll([R()],ni.prototype,"icon",void 0);ni=ll([z("wui-notice-card")],ni);const B6=oe`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgb(42, 42, 42), transparent);
    border-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var ph=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};const Kl=100;let ts=class extends ce{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}firstUpdated(){setTimeout(()=>{const e=this.shadowRoot?.querySelector(".heightContent");if(e){this.scrollElement=e;const r=e?.scrollHeight;r&&r>Kl&&(this.enableAccordion=!0,this.scrollHeightElement=r,this.requestUpdate())}},0)}render(){return F`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){const e=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${Kl}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${Kl}px`}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?F` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};ts.styles=[ge,et,B6];ph([R()],ts.prototype,"textTitle",void 0);ph([R()],ts.prototype,"overflowedContent",void 0);ts=ph([z("wui-list-accordion")],ts);const j6=oe`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var ul=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let ii=class extends ce{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return F`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?F`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?F` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:F`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};ii.styles=[ge,et,j6];ul([R()],ii.prototype,"imageSrc",void 0);ul([R()],ii.prototype,"textTitle",void 0);ul([R()],ii.prototype,"textValue",void 0);ii=ul([z("wui-list-content")],ii);const L6=oe`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var ia=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let yn=class extends ce{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress=""}render(){return F`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.receiverAddress}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?F`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:F`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};yn.styles=[ge,et,L6];ia([R()],yn.prototype,"amount",void 0);ia([R()],yn.prototype,"networkCurreny",void 0);ia([R()],yn.prototype,"networkImageUrl",void 0);ia([R()],yn.prototype,"receiverAddress",void 0);yn=ia([z("wui-list-wallet-transaction")],yn);const F6=oe`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var tr=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Pt=class extends ce{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Fe.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Fe.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Fe.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Fe.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Fe.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Fe.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Fe.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Fe.getSpacingStyles(this.margin,3)};
    `,F`<slot></slot>`}};Pt.styles=[ge,F6];tr([R()],Pt.prototype,"gridTemplateRows",void 0);tr([R()],Pt.prototype,"gridTemplateColumns",void 0);tr([R()],Pt.prototype,"justifyItems",void 0);tr([R()],Pt.prototype,"alignItems",void 0);tr([R()],Pt.prototype,"justifyContent",void 0);tr([R()],Pt.prototype,"alignContent",void 0);tr([R()],Pt.prototype,"columnGap",void 0);tr([R()],Pt.prototype,"rowGap",void 0);tr([R()],Pt.prototype,"gap",void 0);tr([R()],Pt.prototype,"padding",void 0);tr([R()],Pt.prototype,"margin",void 0);Pt=tr([z("wui-grid")],Pt);const W6=oe`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var M1=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let xo=class extends ce{constructor(){super(...arguments),this.text=""}render(){return F`${this.template()}`}template(){return this.text?F`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};xo.styles=[ge,W6];M1([R()],xo.prototype,"text",void 0);xo=M1([z("wui-separator")],xo);var U1={exports:{}};(function(t,e){(function(r,n){t.exports=n()})(hd,function(){var r=1e3,n=6e4,s=36e5,i="millisecond",o="second",a="minute",c="hour",l="day",u="week",f="month",m="quarter",g="year",w="date",_="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,T=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(W){var j=["th","st","nd","rd"],M=W%100;return"["+W+(j[(M-20)%10]||j[M]||j[0])+"]"}},E=function(W,j,M){var U=String(W);return!U||U.length>=j?W:""+Array(j+1-U.length).join(M)+W},x={s:E,z:function(W){var j=-W.utcOffset(),M=Math.abs(j),U=Math.floor(M/60),L=M%60;return(j<=0?"+":"-")+E(U,2,"0")+":"+E(L,2,"0")},m:function W(j,M){if(j.date()<M.date())return-W(M,j);var U=12*(M.year()-j.year())+(M.month()-j.month()),L=j.clone().add(U,f),J=M-L<0,te=j.clone().add(U+(J?-1:1),f);return+(-(U+(M-L)/(J?L-te:te-L))||0)},a:function(W){return W<0?Math.ceil(W)||0:Math.floor(W)},p:function(W){return{M:f,y:g,w:u,d:l,D:w,h:c,m:a,s:o,ms:i,Q:m}[W]||String(W||"").toLowerCase().replace(/s$/,"")},u:function(W){return W===void 0}},C="en",A={};A[C]=b;var h="$isDayjsObject",S=function(W){return W instanceof K||!(!W||!W[h])},P=function W(j,M,U){var L;if(!j)return C;if(typeof j=="string"){var J=j.toLowerCase();A[J]&&(L=J),M&&(A[J]=M,L=J);var te=j.split("-");if(!L&&te.length>1)return W(te[0])}else{var X=j.name;A[X]=j,L=X}return!U&&L&&(C=L),L||!U&&C},D=function(W,j){if(S(W))return W.clone();var M=typeof j=="object"?j:{};return M.date=W,M.args=arguments,new K(M)},k=x;k.l=P,k.i=S,k.w=function(W,j){return D(W,{locale:j.$L,utc:j.$u,x:j.$x,$offset:j.$offset})};var K=function(){function W(M){this.$L=P(M.locale,null,!0),this.parse(M),this.$x=this.$x||M.x||{},this[h]=!0}var j=W.prototype;return j.parse=function(M){this.$d=function(U){var L=U.date,J=U.utc;if(L===null)return new Date(NaN);if(k.u(L))return new Date;if(L instanceof Date)return new Date(L);if(typeof L=="string"&&!/Z$/i.test(L)){var te=L.match(v);if(te){var X=te[2]-1||0,ie=(te[7]||"0").substring(0,3);return J?new Date(Date.UTC(te[1],X,te[3]||1,te[4]||0,te[5]||0,te[6]||0,ie)):new Date(te[1],X,te[3]||1,te[4]||0,te[5]||0,te[6]||0,ie)}}return new Date(L)}(M),this.init()},j.init=function(){var M=this.$d;this.$y=M.getFullYear(),this.$M=M.getMonth(),this.$D=M.getDate(),this.$W=M.getDay(),this.$H=M.getHours(),this.$m=M.getMinutes(),this.$s=M.getSeconds(),this.$ms=M.getMilliseconds()},j.$utils=function(){return k},j.isValid=function(){return this.$d.toString()!==_},j.isSame=function(M,U){var L=D(M);return this.startOf(U)<=L&&L<=this.endOf(U)},j.isAfter=function(M,U){return D(M)<this.startOf(U)},j.isBefore=function(M,U){return this.endOf(U)<D(M)},j.$g=function(M,U,L){return k.u(M)?this[U]:this.set(L,M)},j.unix=function(){return Math.floor(this.valueOf()/1e3)},j.valueOf=function(){return this.$d.getTime()},j.startOf=function(M,U){var L=this,J=!!k.u(U)||U,te=k.p(M),X=function(Se,me){var Ie=k.w(L.$u?Date.UTC(L.$y,me,Se):new Date(L.$y,me,Se),L);return J?Ie:Ie.endOf(l)},ie=function(Se,me){return k.w(L.toDate()[Se].apply(L.toDate("s"),(J?[0,0,0,0]:[23,59,59,999]).slice(me)),L)},V=this.$W,se=this.$M,he=this.$D,_e="set"+(this.$u?"UTC":"");switch(te){case g:return J?X(1,0):X(31,11);case f:return J?X(1,se):X(0,se+1);case u:var Ce=this.$locale().weekStart||0,ye=(V<Ce?V+7:V)-Ce;return X(J?he-ye:he+(6-ye),se);case l:case w:return ie(_e+"Hours",0);case c:return ie(_e+"Minutes",1);case a:return ie(_e+"Seconds",2);case o:return ie(_e+"Milliseconds",3);default:return this.clone()}},j.endOf=function(M){return this.startOf(M,!1)},j.$set=function(M,U){var L,J=k.p(M),te="set"+(this.$u?"UTC":""),X=(L={},L[l]=te+"Date",L[w]=te+"Date",L[f]=te+"Month",L[g]=te+"FullYear",L[c]=te+"Hours",L[a]=te+"Minutes",L[o]=te+"Seconds",L[i]=te+"Milliseconds",L)[J],ie=J===l?this.$D+(U-this.$W):U;if(J===f||J===g){var V=this.clone().set(w,1);V.$d[X](ie),V.init(),this.$d=V.set(w,Math.min(this.$D,V.daysInMonth())).$d}else X&&this.$d[X](ie);return this.init(),this},j.set=function(M,U){return this.clone().$set(M,U)},j.get=function(M){return this[k.p(M)]()},j.add=function(M,U){var L,J=this;M=Number(M);var te=k.p(U),X=function(se){var he=D(J);return k.w(he.date(he.date()+Math.round(se*M)),J)};if(te===f)return this.set(f,this.$M+M);if(te===g)return this.set(g,this.$y+M);if(te===l)return X(1);if(te===u)return X(7);var ie=(L={},L[a]=n,L[c]=s,L[o]=r,L)[te]||1,V=this.$d.getTime()+M*ie;return k.w(V,this)},j.subtract=function(M,U){return this.add(-1*M,U)},j.format=function(M){var U=this,L=this.$locale();if(!this.isValid())return L.invalidDate||_;var J=M||"YYYY-MM-DDTHH:mm:ssZ",te=k.z(this),X=this.$H,ie=this.$m,V=this.$M,se=L.weekdays,he=L.months,_e=L.meridiem,Ce=function(me,Ie,Ne,Oe){return me&&(me[Ie]||me(U,J))||Ne[Ie].slice(0,Oe)},ye=function(me){return k.s(X%12||12,me,"0")},Se=_e||function(me,Ie,Ne){var Oe=me<12?"AM":"PM";return Ne?Oe.toLowerCase():Oe};return J.replace(T,function(me,Ie){return Ie||function(Ne){switch(Ne){case"YY":return String(U.$y).slice(-2);case"YYYY":return k.s(U.$y,4,"0");case"M":return V+1;case"MM":return k.s(V+1,2,"0");case"MMM":return Ce(L.monthsShort,V,he,3);case"MMMM":return Ce(he,V);case"D":return U.$D;case"DD":return k.s(U.$D,2,"0");case"d":return String(U.$W);case"dd":return Ce(L.weekdaysMin,U.$W,se,2);case"ddd":return Ce(L.weekdaysShort,U.$W,se,3);case"dddd":return se[U.$W];case"H":return String(X);case"HH":return k.s(X,2,"0");case"h":return ye(1);case"hh":return ye(2);case"a":return Se(X,ie,!0);case"A":return Se(X,ie,!1);case"m":return String(ie);case"mm":return k.s(ie,2,"0");case"s":return String(U.$s);case"ss":return k.s(U.$s,2,"0");case"SSS":return k.s(U.$ms,3,"0");case"Z":return te}return null}(me)||te.replace(":","")})},j.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},j.diff=function(M,U,L){var J,te=this,X=k.p(U),ie=D(M),V=(ie.utcOffset()-this.utcOffset())*n,se=this-ie,he=function(){return k.m(te,ie)};switch(X){case g:J=he()/12;break;case f:J=he();break;case m:J=he()/3;break;case u:J=(se-V)/6048e5;break;case l:J=(se-V)/864e5;break;case c:J=se/s;break;case a:J=se/n;break;case o:J=se/r;break;default:J=se}return L?J:k.a(J)},j.daysInMonth=function(){return this.endOf(f).$D},j.$locale=function(){return A[this.$L]},j.locale=function(M,U){if(!M)return this.$L;var L=this.clone(),J=P(M,U,!0);return J&&(L.$L=J),L},j.clone=function(){return k.w(this.$d,this)},j.toDate=function(){return new Date(this.valueOf())},j.toJSON=function(){return this.isValid()?this.toISOString():null},j.toISOString=function(){return this.$d.toISOString()},j.toString=function(){return this.$d.toUTCString()},W}(),Y=K.prototype;return D.prototype=Y,[["$ms",i],["$s",o],["$m",a],["$H",c],["$W",l],["$M",f],["$y",g],["$D",w]].forEach(function(W){Y[W[1]]=function(j){return this.$g(j,W[0],W[1])}}),D.extend=function(W,j){return W.$i||(W(j,K,D),W.$i=!0),D},D.locale=P,D.isDayjs=S,D.unix=function(W){return D(1e3*W)},D.en=A[C],D.Ls=A,D.p={},D})})(U1);var z6=U1.exports;const _o=Rc(z6);var B1={exports:{}};(function(t,e){(function(r,n){t.exports=n()})(hd,function(){return function(r,n,s){s.updateLocale=function(i,o){var a=s.Ls[i];if(a)return(o?Object.keys(o):[]).forEach(function(c){a[c]=o[c]}),a}}})})(B1);var H6=B1.exports;const q6=Rc(H6);var j1={exports:{}};(function(t,e){(function(r,n){t.exports=n()})(hd,function(){return function(r,n,s){r=r||{};var i=n.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(l,u,f,m){return i.fromToBase(l,u,f,m)}s.en.relativeTime=o,i.fromToBase=function(l,u,f,m,g){for(var w,_,v,T=f.$locale().relativeTime||o,b=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],E=b.length,x=0;x<E;x+=1){var C=b[x];C.d&&(w=m?s(l).diff(f,C.d,!0):f.diff(l,C.d,!0));var A=(r.rounding||Math.round)(Math.abs(w));if(v=w>0,A<=C.r||!C.r){A<=1&&x>0&&(C=b[x-1]);var h=T[C.l];g&&(A=g(""+A)),_=typeof h=="string"?h.replace("%d",A):h(A,u,C.l,v);break}}if(u)return _;var S=v?T.future:T.past;return typeof S=="function"?S(_):S.replace("%s",_)},i.to=function(l,u){return a(l,u,this,!0)},i.from=function(l,u){return a(l,u,this)};var c=function(l){return l.$u?s.utc():s()};i.toNow=function(l){return this.to(c(this),l)},i.fromNow=function(l){return this.from(c(this),l)}}})})(j1);var V6=j1.exports;const Z6=Rc(V6);_o.extend(Z6);_o.extend(q6);_o.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const L1={getYear(t=new Date().toISOString()){return _o(t).year()},getRelativeDateFromNow(t){return _o(t).fromNow(!0)}},G6=3,K6=["receive","deposit","borrow","claim"],Q6=["withdraw","repay","burn"],Ln={getTransactionGroupTitle(t){const e=L1.getYear();return t===e?"This Year":t},getTransactionImages(t){const[e,r]=t,n=!!e&&t?.every(o=>!!o.nft_info),s=t?.length>1;return t?.length===2&&!n?[this.getTransactionImage(e),this.getTransactionImage(r)]:s?t.map(o=>this.getTransactionImage(o)):[this.getTransactionImage(e)]},getTransactionImage(t){return{type:Ln.getTransactionTransferTokenType(t),url:Ln.getTransactionImageURL(t)}},getTransactionImageURL(t){let e=null;const r=!!t?.nft_info,n=!!t?.fungible_info;return t&&r?e=t?.nft_info?.content?.preview?.url:t&&n&&(e=t?.fungible_info?.icon?.url),e},getTransactionTransferTokenType(t){return t?.fungible_info?"FUNGIBLE":t?.nft_info?"NFT":null},getTransactionDescriptions(t){const e=t.metadata?.operationType,r=t.transfers,n=t.transfers?.length>0,s=t.transfers?.length>1,i=n&&r?.every(f=>!!f.fungible_info),[o,a]=r;let c=this.getTransferDescription(o),l=this.getTransferDescription(a);if(!n)return(e==="send"||e==="receive")&&i?(c=Fe.getTruncateString({string:t.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),l=Fe.getTruncateString({string:t.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[c,l]):[t.metadata.status];if(s)return r.map(f=>this.getTransferDescription(f));let u="";return K6.includes(e)?u="+":Q6.includes(e)&&(u="-"),c=u.concat(c),[c]},getTransferDescription(t){let e="";return t&&(t?.nft_info?e=t?.nft_info?.name||"-":t?.fungible_info&&(e=this.getFungibleTransferDescription(t)||"-")),e},getFungibleTransferDescription(t){return t?[this.getQuantityFixedValue(t?.quantity.numeric),t?.fungible_info?.symbol].join(" ").trim():null},getQuantityFixedValue(t){return t?parseFloat(t).toFixed(G6):null}},Y6=Object.freeze(Object.defineProperty({__proto__:null,TransactionUtil:Ln,UiHelperUtil:Fe,get WuiAccountButton(){return Sr},get WuiAllWalletsImage(){return fo},get WuiAvatar(){return Xn},get WuiButton(){return lr},get WuiCard(){return Va},get WuiCardSelect(){return $r},get WuiCardSelectLoader(){return po},get WuiChip(){return Tr},get WuiConnectButton(){return Vi},get WuiCtaButton(){return ei},get WuiEmailInput(){return ti},get WuiFlex(){return St},get WuiGrid(){return Pt},get WuiIcon(){return Qn},get WuiIconBox(){return Xt},get WuiIconLink(){return wn},get WuiImage(){return Hi},get WuiInputElement(){return go},get WuiInputNumeric(){return mo},get WuiInputText(){return ur},get WuiLink(){return Zi},get WuiListAccordion(){return ts},get WuiListContent(){return ii},get WuiListItem(){return Vt},get WuiListWallet(){return Bt},get WuiListWalletTransaction(){return yn},get WuiLoadingHexagon(){return Za},get WuiLoadingSpinner(){return qi},get WuiLoadingThumbnail(){return uo},get WuiLogo(){return bo},get WuiLogoSelect(){return Gi},get WuiNetworkButton(){return Ki},get WuiNetworkImage(){return mn},get WuiNoticeCard(){return ni},get WuiOtp(){return yo},get WuiQrCode(){return qr},get WuiSearchBar(){return Ja},get WuiSeparator(){return xo},get WuiShimmer(){return Yn},get WuiSnackbar(){return bn},get WuiTabs(){return hr},get WuiTag(){return wo},get WuiText(){return Jn},get WuiTooltip(){return es},get WuiTransactionListItem(){return dr},get WuiTransactionListItemLoader(){return Ka},get WuiTransactionVisual(){return Ir},get WuiVisual(){return ho},get WuiVisualThumbnail(){return ri},get WuiWalletImage(){return Ar},customElement:z,initializeTheming:r1,setColorTheme:Xd,setThemeVariables:n1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ra=globalThis,gh=Ra.ShadowRoot&&(Ra.ShadyCSS===void 0||Ra.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mh=Symbol(),If=new WeakMap;let F1=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==mh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(gh&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=If.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&If.set(r,e))}return e}toString(){return this.cssText}};const J6=t=>new F1(typeof t=="string"?t:t+"",void 0,mh),lt=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,s,i)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new F1(r,t,mh)},X6=(t,e)=>{if(gh)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),s=Ra.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,t.appendChild(n)}},Rf=gh?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return J6(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:e4,defineProperty:t4,getOwnPropertyDescriptor:r4,getOwnPropertyNames:n4,getOwnPropertySymbols:i4,getPrototypeOf:s4}=Object,dl=globalThis,Of=dl.trustedTypes,o4=Of?Of.emptyScript:"",a4=dl.reactiveElementPolyfillSupport,Bs=(t,e)=>t,Xa={toAttribute(t,e){switch(e){case Boolean:t=t?o4:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},wh=(t,e)=>!e4(t,e),Pf={attribute:!0,type:String,converter:Xa,reflect:!1,hasChanged:wh};Symbol.metadata??=Symbol("metadata"),dl.litPropertyMetadata??=new WeakMap;class Ii extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Pf){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(e,n,r);s!==void 0&&t4(this.prototype,e,s)}}static getPropertyDescriptor(e,r,n){const{get:s,set:i}=r4(this.prototype,e)??{get(){return this[r]},set(o){this[r]=o}};return{get(){return s?.call(this)},set(o){const a=s?.call(this);i.call(this,o),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Pf}static _$Ei(){if(this.hasOwnProperty(Bs("elementProperties")))return;const e=s4(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Bs("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Bs("properties"))){const r=this.properties,n=[...n4(r),...i4(r)];for(const s of n)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,s]of r)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const s=this._$Eu(r,n);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)r.unshift(Rf(s))}else e!==void 0&&r.push(Rf(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$E_??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$E_?.delete(e)}_$ES(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return X6(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$E_?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EO(e,r){const n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){const i=(n.converter?.toAttribute!==void 0?n.converter:Xa).toAttribute(r,n.type);this._$Em=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(e,r){const n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const i=n.getPropertyOptions(s),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Xa;this._$Em=s,this[s]=o.fromAttribute(r,i.type),this._$Em=null}}requestUpdate(e,r,n,s=!1,i){if(e!==void 0){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??wh)(s?i:this[e],r))return;this.C(e,r,n)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,r,n){this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,i]of n)i.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.C(s,this[s],i)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$E_?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$ET()}catch(n){throw e=!1,this._$ET(),n}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$E_?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(r=>this._$EO(r,this[r])),this._$ET()}updated(e){}firstUpdated(e){}}Ii.elementStyles=[],Ii.shadowRootOptions={mode:"open"},Ii[Bs("elementProperties")]=new Map,Ii[Bs("finalized")]=new Map,a4?.({ReactiveElement:Ii}),(dl.reactiveElementVersions??=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bh=globalThis,ec=bh.trustedTypes,Df=ec?ec.createPolicy("lit-html",{createHTML:t=>t}):void 0,W1="$lit$",on=`lit$${(Math.random()+"").slice(9)}$`,z1="?"+on,c4=`<${z1}>`,si=document,Co=()=>si.createComment(""),Eo=t=>t===null||typeof t!="object"&&typeof t!="function",H1=Array.isArray,l4=t=>H1(t)||typeof t?.[Symbol.iterator]=="function",Ql=`[ 	
\f\r]`,As=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Nf=/-->/g,kf=/>/g,Mn=RegExp(`>|${Ql}(?:([^\\s"'>=/]+)(${Ql}*=${Ql}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mf=/'/g,Uf=/"/g,q1=/^(?:script|style|textarea|title)$/i,u4=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),B=u4(1),rs=Symbol.for("lit-noChange"),ct=Symbol.for("lit-nothing"),Bf=new WeakMap,Fn=si.createTreeWalker(si,129);function V1(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Df!==void 0?Df.createHTML(e):e}const d4=(t,e)=>{const r=t.length-1,n=[];let s,i=e===2?"<svg>":"",o=As;for(let a=0;a<r;a++){const c=t[a];let l,u,f=-1,m=0;for(;m<c.length&&(o.lastIndex=m,u=o.exec(c),u!==null);)m=o.lastIndex,o===As?u[1]==="!--"?o=Nf:u[1]!==void 0?o=kf:u[2]!==void 0?(q1.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=Mn):u[3]!==void 0&&(o=Mn):o===Mn?u[0]===">"?(o=s??As,f=-1):u[1]===void 0?f=-2:(f=o.lastIndex-u[2].length,l=u[1],o=u[3]===void 0?Mn:u[3]==='"'?Uf:Mf):o===Uf||o===Mf?o=Mn:o===Nf||o===kf?o=As:(o=Mn,s=void 0);const g=o===Mn&&t[a+1].startsWith("/>")?" ":"";i+=o===As?c+c4:f>=0?(n.push(l),c.slice(0,f)+W1+c.slice(f)+on+g):c+on+(f===-2?a:g)}return[V1(t,i+(t[r]||"<?>")+(e===2?"</svg>":"")),n]};class So{constructor({strings:e,_$litType$:r},n){let s;this.parts=[];let i=0,o=0;const a=e.length-1,c=this.parts,[l,u]=d4(e,r);if(this.el=So.createElement(l,n),Fn.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=Fn.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(W1)){const m=u[o++],g=s.getAttribute(f).split(on),w=/([.?@])?(.*)/.exec(m);c.push({type:1,index:i,name:w[2],strings:g,ctor:w[1]==="."?f4:w[1]==="?"?p4:w[1]==="@"?g4:hl}),s.removeAttribute(f)}else f.startsWith(on)&&(c.push({type:6,index:i}),s.removeAttribute(f));if(q1.test(s.tagName)){const f=s.textContent.split(on),m=f.length-1;if(m>0){s.textContent=ec?ec.emptyScript:"";for(let g=0;g<m;g++)s.append(f[g],Co()),Fn.nextNode(),c.push({type:2,index:++i});s.append(f[m],Co())}}}else if(s.nodeType===8)if(s.data===z1)c.push({type:2,index:i});else{let f=-1;for(;(f=s.data.indexOf(on,f+1))!==-1;)c.push({type:7,index:i}),f+=on.length-1}i++}}static createElement(e,r){const n=si.createElement("template");return n.innerHTML=e,n}}function ns(t,e,r=t,n){if(e===rs)return e;let s=n!==void 0?r._$Co?.[n]:r._$Cl;const i=Eo(e)?void 0:e._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(t),s._$AT(t,r,n)),n!==void 0?(r._$Co??=[])[n]=s:r._$Cl=s),s!==void 0&&(e=ns(t,s._$AS(t,e.values),s,n)),e}let h4=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,s=(e?.creationScope??si).importNode(r,!0);Fn.currentNode=s;let i=Fn.nextNode(),o=0,a=0,c=n[0];for(;c!==void 0;){if(o===c.index){let l;c.type===2?l=new sa(i,i.nextSibling,this,e):c.type===1?l=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(l=new m4(i,this,e)),this._$AV.push(l),c=n[++a]}o!==c?.index&&(i=Fn.nextNode(),o++)}return Fn.currentNode=si,s}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}};class sa{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,n,s){this.type=2,this._$AH=ct,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=ns(this,e,r),Eo(e)?e===ct||e==null||e===""?(this._$AH!==ct&&this._$AR(),this._$AH=ct):e!==this._$AH&&e!==rs&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):l4(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==ct&&Eo(this._$AH)?this._$AA.nextSibling.data=e:this.$(si.createTextNode(e)),this._$AH=e}g(e){const{values:r,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=So.createElement(V1(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===s)this._$AH.p(r);else{const i=new h4(s,this),o=i.u(this.options);i.p(r),this.$(o),this._$AH=i}}_$AC(e){let r=Bf.get(e.strings);return r===void 0&&Bf.set(e.strings,r=new So(e)),r}T(e){H1(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,s=0;for(const i of e)s===r.length?r.push(n=new sa(this.k(Co()),this.k(Co()),this,this.options)):n=r[s],n._$AI(i),s++;s<r.length&&(this._$AR(n&&n._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class hl{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,s,i){this.type=1,this._$AH=ct,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ct}_$AI(e,r=this,n,s){const i=this.strings;let o=!1;if(i===void 0)e=ns(this,e,r,0),o=!Eo(e)||e!==this._$AH&&e!==rs,o&&(this._$AH=e);else{const a=e;let c,l;for(e=i[0],c=0;c<i.length-1;c++)l=ns(this,a[n+c],r,c),l===rs&&(l=this._$AH[c]),o||=!Eo(l)||l!==this._$AH[c],l===ct?e=ct:e!==ct&&(e+=(l??"")+i[c+1]),this._$AH[c]=l}o&&!s&&this.O(e)}O(e){e===ct?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class f4 extends hl{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===ct?void 0:e}}class p4 extends hl{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==ct)}}class g4 extends hl{constructor(e,r,n,s,i){super(e,r,n,s,i),this.type=5}_$AI(e,r=this){if((e=ns(this,e,r,0)??ct)===rs)return;const n=this._$AH,s=e===ct&&n!==ct||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==ct&&(n===ct||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class m4{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ns(this,e)}}const w4=bh.litHtmlPolyfillSupport;w4?.(So,sa),(bh.litHtmlVersions??=[]).push("3.1.0");const b4=(t,e,r)=>{const n=r?.renderBefore??e;let s=n._$litPart$;if(s===void 0){const i=r?.renderBefore??null;n._$litPart$=s=new sa(e.insertBefore(Co(),i),i,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ae=class extends Ii{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=b4(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return rs}};Ae._$litElement$=!0,Ae.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Ae});const y4=globalThis.litElementPolyfillSupport;y4?.({LitElement:Ae});(globalThis.litElementVersions??=[]).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v4={attribute:!0,type:String,converter:Xa,reflect:!1,hasChanged:wh},x4=(t=v4,e,r)=>{const{kind:n,metadata:s}=r;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(r.name,t),n==="accessor"){const{name:o}=r;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,c,t)},init(a){return a!==void 0&&this.C(o,void 0,t),a}}}if(n==="setter"){const{name:o}=r;return function(a){const c=this[o];e.call(this,a),this.requestUpdate(o,c,t)}}throw Error("Unsupported decorator location: "+n)};function mt(t){return(e,r)=>typeof r=="object"?x4(t,e,r):((n,s,i)=>{const o=s.hasOwnProperty(i);return s.constructor.createProperty(i,o?{...n,wrapped:!0}:n),o?Object.getOwnPropertyDescriptor(s,i):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ne(t){return mt({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=t=>t??ct;var Yr=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Rr=class extends Ae{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.address=Ue.state.address,this.balanceVal=Ue.state.balance,this.balanceSymbol=Ue.state.balanceSymbol,this.profileName=Ue.state.profileName,this.profileImage=Ue.state.profileImage,this.network=nt.state.caipNetwork,this.unsubscribe.push(Ue.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),nt.subscribeKey("caipNetwork",e=>this.network=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=rt.getNetworkImage(this.network),r=this.balance==="show";return B`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${Le(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${Le(e)}
        avatarSrc=${Le(this.profileImage)}
        balance=${r?de.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
      >
      </wui-account-button>
    `}onClick(){qe.open()}};Yr([mt({type:Boolean})],Rr.prototype,"disabled",void 0);Yr([mt()],Rr.prototype,"balance",void 0);Yr([ne()],Rr.prototype,"address",void 0);Yr([ne()],Rr.prototype,"balanceVal",void 0);Yr([ne()],Rr.prototype,"balanceSymbol",void 0);Yr([ne()],Rr.prototype,"profileName",void 0);Yr([ne()],Rr.prototype,"profileImage",void 0);Yr([ne()],Rr.prototype,"network",void 0);Rr=Yr([z("w3m-account-button")],Rr);var wi=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let vn=class extends Ae{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=Ue.state.isConnected,this.unsubscribe.push(Ue.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?B`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${Le(this.balance)}
          >
          </w3m-account-button>
        `:B`
          <w3m-connect-button
            size=${Le(this.size)}
            label=${Le(this.label)}
            loadingLabel=${Le(this.loadingLabel)}
          ></w3m-connect-button>
        `}};wi([mt({type:Boolean})],vn.prototype,"disabled",void 0);wi([mt()],vn.prototype,"balance",void 0);wi([mt()],vn.prototype,"size",void 0);wi([mt()],vn.prototype,"label",void 0);wi([mt()],vn.prototype,"loadingLabel",void 0);wi([ne()],vn.prototype,"isAccount",void 0);vn=wi([z("w3m-button")],vn);var ws=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let oi=class extends Ae{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=qe.state.open,this.loading=qe.state.loading,this.unsubscribe.push(qe.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.loading||this.open;return B`
      <wui-connect-button
        size=${Le(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?qe.close():qe.open()}};ws([mt()],oi.prototype,"size",void 0);ws([mt()],oi.prototype,"label",void 0);ws([mt()],oi.prototype,"loadingLabel",void 0);ws([ne()],oi.prototype,"open",void 0);ws([ne()],oi.prototype,"loading",void 0);oi=ws([z("w3m-connect-button")],oi);const _4=lt`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var fl=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};const jf="scroll-lock";let ai=class extends Ae{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=qe.state.open,this.caipAddress=Ue.state.address,this.isSiweEnabled=ot.state.isSiweEnabled,this.initializeTheming(),Re.prefetch(),this.unsubscribe.push(qe.subscribeKey("open",e=>e?this.onOpen():this.onClose()),ot.subscribeKey("isSiweEnabled",e=>{this.isSiweEnabled=e}),Ue.subscribe(e=>this.onNewAccountState(e))),Me.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?B`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){this.isSiweEnabled&&ot.state.status!=="success"&&await Pe.disconnect(),qe.close()}initializeTheming(){const{themeVariables:e,themeMode:r}=Kt.state,n=Fe.getColorTheme(r);r1(e,n)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,Xe.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=jf,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${jf}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")this.handleClose();else if(r.key==="Tab"){const{tagName:n}=r.target;n&&!n.includes("W3M-")&&!n.includes("WUI-")&&e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAccountState(e){const{isConnected:r,caipAddress:n}=e;if(this.isSiweEnabled){r&&!this.caipAddress&&(this.caipAddress=n),r&&n&&this.caipAddress!==n&&(await ot.signOut(),this.onSiweNavigation(),this.caipAddress=n);try{const s=await ot.getSession();s&&!r?await ot.signOut():r&&!s&&this.onSiweNavigation()}catch{r&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?re.push("ConnectingSiwe"):qe.open({view:"ConnectingSiwe"})}};ai.styles=_4;fl([ne()],ai.prototype,"open",void 0);fl([ne()],ai.prototype,"caipAddress",void 0);fl([ne()],ai.prototype,"isSiweEnabled",void 0);ai=fl([z("w3m-modal")],ai);const C4=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return ai}},Symbol.toStringTag,{value:"Module"}));var oa=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let is=class extends Ae{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=nt.state.caipNetwork,this.connected=Ue.state.isConnected,this.loading=qe.state.loading,this.unsubscribe.push(nt.subscribeKey("caipNetwork",e=>this.network=e),Ue.subscribeKey("isConnected",e=>this.connected=e),qe.subscribeKey("loading",e=>this.loading=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return B`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        imageSrc=${Le(rt.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){qe.open({view:"Networks"})}};oa([mt({type:Boolean})],is.prototype,"disabled",void 0);oa([ne()],is.prototype,"network",void 0);oa([ne()],is.prototype,"connected",void 0);oa([ne()],is.prototype,"loading",void 0);is=oa([z("w3m-network-button")],is);const E4=lt`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var Z1=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let tc=class extends Ae{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=re.state.view,this.unsubscribe.push(re.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{const r=`${e?.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:r}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=r}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return B`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return B`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return B`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return B`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return B`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return B`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return B`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return B`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return B`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return B`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return B`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return B`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return B`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return B`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return B`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return B`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return B`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return B`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return B`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailWalletWaiting":return B`<w3m-update-email-wallet-waiting-view></w3m-update-email-wallet-waiting-view>`;default:return B`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(e){const{history:r}=re.state;let n=-10,s=10;r.length<this.prevHistoryLength&&(n=10,s=-10),this.prevHistoryLength=r.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${n}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${s}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};tc.styles=E4;Z1([ne()],tc.prototype,"view",void 0);tc=Z1([z("w3m-router")],tc);const S4=lt`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }
`;var On=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Or=class extends Ae{constructor(){super(),this.usubscribe=[],this.address=Ue.state.address,this.profileImage=Ue.state.profileImage,this.profileName=Ue.state.profileName,this.balance=Ue.state.balance,this.balanceSymbol=Ue.state.balanceSymbol,this.network=nt.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(Ue.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):qe.close()}),nt.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=rt.getNetworkImage(this.network);return B`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${Le(this.profileImage===null?void 0:this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?Fe.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):Fe.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${de.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${Le(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}emailCardTemplate(){const e=Rt.getConnectedConnector(),r=Je.getEmailConnector(),{origin:n}=location;return!r||e!=="EMAIL"||n.includes(cn.SECURE_SITE)?null:B`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a non-custodial wallet"
        icon="wallet"
      ></wui-notice-card>
    `}emailBtnTemplate(){const e=Rt.getConnectedConnector(),r=Je.getEmailConnector();if(!r||e!=="EMAIL")return null;const n=r.provider.getEmail()??"";return B`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(n)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${n}</wui-text>
      </wui-list-item>
    `}explorerBtnTemplate(){const{addressExplorerUrl:e}=Ue.state;return e?B`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=nt.state,r=e?e.length>1:!1,n=e?.find(({id:s})=>s===this.network?.id);return r||!n}onCopyAddress(){try{this.address&&(de.copyToClopboard(this.address),Xe.showSuccess("Address copied"))}catch{Xe.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&re.push("Networks")}onTransactions(){Me.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),re.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await Pe.disconnect(),Me.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),qe.close()}catch{Me.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Xe.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:e}=Ue.state;e&&de.openHref(e,"_blank")}onGoToUpgradeView(){re.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){re.push("UpdateEmailWallet",{email:e})}};Or.styles=S4;On([ne()],Or.prototype,"address",void 0);On([ne()],Or.prototype,"profileImage",void 0);On([ne()],Or.prototype,"profileName",void 0);On([ne()],Or.prototype,"balance",void 0);On([ne()],Or.prototype,"balanceSymbol",void 0);On([ne()],Or.prototype,"network",void 0);On([ne()],Or.prototype,"disconecting",void 0);Or=On([z("w3m-account-view")],Or);var G1=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Uu=class extends Ae{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=de.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return B`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?B`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:B`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return de.isMobile()?B`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){re.push("ConnectingWalletConnect")}};G1([ne()],Uu.prototype,"search",void 0);Uu=G1([z("w3m-all-wallets-view")],Uu);const A4=lt`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var K1=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let rc=class extends Ae{constructor(){super(),this.unsubscribe=[],this.connectors=Je.state.connectors,this.unsubscribe.push(Je.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return B`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(de.isMobile())return null;const e=this.connectors.find(r=>r.type==="WALLET_CONNECT");return e?B`
      <wui-list-wallet
        imageSrc=${Le(rt.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=je.state;return e?.length?this.filterOutDuplicateWallets(e).map(n=>B`
        <wui-list-wallet
          imageSrc=${Le(rt.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(s=>s.type==="WALLET_CONNECT"))return null;const{featured:r}=Re.state;return r.length?this.filterOutDuplicateWallets(r).map(s=>B`
        <wui-list-wallet
          imageSrc=${Le(rt.getWalletImage(s))}
          name=${s.name??"Unknown"}
          @click=${()=>this.onConnectWallet(s)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return Rt.getRecentWallets().map(r=>B`
        <wui-list-wallet
          imageSrc=${Le(rt.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>e.type!=="ANNOUNCED"?null:B`
        <wui-list-wallet
          imageSrc=${Le(rt.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){const e=this.connectors.find(r=>r.type==="ANNOUNCED");return this.connectors.map(r=>r.type!=="INJECTED"||!Pe.checkInstalled()?null:B`
        <wui-list-wallet
          imageSrc=${Le(rt.getConnectorImage(r))}
          installed=${!!e}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnector(r)}
        >
        </wui-list-wallet>
      `)}connectorsTemplate(){return this.connectors.map(e=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(e.type)?null:B`
        <wui-list-wallet
          imageSrc=${Le(rt.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){if(!this.connectors.find(a=>a.type==="WALLET_CONNECT"))return null;const r=Re.state.count,n=Re.state.featured.length,s=r+n,i=s<10?s:Math.floor(s/10)*10,o=i<s?`${i}+`:`${i}`;return B`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${o}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(f=>f.type==="WALLET_CONNECT"))return null;const{recommended:r}=Re.state,{customWallets:n,featuredWalletIds:s}=je.state,{connectors:i}=Je.state,o=Rt.getRecentWallets(),a=i.filter(f=>f.type==="ANNOUNCED");if(s||n||!r.length)return null;const c=a.length+o.length,l=Math.max(0,2-c);return this.filterOutDuplicateWallets(r).slice(0,l).map(f=>B`
        <wui-list-wallet
          imageSrc=${Le(rt.getWalletImage(f))}
          name=${f?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(f)}
        >
        </wui-list-wallet>
      `)}onConnector(e){e.type==="WALLET_CONNECT"?de.isMobile()?re.push("AllWallets"):re.push("ConnectingWalletConnect"):re.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const{connectors:r}=Je.state,s=Rt.getRecentWallets().map(a=>a.id),i=r.map(a=>a.info?.rdns).filter(Boolean);return e.filter(a=>!s.includes(a.id)&&!i.includes(a.rdns??void 0))}onAllWallets(){Me.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),re.push("AllWallets")}onConnectWallet(e){re.push("ConnectingWalletConnect",{wallet:e})}};rc.styles=A4;K1([ne()],rc.prototype,"connectors",void 0);rc=K1([z("w3m-connect-view")],rc);const $4=lt`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var bi=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};class Lt extends Ae{constructor(){super(),this.wallet=re.state.data?.wallet,this.connector=re.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=rt.getWalletImage(this.wallet)??rt.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=Pe.state.wcUri,this.error=Pe.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Pe.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),Pe.subscribeKey("wcError",e=>this.error=e),Pe.subscribeKey("buffering",e=>this.buffering=e))}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let r=`Continue in ${this.name}`;return this.buffering&&(r="Connecting..."),this.error&&(r="Connection declined"),B`
      <wui-flex
        data-error=${Le(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${Le(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${r}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?B`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,(this.shadowRoot?.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){this.buffering||(Pe.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){const e=Kt.state.themeVariables["--w3m-border-radius-master"],r=e?parseInt(e.replace("px",""),10):4;return B`<wui-loading-thumbnail radius=${r*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(de.copyToClopboard(this.uri),Xe.showSuccess("Link copied"))}catch{Xe.showError("Failed to copy")}}}Lt.styles=$4;bi([ne()],Lt.prototype,"uri",void 0);bi([ne()],Lt.prototype,"error",void 0);bi([ne()],Lt.prototype,"ready",void 0);bi([ne()],Lt.prototype,"showRetry",void 0);bi([ne()],Lt.prototype,"buffering",void 0);bi([mt({type:Boolean})],Lt.prototype,"isMobile",void 0);bi([mt()],Lt.prototype,"onRetry",void 0);var T4=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};const I4={INJECTED:"browser",ANNOUNCED:"browser"};let Lf=class extends Lt{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");Me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:I4[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&Rt.setConnectedWalletImageUrl(this.connector.imageUrl),await Pe.connectExternal(this.connector),ot.state.isSiweEnabled?re.push("ConnectingSiwe"):qe.close(),Me.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){Me.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};Lf=T4([z("w3m-connecting-external-view")],Lf);var Q1=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Bu=class extends Ae{constructor(){super(...arguments),this.dappName=je.state.metadata?.name,this.isSigning=!1}render(){return B`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${!0} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,Me.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{ot.setStatus("loading");const e=await ot.signIn();return ot.setStatus("success"),Me.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),e}catch{return Xe.showError("Signature declined"),ot.setStatus("error"),Me.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){const{isConnected:e}=Ue.state;e?(await Pe.disconnect(),qe.close()):re.push("Connect"),Me.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};Q1([ne()],Bu.prototype,"isSigning",void 0);Bu=Q1([z("w3m-connecting-siwe-view")],Bu);var yh=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let nc=class extends Ae{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=re.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),cn.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),B`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):B`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:r}=Pe.state;if(e||de.isPairingExpired(r)){if(Pe.connectWalletConnect(),this.wallet){const n=rt.getWalletImage(this.wallet);n&&Rt.setConnectedWalletImageUrl(n)}else{const s=Je.state.connectors.find(o=>o.type==="WALLET_CONNECT"),i=rt.getConnectorImage(s);i&&Rt.setConnectedWalletImageUrl(i)}await Pe.state.wcPromise,this.finalizeConnection(),ot.state.isSiweEnabled?re.push("ConnectingSiwe"):qe.close()}}catch(r){Me.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:r?.message??"Unknown"}}),Pe.setWcError(!0),de.isAllowedRetry(this.lastRetry)&&(Xe.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:e,recentWallet:r}=Pe.state;e&&Rt.setWalletConnectDeepLink(e),r&&Rt.setWeb3ModalRecent(r),Me.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:r,webapp_link:n,injected:s,rdns:i}=this.wallet,o=s?.map(({injected_id:w})=>w).filter(Boolean),a=i?[i]:o??[],c=a.length,l=e,u=n,f=Pe.checkInstalled(a),m=c&&f,g=r&&!de.isMobile();m&&this.platforms.push("browser"),l&&this.platforms.push(de.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),g&&this.platforms.push("desktop"),!m&&c&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return B`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return B`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return B`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return B`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return B`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return B`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?B`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const r=this.shadowRoot?.querySelector("div");r&&(await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};yh([ne()],nc.prototype,"platform",void 0);yh([ne()],nc.prototype,"platforms",void 0);nc=yh([z("w3m-connecting-wc-view")],nc);var R4=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Ff=class extends Ae{constructor(){super(...arguments),this.wallet=re.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return B`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?B`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?B`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?B`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?B`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&de.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&de.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&de.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&de.openHref(this.wallet.homepage,"_blank")}};Ff=R4([z("w3m-downloads-view")],Ff);var O4=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};const P4="https://walletconnect.com/explorer";let Wf=class extends Ae{render(){return B`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{de.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:r}=Re.state,{customWallets:n}=je.state;return[...r,...n??[],...e].slice(0,4).map(i=>B`
        <wui-list-wallet
          name=${i.name??"Unknown"}
          tagVariant="main"
          imageSrc=${Le(rt.getWalletImage(i))}
          @click=${()=>{de.openHref(i.homepage??P4,"_blank")}}
        ></wui-list-wallet>
      `)}};Wf=O4([z("w3m-get-wallet-view")],Wf);const D4=lt`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var vh=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Ao=class extends Ae{constructor(){super(),this.network=re.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",r=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return B`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${Le(rt.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:B`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${r}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,(this.shadowRoot?.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,this.network&&(await nt.switchActiveNetwork(this.network),ot.state.isSiweEnabled||Vp.navigateAfterNetworkSwitch())}catch{this.error=!0}}};Ao.styles=D4;vh([ne()],Ao.prototype,"showRetry",void 0);vh([ne()],Ao.prototype,"error",void 0);Ao=vh([z("w3m-network-switch-view")],Ao);var Y1=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let ju=class extends Ae{constructor(){super(),this.unsubscribe=[],this.caipNetwork=nt.state.caipNetwork,this.unsubscribe.push(nt.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return B`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){Me.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),re.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:r,supportsAllNetworks:n}=nt.state,s=e,i=r,o={};return i&&s&&(s.forEach((a,c)=>{o[a]=c}),i.sort((a,c)=>{const l=o[a.id],u=o[c.id];return l!==void 0&&u!==void 0?l-u:l!==void 0?-1:u!==void 0?1:0})),i?.map(a=>B`
        <wui-card-select
          .selected=${this.caipNetwork?.id===a.id}
          imageSrc=${Le(rt.getNetworkImage(a))}
          type="network"
          name=${a.name??a.id}
          @click=${()=>this.onSwitchNetwork(a)}
          .disabled=${!n&&!s?.includes(a.id)}
        ></wui-card-select>
      `)}async onSwitchNetwork(e){const{isConnected:r}=Ue.state,{approvedCaipNetworkIds:n,supportsAllNetworks:s,caipNetwork:i}=nt.state,{data:o}=re.state;r&&i?.id!==e.id?n?.includes(e.id)?(await nt.switchActiveNetwork(e),Vp.navigateAfterNetworkSwitch()):s&&re.push("SwitchNetwork",{...o,network:e}):r||(nt.setCaipNetwork(e),re.push("Connect"))}};Y1([ne()],ju.prototype,"caipNetwork",void 0);ju=Y1([z("w3m-networks-view")],ju);const N4=lt`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;var yi=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};const ya="last-transaction",k4=7;let Vr=class extends Ae{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=Ue.state.address,this.transactions=nr.state.transactions,this.transactionsByYear=nr.state.transactionsByYear,this.loading=nr.state.loading,this.empty=nr.state.empty,this.next=nr.state.next,this.unsubscribe.push(Ue.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,nr.resetTransactions(),nr.fetchTransactions(e.address))}),nr.subscribe(e=>{this.transactions=e.transactions,this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.transactions.length===0&&nr.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return B`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((r,n)=>{const s=n===e.length-1,i=parseInt(r,10),o=Ln.getTransactionGroupTitle(i),a=this.transactionsByYear[i];return a?B`
        <wui-flex flexDirection="column" gap="s">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${o}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(a,s)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(e,r){const{date:n,descriptions:s,direction:i,isAllNFT:o,images:a,status:c,transfers:l,type:u}=this.getTransactionListItemProps(e),f=l?.length>1;return l?.length===2&&!o?B`
        <wui-transaction-list-item
          date=${n}
          .direction=${i}
          id=${r&&this.next?ya:""}
          status=${c}
          type=${u}
          .images=${a}
          .descriptions=${s}
        ></wui-transaction-list-item>
      `:f?l.map((g,w)=>{const _=Ln.getTransferDescription(g),v=r&&w===l.length-1;return B` <wui-transaction-list-item
          date=${n}
          direction=${g.direction}
          id=${v&&this.next?ya:""}
          status=${c}
          type=${u}
          .onlyDirectionIcon=${!0}
          .images=${[a?.[w]]}
          .descriptions=${[_]}
        ></wui-transaction-list-item>`}):B`
      <wui-transaction-list-item
        date=${n}
        .direction=${i}
        id=${r&&this.next?ya:""}
        status=${c}
        type=${u}
        .images=${a}
        .descriptions=${s}
      ></wui-transaction-list-item>
    `}templateTransactions(e,r){return e.map((n,s)=>{const i=r&&s===e.length-1;return B`${this.templateRenderTransaction(n,i)}`})}templateEmpty(){return B`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(k4).fill(B` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}createPaginationObserver(){const{projectId:e}=je.state;this.paginationObserver=new IntersectionObserver(([r])=>{r?.isIntersecting&&!this.loading&&(nr.fetchTransactions(this.address),Me.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const e=this.shadowRoot?.querySelector(`#${ya}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){const r=L1.getRelativeDateFromNow(e?.metadata?.minedAt),n=Ln.getTransactionDescriptions(e),s=e?.transfers,i=e?.transfers?.[0],o=!!i&&e?.transfers?.every(c=>!!c.nft_info),a=Ln.getTransactionImages(s);return{date:r,direction:i?.direction,descriptions:n,isAllNFT:o,images:a,status:e.metadata?.status,transfers:s,type:e.metadata?.operationType}}};Vr.styles=N4;yi([ne()],Vr.prototype,"address",void 0);yi([ne()],Vr.prototype,"transactions",void 0);yi([ne()],Vr.prototype,"transactionsByYear",void 0);yi([ne()],Vr.prototype,"loading",void 0);yi([ne()],Vr.prototype,"empty",void 0);yi([ne()],Vr.prototype,"next",void 0);Vr=yi([z("w3m-transactions-view")],Vr);var M4=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};const U4=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let zf=class extends Ae{render(){return B`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${U4}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{de.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};zf=M4([z("w3m-what-is-a-network-view")],zf);var B4=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};const j4=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Hf=class extends Ae{render(){return B`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${j4}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){Me.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),re.push("GetWallet")}};Hf=B4([z("w3m-what-is-a-wallet-view")],Hf);const L4=lt`
  wui-loading-spinner {
    margin: 9px auto;
  }
`;var J1=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};const F4=6;let ic=class extends Ae{constructor(){super(...arguments),this.email=re.state.data?.email,this.emailConnector=Je.getEmailConnector(),this.loading=!1}render(){if(!this.email)throw new Error("w3m-email-verify-otp-view: No email provided");return B`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100"> Enter the code we sent to </wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?B`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:B`<wui-otp
              dissabled
              length="6"
              @inputChange=${this.onOtpInputChange.bind(this)}
            ></wui-otp>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">Didn't receive it?</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)}>Resend code</wui-link>
        </wui-flex>
      </wui-flex>
    `}async onOtpInputChange(e){try{if(!this.loading){const r=e.detail;this.emailConnector&&r.length===F4&&(this.loading=!0,await this.emailConnector.provider.connectOtp({otp:r}),await Pe.connectExternal(this.emailConnector),qe.close(),Me.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email"}}))}}catch(r){Xe.showError(r),this.loading=!1}}async onResendCode(){try{if(!this.loading){const e=Je.getEmailConnector();if(!e||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await e.provider.connectEmail({email:this.email}),Xe.showSuccess("New Email sent")}}catch(e){Xe.showError(e)}finally{this.loading=!1}}};ic.styles=L4;J1([ne()],ic.prototype,"loading",void 0);ic=J1([z("w3m-email-verify-otp-view")],ic);const W4=lt`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var X1=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let sc=class extends Ae{constructor(){super(),this.email=re.state.data?.email,this.emailConnector=Je.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw new Error("w3m-email-verify-device-view: No email connector provided");return B`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){this.emailConnector&&(await this.emailConnector.provider.connectDevice(),re.replace("EmailVerifyOtp",{email:this.email}))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),Xe.showSuccess("New Email sent")}}catch(e){Xe.showError(e)}finally{this.loading=!1}}};sc.styles=W4;X1([ne()],sc.prototype,"loading",void 0);sc=X1([z("w3m-email-verify-device-view")],sc);const z4=lt`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var eg=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let oc=class extends Ae{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(qe.subscribeKey("open",e=>{e||this.onHideIframe()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}firstUpdated(){this.iframe.style.display="block";const r=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver(()=>{const s=r?.getBoundingClientRect()??{left:0,top:0,width:0,height:0};this.iframe.style.width=`${s.width}px`,this.iframe.style.height=`${s.height-10}px`,this.iframe.style.left=`${s.left}px`,this.iframe.style.top=`${s.top+10/2}px`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),B`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards",delay:300})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}};oc.styles=z4;eg([ne()],oc.prototype,"ready",void 0);oc=eg([z("w3m-approve-transaction-view")],oc);var H4=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let qf=class extends Ae{render(){return B`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${cn.SECURE_SITE_DASHBOARD}
          imageSrc=${cn.SECURE_SITE_FAVICON}
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};qf=H4([z("w3m-upgrade-wallet-view")],qf);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q4=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V4={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Z4=t=>(...e)=>({_$litDirective$:t,values:e});let G4=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const js=(t,e)=>{const r=t._$AN;if(r===void 0)return!1;for(const n of r)n._$AO?.(e,!1),js(n,e);return!0},ac=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while(r?.size===0)},tg=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),Y4(e)}};function K4(t){this._$AN!==void 0?(ac(this),this._$AM=t,tg(this)):this._$AM=t}function Q4(t,e=!1,r=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(n))for(let i=r;i<n.length;i++)js(n[i],!1),ac(n[i]);else n!=null&&(js(n,!1),ac(n));else js(this,t)}const Y4=t=>{t.type==V4.CHILD&&(t._$AP??=Q4,t._$AQ??=K4)};class J4 extends G4{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,n){super._$AT(e,r,n),tg(this),this.isConnected=e._$AU}_$AO(e,r=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),r&&(js(this,e),ac(this))}setValue(e){if(q4(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rg=()=>new X4;let X4=class{};const Yl=new WeakMap,ng=Z4(class extends J4{render(t){return ct}update(t,[e]){const r=e!==this.G;return r&&this.G!==void 0&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=e,this.ct=t.options?.host,this.ot(this.lt=t.element)),ct}ot(t){if(typeof this.G=="function"){const e=this.ct??globalThis;let r=Yl.get(e);r===void 0&&(r=new WeakMap,Yl.set(e,r)),r.get(this.G)!==void 0&&this.G.call(this.ct,void 0),r.set(this.G,t),t!==void 0&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){return typeof this.G=="function"?Yl.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),e8=lt`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var xh=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let $o=class extends Ae{constructor(){super(...arguments),this.formRef=rg(),this.initialValue=re.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{e.key==="Enter"&&this.onSubmitEmail(e)})}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialValue;return B`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${ng(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialValue}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${re.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const r=Je.getEmailConnector();if(!r)throw new Error("w3m-update-email-wallet: Email connector not found");await r.provider.updateEmail({email:this.email}),re.replace("UpdateEmailWalletWaiting",{email:this.email})}catch(r){Xe.showError(r),this.loading=!1}}};$o.styles=e8;xh([ne()],$o.prototype,"email",void 0);xh([ne()],$o.prototype,"loading",void 0);$o=xh([z("w3m-update-email-wallet-view")],$o);const t8=lt`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var ig=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let cc=class extends Ae{constructor(){super(),this.email=re.state.data?.email,this.emailConnector=Je.getEmailConnector(),this.loading=!1,this.listenForEmailUpdateApproval()}render(){if(!this.email)throw new Error("w3m-update-email-wallet-waiting-view: No email provided");if(!this.emailConnector)throw new Error("w3m-update-email-wallet-waiting-view: No email connector provided");return B`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="mail"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve verification link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100">${this.email}</wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            You will receive an approval request on your former mail to confirm the new one
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForEmailUpdateApproval(){this.emailConnector&&(await this.emailConnector.provider.awaitUpdateEmail(),re.replace("Account"),Xe.showSuccess("Email updated"))}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-update-email-wallet-waiting-view: Unable to resend email");this.loading=!0,await this.emailConnector.provider.updateEmail({email:this.email}),this.listenForEmailUpdateApproval(),Xe.showSuccess("New Email sent")}}catch(e){Xe.showError(e)}finally{this.loading=!1}}};cc.styles=t8;ig([ne()],cc.prototype,"loading",void 0);cc=ig([z("w3m-update-email-wallet-waiting-view")],cc);const r8=lt`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function sg(t){const{connectors:e}=Je.state,r=e.filter(i=>i.type==="ANNOUNCED").reduce((i,o)=>(o.info?.rdns&&(i[o.info.rdns]=!0),i),{});return t.map(i=>({...i,installed:!!i.rdns&&!!r[i.rdns??""]})).sort((i,o)=>Number(o.installed)-Number(i.installed))}var aa=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};const Vf="local-paginator";let ci=class extends Ae{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!Re.state.wallets.length,this.wallets=Re.state.wallets,this.recommended=Re.state.recommended,this.featured=Re.state.featured,this.unsubscribe.push(Re.subscribeKey("wallets",e=>this.wallets=e),Re.subscribeKey("recommended",e=>this.recommended=e),Re.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return B`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){const e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await Re.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,r){return[...Array(e)].map(()=>B`
        <wui-card-select-loader type="wallet" id=${Le(r)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=[...this.featured,...this.recommended,...this.wallets];return sg(e).map(n=>B`
        <wui-card-select
          imageSrc=${Le(rt.getWalletImage(n))}
          type="wallet"
          name=${n.name}
          @click=${()=>this.onConnectWallet(n)}
          .installed=${n.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:r,featured:n,count:s}=Re.state,i=window.innerWidth<352?3:4,o=e.length+r.length;let c=Math.ceil(o/i)*i-o+i;return c-=e.length?n.length%i:0,s===0&&n.length>0?null:s===0||[...n,...e,...r].length<s?this.shimmerTemplate(c,Vf):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${Vf}`);e&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r?.isIntersecting&&!this.initial){const{page:n,count:s,wallets:i}=Re.state;i.length<s&&Re.fetchWallets({page:n+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const{connectors:r}=Je.state,n=r.find(({explorerId:s})=>s===e.id);n?re.push("ConnectingExternal",{connector:n}):re.push("ConnectingWalletConnect",{wallet:e})}};ci.styles=r8;aa([ne()],ci.prototype,"initial",void 0);aa([ne()],ci.prototype,"wallets",void 0);aa([ne()],ci.prototype,"recommended",void 0);aa([ne()],ci.prototype,"featured",void 0);ci=aa([z("w3m-all-wallets-list")],ci);const n8=lt`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var _h=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let To=class extends Ae{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?B`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await Re.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=Re.state,r=sg(e);return e.length?B`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${r.map(n=>B`
            <wui-card-select
              imageSrc=${Le(rt.getWalletImage(n))}
              type="wallet"
              name=${n.name}
              @click=${()=>this.onConnectWallet(n)}
              .installed=${n.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:B`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:r}=Je.state,n=r.find(({explorerId:s})=>s===e.id);n?re.push("ConnectingExternal",{connector:n}):re.push("ConnectingWalletConnect",{wallet:e})}};To.styles=n8;_h([ne()],To.prototype,"loading",void 0);_h([mt()],To.prototype,"query",void 0);To=_h([z("w3m-all-wallets-search")],To);var pl=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Io=class extends Ae{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(Pe.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return B`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(r=>r==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:r==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:r==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:r==="web"?{label:"Webapp",icon:"browser",platform:"web"}:r==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:r})=>r),e}onTabChange(e){const r=this.platformTabs[e];r&&this.onSelectPlatfrom?.(r)}};pl([mt({type:Array})],Io.prototype,"platforms",void 0);pl([mt()],Io.prototype,"onSelectPlatfrom",void 0);pl([ne()],Io.prototype,"buffering",void 0);Io=pl([z("w3m-connecting-header")],Io);var i8=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Zf=class extends Lt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),Me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=Je.state,r=e.find(s=>s.type==="ANNOUNCED"&&s.info?.rdns===this.wallet?.rdns),n=e.find(s=>s.type==="INJECTED");r?await Pe.connectExternal(r):n&&await Pe.connectExternal(n),qe.close(),Me.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){Me.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};Zf=i8([z("w3m-connecting-wc-browser")],Zf);var s8=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Gf=class extends Lt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),Me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:r}=this.wallet,{redirect:n,href:s}=de.formatNativeUrl(e,this.uri);Pe.setWcLinking({name:r,href:s}),Pe.setRecentWallet(this.wallet),de.openHref(n,"_self")}catch{this.error=!0}}};Gf=s8([z("w3m-connecting-wc-desktop")],Gf);var o8=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Kf=class extends Lt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),Me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:r}=this.wallet,{redirect:n,href:s}=de.formatNativeUrl(e,this.uri);Pe.setWcLinking({name:r,href:s}),Pe.setRecentWallet(this.wallet),de.openHref(n,"_self")}catch{this.error=!0}}onBuffering(){const e=de.isIos();document?.visibilityState==="visible"&&!this.error&&e&&(Pe.setBuffering(!0),setTimeout(()=>{Pe.setBuffering(!1)},5e3))}};Kf=o8([z("w3m-connecting-wc-mobile")],Kf);const a8=lt`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var c8=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Lu=class extends Lt{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),Me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),B`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,r=this.wallet?this.wallet.name:void 0;return Pe.setWcLinking(void 0),Pe.setRecentWallet(this.wallet),B` <wui-qr-code
      size=${e}
      theme=${Kt.state.themeMode}
      uri=${this.uri}
      imageSrc=${Le(rt.getWalletImage(this.wallet))}
      alt=${Le(r)}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return B`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Lu.styles=a8;Lu=c8([z("w3m-connecting-wc-qrcode")],Lu);const l8=lt`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var u8=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Fu=class extends Ae{constructor(){super(...arguments),this.dappImageUrl=je.state.metadata?.icons,this.walletImageUrl=Rt.getConnectedWalletImageUrl()}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return B`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,r){e.animate([{transform:"translateX(0px)"},{transform:r}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Fu.styles=l8;Fu=u8([z("w3m-connecting-siwe")],Fu);var d8=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Qf=class extends Ae{constructor(){if(super(),this.wallet=re.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");Me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return B`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${Le(rt.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Qf=d8([z("w3m-connecting-wc-unsupported")],Qf);var h8=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Yf=class extends Lt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",Me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:r}=this.wallet,{redirect:n,href:s}=de.formatUniversalUrl(e,this.uri);Pe.setWcLinking({name:r,href:s}),Pe.setRecentWallet(this.wallet),de.openHref(n,"_blank")}catch{this.error=!0}}};Yf=h8([z("w3m-connecting-wc-web")],Yf);const f8=lt`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var gl=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};function Jf(){const t=re.state.data?.connector?.name,e=re.state.data?.wallet?.name,r=re.state.data?.network?.name,n=e??t;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:n?`Get ${n}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailWalletWaiting:"Approve Email"}}let ss=class extends Ae{constructor(){super(),this.unsubscribe=[],this.heading=Jf()[re.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(re.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),Pe.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return B`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){Me.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),re.push("WhatIsAWallet")}async onClose(){ot.state.isSiweEnabled&&ot.state.status!=="success"&&await Pe.disconnect(),qe.close()}titleTemplate(){return B`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=re.state,r=e==="Connect",n=e==="ApproveTransaction";return this.showBack&&!n?B`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:B`<wui-icon-link
      data-hidden=${!r}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?B`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){const r=this.shadowRoot?.querySelector("wui-text");if(r){const n=Jf()[e];await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=n,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){const{history:e}=re.state,r=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&r?(await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&r&&(await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){re.state.view==="ConnectingSiwe"?re.push("Connect"):re.goBack()}};ss.styles=[f8];gl([ne()],ss.prototype,"heading",void 0);gl([ne()],ss.prototype,"buffering",void 0);gl([ne()],ss.prototype,"showBack",void 0);ss=gl([z("w3m-header")],ss);var og=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let Wu=class extends Ae{constructor(){super(...arguments),this.data=[]}render(){return B`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>B`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(r=>B`<wui-visual name=${r}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};og([mt({type:Array})],Wu.prototype,"data",void 0);Wu=og([z("w3m-help-widget")],Wu);const p8=lt`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var g8=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let zu=class extends Ae{render(){const{termsConditionsUrl:e,privacyPolicyUrl:r}=je.state;return!e&&!r?null:B`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:r}=je.state;return e&&r?"and":""}termsTemplate(){const{termsConditionsUrl:e}=je.state;return e?B`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=je.state;return e?B`<a href=${e}>Privacy Policy</a>`:null}};zu.styles=[p8];zu=g8([z("w3m-legal-footer")],zu);const m8=lt`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var ag=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let lc=class extends Ae{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:r,play_store:n,chrome_store:s,homepage:i}=this.wallet,o=de.isMobile(),a=de.isIos(),c=de.isAndroid(),l=[r,n,i,s].filter(Boolean).length>1,u=Fe.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!o?B`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>re.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&i?B`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:r&&a?B`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:n&&c?B`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&de.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&de.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&de.openHref(this.wallet.homepage,"_blank")}};lc.styles=[m8];ag([mt({type:Object})],lc.prototype,"wallet",void 0);lc=ag([z("w3m-mobile-download-links")],lc);const w8=lt`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var cg=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};const b8={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let uc=class extends Ae{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=Xe.state.open,this.unsubscribe.push(Xe.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:r}=Xe.state,n=b8[r];return B`
      <wui-snackbar
        message=${e}
        backgroundColor=${n.backgroundColor}
        iconColor=${n.iconColor}
        icon=${n.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>Xe.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};uc.styles=w8;cg([ne()],uc.prototype,"open",void 0);uc=cg([z("w3m-snackbar")],uc);const y8=lt`
  :host {
    padding: var(--wui-spacing-3xs) 0;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
    margin-bottom: var(--wui-spacing-m);
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`;var ml=function(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i};let os=class extends Ae{constructor(){super(),this.unsubscribe=[],this.formRef=rg(),this.connectors=Je.state.connectors,this.email="",this.loading=!1,this.unsubscribe.push(Je.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{e.key==="Enter"&&this.onSubmitEmail(e)})}render(){const e=this.connectors.length>1,r=this.connectors.find(s=>s.type==="EMAIL"),n=!this.loading&&this.email.length>3;return r?B`
      <form ${ng(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
        >
        </wui-email-input>

        ${n&&e?B`
              <wui-icon-link
                size="sm"
                icon="chevronRight"
                iconcolor="accent-100"
                @click=${this.onSubmitEmail.bind(this)}
              >
              </wui-icon-link>
            `:null}
        ${this.loading&&e?B`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}

        <input type="submit" hidden />
      </form>

      ${e?B`<wui-separator text="or"></wui-separator>`:B`<wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!n}
            .loading=${this.loading}
          >
            Continue
          </wui-button>`}
    `:null}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const r=Je.getEmailConnector();if(!r)throw new Error("w3m-email-login-widget: Email connector not found");const{action:n}=await r.provider.connectEmail({email:this.email});n==="VERIFY_OTP"?re.push("EmailVerifyOtp",{email:this.email}):n==="VERIFY_DEVICE"&&re.push("EmailVerifyDevice",{email:this.email})}catch(r){Xe.showError(r)}finally{this.loading=!1}}};os.styles=y8;ml([ne()],os.prototype,"connectors",void 0);ml([ne()],os.prototype,"email",void 0);ml([ne()],os.prototype,"loading",void 0);os=ml([z("w3m-email-login-widget")],os);let Xf=!1;class v8{constructor(e){this.initPromise=void 0,this.setIsConnected=r=>{Ue.setIsConnected(r)},this.setCaipAddress=r=>{Ue.setCaipAddress(r)},this.setBalance=(r,n)=>{Ue.setBalance(r,n)},this.setProfileName=r=>{Ue.setProfileName(r)},this.setProfileImage=r=>{Ue.setProfileImage(r)},this.resetAccount=()=>{Ue.resetAccount()},this.setCaipNetwork=r=>{nt.setCaipNetwork(r)},this.getCaipNetwork=()=>nt.state.caipNetwork,this.setRequestedCaipNetworks=r=>{nt.setRequestedCaipNetworks(r)},this.getApprovedCaipNetworksData=()=>nt.getApprovedCaipNetworksData(),this.resetNetwork=()=>{nt.resetNetwork()},this.setConnectors=r=>{Je.setConnectors(r)},this.addConnector=r=>{Je.addConnector(r)},this.getConnectors=()=>Je.getConnectors(),this.resetWcConnection=()=>{Pe.resetWcConnection()},this.fetchIdentity=r=>qp.fetchIdentity(r),this.setAddressExplorerUrl=r=>{Ue.setAddressExplorerUrl(r)},this.setSIWENonce=r=>{ot.setNonce(r)},this.setSIWESession=r=>{ot.setSession(r)},this.setSIWEStatus=r=>{ot.setStatus(r)},this.setSIWEMessage=r=>{ot.setMessage(r)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),qe.open(e)}async close(){await this.initOrContinue(),qe.close()}setLoading(e){qe.setLoading(e)}getThemeMode(){return Kt.state.themeMode}getThemeVariables(){return Kt.state.themeVariables}setThemeMode(e){Kt.setThemeMode(e),Xd(Kt.state.themeMode)}setThemeVariables(e){Kt.setThemeVariables(e),n1(Kt.state.themeVariables)}subscribeTheme(e){return Kt.subscribe(e)}getState(){return{...Wi.state}}subscribeState(e){return Wi.subscribe(e)}getEvent(){return{...Me.state}}subscribeEvents(e){return Me.subscribe(e)}subscribeSIWEState(e){return ot.subscribe(e)}initControllers(e){if(nt.setClient(e.networkControllerClient),nt.setDefaultCaipNetwork(e.defaultChain),je.setProjectId(e.projectId),je.setIncludeWalletIds(e.includeWalletIds),je.setExcludeWalletIds(e.excludeWalletIds),je.setFeaturedWalletIds(e.featuredWalletIds),je.setTokens(e.tokens),je.setTermsConditionsUrl(e.termsConditionsUrl),je.setPrivacyPolicyUrl(e.privacyPolicyUrl),je.setCustomWallets(e.customWallets),je.setEnableAnalytics(e.enableAnalytics),je.setSdkVersion(e._sdkVersion),Pe.setClient(e.connectionControllerClient),e.siweControllerClient){const r=e.siweControllerClient;ot.setSIWEClient(r)}e.metadata&&je.setMetadata(e.metadata),e.themeMode&&Kt.setThemeMode(e.themeMode),e.themeVariables&&Kt.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!Xf&&de.isClient()&&(Xf=!0,this.initPromise=new Promise(async e=>{await Promise.all([Zn(()=>Promise.resolve().then(()=>Y6),void 0),Zn(()=>Promise.resolve().then(()=>C4),void 0)]);const r=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",r),e()})),this.initPromise}}const we={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.5.3"},Lr={ConnectorExplorerIds:{[we.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[we.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[we.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[we.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[we.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[we.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[we.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[we.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[we.INJECTED_CONNECTOR_ID]:"Browser Wallet",[we.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[we.COINBASE_CONNECTOR_ID]:"Coinbase",[we.LEDGER_CONNECTOR_ID]:"Ledger",[we.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[we.INJECTED_CONNECTOR_ID]:"INJECTED",[we.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[we.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[we.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},Ei={caipNetworkIdToNumber(t){return t?Number(t.split(":")[1]):void 0},getCaipTokens(t){if(!t)return;const e={};return Object.entries(t).forEach(([r,n])=>{e[`${we.EIP155}:${r}`]=n}),e}};function x8(t){if(t)return{id:`${we.EIP155}:${t.id}`,name:t.name,imageId:Lr.EIP155NetworkImageIds[t.id]}}const _8="wagmi.wallet";class C8 extends v8{constructor(e){const{wagmiConfig:r,siweConfig:n,chains:s,defaultChain:i,tokens:o,_sdkVersion:a,...c}=e;if(!r)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!c.projectId)throw new Error("web3modal:constructor - projectId is undefined");const l={switchCaipNetwork:async f=>{const m=Ei.caipNetworkIdToNumber(f?.id);m&&await Py({chainId:m})},async getApprovedCaipNetworksData(){const f=localStorage.getItem(_8);if(f?.includes(we.EMAIL_CONNECTOR_ID))return{supportsAllNetworks:!1,approvedCaipNetworkIds:Lr.WalletConnectRpcChainIds.map(m=>`${we.EIP155}:${m}`)};if(f?.includes(we.WALLET_CONNECT_CONNECTOR_ID)){const m=r.connectors.find(T=>T.id===we.WALLET_CONNECT_CONNECTOR_ID);if(!m)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const w=(await m.getProvider()).signer?.session?.namespaces,_=w?.[we.EIP155]?.methods,v=w?.[we.EIP155]?.chains;return{supportsAllNetworks:_?.includes(we.ADD_CHAIN_METHOD),approvedCaipNetworkIds:v}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},u={connectWalletConnect:async f=>{const m=r.connectors.find(w=>w.id===we.WALLET_CONNECT_CONNECTOR_ID);if(!m)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");m.on("message",w=>{w.type==="display_uri"&&(f(w.data),m.removeAllListeners())});const g=Ei.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await af({connector:m,chainId:g})},connectExternal:async({id:f,provider:m,info:g})=>{const w=r.connectors.find(v=>v.id===f);if(!w)throw new Error("connectionControllerClient:connectExternal - connector is undefined");m&&g&&w.id===we.EIP6963_CONNECTOR_ID&&w.setEip6963Wallet?.({provider:m,info:g});const _=Ei.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await af({connector:w,chainId:_})},checkInstalled:f=>{const m=this.getConnectors().filter(w=>w.type==="ANNOUNCED"),g=this.getConnectors().find(w=>w.type==="INJECTED");return f?m.length&&f.some(_=>m.some(v=>v.info?.rdns===_))?!0:g&&window?.ethereum?f.some(w=>!!window.ethereum?.[String(w)]):!1:!!window.ethereum},disconnect:async()=>{await _y(),n?.options?.signOutOnDisconnect&&await n.signOut()},signMessage:async f=>Oy({message:f})};super({networkControllerClient:l,connectionControllerClient:u,siweControllerClient:n,defaultChain:x8(i),tokens:Ei.getCaipTokens(o),_sdkVersion:a??`html-wagmi-${we.VERSION}`,...c}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(s),this.syncConnectors(r),this.syncEmailConnector(r),this.listenEIP6963Connector(r),this.listenEmailConnector(r),jp(()=>this.syncAccount()),Lp(()=>this.syncNetwork())}getState(){const e=super.getState();return{...e,selectedNetworkId:Ei.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(r=>e({...r,selectedNetworkId:Ei.caipNetworkIdToNumber(r.selectedNetworkId)}))}syncRequestedNetworks(e){const r=e?.map(n=>({id:`${we.EIP155}:${n.id}`,name:n.name,imageId:Lr.EIP155NetworkImageIds[n.id],imageUrl:this.options?.chainImages?.[n.id]}));this.setRequestedCaipNetworks(r??[])}async syncAccount(){const{address:e,isConnected:r}=za(),{chain:n}=oo();if(this.resetAccount(),r&&e&&n){const s=`${we.EIP155}:${n.id}:${e}`;this.setIsConnected(r),this.setCaipAddress(s),await Promise.all([this.syncProfile(e,n),this.syncBalance(e,n),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!r&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){const{address:e,isConnected:r}=za(),{chain:n}=oo();if(n){const s=String(n.id),i=`${we.EIP155}:${s}`;if(this.setCaipNetwork({id:i,name:n.name,imageId:Lr.EIP155NetworkImageIds[n.id],imageUrl:this.options?.chainImages?.[n.id]}),r&&e){const o=`${we.EIP155}:${n.id}:${e}`;if(this.setCaipAddress(o),n.blockExplorers?.default?.url){const a=`${n.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(a)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,n),await this.syncBalance(e,n))}}}async syncProfile(e,r){if(r.id!==Fd.id){this.setProfileName(null),this.setProfileImage(null);return}try{const{name:n,avatar:s}=await this.fetchIdentity({caipChainId:`${we.EIP155}:${r.id}`,address:e});this.setProfileName(n),this.setProfileImage(s)}catch{const n=await ky({address:e,chainId:r.id});if(n){this.setProfileName(n);const s=await Ny({name:n,chainId:r.id});s&&this.setProfileImage(s)}}}async syncBalance(e,r){const n=await Ry({address:e,chainId:r.id,token:this.options?.tokens?.[r.id]?.address});this.setBalance(n.formatted,n.symbol)}syncConnectors(e){const r=[];e.connectors.forEach(({id:n,name:s})=>{[we.EIP6963_CONNECTOR_ID,we.EMAIL_CONNECTOR_ID].includes(n)||r.push({id:n,explorerId:Lr.ConnectorExplorerIds[n],imageId:Lr.ConnectorImageIds[n],imageUrl:this.options?.connectorImages?.[n],name:Lr.ConnectorNamesMap[n]??s,type:Lr.ConnectorTypesMap[n]??"EXTERNAL"})}),this.setConnectors(r)}async syncEmailConnector(e){const r=e.connectors.find(({id:n})=>n==="w3mEmail");if(r){const n=await r.getProvider();this.addConnector({id:we.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:n})}}eip6963EventHandler(e,r){if(r.detail){const{info:n,provider:s}=r.detail;this.getConnectors().find(a=>a.name===n.name)||(this.addConnector({id:we.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:n.icon??this.options?.connectorImages?.[we.EIP6963_CONNECTOR_ID],name:n.name,provider:s,info:n}),e.isAuthorized({info:n,provider:s}))}}listenEIP6963Connector(e){const r=e.connectors.find(n=>n.id===we.EIP6963_CONNECTOR_ID);if(typeof window<"u"&&r){const n=this.eip6963EventHandler.bind(this,r);window.addEventListener(we.EIP6963_ANNOUNCE_EVENT,n),window.dispatchEvent(new Event(we.EIP6963_REQUEST_EVENT))}}async listenEmailConnector(e){const r=e.connectors.find(n=>n.id===we.EMAIL_CONNECTOR_ID);if(typeof window<"u"&&r){super.setLoading(!0);const n=await r.getProvider(),s=n.getLoginEmailUsed();super.setLoading(s),n.onRpcRequest(()=>{super.open({view:"ApproveTransaction"})}),n.onRpcResponse(()=>{super.close()}),n.onIsConnected(()=>{super.setLoading(!1)})}}}var va=function(t,e,r,n,s){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?s.call(t,r):s?s.value=r:e.set(t,r),r},xa=function(t,e,r,n){if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!n:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(t):n?n.value:e.get(t)},Oa,tn;const _a="connectedRdns";class E8 extends zd{constructor(e){super({chains:e.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",Oa.set(this,void 0),tn.set(this,void 0),this.onAccountsChanged=r=>{r.length===0?(this.storage?.removeItem(_a),this.emit("disconnect")):r[0]&&this.emit("change",{account:Ht(r[0])})},va(this,Oa,this.options.getProvider(),"f")}async connect(e){const r=await super.connect(e);return xa(this,tn,"f")&&this.storage?.setItem(_a,xa(this,tn,"f").info.rdns),r}async disconnect(){await super.disconnect(),this.storage?.removeItem(_a),va(this,tn,void 0,"f")}async isAuthorized(e){const r=this.storage?.getItem(_a);if(r){if(!e||r!==e.info.rdns)return!0;va(this,tn,e,"f")}return super.isAuthorized()}async getProvider(){return Promise.resolve(xa(this,tn,"f")?.provider??xa(this,Oa,"f"))}setEip6963Wallet(e){va(this,tn,e,"f")}}Oa=new WeakMap,tn=new WeakMap;var lg={},wl={};wl.byteLength=$8;wl.toByteArray=I8;wl.fromByteArray=P8;var xr=[],Qt=[],S8=typeof Uint8Array<"u"?Uint8Array:Array,Jl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Si=0,A8=Jl.length;Si<A8;++Si)xr[Si]=Jl[Si],Qt[Jl.charCodeAt(Si)]=Si;Qt[45]=62;Qt[95]=63;function ug(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");r===-1&&(r=e);var n=r===e?0:4-r%4;return[r,n]}function $8(t){var e=ug(t),r=e[0],n=e[1];return(r+n)*3/4-n}function T8(t,e,r){return(e+r)*3/4-r}function I8(t){var e,r=ug(t),n=r[0],s=r[1],i=new S8(T8(t,n,s)),o=0,a=s>0?n-4:n,c;for(c=0;c<a;c+=4)e=Qt[t.charCodeAt(c)]<<18|Qt[t.charCodeAt(c+1)]<<12|Qt[t.charCodeAt(c+2)]<<6|Qt[t.charCodeAt(c+3)],i[o++]=e>>16&255,i[o++]=e>>8&255,i[o++]=e&255;return s===2&&(e=Qt[t.charCodeAt(c)]<<2|Qt[t.charCodeAt(c+1)]>>4,i[o++]=e&255),s===1&&(e=Qt[t.charCodeAt(c)]<<10|Qt[t.charCodeAt(c+1)]<<4|Qt[t.charCodeAt(c+2)]>>2,i[o++]=e>>8&255,i[o++]=e&255),i}function R8(t){return xr[t>>18&63]+xr[t>>12&63]+xr[t>>6&63]+xr[t&63]}function O8(t,e,r){for(var n,s=[],i=e;i<r;i+=3)n=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(t[i+2]&255),s.push(R8(n));return s.join("")}function P8(t){for(var e,r=t.length,n=r%3,s=[],i=16383,o=0,a=r-n;o<a;o+=i)s.push(O8(t,o,o+i>a?a:o+i));return n===1?(e=t[r-1],s.push(xr[e>>2]+xr[e<<4&63]+"==")):n===2&&(e=(t[r-2]<<8)+t[r-1],s.push(xr[e>>10]+xr[e>>4&63]+xr[e<<2&63]+"=")),s.join("")}var Ch={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Ch.read=function(t,e,r,n,s){var i,o,a=s*8-n-1,c=(1<<a)-1,l=c>>1,u=-7,f=r?s-1:0,m=r?-1:1,g=t[e+f];for(f+=m,i=g&(1<<-u)-1,g>>=-u,u+=a;u>0;i=i*256+t[e+f],f+=m,u-=8);for(o=i&(1<<-u)-1,i>>=-u,u+=n;u>0;o=o*256+t[e+f],f+=m,u-=8);if(i===0)i=1-l;else{if(i===c)return o?NaN:(g?-1:1)*(1/0);o=o+Math.pow(2,n),i=i-l}return(g?-1:1)*o*Math.pow(2,i-n)};Ch.write=function(t,e,r,n,s,i){var o,a,c,l=i*8-s-1,u=(1<<l)-1,f=u>>1,m=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=n?0:i-1,w=n?1:-1,_=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=u):(o=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-o))<1&&(o--,c*=2),o+f>=1?e+=m/c:e+=m*Math.pow(2,1-f),e*c>=2&&(o++,c/=2),o+f>=u?(a=0,o=u):o+f>=1?(a=(e*c-1)*Math.pow(2,s),o=o+f):(a=e*Math.pow(2,f-1)*Math.pow(2,s),o=0));s>=8;t[r+g]=a&255,g+=w,a/=256,s-=8);for(o=o<<s|a,l+=s;l>0;t[r+g]=o&255,g+=w,o/=256,l-=8);t[r+g-w]|=_*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(t){const e=wl,r=Ch,n=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=a,t.SlowBuffer=b,t.INSPECT_MAX_BYTES=50;const s=2147483647;t.kMaxLength=s,a.TYPED_ARRAY_SUPPORT=i(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function i(){try{const y=new Uint8Array(1),d={foo:function(){return 42}};return Object.setPrototypeOf(d,Uint8Array.prototype),Object.setPrototypeOf(y,d),y.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function o(y){if(y>s)throw new RangeError('The value "'+y+'" is invalid for option "size"');const d=new Uint8Array(y);return Object.setPrototypeOf(d,a.prototype),d}function a(y,d,p){if(typeof y=="number"){if(typeof d=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return f(y)}return c(y,d,p)}a.poolSize=8192;function c(y,d,p){if(typeof y=="string")return m(y,d);if(ArrayBuffer.isView(y))return w(y);if(y==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof y);if(ze(y,ArrayBuffer)||y&&ze(y.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ze(y,SharedArrayBuffer)||y&&ze(y.buffer,SharedArrayBuffer)))return _(y,d,p);if(typeof y=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const $=y.valueOf&&y.valueOf();if($!=null&&$!==y)return a.from($,d,p);const I=v(y);if(I)return I;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof y[Symbol.toPrimitive]=="function")return a.from(y[Symbol.toPrimitive]("string"),d,p);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof y)}a.from=function(y,d,p){return c(y,d,p)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function l(y){if(typeof y!="number")throw new TypeError('"size" argument must be of type number');if(y<0)throw new RangeError('The value "'+y+'" is invalid for option "size"')}function u(y,d,p){return l(y),y<=0?o(y):d!==void 0?typeof p=="string"?o(y).fill(d,p):o(y).fill(d):o(y)}a.alloc=function(y,d,p){return u(y,d,p)};function f(y){return l(y),o(y<0?0:T(y)|0)}a.allocUnsafe=function(y){return f(y)},a.allocUnsafeSlow=function(y){return f(y)};function m(y,d){if((typeof d!="string"||d==="")&&(d="utf8"),!a.isEncoding(d))throw new TypeError("Unknown encoding: "+d);const p=E(y,d)|0;let $=o(p);const I=$.write(y,d);return I!==p&&($=$.slice(0,I)),$}function g(y){const d=y.length<0?0:T(y.length)|0,p=o(d);for(let $=0;$<d;$+=1)p[$]=y[$]&255;return p}function w(y){if(ze(y,Uint8Array)){const d=new Uint8Array(y);return _(d.buffer,d.byteOffset,d.byteLength)}return g(y)}function _(y,d,p){if(d<0||y.byteLength<d)throw new RangeError('"offset" is outside of buffer bounds');if(y.byteLength<d+(p||0))throw new RangeError('"length" is outside of buffer bounds');let $;return d===void 0&&p===void 0?$=new Uint8Array(y):p===void 0?$=new Uint8Array(y,d):$=new Uint8Array(y,d,p),Object.setPrototypeOf($,a.prototype),$}function v(y){if(a.isBuffer(y)){const d=T(y.length)|0,p=o(d);return p.length===0||y.copy(p,0,0,d),p}if(y.length!==void 0)return typeof y.length!="number"||ut(y.length)?o(0):g(y);if(y.type==="Buffer"&&Array.isArray(y.data))return g(y.data)}function T(y){if(y>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return y|0}function b(y){return+y!=y&&(y=0),a.alloc(+y)}a.isBuffer=function(d){return d!=null&&d._isBuffer===!0&&d!==a.prototype},a.compare=function(d,p){if(ze(d,Uint8Array)&&(d=a.from(d,d.offset,d.byteLength)),ze(p,Uint8Array)&&(p=a.from(p,p.offset,p.byteLength)),!a.isBuffer(d)||!a.isBuffer(p))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(d===p)return 0;let $=d.length,I=p.length;for(let O=0,N=Math.min($,I);O<N;++O)if(d[O]!==p[O]){$=d[O],I=p[O];break}return $<I?-1:I<$?1:0},a.isEncoding=function(d){switch(String(d).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(d,p){if(!Array.isArray(d))throw new TypeError('"list" argument must be an Array of Buffers');if(d.length===0)return a.alloc(0);let $;if(p===void 0)for(p=0,$=0;$<d.length;++$)p+=d[$].length;const I=a.allocUnsafe(p);let O=0;for($=0;$<d.length;++$){let N=d[$];if(ze(N,Uint8Array))O+N.length>I.length?(a.isBuffer(N)||(N=a.from(N)),N.copy(I,O)):Uint8Array.prototype.set.call(I,N,O);else if(a.isBuffer(N))N.copy(I,O);else throw new TypeError('"list" argument must be an Array of Buffers');O+=N.length}return I};function E(y,d){if(a.isBuffer(y))return y.length;if(ArrayBuffer.isView(y)||ze(y,ArrayBuffer))return y.byteLength;if(typeof y!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof y);const p=y.length,$=arguments.length>2&&arguments[2]===!0;if(!$&&p===0)return 0;let I=!1;for(;;)switch(d){case"ascii":case"latin1":case"binary":return p;case"utf8":case"utf-8":return Xr(y).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return p*2;case"hex":return p>>>1;case"base64":return pt(y).length;default:if(I)return $?-1:Xr(y).length;d=(""+d).toLowerCase(),I=!0}}a.byteLength=E;function x(y,d,p){let $=!1;if((d===void 0||d<0)&&(d=0),d>this.length||((p===void 0||p>this.length)&&(p=this.length),p<=0)||(p>>>=0,d>>>=0,p<=d))return"";for(y||(y="utf8");;)switch(y){case"hex":return J(this,d,p);case"utf8":case"utf-8":return W(this,d,p);case"ascii":return U(this,d,p);case"latin1":case"binary":return L(this,d,p);case"base64":return Y(this,d,p);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return te(this,d,p);default:if($)throw new TypeError("Unknown encoding: "+y);y=(y+"").toLowerCase(),$=!0}}a.prototype._isBuffer=!0;function C(y,d,p){const $=y[d];y[d]=y[p],y[p]=$}a.prototype.swap16=function(){const d=this.length;if(d%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let p=0;p<d;p+=2)C(this,p,p+1);return this},a.prototype.swap32=function(){const d=this.length;if(d%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let p=0;p<d;p+=4)C(this,p,p+3),C(this,p+1,p+2);return this},a.prototype.swap64=function(){const d=this.length;if(d%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let p=0;p<d;p+=8)C(this,p,p+7),C(this,p+1,p+6),C(this,p+2,p+5),C(this,p+3,p+4);return this},a.prototype.toString=function(){const d=this.length;return d===0?"":arguments.length===0?W(this,0,d):x.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(d){if(!a.isBuffer(d))throw new TypeError("Argument must be a Buffer");return this===d?!0:a.compare(this,d)===0},a.prototype.inspect=function(){let d="";const p=t.INSPECT_MAX_BYTES;return d=this.toString("hex",0,p).replace(/(.{2})/g,"$1 ").trim(),this.length>p&&(d+=" ... "),"<Buffer "+d+">"},n&&(a.prototype[n]=a.prototype.inspect),a.prototype.compare=function(d,p,$,I,O){if(ze(d,Uint8Array)&&(d=a.from(d,d.offset,d.byteLength)),!a.isBuffer(d))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof d);if(p===void 0&&(p=0),$===void 0&&($=d?d.length:0),I===void 0&&(I=0),O===void 0&&(O=this.length),p<0||$>d.length||I<0||O>this.length)throw new RangeError("out of range index");if(I>=O&&p>=$)return 0;if(I>=O)return-1;if(p>=$)return 1;if(p>>>=0,$>>>=0,I>>>=0,O>>>=0,this===d)return 0;let N=O-I,ae=$-p;const Te=Math.min(N,ae),Ge=this.slice(I,O),tt=d.slice(p,$);for(let He=0;He<Te;++He)if(Ge[He]!==tt[He]){N=Ge[He],ae=tt[He];break}return N<ae?-1:ae<N?1:0};function A(y,d,p,$,I){if(y.length===0)return-1;if(typeof p=="string"?($=p,p=0):p>2147483647?p=2147483647:p<-2147483648&&(p=-2147483648),p=+p,ut(p)&&(p=I?0:y.length-1),p<0&&(p=y.length+p),p>=y.length){if(I)return-1;p=y.length-1}else if(p<0)if(I)p=0;else return-1;if(typeof d=="string"&&(d=a.from(d,$)),a.isBuffer(d))return d.length===0?-1:h(y,d,p,$,I);if(typeof d=="number")return d=d&255,typeof Uint8Array.prototype.indexOf=="function"?I?Uint8Array.prototype.indexOf.call(y,d,p):Uint8Array.prototype.lastIndexOf.call(y,d,p):h(y,[d],p,$,I);throw new TypeError("val must be string, number or Buffer")}function h(y,d,p,$,I){let O=1,N=y.length,ae=d.length;if($!==void 0&&($=String($).toLowerCase(),$==="ucs2"||$==="ucs-2"||$==="utf16le"||$==="utf-16le")){if(y.length<2||d.length<2)return-1;O=2,N/=2,ae/=2,p/=2}function Te(tt,He){return O===1?tt[He]:tt.readUInt16BE(He*O)}let Ge;if(I){let tt=-1;for(Ge=p;Ge<N;Ge++)if(Te(y,Ge)===Te(d,tt===-1?0:Ge-tt)){if(tt===-1&&(tt=Ge),Ge-tt+1===ae)return tt*O}else tt!==-1&&(Ge-=Ge-tt),tt=-1}else for(p+ae>N&&(p=N-ae),Ge=p;Ge>=0;Ge--){let tt=!0;for(let He=0;He<ae;He++)if(Te(y,Ge+He)!==Te(d,He)){tt=!1;break}if(tt)return Ge}return-1}a.prototype.includes=function(d,p,$){return this.indexOf(d,p,$)!==-1},a.prototype.indexOf=function(d,p,$){return A(this,d,p,$,!0)},a.prototype.lastIndexOf=function(d,p,$){return A(this,d,p,$,!1)};function S(y,d,p,$){p=Number(p)||0;const I=y.length-p;$?($=Number($),$>I&&($=I)):$=I;const O=d.length;$>O/2&&($=O/2);let N;for(N=0;N<$;++N){const ae=parseInt(d.substr(N*2,2),16);if(ut(ae))return N;y[p+N]=ae}return N}function P(y,d,p,$){return st(Xr(d,y.length-p),y,p,$)}function D(y,d,p,$){return st(vs(d),y,p,$)}function k(y,d,p,$){return st(pt(d),y,p,$)}function K(y,d,p,$){return st(ha(d,y.length-p),y,p,$)}a.prototype.write=function(d,p,$,I){if(p===void 0)I="utf8",$=this.length,p=0;else if($===void 0&&typeof p=="string")I=p,$=this.length,p=0;else if(isFinite(p))p=p>>>0,isFinite($)?($=$>>>0,I===void 0&&(I="utf8")):(I=$,$=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const O=this.length-p;if(($===void 0||$>O)&&($=O),d.length>0&&($<0||p<0)||p>this.length)throw new RangeError("Attempt to write outside buffer bounds");I||(I="utf8");let N=!1;for(;;)switch(I){case"hex":return S(this,d,p,$);case"utf8":case"utf-8":return P(this,d,p,$);case"ascii":case"latin1":case"binary":return D(this,d,p,$);case"base64":return k(this,d,p,$);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return K(this,d,p,$);default:if(N)throw new TypeError("Unknown encoding: "+I);I=(""+I).toLowerCase(),N=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Y(y,d,p){return d===0&&p===y.length?e.fromByteArray(y):e.fromByteArray(y.slice(d,p))}function W(y,d,p){p=Math.min(y.length,p);const $=[];let I=d;for(;I<p;){const O=y[I];let N=null,ae=O>239?4:O>223?3:O>191?2:1;if(I+ae<=p){let Te,Ge,tt,He;switch(ae){case 1:O<128&&(N=O);break;case 2:Te=y[I+1],(Te&192)===128&&(He=(O&31)<<6|Te&63,He>127&&(N=He));break;case 3:Te=y[I+1],Ge=y[I+2],(Te&192)===128&&(Ge&192)===128&&(He=(O&15)<<12|(Te&63)<<6|Ge&63,He>2047&&(He<55296||He>57343)&&(N=He));break;case 4:Te=y[I+1],Ge=y[I+2],tt=y[I+3],(Te&192)===128&&(Ge&192)===128&&(tt&192)===128&&(He=(O&15)<<18|(Te&63)<<12|(Ge&63)<<6|tt&63,He>65535&&He<1114112&&(N=He))}}N===null?(N=65533,ae=1):N>65535&&(N-=65536,$.push(N>>>10&1023|55296),N=56320|N&1023),$.push(N),I+=ae}return M($)}const j=4096;function M(y){const d=y.length;if(d<=j)return String.fromCharCode.apply(String,y);let p="",$=0;for(;$<d;)p+=String.fromCharCode.apply(String,y.slice($,$+=j));return p}function U(y,d,p){let $="";p=Math.min(y.length,p);for(let I=d;I<p;++I)$+=String.fromCharCode(y[I]&127);return $}function L(y,d,p){let $="";p=Math.min(y.length,p);for(let I=d;I<p;++I)$+=String.fromCharCode(y[I]);return $}function J(y,d,p){const $=y.length;(!d||d<0)&&(d=0),(!p||p<0||p>$)&&(p=$);let I="";for(let O=d;O<p;++O)I+=wt[y[O]];return I}function te(y,d,p){const $=y.slice(d,p);let I="";for(let O=0;O<$.length-1;O+=2)I+=String.fromCharCode($[O]+$[O+1]*256);return I}a.prototype.slice=function(d,p){const $=this.length;d=~~d,p=p===void 0?$:~~p,d<0?(d+=$,d<0&&(d=0)):d>$&&(d=$),p<0?(p+=$,p<0&&(p=0)):p>$&&(p=$),p<d&&(p=d);const I=this.subarray(d,p);return Object.setPrototypeOf(I,a.prototype),I};function X(y,d,p){if(y%1!==0||y<0)throw new RangeError("offset is not uint");if(y+d>p)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(d,p,$){d=d>>>0,p=p>>>0,$||X(d,p,this.length);let I=this[d],O=1,N=0;for(;++N<p&&(O*=256);)I+=this[d+N]*O;return I},a.prototype.readUintBE=a.prototype.readUIntBE=function(d,p,$){d=d>>>0,p=p>>>0,$||X(d,p,this.length);let I=this[d+--p],O=1;for(;p>0&&(O*=256);)I+=this[d+--p]*O;return I},a.prototype.readUint8=a.prototype.readUInt8=function(d,p){return d=d>>>0,p||X(d,1,this.length),this[d]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(d,p){return d=d>>>0,p||X(d,2,this.length),this[d]|this[d+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(d,p){return d=d>>>0,p||X(d,2,this.length),this[d]<<8|this[d+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(d,p){return d=d>>>0,p||X(d,4,this.length),(this[d]|this[d+1]<<8|this[d+2]<<16)+this[d+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(d,p){return d=d>>>0,p||X(d,4,this.length),this[d]*16777216+(this[d+1]<<16|this[d+2]<<8|this[d+3])},a.prototype.readBigUInt64LE=Ze(function(d){d=d>>>0,Oe(d,"offset");const p=this[d],$=this[d+7];(p===void 0||$===void 0)&&Ft(d,this.length-8);const I=p+this[++d]*2**8+this[++d]*2**16+this[++d]*2**24,O=this[++d]+this[++d]*2**8+this[++d]*2**16+$*2**24;return BigInt(I)+(BigInt(O)<<BigInt(32))}),a.prototype.readBigUInt64BE=Ze(function(d){d=d>>>0,Oe(d,"offset");const p=this[d],$=this[d+7];(p===void 0||$===void 0)&&Ft(d,this.length-8);const I=p*2**24+this[++d]*2**16+this[++d]*2**8+this[++d],O=this[++d]*2**24+this[++d]*2**16+this[++d]*2**8+$;return(BigInt(I)<<BigInt(32))+BigInt(O)}),a.prototype.readIntLE=function(d,p,$){d=d>>>0,p=p>>>0,$||X(d,p,this.length);let I=this[d],O=1,N=0;for(;++N<p&&(O*=256);)I+=this[d+N]*O;return O*=128,I>=O&&(I-=Math.pow(2,8*p)),I},a.prototype.readIntBE=function(d,p,$){d=d>>>0,p=p>>>0,$||X(d,p,this.length);let I=p,O=1,N=this[d+--I];for(;I>0&&(O*=256);)N+=this[d+--I]*O;return O*=128,N>=O&&(N-=Math.pow(2,8*p)),N},a.prototype.readInt8=function(d,p){return d=d>>>0,p||X(d,1,this.length),this[d]&128?(255-this[d]+1)*-1:this[d]},a.prototype.readInt16LE=function(d,p){d=d>>>0,p||X(d,2,this.length);const $=this[d]|this[d+1]<<8;return $&32768?$|4294901760:$},a.prototype.readInt16BE=function(d,p){d=d>>>0,p||X(d,2,this.length);const $=this[d+1]|this[d]<<8;return $&32768?$|4294901760:$},a.prototype.readInt32LE=function(d,p){return d=d>>>0,p||X(d,4,this.length),this[d]|this[d+1]<<8|this[d+2]<<16|this[d+3]<<24},a.prototype.readInt32BE=function(d,p){return d=d>>>0,p||X(d,4,this.length),this[d]<<24|this[d+1]<<16|this[d+2]<<8|this[d+3]},a.prototype.readBigInt64LE=Ze(function(d){d=d>>>0,Oe(d,"offset");const p=this[d],$=this[d+7];(p===void 0||$===void 0)&&Ft(d,this.length-8);const I=this[d+4]+this[d+5]*2**8+this[d+6]*2**16+($<<24);return(BigInt(I)<<BigInt(32))+BigInt(p+this[++d]*2**8+this[++d]*2**16+this[++d]*2**24)}),a.prototype.readBigInt64BE=Ze(function(d){d=d>>>0,Oe(d,"offset");const p=this[d],$=this[d+7];(p===void 0||$===void 0)&&Ft(d,this.length-8);const I=(p<<24)+this[++d]*2**16+this[++d]*2**8+this[++d];return(BigInt(I)<<BigInt(32))+BigInt(this[++d]*2**24+this[++d]*2**16+this[++d]*2**8+$)}),a.prototype.readFloatLE=function(d,p){return d=d>>>0,p||X(d,4,this.length),r.read(this,d,!0,23,4)},a.prototype.readFloatBE=function(d,p){return d=d>>>0,p||X(d,4,this.length),r.read(this,d,!1,23,4)},a.prototype.readDoubleLE=function(d,p){return d=d>>>0,p||X(d,8,this.length),r.read(this,d,!0,52,8)},a.prototype.readDoubleBE=function(d,p){return d=d>>>0,p||X(d,8,this.length),r.read(this,d,!1,52,8)};function ie(y,d,p,$,I,O){if(!a.isBuffer(y))throw new TypeError('"buffer" argument must be a Buffer instance');if(d>I||d<O)throw new RangeError('"value" argument is out of bounds');if(p+$>y.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(d,p,$,I){if(d=+d,p=p>>>0,$=$>>>0,!I){const ae=Math.pow(2,8*$)-1;ie(this,d,p,$,ae,0)}let O=1,N=0;for(this[p]=d&255;++N<$&&(O*=256);)this[p+N]=d/O&255;return p+$},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(d,p,$,I){if(d=+d,p=p>>>0,$=$>>>0,!I){const ae=Math.pow(2,8*$)-1;ie(this,d,p,$,ae,0)}let O=$-1,N=1;for(this[p+O]=d&255;--O>=0&&(N*=256);)this[p+O]=d/N&255;return p+$},a.prototype.writeUint8=a.prototype.writeUInt8=function(d,p,$){return d=+d,p=p>>>0,$||ie(this,d,p,1,255,0),this[p]=d&255,p+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(d,p,$){return d=+d,p=p>>>0,$||ie(this,d,p,2,65535,0),this[p]=d&255,this[p+1]=d>>>8,p+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(d,p,$){return d=+d,p=p>>>0,$||ie(this,d,p,2,65535,0),this[p]=d>>>8,this[p+1]=d&255,p+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(d,p,$){return d=+d,p=p>>>0,$||ie(this,d,p,4,4294967295,0),this[p+3]=d>>>24,this[p+2]=d>>>16,this[p+1]=d>>>8,this[p]=d&255,p+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(d,p,$){return d=+d,p=p>>>0,$||ie(this,d,p,4,4294967295,0),this[p]=d>>>24,this[p+1]=d>>>16,this[p+2]=d>>>8,this[p+3]=d&255,p+4};function V(y,d,p,$,I){Ne(d,$,I,y,p,7);let O=Number(d&BigInt(4294967295));y[p++]=O,O=O>>8,y[p++]=O,O=O>>8,y[p++]=O,O=O>>8,y[p++]=O;let N=Number(d>>BigInt(32)&BigInt(4294967295));return y[p++]=N,N=N>>8,y[p++]=N,N=N>>8,y[p++]=N,N=N>>8,y[p++]=N,p}function se(y,d,p,$,I){Ne(d,$,I,y,p,7);let O=Number(d&BigInt(4294967295));y[p+7]=O,O=O>>8,y[p+6]=O,O=O>>8,y[p+5]=O,O=O>>8,y[p+4]=O;let N=Number(d>>BigInt(32)&BigInt(4294967295));return y[p+3]=N,N=N>>8,y[p+2]=N,N=N>>8,y[p+1]=N,N=N>>8,y[p]=N,p+8}a.prototype.writeBigUInt64LE=Ze(function(d,p=0){return V(this,d,p,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=Ze(function(d,p=0){return se(this,d,p,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(d,p,$,I){if(d=+d,p=p>>>0,!I){const Te=Math.pow(2,8*$-1);ie(this,d,p,$,Te-1,-Te)}let O=0,N=1,ae=0;for(this[p]=d&255;++O<$&&(N*=256);)d<0&&ae===0&&this[p+O-1]!==0&&(ae=1),this[p+O]=(d/N>>0)-ae&255;return p+$},a.prototype.writeIntBE=function(d,p,$,I){if(d=+d,p=p>>>0,!I){const Te=Math.pow(2,8*$-1);ie(this,d,p,$,Te-1,-Te)}let O=$-1,N=1,ae=0;for(this[p+O]=d&255;--O>=0&&(N*=256);)d<0&&ae===0&&this[p+O+1]!==0&&(ae=1),this[p+O]=(d/N>>0)-ae&255;return p+$},a.prototype.writeInt8=function(d,p,$){return d=+d,p=p>>>0,$||ie(this,d,p,1,127,-128),d<0&&(d=255+d+1),this[p]=d&255,p+1},a.prototype.writeInt16LE=function(d,p,$){return d=+d,p=p>>>0,$||ie(this,d,p,2,32767,-32768),this[p]=d&255,this[p+1]=d>>>8,p+2},a.prototype.writeInt16BE=function(d,p,$){return d=+d,p=p>>>0,$||ie(this,d,p,2,32767,-32768),this[p]=d>>>8,this[p+1]=d&255,p+2},a.prototype.writeInt32LE=function(d,p,$){return d=+d,p=p>>>0,$||ie(this,d,p,4,2147483647,-2147483648),this[p]=d&255,this[p+1]=d>>>8,this[p+2]=d>>>16,this[p+3]=d>>>24,p+4},a.prototype.writeInt32BE=function(d,p,$){return d=+d,p=p>>>0,$||ie(this,d,p,4,2147483647,-2147483648),d<0&&(d=4294967295+d+1),this[p]=d>>>24,this[p+1]=d>>>16,this[p+2]=d>>>8,this[p+3]=d&255,p+4},a.prototype.writeBigInt64LE=Ze(function(d,p=0){return V(this,d,p,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=Ze(function(d,p=0){return se(this,d,p,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function he(y,d,p,$,I,O){if(p+$>y.length)throw new RangeError("Index out of range");if(p<0)throw new RangeError("Index out of range")}function _e(y,d,p,$,I){return d=+d,p=p>>>0,I||he(y,d,p,4),r.write(y,d,p,$,23,4),p+4}a.prototype.writeFloatLE=function(d,p,$){return _e(this,d,p,!0,$)},a.prototype.writeFloatBE=function(d,p,$){return _e(this,d,p,!1,$)};function Ce(y,d,p,$,I){return d=+d,p=p>>>0,I||he(y,d,p,8),r.write(y,d,p,$,52,8),p+8}a.prototype.writeDoubleLE=function(d,p,$){return Ce(this,d,p,!0,$)},a.prototype.writeDoubleBE=function(d,p,$){return Ce(this,d,p,!1,$)},a.prototype.copy=function(d,p,$,I){if(!a.isBuffer(d))throw new TypeError("argument should be a Buffer");if($||($=0),!I&&I!==0&&(I=this.length),p>=d.length&&(p=d.length),p||(p=0),I>0&&I<$&&(I=$),I===$||d.length===0||this.length===0)return 0;if(p<0)throw new RangeError("targetStart out of bounds");if($<0||$>=this.length)throw new RangeError("Index out of range");if(I<0)throw new RangeError("sourceEnd out of bounds");I>this.length&&(I=this.length),d.length-p<I-$&&(I=d.length-p+$);const O=I-$;return this===d&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(p,$,I):Uint8Array.prototype.set.call(d,this.subarray($,I),p),O},a.prototype.fill=function(d,p,$,I){if(typeof d=="string"){if(typeof p=="string"?(I=p,p=0,$=this.length):typeof $=="string"&&(I=$,$=this.length),I!==void 0&&typeof I!="string")throw new TypeError("encoding must be a string");if(typeof I=="string"&&!a.isEncoding(I))throw new TypeError("Unknown encoding: "+I);if(d.length===1){const N=d.charCodeAt(0);(I==="utf8"&&N<128||I==="latin1")&&(d=N)}}else typeof d=="number"?d=d&255:typeof d=="boolean"&&(d=Number(d));if(p<0||this.length<p||this.length<$)throw new RangeError("Out of range index");if($<=p)return this;p=p>>>0,$=$===void 0?this.length:$>>>0,d||(d=0);let O;if(typeof d=="number")for(O=p;O<$;++O)this[O]=d;else{const N=a.isBuffer(d)?d:a.from(d,I),ae=N.length;if(ae===0)throw new TypeError('The value "'+d+'" is invalid for argument "value"');for(O=0;O<$-p;++O)this[O+p]=N[O%ae]}return this};const ye={};function Se(y,d,p){ye[y]=class extends p{constructor(){super(),Object.defineProperty(this,"message",{value:d.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${y}]`,this.stack,delete this.name}get code(){return y}set code(I){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:I,writable:!0})}toString(){return`${this.name} [${y}]: ${this.message}`}}}Se("ERR_BUFFER_OUT_OF_BOUNDS",function(y){return y?`${y} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Se("ERR_INVALID_ARG_TYPE",function(y,d){return`The "${y}" argument must be of type number. Received type ${typeof d}`},TypeError),Se("ERR_OUT_OF_RANGE",function(y,d,p){let $=`The value of "${y}" is out of range.`,I=p;return Number.isInteger(p)&&Math.abs(p)>2**32?I=me(String(p)):typeof p=="bigint"&&(I=String(p),(p>BigInt(2)**BigInt(32)||p<-(BigInt(2)**BigInt(32)))&&(I=me(I)),I+="n"),$+=` It must be ${d}. Received ${I}`,$},RangeError);function me(y){let d="",p=y.length;const $=y[0]==="-"?1:0;for(;p>=$+4;p-=3)d=`_${y.slice(p-3,p)}${d}`;return`${y.slice(0,p)}${d}`}function Ie(y,d,p){Oe(d,"offset"),(y[d]===void 0||y[d+p]===void 0)&&Ft(d,y.length-(p+1))}function Ne(y,d,p,$,I,O){if(y>p||y<d){const N=typeof d=="bigint"?"n":"";let ae;throw O>3?d===0||d===BigInt(0)?ae=`>= 0${N} and < 2${N} ** ${(O+1)*8}${N}`:ae=`>= -(2${N} ** ${(O+1)*8-1}${N}) and < 2 ** ${(O+1)*8-1}${N}`:ae=`>= ${d}${N} and <= ${p}${N}`,new ye.ERR_OUT_OF_RANGE("value",ae,y)}Ie($,I,O)}function Oe(y,d){if(typeof y!="number")throw new ye.ERR_INVALID_ARG_TYPE(d,"number",y)}function Ft(y,d,p){throw Math.floor(y)!==y?(Oe(y,p),new ye.ERR_OUT_OF_RANGE(p||"offset","an integer",y)):d<0?new ye.ERR_BUFFER_OUT_OF_BOUNDS:new ye.ERR_OUT_OF_RANGE(p||"offset",`>= ${p?1:0} and <= ${d}`,y)}const Jr=/[^+/0-9A-Za-z-_]/g;function Dn(y){if(y=y.split("=")[0],y=y.trim().replace(Jr,""),y.length<2)return"";for(;y.length%4!==0;)y=y+"=";return y}function Xr(y,d){d=d||1/0;let p;const $=y.length;let I=null;const O=[];for(let N=0;N<$;++N){if(p=y.charCodeAt(N),p>55295&&p<57344){if(!I){if(p>56319){(d-=3)>-1&&O.push(239,191,189);continue}else if(N+1===$){(d-=3)>-1&&O.push(239,191,189);continue}I=p;continue}if(p<56320){(d-=3)>-1&&O.push(239,191,189),I=p;continue}p=(I-55296<<10|p-56320)+65536}else I&&(d-=3)>-1&&O.push(239,191,189);if(I=null,p<128){if((d-=1)<0)break;O.push(p)}else if(p<2048){if((d-=2)<0)break;O.push(p>>6|192,p&63|128)}else if(p<65536){if((d-=3)<0)break;O.push(p>>12|224,p>>6&63|128,p&63|128)}else if(p<1114112){if((d-=4)<0)break;O.push(p>>18|240,p>>12&63|128,p>>6&63|128,p&63|128)}else throw new Error("Invalid code point")}return O}function vs(y){const d=[];for(let p=0;p<y.length;++p)d.push(y.charCodeAt(p)&255);return d}function ha(y,d){let p,$,I;const O=[];for(let N=0;N<y.length&&!((d-=2)<0);++N)p=y.charCodeAt(N),$=p>>8,I=p%256,O.push(I),O.push($);return O}function pt(y){return e.toByteArray(Dn(y))}function st(y,d,p,$){let I;for(I=0;I<$&&!(I+p>=d.length||I>=y.length);++I)d[I+p]=y[I];return I}function ze(y,d){return y instanceof d||y!=null&&y.constructor!=null&&y.constructor.name!=null&&y.constructor.name===d.name}function ut(y){return y!==y}const wt=function(){const y="0123456789abcdef",d=new Array(256);for(let p=0;p<16;++p){const $=p*16;for(let I=0;I<16;++I)d[$+I]=y[p]+y[I]}return d}();function Ze(y){return typeof BigInt>"u"?bt:y}function bt(){throw new Error("BigInt not supported")}})(lg);typeof window<"u"&&(window.Buffer||(window.Buffer=lg.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));function D8({storage:t,key:e="REACT_QUERY_OFFLINE_CACHE",throttleTime:r=1e3,serialize:n=JSON.stringify,deserialize:s=JSON.parse,retry:i}){if(t){const o=a=>{try{t.setItem(e,n(a));return}catch(c){return c}};return{persistClient:N8(a=>{let c=a,l=o(c),u=0;for(;l&&c;)u++,c=i?.({persistedClient:c,error:l,errorCount:u}),c&&(l=o(c))},r),restoreClient:()=>{const a=t.getItem(e);if(a)return s(a)},removeClient:()=>{t.removeItem(e)}}}return{persistClient:e0,restoreClient:()=>{},removeClient:e0}}function N8(t,e=100){let r=null,n;return function(...s){n=s,r===null&&(r=setTimeout(()=>{t(...n),r=null},e))}}function e0(){}class bs{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){const r={listener:e};return this.listeners.add(r),this.onSubscribe(),()=>{this.listeners.delete(r),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}const Ro=typeof window>"u"||"Deno"in window;function Yt(){}function k8(t,e){return typeof t=="function"?t(e):t}function Hu(t){return typeof t=="number"&&t>=0&&t!==1/0}function dg(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Ca(t,e,r){return ca(t)?typeof e=="function"?{...r,queryKey:t,queryFn:e}:{...e,queryKey:t}:t}function hg(t,e,r){return ca(t)?typeof e=="function"?{...r,mutationKey:t,mutationFn:e}:{...e,mutationKey:t}:typeof t=="function"?{...e,mutationFn:t}:{...t}}function nn(t,e,r){return ca(t)?[{...e,queryKey:t},r]:[t||{},e]}function t0(t,e){const{type:r="all",exact:n,fetchStatus:s,predicate:i,queryKey:o,stale:a}=t;if(ca(o)){if(n){if(e.queryHash!==Eh(o,e.options))return!1}else if(!dc(e.queryKey,o))return!1}if(r!=="all"){const c=e.isActive();if(r==="active"&&!c||r==="inactive"&&c)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||typeof s<"u"&&s!==e.state.fetchStatus||i&&!i(e))}function r0(t,e){const{exact:r,fetching:n,predicate:s,mutationKey:i}=t;if(ca(i)){if(!e.options.mutationKey)return!1;if(r){if(Wn(e.options.mutationKey)!==Wn(i))return!1}else if(!dc(e.options.mutationKey,i))return!1}return!(typeof n=="boolean"&&e.state.status==="loading"!==n||s&&!s(e))}function Eh(t,e){return(e?.queryKeyHashFn||Wn)(t)}function Wn(t){return JSON.stringify(t,(e,r)=>qu(r)?Object.keys(r).sort().reduce((n,s)=>(n[s]=r[s],n),{}):r)}function dc(t,e){return fg(t,e)}function fg(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(r=>!fg(t[r],e[r])):!1}function pg(t,e){if(t===e)return t;const r=n0(t)&&n0(e);if(r||qu(t)&&qu(e)){const n=r?t.length:Object.keys(t).length,s=r?e:Object.keys(e),i=s.length,o=r?[]:{};let a=0;for(let c=0;c<i;c++){const l=r?c:s[c];o[l]=pg(t[l],e[l]),o[l]===t[l]&&a++}return n===i&&a===n?t:o}return e}function hc(t,e){if(t&&!e||e&&!t)return!1;for(const r in t)if(t[r]!==e[r])return!1;return!0}function n0(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function qu(t){if(!i0(t))return!1;const e=t.constructor;if(typeof e>"u")return!0;const r=e.prototype;return!(!i0(r)||!r.hasOwnProperty("isPrototypeOf"))}function i0(t){return Object.prototype.toString.call(t)==="[object Object]"}function ca(t){return Array.isArray(t)}function gg(t){return new Promise(e=>{setTimeout(e,t)})}function s0(t){gg(0).then(t)}function M8(){if(typeof AbortController=="function")return new AbortController}function Vu(t,e,r){return r.isDataEqual!=null&&r.isDataEqual(t,e)?t:typeof r.structuralSharing=="function"?r.structuralSharing(t,e):r.structuralSharing!==!1?pg(t,e):e}class U8 extends bs{constructor(){super(),this.setup=e=>{if(!Ro&&window.addEventListener){const r=()=>e();return window.addEventListener("visibilitychange",r,!1),window.addEventListener("focus",r,!1),()=>{window.removeEventListener("visibilitychange",r),window.removeEventListener("focus",r)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var r;this.setup=e,(r=this.cleanup)==null||r.call(this),this.cleanup=e(n=>{typeof n=="boolean"?this.setFocused(n):this.onFocus()})}setFocused(e){this.focused!==e&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const fc=new U8,o0=["online","offline"];class B8 extends bs{constructor(){super(),this.setup=e=>{if(!Ro&&window.addEventListener){const r=()=>e();return o0.forEach(n=>{window.addEventListener(n,r,!1)}),()=>{o0.forEach(n=>{window.removeEventListener(n,r)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var r;this.setup=e,(r=this.cleanup)==null||r.call(this),this.cleanup=e(n=>{typeof n=="boolean"?this.setOnline(n):this.onOnline()})}setOnline(e){this.online!==e&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const pc=new B8;function j8(t){return Math.min(1e3*2**t,3e4)}function bl(t){return(t??"online")==="online"?pc.isOnline():!0}class mg{constructor(e){this.revert=e?.revert,this.silent=e?.silent}}function Pa(t){return t instanceof mg}function wg(t){let e=!1,r=0,n=!1,s,i,o;const a=new Promise((v,T)=>{i=v,o=T}),c=v=>{n||(g(new mg(v)),t.abort==null||t.abort())},l=()=>{e=!0},u=()=>{e=!1},f=()=>!fc.isFocused()||t.networkMode!=="always"&&!pc.isOnline(),m=v=>{n||(n=!0,t.onSuccess==null||t.onSuccess(v),s?.(),i(v))},g=v=>{n||(n=!0,t.onError==null||t.onError(v),s?.(),o(v))},w=()=>new Promise(v=>{s=T=>{const b=n||!f();return b&&v(T),b},t.onPause==null||t.onPause()}).then(()=>{s=void 0,n||t.onContinue==null||t.onContinue()}),_=()=>{if(n)return;let v;try{v=t.fn()}catch(T){v=Promise.reject(T)}Promise.resolve(v).then(m).catch(T=>{var b,E;if(n)return;const x=(b=t.retry)!=null?b:3,C=(E=t.retryDelay)!=null?E:j8,A=typeof C=="function"?C(r,T):C,h=x===!0||typeof x=="number"&&r<x||typeof x=="function"&&x(r,T);if(e||!h){g(T);return}r++,t.onFail==null||t.onFail(r,T),gg(A).then(()=>{if(f())return w()}).then(()=>{e?g(T):_()})})};return bl(t.networkMode)?_():w().then(_),{promise:a,cancel:c,continue:()=>s?.()?a:Promise.resolve(),cancelRetry:l,continueRetry:u}}const Sh=console;function L8(){let t=[],e=0,r=u=>{u()},n=u=>{u()};const s=u=>{let f;e++;try{f=u()}finally{e--,e||a()}return f},i=u=>{e?t.push(u):s0(()=>{r(u)})},o=u=>(...f)=>{i(()=>{u(...f)})},a=()=>{const u=t;t=[],u.length&&s0(()=>{n(()=>{u.forEach(f=>{r(f)})})})};return{batch:s,batchCalls:o,schedule:i,setNotifyFunction:u=>{r=u},setBatchNotifyFunction:u=>{n=u}}}const it=L8();class bg{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Hu(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,e??(Ro?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class F8 extends bg{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||Sh,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||W8(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(e,r){const n=Vu(this.state.data,e,this.options);return this.dispatch({data:n,type:"success",dataUpdatedAt:r?.updatedAt,manual:r?.manual}),n}setState(e,r){this.dispatch({type:"setState",state:e,setStateOptions:r})}cancel(e){var r;const n=this.promise;return(r=this.retryer)==null||r.cancel(e),n?n.then(Yt).catch(Yt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>e.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!dg(this.state.dataUpdatedAt,e)}onFocus(){var e;const r=this.observers.find(n=>n.shouldFetchOnWindowFocus());r&&r.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}onOnline(){var e;const r=this.observers.find(n=>n.shouldFetchOnReconnect());r&&r.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(r=>r!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,r){var n,s;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&r!=null&&r.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var i;return(i=this.retryer)==null||i.continueRetry(),this.promise}}if(e&&this.setOptions(e),!this.options.queryFn){const g=this.observers.find(w=>w.options.queryFn);g&&this.setOptions(g.options)}const o=M8(),a={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},c=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>{if(o)return this.abortSignalConsumed=!0,o.signal}})};c(a);const l=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(a)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),u={fetchOptions:r,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:l};if(c(u),(n=this.options.behavior)==null||n.onFetch(u),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((s=u.fetchOptions)==null?void 0:s.meta)){var f;this.dispatch({type:"fetch",meta:(f=u.fetchOptions)==null?void 0:f.meta})}const m=g=>{if(Pa(g)&&g.silent||this.dispatch({type:"error",error:g}),!Pa(g)){var w,_,v,T;(w=(_=this.cache.config).onError)==null||w.call(_,g,this),(v=(T=this.cache.config).onSettled)==null||v.call(T,this.state.data,g,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=wg({fn:u.fetchFn,abort:o?.abort.bind(o),onSuccess:g=>{var w,_,v,T;if(typeof g>"u"){m(new Error(this.queryHash+" data is undefined"));return}this.setData(g),(w=(_=this.cache.config).onSuccess)==null||w.call(_,g,this),(v=(T=this.cache.config).onSettled)==null||v.call(T,g,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:m,onFail:(g,w)=>{this.dispatch({type:"failed",failureCount:g,error:w})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:u.options.retry,retryDelay:u.options.retryDelay,networkMode:u.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){const r=n=>{var s,i;switch(e.type){case"failed":return{...n,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...n,fetchStatus:"paused"};case"continue":return{...n,fetchStatus:"fetching"};case"fetch":return{...n,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(s=e.meta)!=null?s:null,fetchStatus:bl(this.options.networkMode)?"fetching":"paused",...!n.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...n,data:e.data,dataUpdateCount:n.dataUpdateCount+1,dataUpdatedAt:(i=e.dataUpdatedAt)!=null?i:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=e.error;return Pa(o)&&o.revert&&this.revertState?{...this.revertState,fetchStatus:"idle"}:{...n,error:o,errorUpdateCount:n.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:n.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...n,isInvalidated:!0};case"setState":return{...n,...e.state}}};this.state=r(this.state),it.batch(()=>{this.observers.forEach(n=>{n.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}function W8(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,r=typeof e<"u",n=r?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:r?n??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"loading",fetchStatus:"idle"}}class z8 extends bs{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,r,n){var s;const i=r.queryKey,o=(s=r.queryHash)!=null?s:Eh(i,r);let a=this.get(o);return a||(a=new F8({cache:this,logger:e.getLogger(),queryKey:i,queryHash:o,options:e.defaultQueryOptions(r),state:n,defaultOptions:e.getQueryDefaults(i)}),this.add(a)),a}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){const r=this.queriesMap[e.queryHash];r&&(e.destroy(),this.queries=this.queries.filter(n=>n!==e),r===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){it.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,r){const[n]=nn(e,r);return typeof n.exact>"u"&&(n.exact=!0),this.queries.find(s=>t0(n,s))}findAll(e,r){const[n]=nn(e,r);return Object.keys(n).length>0?this.queries.filter(s=>t0(n,s)):this.queries}notify(e){it.batch(()=>{this.listeners.forEach(({listener:r})=>{r(e)})})}onFocus(){it.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){it.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class H8 extends bg{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||Sh,this.observers=[],this.state=e.state||yg(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(r=>r!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,r;return(e=(r=this.retryer)==null?void 0:r.continue())!=null?e:this.execute()}async execute(){const e=()=>{var h;return this.retryer=wg({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(S,P)=>{this.dispatch({type:"failed",failureCount:S,error:P})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(h=this.options.retry)!=null?h:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},r=this.state.status==="loading";try{var n,s,i,o,a,c,l,u;if(!r){var f,m,g,w;this.dispatch({type:"loading",variables:this.options.variables}),await((f=(m=this.mutationCache.config).onMutate)==null?void 0:f.call(m,this.state.variables,this));const S=await((g=(w=this.options).onMutate)==null?void 0:g.call(w,this.state.variables));S!==this.state.context&&this.dispatch({type:"loading",context:S,variables:this.state.variables})}const h=await e();return await((n=(s=this.mutationCache.config).onSuccess)==null?void 0:n.call(s,h,this.state.variables,this.state.context,this)),await((i=(o=this.options).onSuccess)==null?void 0:i.call(o,h,this.state.variables,this.state.context)),await((a=(c=this.mutationCache.config).onSettled)==null?void 0:a.call(c,h,null,this.state.variables,this.state.context,this)),await((l=(u=this.options).onSettled)==null?void 0:l.call(u,h,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:h}),h}catch(h){try{var _,v,T,b,E,x,C,A;throw await((_=(v=this.mutationCache.config).onError)==null?void 0:_.call(v,h,this.state.variables,this.state.context,this)),await((T=(b=this.options).onError)==null?void 0:T.call(b,h,this.state.variables,this.state.context)),await((E=(x=this.mutationCache.config).onSettled)==null?void 0:E.call(x,void 0,h,this.state.variables,this.state.context,this)),await((C=(A=this.options).onSettled)==null?void 0:C.call(A,void 0,h,this.state.variables,this.state.context)),h}finally{this.dispatch({type:"error",error:h})}}}dispatch(e){const r=n=>{switch(e.type){case"failed":return{...n,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...n,isPaused:!0};case"continue":return{...n,isPaused:!1};case"loading":return{...n,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!bl(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...n,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...n,data:void 0,error:e.error,failureCount:n.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...n,...e.state}}};this.state=r(this.state),it.batch(()=>{this.observers.forEach(n=>{n.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}}function yg(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class q8 extends bs{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,r,n){const s=new H8({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(r),state:n,defaultOptions:r.mutationKey?e.getMutationDefaults(r.mutationKey):void 0});return this.add(s),s}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(r=>r!==e),this.notify({type:"removed",mutation:e})}clear(){it.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return typeof e.exact>"u"&&(e.exact=!0),this.mutations.find(r=>r0(e,r))}findAll(e){return this.mutations.filter(r=>r0(e,r))}notify(e){it.batch(()=>{this.listeners.forEach(({listener:r})=>{r(e)})})}resumePausedMutations(){var e;return this.resuming=((e=this.resuming)!=null?e:Promise.resolve()).then(()=>{const r=this.mutations.filter(n=>n.state.isPaused);return it.batch(()=>r.reduce((n,s)=>n.then(()=>s.continue().catch(Yt)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function V8(){return{onFetch:t=>{t.fetchFn=()=>{var e,r,n,s,i,o;const a=(e=t.fetchOptions)==null||(r=e.meta)==null?void 0:r.refetchPage,c=(n=t.fetchOptions)==null||(s=n.meta)==null?void 0:s.fetchMore,l=c?.pageParam,u=c?.direction==="forward",f=c?.direction==="backward",m=((i=t.state.data)==null?void 0:i.pages)||[],g=((o=t.state.data)==null?void 0:o.pageParams)||[];let w=g,_=!1;const v=A=>{Object.defineProperty(A,"signal",{enumerable:!0,get:()=>{var h;if((h=t.signal)!=null&&h.aborted)_=!0;else{var S;(S=t.signal)==null||S.addEventListener("abort",()=>{_=!0})}return t.signal}})},T=t.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+t.options.queryHash+"'")),b=(A,h,S,P)=>(w=P?[h,...w]:[...w,h],P?[S,...A]:[...A,S]),E=(A,h,S,P)=>{if(_)return Promise.reject("Cancelled");if(typeof S>"u"&&!h&&A.length)return Promise.resolve(A);const D={queryKey:t.queryKey,pageParam:S,meta:t.options.meta};v(D);const k=T(D);return Promise.resolve(k).then(Y=>b(A,S,Y,P))};let x;if(!m.length)x=E([]);else if(u){const A=typeof l<"u",h=A?l:a0(t.options,m);x=E(m,A,h)}else if(f){const A=typeof l<"u",h=A?l:Z8(t.options,m);x=E(m,A,h,!0)}else{w=[];const A=typeof t.options.getNextPageParam>"u";x=(a&&m[0]?a(m[0],0,m):!0)?E([],A,g[0]):Promise.resolve(b([],g[0],m[0]));for(let S=1;S<m.length;S++)x=x.then(P=>{if(a&&m[S]?a(m[S],S,m):!0){const k=A?g[S]:a0(t.options,P);return E(P,A,k)}return Promise.resolve(b(P,g[S],m[S]))})}return x.then(A=>({pages:A,pageParams:w}))}}}}function a0(t,e){return t.getNextPageParam==null?void 0:t.getNextPageParam(e[e.length-1],e)}function Z8(t,e){return t.getPreviousPageParam==null?void 0:t.getPreviousPageParam(e[0],e)}class G8{constructor(e={}){this.queryCache=e.queryCache||new z8,this.mutationCache=e.mutationCache||new q8,this.logger=e.logger||Sh,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=fc.subscribe(()=>{fc.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=pc.subscribe(()=>{pc.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,r;this.mountCount--,this.mountCount===0&&((e=this.unsubscribeFocus)==null||e.call(this),this.unsubscribeFocus=void 0,(r=this.unsubscribeOnline)==null||r.call(this),this.unsubscribeOnline=void 0)}isFetching(e,r){const[n]=nn(e,r);return n.fetchStatus="fetching",this.queryCache.findAll(n).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,r){var n;return(n=this.queryCache.find(e,r))==null?void 0:n.state.data}ensureQueryData(e,r,n){const s=Ca(e,r,n),i=this.getQueryData(s.queryKey);return i?Promise.resolve(i):this.fetchQuery(s)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:r,state:n})=>{const s=n.data;return[r,s]})}setQueryData(e,r,n){const s=this.queryCache.find(e),i=s?.state.data,o=k8(r,i);if(typeof o>"u")return;const a=Ca(e),c=this.defaultQueryOptions(a);return this.queryCache.build(this,c).setData(o,{...n,manual:!0})}setQueriesData(e,r,n){return it.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:s})=>[s,this.setQueryData(s,r,n)]))}getQueryState(e,r){var n;return(n=this.queryCache.find(e,r))==null?void 0:n.state}removeQueries(e,r){const[n]=nn(e,r),s=this.queryCache;it.batch(()=>{s.findAll(n).forEach(i=>{s.remove(i)})})}resetQueries(e,r,n){const[s,i]=nn(e,r,n),o=this.queryCache,a={type:"active",...s};return it.batch(()=>(o.findAll(s).forEach(c=>{c.reset()}),this.refetchQueries(a,i)))}cancelQueries(e,r,n){const[s,i={}]=nn(e,r,n);typeof i.revert>"u"&&(i.revert=!0);const o=it.batch(()=>this.queryCache.findAll(s).map(a=>a.cancel(i)));return Promise.all(o).then(Yt).catch(Yt)}invalidateQueries(e,r,n){const[s,i]=nn(e,r,n);return it.batch(()=>{var o,a;if(this.queryCache.findAll(s).forEach(l=>{l.invalidate()}),s.refetchType==="none")return Promise.resolve();const c={...s,type:(o=(a=s.refetchType)!=null?a:s.type)!=null?o:"active"};return this.refetchQueries(c,i)})}refetchQueries(e,r,n){const[s,i]=nn(e,r,n),o=it.batch(()=>this.queryCache.findAll(s).filter(c=>!c.isDisabled()).map(c=>{var l;return c.fetch(void 0,{...i,cancelRefetch:(l=i?.cancelRefetch)!=null?l:!0,meta:{refetchPage:s.refetchPage}})}));let a=Promise.all(o).then(Yt);return i!=null&&i.throwOnError||(a=a.catch(Yt)),a}fetchQuery(e,r,n){const s=Ca(e,r,n),i=this.defaultQueryOptions(s);typeof i.retry>"u"&&(i.retry=!1);const o=this.queryCache.build(this,i);return o.isStaleByTime(i.staleTime)?o.fetch(i):Promise.resolve(o.state.data)}prefetchQuery(e,r,n){return this.fetchQuery(e,r,n).then(Yt).catch(Yt)}fetchInfiniteQuery(e,r,n){const s=Ca(e,r,n);return s.behavior=V8(),this.fetchQuery(s)}prefetchInfiniteQuery(e,r,n){return this.fetchInfiniteQuery(e,r,n).then(Yt).catch(Yt)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,r){const n=this.queryDefaults.find(s=>Wn(e)===Wn(s.queryKey));n?n.defaultOptions=r:this.queryDefaults.push({queryKey:e,defaultOptions:r})}getQueryDefaults(e){if(!e)return;const r=this.queryDefaults.find(n=>dc(e,n.queryKey));return r?.defaultOptions}setMutationDefaults(e,r){const n=this.mutationDefaults.find(s=>Wn(e)===Wn(s.mutationKey));n?n.defaultOptions=r:this.mutationDefaults.push({mutationKey:e,defaultOptions:r})}getMutationDefaults(e){if(!e)return;const r=this.mutationDefaults.find(n=>dc(e,n.mutationKey));return r?.defaultOptions}defaultQueryOptions(e){if(e!=null&&e._defaulted)return e;const r={...this.defaultOptions.queries,...this.getQueryDefaults(e?.queryKey),...e,_defaulted:!0};return!r.queryHash&&r.queryKey&&(r.queryHash=Eh(r.queryKey,r)),typeof r.refetchOnReconnect>"u"&&(r.refetchOnReconnect=r.networkMode!=="always"),typeof r.useErrorBoundary>"u"&&(r.useErrorBoundary=!!r.suspense),r}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(e?.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}class K8 extends bs{constructor(e,r){super(),this.client=e,this.options=r,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(r)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),c0(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Zu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Zu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,r){const n=this.options,s=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),hc(n,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=n.queryKey),this.updateQuery();const i=this.hasListeners();i&&l0(this.currentQuery,s,this.options,n)&&this.executeFetch(),this.updateResult(r),i&&(this.currentQuery!==s||this.options.enabled!==n.enabled||this.options.staleTime!==n.staleTime)&&this.updateStaleTimeout();const o=this.computeRefetchInterval();i&&(this.currentQuery!==s||this.options.enabled!==n.enabled||o!==this.currentRefetchInterval)&&this.updateRefetchInterval(o)}getOptimisticResult(e){const r=this.client.getQueryCache().build(this.client,e),n=this.createResult(r,e);return Y8(this,n,e)&&(this.currentResult=n,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),n}getCurrentResult(){return this.currentResult}trackResult(e){const r={};return Object.keys(e).forEach(n=>{Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(n),e[n])})}),r}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...r}={}){return this.fetch({...r,meta:{refetchPage:e}})}fetchOptimistic(e){const r=this.client.defaultQueryOptions(e),n=this.client.getQueryCache().build(this.client,r);return n.isFetchingOptimistic=!0,n.fetch().then(()=>this.createResult(n,r))}fetch(e){var r;return this.executeFetch({...e,cancelRefetch:(r=e.cancelRefetch)!=null?r:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let r=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(r=r.catch(Yt)),r}updateStaleTimeout(){if(this.clearStaleTimeout(),Ro||this.currentResult.isStale||!Hu(this.options.staleTime))return;const r=dg(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},r)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(Ro||this.options.enabled===!1||!Hu(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||fc.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,r){const n=this.currentQuery,s=this.options,i=this.currentResult,o=this.currentResultState,a=this.currentResultOptions,c=e!==n,l=c?e.state:this.currentQueryInitialState,u=c?this.currentResult:this.previousQueryResult,{state:f}=e;let{dataUpdatedAt:m,error:g,errorUpdatedAt:w,fetchStatus:_,status:v}=f,T=!1,b=!1,E;if(r._optimisticResults){const S=this.hasListeners(),P=!S&&c0(e,r),D=S&&l0(e,n,r,s);(P||D)&&(_=bl(e.options.networkMode)?"fetching":"paused",m||(v="loading")),r._optimisticResults==="isRestoring"&&(_="idle")}if(r.keepPreviousData&&!f.dataUpdatedAt&&u!=null&&u.isSuccess&&v!=="error")E=u.data,m=u.dataUpdatedAt,v=u.status,T=!0;else if(r.select&&typeof f.data<"u")if(i&&f.data===o?.data&&r.select===this.selectFn)E=this.selectResult;else try{this.selectFn=r.select,E=r.select(f.data),E=Vu(i?.data,E,r),this.selectResult=E,this.selectError=null}catch(S){this.selectError=S}else E=f.data;if(typeof r.placeholderData<"u"&&typeof E>"u"&&v==="loading"){let S;if(i!=null&&i.isPlaceholderData&&r.placeholderData===a?.placeholderData)S=i.data;else if(S=typeof r.placeholderData=="function"?r.placeholderData():r.placeholderData,r.select&&typeof S<"u")try{S=r.select(S),this.selectError=null}catch(P){this.selectError=P}typeof S<"u"&&(v="success",E=Vu(i?.data,S,r),b=!0)}this.selectError&&(g=this.selectError,E=this.selectResult,w=Date.now(),v="error");const x=_==="fetching",C=v==="loading",A=v==="error";return{status:v,fetchStatus:_,isLoading:C,isSuccess:v==="success",isError:A,isInitialLoading:C&&x,data:E,dataUpdatedAt:m,error:g,errorUpdatedAt:w,failureCount:f.fetchFailureCount,failureReason:f.fetchFailureReason,errorUpdateCount:f.errorUpdateCount,isFetched:f.dataUpdateCount>0||f.errorUpdateCount>0,isFetchedAfterMount:f.dataUpdateCount>l.dataUpdateCount||f.errorUpdateCount>l.errorUpdateCount,isFetching:x,isRefetching:x&&!C,isLoadingError:A&&f.dataUpdatedAt===0,isPaused:_==="paused",isPlaceholderData:b,isPreviousData:T,isRefetchError:A&&f.dataUpdatedAt!==0,isStale:Ah(e,r),refetch:this.refetch,remove:this.remove}}updateResult(e){const r=this.currentResult,n=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,hc(n,r))return;this.currentResult=n;const s={cache:!0},i=()=>{if(!r)return!0;const{notifyOnChangeProps:o}=this.options,a=typeof o=="function"?o():o;if(a==="all"||!a&&!this.trackedProps.size)return!0;const c=new Set(a??this.trackedProps);return this.options.useErrorBoundary&&c.add("error"),Object.keys(this.currentResult).some(l=>{const u=l;return this.currentResult[u]!==r[u]&&c.has(u)})};e?.listeners!==!1&&i()&&(s.listeners=!0),this.notify({...s,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const r=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(r?.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const r={};e.type==="success"?r.onSuccess=!e.manual:e.type==="error"&&!Pa(e.error)&&(r.onError=!0),this.updateResult(r),this.hasListeners()&&this.updateTimers()}notify(e){it.batch(()=>{if(e.onSuccess){var r,n,s,i;(r=(n=this.options).onSuccess)==null||r.call(n,this.currentResult.data),(s=(i=this.options).onSettled)==null||s.call(i,this.currentResult.data,null)}else if(e.onError){var o,a,c,l;(o=(a=this.options).onError)==null||o.call(a,this.currentResult.error),(c=(l=this.options).onSettled)==null||c.call(l,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(({listener:u})=>{u(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function Q8(t,e){return e.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&e.retryOnMount===!1)}function c0(t,e){return Q8(t,e)||t.state.dataUpdatedAt>0&&Zu(t,e,e.refetchOnMount)}function Zu(t,e,r){if(e.enabled!==!1){const n=typeof r=="function"?r(t):r;return n==="always"||n!==!1&&Ah(t,e)}return!1}function l0(t,e,r,n){return r.enabled!==!1&&(t!==e||n.enabled===!1)&&(!r.suspense||t.state.status!=="error")&&Ah(t,r)}function Ah(t,e){return t.isStaleByTime(e.staleTime)}function Y8(t,e,r){return r.keepPreviousData?!1:r.placeholderData!==void 0?e.isPlaceholderData:!hc(t.getCurrentResult(),e)}class J8 extends bs{constructor(e,r){super(),this.client=e,this.setOptions(r),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var r;const n=this.options;this.options=this.client.defaultMutationOptions(e),hc(n,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(r=this.currentMutation)==null||r.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.currentMutation)==null||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();const r={listeners:!0};e.type==="success"?r.onSuccess=!0:e.type==="error"&&(r.onError=!0),this.notify(r)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,r){return this.mutateOptions=r,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof e<"u"?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const e=this.currentMutation?this.currentMutation.state:yg(),r={...e,isLoading:e.status==="loading",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=r}notify(e){it.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(e.onSuccess){var r,n,s,i;(r=(n=this.mutateOptions).onSuccess)==null||r.call(n,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(s=(i=this.mutateOptions).onSettled)==null||s.call(i,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(e.onError){var o,a,c,l;(o=(a=this.mutateOptions).onError)==null||o.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(c=(l=this.mutateOptions).onSettled)==null||c.call(l,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}e.listeners&&this.listeners.forEach(({listener:u})=>{u(this.currentResult)})})}}function X8(t){return{mutationKey:t.options.mutationKey,state:t.state}}function ex(t){return{state:t.state,queryKey:t.queryKey,queryHash:t.queryHash}}function tx(t){return t.state.isPaused}function rx(t){return t.state.status==="success"}function nx(t,e={}){const r=[],n=[];if(e.dehydrateMutations!==!1){const s=e.shouldDehydrateMutation||tx;t.getMutationCache().getAll().forEach(i=>{s(i)&&r.push(X8(i))})}if(e.dehydrateQueries!==!1){const s=e.shouldDehydrateQuery||rx;t.getQueryCache().getAll().forEach(i=>{s(i)&&n.push(ex(i))})}return{mutations:r,queries:n}}function ix(t,e,r){if(typeof e!="object"||e===null)return;const n=t.getMutationCache(),s=t.getQueryCache(),i=e.mutations||[],o=e.queries||[];i.forEach(a=>{var c;n.build(t,{...r==null||(c=r.defaultOptions)==null?void 0:c.mutations,mutationKey:a.mutationKey},a.state)}),o.forEach(({queryKey:a,state:c,queryHash:l})=>{var u;const f=s.get(l);if(f){if(f.state.dataUpdatedAt<c.dataUpdatedAt){const{fetchStatus:m,...g}=c;f.setState(g)}return}s.build(t,{...r==null||(u=r.defaultOptions)==null?void 0:u.queries,queryKey:a,queryHash:l},{...c,fetchStatus:"idle"})})}const sx=Vd.useSyncExternalStore,u0=De.createContext(void 0),vg=De.createContext(!1);function xg(t,e){return t||(e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=u0),window.ReactQueryClientContext):u0)}const $h=({context:t}={})=>{const e=De.useContext(xg(t,De.useContext(vg)));if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},ox=({client:t,children:e,context:r,contextSharing:n=!1})=>{De.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]);const s=xg(r,n);return De.createElement(vg.Provider,{value:!r&&n},De.createElement(s.Provider,{value:t},e))},_g=De.createContext(!1),ax=()=>De.useContext(_g);_g.Provider;function cx(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}const lx=De.createContext(cx()),ux=()=>De.useContext(lx);function dx(t,e){return typeof t=="function"?t(...e):!!t}function hx(t,e,r){const n=hg(t,e,r),s=$h({context:n.context}),[i]=De.useState(()=>new J8(s,n));De.useEffect(()=>{i.setOptions(n)},[i,n]);const o=sx(De.useCallback(c=>i.subscribe(it.batchCalls(c)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),a=De.useCallback((c,l)=>{i.mutate(c,l).catch(fx)},[i]);if(o.error&&dx(i.options.useErrorBoundary,[o.error]))throw o.error;return{...o,mutate:a,mutateAsync:o.mutate}}function fx(){}const px=["added","removed","updated"];function d0(t){return px.includes(t)}async function gx({queryClient:t,persister:e,maxAge:r=1e3*60*60*24,buster:n="",hydrateOptions:s}){try{const i=await e.restoreClient();if(i)if(i.timestamp){const o=Date.now()-i.timestamp>r,a=i.buster!==n;o||a?e.removeClient():ix(t,i.clientState,s)}else e.removeClient()}catch{e.removeClient()}}async function h0({queryClient:t,persister:e,buster:r="",dehydrateOptions:n}){const s={buster:r,timestamp:Date.now(),clientState:nx(t,n)};await e.persistClient(s)}function mx(t){const e=t.queryClient.getQueryCache().subscribe(n=>{d0(n.type)&&h0(t)}),r=t.queryClient.getMutationCache().subscribe(n=>{d0(n.type)&&h0(t)});return()=>{e(),r()}}function wx(t){let e=!1,r;const n=()=>{e=!0,r?.()},s=gx(t).then(()=>{e||(r=mx(t))});return[n,s]}var Cg={exports:{}},Eg={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yl=De,bx=Vd;function yx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vx=typeof Object.is=="function"?Object.is:yx,xx=bx.useSyncExternalStore,_x=yl.useRef,Cx=yl.useEffect,Ex=yl.useMemo,Sx=yl.useDebugValue;Eg.useSyncExternalStoreWithSelector=function(t,e,r,n,s){var i=_x(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=Ex(function(){function c(g){if(!l){if(l=!0,u=g,g=n(g),s!==void 0&&o.hasValue){var w=o.value;if(s(w,g))return f=w}return f=g}if(w=f,vx(u,g))return w;var _=n(g);return s!==void 0&&s(w,_)?w:(u=g,f=_)}var l=!1,u,f,m=r===void 0?null:r;return[function(){return c(e())},m===null?void 0:function(){return c(m())}]},[e,r,n,s]);var a=xx(t,i[0],i[1]);return Cx(function(){o.hasValue=!0,o.value=a},[a]),Sx(a),a};Cg.exports=Eg;var Sg=Cg.exports;function Ax({queryClient:t=new G8({defaultOptions:{queries:{cacheTime:1e3*60*60*24,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:e=Up({storage:typeof window<"u"&&window.localStorage?window.localStorage:Mp}),persister:r=typeof window<"u"?D8({key:"cache",storage:e,serialize:s=>s,deserialize:s=>s}):void 0,...n}){const s=xy({...n,storage:e});return r&&wx({queryClient:t,persister:r,dehydrateOptions:{shouldDehydrateQuery:i=>i.cacheTime!==0&&i.queryKey[0].persist!==!1}}),Object.assign(s,{queryClient:t})}var Ag=De.createContext(void 0),vl=De.createContext(void 0);function $x({children:t,config:e}){return De.createElement(Ag.Provider,{children:De.createElement(ox,{children:t,client:e.queryClient,context:vl}),value:e})}function $g(){const t=De.useContext(Ag);if(!t)throw new Error(["`useConfig` must be used within `WagmiConfig`.\n","Read more: https://wagmi.sh/react/WagmiConfig"].join(`
`));return t}var Tx=Vd.useSyncExternalStore;function Ix(t){return Array.isArray(t)}function Rx(t){if(!f0(t))return!1;const e=t.constructor;if(typeof e>"u")return!0;const r=e.prototype;return!(!f0(r)||!r.hasOwnProperty("isPrototypeOf"))}function f0(t){return Object.prototype.toString.call(t)==="[object Object]"}function Ox(t,e,r){return Ix(t)?typeof e=="function"?{...r,queryKey:t,queryFn:e}:{...e,queryKey:t}:t}function Px(t){return JSON.stringify(t,(e,r)=>Rx(r)?Object.keys(r).sort().reduce((n,s)=>(n[s]=r[s],n),{}):typeof r=="bigint"?r.toString():r)}function Dx(t,e){return typeof t=="function"?t(...e):!!t}function Nx(t,e){const r={};return Object.keys(t).forEach(n=>{Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:()=>(e.trackedProps.add(n),t[n])})}),r}function kx(t,e){const r=$h({context:t.context}),n=ax(),s=ux(),i=r.defaultQueryOptions({...t,queryKeyHashFn:Px});i._optimisticResults=n?"isRestoring":"optimistic",i.onError&&(i.onError=it.batchCalls(i.onError)),i.onSuccess&&(i.onSuccess=it.batchCalls(i.onSuccess)),i.onSettled&&(i.onSettled=it.batchCalls(i.onSettled)),i.suspense&&typeof i.staleTime!="number"&&(i.staleTime=1e3),(i.suspense||i.useErrorBoundary)&&(s.isReset()||(i.retryOnMount=!1));const[o]=De.useState(()=>new e(r,i)),a=o.getOptimisticResult(i);if(Tx(De.useCallback(f=>n?()=>{}:o.subscribe(it.batchCalls(f)),[o,n]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),De.useEffect(()=>{s.clearReset()},[s]),De.useEffect(()=>{o.setOptions(i,{listeners:!1})},[i,o]),i.suspense&&a.isLoading&&a.isFetching&&!n)throw o.fetchOptimistic(i).then(({data:f})=>{i.onSuccess?.(f),i.onSettled?.(f,null)}).catch(f=>{s.clearReset(),i.onError?.(f),i.onSettled?.(void 0,f)});if(a.isError&&!s.isReset()&&!a.isFetching&&Dx(i.useErrorBoundary,[a.error,o.getCurrentQuery()]))throw a.error;const c=a.status==="loading"&&a.fetchStatus==="idle"?"idle":a.status,l=c==="idle",u=c==="loading"&&a.fetchStatus==="fetching";return{...a,defaultedOptions:i,isIdle:l,isLoading:u,observer:o,status:c}}function Mx(t,e,r){const n=hg(t,e,r);return hx({context:vl,...n})}function Th(t,e,r){const n=Ox(t,e,r),s=kx({context:vl,...n},K8),i={data:s.data,error:s.error,fetchStatus:s.fetchStatus,isError:s.isError,isFetched:s.isFetched,isFetchedAfterMount:s.isFetchedAfterMount,isFetching:s.isFetching,isIdle:s.isIdle,isLoading:s.isLoading,isRefetching:s.isRefetching,isSuccess:s.isSuccess,refetch:s.refetch,status:s.status,internal:{dataUpdatedAt:s.dataUpdatedAt,errorUpdatedAt:s.errorUpdatedAt,failureCount:s.failureCount,isFetchedAfterMount:s.isFetchedAfterMount,isLoadingError:s.isLoadingError,isPaused:s.isPaused,isPlaceholderData:s.isPlaceholderData,isPreviousData:s.isPreviousData,isRefetchError:s.isRefetchError,isStale:s.isStale,remove:s.remove}};return s.defaultedOptions.notifyOnChangeProps?i:Nx(i,s.observer)}var Ux=()=>$h({context:vl});function Bx({chainId:t}={}){return Sg.useSyncExternalStoreWithSelector(e=>Sy({chainId:t},e),()=>Jt({chainId:t}),()=>Jt({chainId:t}),e=>e,(e,r)=>e.uid===r.uid)}function Xl({chainId:t}){return[{entity:"walletClient",chainId:t,persist:!1}]}function jx({queryKey:[{chainId:t}]}){return Jo({chainId:t})}function Lx({chainId:t,suspense:e,onError:r,onSettled:n,onSuccess:s}={}){const{connector:i}=Rg(),o=Tg({chainId:t}),a=Th(Xl({chainId:o}),jx,{cacheTime:0,enabled:!!i,staleTime:1/0,suspense:e,onError:r,onSettled:n,onSuccess:s}),c=Ux();return De.useEffect(()=>Ay({chainId:o},u=>{u?c.invalidateQueries(Xl({chainId:o})):c.removeQueries(Xl({chainId:o}))}),[c,o]),a}function Tg({chainId:t}={}){return Bx({chainId:t}).chain.id}var eu=t=>typeof t=="object"&&!Array.isArray(t);function Ig(t,e,r=e,n=Au){const s=De.useRef([]),i=Sg.useSyncExternalStoreWithSelector(t,e,r,o=>o,(o,a)=>{if(eu(o)&&eu(a)&&s.current.length){for(const c of s.current)if(!n(o[c],a[c]))return!1;return!0}return n(o,a)});if(eu(i)){const o={...i};return Object.defineProperties(o,Object.entries(o).reduce((a,[c,l])=>({...a,[c]:{configurable:!1,enumerable:!0,get:()=>(s.current.includes(c)||s.current.push(c),l)}}),{})),o}return i}function Rg({onConnect:t,onDisconnect:e}={}){const r=$g(),n=De.useCallback(a=>jp(a),[r]),s=Ig(n,za),i=De.useRef(),o=i.current;return De.useEffect(()=>{o?.status!=="connected"&&s.status==="connected"&&t?.({address:s.address,connector:s.connector,isReconnected:o?.status==="reconnecting"||o?.status===void 0}),o?.status==="connected"&&s.status==="disconnected"&&e?.(),i.current=s},[t,e,o,s]),s}function Fx(){const t=$g(),e=De.useCallback(r=>Lp(r),[t]);return Ig(e,oo)}function Wx({accessList:t,account:e,activeChainId:r,chainId:n,data:s,gas:i,gasPrice:o,maxFeePerGas:a,maxPriorityFeePerGas:c,nonce:l,to:u,value:f,scopeKey:m,walletClientAddress:g}){return[{entity:"prepareSendTransaction",activeChainId:r,accessList:t,account:e,chainId:n,data:s,gas:i,gasPrice:o,maxFeePerGas:a,maxPriorityFeePerGas:c,nonce:l,to:u,value:f,scopeKey:m,walletClientAddress:g}]}function zx({walletClient:t}){return({queryKey:[{accessList:e,account:r,chainId:n,data:s,gas:i,gasPrice:o,maxFeePerGas:a,maxPriorityFeePerGas:c,nonce:l,to:u,value:f}]})=>{if(!u)throw new Error("to is required");return Fp({accessList:e,account:r,chainId:n,data:s,gas:i,gasPrice:o,maxFeePerGas:a,maxPriorityFeePerGas:c,nonce:l,to:u,value:f,walletClient:t})}}function Hx({accessList:t,account:e,chainId:r,cacheTime:n,data:s,enabled:i=!0,gas:o,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,scopeKey:f,staleTime:m,suspense:g,to:w,value:_,onError:v,onSettled:T,onSuccess:b}={}){const{chain:E}=Fx(),{data:x}=Lx({chainId:r}),C=Th(Wx({accessList:t,activeChainId:E?.id,account:e,chainId:r,data:s,gas:o,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,scopeKey:f,to:w,value:_,walletClientAddress:x?.account.address}),zx({walletClient:x}),{cacheTime:n,enabled:!!(i&&x&&w),staleTime:m,suspense:g,onError:v,onSettled:T,onSuccess:b});return Object.assign(C,{config:{mode:"prepared",...C.isSuccess?C.data:void 0}})}var qx=t=>[{entity:"sendTransaction",...t}],Vx=({accessList:t,account:e,chainId:r,data:n,gas:s,gasPrice:i,maxFeePerGas:o,maxPriorityFeePerGas:a,mode:c,nonce:l,to:u,value:f})=>{if(!u)throw new Error("to is required.");return My({accessList:t,account:e,chainId:r,data:n,gas:s,gasPrice:i,maxFeePerGas:o,maxPriorityFeePerGas:a,mode:c,nonce:l,to:u,value:f})};function Zx({accessList:t,account:e,chainId:r,data:n,gas:s,gasPrice:i,maxFeePerGas:o,maxPriorityFeePerGas:a,mode:c,nonce:l,to:u,value:f,onError:m,onMutate:g,onSettled:w,onSuccess:_}={}){const{data:v,error:T,isError:b,isIdle:E,isLoading:x,isSuccess:C,mutate:A,mutateAsync:h,reset:S,status:P,variables:D}=Mx(qx({accessList:t,account:e,chainId:r,data:n,gas:s,gasPrice:i,maxFeePerGas:o,maxPriorityFeePerGas:a,mode:c,nonce:l,to:u,value:f}),Vx,{onError:m,onMutate:g,onSettled:w,onSuccess:_}),k=De.useCallback(Y=>A({chainId:r,mode:c,...Y||{accessList:t,account:e,chainId:r,data:n,gas:s,gasPrice:i,maxFeePerGas:o,maxPriorityFeePerGas:a,mode:c,nonce:l,value:f,to:u}}),[t,e,r,n,s,i,o,a,c,A,l,u,f]),K=De.useCallback(Y=>h({chainId:r,mode:c,...Y||{accessList:t,account:e,chainId:r,data:n,gas:s,gasPrice:i,maxFeePerGas:o,maxPriorityFeePerGas:a,mode:c,nonce:l,value:f,to:u}}),[t,e,r,n,s,i,o,a,c,h,l,u,f]);return{data:v,error:T,isError:b,isIdle:E,isLoading:x,isSuccess:C,reset:S,sendTransaction:c==="prepared"&&!u?void 0:k,sendTransactionAsync:c==="prepared"&&!u?void 0:K,status:P,variables:D}}function Gx({confirmations:t,chainId:e,hash:r,scopeKey:n,timeout:s}){return[{entity:"waitForTransaction",confirmations:t,chainId:e,hash:r,scopeKey:n,timeout:s}]}function Kx({onReplaced:t}){return({queryKey:[{chainId:e,confirmations:r,hash:n,timeout:s}]})=>{if(!n)throw new Error("hash is required");return Uy({chainId:e,confirmations:r,hash:n,onReplaced:t,timeout:s})}}function Qx({chainId:t,confirmations:e,hash:r,timeout:n,cacheTime:s,enabled:i=!0,scopeKey:o,staleTime:a,suspense:c,onError:l,onReplaced:u,onSettled:f,onSuccess:m}={}){const g=Tg({chainId:t});return Th(Gx({chainId:g,confirmations:e,hash:r,scopeKey:o,timeout:n}),Kx({onReplaced:u}),{cacheTime:s,enabled:!!(i&&r),staleTime:a,suspense:c,onError:l,onSettled:f,onSuccess:m})}var Os,Ri,Yx=class extends Kc{constructor({chains:t,options:e}){super({chains:t,options:{reloadOnDisconnect:!1,...e}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,kt(this,Os,void 0),kt(this,Ri,void 0),this.onAccountsChanged=r=>{r.length===0?this.emit("disconnect"):this.emit("change",{account:Ht(r[0])})},this.onChainChanged=r=>{const n=Wa(r),s=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:s}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:t}={}){try{const e=await this.getProvider();e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});const r=await e.enable(),n=Ht(r[0]);let s=await this.getChainId(),i=this.isChainUnsupported(s);return t&&s!==t&&(s=(await this.switchChain(t)).id,i=this.isChainUnsupported(s)),{account:n,chain:{id:s,unsupported:i}}}catch(e){throw/(user closed modal|accounts received is empty)/i.test(e.message)?new Mt(e):e}}async disconnect(){if(!We(this,Ri))return;const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){const e=await(await this.getProvider()).request({method:"eth_accounts"});return Ht(e[0])}async getChainId(){const t=await this.getProvider();return Wa(t.chainId)}async getProvider(){if(!We(this,Ri)){let t=(await Zn(()=>import("./index.1pHIXn36.js").then(i=>i.i),__vite__mapDeps([3,4]))).default;typeof t!="function"&&typeof t.default=="function"&&(t=t.default),io(this,Os,new t(this.options));const e=We(this,Os).walletExtension?.getChainId(),r=this.chains.find(i=>this.options.chainId?i.id===this.options.chainId:i.id===e)||this.chains[0],n=this.options.chainId||r?.id,s=this.options.jsonRpcUrl||r?.rpcUrls.default.http[0];io(this,Ri,We(this,Os).makeWeb3Provider(s,n))}return We(this,Ri)}async getWalletClient({chainId:t}={}){const[e,r]=await Promise.all([this.getProvider(),this.getAccount()]),n=this.chains.find(s=>s.id===t);if(!e)throw new Error("provider is required.");return Gc({account:r,chain:n,transport:Vc(e)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){const e=await this.getProvider(),r=ve(t);try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),this.chains.find(n=>n.id===t)??{id:t,name:`Chain ${r}`,network:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(n){const s=this.chains.find(i=>i.id===t);if(!s)throw new Np({chainId:t,connectorId:this.id});if(n.code===4902)try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:s.name,nativeCurrency:s.nativeCurrency,rpcUrls:[s.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(s)}]}),s}catch(i){throw new Mt(i)}throw new cr(n)}}async watchAsset({address:t,decimals:e=18,image:r,symbol:n}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:r,symbol:n}}})}};Os=new WeakMap;Ri=new WeakMap;var Jx={},xl={},Ee={},Og={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});function e(a,c){var l=a>>>16&65535,u=a&65535,f=c>>>16&65535,m=c&65535;return u*m+(l*m+u*f<<16>>>0)|0}t.mul=Math.imul||e;function r(a,c){return a+c|0}t.add=r;function n(a,c){return a-c|0}t.sub=n;function s(a,c){return a<<c|a>>>32-c}t.rotl=s;function i(a,c){return a<<32-c|a>>>c}t.rotr=i;function o(a){return typeof a=="number"&&isFinite(a)&&Math.floor(a)===a}t.isInteger=Number.isInteger||o,t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(a){return t.isInteger(a)&&a>=-t.MAX_SAFE_INTEGER&&a<=t.MAX_SAFE_INTEGER}})(Og);Object.defineProperty(Ee,"__esModule",{value:!0});var Pg=Og;function Xx(t,e){return e===void 0&&(e=0),(t[e+0]<<8|t[e+1])<<16>>16}Ee.readInt16BE=Xx;function e_(t,e){return e===void 0&&(e=0),(t[e+0]<<8|t[e+1])>>>0}Ee.readUint16BE=e_;function t_(t,e){return e===void 0&&(e=0),(t[e+1]<<8|t[e])<<16>>16}Ee.readInt16LE=t_;function r_(t,e){return e===void 0&&(e=0),(t[e+1]<<8|t[e])>>>0}Ee.readUint16LE=r_;function Dg(t,e,r){return e===void 0&&(e=new Uint8Array(2)),r===void 0&&(r=0),e[r+0]=t>>>8,e[r+1]=t>>>0,e}Ee.writeUint16BE=Dg;Ee.writeInt16BE=Dg;function Ng(t,e,r){return e===void 0&&(e=new Uint8Array(2)),r===void 0&&(r=0),e[r+0]=t>>>0,e[r+1]=t>>>8,e}Ee.writeUint16LE=Ng;Ee.writeInt16LE=Ng;function Gu(t,e){return e===void 0&&(e=0),t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3]}Ee.readInt32BE=Gu;function Ku(t,e){return e===void 0&&(e=0),(t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3])>>>0}Ee.readUint32BE=Ku;function Qu(t,e){return e===void 0&&(e=0),t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e]}Ee.readInt32LE=Qu;function Yu(t,e){return e===void 0&&(e=0),(t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e])>>>0}Ee.readUint32LE=Yu;function gc(t,e,r){return e===void 0&&(e=new Uint8Array(4)),r===void 0&&(r=0),e[r+0]=t>>>24,e[r+1]=t>>>16,e[r+2]=t>>>8,e[r+3]=t>>>0,e}Ee.writeUint32BE=gc;Ee.writeInt32BE=gc;function mc(t,e,r){return e===void 0&&(e=new Uint8Array(4)),r===void 0&&(r=0),e[r+0]=t>>>0,e[r+1]=t>>>8,e[r+2]=t>>>16,e[r+3]=t>>>24,e}Ee.writeUint32LE=mc;Ee.writeInt32LE=mc;function n_(t,e){e===void 0&&(e=0);var r=Gu(t,e),n=Gu(t,e+4);return r*4294967296+n-(n>>31)*4294967296}Ee.readInt64BE=n_;function i_(t,e){e===void 0&&(e=0);var r=Ku(t,e),n=Ku(t,e+4);return r*4294967296+n}Ee.readUint64BE=i_;function s_(t,e){e===void 0&&(e=0);var r=Qu(t,e),n=Qu(t,e+4);return n*4294967296+r-(r>>31)*4294967296}Ee.readInt64LE=s_;function o_(t,e){e===void 0&&(e=0);var r=Yu(t,e),n=Yu(t,e+4);return n*4294967296+r}Ee.readUint64LE=o_;function kg(t,e,r){return e===void 0&&(e=new Uint8Array(8)),r===void 0&&(r=0),gc(t/4294967296>>>0,e,r),gc(t>>>0,e,r+4),e}Ee.writeUint64BE=kg;Ee.writeInt64BE=kg;function Mg(t,e,r){return e===void 0&&(e=new Uint8Array(8)),r===void 0&&(r=0),mc(t>>>0,e,r),mc(t/4294967296>>>0,e,r+4),e}Ee.writeUint64LE=Mg;Ee.writeInt64LE=Mg;function a_(t,e,r){if(r===void 0&&(r=0),t%8!==0)throw new Error("readUintBE supports only bitLengths divisible by 8");if(t/8>e.length-r)throw new Error("readUintBE: array is too short for the given bitLength");for(var n=0,s=1,i=t/8+r-1;i>=r;i--)n+=e[i]*s,s*=256;return n}Ee.readUintBE=a_;function c_(t,e,r){if(r===void 0&&(r=0),t%8!==0)throw new Error("readUintLE supports only bitLengths divisible by 8");if(t/8>e.length-r)throw new Error("readUintLE: array is too short for the given bitLength");for(var n=0,s=1,i=r;i<r+t/8;i++)n+=e[i]*s,s*=256;return n}Ee.readUintLE=c_;function l_(t,e,r,n){if(r===void 0&&(r=new Uint8Array(t/8)),n===void 0&&(n=0),t%8!==0)throw new Error("writeUintBE supports only bitLengths divisible by 8");if(!Pg.isSafeInteger(e))throw new Error("writeUintBE value must be an integer");for(var s=1,i=t/8+n-1;i>=n;i--)r[i]=e/s&255,s*=256;return r}Ee.writeUintBE=l_;function u_(t,e,r,n){if(r===void 0&&(r=new Uint8Array(t/8)),n===void 0&&(n=0),t%8!==0)throw new Error("writeUintLE supports only bitLengths divisible by 8");if(!Pg.isSafeInteger(e))throw new Error("writeUintLE value must be an integer");for(var s=1,i=n;i<n+t/8;i++)r[i]=e/s&255,s*=256;return r}Ee.writeUintLE=u_;function d_(t,e){e===void 0&&(e=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.getFloat32(e)}Ee.readFloat32BE=d_;function h_(t,e){e===void 0&&(e=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.getFloat32(e,!0)}Ee.readFloat32LE=h_;function f_(t,e){e===void 0&&(e=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.getFloat64(e)}Ee.readFloat64BE=f_;function p_(t,e){e===void 0&&(e=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.getFloat64(e,!0)}Ee.readFloat64LE=p_;function g_(t,e,r){e===void 0&&(e=new Uint8Array(4)),r===void 0&&(r=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.setFloat32(r,t),e}Ee.writeFloat32BE=g_;function m_(t,e,r){e===void 0&&(e=new Uint8Array(4)),r===void 0&&(r=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.setFloat32(r,t,!0),e}Ee.writeFloat32LE=m_;function w_(t,e,r){e===void 0&&(e=new Uint8Array(8)),r===void 0&&(r=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.setFloat64(r,t),e}Ee.writeFloat64BE=w_;function b_(t,e,r){e===void 0&&(e=new Uint8Array(8)),r===void 0&&(r=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.setFloat64(r,t,!0),e}Ee.writeFloat64LE=b_;var mr={};Object.defineProperty(mr,"__esModule",{value:!0});function y_(t){for(var e=0;e<t.length;e++)t[e]=0;return t}mr.wipe=y_;Object.defineProperty(xl,"__esModule",{value:!0});var Ct=Ee,Ju=mr,v_=20;function x_(t,e,r){for(var n=1634760805,s=857760878,i=2036477234,o=1797285236,a=r[3]<<24|r[2]<<16|r[1]<<8|r[0],c=r[7]<<24|r[6]<<16|r[5]<<8|r[4],l=r[11]<<24|r[10]<<16|r[9]<<8|r[8],u=r[15]<<24|r[14]<<16|r[13]<<8|r[12],f=r[19]<<24|r[18]<<16|r[17]<<8|r[16],m=r[23]<<24|r[22]<<16|r[21]<<8|r[20],g=r[27]<<24|r[26]<<16|r[25]<<8|r[24],w=r[31]<<24|r[30]<<16|r[29]<<8|r[28],_=e[3]<<24|e[2]<<16|e[1]<<8|e[0],v=e[7]<<24|e[6]<<16|e[5]<<8|e[4],T=e[11]<<24|e[10]<<16|e[9]<<8|e[8],b=e[15]<<24|e[14]<<16|e[13]<<8|e[12],E=n,x=s,C=i,A=o,h=a,S=c,P=l,D=u,k=f,K=m,Y=g,W=w,j=_,M=v,U=T,L=b,J=0;J<v_;J+=2)E=E+h|0,j^=E,j=j>>>16|j<<16,k=k+j|0,h^=k,h=h>>>20|h<<12,x=x+S|0,M^=x,M=M>>>16|M<<16,K=K+M|0,S^=K,S=S>>>20|S<<12,C=C+P|0,U^=C,U=U>>>16|U<<16,Y=Y+U|0,P^=Y,P=P>>>20|P<<12,A=A+D|0,L^=A,L=L>>>16|L<<16,W=W+L|0,D^=W,D=D>>>20|D<<12,C=C+P|0,U^=C,U=U>>>24|U<<8,Y=Y+U|0,P^=Y,P=P>>>25|P<<7,A=A+D|0,L^=A,L=L>>>24|L<<8,W=W+L|0,D^=W,D=D>>>25|D<<7,x=x+S|0,M^=x,M=M>>>24|M<<8,K=K+M|0,S^=K,S=S>>>25|S<<7,E=E+h|0,j^=E,j=j>>>24|j<<8,k=k+j|0,h^=k,h=h>>>25|h<<7,E=E+S|0,L^=E,L=L>>>16|L<<16,Y=Y+L|0,S^=Y,S=S>>>20|S<<12,x=x+P|0,j^=x,j=j>>>16|j<<16,W=W+j|0,P^=W,P=P>>>20|P<<12,C=C+D|0,M^=C,M=M>>>16|M<<16,k=k+M|0,D^=k,D=D>>>20|D<<12,A=A+h|0,U^=A,U=U>>>16|U<<16,K=K+U|0,h^=K,h=h>>>20|h<<12,C=C+D|0,M^=C,M=M>>>24|M<<8,k=k+M|0,D^=k,D=D>>>25|D<<7,A=A+h|0,U^=A,U=U>>>24|U<<8,K=K+U|0,h^=K,h=h>>>25|h<<7,x=x+P|0,j^=x,j=j>>>24|j<<8,W=W+j|0,P^=W,P=P>>>25|P<<7,E=E+S|0,L^=E,L=L>>>24|L<<8,Y=Y+L|0,S^=Y,S=S>>>25|S<<7;Ct.writeUint32LE(E+n|0,t,0),Ct.writeUint32LE(x+s|0,t,4),Ct.writeUint32LE(C+i|0,t,8),Ct.writeUint32LE(A+o|0,t,12),Ct.writeUint32LE(h+a|0,t,16),Ct.writeUint32LE(S+c|0,t,20),Ct.writeUint32LE(P+l|0,t,24),Ct.writeUint32LE(D+u|0,t,28),Ct.writeUint32LE(k+f|0,t,32),Ct.writeUint32LE(K+m|0,t,36),Ct.writeUint32LE(Y+g|0,t,40),Ct.writeUint32LE(W+w|0,t,44),Ct.writeUint32LE(j+_|0,t,48),Ct.writeUint32LE(M+v|0,t,52),Ct.writeUint32LE(U+T|0,t,56),Ct.writeUint32LE(L+b|0,t,60)}function Ug(t,e,r,n,s){if(s===void 0&&(s=0),t.length!==32)throw new Error("ChaCha: key size must be 32 bytes");if(n.length<r.length)throw new Error("ChaCha: destination is shorter than source");var i,o;if(s===0){if(e.length!==8&&e.length!==12)throw new Error("ChaCha nonce must be 8 or 12 bytes");i=new Uint8Array(16),o=i.length-e.length,i.set(e,o)}else{if(e.length!==16)throw new Error("ChaCha nonce with counter must be 16 bytes");i=e,o=s}for(var a=new Uint8Array(64),c=0;c<r.length;c+=64){x_(a,i,t);for(var l=c;l<c+64&&l<r.length;l++)n[l]=r[l]^a[l-c];C_(i,0,o)}return Ju.wipe(a),s===0&&Ju.wipe(i),n}xl.streamXOR=Ug;function __(t,e,r,n){return n===void 0&&(n=0),Ju.wipe(r),Ug(t,e,r,r,n)}xl.stream=__;function C_(t,e,r){for(var n=1;r--;)n=n+(t[e]&255)|0,t[e]=n&255,n>>>=8,e++;if(n>0)throw new Error("ChaCha: counter overflow")}var Bg={},Pn={};Object.defineProperty(Pn,"__esModule",{value:!0});function E_(t,e,r){return~(t-1)&e|t-1&r}Pn.select=E_;function S_(t,e){return(t|0)-(e|0)-1>>>31&1}Pn.lessOrEqual=S_;function jg(t,e){if(t.length!==e.length)return 0;for(var r=0,n=0;n<t.length;n++)r|=t[n]^e[n];return 1&r-1>>>8}Pn.compare=jg;function A_(t,e){return t.length===0||e.length===0?!1:jg(t,e)!==0}Pn.equal=A_;(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Pn,r=mr;t.DIGEST_LENGTH=16;var n=function(){function o(a){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var c=a[0]|a[1]<<8;this._r[0]=c&8191;var l=a[2]|a[3]<<8;this._r[1]=(c>>>13|l<<3)&8191;var u=a[4]|a[5]<<8;this._r[2]=(l>>>10|u<<6)&7939;var f=a[6]|a[7]<<8;this._r[3]=(u>>>7|f<<9)&8191;var m=a[8]|a[9]<<8;this._r[4]=(f>>>4|m<<12)&255,this._r[5]=m>>>1&8190;var g=a[10]|a[11]<<8;this._r[6]=(m>>>14|g<<2)&8191;var w=a[12]|a[13]<<8;this._r[7]=(g>>>11|w<<5)&8065;var _=a[14]|a[15]<<8;this._r[8]=(w>>>8|_<<8)&8191,this._r[9]=_>>>5&127,this._pad[0]=a[16]|a[17]<<8,this._pad[1]=a[18]|a[19]<<8,this._pad[2]=a[20]|a[21]<<8,this._pad[3]=a[22]|a[23]<<8,this._pad[4]=a[24]|a[25]<<8,this._pad[5]=a[26]|a[27]<<8,this._pad[6]=a[28]|a[29]<<8,this._pad[7]=a[30]|a[31]<<8}return o.prototype._blocks=function(a,c,l){for(var u=this._fin?0:2048,f=this._h[0],m=this._h[1],g=this._h[2],w=this._h[3],_=this._h[4],v=this._h[5],T=this._h[6],b=this._h[7],E=this._h[8],x=this._h[9],C=this._r[0],A=this._r[1],h=this._r[2],S=this._r[3],P=this._r[4],D=this._r[5],k=this._r[6],K=this._r[7],Y=this._r[8],W=this._r[9];l>=16;){var j=a[c+0]|a[c+1]<<8;f+=j&8191;var M=a[c+2]|a[c+3]<<8;m+=(j>>>13|M<<3)&8191;var U=a[c+4]|a[c+5]<<8;g+=(M>>>10|U<<6)&8191;var L=a[c+6]|a[c+7]<<8;w+=(U>>>7|L<<9)&8191;var J=a[c+8]|a[c+9]<<8;_+=(L>>>4|J<<12)&8191,v+=J>>>1&8191;var te=a[c+10]|a[c+11]<<8;T+=(J>>>14|te<<2)&8191;var X=a[c+12]|a[c+13]<<8;b+=(te>>>11|X<<5)&8191;var ie=a[c+14]|a[c+15]<<8;E+=(X>>>8|ie<<8)&8191,x+=ie>>>5|u;var V=0,se=V;se+=f*C,se+=m*(5*W),se+=g*(5*Y),se+=w*(5*K),se+=_*(5*k),V=se>>>13,se&=8191,se+=v*(5*D),se+=T*(5*P),se+=b*(5*S),se+=E*(5*h),se+=x*(5*A),V+=se>>>13,se&=8191;var he=V;he+=f*A,he+=m*C,he+=g*(5*W),he+=w*(5*Y),he+=_*(5*K),V=he>>>13,he&=8191,he+=v*(5*k),he+=T*(5*D),he+=b*(5*P),he+=E*(5*S),he+=x*(5*h),V+=he>>>13,he&=8191;var _e=V;_e+=f*h,_e+=m*A,_e+=g*C,_e+=w*(5*W),_e+=_*(5*Y),V=_e>>>13,_e&=8191,_e+=v*(5*K),_e+=T*(5*k),_e+=b*(5*D),_e+=E*(5*P),_e+=x*(5*S),V+=_e>>>13,_e&=8191;var Ce=V;Ce+=f*S,Ce+=m*h,Ce+=g*A,Ce+=w*C,Ce+=_*(5*W),V=Ce>>>13,Ce&=8191,Ce+=v*(5*Y),Ce+=T*(5*K),Ce+=b*(5*k),Ce+=E*(5*D),Ce+=x*(5*P),V+=Ce>>>13,Ce&=8191;var ye=V;ye+=f*P,ye+=m*S,ye+=g*h,ye+=w*A,ye+=_*C,V=ye>>>13,ye&=8191,ye+=v*(5*W),ye+=T*(5*Y),ye+=b*(5*K),ye+=E*(5*k),ye+=x*(5*D),V+=ye>>>13,ye&=8191;var Se=V;Se+=f*D,Se+=m*P,Se+=g*S,Se+=w*h,Se+=_*A,V=Se>>>13,Se&=8191,Se+=v*C,Se+=T*(5*W),Se+=b*(5*Y),Se+=E*(5*K),Se+=x*(5*k),V+=Se>>>13,Se&=8191;var me=V;me+=f*k,me+=m*D,me+=g*P,me+=w*S,me+=_*h,V=me>>>13,me&=8191,me+=v*A,me+=T*C,me+=b*(5*W),me+=E*(5*Y),me+=x*(5*K),V+=me>>>13,me&=8191;var Ie=V;Ie+=f*K,Ie+=m*k,Ie+=g*D,Ie+=w*P,Ie+=_*S,V=Ie>>>13,Ie&=8191,Ie+=v*h,Ie+=T*A,Ie+=b*C,Ie+=E*(5*W),Ie+=x*(5*Y),V+=Ie>>>13,Ie&=8191;var Ne=V;Ne+=f*Y,Ne+=m*K,Ne+=g*k,Ne+=w*D,Ne+=_*P,V=Ne>>>13,Ne&=8191,Ne+=v*S,Ne+=T*h,Ne+=b*A,Ne+=E*C,Ne+=x*(5*W),V+=Ne>>>13,Ne&=8191;var Oe=V;Oe+=f*W,Oe+=m*Y,Oe+=g*K,Oe+=w*k,Oe+=_*D,V=Oe>>>13,Oe&=8191,Oe+=v*P,Oe+=T*S,Oe+=b*h,Oe+=E*A,Oe+=x*C,V+=Oe>>>13,Oe&=8191,V=(V<<2)+V|0,V=V+se|0,se=V&8191,V=V>>>13,he+=V,f=se,m=he,g=_e,w=Ce,_=ye,v=Se,T=me,b=Ie,E=Ne,x=Oe,c+=16,l-=16}this._h[0]=f,this._h[1]=m,this._h[2]=g,this._h[3]=w,this._h[4]=_,this._h[5]=v,this._h[6]=T,this._h[7]=b,this._h[8]=E,this._h[9]=x},o.prototype.finish=function(a,c){c===void 0&&(c=0);var l=new Uint16Array(10),u,f,m,g;if(this._leftover){for(g=this._leftover,this._buffer[g++]=1;g<16;g++)this._buffer[g]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(u=this._h[1]>>>13,this._h[1]&=8191,g=2;g<10;g++)this._h[g]+=u,u=this._h[g]>>>13,this._h[g]&=8191;for(this._h[0]+=u*5,u=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=u,u=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=u,l[0]=this._h[0]+5,u=l[0]>>>13,l[0]&=8191,g=1;g<10;g++)l[g]=this._h[g]+u,u=l[g]>>>13,l[g]&=8191;for(l[9]-=8192,f=(u^1)-1,g=0;g<10;g++)l[g]&=f;for(f=~f,g=0;g<10;g++)this._h[g]=this._h[g]&f|l[g];for(this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,m=this._h[0]+this._pad[0],this._h[0]=m&65535,g=1;g<8;g++)m=(this._h[g]+this._pad[g]|0)+(m>>>16)|0,this._h[g]=m&65535;return a[c+0]=this._h[0]>>>0,a[c+1]=this._h[0]>>>8,a[c+2]=this._h[1]>>>0,a[c+3]=this._h[1]>>>8,a[c+4]=this._h[2]>>>0,a[c+5]=this._h[2]>>>8,a[c+6]=this._h[3]>>>0,a[c+7]=this._h[3]>>>8,a[c+8]=this._h[4]>>>0,a[c+9]=this._h[4]>>>8,a[c+10]=this._h[5]>>>0,a[c+11]=this._h[5]>>>8,a[c+12]=this._h[6]>>>0,a[c+13]=this._h[6]>>>8,a[c+14]=this._h[7]>>>0,a[c+15]=this._h[7]>>>8,this._finished=!0,this},o.prototype.update=function(a){var c=0,l=a.length,u;if(this._leftover){u=16-this._leftover,u>l&&(u=l);for(var f=0;f<u;f++)this._buffer[this._leftover+f]=a[c+f];if(l-=u,c+=u,this._leftover+=u,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(l>=16&&(u=l-l%16,this._blocks(a,c,u),c+=u,l-=u),l){for(var f=0;f<l;f++)this._buffer[this._leftover+f]=a[c+f];this._leftover+=l}return this},o.prototype.digest=function(){if(this._finished)throw new Error("Poly1305 was finished");var a=new Uint8Array(16);return this.finish(a),a},o.prototype.clean=function(){return r.wipe(this._buffer),r.wipe(this._r),r.wipe(this._h),r.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},o}();t.Poly1305=n;function s(o,a){var c=new n(o);c.update(a);var l=c.digest();return c.clean(),l}t.oneTimeAuth=s;function i(o,a){return o.length!==t.DIGEST_LENGTH||a.length!==t.DIGEST_LENGTH?!1:e.equal(o,a)}t.equal=i})(Bg);(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=xl,r=Bg,n=mr,s=Ee,i=Pn;t.KEY_LENGTH=32,t.NONCE_LENGTH=12,t.TAG_LENGTH=16;var o=new Uint8Array(16),a=function(){function c(l){if(this.nonceLength=t.NONCE_LENGTH,this.tagLength=t.TAG_LENGTH,l.length!==t.KEY_LENGTH)throw new Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(l)}return c.prototype.seal=function(l,u,f,m){if(l.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");var g=new Uint8Array(16);g.set(l,g.length-l.length);var w=new Uint8Array(32);e.stream(this._key,g,w,4);var _=u.length+this.tagLength,v;if(m){if(m.length!==_)throw new Error("ChaCha20Poly1305: incorrect destination length");v=m}else v=new Uint8Array(_);return e.streamXOR(this._key,g,u,v,4),this._authenticate(v.subarray(v.length-this.tagLength,v.length),w,v.subarray(0,v.length-this.tagLength),f),n.wipe(g),v},c.prototype.open=function(l,u,f,m){if(l.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");if(u.length<this.tagLength)return null;var g=new Uint8Array(16);g.set(l,g.length-l.length);var w=new Uint8Array(32);e.stream(this._key,g,w,4);var _=new Uint8Array(this.tagLength);if(this._authenticate(_,w,u.subarray(0,u.length-this.tagLength),f),!i.equal(_,u.subarray(u.length-this.tagLength,u.length)))return null;var v=u.length-this.tagLength,T;if(m){if(m.length!==v)throw new Error("ChaCha20Poly1305: incorrect destination length");T=m}else T=new Uint8Array(v);return e.streamXOR(this._key,g,u.subarray(0,u.length-this.tagLength),T,4),n.wipe(g),T},c.prototype.clean=function(){return n.wipe(this._key),this},c.prototype._authenticate=function(l,u,f,m){var g=new r.Poly1305(u);m&&(g.update(m),m.length%16>0&&g.update(o.subarray(m.length%16))),g.update(f),f.length%16>0&&g.update(o.subarray(f.length%16));var w=new Uint8Array(8);m&&s.writeUint64LE(m.length,w),g.update(w),s.writeUint64LE(f.length,w),g.update(w);for(var _=g.digest(),v=0;v<_.length;v++)l[v]=_[v];g.clean(),n.wipe(_),n.wipe(w)},c}();t.ChaCha20Poly1305=a})(Jx);var Lg={},la={},Ih={};Object.defineProperty(Ih,"__esModule",{value:!0});function $_(t){return typeof t.saveState<"u"&&typeof t.restoreState<"u"&&typeof t.cleanSavedState<"u"}Ih.isSerializableHash=$_;Object.defineProperty(la,"__esModule",{value:!0});var br=Ih,T_=Pn,I_=mr,Fg=function(){function t(e,r){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var n=new Uint8Array(this.blockSize);r.length>this.blockSize?this._inner.update(r).finish(n).clean():n.set(r);for(var s=0;s<n.length;s++)n[s]^=54;this._inner.update(n);for(var s=0;s<n.length;s++)n[s]^=106;this._outer.update(n),br.isSerializableHash(this._inner)&&br.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),I_.wipe(n)}return t.prototype.reset=function(){if(!br.isSerializableHash(this._inner)||!br.isSerializableHash(this._outer))throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.clean=function(){br.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),br.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},t.prototype.update=function(e){return this._inner.update(e),this},t.prototype.finish=function(e){return this._finished?(this._outer.finish(e),this):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0,this)},t.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},t.prototype.saveState=function(){if(!br.isSerializableHash(this._inner))throw new Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},t.prototype.restoreState=function(e){if(!br.isSerializableHash(this._inner)||!br.isSerializableHash(this._outer))throw new Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.cleanSavedState=function(e){if(!br.isSerializableHash(this._inner))throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},t}();la.HMAC=Fg;function R_(t,e,r){var n=new Fg(t,e);n.update(r);var s=n.digest();return n.clean(),s}la.hmac=R_;la.equal=T_.equal;Object.defineProperty(Lg,"__esModule",{value:!0});var p0=la,g0=mr,O_=function(){function t(e,r,n,s){n===void 0&&(n=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=s;var i=p0.hmac(this._hash,n,r);this._hmac=new p0.HMAC(e,i),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return t.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(e===0)throw new Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},t.prototype.expand=function(e){for(var r=new Uint8Array(e),n=0;n<r.length;n++)this._bufpos===this._buffer.length&&this._fillBuffer(),r[n]=this._buffer[this._bufpos++];return r},t.prototype.clean=function(){this._hmac.clean(),g0.wipe(this._buffer),g0.wipe(this._counter),this._bufpos=0},t}(),bA=Lg.HKDF=O_,Wg={},_l={},Cl={};Object.defineProperty(Cl,"__esModule",{value:!0});Cl.BrowserRandomSource=void 0;const m0=65536;class P_{constructor(){this.isAvailable=!1,this.isInstantiated=!1;const e=typeof self<"u"?self.crypto||self.msCrypto:null;e&&e.getRandomValues!==void 0&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Browser random byte generator is not available.");const r=new Uint8Array(e);for(let n=0;n<r.length;n+=m0)this._crypto.getRandomValues(r.subarray(n,n+Math.min(r.length-n,m0)));return r}}Cl.BrowserRandomSource=P_;function D_(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var El={};const N_={},k_=Object.freeze(Object.defineProperty({__proto__:null,default:N_},Symbol.toStringTag,{value:"Module"})),M_=N0(k_);Object.defineProperty(El,"__esModule",{value:!0});El.NodeRandomSource=void 0;const U_=mr;class B_{constructor(){if(this.isAvailable=!1,this.isInstantiated=!1,typeof D_<"u"){const e=M_;e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Node.js random byte generator is not available.");let r=this._crypto.randomBytes(e);if(r.length!==e)throw new Error("NodeRandomSource: got fewer bytes than requested");const n=new Uint8Array(e);for(let s=0;s<n.length;s++)n[s]=r[s];return(0,U_.wipe)(r),n}}El.NodeRandomSource=B_;Object.defineProperty(_l,"__esModule",{value:!0});_l.SystemRandomSource=void 0;const j_=Cl,L_=El;class F_{constructor(){if(this.isAvailable=!1,this.name="",this._source=new j_.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new L_.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(e){if(!this.isAvailable)throw new Error("System random byte generator is not available.");return this._source.randomBytes(e)}}_l.SystemRandomSource=F_;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;const e=_l,r=Ee,n=mr;t.defaultRandomSource=new e.SystemRandomSource;function s(l,u=t.defaultRandomSource){return u.randomBytes(l)}t.randomBytes=s;function i(l=t.defaultRandomSource){const u=s(4,l),f=(0,r.readUint32LE)(u);return(0,n.wipe)(u),f}t.randomUint32=i;const o="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function a(l,u=o,f=t.defaultRandomSource){if(u.length<2)throw new Error("randomString charset is too short");if(u.length>256)throw new Error("randomString charset is too long");let m="";const g=u.length,w=256-256%g;for(;l>0;){const _=s(Math.ceil(l*256/w),f);for(let v=0;v<_.length&&l>0;v++){const T=_[v];T<w&&(m+=u.charAt(T%g),l--)}(0,n.wipe)(_)}return m}t.randomString=a;function c(l,u=o,f=t.defaultRandomSource){const m=Math.ceil(l/(Math.log(u.length)/Math.LN2));return a(m,u,f)}t.randomStringForEntropy=c})(Wg);var W_={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Ee,r=mr;t.DIGEST_LENGTH=32,t.BLOCK_SIZE=64;var n=function(){function a(){this.digestLength=t.DIGEST_LENGTH,this.blockSize=t.BLOCK_SIZE,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return a.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},a.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},a.prototype.clean=function(){r.wipe(this._buffer),r.wipe(this._temp),this.reset()},a.prototype.update=function(c,l){if(l===void 0&&(l=c.length),this._finished)throw new Error("SHA256: can't update because hash was finished.");var u=0;if(this._bytesHashed+=l,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&l>0;)this._buffer[this._bufferLength++]=c[u++],l--;this._bufferLength===this.blockSize&&(i(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(l>=this.blockSize&&(u=i(this._temp,this._state,c,u,l),l%=this.blockSize);l>0;)this._buffer[this._bufferLength++]=c[u++],l--;return this},a.prototype.finish=function(c){if(!this._finished){var l=this._bytesHashed,u=this._bufferLength,f=l/536870912|0,m=l<<3,g=l%64<56?64:128;this._buffer[u]=128;for(var w=u+1;w<g-8;w++)this._buffer[w]=0;e.writeUint32BE(f,this._buffer,g-8),e.writeUint32BE(m,this._buffer,g-4),i(this._temp,this._state,this._buffer,0,g),this._finished=!0}for(var w=0;w<this.digestLength/4;w++)e.writeUint32BE(this._state[w],c,w*4);return this},a.prototype.digest=function(){var c=new Uint8Array(this.digestLength);return this.finish(c),c},a.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},a.prototype.restoreState=function(c){return this._state.set(c.state),this._bufferLength=c.bufferLength,c.buffer&&this._buffer.set(c.buffer),this._bytesHashed=c.bytesHashed,this._finished=!1,this},a.prototype.cleanSavedState=function(c){r.wipe(c.state),c.buffer&&r.wipe(c.buffer),c.bufferLength=0,c.bytesHashed=0},a}();t.SHA256=n;var s=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function i(a,c,l,u,f){for(;f>=64;){for(var m=c[0],g=c[1],w=c[2],_=c[3],v=c[4],T=c[5],b=c[6],E=c[7],x=0;x<16;x++){var C=u+x*4;a[x]=e.readUint32BE(l,C)}for(var x=16;x<64;x++){var A=a[x-2],h=(A>>>17|A<<15)^(A>>>19|A<<13)^A>>>10;A=a[x-15];var S=(A>>>7|A<<25)^(A>>>18|A<<14)^A>>>3;a[x]=(h+a[x-7]|0)+(S+a[x-16]|0)}for(var x=0;x<64;x++){var h=(((v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7))+(v&T^~v&b)|0)+(E+(s[x]+a[x]|0)|0)|0,S=((m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10))+(m&g^m&w^g&w)|0;E=b,b=T,T=v,v=_+h|0,_=w,w=g,g=m,m=h+S|0}c[0]+=m,c[1]+=g,c[2]+=w,c[3]+=_,c[4]+=v,c[5]+=T,c[6]+=b,c[7]+=E,u+=64,f-=64}return u}function o(a){var c=new n;c.update(a);var l=c.digest();return c.clean(),l}t.hash=o})(W_);var z_={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.sharedKey=t.generateKeyPair=t.generateKeyPairFromSeed=t.scalarMultBase=t.scalarMult=t.SHARED_KEY_LENGTH=t.SECRET_KEY_LENGTH=t.PUBLIC_KEY_LENGTH=void 0;const e=Wg,r=mr;t.PUBLIC_KEY_LENGTH=32,t.SECRET_KEY_LENGTH=32,t.SHARED_KEY_LENGTH=32;function n(x){const C=new Float64Array(16);if(x)for(let A=0;A<x.length;A++)C[A]=x[A];return C}const s=new Uint8Array(32);s[0]=9;const i=n([56129,1]);function o(x){let C=1;for(let A=0;A<16;A++){let h=x[A]+C+65535;C=Math.floor(h/65536),x[A]=h-C*65536}x[0]+=C-1+37*(C-1)}function a(x,C,A){const h=~(A-1);for(let S=0;S<16;S++){const P=h&(x[S]^C[S]);x[S]^=P,C[S]^=P}}function c(x,C){const A=n(),h=n();for(let S=0;S<16;S++)h[S]=C[S];o(h),o(h),o(h);for(let S=0;S<2;S++){A[0]=h[0]-65517;for(let D=1;D<15;D++)A[D]=h[D]-65535-(A[D-1]>>16&1),A[D-1]&=65535;A[15]=h[15]-32767-(A[14]>>16&1);const P=A[15]>>16&1;A[14]&=65535,a(h,A,1-P)}for(let S=0;S<16;S++)x[2*S]=h[S]&255,x[2*S+1]=h[S]>>8}function l(x,C){for(let A=0;A<16;A++)x[A]=C[2*A]+(C[2*A+1]<<8);x[15]&=32767}function u(x,C,A){for(let h=0;h<16;h++)x[h]=C[h]+A[h]}function f(x,C,A){for(let h=0;h<16;h++)x[h]=C[h]-A[h]}function m(x,C,A){let h,S,P=0,D=0,k=0,K=0,Y=0,W=0,j=0,M=0,U=0,L=0,J=0,te=0,X=0,ie=0,V=0,se=0,he=0,_e=0,Ce=0,ye=0,Se=0,me=0,Ie=0,Ne=0,Oe=0,Ft=0,Jr=0,Dn=0,Xr=0,vs=0,ha=0,pt=A[0],st=A[1],ze=A[2],ut=A[3],wt=A[4],Ze=A[5],bt=A[6],y=A[7],d=A[8],p=A[9],$=A[10],I=A[11],O=A[12],N=A[13],ae=A[14],Te=A[15];h=C[0],P+=h*pt,D+=h*st,k+=h*ze,K+=h*ut,Y+=h*wt,W+=h*Ze,j+=h*bt,M+=h*y,U+=h*d,L+=h*p,J+=h*$,te+=h*I,X+=h*O,ie+=h*N,V+=h*ae,se+=h*Te,h=C[1],D+=h*pt,k+=h*st,K+=h*ze,Y+=h*ut,W+=h*wt,j+=h*Ze,M+=h*bt,U+=h*y,L+=h*d,J+=h*p,te+=h*$,X+=h*I,ie+=h*O,V+=h*N,se+=h*ae,he+=h*Te,h=C[2],k+=h*pt,K+=h*st,Y+=h*ze,W+=h*ut,j+=h*wt,M+=h*Ze,U+=h*bt,L+=h*y,J+=h*d,te+=h*p,X+=h*$,ie+=h*I,V+=h*O,se+=h*N,he+=h*ae,_e+=h*Te,h=C[3],K+=h*pt,Y+=h*st,W+=h*ze,j+=h*ut,M+=h*wt,U+=h*Ze,L+=h*bt,J+=h*y,te+=h*d,X+=h*p,ie+=h*$,V+=h*I,se+=h*O,he+=h*N,_e+=h*ae,Ce+=h*Te,h=C[4],Y+=h*pt,W+=h*st,j+=h*ze,M+=h*ut,U+=h*wt,L+=h*Ze,J+=h*bt,te+=h*y,X+=h*d,ie+=h*p,V+=h*$,se+=h*I,he+=h*O,_e+=h*N,Ce+=h*ae,ye+=h*Te,h=C[5],W+=h*pt,j+=h*st,M+=h*ze,U+=h*ut,L+=h*wt,J+=h*Ze,te+=h*bt,X+=h*y,ie+=h*d,V+=h*p,se+=h*$,he+=h*I,_e+=h*O,Ce+=h*N,ye+=h*ae,Se+=h*Te,h=C[6],j+=h*pt,M+=h*st,U+=h*ze,L+=h*ut,J+=h*wt,te+=h*Ze,X+=h*bt,ie+=h*y,V+=h*d,se+=h*p,he+=h*$,_e+=h*I,Ce+=h*O,ye+=h*N,Se+=h*ae,me+=h*Te,h=C[7],M+=h*pt,U+=h*st,L+=h*ze,J+=h*ut,te+=h*wt,X+=h*Ze,ie+=h*bt,V+=h*y,se+=h*d,he+=h*p,_e+=h*$,Ce+=h*I,ye+=h*O,Se+=h*N,me+=h*ae,Ie+=h*Te,h=C[8],U+=h*pt,L+=h*st,J+=h*ze,te+=h*ut,X+=h*wt,ie+=h*Ze,V+=h*bt,se+=h*y,he+=h*d,_e+=h*p,Ce+=h*$,ye+=h*I,Se+=h*O,me+=h*N,Ie+=h*ae,Ne+=h*Te,h=C[9],L+=h*pt,J+=h*st,te+=h*ze,X+=h*ut,ie+=h*wt,V+=h*Ze,se+=h*bt,he+=h*y,_e+=h*d,Ce+=h*p,ye+=h*$,Se+=h*I,me+=h*O,Ie+=h*N,Ne+=h*ae,Oe+=h*Te,h=C[10],J+=h*pt,te+=h*st,X+=h*ze,ie+=h*ut,V+=h*wt,se+=h*Ze,he+=h*bt,_e+=h*y,Ce+=h*d,ye+=h*p,Se+=h*$,me+=h*I,Ie+=h*O,Ne+=h*N,Oe+=h*ae,Ft+=h*Te,h=C[11],te+=h*pt,X+=h*st,ie+=h*ze,V+=h*ut,se+=h*wt,he+=h*Ze,_e+=h*bt,Ce+=h*y,ye+=h*d,Se+=h*p,me+=h*$,Ie+=h*I,Ne+=h*O,Oe+=h*N,Ft+=h*ae,Jr+=h*Te,h=C[12],X+=h*pt,ie+=h*st,V+=h*ze,se+=h*ut,he+=h*wt,_e+=h*Ze,Ce+=h*bt,ye+=h*y,Se+=h*d,me+=h*p,Ie+=h*$,Ne+=h*I,Oe+=h*O,Ft+=h*N,Jr+=h*ae,Dn+=h*Te,h=C[13],ie+=h*pt,V+=h*st,se+=h*ze,he+=h*ut,_e+=h*wt,Ce+=h*Ze,ye+=h*bt,Se+=h*y,me+=h*d,Ie+=h*p,Ne+=h*$,Oe+=h*I,Ft+=h*O,Jr+=h*N,Dn+=h*ae,Xr+=h*Te,h=C[14],V+=h*pt,se+=h*st,he+=h*ze,_e+=h*ut,Ce+=h*wt,ye+=h*Ze,Se+=h*bt,me+=h*y,Ie+=h*d,Ne+=h*p,Oe+=h*$,Ft+=h*I,Jr+=h*O,Dn+=h*N,Xr+=h*ae,vs+=h*Te,h=C[15],se+=h*pt,he+=h*st,_e+=h*ze,Ce+=h*ut,ye+=h*wt,Se+=h*Ze,me+=h*bt,Ie+=h*y,Ne+=h*d,Oe+=h*p,Ft+=h*$,Jr+=h*I,Dn+=h*O,Xr+=h*N,vs+=h*ae,ha+=h*Te,P+=38*he,D+=38*_e,k+=38*Ce,K+=38*ye,Y+=38*Se,W+=38*me,j+=38*Ie,M+=38*Ne,U+=38*Oe,L+=38*Ft,J+=38*Jr,te+=38*Dn,X+=38*Xr,ie+=38*vs,V+=38*ha,S=1,h=P+S+65535,S=Math.floor(h/65536),P=h-S*65536,h=D+S+65535,S=Math.floor(h/65536),D=h-S*65536,h=k+S+65535,S=Math.floor(h/65536),k=h-S*65536,h=K+S+65535,S=Math.floor(h/65536),K=h-S*65536,h=Y+S+65535,S=Math.floor(h/65536),Y=h-S*65536,h=W+S+65535,S=Math.floor(h/65536),W=h-S*65536,h=j+S+65535,S=Math.floor(h/65536),j=h-S*65536,h=M+S+65535,S=Math.floor(h/65536),M=h-S*65536,h=U+S+65535,S=Math.floor(h/65536),U=h-S*65536,h=L+S+65535,S=Math.floor(h/65536),L=h-S*65536,h=J+S+65535,S=Math.floor(h/65536),J=h-S*65536,h=te+S+65535,S=Math.floor(h/65536),te=h-S*65536,h=X+S+65535,S=Math.floor(h/65536),X=h-S*65536,h=ie+S+65535,S=Math.floor(h/65536),ie=h-S*65536,h=V+S+65535,S=Math.floor(h/65536),V=h-S*65536,h=se+S+65535,S=Math.floor(h/65536),se=h-S*65536,P+=S-1+37*(S-1),S=1,h=P+S+65535,S=Math.floor(h/65536),P=h-S*65536,h=D+S+65535,S=Math.floor(h/65536),D=h-S*65536,h=k+S+65535,S=Math.floor(h/65536),k=h-S*65536,h=K+S+65535,S=Math.floor(h/65536),K=h-S*65536,h=Y+S+65535,S=Math.floor(h/65536),Y=h-S*65536,h=W+S+65535,S=Math.floor(h/65536),W=h-S*65536,h=j+S+65535,S=Math.floor(h/65536),j=h-S*65536,h=M+S+65535,S=Math.floor(h/65536),M=h-S*65536,h=U+S+65535,S=Math.floor(h/65536),U=h-S*65536,h=L+S+65535,S=Math.floor(h/65536),L=h-S*65536,h=J+S+65535,S=Math.floor(h/65536),J=h-S*65536,h=te+S+65535,S=Math.floor(h/65536),te=h-S*65536,h=X+S+65535,S=Math.floor(h/65536),X=h-S*65536,h=ie+S+65535,S=Math.floor(h/65536),ie=h-S*65536,h=V+S+65535,S=Math.floor(h/65536),V=h-S*65536,h=se+S+65535,S=Math.floor(h/65536),se=h-S*65536,P+=S-1+37*(S-1),x[0]=P,x[1]=D,x[2]=k,x[3]=K,x[4]=Y,x[5]=W,x[6]=j,x[7]=M,x[8]=U,x[9]=L,x[10]=J,x[11]=te,x[12]=X,x[13]=ie,x[14]=V,x[15]=se}function g(x,C){m(x,C,C)}function w(x,C){const A=n();for(let h=0;h<16;h++)A[h]=C[h];for(let h=253;h>=0;h--)g(A,A),h!==2&&h!==4&&m(A,A,C);for(let h=0;h<16;h++)x[h]=A[h]}function _(x,C){const A=new Uint8Array(32),h=new Float64Array(80),S=n(),P=n(),D=n(),k=n(),K=n(),Y=n();for(let U=0;U<31;U++)A[U]=x[U];A[31]=x[31]&127|64,A[0]&=248,l(h,C);for(let U=0;U<16;U++)P[U]=h[U];S[0]=k[0]=1;for(let U=254;U>=0;--U){const L=A[U>>>3]>>>(U&7)&1;a(S,P,L),a(D,k,L),u(K,S,D),f(S,S,D),u(D,P,k),f(P,P,k),g(k,K),g(Y,S),m(S,D,S),m(D,P,K),u(K,S,D),f(S,S,D),g(P,S),f(D,k,Y),m(S,D,i),u(S,S,k),m(D,D,S),m(S,k,Y),m(k,P,h),g(P,K),a(S,P,L),a(D,k,L)}for(let U=0;U<16;U++)h[U+16]=S[U],h[U+32]=D[U],h[U+48]=P[U],h[U+64]=k[U];const W=h.subarray(32),j=h.subarray(16);w(W,W),m(j,j,W);const M=new Uint8Array(32);return c(M,j),M}t.scalarMult=_;function v(x){return _(x,s)}t.scalarMultBase=v;function T(x){if(x.length!==t.SECRET_KEY_LENGTH)throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);const C=new Uint8Array(x);return{publicKey:v(C),secretKey:C}}t.generateKeyPairFromSeed=T;function b(x){const C=(0,e.randomBytes)(32,x),A=T(C);return(0,r.wipe)(C),A}t.generateKeyPair=b;function E(x,C,A=!1){if(x.length!==t.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect secret key length");if(C.length!==t.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect public key length");const h=_(x,C);if(A){let S=0;for(let P=0;P<h.length;P++)S|=h[P];if(S===0)throw new Error("X25519: invalid shared key")}return h}t.sharedKey=E})(z_);function H_(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var r=new Uint8Array(256),n=0;n<r.length;n++)r[n]=255;for(var s=0;s<t.length;s++){var i=t.charAt(s),o=i.charCodeAt(0);if(r[o]!==255)throw new TypeError(i+" is ambiguous");r[o]=s}var a=t.length,c=t.charAt(0),l=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function f(w){if(w instanceof Uint8Array||(ArrayBuffer.isView(w)?w=new Uint8Array(w.buffer,w.byteOffset,w.byteLength):Array.isArray(w)&&(w=Uint8Array.from(w))),!(w instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(w.length===0)return"";for(var _=0,v=0,T=0,b=w.length;T!==b&&w[T]===0;)T++,_++;for(var E=(b-T)*u+1>>>0,x=new Uint8Array(E);T!==b;){for(var C=w[T],A=0,h=E-1;(C!==0||A<v)&&h!==-1;h--,A++)C+=256*x[h]>>>0,x[h]=C%a>>>0,C=C/a>>>0;if(C!==0)throw new Error("Non-zero carry");v=A,T++}for(var S=E-v;S!==E&&x[S]===0;)S++;for(var P=c.repeat(_);S<E;++S)P+=t.charAt(x[S]);return P}function m(w){if(typeof w!="string")throw new TypeError("Expected String");if(w.length===0)return new Uint8Array;var _=0;if(w[_]!==" "){for(var v=0,T=0;w[_]===c;)v++,_++;for(var b=(w.length-_)*l+1>>>0,E=new Uint8Array(b);w[_];){var x=r[w.charCodeAt(_)];if(x===255)return;for(var C=0,A=b-1;(x!==0||C<T)&&A!==-1;A--,C++)x+=a*E[A]>>>0,E[A]=x%256>>>0,x=x/256>>>0;if(x!==0)throw new Error("Non-zero carry");T=C,_++}if(w[_]!==" "){for(var h=b-T;h!==b&&E[h]===0;)h++;for(var S=new Uint8Array(v+(b-h)),P=v;h!==b;)S[P++]=E[h++];return S}}}function g(w){var _=m(w);if(_)return _;throw new Error(`Non-${e} character`)}return{encode:f,decodeUnsafe:m,decode:g}}var q_=H_,V_=q_;const Z_=t=>{if(t instanceof Uint8Array&&t.constructor.name==="Uint8Array")return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")},G_=t=>new TextEncoder().encode(t),K_=t=>new TextDecoder().decode(t);class Q_{constructor(e,r,n){this.name=e,this.prefix=r,this.baseEncode=n}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class Y_{constructor(e,r,n){if(this.name=e,this.prefix=r,r.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=r.codePointAt(0),this.baseDecode=n}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return zg(this,e)}}class J_{constructor(e){this.decoders=e}or(e){return zg(this,e)}decode(e){const r=e[0],n=this.decoders[r];if(n)return n.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const zg=(t,e)=>new J_({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});class X_{constructor(e,r,n,s){this.name=e,this.prefix=r,this.baseEncode=n,this.baseDecode=s,this.encoder=new Q_(e,r,n),this.decoder=new Y_(e,r,s)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const Sl=({name:t,prefix:e,encode:r,decode:n})=>new X_(t,e,r,n),ua=({prefix:t,name:e,alphabet:r})=>{const{encode:n,decode:s}=V_(r,e);return Sl({prefix:t,name:e,encode:n,decode:i=>Z_(s(i))})},eC=(t,e,r,n)=>{const s={};for(let u=0;u<e.length;++u)s[e[u]]=u;let i=t.length;for(;t[i-1]==="=";)--i;const o=new Uint8Array(i*r/8|0);let a=0,c=0,l=0;for(let u=0;u<i;++u){const f=s[t[u]];if(f===void 0)throw new SyntaxError(`Non-${n} character`);c=c<<r|f,a+=r,a>=8&&(a-=8,o[l++]=255&c>>a)}if(a>=r||255&c<<8-a)throw new SyntaxError("Unexpected end of data");return o},tC=(t,e,r)=>{const n=e[e.length-1]==="=",s=(1<<r)-1;let i="",o=0,a=0;for(let c=0;c<t.length;++c)for(a=a<<8|t[c],o+=8;o>r;)o-=r,i+=e[s&a>>o];if(o&&(i+=e[s&a<<r-o]),n)for(;i.length*r&7;)i+="=";return i},xt=({name:t,prefix:e,bitsPerChar:r,alphabet:n})=>Sl({prefix:e,name:t,encode(s){return tC(s,n,r)},decode(s){return eC(s,n,r,t)}}),rC=Sl({prefix:"\0",name:"identity",encode:t=>K_(t),decode:t=>G_(t)}),yA=Object.freeze(Object.defineProperty({__proto__:null,identity:rC},Symbol.toStringTag,{value:"Module"})),nC=xt({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),vA=Object.freeze(Object.defineProperty({__proto__:null,base2:nC},Symbol.toStringTag,{value:"Module"})),iC=xt({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),xA=Object.freeze(Object.defineProperty({__proto__:null,base8:iC},Symbol.toStringTag,{value:"Module"})),sC=ua({prefix:"9",name:"base10",alphabet:"0123456789"}),_A=Object.freeze(Object.defineProperty({__proto__:null,base10:sC},Symbol.toStringTag,{value:"Module"})),oC=xt({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),aC=xt({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),CA=Object.freeze(Object.defineProperty({__proto__:null,base16:oC,base16upper:aC},Symbol.toStringTag,{value:"Module"})),cC=xt({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),lC=xt({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),uC=xt({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),dC=xt({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),hC=xt({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),fC=xt({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),pC=xt({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),gC=xt({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),mC=xt({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),EA=Object.freeze(Object.defineProperty({__proto__:null,base32:cC,base32hex:hC,base32hexpad:pC,base32hexpadupper:gC,base32hexupper:fC,base32pad:uC,base32padupper:dC,base32upper:lC,base32z:mC},Symbol.toStringTag,{value:"Module"})),wC=ua({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),bC=ua({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),SA=Object.freeze(Object.defineProperty({__proto__:null,base36:wC,base36upper:bC},Symbol.toStringTag,{value:"Module"})),yC=ua({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),vC=ua({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),AA=Object.freeze(Object.defineProperty({__proto__:null,base58btc:yC,base58flickr:vC},Symbol.toStringTag,{value:"Module"})),xC=xt({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),_C=xt({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),CC=xt({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),EC=xt({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),$A=Object.freeze(Object.defineProperty({__proto__:null,base64:xC,base64pad:_C,base64url:CC,base64urlpad:EC},Symbol.toStringTag,{value:"Module"})),Hg=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),SC=Hg.reduce((t,e,r)=>(t[r]=e,t),[]),AC=Hg.reduce((t,e,r)=>(t[e.codePointAt(0)]=r,t),[]);function $C(t){return t.reduce((e,r)=>(e+=SC[r],e),"")}function TC(t){const e=[];for(const r of t){const n=AC[r.codePointAt(0)];if(n===void 0)throw new Error(`Non-base256emoji character: ${r}`);e.push(n)}return new Uint8Array(e)}const IC=Sl({prefix:"🚀",name:"base256emoji",encode:$C,decode:TC}),TA=Object.freeze(Object.defineProperty({__proto__:null,base256emoji:IC},Symbol.toStringTag,{value:"Module"}));new TextEncoder;new TextDecoder;var RC={};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Xu=function(t,e){return Xu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var s in n)n.hasOwnProperty(s)&&(r[s]=n[s])},Xu(t,e)};function OC(t,e){Xu(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var ed=function(){return ed=Object.assign||function(e){for(var r,n=1,s=arguments.length;n<s;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},ed.apply(this,arguments)};function PC(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(r[n[s]]=t[n[s]]);return r}function DC(t,e,r,n){var s=arguments.length,i=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,r,i):o(e,r))||i);return s>3&&i&&Object.defineProperty(e,r,i),i}function NC(t,e){return function(r,n){e(r,n,t)}}function kC(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)}function MC(t,e,r,n){function s(i){return i instanceof r?i:new r(function(o){o(i)})}return new(r||(r=Promise))(function(i,o){function a(u){try{l(n.next(u))}catch(f){o(f)}}function c(u){try{l(n.throw(u))}catch(f){o(f)}}function l(u){u.done?i(u.value):s(u.value).then(a,c)}l((n=n.apply(t,e||[])).next())})}function UC(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,s,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(u){return c([l,u])}}function c(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,s&&(i=l[0]&2?s.return:l[0]?s.throw||((i=s.return)&&i.call(s),0):s.next)&&!(i=i.call(s,l[1])).done)return i;switch(s=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,s=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){r.label=l[1];break}if(l[0]===6&&r.label<i[1]){r.label=i[1],i=l;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(l);break}i[2]&&r.ops.pop(),r.trys.pop();continue}l=e.call(t,r)}catch(u){l=[6,u],s=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function BC(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}function jC(t,e){for(var r in t)r!=="default"&&!e.hasOwnProperty(r)&&(e[r]=t[r])}function td(t){var e=typeof Symbol=="function"&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function qg(t,e){var r=typeof Symbol=="function"&&t[Symbol.iterator];if(!r)return t;var n=r.call(t),s,i=[],o;try{for(;(e===void 0||e-- >0)&&!(s=n.next()).done;)i.push(s.value)}catch(a){o={error:a}}finally{try{s&&!s.done&&(r=n.return)&&r.call(n)}finally{if(o)throw o.error}}return i}function LC(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(qg(arguments[e]));return t}function FC(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),s=0,e=0;e<r;e++)for(var i=arguments[e],o=0,a=i.length;o<a;o++,s++)n[s]=i[o];return n}function Oo(t){return this instanceof Oo?(this.v=t,this):new Oo(t)}function WC(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(t,e||[]),s,i=[];return s={},o("next"),o("throw"),o("return"),s[Symbol.asyncIterator]=function(){return this},s;function o(m){n[m]&&(s[m]=function(g){return new Promise(function(w,_){i.push([m,g,w,_])>1||a(m,g)})})}function a(m,g){try{c(n[m](g))}catch(w){f(i[0][3],w)}}function c(m){m.value instanceof Oo?Promise.resolve(m.value.v).then(l,u):f(i[0][2],m)}function l(m){a("next",m)}function u(m){a("throw",m)}function f(m,g){m(g),i.shift(),i.length&&a(i[0][0],i[0][1])}}function zC(t){var e,r;return e={},n("next"),n("throw",function(s){throw s}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(s,i){e[s]=t[s]?function(o){return(r=!r)?{value:Oo(t[s](o)),done:s==="return"}:i?i(o):o}:i}}function HC(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],r;return e?e.call(t):(t=typeof td=="function"?td(t):t[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(i){r[i]=t[i]&&function(o){return new Promise(function(a,c){o=t[i](o),s(a,c,o.done,o.value)})}}function s(i,o,a,c){Promise.resolve(c).then(function(l){i({value:l,done:a})},o)}}function qC(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function VC(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function ZC(t){return t&&t.__esModule?t:{default:t}}function GC(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function KC(t,e,r){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,r),r}const QC=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return ed},__asyncDelegator:zC,__asyncGenerator:WC,__asyncValues:HC,__await:Oo,__awaiter:MC,__classPrivateFieldGet:GC,__classPrivateFieldSet:KC,__createBinding:BC,__decorate:DC,__exportStar:jC,__extends:OC,__generator:UC,__importDefault:ZC,__importStar:VC,__makeTemplateObject:qC,__metadata:kC,__param:NC,__read:qg,__rest:PC,__spread:LC,__spreadArrays:FC,__values:td},Symbol.toStringTag,{value:"Module"})),Al=N0(QC);var tu={},$s={},w0;function YC(){if(w0)return $s;w0=1,Object.defineProperty($s,"__esModule",{value:!0}),$s.delay=void 0;function t(e){return new Promise(r=>{setTimeout(()=>{r(!0)},e)})}return $s.delay=t,$s}var Un={},ru={},Bn={},b0;function JC(){return b0||(b0=1,Object.defineProperty(Bn,"__esModule",{value:!0}),Bn.ONE_THOUSAND=Bn.ONE_HUNDRED=void 0,Bn.ONE_HUNDRED=100,Bn.ONE_THOUSAND=1e3),Bn}var nu={},y0;function XC(){return y0||(y0=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=t.ONE_MINUTE*5,t.TEN_MINUTES=t.ONE_MINUTE*10,t.THIRTY_MINUTES=t.ONE_MINUTE*30,t.SIXTY_MINUTES=t.ONE_MINUTE*60,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=t.ONE_HOUR*3,t.SIX_HOURS=t.ONE_HOUR*6,t.TWELVE_HOURS=t.ONE_HOUR*12,t.TWENTY_FOUR_HOURS=t.ONE_HOUR*24,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=t.ONE_DAY*3,t.FIVE_DAYS=t.ONE_DAY*5,t.SEVEN_DAYS=t.ONE_DAY*7,t.THIRTY_DAYS=t.ONE_DAY*30,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=t.ONE_WEEK*2,t.THREE_WEEKS=t.ONE_WEEK*3,t.FOUR_WEEKS=t.ONE_WEEK*4,t.ONE_YEAR=t.ONE_DAY*365}(nu)),nu}var v0;function Vg(){return v0||(v0=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=Al;e.__exportStar(JC(),t),e.__exportStar(XC(),t)}(ru)),ru}var x0;function eE(){if(x0)return Un;x0=1,Object.defineProperty(Un,"__esModule",{value:!0}),Un.fromMiliseconds=Un.toMiliseconds=void 0;const t=Vg();function e(n){return n*t.ONE_THOUSAND}Un.toMiliseconds=e;function r(n){return Math.floor(n/t.ONE_THOUSAND)}return Un.fromMiliseconds=r,Un}var _0;function tE(){return _0||(_0=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=Al;e.__exportStar(YC(),t),e.__exportStar(eE(),t)}(tu)),tu}var Ai={},C0;function rE(){if(C0)return Ai;C0=1,Object.defineProperty(Ai,"__esModule",{value:!0}),Ai.Watch=void 0;class t{constructor(){this.timestamps=new Map}start(r){if(this.timestamps.has(r))throw new Error(`Watch already started for label: ${r}`);this.timestamps.set(r,{started:Date.now()})}stop(r){const n=this.get(r);if(typeof n.elapsed<"u")throw new Error(`Watch already stopped for label: ${r}`);const s=Date.now()-n.started;this.timestamps.set(r,{started:n.started,elapsed:s})}get(r){const n=this.timestamps.get(r);if(typeof n>"u")throw new Error(`No timestamp found for label: ${r}`);return n}elapsed(r){const n=this.get(r);return n.elapsed||Date.now()-n.started}}return Ai.Watch=t,Ai.default=t,Ai}var iu={},Ts={},E0;function nE(){if(E0)return Ts;E0=1,Object.defineProperty(Ts,"__esModule",{value:!0}),Ts.IWatch=void 0;class t{}return Ts.IWatch=t,Ts}var S0;function iE(){return S0||(S0=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),Al.__exportStar(nE(),t)}(iu)),iu}(function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=Al;e.__exportStar(tE(),t),e.__exportStar(rE(),t),e.__exportStar(iE(),t),e.__exportStar(Vg(),t)})(RC);var Ve={};Object.defineProperty(Ve,"__esModule",{value:!0});Ve.getLocalStorage=Ve.getLocalStorageOrThrow=Ve.getCrypto=Ve.getCryptoOrThrow=fE=Ve.getLocation=Ve.getLocationOrThrow=uE=Ve.getNavigator=Ve.getNavigatorOrThrow=aE=Ve.getDocument=Ve.getDocumentOrThrow=Ve.getFromWindowOrThrow=Ve.getFromWindow=void 0;function vi(t){let e;return typeof window<"u"&&typeof window[t]<"u"&&(e=window[t]),e}Ve.getFromWindow=vi;function ys(t){const e=vi(t);if(!e)throw new Error(`${t} is not defined in Window`);return e}Ve.getFromWindowOrThrow=ys;function sE(){return ys("document")}Ve.getDocumentOrThrow=sE;function oE(){return vi("document")}var aE=Ve.getDocument=oE;function cE(){return ys("navigator")}Ve.getNavigatorOrThrow=cE;function lE(){return vi("navigator")}var uE=Ve.getNavigator=lE;function dE(){return ys("location")}Ve.getLocationOrThrow=dE;function hE(){return vi("location")}var fE=Ve.getLocation=hE;function pE(){return ys("crypto")}Ve.getCryptoOrThrow=pE;function gE(){return vi("crypto")}Ve.getCrypto=gE;function mE(){return ys("localStorage")}Ve.getLocalStorageOrThrow=mE;function wE(){return vi("localStorage")}Ve.getLocalStorage=wE;var Rh={};Object.defineProperty(Rh,"__esModule",{value:!0});var bE=Rh.getWindowMetadata=void 0;const A0=Ve;function yE(){let t,e;try{t=A0.getDocumentOrThrow(),e=A0.getLocationOrThrow()}catch{return null}function r(){const f=t.getElementsByTagName("link"),m=[];for(let g=0;g<f.length;g++){const w=f[g],_=w.getAttribute("rel");if(_&&_.toLowerCase().indexOf("icon")>-1){const v=w.getAttribute("href");if(v)if(v.toLowerCase().indexOf("https:")===-1&&v.toLowerCase().indexOf("http:")===-1&&v.indexOf("//")!==0){let T=e.protocol+"//"+e.host;if(v.indexOf("/")===0)T+=v;else{const b=e.pathname.split("/");b.pop();const E=b.join("/");T+=E+"/"+v}m.push(T)}else if(v.indexOf("//")===0){const T=e.protocol+v;m.push(T)}else m.push(v)}}return m}function n(...f){const m=t.getElementsByTagName("meta");for(let g=0;g<m.length;g++){const w=m[g],_=["itemprop","property","name"].map(v=>w.getAttribute(v)).filter(v=>v?f.includes(v):!1);if(_.length&&_){const v=w.getAttribute("content");if(v)return v}}return""}function s(){let f=n("name","og:site_name","og:title","twitter:title");return f||(f=t.title),f}function i(){return n("description","og:description","twitter:description","keywords")}const o=s(),a=i(),c=e.origin,l=r();return{description:a,url:c,icons:l,name:o}}bE=Rh.getWindowMetadata=yE;var vE={},xE=t=>encodeURIComponent(t).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),Zg="%[a-f0-9]{2}",$0=new RegExp("("+Zg+")|([^%]+?)","gi"),T0=new RegExp("("+Zg+")+","gi");function rd(t,e){try{return[decodeURIComponent(t.join(""))]}catch{}if(t.length===1)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],rd(r),rd(n))}function _E(t){try{return decodeURIComponent(t)}catch{for(var e=t.match($0)||[],r=1;r<e.length;r++)t=rd(e,r).join(""),e=t.match($0)||[];return t}}function CE(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},r=T0.exec(t);r;){try{e[r[0]]=decodeURIComponent(r[0])}catch{var n=_E(r[0]);n!==r[0]&&(e[r[0]]=n)}r=T0.exec(t)}e["%C2"]="�";for(var s=Object.keys(e),i=0;i<s.length;i++){var o=s[i];t=t.replace(new RegExp(o,"g"),e[o])}return t}var EE=function(t){if(typeof t!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch{return CE(t)}},SE=(t,e)=>{if(!(typeof t=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[t];const r=t.indexOf(e);return r===-1?[t]:[t.slice(0,r),t.slice(r+e.length)]},AE=function(t,e){for(var r={},n=Object.keys(t),s=Array.isArray(e),i=0;i<n.length;i++){var o=n[i],a=t[o];(s?e.indexOf(o)!==-1:e(o,a,t))&&(r[o]=a)}return r};(function(t){const e=xE,r=EE,n=SE,s=AE,i=b=>b==null,o=Symbol("encodeFragmentIdentifier");function a(b){switch(b.arrayFormat){case"index":return E=>(x,C)=>{const A=x.length;return C===void 0||b.skipNull&&C===null||b.skipEmptyString&&C===""?x:C===null?[...x,[u(E,b),"[",A,"]"].join("")]:[...x,[u(E,b),"[",u(A,b),"]=",u(C,b)].join("")]};case"bracket":return E=>(x,C)=>C===void 0||b.skipNull&&C===null||b.skipEmptyString&&C===""?x:C===null?[...x,[u(E,b),"[]"].join("")]:[...x,[u(E,b),"[]=",u(C,b)].join("")];case"colon-list-separator":return E=>(x,C)=>C===void 0||b.skipNull&&C===null||b.skipEmptyString&&C===""?x:C===null?[...x,[u(E,b),":list="].join("")]:[...x,[u(E,b),":list=",u(C,b)].join("")];case"comma":case"separator":case"bracket-separator":{const E=b.arrayFormat==="bracket-separator"?"[]=":"=";return x=>(C,A)=>A===void 0||b.skipNull&&A===null||b.skipEmptyString&&A===""?C:(A=A===null?"":A,C.length===0?[[u(x,b),E,u(A,b)].join("")]:[[C,u(A,b)].join(b.arrayFormatSeparator)])}default:return E=>(x,C)=>C===void 0||b.skipNull&&C===null||b.skipEmptyString&&C===""?x:C===null?[...x,u(E,b)]:[...x,[u(E,b),"=",u(C,b)].join("")]}}function c(b){let E;switch(b.arrayFormat){case"index":return(x,C,A)=>{if(E=/\[(\d*)\]$/.exec(x),x=x.replace(/\[\d*\]$/,""),!E){A[x]=C;return}A[x]===void 0&&(A[x]={}),A[x][E[1]]=C};case"bracket":return(x,C,A)=>{if(E=/(\[\])$/.exec(x),x=x.replace(/\[\]$/,""),!E){A[x]=C;return}if(A[x]===void 0){A[x]=[C];return}A[x]=[].concat(A[x],C)};case"colon-list-separator":return(x,C,A)=>{if(E=/(:list)$/.exec(x),x=x.replace(/:list$/,""),!E){A[x]=C;return}if(A[x]===void 0){A[x]=[C];return}A[x]=[].concat(A[x],C)};case"comma":case"separator":return(x,C,A)=>{const h=typeof C=="string"&&C.includes(b.arrayFormatSeparator),S=typeof C=="string"&&!h&&f(C,b).includes(b.arrayFormatSeparator);C=S?f(C,b):C;const P=h||S?C.split(b.arrayFormatSeparator).map(D=>f(D,b)):C===null?C:f(C,b);A[x]=P};case"bracket-separator":return(x,C,A)=>{const h=/(\[\])$/.test(x);if(x=x.replace(/\[\]$/,""),!h){A[x]=C&&f(C,b);return}const S=C===null?[]:C.split(b.arrayFormatSeparator).map(P=>f(P,b));if(A[x]===void 0){A[x]=S;return}A[x]=[].concat(A[x],S)};default:return(x,C,A)=>{if(A[x]===void 0){A[x]=C;return}A[x]=[].concat(A[x],C)}}}function l(b){if(typeof b!="string"||b.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function u(b,E){return E.encode?E.strict?e(b):encodeURIComponent(b):b}function f(b,E){return E.decode?r(b):b}function m(b){return Array.isArray(b)?b.sort():typeof b=="object"?m(Object.keys(b)).sort((E,x)=>Number(E)-Number(x)).map(E=>b[E]):b}function g(b){const E=b.indexOf("#");return E!==-1&&(b=b.slice(0,E)),b}function w(b){let E="";const x=b.indexOf("#");return x!==-1&&(E=b.slice(x)),E}function _(b){b=g(b);const E=b.indexOf("?");return E===-1?"":b.slice(E+1)}function v(b,E){return E.parseNumbers&&!Number.isNaN(Number(b))&&typeof b=="string"&&b.trim()!==""?b=Number(b):E.parseBooleans&&b!==null&&(b.toLowerCase()==="true"||b.toLowerCase()==="false")&&(b=b.toLowerCase()==="true"),b}function T(b,E){E=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},E),l(E.arrayFormatSeparator);const x=c(E),C=Object.create(null);if(typeof b!="string"||(b=b.trim().replace(/^[?#&]/,""),!b))return C;for(const A of b.split("&")){if(A==="")continue;let[h,S]=n(E.decode?A.replace(/\+/g," "):A,"=");S=S===void 0?null:["comma","separator","bracket-separator"].includes(E.arrayFormat)?S:f(S,E),x(f(h,E),S,C)}for(const A of Object.keys(C)){const h=C[A];if(typeof h=="object"&&h!==null)for(const S of Object.keys(h))h[S]=v(h[S],E);else C[A]=v(h,E)}return E.sort===!1?C:(E.sort===!0?Object.keys(C).sort():Object.keys(C).sort(E.sort)).reduce((A,h)=>{const S=C[h];return S&&typeof S=="object"&&!Array.isArray(S)?A[h]=m(S):A[h]=S,A},Object.create(null))}t.extract=_,t.parse=T,t.stringify=(b,E)=>{if(!b)return"";E=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},E),l(E.arrayFormatSeparator);const x=S=>E.skipNull&&i(b[S])||E.skipEmptyString&&b[S]==="",C=a(E),A={};for(const S of Object.keys(b))x(S)||(A[S]=b[S]);const h=Object.keys(A);return E.sort!==!1&&h.sort(E.sort),h.map(S=>{const P=b[S];return P===void 0?"":P===null?u(S,E):Array.isArray(P)?P.length===0&&E.arrayFormat==="bracket-separator"?u(S,E)+"[]":P.reduce(C(S),[]).join("&"):u(S,E)+"="+u(P,E)}).filter(S=>S.length>0).join("&")},t.parseUrl=(b,E)=>{E=Object.assign({decode:!0},E);const[x,C]=n(b,"#");return Object.assign({url:x.split("?")[0]||"",query:T(_(b),E)},E&&E.parseFragmentIdentifier&&C?{fragmentIdentifier:f(C,E)}:{})},t.stringifyUrl=(b,E)=>{E=Object.assign({encode:!0,strict:!0,[o]:!0},E);const x=g(b.url).split("?")[0]||"",C=t.extract(b.url),A=t.parse(C,{sort:!1}),h=Object.assign(A,b.query);let S=t.stringify(h,E);S&&(S=`?${S}`);let P=w(b.url);return b.fragmentIdentifier&&(P=`#${E[o]?u(b.fragmentIdentifier,E):b.fragmentIdentifier}`),`${x}${S}${P}`},t.pick=(b,E,x)=>{x=Object.assign({parseFragmentIdentifier:!0,[o]:!1},x);const{url:C,query:A,fragmentIdentifier:h}=t.parseUrl(b,x);return t.stringifyUrl({url:C,query:s(A,E),fragmentIdentifier:h},x)},t.exclude=(b,E,x)=>{const C=Array.isArray(E)?A=>!E.includes(A):(A,h)=>!E(A,h);return t.pick(b,C,x)}})(vE);function su(t=[],e=[]){return[...new Set([...t,...e])]}var $E=Object.defineProperty,TE=Object.defineProperties,IE=Object.getOwnPropertyDescriptors,I0=Object.getOwnPropertySymbols,RE=Object.prototype.hasOwnProperty,OE=Object.prototype.propertyIsEnumerable,R0=(t,e,r)=>e in t?$E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,PE=(t,e)=>{for(var r in e||(e={}))RE.call(e,r)&&R0(t,r,e[r]);if(I0)for(var r of I0(e))OE.call(e,r)&&R0(t,r,e[r]);return t},DE=(t,e)=>TE(t,IE(e));function Gg(t){return t.includes(":")}function NE(t){return Gg(t)?t.split(":")[0]:t}function Kg(t){var e,r,n;const s={};if(!kE(t))return s;for(const[i,o]of Object.entries(t)){const a=Gg(i)?[i]:o.chains,c=o.methods||[],l=o.events||[],u=NE(i);s[u]=DE(PE({},s[u]),{chains:su(a,(e=s[u])==null?void 0:e.chains),methods:su(c,(r=s[u])==null?void 0:r.methods),events:su(l,(n=s[u])==null?void 0:n.events)})}return s}function kE(t){return Object.getPrototypeOf(t)===Object.prototype&&Object.keys(t).length}var Qg="eip155",ME="store",Yg="requestedChains",nd="wallet_addEthereumChain",Ye,Ls,Da,id,Oh,Jg,Na,sd,od,Xg,wc,Ph,Oi,Ps,bc,Dh,yc,Nh,vc,kh,UE=class extends Kc{constructor(t){super({...t,options:{isNewChainsStale:!0,...t.options}}),kt(this,Da),kt(this,Oh),kt(this,Na),kt(this,od),kt(this,wc),kt(this,Oi),kt(this,bc),kt(this,yc),kt(this,vc),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,kt(this,Ye,void 0),kt(this,Ls,void 0),this.onAccountsChanged=e=>{e.length===0?this.emit("disconnect"):this.emit("change",{account:Ht(e[0])})},this.onChainChanged=e=>{const r=Number(e),n=this.isChainUnsupported(r);this.emit("change",{chain:{id:r,unsupported:n}})},this.onDisconnect=()=>{vt(this,Oi,Ps).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},vt(this,Da,id).call(this)}async connect({chainId:t,pairingTopic:e}={}){try{let r=t;if(!r){const u=this.storage?.getItem(ME)?.state?.data?.chain?.id;u&&!this.isChainUnsupported(u)?r=u:r=this.chains[0]?.id}if(!r)throw new Error("No chains found on connector.");const n=await this.getProvider();vt(this,od,Xg).call(this);const s=vt(this,Na,sd).call(this);if(n.session&&s&&await n.disconnect(),!n.session||s){const l=this.chains.filter(u=>u.id!==r).map(u=>u.id);this.emit("message",{type:"connecting"}),await n.connect({pairingTopic:e,optionalChains:[r,...l]}),vt(this,Oi,Ps).call(this,this.chains.map(({id:u})=>u))}const i=await n.enable(),o=Ht(i[0]),a=await this.getChainId(),c=this.isChainUnsupported(a);return{account:o,chain:{id:a,unsupported:c}}}catch(r){throw/user rejected/i.test(r?.message)?new Mt(r):r}}async disconnect(){const t=await this.getProvider();try{await t.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{vt(this,wc,Ph).call(this),vt(this,Oi,Ps).call(this,[])}}async getAccount(){const{accounts:t}=await this.getProvider();return Ht(t[0])}async getChainId(){const{chainId:t}=await this.getProvider();return t}async getProvider({chainId:t}={}){return We(this,Ye)||await vt(this,Da,id).call(this),t&&await this.switchChain(t),We(this,Ye)}async getWalletClient({chainId:t}={}){const[e,r]=await Promise.all([this.getProvider({chainId:t}),this.getAccount()]),n=this.chains.find(s=>s.id===t);if(!e)throw new Error("provider is required.");return Gc({account:r,chain:n,transport:Vc(e)})}async isAuthorized(){try{const[t,e]=await Promise.all([this.getAccount(),this.getProvider()]),r=vt(this,Na,sd).call(this);if(!t)return!1;if(r&&e.session){try{await e.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(t){const e=this.chains.find(r=>r.id===t);if(!e)throw new cr(new Error("chain not found on connector."));try{const r=await this.getProvider(),n=vt(this,yc,Nh).call(this),s=vt(this,vc,kh).call(this);if(!n.includes(t)&&s.includes(nd)){await r.request({method:nd,params:[{chainId:ve(e.id),blockExplorerUrls:[e.blockExplorers?.default?.url],chainName:e.name,nativeCurrency:e.nativeCurrency,rpcUrls:[...e.rpcUrls.default.http]}]});const o=vt(this,bc,Dh).call(this);o.push(t),vt(this,Oi,Ps).call(this,o)}return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:ve(t)}]}),e}catch(r){const n=typeof r=="string"?r:r?.message;throw/user rejected request/i.test(n)?new Mt(r):new cr(r)}}};Ye=new WeakMap;Ls=new WeakMap;Da=new WeakSet;id=async function(){return!We(this,Ls)&&typeof window<"u"&&io(this,Ls,vt(this,Oh,Jg).call(this)),We(this,Ls)};Oh=new WeakSet;Jg=async function(){const{EthereumProvider:t}=await Zn(()=>import("./index.es.x5R3eoha.js"),__vite__mapDeps([5,4,1])),e=this.chains.map(({id:r})=>r);if(e.length){const{projectId:r,showQrModal:n=!0,qrModalOptions:s,metadata:i,relayUrl:o}=this.options;io(this,Ye,await t.init({showQrModal:n,qrModalOptions:s,projectId:r,optionalChains:e,rpcMap:Object.fromEntries(this.chains.map(a=>[a.id,a.rpcUrls.default.http[0]])),metadata:i,relayUrl:o}))}};Na=new WeakSet;sd=function(){if(vt(this,vc,kh).call(this).includes(nd)||!this.options.isNewChainsStale)return!1;const e=vt(this,bc,Dh).call(this),r=this.chains.map(({id:s})=>s),n=vt(this,yc,Nh).call(this);return n.length&&!n.some(s=>r.includes(s))?!1:!r.every(s=>e.includes(s))};od=new WeakSet;Xg=function(){We(this,Ye)&&(vt(this,wc,Ph).call(this),We(this,Ye).on("accountsChanged",this.onAccountsChanged),We(this,Ye).on("chainChanged",this.onChainChanged),We(this,Ye).on("disconnect",this.onDisconnect),We(this,Ye).on("session_delete",this.onDisconnect),We(this,Ye).on("display_uri",this.onDisplayUri),We(this,Ye).on("connect",this.onConnect))};wc=new WeakSet;Ph=function(){We(this,Ye)&&(We(this,Ye).removeListener("accountsChanged",this.onAccountsChanged),We(this,Ye).removeListener("chainChanged",this.onChainChanged),We(this,Ye).removeListener("disconnect",this.onDisconnect),We(this,Ye).removeListener("session_delete",this.onDisconnect),We(this,Ye).removeListener("display_uri",this.onDisplayUri),We(this,Ye).removeListener("connect",this.onConnect))};Oi=new WeakSet;Ps=function(t){this.storage?.setItem(Yg,t)};bc=new WeakSet;Dh=function(){return this.storage?.getItem(Yg)??[]};yc=new WeakSet;Nh=function(){if(!We(this,Ye))return[];const t=We(this,Ye).session?.namespaces;return t?Kg(t)[Qg]?.chains?.map(n=>parseInt(n.split(":")[1]||""))??[]:[]};vc=new WeakSet;kh=function(){if(!We(this,Ye))return[];const t=We(this,Ye).session?.namespaces;return t?Kg(t)[Qg]?.methods??[]:[]};function BE(){return function(t){return t.rpcUrls.public.http[0]?{chain:t,rpcUrls:t.rpcUrls.public}:null}}const le={SECURE_SITE_SDK:"https://secure.web3modal.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:"@w3m-frame/AWAIT_UPDATE_EMAIL_SUCCESS",FRAME_AWAIT_UPDATE_EMAIL_ERROR:"@w3m-frame/AWAIT_UPDATE_EMAIL_ERROR"};var Be;(function(t){t.assertEqual=s=>s;function e(s){}t.assertIs=e;function r(s){throw new Error}t.assertNever=r,t.arrayToEnum=s=>{const i={};for(const o of s)i[o]=o;return i},t.getValidEnumValues=s=>{const i=t.objectKeys(s).filter(a=>typeof s[s[a]]!="number"),o={};for(const a of i)o[a]=s[a];return t.objectValues(o)},t.objectValues=s=>t.objectKeys(s).map(function(i){return s[i]}),t.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const i=[];for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&i.push(o);return i},t.find=(s,i)=>{for(const o of s)if(i(o))return o},t.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&isFinite(s)&&Math.floor(s)===s;function n(s,i=" | "){return s.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}t.joinValues=n,t.jsonStringifyReplacer=(s,i)=>typeof i=="bigint"?i.toString():i})(Be||(Be={}));var ad;(function(t){t.mergeShapes=(e,r)=>({...e,...r})})(ad||(ad={}));const Q=Be.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),an=t=>{switch(typeof t){case"undefined":return Q.undefined;case"string":return Q.string;case"number":return isNaN(t)?Q.nan:Q.number;case"boolean":return Q.boolean;case"function":return Q.function;case"bigint":return Q.bigint;case"symbol":return Q.symbol;case"object":return Array.isArray(t)?Q.array:t===null?Q.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?Q.promise:typeof Map<"u"&&t instanceof Map?Q.map:typeof Set<"u"&&t instanceof Set?Q.set:typeof Date<"u"&&t instanceof Date?Q.date:Q.object;default:return Q.unknown}},q=Be.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),jE=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class sr extends Error{constructor(e){super(),this.issues=[],this.addIssue=n=>{this.issues=[...this.issues,n]},this.addIssues=(n=[])=>{this.issues=[...this.issues,...n]};const r=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,r):this.__proto__=r,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const r=e||function(i){return i.message},n={_errors:[]},s=i=>{for(const o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(s);else if(o.code==="invalid_return_type")s(o.returnTypeError);else if(o.code==="invalid_arguments")s(o.argumentsError);else if(o.path.length===0)n._errors.push(r(o));else{let a=n,c=0;for(;c<o.path.length;){const l=o.path[c];c===o.path.length-1?(a[l]=a[l]||{_errors:[]},a[l]._errors.push(r(o))):a[l]=a[l]||{_errors:[]},a=a[l],c++}}};return s(this),n}toString(){return this.message}get message(){return JSON.stringify(this.issues,Be.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=r=>r.message){const r={},n=[];for(const s of this.issues)s.path.length>0?(r[s.path[0]]=r[s.path[0]]||[],r[s.path[0]].push(e(s))):n.push(e(s));return{formErrors:n,fieldErrors:r}}get formErrors(){return this.flatten()}}sr.create=t=>new sr(t);const Po=(t,e)=>{let r;switch(t.code){case q.invalid_type:t.received===Q.undefined?r="Required":r=`Expected ${t.expected}, received ${t.received}`;break;case q.invalid_literal:r=`Invalid literal value, expected ${JSON.stringify(t.expected,Be.jsonStringifyReplacer)}`;break;case q.unrecognized_keys:r=`Unrecognized key(s) in object: ${Be.joinValues(t.keys,", ")}`;break;case q.invalid_union:r="Invalid input";break;case q.invalid_union_discriminator:r=`Invalid discriminator value. Expected ${Be.joinValues(t.options)}`;break;case q.invalid_enum_value:r=`Invalid enum value. Expected ${Be.joinValues(t.options)}, received '${t.received}'`;break;case q.invalid_arguments:r="Invalid function arguments";break;case q.invalid_return_type:r="Invalid function return type";break;case q.invalid_date:r="Invalid date";break;case q.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(r=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(r=`${r} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?r=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?r=`Invalid input: must end with "${t.validation.endsWith}"`:Be.assertNever(t.validation):t.validation!=="regex"?r=`Invalid ${t.validation}`:r="Invalid";break;case q.too_small:t.type==="array"?r=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?r=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?r=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?r=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:r="Invalid input";break;case q.too_big:t.type==="array"?r=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?r=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?r=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?r=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?r=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:r="Invalid input";break;case q.custom:r="Invalid input";break;case q.invalid_intersection_types:r="Intersection results could not be merged";break;case q.not_multiple_of:r=`Number must be a multiple of ${t.multipleOf}`;break;case q.not_finite:r="Number must be finite";break;default:r=e.defaultError,Be.assertNever(t)}return{message:r}};let em=Po;function LE(t){em=t}function xc(){return em}const _c=t=>{const{data:e,path:r,errorMaps:n,issueData:s}=t,i=[...r,...s.path||[]],o={...s,path:i};let a="";const c=n.filter(l=>!!l).slice().reverse();for(const l of c)a=l(o,{data:e,defaultError:a}).message;return{...s,path:i,message:s.message||a}},FE=[];function ee(t,e){const r=_c({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,xc(),Po].filter(n=>!!n)});t.common.issues.push(r)}class At{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,r){const n=[];for(const s of r){if(s.status==="aborted")return be;s.status==="dirty"&&e.dirty(),n.push(s.value)}return{status:e.value,value:n}}static async mergeObjectAsync(e,r){const n=[];for(const s of r)n.push({key:await s.key,value:await s.value});return At.mergeObjectSync(e,n)}static mergeObjectSync(e,r){const n={};for(const s of r){const{key:i,value:o}=s;if(i.status==="aborted"||o.status==="aborted")return be;i.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof o.value<"u"||s.alwaysSet)&&(n[i.value]=o.value)}return{status:e.value,value:n}}}const be=Object.freeze({status:"aborted"}),tm=t=>({status:"dirty",value:t}),Dt=t=>({status:"valid",value:t}),cd=t=>t.status==="aborted",ld=t=>t.status==="dirty",Do=t=>t.status==="valid",Cc=t=>typeof Promise<"u"&&t instanceof Promise;var ue;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e?.message})(ue||(ue={}));class Pr{constructor(e,r,n,s){this._cachedPath=[],this.parent=e,this.data=r,this._path=n,this._key=s}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const O0=(t,e)=>{if(Do(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const r=new sr(t.common.issues);return this._error=r,this._error}}};function xe(t){if(!t)return{};const{errorMap:e,invalid_type_error:r,required_error:n,description:s}=t;if(e&&(r||n))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:s}:{errorMap:(o,a)=>o.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:n??a.defaultError}:{message:r??a.defaultError},description:s}}class $e{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return an(e.data)}_getOrReturnCtx(e,r){return r||{common:e.parent.common,data:e.data,parsedType:an(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new At,ctx:{common:e.parent.common,data:e.data,parsedType:an(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const r=this._parse(e);if(Cc(r))throw new Error("Synchronous parse encountered promise.");return r}_parseAsync(e){const r=this._parse(e);return Promise.resolve(r)}parse(e,r){const n=this.safeParse(e,r);if(n.success)return n.data;throw n.error}safeParse(e,r){var n;const s={common:{issues:[],async:(n=r?.async)!==null&&n!==void 0?n:!1,contextualErrorMap:r?.errorMap},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:an(e)},i=this._parseSync({data:e,path:s.path,parent:s});return O0(s,i)}async parseAsync(e,r){const n=await this.safeParseAsync(e,r);if(n.success)return n.data;throw n.error}async safeParseAsync(e,r){const n={common:{issues:[],contextualErrorMap:r?.errorMap,async:!0},path:r?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:an(e)},s=this._parse({data:e,path:n.path,parent:n}),i=await(Cc(s)?s:Promise.resolve(s));return O0(n,i)}refine(e,r){const n=s=>typeof r=="string"||typeof r>"u"?{message:r}:typeof r=="function"?r(s):r;return this._refinement((s,i)=>{const o=e(s),a=()=>i.addIssue({code:q.custom,...n(s)});return typeof Promise<"u"&&o instanceof Promise?o.then(c=>c?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(e,r){return this._refinement((n,s)=>e(n)?!0:(s.addIssue(typeof r=="function"?r(n,s):r),!1))}_refinement(e){return new fr({schema:this,typeName:fe.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return Wr.create(this,this._def)}nullable(){return di.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return or.create(this,this._def)}promise(){return cs.create(this,this._def)}or(e){return Uo.create([this,e],this._def)}and(e){return Bo.create(this,e,this._def)}transform(e){return new fr({...xe(this._def),schema:this,typeName:fe.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const r=typeof e=="function"?e:()=>e;return new zo({...xe(this._def),innerType:this,defaultValue:r,typeName:fe.ZodDefault})}brand(){return new nm({typeName:fe.ZodBranded,type:this,...xe(this._def)})}catch(e){const r=typeof e=="function"?e:()=>e;return new $c({...xe(this._def),innerType:this,catchValue:r,typeName:fe.ZodCatch})}describe(e){const r=this.constructor;return new r({...this._def,description:e})}pipe(e){return da.create(this,e)}readonly(){return Ic.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const WE=/^c[^\s-]{8,}$/i,zE=/^[a-z][a-z0-9]*$/,HE=/^[0-9A-HJKMNP-TV-Z]{26}$/,qE=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,VE=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,ZE="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let ou;const GE=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,KE=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,QE=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function YE(t,e){return!!((e==="v4"||!e)&&GE.test(t)||(e==="v6"||!e)&&KE.test(t))}class ir extends $e{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==Q.string){const i=this._getOrReturnCtx(e);return ee(i,{code:q.invalid_type,expected:Q.string,received:i.parsedType}),be}const n=new At;let s;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(s=this._getOrReturnCtx(e,s),ee(s,{code:q.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),n.dirty());else if(i.kind==="max")e.data.length>i.value&&(s=this._getOrReturnCtx(e,s),ee(s,{code:q.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),n.dirty());else if(i.kind==="length"){const o=e.data.length>i.value,a=e.data.length<i.value;(o||a)&&(s=this._getOrReturnCtx(e,s),o?ee(s,{code:q.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&ee(s,{code:q.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),n.dirty())}else if(i.kind==="email")VE.test(e.data)||(s=this._getOrReturnCtx(e,s),ee(s,{validation:"email",code:q.invalid_string,message:i.message}),n.dirty());else if(i.kind==="emoji")ou||(ou=new RegExp(ZE,"u")),ou.test(e.data)||(s=this._getOrReturnCtx(e,s),ee(s,{validation:"emoji",code:q.invalid_string,message:i.message}),n.dirty());else if(i.kind==="uuid")qE.test(e.data)||(s=this._getOrReturnCtx(e,s),ee(s,{validation:"uuid",code:q.invalid_string,message:i.message}),n.dirty());else if(i.kind==="cuid")WE.test(e.data)||(s=this._getOrReturnCtx(e,s),ee(s,{validation:"cuid",code:q.invalid_string,message:i.message}),n.dirty());else if(i.kind==="cuid2")zE.test(e.data)||(s=this._getOrReturnCtx(e,s),ee(s,{validation:"cuid2",code:q.invalid_string,message:i.message}),n.dirty());else if(i.kind==="ulid")HE.test(e.data)||(s=this._getOrReturnCtx(e,s),ee(s,{validation:"ulid",code:q.invalid_string,message:i.message}),n.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{s=this._getOrReturnCtx(e,s),ee(s,{validation:"url",code:q.invalid_string,message:i.message}),n.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(s=this._getOrReturnCtx(e,s),ee(s,{validation:"regex",code:q.invalid_string,message:i.message}),n.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(s=this._getOrReturnCtx(e,s),ee(s,{code:q.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),n.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(s=this._getOrReturnCtx(e,s),ee(s,{code:q.invalid_string,validation:{startsWith:i.value},message:i.message}),n.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(s=this._getOrReturnCtx(e,s),ee(s,{code:q.invalid_string,validation:{endsWith:i.value},message:i.message}),n.dirty()):i.kind==="datetime"?QE(i).test(e.data)||(s=this._getOrReturnCtx(e,s),ee(s,{code:q.invalid_string,validation:"datetime",message:i.message}),n.dirty()):i.kind==="ip"?YE(e.data,i.version)||(s=this._getOrReturnCtx(e,s),ee(s,{validation:"ip",code:q.invalid_string,message:i.message}),n.dirty()):Be.assertNever(i);return{status:n.value,value:e.data}}_regex(e,r,n){return this.refinement(s=>e.test(s),{validation:r,code:q.invalid_string,...ue.errToObj(n)})}_addCheck(e){return new ir({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...ue.errToObj(e)})}url(e){return this._addCheck({kind:"url",...ue.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...ue.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...ue.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...ue.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...ue.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...ue.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...ue.errToObj(e)})}datetime(e){var r;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:(r=e?.offset)!==null&&r!==void 0?r:!1,...ue.errToObj(e?.message)})}regex(e,r){return this._addCheck({kind:"regex",regex:e,...ue.errToObj(r)})}includes(e,r){return this._addCheck({kind:"includes",value:e,position:r?.position,...ue.errToObj(r?.message)})}startsWith(e,r){return this._addCheck({kind:"startsWith",value:e,...ue.errToObj(r)})}endsWith(e,r){return this._addCheck({kind:"endsWith",value:e,...ue.errToObj(r)})}min(e,r){return this._addCheck({kind:"min",value:e,...ue.errToObj(r)})}max(e,r){return this._addCheck({kind:"max",value:e,...ue.errToObj(r)})}length(e,r){return this._addCheck({kind:"length",value:e,...ue.errToObj(r)})}nonempty(e){return this.min(1,ue.errToObj(e))}trim(){return new ir({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new ir({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new ir({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxLength(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}}ir.create=t=>{var e;return new ir({checks:[],typeName:fe.ZodString,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...xe(t)})};function JE(t,e){const r=(t.toString().split(".")[1]||"").length,n=(e.toString().split(".")[1]||"").length,s=r>n?r:n,i=parseInt(t.toFixed(s).replace(".","")),o=parseInt(e.toFixed(s).replace(".",""));return i%o/Math.pow(10,s)}class xn extends $e{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==Q.number){const i=this._getOrReturnCtx(e);return ee(i,{code:q.invalid_type,expected:Q.number,received:i.parsedType}),be}let n;const s=new At;for(const i of this._def.checks)i.kind==="int"?Be.isInteger(e.data)||(n=this._getOrReturnCtx(e,n),ee(n,{code:q.invalid_type,expected:"integer",received:"float",message:i.message}),s.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(n=this._getOrReturnCtx(e,n),ee(n,{code:q.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(n=this._getOrReturnCtx(e,n),ee(n,{code:q.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="multipleOf"?JE(e.data,i.value)!==0&&(n=this._getOrReturnCtx(e,n),ee(n,{code:q.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(n=this._getOrReturnCtx(e,n),ee(n,{code:q.not_finite,message:i.message}),s.dirty()):Be.assertNever(i);return{status:s.value,value:e.data}}gte(e,r){return this.setLimit("min",e,!0,ue.toString(r))}gt(e,r){return this.setLimit("min",e,!1,ue.toString(r))}lte(e,r){return this.setLimit("max",e,!0,ue.toString(r))}lt(e,r){return this.setLimit("max",e,!1,ue.toString(r))}setLimit(e,r,n,s){return new xn({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:n,message:ue.toString(s)}]})}_addCheck(e){return new xn({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:ue.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:ue.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:ue.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:ue.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:ue.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:ue.toString(r)})}finite(e){return this._addCheck({kind:"finite",message:ue.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:ue.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:ue.toString(e)})}get minValue(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Be.isInteger(e.value))}get isFinite(){let e=null,r=null;for(const n of this._def.checks){if(n.kind==="finite"||n.kind==="int"||n.kind==="multipleOf")return!0;n.kind==="min"?(r===null||n.value>r)&&(r=n.value):n.kind==="max"&&(e===null||n.value<e)&&(e=n.value)}return Number.isFinite(r)&&Number.isFinite(e)}}xn.create=t=>new xn({checks:[],typeName:fe.ZodNumber,coerce:t?.coerce||!1,...xe(t)});class _n extends $e{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==Q.bigint){const i=this._getOrReturnCtx(e);return ee(i,{code:q.invalid_type,expected:Q.bigint,received:i.parsedType}),be}let n;const s=new At;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(n=this._getOrReturnCtx(e,n),ee(n,{code:q.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(n=this._getOrReturnCtx(e,n),ee(n,{code:q.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(n=this._getOrReturnCtx(e,n),ee(n,{code:q.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):Be.assertNever(i);return{status:s.value,value:e.data}}gte(e,r){return this.setLimit("min",e,!0,ue.toString(r))}gt(e,r){return this.setLimit("min",e,!1,ue.toString(r))}lte(e,r){return this.setLimit("max",e,!0,ue.toString(r))}lt(e,r){return this.setLimit("max",e,!1,ue.toString(r))}setLimit(e,r,n,s){return new _n({...this._def,checks:[...this._def.checks,{kind:e,value:r,inclusive:n,message:ue.toString(s)}]})}_addCheck(e){return new _n({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:ue.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:ue.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:ue.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:ue.toString(e)})}multipleOf(e,r){return this._addCheck({kind:"multipleOf",value:e,message:ue.toString(r)})}get minValue(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e}get maxValue(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e}}_n.create=t=>{var e;return new _n({checks:[],typeName:fe.ZodBigInt,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...xe(t)})};class No extends $e{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==Q.boolean){const n=this._getOrReturnCtx(e);return ee(n,{code:q.invalid_type,expected:Q.boolean,received:n.parsedType}),be}return Dt(e.data)}}No.create=t=>new No({typeName:fe.ZodBoolean,coerce:t?.coerce||!1,...xe(t)});class li extends $e{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==Q.date){const i=this._getOrReturnCtx(e);return ee(i,{code:q.invalid_type,expected:Q.date,received:i.parsedType}),be}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return ee(i,{code:q.invalid_date}),be}const n=new At;let s;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(s=this._getOrReturnCtx(e,s),ee(s,{code:q.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),n.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(s=this._getOrReturnCtx(e,s),ee(s,{code:q.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),n.dirty()):Be.assertNever(i);return{status:n.value,value:new Date(e.data.getTime())}}_addCheck(e){return new li({...this._def,checks:[...this._def.checks,e]})}min(e,r){return this._addCheck({kind:"min",value:e.getTime(),message:ue.toString(r)})}max(e,r){return this._addCheck({kind:"max",value:e.getTime(),message:ue.toString(r)})}get minDate(){let e=null;for(const r of this._def.checks)r.kind==="min"&&(e===null||r.value>e)&&(e=r.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const r of this._def.checks)r.kind==="max"&&(e===null||r.value<e)&&(e=r.value);return e!=null?new Date(e):null}}li.create=t=>new li({checks:[],coerce:t?.coerce||!1,typeName:fe.ZodDate,...xe(t)});class Ec extends $e{_parse(e){if(this._getType(e)!==Q.symbol){const n=this._getOrReturnCtx(e);return ee(n,{code:q.invalid_type,expected:Q.symbol,received:n.parsedType}),be}return Dt(e.data)}}Ec.create=t=>new Ec({typeName:fe.ZodSymbol,...xe(t)});class ko extends $e{_parse(e){if(this._getType(e)!==Q.undefined){const n=this._getOrReturnCtx(e);return ee(n,{code:q.invalid_type,expected:Q.undefined,received:n.parsedType}),be}return Dt(e.data)}}ko.create=t=>new ko({typeName:fe.ZodUndefined,...xe(t)});class Mo extends $e{_parse(e){if(this._getType(e)!==Q.null){const n=this._getOrReturnCtx(e);return ee(n,{code:q.invalid_type,expected:Q.null,received:n.parsedType}),be}return Dt(e.data)}}Mo.create=t=>new Mo({typeName:fe.ZodNull,...xe(t)});class as extends $e{constructor(){super(...arguments),this._any=!0}_parse(e){return Dt(e.data)}}as.create=t=>new as({typeName:fe.ZodAny,...xe(t)});class Hn extends $e{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Dt(e.data)}}Hn.create=t=>new Hn({typeName:fe.ZodUnknown,...xe(t)});class Zr extends $e{_parse(e){const r=this._getOrReturnCtx(e);return ee(r,{code:q.invalid_type,expected:Q.never,received:r.parsedType}),be}}Zr.create=t=>new Zr({typeName:fe.ZodNever,...xe(t)});class Sc extends $e{_parse(e){if(this._getType(e)!==Q.undefined){const n=this._getOrReturnCtx(e);return ee(n,{code:q.invalid_type,expected:Q.void,received:n.parsedType}),be}return Dt(e.data)}}Sc.create=t=>new Sc({typeName:fe.ZodVoid,...xe(t)});class or extends $e{_parse(e){const{ctx:r,status:n}=this._processInputParams(e),s=this._def;if(r.parsedType!==Q.array)return ee(r,{code:q.invalid_type,expected:Q.array,received:r.parsedType}),be;if(s.exactLength!==null){const o=r.data.length>s.exactLength.value,a=r.data.length<s.exactLength.value;(o||a)&&(ee(r,{code:o?q.too_big:q.too_small,minimum:a?s.exactLength.value:void 0,maximum:o?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),n.dirty())}if(s.minLength!==null&&r.data.length<s.minLength.value&&(ee(r,{code:q.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),n.dirty()),s.maxLength!==null&&r.data.length>s.maxLength.value&&(ee(r,{code:q.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),n.dirty()),r.common.async)return Promise.all([...r.data].map((o,a)=>s.type._parseAsync(new Pr(r,o,r.path,a)))).then(o=>At.mergeArray(n,o));const i=[...r.data].map((o,a)=>s.type._parseSync(new Pr(r,o,r.path,a)));return At.mergeArray(n,i)}get element(){return this._def.type}min(e,r){return new or({...this._def,minLength:{value:e,message:ue.toString(r)}})}max(e,r){return new or({...this._def,maxLength:{value:e,message:ue.toString(r)}})}length(e,r){return new or({...this._def,exactLength:{value:e,message:ue.toString(r)}})}nonempty(e){return this.min(1,e)}}or.create=(t,e)=>new or({type:t,minLength:null,maxLength:null,exactLength:null,typeName:fe.ZodArray,...xe(e)});function Pi(t){if(t instanceof Qe){const e={};for(const r in t.shape){const n=t.shape[r];e[r]=Wr.create(Pi(n))}return new Qe({...t._def,shape:()=>e})}else return t instanceof or?new or({...t._def,type:Pi(t.element)}):t instanceof Wr?Wr.create(Pi(t.unwrap())):t instanceof di?di.create(Pi(t.unwrap())):t instanceof Dr?Dr.create(t.items.map(e=>Pi(e))):t}class Qe extends $e{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),r=Be.objectKeys(e);return this._cached={shape:e,keys:r}}_parse(e){if(this._getType(e)!==Q.object){const l=this._getOrReturnCtx(e);return ee(l,{code:q.invalid_type,expected:Q.object,received:l.parsedType}),be}const{status:n,ctx:s}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof Zr&&this._def.unknownKeys==="strip"))for(const l in s.data)o.includes(l)||a.push(l);const c=[];for(const l of o){const u=i[l],f=s.data[l];c.push({key:{status:"valid",value:l},value:u._parse(new Pr(s,f,s.path,l)),alwaysSet:l in s.data})}if(this._def.catchall instanceof Zr){const l=this._def.unknownKeys;if(l==="passthrough")for(const u of a)c.push({key:{status:"valid",value:u},value:{status:"valid",value:s.data[u]}});else if(l==="strict")a.length>0&&(ee(s,{code:q.unrecognized_keys,keys:a}),n.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const u of a){const f=s.data[u];c.push({key:{status:"valid",value:u},value:l._parse(new Pr(s,f,s.path,u)),alwaysSet:u in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const l=[];for(const u of c){const f=await u.key;l.push({key:f,value:await u.value,alwaysSet:u.alwaysSet})}return l}).then(l=>At.mergeObjectSync(n,l)):At.mergeObjectSync(n,c)}get shape(){return this._def.shape()}strict(e){return ue.errToObj,new Qe({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(r,n)=>{var s,i,o,a;const c=(o=(i=(s=this._def).errorMap)===null||i===void 0?void 0:i.call(s,r,n).message)!==null&&o!==void 0?o:n.defaultError;return r.code==="unrecognized_keys"?{message:(a=ue.errToObj(e).message)!==null&&a!==void 0?a:c}:{message:c}}}:{}})}strip(){return new Qe({...this._def,unknownKeys:"strip"})}passthrough(){return new Qe({...this._def,unknownKeys:"passthrough"})}extend(e){return new Qe({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Qe({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:fe.ZodObject})}setKey(e,r){return this.augment({[e]:r})}catchall(e){return new Qe({...this._def,catchall:e})}pick(e){const r={};return Be.objectKeys(e).forEach(n=>{e[n]&&this.shape[n]&&(r[n]=this.shape[n])}),new Qe({...this._def,shape:()=>r})}omit(e){const r={};return Be.objectKeys(this.shape).forEach(n=>{e[n]||(r[n]=this.shape[n])}),new Qe({...this._def,shape:()=>r})}deepPartial(){return Pi(this)}partial(e){const r={};return Be.objectKeys(this.shape).forEach(n=>{const s=this.shape[n];e&&!e[n]?r[n]=s:r[n]=s.optional()}),new Qe({...this._def,shape:()=>r})}required(e){const r={};return Be.objectKeys(this.shape).forEach(n=>{if(e&&!e[n])r[n]=this.shape[n];else{let i=this.shape[n];for(;i instanceof Wr;)i=i._def.innerType;r[n]=i}}),new Qe({...this._def,shape:()=>r})}keyof(){return rm(Be.objectKeys(this.shape))}}Qe.create=(t,e)=>new Qe({shape:()=>t,unknownKeys:"strip",catchall:Zr.create(),typeName:fe.ZodObject,...xe(e)});Qe.strictCreate=(t,e)=>new Qe({shape:()=>t,unknownKeys:"strict",catchall:Zr.create(),typeName:fe.ZodObject,...xe(e)});Qe.lazycreate=(t,e)=>new Qe({shape:t,unknownKeys:"strip",catchall:Zr.create(),typeName:fe.ZodObject,...xe(e)});class Uo extends $e{_parse(e){const{ctx:r}=this._processInputParams(e),n=this._def.options;function s(i){for(const a of i)if(a.result.status==="valid")return a.result;for(const a of i)if(a.result.status==="dirty")return r.common.issues.push(...a.ctx.common.issues),a.result;const o=i.map(a=>new sr(a.ctx.common.issues));return ee(r,{code:q.invalid_union,unionErrors:o}),be}if(r.common.async)return Promise.all(n.map(async i=>{const o={...r,common:{...r.common,issues:[]},parent:null};return{result:await i._parseAsync({data:r.data,path:r.path,parent:o}),ctx:o}})).then(s);{let i;const o=[];for(const c of n){const l={...r,common:{...r.common,issues:[]},parent:null},u=c._parseSync({data:r.data,path:r.path,parent:l});if(u.status==="valid")return u;u.status==="dirty"&&!i&&(i={result:u,ctx:l}),l.common.issues.length&&o.push(l.common.issues)}if(i)return r.common.issues.push(...i.ctx.common.issues),i.result;const a=o.map(c=>new sr(c));return ee(r,{code:q.invalid_union,unionErrors:a}),be}}get options(){return this._def.options}}Uo.create=(t,e)=>new Uo({options:t,typeName:fe.ZodUnion,...xe(e)});const ka=t=>t instanceof Lo?ka(t.schema):t instanceof fr?ka(t.innerType()):t instanceof Fo?[t.value]:t instanceof Cn?t.options:t instanceof Wo?Object.keys(t.enum):t instanceof zo?ka(t._def.innerType):t instanceof ko?[void 0]:t instanceof Mo?[null]:null;class $l extends $e{_parse(e){const{ctx:r}=this._processInputParams(e);if(r.parsedType!==Q.object)return ee(r,{code:q.invalid_type,expected:Q.object,received:r.parsedType}),be;const n=this.discriminator,s=r.data[n],i=this.optionsMap.get(s);return i?r.common.async?i._parseAsync({data:r.data,path:r.path,parent:r}):i._parseSync({data:r.data,path:r.path,parent:r}):(ee(r,{code:q.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),be)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,r,n){const s=new Map;for(const i of r){const o=ka(i.shape[e]);if(!o)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of o){if(s.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);s.set(a,i)}}return new $l({typeName:fe.ZodDiscriminatedUnion,discriminator:e,options:r,optionsMap:s,...xe(n)})}}function ud(t,e){const r=an(t),n=an(e);if(t===e)return{valid:!0,data:t};if(r===Q.object&&n===Q.object){const s=Be.objectKeys(e),i=Be.objectKeys(t).filter(a=>s.indexOf(a)!==-1),o={...t,...e};for(const a of i){const c=ud(t[a],e[a]);if(!c.valid)return{valid:!1};o[a]=c.data}return{valid:!0,data:o}}else if(r===Q.array&&n===Q.array){if(t.length!==e.length)return{valid:!1};const s=[];for(let i=0;i<t.length;i++){const o=t[i],a=e[i],c=ud(o,a);if(!c.valid)return{valid:!1};s.push(c.data)}return{valid:!0,data:s}}else return r===Q.date&&n===Q.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class Bo extends $e{_parse(e){const{status:r,ctx:n}=this._processInputParams(e),s=(i,o)=>{if(cd(i)||cd(o))return be;const a=ud(i.value,o.value);return a.valid?((ld(i)||ld(o))&&r.dirty(),{status:r.value,value:a.data}):(ee(n,{code:q.invalid_intersection_types}),be)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([i,o])=>s(i,o)):s(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}Bo.create=(t,e,r)=>new Bo({left:t,right:e,typeName:fe.ZodIntersection,...xe(r)});class Dr extends $e{_parse(e){const{status:r,ctx:n}=this._processInputParams(e);if(n.parsedType!==Q.array)return ee(n,{code:q.invalid_type,expected:Q.array,received:n.parsedType}),be;if(n.data.length<this._def.items.length)return ee(n,{code:q.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),be;!this._def.rest&&n.data.length>this._def.items.length&&(ee(n,{code:q.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),r.dirty());const i=[...n.data].map((o,a)=>{const c=this._def.items[a]||this._def.rest;return c?c._parse(new Pr(n,o,n.path,a)):null}).filter(o=>!!o);return n.common.async?Promise.all(i).then(o=>At.mergeArray(r,o)):At.mergeArray(r,i)}get items(){return this._def.items}rest(e){return new Dr({...this._def,rest:e})}}Dr.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Dr({items:t,typeName:fe.ZodTuple,rest:null,...xe(e)})};class jo extends $e{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:r,ctx:n}=this._processInputParams(e);if(n.parsedType!==Q.object)return ee(n,{code:q.invalid_type,expected:Q.object,received:n.parsedType}),be;const s=[],i=this._def.keyType,o=this._def.valueType;for(const a in n.data)s.push({key:i._parse(new Pr(n,a,n.path,a)),value:o._parse(new Pr(n,n.data[a],n.path,a))});return n.common.async?At.mergeObjectAsync(r,s):At.mergeObjectSync(r,s)}get element(){return this._def.valueType}static create(e,r,n){return r instanceof $e?new jo({keyType:e,valueType:r,typeName:fe.ZodRecord,...xe(n)}):new jo({keyType:ir.create(),valueType:e,typeName:fe.ZodRecord,...xe(r)})}}class Ac extends $e{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:r,ctx:n}=this._processInputParams(e);if(n.parsedType!==Q.map)return ee(n,{code:q.invalid_type,expected:Q.map,received:n.parsedType}),be;const s=this._def.keyType,i=this._def.valueType,o=[...n.data.entries()].map(([a,c],l)=>({key:s._parse(new Pr(n,a,n.path,[l,"key"])),value:i._parse(new Pr(n,c,n.path,[l,"value"]))}));if(n.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const c of o){const l=await c.key,u=await c.value;if(l.status==="aborted"||u.status==="aborted")return be;(l.status==="dirty"||u.status==="dirty")&&r.dirty(),a.set(l.value,u.value)}return{status:r.value,value:a}})}else{const a=new Map;for(const c of o){const l=c.key,u=c.value;if(l.status==="aborted"||u.status==="aborted")return be;(l.status==="dirty"||u.status==="dirty")&&r.dirty(),a.set(l.value,u.value)}return{status:r.value,value:a}}}}Ac.create=(t,e,r)=>new Ac({valueType:e,keyType:t,typeName:fe.ZodMap,...xe(r)});class ui extends $e{_parse(e){const{status:r,ctx:n}=this._processInputParams(e);if(n.parsedType!==Q.set)return ee(n,{code:q.invalid_type,expected:Q.set,received:n.parsedType}),be;const s=this._def;s.minSize!==null&&n.data.size<s.minSize.value&&(ee(n,{code:q.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),r.dirty()),s.maxSize!==null&&n.data.size>s.maxSize.value&&(ee(n,{code:q.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),r.dirty());const i=this._def.valueType;function o(c){const l=new Set;for(const u of c){if(u.status==="aborted")return be;u.status==="dirty"&&r.dirty(),l.add(u.value)}return{status:r.value,value:l}}const a=[...n.data.values()].map((c,l)=>i._parse(new Pr(n,c,n.path,l)));return n.common.async?Promise.all(a).then(c=>o(c)):o(a)}min(e,r){return new ui({...this._def,minSize:{value:e,message:ue.toString(r)}})}max(e,r){return new ui({...this._def,maxSize:{value:e,message:ue.toString(r)}})}size(e,r){return this.min(e,r).max(e,r)}nonempty(e){return this.min(1,e)}}ui.create=(t,e)=>new ui({valueType:t,minSize:null,maxSize:null,typeName:fe.ZodSet,...xe(e)});class Bi extends $e{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:r}=this._processInputParams(e);if(r.parsedType!==Q.function)return ee(r,{code:q.invalid_type,expected:Q.function,received:r.parsedType}),be;function n(a,c){return _c({data:a,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,xc(),Po].filter(l=>!!l),issueData:{code:q.invalid_arguments,argumentsError:c}})}function s(a,c){return _c({data:a,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,xc(),Po].filter(l=>!!l),issueData:{code:q.invalid_return_type,returnTypeError:c}})}const i={errorMap:r.common.contextualErrorMap},o=r.data;if(this._def.returns instanceof cs){const a=this;return Dt(async function(...c){const l=new sr([]),u=await a._def.args.parseAsync(c,i).catch(g=>{throw l.addIssue(n(c,g)),l}),f=await Reflect.apply(o,this,u);return await a._def.returns._def.type.parseAsync(f,i).catch(g=>{throw l.addIssue(s(f,g)),l})})}else{const a=this;return Dt(function(...c){const l=a._def.args.safeParse(c,i);if(!l.success)throw new sr([n(c,l.error)]);const u=Reflect.apply(o,this,l.data),f=a._def.returns.safeParse(u,i);if(!f.success)throw new sr([s(u,f.error)]);return f.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Bi({...this._def,args:Dr.create(e).rest(Hn.create())})}returns(e){return new Bi({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,r,n){return new Bi({args:e||Dr.create([]).rest(Hn.create()),returns:r||Hn.create(),typeName:fe.ZodFunction,...xe(n)})}}class Lo extends $e{get schema(){return this._def.getter()}_parse(e){const{ctx:r}=this._processInputParams(e);return this._def.getter()._parse({data:r.data,path:r.path,parent:r})}}Lo.create=(t,e)=>new Lo({getter:t,typeName:fe.ZodLazy,...xe(e)});class Fo extends $e{_parse(e){if(e.data!==this._def.value){const r=this._getOrReturnCtx(e);return ee(r,{received:r.data,code:q.invalid_literal,expected:this._def.value}),be}return{status:"valid",value:e.data}}get value(){return this._def.value}}Fo.create=(t,e)=>new Fo({value:t,typeName:fe.ZodLiteral,...xe(e)});function rm(t,e){return new Cn({values:t,typeName:fe.ZodEnum,...xe(e)})}class Cn extends $e{_parse(e){if(typeof e.data!="string"){const r=this._getOrReturnCtx(e),n=this._def.values;return ee(r,{expected:Be.joinValues(n),received:r.parsedType,code:q.invalid_type}),be}if(this._def.values.indexOf(e.data)===-1){const r=this._getOrReturnCtx(e),n=this._def.values;return ee(r,{received:r.data,code:q.invalid_enum_value,options:n}),be}return Dt(e.data)}get options(){return this._def.values}get enum(){const e={};for(const r of this._def.values)e[r]=r;return e}get Values(){const e={};for(const r of this._def.values)e[r]=r;return e}get Enum(){const e={};for(const r of this._def.values)e[r]=r;return e}extract(e){return Cn.create(e)}exclude(e){return Cn.create(this.options.filter(r=>!e.includes(r)))}}Cn.create=rm;class Wo extends $e{_parse(e){const r=Be.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==Q.string&&n.parsedType!==Q.number){const s=Be.objectValues(r);return ee(n,{expected:Be.joinValues(s),received:n.parsedType,code:q.invalid_type}),be}if(r.indexOf(e.data)===-1){const s=Be.objectValues(r);return ee(n,{received:n.data,code:q.invalid_enum_value,options:s}),be}return Dt(e.data)}get enum(){return this._def.values}}Wo.create=(t,e)=>new Wo({values:t,typeName:fe.ZodNativeEnum,...xe(e)});class cs extends $e{unwrap(){return this._def.type}_parse(e){const{ctx:r}=this._processInputParams(e);if(r.parsedType!==Q.promise&&r.common.async===!1)return ee(r,{code:q.invalid_type,expected:Q.promise,received:r.parsedType}),be;const n=r.parsedType===Q.promise?r.data:Promise.resolve(r.data);return Dt(n.then(s=>this._def.type.parseAsync(s,{path:r.path,errorMap:r.common.contextualErrorMap})))}}cs.create=(t,e)=>new cs({type:t,typeName:fe.ZodPromise,...xe(e)});class fr extends $e{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===fe.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:r,ctx:n}=this._processInputParams(e),s=this._def.effect||null,i={addIssue:o=>{ee(n,o),o.fatal?r.abort():r.dirty()},get path(){return n.path}};if(i.addIssue=i.addIssue.bind(i),s.type==="preprocess"){const o=s.transform(n.data,i);return n.common.issues.length?{status:"dirty",value:n.data}:n.common.async?Promise.resolve(o).then(a=>this._def.schema._parseAsync({data:a,path:n.path,parent:n})):this._def.schema._parseSync({data:o,path:n.path,parent:n})}if(s.type==="refinement"){const o=a=>{const c=s.refinement(a,i);if(n.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(n.common.async===!1){const a=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return a.status==="aborted"?be:(a.status==="dirty"&&r.dirty(),o(a.value),{status:r.value,value:a.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(a=>a.status==="aborted"?be:(a.status==="dirty"&&r.dirty(),o(a.value).then(()=>({status:r.value,value:a.value}))))}if(s.type==="transform")if(n.common.async===!1){const o=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!Do(o))return o;const a=s.transform(o.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:r.value,value:a}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(o=>Do(o)?Promise.resolve(s.transform(o.value,i)).then(a=>({status:r.value,value:a})):o);Be.assertNever(s)}}fr.create=(t,e,r)=>new fr({schema:t,typeName:fe.ZodEffects,effect:e,...xe(r)});fr.createWithPreprocess=(t,e,r)=>new fr({schema:e,effect:{type:"preprocess",transform:t},typeName:fe.ZodEffects,...xe(r)});class Wr extends $e{_parse(e){return this._getType(e)===Q.undefined?Dt(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Wr.create=(t,e)=>new Wr({innerType:t,typeName:fe.ZodOptional,...xe(e)});class di extends $e{_parse(e){return this._getType(e)===Q.null?Dt(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}di.create=(t,e)=>new di({innerType:t,typeName:fe.ZodNullable,...xe(e)});class zo extends $e{_parse(e){const{ctx:r}=this._processInputParams(e);let n=r.data;return r.parsedType===Q.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:r.path,parent:r})}removeDefault(){return this._def.innerType}}zo.create=(t,e)=>new zo({innerType:t,typeName:fe.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...xe(e)});class $c extends $e{_parse(e){const{ctx:r}=this._processInputParams(e),n={...r,common:{...r.common,issues:[]}},s=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return Cc(s)?s.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new sr(n.common.issues)},input:n.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new sr(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}$c.create=(t,e)=>new $c({innerType:t,typeName:fe.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...xe(e)});class Tc extends $e{_parse(e){if(this._getType(e)!==Q.nan){const n=this._getOrReturnCtx(e);return ee(n,{code:q.invalid_type,expected:Q.nan,received:n.parsedType}),be}return{status:"valid",value:e.data}}}Tc.create=t=>new Tc({typeName:fe.ZodNaN,...xe(t)});const XE=Symbol("zod_brand");class nm extends $e{_parse(e){const{ctx:r}=this._processInputParams(e),n=r.data;return this._def.type._parse({data:n,path:r.path,parent:r})}unwrap(){return this._def.type}}class da extends $e{_parse(e){const{status:r,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return i.status==="aborted"?be:i.status==="dirty"?(r.dirty(),tm(i.value)):this._def.out._parseAsync({data:i.value,path:n.path,parent:n})})();{const s=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return s.status==="aborted"?be:s.status==="dirty"?(r.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:n.path,parent:n})}}static create(e,r){return new da({in:e,out:r,typeName:fe.ZodPipeline})}}class Ic extends $e{_parse(e){const r=this._def.innerType._parse(e);return Do(r)&&(r.value=Object.freeze(r.value)),r}}Ic.create=(t,e)=>new Ic({innerType:t,typeName:fe.ZodReadonly,...xe(e)});const im=(t,e={},r)=>t?as.create().superRefine((n,s)=>{var i,o;if(!t(n)){const a=typeof e=="function"?e(n):typeof e=="string"?{message:e}:e,c=(o=(i=a.fatal)!==null&&i!==void 0?i:r)!==null&&o!==void 0?o:!0,l=typeof a=="string"?{message:a}:a;s.addIssue({code:"custom",...l,fatal:c})}}):as.create(),e7={object:Qe.lazycreate};var fe;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(fe||(fe={}));const t7=(t,e={message:`Input not instance of ${t.name}`})=>im(r=>r instanceof t,e),sm=ir.create,om=xn.create,r7=Tc.create,n7=_n.create,am=No.create,i7=li.create,s7=Ec.create,o7=ko.create,a7=Mo.create,c7=as.create,l7=Hn.create,u7=Zr.create,d7=Sc.create,h7=or.create,f7=Qe.create,p7=Qe.strictCreate,g7=Uo.create,m7=$l.create,w7=Bo.create,b7=Dr.create,y7=jo.create,v7=Ac.create,x7=ui.create,_7=Bi.create,C7=Lo.create,E7=Fo.create,S7=Cn.create,A7=Wo.create,$7=cs.create,P0=fr.create,T7=Wr.create,I7=di.create,R7=fr.createWithPreprocess,O7=da.create,P7=()=>sm().optional(),D7=()=>om().optional(),N7=()=>am().optional(),k7={string:t=>ir.create({...t,coerce:!0}),number:t=>xn.create({...t,coerce:!0}),boolean:t=>No.create({...t,coerce:!0}),bigint:t=>_n.create({...t,coerce:!0}),date:t=>li.create({...t,coerce:!0})},M7=be;var H=Object.freeze({__proto__:null,defaultErrorMap:Po,setErrorMap:LE,getErrorMap:xc,makeIssue:_c,EMPTY_PATH:FE,addIssueToContext:ee,ParseStatus:At,INVALID:be,DIRTY:tm,OK:Dt,isAborted:cd,isDirty:ld,isValid:Do,isAsync:Cc,get util(){return Be},get objectUtil(){return ad},ZodParsedType:Q,getParsedType:an,ZodType:$e,ZodString:ir,ZodNumber:xn,ZodBigInt:_n,ZodBoolean:No,ZodDate:li,ZodSymbol:Ec,ZodUndefined:ko,ZodNull:Mo,ZodAny:as,ZodUnknown:Hn,ZodNever:Zr,ZodVoid:Sc,ZodArray:or,ZodObject:Qe,ZodUnion:Uo,ZodDiscriminatedUnion:$l,ZodIntersection:Bo,ZodTuple:Dr,ZodRecord:jo,ZodMap:Ac,ZodSet:ui,ZodFunction:Bi,ZodLazy:Lo,ZodLiteral:Fo,ZodEnum:Cn,ZodNativeEnum:Wo,ZodPromise:cs,ZodEffects:fr,ZodTransformer:fr,ZodOptional:Wr,ZodNullable:di,ZodDefault:zo,ZodCatch:$c,ZodNaN:Tc,BRAND:XE,ZodBranded:nm,ZodPipeline:da,ZodReadonly:Ic,custom:im,Schema:$e,ZodSchema:$e,late:e7,get ZodFirstPartyTypeKind(){return fe},coerce:k7,any:c7,array:h7,bigint:n7,boolean:am,date:i7,discriminatedUnion:m7,effect:P0,enum:S7,function:_7,instanceof:t7,intersection:w7,lazy:C7,literal:E7,map:v7,nan:r7,nativeEnum:A7,never:u7,null:a7,nullable:I7,number:om,object:f7,oboolean:N7,onumber:D7,optional:T7,ostring:P7,pipeline:O7,preprocess:R7,promise:$7,record:y7,set:x7,strictObject:p7,string:sm,symbol:s7,transformer:P0,tuple:b7,undefined:o7,union:g7,unknown:l7,void:d7,NEVER:M7,ZodIssueCode:q,quotelessJson:jE,ZodError:sr});const rr=H.object({message:H.string()});function ke(t){return H.literal(le[t])}const U7=H.object({chainId:H.number()}),B7=H.object({email:H.string().email()}),j7=H.object({otp:H.string()}),L7=H.object({chainId:H.optional(H.number())}),F7=H.object({email:H.string().email()}),W7=H.object({action:H.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),z7=H.object({email:H.string().email(),address:H.string(),chainId:H.number()}),H7=H.object({isConnected:H.boolean()}),q7=H.object({chainId:H.number()}),V7=H.object({email:H.string().email()}),Z7=H.string(),G7=H.object({method:H.literal("personal_sign"),params:H.array(H.any())}),K7=H.object({method:H.literal("eth_sendTransaction"),params:H.array(H.any())}),Q7=H.object({method:H.literal("eth_accounts")}),Y7=H.object({method:H.literal("eth_getBalance"),params:H.array(H.any())}),J7=H.object({method:H.literal("eth_estimateGas"),params:H.array(H.any())}),X7=H.object({method:H.literal("eth_gasPrice")}),e9=H.object({method:H.literal("eth_signTypedData_v4"),params:H.array(H.any())}),D0=H.object({token:H.string()}),Ea={appEvent:H.object({type:ke("APP_SWITCH_NETWORK"),payload:U7}).or(H.object({type:ke("APP_CONNECT_EMAIL"),payload:B7})).or(H.object({type:ke("APP_CONNECT_DEVICE")})).or(H.object({type:ke("APP_CONNECT_OTP"),payload:j7})).or(H.object({type:ke("APP_GET_USER"),payload:H.optional(L7)})).or(H.object({type:ke("APP_SIGN_OUT")})).or(H.object({type:ke("APP_IS_CONNECTED"),payload:H.optional(D0)})).or(H.object({type:ke("APP_GET_CHAIN_ID")})).or(H.object({type:ke("APP_RPC_REQUEST"),payload:G7.or(K7).or(Q7).or(Y7).or(J7).or(X7).or(e9)})).or(H.object({type:ke("APP_UPDATE_EMAIL"),payload:F7})).or(H.object({type:ke("APP_AWAIT_UPDATE_EMAIL")})),frameEvent:H.object({type:ke("FRAME_SWITCH_NETWORK_ERROR"),payload:rr}).or(H.object({type:ke("FRAME_SWITCH_NETWORK_SUCCESS")})).or(H.object({type:ke("FRAME_CONNECT_EMAIL_ERROR"),payload:rr})).or(H.object({type:ke("FRAME_CONNECT_EMAIL_SUCCESS"),payload:W7})).or(H.object({type:ke("FRAME_CONNECT_OTP_ERROR"),payload:rr})).or(H.object({type:ke("FRAME_CONNECT_OTP_SUCCESS")})).or(H.object({type:ke("FRAME_CONNECT_DEVICE_ERROR"),payload:rr})).or(H.object({type:ke("FRAME_CONNECT_DEVICE_SUCCESS")})).or(H.object({type:ke("FRAME_GET_USER_ERROR"),payload:rr})).or(H.object({type:ke("FRAME_GET_USER_SUCCESS"),payload:z7})).or(H.object({type:ke("FRAME_SIGN_OUT_ERROR"),payload:rr})).or(H.object({type:ke("FRAME_SIGN_OUT_SUCCESS")})).or(H.object({type:ke("FRAME_IS_CONNECTED_ERROR"),payload:rr})).or(H.object({type:ke("FRAME_IS_CONNECTED_SUCCESS"),payload:H7})).or(H.object({type:ke("FRAME_GET_CHAIN_ID_ERROR"),payload:rr})).or(H.object({type:ke("FRAME_GET_CHAIN_ID_SUCCESS"),payload:q7})).or(H.object({type:ke("FRAME_RPC_REQUEST_ERROR"),payload:rr})).or(H.object({type:ke("FRAME_RPC_REQUEST_SUCCESS"),payload:Z7})).or(H.object({type:ke("FRAME_SESSION_UPDATE"),payload:D0})).or(H.object({type:ke("FRAME_UPDATE_EMAIL_ERROR"),payload:rr})).or(H.object({type:ke("FRAME_UPDATE_EMAIL_SUCCESS")})).or(H.object({type:ke("FRAME_AWAIT_UPDATE_EMAIL_ERROR"),payload:rr})).or(H.object({type:ke("FRAME_AWAIT_UPDATE_EMAIL_SUCCESS"),payload:V7}))},jr={set(t,e){localStorage.setItem(`${le.STORAGE_KEY}${t}`,e)},get(t){return localStorage.getItem(`${le.STORAGE_KEY}${t}`)},delete(t){localStorage.removeItem(`${le.STORAGE_KEY}${t}`)}},t9=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],dd={getBlockchainApiUrl(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return t9.includes(e)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){const t=jr.get(le.LAST_EMAIL_LOGIN_TIME);if(t){const e=Date.now()-Number(t);if(e<3e4){const r=Math.ceil((3e4-e)/1e3);throw new Error(`Please try again after ${r} seconds`)}}}};class r9{constructor(e,r=!1){if(this.iframe=null,this.rpcUrl=dd.getBlockchainApiUrl(),this.events={onFrameEvent:n=>{window.addEventListener("message",({data:s})=>{if(!s.type?.includes(le.FRAME_EVENT_KEY))return;const i=Ea.frameEvent.parse(s);n(i)})},onAppEvent:n=>{window.addEventListener("message",({data:s})=>{if(!s.type?.includes(le.APP_EVENT_KEY))return;const i=Ea.appEvent.parse(s);n(i)})},postAppEvent:n=>{if(!this.iframe?.contentWindow)throw new Error("W3mFrame: iframe is not set");Ea.appEvent.parse(n),window.postMessage(n),this.iframe.contentWindow.postMessage(n,"*")},postFrameEvent:n=>{if(!parent)throw new Error("W3mFrame: parent is not set");Ea.frameEvent.parse(n),parent.postMessage(n,"*")}},this.projectId=e,this.frameLoadPromise=new Promise((n,s)=>{this.frameLoadPromiseResolver={resolve:n,reject:s}}),r){this.frameLoadPromise=new Promise((s,i)=>{this.frameLoadPromiseResolver={resolve:s,reject:i}});const n=document.createElement("iframe");n.id="w3m-iframe",n.src=`${le.SECURE_SITE_SDK}?projectId=${e}`,n.style.position="fixed",n.style.zIndex="999999",n.style.display="none",n.style.opacity="0",n.style.borderRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(n),this.iframe=n,this.iframe.onload=()=>{this.frameLoadPromiseResolver?.resolve(void 0)},this.iframe.onerror=()=>{this.frameLoadPromiseResolver?.reject("Unable to load email login dependency")}}}get networks(){const e=[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map(r=>({[r]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${r}&projectId=${this.projectId}`,chainId:r}}));return Object.assign({},...e)}}class n9{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.awaitUpdateEmailResolver=void 0,this.w3mFrame=new r9(e,!0),this.w3mFrame.events.onFrameEvent(r=>{switch(console.log("💻 received",r),r.type){case le.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(r);case le.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(r);case le.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case le.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(r);case le.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case le.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(r);case le.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(r);case le.FRAME_GET_USER_ERROR:return this.onConnectError(r);case le.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(r);case le.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(r);case le.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(r);case le.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(r);case le.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case le.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(r);case le.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess();case le.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(r);case le.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(r);case le.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(r);case le.FRAME_SESSION_UPDATE:return this.onSessionUpdate(r);case le.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess();case le.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(r);case le.FRAME_AWAIT_UPDATE_EMAIL_SUCCESS:return this.onAwaitUpdateEmailSuccess(r);case le.FRAME_AWAIT_UPDATE_EMAIL_ERROR:return this.onAwaitUpdateEmailError(r);default:return null}})}getLoginEmailUsed(){return!!jr.get(le.EMAIL_LOGIN_USED_KEY)}getEmail(){return jr.get(le.EMAIL)}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,dd.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:le.APP_CONNECT_EMAIL,payload:e}),new Promise((r,n)=>{this.connectEmailResolver={resolve:r,reject:n}})}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_CONNECT_DEVICE}),new Promise((e,r)=>{this.connectDeviceResolver={resolve:e,reject:r}})}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_CONNECT_OTP,payload:e}),new Promise((r,n)=>{this.connectOtpResolver={resolve:r,reject:n}})}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_IS_CONNECTED,payload:void 0}),new Promise((e,r)=>{this.isConnectedResolver={resolve:e,reject:r}})}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_GET_CHAIN_ID}),new Promise((e,r)=>{this.getChainIdResolver={resolve:e,reject:r}})}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,dd.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:le.APP_UPDATE_EMAIL,payload:e}),new Promise((r,n)=>{this.updateEmailResolver={resolve:r,reject:n}})}async awaitUpdateEmail(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_AWAIT_UPDATE_EMAIL}),new Promise((e,r)=>{this.awaitUpdateEmailResolver={resolve:e,reject:r}})}async connect(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_GET_USER,payload:e}),new Promise((r,n)=>{this.connectResolver={resolve:r,reject:n}})}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise((r,n)=>{this.switchChainResolver={resolve:r,reject:n}})}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_SIGN_OUT}),new Promise((e,r)=>{this.disconnectResolver={resolve:e,reject:r}})}async request(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:le.APP_RPC_REQUEST,payload:e}),new Promise((r,n)=>{this.rpcRequestResolver={resolve:r,reject:n}})}onRpcRequest(e){this.w3mFrame.events.onAppEvent(r=>{r.type.includes(le.RPC_METHOD_KEY)&&e(r)})}onRpcResponse(e){this.w3mFrame.events.onFrameEvent(r=>{r.type.includes(le.RPC_METHOD_KEY)&&e(r)})}onIsConnected(e){this.w3mFrame.events.onFrameEvent(r=>{r.type===le.FRAME_IS_CONNECTED_SUCCESS&&e()})}onConnectEmailSuccess(e){this.connectEmailResolver?.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){this.connectEmailResolver?.reject(e.payload.message)}onConnectDeviceSuccess(){this.connectDeviceResolver?.resolve(void 0)}onConnectDeviceError(e){this.connectDeviceResolver?.reject(e.payload.message)}onConnectOtpSuccess(){this.connectOtpResolver?.resolve(void 0)}onConnectOtpError(e){this.connectOtpResolver?.reject(e.payload.message)}onConnectSuccess(e){this.setEmailLoginSuccess(e.payload.email),this.connectResolver?.resolve(e.payload)}onConnectError(e){this.connectResolver?.reject(e.payload.message)}onIsConnectedSuccess(e){this.isConnectedResolver?.resolve(e.payload)}onIsConnectedError(e){this.isConnectedResolver?.reject(e.payload.message)}onGetChainIdSuccess(e){this.getChainIdResolver?.resolve(e.payload)}onGetChainIdError(e){this.getChainIdResolver?.reject(e.payload.message)}onSignOutSuccess(){this.disconnectResolver?.resolve(void 0),jr.delete(le.EMAIL_LOGIN_USED_KEY),jr.delete(le.EMAIL)}onSignOutError(e){this.disconnectResolver?.reject(e.payload.message)}onSwitchChainSuccess(){this.switchChainResolver?.resolve(void 0)}onSwitchChainError(e){this.switchChainResolver?.reject(e.payload.message)}onRpcRequestSuccess(e){this.rpcRequestResolver?.resolve(e.payload)}onRpcRequestError(e){this.rpcRequestResolver?.reject(e.payload.message)}onSessionUpdate(e){}onUpdateEmailSuccess(){this.updateEmailResolver?.resolve(void 0),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){this.updateEmailResolver?.reject(e.payload.message)}onAwaitUpdateEmailSuccess(e){this.setEmailLoginSuccess(e.payload.email),this.awaitUpdateEmailResolver?.resolve(e.payload)}onAwaitUpdateEmailError(e){this.awaitUpdateEmailResolver?.reject(e.payload.message)}setNewLastEmailLoginTime(){jr.set(le.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){jr.set(le.EMAIL,e),jr.set(le.EMAIL_LOGIN_USED_KEY,"true"),jr.delete(le.LAST_EMAIL_LOGIN_TIME)}}class i9 extends Kc{constructor(e){super(e),this.id="w3mEmail",this.name="Web3Modal Email",this.ready=!0,this.provider={},typeof window<"u"&&(this.provider=new n9(e.options.projectId))}async getProvider(){return Promise.resolve(this.provider)}async connect(e={}){const{address:r,chainId:n}=await this.provider.connect({chainId:e.chainId});return{account:r,chain:{id:n,unsupported:this.isChainUnsupported(1)}}}async switchChain(e){try{const r=this.chains.find(s=>s.id===e);if(!r)throw new cr(new Error("chain not found on connector."));await this.provider.switchNetwork(e);const n=this.isChainUnsupported(e);return this.emit("change",{chain:{id:e,unsupported:n}}),r}catch(r){throw r instanceof Error?new cr(r):r}}async disconnect(){await this.provider.disconnect()}async getAccount(){const{address:e}=await this.provider.connect();return e}async getChainId(){const{chainId:e}=await this.provider.getChainId();return e}async getWalletClient(){const{address:e,chainId:r}=await this.provider.connect();return Promise.resolve(Gc({account:e,chain:{id:r},transport:Vc(this.provider)}))}async isAuthorized(){const{isConnected:e}=await this.provider.isConnected();return e}onAccountsChanged(){}onChainChanged(){}onDisconnect(){}}const s9=de.getBlockchainApiUrl();function o9({projectId:t}){return function(r){if(!Lr.WalletConnectRpcChainIds.includes(r.id))return null;const n=`${s9}/v1/?chainId=${we.EIP155}:${r.id}&projectId=${t}`;return{chain:{...r,rpcUrls:{...r.rpcUrls,default:{http:[n]}}},rpcUrls:{http:[n]}}}}function a9({projectId:t,chains:e,metadata:r,enableInjected:n,enableCoinbase:s,enableEIP6963:i,enableEmail:o,enableWalletConnect:a}){const{publicClient:c}=dy(e,[o9({projectId:t}),BE()]),l=[];return a!==!1&&l.push(new UE({chains:e,options:{projectId:t,showQrModal:!1,metadata:r}})),n!==!1&&l.push(new zd({chains:e,options:{shimDisconnect:!0}})),i!==!1&&l.push(new E8({chains:e})),s!==!1&&l.push(new Yx({chains:e,options:{appName:r?.name??"Unknown"}})),o===!0&&l.push(new i9({chains:e,options:{projectId:t}})),Ax({autoConnect:!0,connectors:l,publicClient:c})}let Sa;function c9(t){return Sa||(Sa=new C8({...t,_sdkVersion:`react-wagmi-${we.VERSION}`}),wm(Sa)),Sa}const cm="d10035f161c5f127080ec9ea31f372d1",l9={name:"Web3Modal",description:"Web3Modal Example",url:"https://web3modal.com",icons:["https://avatars.githubusercontent.com/u/37784886"]},lm=[Fd],um=a9({chains:lm,projectId:cm,metadata:l9});c9({wagmiConfig:um,projectId:cm,chains:lm});function u9({children:t}){return Tt.jsx($x,{config:um,children:t})}function d9(t){const e=typeof t=="string"?new TextEncoder().encode(t):t;return Array.from(e).map(s=>s.toString(16).padStart(2,"0")).join("")}async function h9(t,e){const r=await crypto.subtle.digest(e||"SHA-256",typeof t=="string"?new TextEncoder().encode(t):t);return Array.from(new Uint8Array(r)).map(i=>i.toString(16).padStart(2,"0")).join("")}function f9({imgDataURL:t,id:e}){const{open:r}=bm(),{address:n}=Rg(),{config:s}=Hx({to:n,value:0,data:"0x"+d9(t)}),{data:i,sendTransaction:o}=Zx(s),{isLoading:a,isSuccess:c}=Qx({hash:i?.hash}),l=async()=>{const u=await h9(t);let f=null;try{if(f=await fetch(`https://api.ethscriptions.com/api/ethscriptions/exists/${u}`),!f.ok)throw new Error("Error fetching api.");f=await f.json()}catch{alert("Error checking the Ethscriptions API!");return}if(f.result){alert("This image has already been minted, page will reload!"),window.location.reload();return}o?.()};return Tt.jsxs(Tt.Fragment,{children:[Tt.jsx("button",{className:"rounded-md px-2 py-1.5 font-semibold"+(n?" bg-green-500":" bg-blue-500"),onClick:()=>r(),children:n?"See Account":"Connect"}),Tt.jsxs("div",{className:"flex flex-col gap-2 sm:flex-row",children:[Tt.jsx("div",{children:"Connect and click the image to mint it."}),Tt.jsxs("div",{className:"font-bold",children:["Mickey #",e]})]}),Tt.jsx("div",{className:"flex w-full items-center justify-center",children:Tt.jsx("img",{className:"h-96 w-full cursor-pointer",src:`/mickey/${e}?format=png`,alt:"Mickey Mouse",onClick:l})}),Tt.jsx("button",{className:"rounded-md bg-orange-500 px-2 py-1.5 font-semibold",onClick:()=>window.location.reload(),children:"Randomize"}),a&&Tt.jsx("div",{children:"Wait a few seconds, minting..."}),c&&Tt.jsxs("div",{className:"text-green-500",children:["Successfully minted! Check on"," ",Tt.jsx("a",{target:"_blank",className:"text-blue-400",href:`https://ethscriptions.com/ethscriptions/${i?.hash}`,children:"ethscriptions.com"}),"!"]})]})}const IA=({imgDataURL:t,id:e})=>Tt.jsx(u9,{children:Tt.jsx(f9,{"client:load":!0,imgDataURL:t,id:e})});export{lg as $,SA as A,Z as B,AA as C,$A as D,TA as E,SE as F,AE as G,Ds as H,Ws as I,xE as J,EE as K,N0 as L,RC as M,Ee as N,mr as O,Wg as P,z_ as Q,bA as R,W_ as S,Jx as T,aE as U,uE as V,fE as W,hd as X,bE as Y,M_ as Z,Zn as _,o2 as a,IA as a0,a2 as b,c2 as c,_p as d,Rc as e,m9 as f,Zb as g,Pc as h,Ot as i,Er as j,Jw as k,Vb as l,Ho as m,$a as n,zr as o,Nt as p,Wc as q,Cr as r,Kr as s,ta as t,yA as u,vA as v,xA as w,_A as x,CA as y,EA as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/ccip._fmMKy-U.js","_astro/index.LFf77hJu.js","_astro/index._HghUQKF.js","_astro/index.1pHIXn36.js","_astro/events.rtc_PtEz.js","_astro/index.es.x5R3eoha.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
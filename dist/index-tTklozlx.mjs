import { aV as D, aX as un, aY as dn, aZ as Fe, a_ as hn, a$ as sc, aR as ic, aW as Mu } from "./index-W1x9Ryk5.mjs";
import { b as Re, c as fn, a as mr, r as xu } from "./hooks.module-Cvq32y1w.mjs";
var oc = {}, fr = {}, pn = {};
Object.defineProperty(pn, "__esModule", { value: !0 });
pn.walletLogo = void 0;
const Nu = (e, t) => {
  let r;
  switch (e) {
    case "standard":
      return r = t, `data:image/svg+xml,%3Csvg width='${t}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
    case "circle":
      return r = t, `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${r}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
    case "text":
      return r = (0.1 * t).toFixed(2), `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogo":
      return r = (0.25 * t).toFixed(2), `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    case "textLight":
      return r = (0.1 * t).toFixed(2), `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogoLight":
      return r = (0.25 * t).toFixed(2), `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    default:
      return r = t, `data:image/svg+xml,%3Csvg width='${t}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
  }
};
pn.walletLogo = Nu;
var gn = {};
Object.defineProperty(gn, "__esModule", { value: !0 });
gn.LINK_API_URL = void 0;
gn.LINK_API_URL = "https://www.walletlink.org";
var O = {}, _r = {}, tt = {};
Object.defineProperty(tt, "__esModule", { value: !0 });
tt.errorValues = tt.standardErrorCodes = void 0;
tt.standardErrorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901,
    unsupportedChain: 4902
  }
};
tt.errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object."
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available."
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s)."
  },
  "-32603": {
    standard: "JSON RPC 2.0",
    message: "Internal JSON-RPC error."
  },
  "-32000": {
    standard: "EIP-1474",
    message: "Invalid input."
  },
  "-32001": {
    standard: "EIP-1474",
    message: "Resource not found."
  },
  "-32002": {
    standard: "EIP-1474",
    message: "Resource unavailable."
  },
  "-32003": {
    standard: "EIP-1474",
    message: "Transaction rejected."
  },
  "-32004": {
    standard: "EIP-1474",
    message: "Method not supported."
  },
  "-32005": {
    standard: "EIP-1474",
    message: "Request limit exceeded."
  },
  4001: {
    standard: "EIP-1193",
    message: "User rejected the request."
  },
  4100: {
    standard: "EIP-1193",
    message: "The requested account and/or method has not been authorized by the user."
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider."
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains."
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain."
  },
  4902: {
    standard: "EIP-3085",
    message: "Unrecognized chain ID."
  }
};
var bn = {}, mn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.serialize = e.getErrorCode = e.isValidCode = e.getMessageFromCode = e.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
  const t = tt, r = "Unspecified error message.";
  e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function n(h, b = r) {
    if (h && Number.isInteger(h)) {
      const m = h.toString();
      if (u(t.errorValues, m))
        return t.errorValues[m].message;
      if (c(h))
        return e.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return b;
  }
  e.getMessageFromCode = n;
  function s(h) {
    if (!Number.isInteger(h))
      return !1;
    const b = h.toString();
    return !!(t.errorValues[b] || c(h));
  }
  e.isValidCode = s;
  function i(h) {
    var b;
    if (typeof h == "number")
      return h;
    if (o(h))
      return (b = h.code) !== null && b !== void 0 ? b : h.errorCode;
  }
  e.getErrorCode = i;
  function o(h) {
    return typeof h == "object" && h !== null && (typeof h.code == "number" || typeof h.errorCode == "number");
  }
  function a(h, { shouldIncludeStack: b = !1 } = {}) {
    const m = {};
    if (h && typeof h == "object" && !Array.isArray(h) && u(h, "code") && s(h.code)) {
      const R = h;
      m.code = R.code, R.message && typeof R.message == "string" ? (m.message = R.message, u(R, "data") && (m.data = R.data)) : (m.message = n(m.code), m.data = { originalError: l(h) });
    } else
      m.code = t.standardErrorCodes.rpc.internal, m.message = d(h, "message") ? h.message : r, m.data = { originalError: l(h) };
    return b && (m.stack = d(h, "stack") ? h.stack : void 0), m;
  }
  e.serialize = a;
  function c(h) {
    return h >= -32099 && h <= -32e3;
  }
  function l(h) {
    return h && typeof h == "object" && !Array.isArray(h) ? Object.assign({}, h) : h;
  }
  function u(h, b) {
    return Object.prototype.hasOwnProperty.call(h, b);
  }
  function d(h, b) {
    return typeof h == "object" && h !== null && b in h && typeof h[b] == "string";
  }
})(mn);
Object.defineProperty(bn, "__esModule", { value: !0 });
bn.standardErrors = void 0;
const me = tt, ac = mn;
bn.standardErrors = {
  rpc: {
    parse: (e) => Te(me.standardErrorCodes.rpc.parse, e),
    invalidRequest: (e) => Te(me.standardErrorCodes.rpc.invalidRequest, e),
    invalidParams: (e) => Te(me.standardErrorCodes.rpc.invalidParams, e),
    methodNotFound: (e) => Te(me.standardErrorCodes.rpc.methodNotFound, e),
    internal: (e) => Te(me.standardErrorCodes.rpc.internal, e),
    server: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error("Ethereum RPC Server errors must provide single object argument.");
      const { code: t } = e;
      if (!Number.isInteger(t) || t > -32005 || t < -32099)
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      return Te(t, e);
    },
    invalidInput: (e) => Te(me.standardErrorCodes.rpc.invalidInput, e),
    resourceNotFound: (e) => Te(me.standardErrorCodes.rpc.resourceNotFound, e),
    resourceUnavailable: (e) => Te(me.standardErrorCodes.rpc.resourceUnavailable, e),
    transactionRejected: (e) => Te(me.standardErrorCodes.rpc.transactionRejected, e),
    methodNotSupported: (e) => Te(me.standardErrorCodes.rpc.methodNotSupported, e),
    limitExceeded: (e) => Te(me.standardErrorCodes.rpc.limitExceeded, e)
  },
  provider: {
    userRejectedRequest: (e) => xt(me.standardErrorCodes.provider.userRejectedRequest, e),
    unauthorized: (e) => xt(me.standardErrorCodes.provider.unauthorized, e),
    unsupportedMethod: (e) => xt(me.standardErrorCodes.provider.unsupportedMethod, e),
    disconnected: (e) => xt(me.standardErrorCodes.provider.disconnected, e),
    chainDisconnected: (e) => xt(me.standardErrorCodes.provider.chainDisconnected, e),
    unsupportedChain: (e) => xt(me.standardErrorCodes.provider.unsupportedChain, e),
    custom: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error("Ethereum Provider custom errors must provide single object argument.");
      const { code: t, message: r, data: n } = e;
      if (!r || typeof r != "string")
        throw new Error('"message" must be a nonempty string');
      return new uc(t, r, n);
    }
  }
};
function Te(e, t) {
  const [r, n] = cc(t);
  return new lc(e, r || (0, ac.getMessageFromCode)(e), n);
}
function xt(e, t) {
  const [r, n] = cc(t);
  return new uc(e, r || (0, ac.getMessageFromCode)(e), n);
}
function cc(e) {
  if (e) {
    if (typeof e == "string")
      return [e];
    if (typeof e == "object" && !Array.isArray(e)) {
      const { message: t, data: r } = e;
      if (t && typeof t != "string")
        throw new Error("Must specify string message.");
      return [t || void 0, r];
    }
  }
  return [];
}
let lc = class extends Error {
  constructor(t, r, n) {
    if (!Number.isInteger(t))
      throw new Error('"code" must be an integer.');
    if (!r || typeof r != "string")
      throw new Error('"message" must be a nonempty string.');
    super(r), this.code = t, n !== void 0 && (this.data = n);
  }
}, uc = class extends lc {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   * `code` must be an integer in the 1000 <= 4999 range.
   */
  constructor(t, r, n) {
    if (!Lu(t))
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    super(t, r, n);
  }
};
function Lu(e) {
  return Number.isInteger(e) && e >= 1e3 && e <= 4999;
}
var _n = {}, Qt = {};
Object.defineProperty(Qt, "__esModule", { value: !0 });
Qt.isErrorResponse = void 0;
function Ou(e) {
  return e.errorMessage !== void 0;
}
Qt.isErrorResponse = Ou;
var Yt = {};
Object.defineProperty(Yt, "__esModule", { value: !0 });
Yt.LIB_VERSION = void 0;
Yt.LIB_VERSION = "3.9.3";
Object.defineProperty(_n, "__esModule", { value: !0 });
_n.serializeError = void 0;
const Pu = Qt, $u = Yt, Bu = tt, Fu = mn;
function Du(e, t) {
  const r = (0, Fu.serialize)(ju(e), {
    shouldIncludeStack: !0
  }), n = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
  n.searchParams.set("version", $u.LIB_VERSION), n.searchParams.set("code", r.code.toString());
  const s = Hu(r.data, t);
  return s && n.searchParams.set("method", s), n.searchParams.set("message", r.message), Object.assign(Object.assign({}, r), { docUrl: n.href });
}
_n.serializeError = Du;
function ju(e) {
  return typeof e == "string" ? {
    message: e,
    code: Bu.standardErrorCodes.rpc.internal
  } : (0, Pu.isErrorResponse)(e) ? Object.assign(Object.assign({}, e), { message: e.errorMessage, code: e.errorCode, data: { method: e.method } }) : e;
}
function Hu(e, t) {
  const r = e == null ? void 0 : e.method;
  if (r)
    return r;
  if (t !== void 0) {
    if (typeof t == "string")
      return t;
    if (Array.isArray(t)) {
      if (t.length > 0)
        return t[0].method;
    } else return t.method;
  }
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.standardErrors = e.standardErrorCodes = e.serializeError = e.getMessageFromCode = e.getErrorCode = void 0;
  const t = tt;
  Object.defineProperty(e, "standardErrorCodes", { enumerable: !0, get: function() {
    return t.standardErrorCodes;
  } });
  const r = bn;
  Object.defineProperty(e, "standardErrors", { enumerable: !0, get: function() {
    return r.standardErrors;
  } });
  const n = _n;
  Object.defineProperty(e, "serializeError", { enumerable: !0, get: function() {
    return n.serializeError;
  } });
  const s = mn;
  Object.defineProperty(e, "getErrorCode", { enumerable: !0, get: function() {
    return s.getErrorCode;
  } }), Object.defineProperty(e, "getMessageFromCode", { enumerable: !0, get: function() {
    return s.getMessageFromCode;
  } });
})(_r);
var fe = {};
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.ProviderType = fe.RegExpString = fe.IntNumber = fe.BigIntString = fe.AddressString = fe.HexString = fe.OpaqueType = void 0;
function yr() {
  return (e) => e;
}
fe.OpaqueType = yr;
fe.HexString = yr();
fe.AddressString = yr();
fe.BigIntString = yr();
function Uu(e) {
  return Math.floor(e);
}
fe.IntNumber = Uu;
fe.RegExpString = yr();
var Io;
(function(e) {
  e.CoinbaseWallet = "CoinbaseWallet", e.MetaMask = "MetaMask", e.Unselected = "";
})(Io || (fe.ProviderType = Io = {}));
var Wu = D && D.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(O, "__esModule", { value: !0 });
O.isMobileWeb = O.getLocation = O.isInIFrame = O.createQrUrl = O.getFavicon = O.range = O.isBigNumber = O.ensureParsedJSONObject = O.ensureBN = O.ensureRegExpString = O.ensureIntNumber = O.ensureBuffer = O.ensureAddressString = O.ensureEvenLengthHexString = O.ensureHexString = O.isHexString = O.prepend0x = O.strip0x = O.has0xPrefix = O.hexStringFromIntNumber = O.intNumberFromHexString = O.bigIntStringFromBN = O.hexStringFromBuffer = O.hexStringToUint8Array = O.uint8ArrayToHex = O.randomBytesHex = void 0;
const ot = Wu(un), St = _r, Le = fe, dc = /^[0-9]*$/, hc = /^[a-f0-9]*$/;
function Vu(e) {
  return fc(crypto.getRandomValues(new Uint8Array(e)));
}
O.randomBytesHex = Vu;
function fc(e) {
  return [...e].map((t) => t.toString(16).padStart(2, "0")).join("");
}
O.uint8ArrayToHex = fc;
function zu(e) {
  return new Uint8Array(e.match(/.{1,2}/g).map((t) => parseInt(t, 16)));
}
O.hexStringToUint8Array = zu;
function qu(e, t = !1) {
  const r = e.toString("hex");
  return (0, Le.HexString)(t ? `0x${r}` : r);
}
O.hexStringFromBuffer = qu;
function Gu(e) {
  return (0, Le.BigIntString)(e.toString(10));
}
O.bigIntStringFromBN = Gu;
function Ju(e) {
  return (0, Le.IntNumber)(new ot.default(vr(e, !1), 16).toNumber());
}
O.intNumberFromHexString = Ju;
function Zu(e) {
  return (0, Le.HexString)(`0x${new ot.default(e).toString(16)}`);
}
O.hexStringFromIntNumber = Zu;
function Ui(e) {
  return e.startsWith("0x") || e.startsWith("0X");
}
O.has0xPrefix = Ui;
function yn(e) {
  return Ui(e) ? e.slice(2) : e;
}
O.strip0x = yn;
function pc(e) {
  return Ui(e) ? `0x${e.slice(2)}` : `0x${e}`;
}
O.prepend0x = pc;
function wr(e) {
  if (typeof e != "string")
    return !1;
  const t = yn(e).toLowerCase();
  return hc.test(t);
}
O.isHexString = wr;
function gc(e, t = !1) {
  if (typeof e == "string") {
    const r = yn(e).toLowerCase();
    if (hc.test(r))
      return (0, Le.HexString)(t ? `0x${r}` : r);
  }
  throw St.standardErrors.rpc.invalidParams(`"${String(e)}" is not a hexadecimal string`);
}
O.ensureHexString = gc;
function vr(e, t = !1) {
  let r = gc(e, !1);
  return r.length % 2 === 1 && (r = (0, Le.HexString)(`0${r}`)), t ? (0, Le.HexString)(`0x${r}`) : r;
}
O.ensureEvenLengthHexString = vr;
function Ku(e) {
  if (typeof e == "string") {
    const t = yn(e).toLowerCase();
    if (wr(t) && t.length === 40)
      return (0, Le.AddressString)(pc(t));
  }
  throw St.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`);
}
O.ensureAddressString = Ku;
function Qu(e) {
  if (Buffer.isBuffer(e))
    return e;
  if (typeof e == "string") {
    if (wr(e)) {
      const t = vr(e, !1);
      return Buffer.from(t, "hex");
    }
    return Buffer.from(e, "utf8");
  }
  throw St.standardErrors.rpc.invalidParams(`Not binary data: ${String(e)}`);
}
O.ensureBuffer = Qu;
function bc(e) {
  if (typeof e == "number" && Number.isInteger(e))
    return (0, Le.IntNumber)(e);
  if (typeof e == "string") {
    if (dc.test(e))
      return (0, Le.IntNumber)(Number(e));
    if (wr(e))
      return (0, Le.IntNumber)(new ot.default(vr(e, !1), 16).toNumber());
  }
  throw St.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`);
}
O.ensureIntNumber = bc;
function Yu(e) {
  if (e instanceof RegExp)
    return (0, Le.RegExpString)(e.toString());
  throw St.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(e)}`);
}
O.ensureRegExpString = Yu;
function Xu(e) {
  if (e !== null && (ot.default.isBN(e) || mc(e)))
    return new ot.default(e.toString(10), 10);
  if (typeof e == "number")
    return new ot.default(bc(e));
  if (typeof e == "string") {
    if (dc.test(e))
      return new ot.default(e, 10);
    if (wr(e))
      return new ot.default(vr(e, !1), 16);
  }
  throw St.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`);
}
O.ensureBN = Xu;
function ed(e) {
  if (typeof e == "string")
    return JSON.parse(e);
  if (typeof e == "object")
    return e;
  throw St.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(e)}`);
}
O.ensureParsedJSONObject = ed;
function mc(e) {
  if (e == null || typeof e.constructor != "function")
    return !1;
  const { constructor: t } = e;
  return typeof t.config == "function" && typeof t.EUCLID == "number";
}
O.isBigNumber = mc;
function td(e, t) {
  return Array.from({ length: t - e }, (r, n) => e + n);
}
O.range = td;
function rd() {
  const e = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]'), { protocol: t, host: r } = document.location, n = e ? e.getAttribute("href") : null;
  return !n || n.startsWith("javascript:") || n.startsWith("vbscript:") ? null : n.startsWith("http://") || n.startsWith("https://") || n.startsWith("data:") ? n : n.startsWith("//") ? t + n : `${t}//${r}${n}`;
}
O.getFavicon = rd;
function nd(e, t, r, n, s, i) {
  const o = n ? "parent-id" : "id", a = new URLSearchParams({
    [o]: e,
    secret: t,
    server: r,
    v: s,
    chainId: i.toString()
  }).toString();
  return `${r}/#/link?${a}`;
}
O.createQrUrl = nd;
function _c() {
  try {
    return window.frameElement !== null;
  } catch {
    return !1;
  }
}
O.isInIFrame = _c;
function sd() {
  try {
    return _c() && window.top ? window.top.location : window.location;
  } catch {
    return window.location;
  }
}
O.getLocation = sd;
function id() {
  var e;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((e = window == null ? void 0 : window.navigator) === null || e === void 0 ? void 0 : e.userAgent);
}
O.isMobileWeb = id;
var wn = {};
Object.defineProperty(wn, "__esModule", { value: !0 });
wn.ScopedLocalStorage = void 0;
class od {
  // eslint-disable-next-line no-useless-constructor
  constructor(t) {
    this.scope = t;
  }
  setItem(t, r) {
    localStorage.setItem(this.scopedKey(t), r);
  }
  getItem(t) {
    return localStorage.getItem(this.scopedKey(t));
  }
  removeItem(t) {
    localStorage.removeItem(this.scopedKey(t));
  }
  clear() {
    const t = this.scopedKey(""), r = [];
    for (let n = 0; n < localStorage.length; n++) {
      const s = localStorage.key(n);
      typeof s == "string" && s.startsWith(t) && r.push(s);
    }
    r.forEach((n) => localStorage.removeItem(n));
  }
  scopedKey(t) {
    return `${this.scope}:${t}`;
  }
}
wn.ScopedLocalStorage = od;
var Wt = {}, Er = {}, Sr = {}, Xt = {};
Object.defineProperty(Xt, "__esModule", { value: !0 });
Xt.EVENTS = void 0;
Xt.EVENTS = {
  STARTED_CONNECTING: "walletlink_sdk.started.connecting",
  CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
  DISCONNECTED: "walletlink_sdk.disconnected",
  METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
  LINKED: "walletlink_sdk.linked",
  FAILURE: "walletlink_sdk.generic_failure",
  SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
  ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
  SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
  UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
  SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
  GENERAL_ERROR: "walletlink_sdk.general_error",
  WEB3_REQUEST: "walletlink_sdk.web3.request",
  WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
  WEB3_RESPONSE: "walletlink_sdk.web3.response",
  METHOD_NOT_IMPLEMENTED: "walletlink_sdk.method_not_implemented",
  UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered"
};
var Ne = {};
Object.defineProperty(Ne, "__esModule", { value: !0 });
Ne.RelayAbstract = Ne.APP_VERSION_KEY = Ne.LOCAL_STORAGE_ADDRESSES_KEY = Ne.WALLET_USER_NAME_KEY = void 0;
const Ao = _r;
Ne.WALLET_USER_NAME_KEY = "walletUsername";
Ne.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
Ne.APP_VERSION_KEY = "AppVersion";
class ad {
  async makeEthereumJSONRPCRequest(t, r) {
    if (!r)
      throw new Error("Error: No jsonRpcUrl provided");
    return window.fetch(r, {
      method: "POST",
      body: JSON.stringify(t),
      mode: "cors",
      headers: { "Content-Type": "application/json" }
    }).then((n) => n.json()).then((n) => {
      if (!n)
        throw Ao.standardErrors.rpc.parse({});
      const s = n, { error: i } = s;
      if (i)
        throw (0, Ao.serializeError)(i, t.method);
      return s;
    });
  }
}
Ne.RelayAbstract = ad;
var er = {}, yc = { exports: {} }, Ni = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(e, t) {
  var r = dn, n = r.Buffer;
  function s(o, a) {
    for (var c in o)
      a[c] = o[c];
  }
  n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? e.exports = r : (s(r, t), t.Buffer = i);
  function i(o, a, c) {
    return n(o, a, c);
  }
  i.prototype = Object.create(n.prototype), s(n, i), i.from = function(o, a, c) {
    if (typeof o == "number")
      throw new TypeError("Argument must not be a number");
    return n(o, a, c);
  }, i.alloc = function(o, a, c) {
    if (typeof o != "number")
      throw new TypeError("Argument must be a number");
    var l = n(o);
    return a !== void 0 ? typeof c == "string" ? l.fill(a, c) : l.fill(a) : l.fill(0), l;
  }, i.allocUnsafe = function(o) {
    if (typeof o != "number")
      throw new TypeError("Argument must be a number");
    return n(o);
  }, i.allocUnsafeSlow = function(o) {
    if (typeof o != "number")
      throw new TypeError("Argument must be a number");
    return r.SlowBuffer(o);
  };
})(Ni, Ni.exports);
var ut = Ni.exports, wc = ut.Buffer;
function vn(e, t) {
  this._block = wc.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0;
}
vn.prototype.update = function(e, t) {
  typeof e == "string" && (t = t || "utf8", e = wc.from(e, t));
  for (var r = this._block, n = this._blockSize, s = e.length, i = this._len, o = 0; o < s; ) {
    for (var a = i % n, c = Math.min(s - o, n - a), l = 0; l < c; l++)
      r[a + l] = e[o + l];
    i += c, o += c, i % n === 0 && this._update(r);
  }
  return this._len += s, this;
};
vn.prototype.digest = function(e) {
  var t = this._len % this._blockSize;
  this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
  var r = this._len * 8;
  if (r <= 4294967295)
    this._block.writeUInt32BE(r, this._blockSize - 4);
  else {
    var n = (r & 4294967295) >>> 0, s = (r - n) / 4294967296;
    this._block.writeUInt32BE(s, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4);
  }
  this._update(this._block);
  var i = this._hash();
  return e ? i.toString(e) : i;
};
vn.prototype._update = function() {
  throw new Error("_update must be implemented by subclass");
};
var tr = vn, cd = Fe, vc = tr, ld = ut.Buffer, ud = [
  1518500249,
  1859775393,
  -1894007588,
  -899497514
], dd = new Array(80);
function Rr() {
  this.init(), this._w = dd, vc.call(this, 64, 56);
}
cd(Rr, vc);
Rr.prototype.init = function() {
  return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
};
function hd(e) {
  return e << 5 | e >>> 27;
}
function fd(e) {
  return e << 30 | e >>> 2;
}
function pd(e, t, r, n) {
  return e === 0 ? t & r | ~t & n : e === 2 ? t & r | t & n | r & n : t ^ r ^ n;
}
Rr.prototype._update = function(e) {
  for (var t = this._w, r = this._a | 0, n = this._b | 0, s = this._c | 0, i = this._d | 0, o = this._e | 0, a = 0; a < 16; ++a) t[a] = e.readInt32BE(a * 4);
  for (; a < 80; ++a) t[a] = t[a - 3] ^ t[a - 8] ^ t[a - 14] ^ t[a - 16];
  for (var c = 0; c < 80; ++c) {
    var l = ~~(c / 20), u = hd(r) + pd(l, n, s, i) + o + t[c] + ud[l] | 0;
    o = i, i = s, s = fd(n), n = r, r = u;
  }
  this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = s + this._c | 0, this._d = i + this._d | 0, this._e = o + this._e | 0;
};
Rr.prototype._hash = function() {
  var e = ld.allocUnsafe(20);
  return e.writeInt32BE(this._a | 0, 0), e.writeInt32BE(this._b | 0, 4), e.writeInt32BE(this._c | 0, 8), e.writeInt32BE(this._d | 0, 12), e.writeInt32BE(this._e | 0, 16), e;
};
var gd = Rr, bd = Fe, Ec = tr, md = ut.Buffer, _d = [
  1518500249,
  1859775393,
  -1894007588,
  -899497514
], yd = new Array(80);
function Cr() {
  this.init(), this._w = yd, Ec.call(this, 64, 56);
}
bd(Cr, Ec);
Cr.prototype.init = function() {
  return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
};
function wd(e) {
  return e << 1 | e >>> 31;
}
function vd(e) {
  return e << 5 | e >>> 27;
}
function Ed(e) {
  return e << 30 | e >>> 2;
}
function Sd(e, t, r, n) {
  return e === 0 ? t & r | ~t & n : e === 2 ? t & r | t & n | r & n : t ^ r ^ n;
}
Cr.prototype._update = function(e) {
  for (var t = this._w, r = this._a | 0, n = this._b | 0, s = this._c | 0, i = this._d | 0, o = this._e | 0, a = 0; a < 16; ++a) t[a] = e.readInt32BE(a * 4);
  for (; a < 80; ++a) t[a] = wd(t[a - 3] ^ t[a - 8] ^ t[a - 14] ^ t[a - 16]);
  for (var c = 0; c < 80; ++c) {
    var l = ~~(c / 20), u = vd(r) + Sd(l, n, s, i) + o + t[c] + _d[l] | 0;
    o = i, i = s, s = Ed(n), n = r, r = u;
  }
  this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = s + this._c | 0, this._d = i + this._d | 0, this._e = o + this._e | 0;
};
Cr.prototype._hash = function() {
  var e = md.allocUnsafe(20);
  return e.writeInt32BE(this._a | 0, 0), e.writeInt32BE(this._b | 0, 4), e.writeInt32BE(this._c | 0, 8), e.writeInt32BE(this._d | 0, 12), e.writeInt32BE(this._e | 0, 16), e;
};
var Rd = Cr, Cd = Fe, Sc = tr, kd = ut.Buffer, Id = [
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
], Ad = new Array(64);
function kr() {
  this.init(), this._w = Ad, Sc.call(this, 64, 56);
}
Cd(kr, Sc);
kr.prototype.init = function() {
  return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this;
};
function Td(e, t, r) {
  return r ^ e & (t ^ r);
}
function Md(e, t, r) {
  return e & t | r & (e | t);
}
function xd(e) {
  return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10);
}
function Nd(e) {
  return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
}
function Ld(e) {
  return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3;
}
function Od(e) {
  return (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10;
}
kr.prototype._update = function(e) {
  for (var t = this._w, r = this._a | 0, n = this._b | 0, s = this._c | 0, i = this._d | 0, o = this._e | 0, a = this._f | 0, c = this._g | 0, l = this._h | 0, u = 0; u < 16; ++u) t[u] = e.readInt32BE(u * 4);
  for (; u < 64; ++u) t[u] = Od(t[u - 2]) + t[u - 7] + Ld(t[u - 15]) + t[u - 16] | 0;
  for (var d = 0; d < 64; ++d) {
    var h = l + Nd(o) + Td(o, a, c) + Id[d] + t[d] | 0, b = xd(r) + Md(r, n, s) | 0;
    l = c, c = a, a = o, o = i + h | 0, i = s, s = n, n = r, r = h + b | 0;
  }
  this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = s + this._c | 0, this._d = i + this._d | 0, this._e = o + this._e | 0, this._f = a + this._f | 0, this._g = c + this._g | 0, this._h = l + this._h | 0;
};
kr.prototype._hash = function() {
  var e = kd.allocUnsafe(32);
  return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e;
};
var Rc = kr, Pd = Fe, $d = Rc, Bd = tr, Fd = ut.Buffer, Dd = new Array(64);
function En() {
  this.init(), this._w = Dd, Bd.call(this, 64, 56);
}
Pd(En, $d);
En.prototype.init = function() {
  return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this;
};
En.prototype._hash = function() {
  var e = Fd.allocUnsafe(28);
  return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e;
};
var jd = En, Hd = Fe, Cc = tr, Ud = ut.Buffer, To = [
  1116352408,
  3609767458,
  1899447441,
  602891725,
  3049323471,
  3964484399,
  3921009573,
  2173295548,
  961987163,
  4081628472,
  1508970993,
  3053834265,
  2453635748,
  2937671579,
  2870763221,
  3664609560,
  3624381080,
  2734883394,
  310598401,
  1164996542,
  607225278,
  1323610764,
  1426881987,
  3590304994,
  1925078388,
  4068182383,
  2162078206,
  991336113,
  2614888103,
  633803317,
  3248222580,
  3479774868,
  3835390401,
  2666613458,
  4022224774,
  944711139,
  264347078,
  2341262773,
  604807628,
  2007800933,
  770255983,
  1495990901,
  1249150122,
  1856431235,
  1555081692,
  3175218132,
  1996064986,
  2198950837,
  2554220882,
  3999719339,
  2821834349,
  766784016,
  2952996808,
  2566594879,
  3210313671,
  3203337956,
  3336571891,
  1034457026,
  3584528711,
  2466948901,
  113926993,
  3758326383,
  338241895,
  168717936,
  666307205,
  1188179964,
  773529912,
  1546045734,
  1294757372,
  1522805485,
  1396182291,
  2643833823,
  1695183700,
  2343527390,
  1986661051,
  1014477480,
  2177026350,
  1206759142,
  2456956037,
  344077627,
  2730485921,
  1290863460,
  2820302411,
  3158454273,
  3259730800,
  3505952657,
  3345764771,
  106217008,
  3516065817,
  3606008344,
  3600352804,
  1432725776,
  4094571909,
  1467031594,
  275423344,
  851169720,
  430227734,
  3100823752,
  506948616,
  1363258195,
  659060556,
  3750685593,
  883997877,
  3785050280,
  958139571,
  3318307427,
  1322822218,
  3812723403,
  1537002063,
  2003034995,
  1747873779,
  3602036899,
  1955562222,
  1575990012,
  2024104815,
  1125592928,
  2227730452,
  2716904306,
  2361852424,
  442776044,
  2428436474,
  593698344,
  2756734187,
  3733110249,
  3204031479,
  2999351573,
  3329325298,
  3815920427,
  3391569614,
  3928383900,
  3515267271,
  566280711,
  3940187606,
  3454069534,
  4118630271,
  4000239992,
  116418474,
  1914138554,
  174292421,
  2731055270,
  289380356,
  3203993006,
  460393269,
  320620315,
  685471733,
  587496836,
  852142971,
  1086792851,
  1017036298,
  365543100,
  1126000580,
  2618297676,
  1288033470,
  3409855158,
  1501505948,
  4234509866,
  1607167915,
  987167468,
  1816402316,
  1246189591
], Wd = new Array(160);
function Ir() {
  this.init(), this._w = Wd, Cc.call(this, 128, 112);
}
Hd(Ir, Cc);
Ir.prototype.init = function() {
  return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this;
};
function Mo(e, t, r) {
  return r ^ e & (t ^ r);
}
function xo(e, t, r) {
  return e & t | r & (e | t);
}
function No(e, t) {
  return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25);
}
function Lo(e, t) {
  return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23);
}
function Vd(e, t) {
  return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7;
}
function zd(e, t) {
  return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25);
}
function qd(e, t) {
  return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6;
}
function Gd(e, t) {
  return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26);
}
function ge(e, t) {
  return e >>> 0 < t >>> 0 ? 1 : 0;
}
Ir.prototype._update = function(e) {
  for (var t = this._w, r = this._ah | 0, n = this._bh | 0, s = this._ch | 0, i = this._dh | 0, o = this._eh | 0, a = this._fh | 0, c = this._gh | 0, l = this._hh | 0, u = this._al | 0, d = this._bl | 0, h = this._cl | 0, b = this._dl | 0, m = this._el | 0, R = this._fl | 0, E = this._gl | 0, g = this._hl | 0, y = 0; y < 32; y += 2)
    t[y] = e.readInt32BE(y * 4), t[y + 1] = e.readInt32BE(y * 4 + 4);
  for (; y < 160; y += 2) {
    var _ = t[y - 30], C = t[y - 15 * 2 + 1], S = Vd(_, C), T = zd(C, _);
    _ = t[y - 2 * 2], C = t[y - 2 * 2 + 1];
    var U = qd(_, C), B = Gd(C, _), P = t[y - 7 * 2], Q = t[y - 7 * 2 + 1], oe = t[y - 16 * 2], ne = t[y - 16 * 2 + 1], se = T + Q | 0, M = S + P + ge(se, T) | 0;
    se = se + B | 0, M = M + U + ge(se, B) | 0, se = se + ne | 0, M = M + oe + ge(se, ne) | 0, t[y] = M, t[y + 1] = se;
  }
  for (var I = 0; I < 160; I += 2) {
    M = t[I], se = t[I + 1];
    var $ = xo(r, n, s), N = xo(u, d, h), F = No(r, u), L = No(u, r), H = Lo(o, m), Z = Lo(m, o), W = To[I], K = To[I + 1], ue = Mo(o, a, c), te = Mo(m, R, E), w = g + Z | 0, v = l + H + ge(w, g) | 0;
    w = w + te | 0, v = v + ue + ge(w, te) | 0, w = w + K | 0, v = v + W + ge(w, K) | 0, w = w + se | 0, v = v + M + ge(w, se) | 0;
    var A = L + N | 0, j = F + $ + ge(A, L) | 0;
    l = c, g = E, c = a, E = R, a = o, R = m, m = b + w | 0, o = i + v + ge(m, b) | 0, i = s, b = h, s = n, h = d, n = r, d = u, u = w + A | 0, r = v + j + ge(u, w) | 0;
  }
  this._al = this._al + u | 0, this._bl = this._bl + d | 0, this._cl = this._cl + h | 0, this._dl = this._dl + b | 0, this._el = this._el + m | 0, this._fl = this._fl + R | 0, this._gl = this._gl + E | 0, this._hl = this._hl + g | 0, this._ah = this._ah + r + ge(this._al, u) | 0, this._bh = this._bh + n + ge(this._bl, d) | 0, this._ch = this._ch + s + ge(this._cl, h) | 0, this._dh = this._dh + i + ge(this._dl, b) | 0, this._eh = this._eh + o + ge(this._el, m) | 0, this._fh = this._fh + a + ge(this._fl, R) | 0, this._gh = this._gh + c + ge(this._gl, E) | 0, this._hh = this._hh + l + ge(this._hl, g) | 0;
};
Ir.prototype._hash = function() {
  var e = Ud.allocUnsafe(64);
  function t(r, n, s) {
    e.writeInt32BE(r, s), e.writeInt32BE(n, s + 4);
  }
  return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), t(this._gh, this._gl, 48), t(this._hh, this._hl, 56), e;
};
var kc = Ir, Jd = Fe, Zd = kc, Kd = tr, Qd = ut.Buffer, Yd = new Array(160);
function Sn() {
  this.init(), this._w = Yd, Kd.call(this, 128, 112);
}
Jd(Sn, Zd);
Sn.prototype.init = function() {
  return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this;
};
Sn.prototype._hash = function() {
  var e = Qd.allocUnsafe(48);
  function t(r, n, s) {
    e.writeInt32BE(r, s), e.writeInt32BE(n, s + 4);
  }
  return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), e;
};
var Xd = Sn, Rt = yc.exports = function(t) {
  t = t.toLowerCase();
  var r = Rt[t];
  if (!r) throw new Error(t + " is not supported (we accept pull requests)");
  return new r();
};
Rt.sha = gd;
Rt.sha1 = Rd;
Rt.sha224 = jd;
Rt.sha256 = Rc;
Rt.sha384 = Xd;
Rt.sha512 = kc;
var eh = yc.exports;
Object.defineProperty(er, "__esModule", { value: !0 });
er.Session = void 0;
const Oo = eh, Po = O, $o = "session:id", Bo = "session:secret", Fo = "session:linked";
class Wi {
  constructor(t, r, n, s) {
    this._storage = t, this._id = r || (0, Po.randomBytesHex)(16), this._secret = n || (0, Po.randomBytesHex)(32), this._key = new Oo.sha256().update(`${this._id}, ${this._secret} WalletLink`).digest("hex"), this._linked = !!s;
  }
  static load(t) {
    const r = t.getItem($o), n = t.getItem(Fo), s = t.getItem(Bo);
    return r && s ? new Wi(t, r, s, n === "1") : null;
  }
  /**
   * Takes in a session ID and returns the sha256 hash of it.
   * @param sessionId session ID
   */
  static hash(t) {
    return new Oo.sha256().update(t).digest("hex");
  }
  get id() {
    return this._id;
  }
  get secret() {
    return this._secret;
  }
  get key() {
    return this._key;
  }
  get linked() {
    return this._linked;
  }
  set linked(t) {
    this._linked = t, this.persistLinked();
  }
  save() {
    return this._storage.setItem($o, this._id), this._storage.setItem(Bo, this._secret), this.persistLinked(), this;
  }
  persistLinked() {
    this._storage.setItem(Fo, this._linked ? "1" : "0");
  }
}
er.Session = Wi;
var Rn = {}, Cn = {};
Object.defineProperty(Cn, "__esModule", { value: !0 });
Cn.Cipher = void 0;
const Wr = O;
class th {
  // @param secret hex representation of 32-byte secret
  constructor(t) {
    this.secret = t;
  }
  /**
   *
   * @param plainText string to be encrypted
   * returns hex string representation of bytes in the order: initialization vector (iv),
   * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes. Remaining bytes are the
   * encrypted plainText.
   */
  async encrypt(t) {
    const r = this.secret;
    if (r.length !== 64)
      throw Error("secret must be 256 bits");
    const n = crypto.getRandomValues(new Uint8Array(12)), s = await crypto.subtle.importKey("raw", (0, Wr.hexStringToUint8Array)(r), { name: "aes-gcm" }, !1, ["encrypt", "decrypt"]), i = new TextEncoder(), o = await window.crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: n
    }, s, i.encode(t)), a = 16, c = o.slice(o.byteLength - a), l = o.slice(0, o.byteLength - a), u = new Uint8Array(c), d = new Uint8Array(l), h = new Uint8Array([...n, ...u, ...d]);
    return (0, Wr.uint8ArrayToHex)(h);
  }
  /**
   *
   * @param cipherText hex string representation of bytes in the order: initialization vector (iv),
   * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes.
   */
  async decrypt(t) {
    const r = this.secret;
    if (r.length !== 64)
      throw Error("secret must be 256 bits");
    return new Promise((n, s) => {
      (async function() {
        const i = await crypto.subtle.importKey("raw", (0, Wr.hexStringToUint8Array)(r), { name: "aes-gcm" }, !1, ["encrypt", "decrypt"]), o = (0, Wr.hexStringToUint8Array)(t), a = o.slice(0, 12), c = o.slice(12, 28), l = o.slice(28), u = new Uint8Array([...l, ...c]), d = {
          name: "AES-GCM",
          iv: new Uint8Array(a)
        };
        try {
          const h = await window.crypto.subtle.decrypt(d, i, u), b = new TextDecoder();
          n(b.decode(h));
        } catch (h) {
          s(h);
        }
      })();
    });
  }
}
Cn.Cipher = th;
var kn = {};
Object.defineProperty(kn, "__esModule", { value: !0 });
kn.WalletLinkHTTP = void 0;
class rh {
  constructor(t, r, n) {
    this.linkAPIUrl = t, this.sessionId = r;
    const s = `${r}:${n}`;
    this.auth = `Basic ${btoa(s)}`;
  }
  // mark unseen events as seen
  async markUnseenEventsAsSeen(t) {
    return Promise.all(t.map((r) => fetch(`${this.linkAPIUrl}/events/${r.eventId}/seen`, {
      method: "POST",
      headers: {
        Authorization: this.auth
      }
    }))).catch((r) => console.error("Unabled to mark event as failed:", r));
  }
  async fetchUnseenEvents() {
    var t;
    const r = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
      headers: {
        Authorization: this.auth
      }
    });
    if (r.ok) {
      const { events: n, error: s } = await r.json();
      if (s)
        throw new Error(`Check unseen events failed: ${s}`);
      const i = (t = n == null ? void 0 : n.filter((o) => o.event === "Web3Response").map((o) => ({
        type: "Event",
        sessionId: this.sessionId,
        eventId: o.id,
        event: o.event,
        data: o.data
      }))) !== null && t !== void 0 ? t : [];
      return this.markUnseenEventsAsSeen(i), i;
    }
    throw new Error(`Check unseen events failed: ${r.status}`);
  }
}
kn.WalletLinkHTTP = rh;
var Vt = {};
Object.defineProperty(Vt, "__esModule", { value: !0 });
Vt.WalletLinkWebSocket = Vt.ConnectionState = void 0;
var Ft;
(function(e) {
  e[e.DISCONNECTED = 0] = "DISCONNECTED", e[e.CONNECTING = 1] = "CONNECTING", e[e.CONNECTED = 2] = "CONNECTED";
})(Ft || (Vt.ConnectionState = Ft = {}));
class nh {
  setConnectionStateListener(t) {
    this.connectionStateListener = t;
  }
  setIncomingDataListener(t) {
    this.incomingDataListener = t;
  }
  /**
   * Constructor
   * @param url WebSocket server URL
   * @param [WebSocketClass] Custom WebSocket implementation
   */
  constructor(t, r = WebSocket) {
    this.WebSocketClass = r, this.webSocket = null, this.pendingData = [], this.url = t.replace(/^http/, "ws");
  }
  /**
   * Make a websocket connection
   * @returns a Promise that resolves when connected
   */
  async connect() {
    if (this.webSocket)
      throw new Error("webSocket object is not null");
    return new Promise((t, r) => {
      var n;
      let s;
      try {
        this.webSocket = s = new this.WebSocketClass(this.url);
      } catch (i) {
        r(i);
        return;
      }
      (n = this.connectionStateListener) === null || n === void 0 || n.call(this, Ft.CONNECTING), s.onclose = (i) => {
        var o;
        this.clearWebSocket(), r(new Error(`websocket error ${i.code}: ${i.reason}`)), (o = this.connectionStateListener) === null || o === void 0 || o.call(this, Ft.DISCONNECTED);
      }, s.onopen = (i) => {
        var o;
        t(), (o = this.connectionStateListener) === null || o === void 0 || o.call(this, Ft.CONNECTED), this.pendingData.length > 0 && ([...this.pendingData].forEach((c) => this.sendData(c)), this.pendingData = []);
      }, s.onmessage = (i) => {
        var o, a;
        if (i.data === "h")
          (o = this.incomingDataListener) === null || o === void 0 || o.call(this, {
            type: "Heartbeat"
          });
        else
          try {
            const c = JSON.parse(i.data);
            (a = this.incomingDataListener) === null || a === void 0 || a.call(this, c);
          } catch {
          }
      };
    });
  }
  /**
   * Disconnect from server
   */
  disconnect() {
    var t;
    const { webSocket: r } = this;
    if (r) {
      this.clearWebSocket(), (t = this.connectionStateListener) === null || t === void 0 || t.call(this, Ft.DISCONNECTED), this.connectionStateListener = void 0, this.incomingDataListener = void 0;
      try {
        r.close();
      } catch {
      }
    }
  }
  /**
   * Send data to server
   * @param data text to send
   */
  sendData(t) {
    const { webSocket: r } = this;
    if (!r) {
      this.pendingData.push(t), this.connect();
      return;
    }
    r.send(t);
  }
  clearWebSocket() {
    const { webSocket: t } = this;
    t && (this.webSocket = null, t.onclose = null, t.onerror = null, t.onmessage = null, t.onopen = null);
  }
}
Vt.WalletLinkWebSocket = nh;
Object.defineProperty(Rn, "__esModule", { value: !0 });
Rn.WalletLinkConnection = void 0;
const Nt = fe, sh = Cn, Ue = Xt, Do = Ne, Lt = er, ih = kn, Vr = Vt, jo = 1e4, oh = 6e4;
class ah {
  /**
   * Constructor
   * @param session Session
   * @param linkAPIUrl Coinbase Wallet link server URL
   * @param listener WalletLinkConnectionUpdateListener
   * @param [WebSocketClass] Custom WebSocket implementation
   */
  constructor({ session: t, linkAPIUrl: r, listener: n, diagnostic: s, WebSocketClass: i = WebSocket }) {
    this.destroyed = !1, this.lastHeartbeatResponse = 0, this.nextReqId = (0, Nt.IntNumber)(1), this._connected = !1, this._linked = !1, this.shouldFetchUnseenEventsOnConnect = !1, this.requestResolutions = /* @__PURE__ */ new Map(), this.handleSessionMetadataUpdated = (a) => {
      if (!a)
        return;
      (/* @__PURE__ */ new Map([
        ["__destroyed", this.handleDestroyed],
        ["EthereumAddress", this.handleAccountUpdated],
        ["WalletUsername", this.handleWalletUsernameUpdated],
        ["AppVersion", this.handleAppVersionUpdated],
        [
          "ChainId",
          (l) => a.JsonRpcUrl && this.handleChainUpdated(l, a.JsonRpcUrl)
        ]
      ])).forEach((l, u) => {
        const d = a[u];
        d !== void 0 && l(d);
      });
    }, this.handleDestroyed = (a) => {
      var c, l;
      a === "1" && ((c = this.listener) === null || c === void 0 || c.resetAndReload(), (l = this.diagnostic) === null || l === void 0 || l.log(Ue.EVENTS.METADATA_DESTROYED, {
        alreadyDestroyed: this.isDestroyed,
        sessionIdHash: Lt.Session.hash(this.session.id)
      }));
    }, this.handleAccountUpdated = async (a) => {
      var c, l;
      try {
        const u = await this.cipher.decrypt(a);
        (c = this.listener) === null || c === void 0 || c.accountUpdated(u);
      } catch {
        (l = this.diagnostic) === null || l === void 0 || l.log(Ue.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "selectedAddress"
        });
      }
    }, this.handleMetadataUpdated = async (a, c) => {
      var l, u;
      try {
        const d = await this.cipher.decrypt(c);
        (l = this.listener) === null || l === void 0 || l.metadataUpdated(a, d);
      } catch {
        (u = this.diagnostic) === null || u === void 0 || u.log(Ue.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: a
        });
      }
    }, this.handleWalletUsernameUpdated = async (a) => {
      this.handleMetadataUpdated(Do.WALLET_USER_NAME_KEY, a);
    }, this.handleAppVersionUpdated = async (a) => {
      this.handleMetadataUpdated(Do.APP_VERSION_KEY, a);
    }, this.handleChainUpdated = async (a, c) => {
      var l, u;
      try {
        const d = await this.cipher.decrypt(a), h = await this.cipher.decrypt(c);
        (l = this.listener) === null || l === void 0 || l.chainUpdated(d, h);
      } catch {
        (u = this.diagnostic) === null || u === void 0 || u.log(Ue.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "chainId|jsonRpcUrl"
        });
      }
    }, this.session = t, this.cipher = new sh.Cipher(t.secret), this.diagnostic = s, this.listener = n;
    const o = new Vr.WalletLinkWebSocket(`${r}/rpc`, i);
    o.setConnectionStateListener(async (a) => {
      var c;
      (c = this.diagnostic) === null || c === void 0 || c.log(Ue.EVENTS.CONNECTED_STATE_CHANGE, {
        state: a,
        sessionIdHash: Lt.Session.hash(t.id)
      });
      let l = !1;
      switch (a) {
        case Vr.ConnectionState.DISCONNECTED:
          if (!this.destroyed) {
            const u = async () => {
              await new Promise((d) => setTimeout(d, 5e3)), this.destroyed || o.connect().catch(() => {
                u();
              });
            };
            u();
          }
          break;
        case Vr.ConnectionState.CONNECTED:
          try {
            await this.authenticate(), this.sendIsLinked(), this.sendGetSessionConfig(), l = !0;
          } catch {
          }
          this.updateLastHeartbeat(), setInterval(() => {
            this.heartbeat();
          }, jo), this.shouldFetchUnseenEventsOnConnect && this.fetchUnseenEventsAPI();
          break;
        case Vr.ConnectionState.CONNECTING:
          break;
      }
      this.connected !== l && (this.connected = l);
    }), o.setIncomingDataListener((a) => {
      var c, l, u;
      switch (a.type) {
        case "Heartbeat":
          this.updateLastHeartbeat();
          return;
        case "IsLinkedOK":
        case "Linked": {
          const d = a.type === "IsLinkedOK" ? a.linked : void 0;
          (c = this.diagnostic) === null || c === void 0 || c.log(Ue.EVENTS.LINKED, {
            sessionIdHash: Lt.Session.hash(t.id),
            linked: d,
            type: a.type,
            onlineGuests: a.onlineGuests
          }), this.linked = d || a.onlineGuests > 0;
          break;
        }
        case "GetSessionConfigOK":
        case "SessionConfigUpdated": {
          (l = this.diagnostic) === null || l === void 0 || l.log(Ue.EVENTS.SESSION_CONFIG_RECEIVED, {
            sessionIdHash: Lt.Session.hash(t.id),
            metadata_keys: a && a.metadata ? Object.keys(a.metadata) : void 0
          }), this.handleSessionMetadataUpdated(a.metadata);
          break;
        }
        case "Event": {
          this.handleIncomingEvent(a);
          break;
        }
      }
      a.id !== void 0 && ((u = this.requestResolutions.get(a.id)) === null || u === void 0 || u(a));
    }), this.ws = o, this.http = new ih.WalletLinkHTTP(r, t.id, t.key);
  }
  /**
   * Make a connection to the server
   */
  connect() {
    var t;
    if (this.destroyed)
      throw new Error("instance is destroyed");
    (t = this.diagnostic) === null || t === void 0 || t.log(Ue.EVENTS.STARTED_CONNECTING, {
      sessionIdHash: Lt.Session.hash(this.session.id)
    }), this.ws.connect();
  }
  /**
   * Terminate connection, and mark as destroyed. To reconnect, create a new
   * instance of WalletSDKConnection
   */
  destroy() {
    var t;
    this.destroyed = !0, this.ws.disconnect(), (t = this.diagnostic) === null || t === void 0 || t.log(Ue.EVENTS.DISCONNECTED, {
      sessionIdHash: Lt.Session.hash(this.session.id)
    }), this.listener = void 0;
  }
  get isDestroyed() {
    return this.destroyed;
  }
  get connected() {
    return this._connected;
  }
  set connected(t) {
    var r, n;
    this._connected = t, t && ((r = this.onceConnected) === null || r === void 0 || r.call(this)), (n = this.listener) === null || n === void 0 || n.connectedUpdated(t);
  }
  setOnceConnected(t) {
    return new Promise((r) => {
      this.connected ? t().then(r) : this.onceConnected = () => {
        t().then(r), this.onceConnected = void 0;
      };
    });
  }
  get linked() {
    return this._linked;
  }
  set linked(t) {
    var r, n;
    this._linked = t, t && ((r = this.onceLinked) === null || r === void 0 || r.call(this)), (n = this.listener) === null || n === void 0 || n.linkedUpdated(t);
  }
  setOnceLinked(t) {
    return new Promise((r) => {
      this.linked ? t().then(r) : this.onceLinked = () => {
        t().then(r), this.onceLinked = void 0;
      };
    });
  }
  async handleIncomingEvent(t) {
    var r, n;
    if (!(t.type !== "Event" || t.event !== "Web3Response"))
      try {
        const s = await this.cipher.decrypt(t.data), i = JSON.parse(s);
        if (i.type !== "WEB3_RESPONSE")
          return;
        (r = this.listener) === null || r === void 0 || r.handleWeb3ResponseMessage(i);
      } catch {
        (n = this.diagnostic) === null || n === void 0 || n.log(Ue.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "incomingEvent"
        });
      }
  }
  async checkUnseenEvents() {
    if (!this.connected) {
      this.shouldFetchUnseenEventsOnConnect = !0;
      return;
    }
    await new Promise((t) => setTimeout(t, 250));
    try {
      await this.fetchUnseenEventsAPI();
    } catch (t) {
      console.error("Unable to check for unseen events", t);
    }
  }
  async fetchUnseenEventsAPI() {
    this.shouldFetchUnseenEventsOnConnect = !1, (await this.http.fetchUnseenEvents()).forEach((r) => this.handleIncomingEvent(r));
  }
  /**
   * Set session metadata in SessionConfig object
   * @param key
   * @param value
   * @returns a Promise that completes when successful
   */
  async setSessionMetadata(t, r) {
    const n = {
      type: "SetSessionConfig",
      id: (0, Nt.IntNumber)(this.nextReqId++),
      sessionId: this.session.id,
      metadata: { [t]: r }
    };
    return this.setOnceConnected(async () => {
      const s = await this.makeRequest(n);
      if (s.type === "Fail")
        throw new Error(s.error || "failed to set session metadata");
    });
  }
  /**
   * Publish an event and emit event ID when successful
   * @param event event name
   * @param unencryptedData unencrypted event data
   * @param callWebhook whether the webhook should be invoked
   * @returns a Promise that emits event ID when successful
   */
  async publishEvent(t, r, n = !1) {
    const s = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, r), { origin: location.origin, relaySource: window.coinbaseWalletExtension ? "injected_sdk" : "sdk" }))), i = {
      type: "PublishEvent",
      id: (0, Nt.IntNumber)(this.nextReqId++),
      sessionId: this.session.id,
      event: t,
      data: s,
      callWebhook: n
    };
    return this.setOnceLinked(async () => {
      const o = await this.makeRequest(i);
      if (o.type === "Fail")
        throw new Error(o.error || "failed to publish event");
      return o.eventId;
    });
  }
  sendData(t) {
    this.ws.sendData(JSON.stringify(t));
  }
  updateLastHeartbeat() {
    this.lastHeartbeatResponse = Date.now();
  }
  heartbeat() {
    if (Date.now() - this.lastHeartbeatResponse > jo * 2) {
      this.ws.disconnect();
      return;
    }
    try {
      this.ws.sendData("h");
    } catch {
    }
  }
  async makeRequest(t, r = oh) {
    const n = t.id;
    this.sendData(t);
    let s;
    return Promise.race([
      new Promise((i, o) => {
        s = window.setTimeout(() => {
          o(new Error(`request ${n} timed out`));
        }, r);
      }),
      new Promise((i) => {
        this.requestResolutions.set(n, (o) => {
          clearTimeout(s), i(o), this.requestResolutions.delete(n);
        });
      })
    ]);
  }
  async authenticate() {
    const t = {
      type: "HostSession",
      id: (0, Nt.IntNumber)(this.nextReqId++),
      sessionId: this.session.id,
      sessionKey: this.session.key
    }, r = await this.makeRequest(t);
    if (r.type === "Fail")
      throw new Error(r.error || "failed to authentcate");
  }
  sendIsLinked() {
    const t = {
      type: "IsLinked",
      id: (0, Nt.IntNumber)(this.nextReqId++),
      sessionId: this.session.id
    };
    this.sendData(t);
  }
  sendGetSessionConfig() {
    const t = {
      type: "GetSessionConfig",
      id: (0, Nt.IntNumber)(this.nextReqId++),
      sessionId: this.session.id
    };
    this.sendData(t);
  }
}
Rn.WalletLinkConnection = ah;
var Ar = {}, Tr = {}, Vi = {};
Object.defineProperty(Vi, "__esModule", { value: !0 });
Vi.default = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}';
var ch = D && D.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Tr, "__esModule", { value: !0 });
Tr.injectCssReset = void 0;
const lh = ch(Vi);
function uh() {
  const e = document.createElement("style");
  e.type = "text/css", e.appendChild(document.createTextNode(lh.default)), document.documentElement.appendChild(e);
}
Tr.injectCssReset = uh;
var In = {}, An = {}, zt = {}, Tn = {};
Object.defineProperty(Tn, "__esModule", { value: !0 });
Tn.CloseIcon = void 0;
const Ho = Re;
function dh(e) {
  return (0, Ho.h)(
    "svg",
    Object.assign({ width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, e),
    (0, Ho.h)("path", { d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z" })
  );
}
Tn.CloseIcon = dh;
var Mn = {};
Object.defineProperty(Mn, "__esModule", { value: !0 });
Mn.CoinbaseWalletRound = void 0;
const zr = Re;
function hh(e) {
  return (0, zr.h)(
    "svg",
    Object.assign({ width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, e),
    (0, zr.h)("circle", { cx: "14", cy: "14", r: "14", fill: "#0052FF" }),
    (0, zr.h)("path", { d: "M23.8521 14.0003C23.8521 19.455 19.455 23.8521 14.0003 23.8521C8.54559 23.8521 4.14844 19.455 4.14844 14.0003C4.14844 8.54559 8.54559 4.14844 14.0003 4.14844C19.455 4.14844 23.8521 8.54559 23.8521 14.0003Z", fill: "white" }),
    (0, zr.h)("path", { d: "M11.1855 12.5042C11.1855 12.0477 11.1855 11.7942 11.2835 11.642C11.3814 11.4899 11.4793 11.3377 11.6261 11.287C11.8219 11.1855 12.0178 11.1855 12.5073 11.1855H15.4934C15.983 11.1855 16.1788 11.1855 16.3746 11.287C16.5215 11.3884 16.6683 11.4899 16.7173 11.642C16.8152 11.8449 16.8152 12.0477 16.8152 12.5042V15.4965C16.8152 15.953 16.8152 16.2066 16.7173 16.3587C16.6194 16.5109 16.5215 16.663 16.3746 16.7137C16.1788 16.8152 15.983 16.8152 15.4934 16.8152H12.5073C12.0178 16.8152 11.8219 16.8152 11.6261 16.7137C11.4793 16.6123 11.3324 16.5109 11.2835 16.3587C11.1855 16.1558 11.1855 15.953 11.1855 15.4965V12.5042Z", fill: "#0052FF" })
  );
}
Mn.CoinbaseWalletRound = hh;
var xn = {};
Object.defineProperty(xn, "__esModule", { value: !0 });
xn.QRCodeIcon = void 0;
const cr = Re;
function fh(e) {
  return (0, cr.h)(
    "svg",
    Object.assign({ width: "18", height: "18", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, e),
    (0, cr.h)("path", { d: "M3 3V8.99939L5 8.99996V5H9V3H3Z" }),
    (0, cr.h)("path", { d: "M15 21L21 21V15.0006L19 15V19L15 19V21Z" }),
    (0, cr.h)("path", { d: "M21 9H19V5H15.0006L15 3H21V9Z" }),
    (0, cr.h)("path", { d: "M3 15V21H8.99939L8.99996 19H5L5 15H3Z" })
  );
}
xn.QRCodeIcon = fh;
var Nn = {};
function Ic(e) {
  this.mode = Ie.MODE_8BIT_BYTE, this.data = e, this.parsedData = [];
  for (var t = 0, r = this.data.length; t < r; t++) {
    var n = [], s = this.data.charCodeAt(t);
    s > 65536 ? (n[0] = 240 | (s & 1835008) >>> 18, n[1] = 128 | (s & 258048) >>> 12, n[2] = 128 | (s & 4032) >>> 6, n[3] = 128 | s & 63) : s > 2048 ? (n[0] = 224 | (s & 61440) >>> 12, n[1] = 128 | (s & 4032) >>> 6, n[2] = 128 | s & 63) : s > 128 ? (n[0] = 192 | (s & 1984) >>> 6, n[1] = 128 | s & 63) : n[0] = s, this.parsedData.push(n);
  }
  this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239));
}
Ic.prototype = {
  getLength: function(e) {
    return this.parsedData.length;
  },
  write: function(e) {
    for (var t = 0, r = this.parsedData.length; t < r; t++)
      e.put(this.parsedData[t], 8);
  }
};
function Je(e, t) {
  this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [];
}
Je.prototype = { addData: function(e) {
  var t = new Ic(e);
  this.dataList.push(t), this.dataCache = null;
}, isDark: function(e, t) {
  if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t)
    throw new Error(e + "," + t);
  return this.modules[e][t];
}, getModuleCount: function() {
  return this.moduleCount;
}, make: function() {
  this.makeImpl(!1, this.getBestMaskPattern());
}, makeImpl: function(e, t) {
  this.moduleCount = this.typeNumber * 4 + 17, this.modules = new Array(this.moduleCount);
  for (var r = 0; r < this.moduleCount; r++) {
    this.modules[r] = new Array(this.moduleCount);
    for (var n = 0; n < this.moduleCount; n++)
      this.modules[r][n] = null;
  }
  this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, t), this.typeNumber >= 7 && this.setupTypeNumber(e), this.dataCache == null && (this.dataCache = Je.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, t);
}, setupPositionProbePattern: function(e, t) {
  for (var r = -1; r <= 7; r++)
    if (!(e + r <= -1 || this.moduleCount <= e + r))
      for (var n = -1; n <= 7; n++)
        t + n <= -1 || this.moduleCount <= t + n || (0 <= r && r <= 6 && (n == 0 || n == 6) || 0 <= n && n <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= n && n <= 4 ? this.modules[e + r][t + n] = !0 : this.modules[e + r][t + n] = !1);
}, getBestMaskPattern: function() {
  for (var e = 0, t = 0, r = 0; r < 8; r++) {
    this.makeImpl(!0, r);
    var n = ce.getLostPoint(this);
    (r == 0 || e > n) && (e = n, t = r);
  }
  return t;
}, createMovieClip: function(e, t, r) {
  var n = e.createEmptyMovieClip(t, r), s = 1;
  this.make();
  for (var i = 0; i < this.modules.length; i++)
    for (var o = i * s, a = 0; a < this.modules[i].length; a++) {
      var c = a * s, l = this.modules[i][a];
      l && (n.beginFill(0, 100), n.moveTo(c, o), n.lineTo(c + s, o), n.lineTo(c + s, o + s), n.lineTo(c, o + s), n.endFill());
    }
  return n;
}, setupTimingPattern: function() {
  for (var e = 8; e < this.moduleCount - 8; e++)
    this.modules[e][6] == null && (this.modules[e][6] = e % 2 == 0);
  for (var t = 8; t < this.moduleCount - 8; t++)
    this.modules[6][t] == null && (this.modules[6][t] = t % 2 == 0);
}, setupPositionAdjustPattern: function() {
  for (var e = ce.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
    for (var r = 0; r < e.length; r++) {
      var n = e[t], s = e[r];
      if (this.modules[n][s] == null)
        for (var i = -2; i <= 2; i++)
          for (var o = -2; o <= 2; o++)
            i == -2 || i == 2 || o == -2 || o == 2 || i == 0 && o == 0 ? this.modules[n + i][s + o] = !0 : this.modules[n + i][s + o] = !1;
    }
}, setupTypeNumber: function(e) {
  for (var t = ce.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
    var n = !e && (t >> r & 1) == 1;
    this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = n;
  }
  for (var r = 0; r < 18; r++) {
    var n = !e && (t >> r & 1) == 1;
    this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n;
  }
}, setupTypeInfo: function(e, t) {
  for (var r = this.errorCorrectLevel << 3 | t, n = ce.getBCHTypeInfo(r), s = 0; s < 15; s++) {
    var i = !e && (n >> s & 1) == 1;
    s < 6 ? this.modules[s][8] = i : s < 8 ? this.modules[s + 1][8] = i : this.modules[this.moduleCount - 15 + s][8] = i;
  }
  for (var s = 0; s < 15; s++) {
    var i = !e && (n >> s & 1) == 1;
    s < 8 ? this.modules[8][this.moduleCount - s - 1] = i : s < 9 ? this.modules[8][15 - s - 1 + 1] = i : this.modules[8][15 - s - 1] = i;
  }
  this.modules[this.moduleCount - 8][8] = !e;
}, mapData: function(e, t) {
  for (var r = -1, n = this.moduleCount - 1, s = 7, i = 0, o = this.moduleCount - 1; o > 0; o -= 2)
    for (o == 6 && o--; ; ) {
      for (var a = 0; a < 2; a++)
        if (this.modules[n][o - a] == null) {
          var c = !1;
          i < e.length && (c = (e[i] >>> s & 1) == 1);
          var l = ce.getMask(t, n, o - a);
          l && (c = !c), this.modules[n][o - a] = c, s--, s == -1 && (i++, s = 7);
        }
      if (n += r, n < 0 || this.moduleCount <= n) {
        n -= r, r = -r;
        break;
      }
    }
} };
Je.PAD0 = 236;
Je.PAD1 = 17;
Je.createData = function(e, t, r) {
  for (var n = Ge.getRSBlocks(e, t), s = new Ac(), i = 0; i < r.length; i++) {
    var o = r[i];
    s.put(o.mode, 4), s.put(o.getLength(), ce.getLengthInBits(o.mode, e)), o.write(s);
  }
  for (var a = 0, i = 0; i < n.length; i++)
    a += n[i].dataCount;
  if (s.getLengthInBits() > a * 8)
    throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + a * 8 + ")");
  for (s.getLengthInBits() + 4 <= a * 8 && s.put(0, 4); s.getLengthInBits() % 8 != 0; )
    s.putBit(!1);
  for (; !(s.getLengthInBits() >= a * 8 || (s.put(Je.PAD0, 8), s.getLengthInBits() >= a * 8)); )
    s.put(Je.PAD1, 8);
  return Je.createBytes(s, n);
};
Je.createBytes = function(e, t) {
  for (var r = 0, n = 0, s = 0, i = new Array(t.length), o = new Array(t.length), a = 0; a < t.length; a++) {
    var c = t[a].dataCount, l = t[a].totalCount - c;
    n = Math.max(n, c), s = Math.max(s, l), i[a] = new Array(c);
    for (var u = 0; u < i[a].length; u++)
      i[a][u] = 255 & e.buffer[u + r];
    r += c;
    var d = ce.getErrorCorrectPolynomial(l), h = new Dt(i[a], d.getLength() - 1), b = h.mod(d);
    o[a] = new Array(d.getLength() - 1);
    for (var u = 0; u < o[a].length; u++) {
      var m = u + b.getLength() - o[a].length;
      o[a][u] = m >= 0 ? b.get(m) : 0;
    }
  }
  for (var R = 0, u = 0; u < t.length; u++)
    R += t[u].totalCount;
  for (var E = new Array(R), g = 0, u = 0; u < n; u++)
    for (var a = 0; a < t.length; a++)
      u < i[a].length && (E[g++] = i[a][u]);
  for (var u = 0; u < s; u++)
    for (var a = 0; a < t.length; a++)
      u < o[a].length && (E[g++] = o[a][u]);
  return E;
};
var Ie = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 }, at = { L: 1, M: 0, Q: 3, H: 2 }, st = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 }, ce = { PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], G15: 1335, G18: 7973, G15_MASK: 21522, getBCHTypeInfo: function(e) {
  for (var t = e << 10; ce.getBCHDigit(t) - ce.getBCHDigit(ce.G15) >= 0; )
    t ^= ce.G15 << ce.getBCHDigit(t) - ce.getBCHDigit(ce.G15);
  return (e << 10 | t) ^ ce.G15_MASK;
}, getBCHTypeNumber: function(e) {
  for (var t = e << 12; ce.getBCHDigit(t) - ce.getBCHDigit(ce.G18) >= 0; )
    t ^= ce.G18 << ce.getBCHDigit(t) - ce.getBCHDigit(ce.G18);
  return e << 12 | t;
}, getBCHDigit: function(e) {
  for (var t = 0; e != 0; )
    t++, e >>>= 1;
  return t;
}, getPatternPosition: function(e) {
  return ce.PATTERN_POSITION_TABLE[e - 1];
}, getMask: function(e, t, r) {
  switch (e) {
    case st.PATTERN000:
      return (t + r) % 2 == 0;
    case st.PATTERN001:
      return t % 2 == 0;
    case st.PATTERN010:
      return r % 3 == 0;
    case st.PATTERN011:
      return (t + r) % 3 == 0;
    case st.PATTERN100:
      return (Math.floor(t / 2) + Math.floor(r / 3)) % 2 == 0;
    case st.PATTERN101:
      return t * r % 2 + t * r % 3 == 0;
    case st.PATTERN110:
      return (t * r % 2 + t * r % 3) % 2 == 0;
    case st.PATTERN111:
      return (t * r % 3 + (t + r) % 2) % 2 == 0;
    default:
      throw new Error("bad maskPattern:" + e);
  }
}, getErrorCorrectPolynomial: function(e) {
  for (var t = new Dt([1], 0), r = 0; r < e; r++)
    t = t.multiply(new Dt([1, be.gexp(r)], 0));
  return t;
}, getLengthInBits: function(e, t) {
  if (1 <= t && t < 10)
    switch (e) {
      case Ie.MODE_NUMBER:
        return 10;
      case Ie.MODE_ALPHA_NUM:
        return 9;
      case Ie.MODE_8BIT_BYTE:
        return 8;
      case Ie.MODE_KANJI:
        return 8;
      default:
        throw new Error("mode:" + e);
    }
  else if (t < 27)
    switch (e) {
      case Ie.MODE_NUMBER:
        return 12;
      case Ie.MODE_ALPHA_NUM:
        return 11;
      case Ie.MODE_8BIT_BYTE:
        return 16;
      case Ie.MODE_KANJI:
        return 10;
      default:
        throw new Error("mode:" + e);
    }
  else if (t < 41)
    switch (e) {
      case Ie.MODE_NUMBER:
        return 14;
      case Ie.MODE_ALPHA_NUM:
        return 13;
      case Ie.MODE_8BIT_BYTE:
        return 16;
      case Ie.MODE_KANJI:
        return 12;
      default:
        throw new Error("mode:" + e);
    }
  else
    throw new Error("type:" + t);
}, getLostPoint: function(e) {
  for (var t = e.getModuleCount(), r = 0, n = 0; n < t; n++)
    for (var s = 0; s < t; s++) {
      for (var i = 0, o = e.isDark(n, s), a = -1; a <= 1; a++)
        if (!(n + a < 0 || t <= n + a))
          for (var c = -1; c <= 1; c++)
            s + c < 0 || t <= s + c || a == 0 && c == 0 || o == e.isDark(n + a, s + c) && i++;
      i > 5 && (r += 3 + i - 5);
    }
  for (var n = 0; n < t - 1; n++)
    for (var s = 0; s < t - 1; s++) {
      var l = 0;
      e.isDark(n, s) && l++, e.isDark(n + 1, s) && l++, e.isDark(n, s + 1) && l++, e.isDark(n + 1, s + 1) && l++, (l == 0 || l == 4) && (r += 3);
    }
  for (var n = 0; n < t; n++)
    for (var s = 0; s < t - 6; s++)
      e.isDark(n, s) && !e.isDark(n, s + 1) && e.isDark(n, s + 2) && e.isDark(n, s + 3) && e.isDark(n, s + 4) && !e.isDark(n, s + 5) && e.isDark(n, s + 6) && (r += 40);
  for (var s = 0; s < t; s++)
    for (var n = 0; n < t - 6; n++)
      e.isDark(n, s) && !e.isDark(n + 1, s) && e.isDark(n + 2, s) && e.isDark(n + 3, s) && e.isDark(n + 4, s) && !e.isDark(n + 5, s) && e.isDark(n + 6, s) && (r += 40);
  for (var u = 0, s = 0; s < t; s++)
    for (var n = 0; n < t; n++)
      e.isDark(n, s) && u++;
  var d = Math.abs(100 * u / t / t - 50) / 5;
  return r += d * 10, r;
} }, be = { glog: function(e) {
  if (e < 1)
    throw new Error("glog(" + e + ")");
  return be.LOG_TABLE[e];
}, gexp: function(e) {
  for (; e < 0; )
    e += 255;
  for (; e >= 256; )
    e -= 255;
  return be.EXP_TABLE[e];
}, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) };
for (var _e = 0; _e < 8; _e++)
  be.EXP_TABLE[_e] = 1 << _e;
for (var _e = 8; _e < 256; _e++)
  be.EXP_TABLE[_e] = be.EXP_TABLE[_e - 4] ^ be.EXP_TABLE[_e - 5] ^ be.EXP_TABLE[_e - 6] ^ be.EXP_TABLE[_e - 8];
for (var _e = 0; _e < 255; _e++)
  be.LOG_TABLE[be.EXP_TABLE[_e]] = _e;
function Dt(e, t) {
  if (e.length == null)
    throw new Error(e.length + "/" + t);
  for (var r = 0; r < e.length && e[r] == 0; )
    r++;
  this.num = new Array(e.length - r + t);
  for (var n = 0; n < e.length - r; n++)
    this.num[n] = e[n + r];
}
Dt.prototype = { get: function(e) {
  return this.num[e];
}, getLength: function() {
  return this.num.length;
}, multiply: function(e) {
  for (var t = new Array(this.getLength() + e.getLength() - 1), r = 0; r < this.getLength(); r++)
    for (var n = 0; n < e.getLength(); n++)
      t[r + n] ^= be.gexp(be.glog(this.get(r)) + be.glog(e.get(n)));
  return new Dt(t, 0);
}, mod: function(e) {
  if (this.getLength() - e.getLength() < 0)
    return this;
  for (var t = be.glog(this.get(0)) - be.glog(e.get(0)), r = new Array(this.getLength()), n = 0; n < this.getLength(); n++)
    r[n] = this.get(n);
  for (var n = 0; n < e.getLength(); n++)
    r[n] ^= be.gexp(be.glog(e.get(n)) + t);
  return new Dt(r, 0).mod(e);
} };
function Ge(e, t) {
  this.totalCount = e, this.dataCount = t;
}
Ge.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
Ge.getRSBlocks = function(e, t) {
  var r = Ge.getRsBlockTable(e, t);
  if (r == null)
    throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
  for (var n = r.length / 3, s = [], i = 0; i < n; i++)
    for (var o = r[i * 3 + 0], a = r[i * 3 + 1], c = r[i * 3 + 2], l = 0; l < o; l++)
      s.push(new Ge(a, c));
  return s;
};
Ge.getRsBlockTable = function(e, t) {
  switch (t) {
    case at.L:
      return Ge.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
    case at.M:
      return Ge.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
    case at.Q:
      return Ge.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
    case at.H:
      return Ge.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
    default:
      return;
  }
};
function Ac() {
  this.buffer = [], this.length = 0;
}
Ac.prototype = { get: function(e) {
  var t = Math.floor(e / 8);
  return (this.buffer[t] >>> 7 - e % 8 & 1) == 1;
}, put: function(e, t) {
  for (var r = 0; r < t; r++)
    this.putBit((e >>> t - r - 1 & 1) == 1);
}, getLengthInBits: function() {
  return this.length;
}, putBit: function(e) {
  var t = Math.floor(this.length / 8);
  this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
} };
var si = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
function Tc(e) {
  if (this.options = {
    padding: 4,
    width: 256,
    height: 256,
    typeNumber: 4,
    color: "#000000",
    background: "#ffffff",
    ecl: "M",
    image: {
      svg: "",
      width: 0,
      height: 0
    }
  }, typeof e == "string" && (e = {
    content: e
  }), e)
    for (var t in e)
      this.options[t] = e[t];
  if (typeof this.options.content != "string")
    throw new Error("Expected 'content' as string!");
  if (this.options.content.length === 0)
    throw new Error("Expected 'content' to be non-empty!");
  if (!(this.options.padding >= 0))
    throw new Error("Expected 'padding' value to be non-negative!");
  if (!(this.options.width > 0) || !(this.options.height > 0))
    throw new Error("Expected 'width' or 'height' value to be higher than zero!");
  function r(c) {
    switch (c) {
      case "L":
        return at.L;
      case "M":
        return at.M;
      case "Q":
        return at.Q;
      case "H":
        return at.H;
      default:
        throw new Error("Unknwon error correction level: " + c);
    }
  }
  function n(c, l) {
    for (var u = s(c), d = 1, h = 0, b = 0, m = si.length; b <= m; b++) {
      var R = si[b];
      if (!R)
        throw new Error("Content too long: expected " + h + " but got " + u);
      switch (l) {
        case "L":
          h = R[0];
          break;
        case "M":
          h = R[1];
          break;
        case "Q":
          h = R[2];
          break;
        case "H":
          h = R[3];
          break;
        default:
          throw new Error("Unknwon error correction level: " + l);
      }
      if (u <= h)
        break;
      d++;
    }
    if (d > si.length)
      throw new Error("Content too long");
    return d;
  }
  function s(c) {
    var l = encodeURI(c).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
    return l.length + (l.length != c ? 3 : 0);
  }
  var i = this.options.content, o = n(i, this.options.ecl), a = r(this.options.ecl);
  this.qrcode = new Je(o, a), this.qrcode.addData(i), this.qrcode.make();
}
Tc.prototype.svg = function(e) {
  var t = this.options || {}, r = this.qrcode.modules;
  typeof e > "u" && (e = { container: t.container || "svg" });
  for (var n = typeof t.pretty < "u" ? !!t.pretty : !0, s = n ? "  " : "", i = n ? `\r
` : "", o = t.width, a = t.height, c = r.length, l = o / (c + 2 * t.padding), u = a / (c + 2 * t.padding), d = typeof t.join < "u" ? !!t.join : !1, h = typeof t.swap < "u" ? !!t.swap : !1, b = typeof t.xmlDeclaration < "u" ? !!t.xmlDeclaration : !0, m = typeof t.predefined < "u" ? !!t.predefined : !1, R = m ? s + '<defs><path id="qrmodule" d="M0 0 h' + u + " v" + l + ' H0 z" style="fill:' + t.color + ';shape-rendering:crispEdges;" /></defs>' + i : "", E = s + '<rect x="0" y="0" width="' + o + '" height="' + a + '" style="fill:' + t.background + ';shape-rendering:crispEdges;"/>' + i, g = "", y = "", _ = 0; _ < c; _++)
    for (var C = 0; C < c; C++) {
      var S = r[C][_];
      if (S) {
        var T = C * l + t.padding * l, U = _ * u + t.padding * u;
        if (h) {
          var B = T;
          T = U, U = B;
        }
        if (d) {
          var P = l + T, Q = u + U;
          T = Number.isInteger(T) ? Number(T) : T.toFixed(2), U = Number.isInteger(U) ? Number(U) : U.toFixed(2), P = Number.isInteger(P) ? Number(P) : P.toFixed(2), Q = Number.isInteger(Q) ? Number(Q) : Q.toFixed(2), y += "M" + T + "," + U + " V" + Q + " H" + P + " V" + U + " H" + T + " Z ";
        } else m ? g += s + '<use x="' + T.toString() + '" y="' + U.toString() + '" href="#qrmodule" />' + i : g += s + '<rect x="' + T.toString() + '" y="' + U.toString() + '" width="' + l + '" height="' + u + '" style="fill:' + t.color + ';shape-rendering:crispEdges;"/>' + i;
      }
    }
  d && (g = s + '<path x="0" y="0" style="fill:' + t.color + ';shape-rendering:crispEdges;" d="' + y + '" />');
  let oe = "";
  if (this.options.image !== void 0 && this.options.image.svg) {
    const se = o * this.options.image.width / 100, M = a * this.options.image.height / 100, I = o / 2 - se / 2, $ = a / 2 - M / 2;
    oe += `<svg x="${I}" y="${$}" width="${se}" height="${M}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`, oe += this.options.image.svg + i, oe += "</svg>";
  }
  var ne = "";
  switch (e.container) {
    case "svg":
      b && (ne += '<?xml version="1.0" standalone="yes"?>' + i), ne += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + o + '" height="' + a + '">' + i, ne += R + E + g, ne += oe, ne += "</svg>";
      break;
    case "svg-viewbox":
      b && (ne += '<?xml version="1.0" standalone="yes"?>' + i), ne += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + o + " " + a + '">' + i, ne += R + E + g, ne += oe, ne += "</svg>";
      break;
    case "g":
      ne += '<g width="' + o + '" height="' + a + '">' + i, ne += R + E + g, ne += oe, ne += "</g>";
      break;
    default:
      ne += (R + E + g + oe).replace(/^\s+/, "");
      break;
  }
  return ne;
};
var ph = Tc, gh = D && D.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Nn, "__esModule", { value: !0 });
Nn.QRCode = void 0;
const bh = Re, Uo = fn, mh = gh(ph), _h = (e) => {
  const [t, r] = (0, Uo.useState)("");
  return (0, Uo.useEffect)(() => {
    var n, s;
    const i = new mh.default({
      content: e.content,
      background: e.bgColor || "#ffffff",
      color: e.fgColor || "#000000",
      container: "svg",
      ecl: "M",
      width: (n = e.width) !== null && n !== void 0 ? n : 256,
      height: (s = e.height) !== null && s !== void 0 ? s : 256,
      padding: 0,
      image: e.image
    }), o = Buffer.from(i.svg(), "utf8").toString("base64");
    r(`data:image/svg+xml;base64,${o}`);
  }, [e.bgColor, e.content, e.fgColor, e.height, e.image, e.width]), t ? (0, bh.h)("img", { src: t, alt: "QR Code" }) : null;
};
Nn.QRCode = _h;
var Ln = {}, zi = {};
Object.defineProperty(zi, "__esModule", { value: !0 });
zi.default = ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}";
var yh = D && D.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ln, "__esModule", { value: !0 });
Ln.Spinner = void 0;
const qr = Re, wh = yh(zi), vh = (e) => {
  var t;
  const r = (t = e.size) !== null && t !== void 0 ? t : 64, n = e.color || "#000";
  return (0, qr.h)(
    "div",
    { class: "-cbwsdk-spinner" },
    (0, qr.h)("style", null, wh.default),
    (0, qr.h)(
      "svg",
      { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", style: { width: r, height: r } },
      (0, qr.h)("circle", { style: { cx: 50, cy: 50, r: 45, stroke: n } })
    )
  );
};
Ln.Spinner = vh;
var qi = {};
Object.defineProperty(qi, "__esModule", { value: !0 });
qi.default = ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer;border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}";
var Mc = D && D.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(zt, "__esModule", { value: !0 });
zt.CoinbaseWalletSteps = zt.ConnectContent = void 0;
const wt = Mc(mr), X = Re, Eh = O, Sh = Yt, Rh = Tn, Ch = Mn, kh = xn, Ih = Nn, Ah = Ln, Th = Mc(qi), ii = {
  title: "Coinbase Wallet app",
  description: "Connect with your self-custody wallet",
  steps: xc
}, Mh = (e) => e === "light" ? "#FFFFFF" : "#0A0B0D";
function xh(e) {
  const { theme: t } = e, r = (0, Eh.createQrUrl)(e.sessionId, e.sessionSecret, e.linkAPIUrl, e.isParentConnection, e.version, e.chainId), n = ii.steps;
  return (0, X.h)(
    "div",
    { "data-testid": "connect-content", className: (0, wt.default)("-cbwsdk-connect-content", t) },
    (0, X.h)("style", null, Th.default),
    (0, X.h)(
      "div",
      { className: "-cbwsdk-connect-content-header" },
      (0, X.h)("h2", { className: (0, wt.default)("-cbwsdk-connect-content-heading", t) }, "Scan to connect with our mobile app"),
      e.onCancel && (0, X.h)(
        "button",
        { type: "button", className: "-cbwsdk-cancel-button", onClick: e.onCancel },
        (0, X.h)(Rh.CloseIcon, { fill: t === "light" ? "#0A0B0D" : "#FFFFFF" })
      )
    ),
    (0, X.h)(
      "div",
      { className: "-cbwsdk-connect-content-layout" },
      (0, X.h)(
        "div",
        { className: "-cbwsdk-connect-content-column-left" },
        (0, X.h)(Nh, { title: ii.title, description: ii.description, theme: t })
      ),
      (0, X.h)(
        "div",
        { className: "-cbwsdk-connect-content-column-right" },
        (0, X.h)(
          "div",
          { className: "-cbwsdk-connect-content-qr-wrapper" },
          (0, X.h)(Ih.QRCode, { content: r, width: 200, height: 200, fgColor: "#000", bgColor: "transparent" }),
          (0, X.h)("input", { type: "hidden", name: "cbw-cbwsdk-version", value: Sh.LIB_VERSION }),
          (0, X.h)("input", { type: "hidden", value: r })
        ),
        (0, X.h)(n, { theme: t }),
        !e.isConnected && (0, X.h)(
          "div",
          { "data-testid": "connecting-spinner", className: (0, wt.default)("-cbwsdk-connect-content-qr-connecting", t) },
          (0, X.h)(Ah.Spinner, { size: 36, color: t === "dark" ? "#FFF" : "#000" }),
          (0, X.h)("p", null, "Connecting...")
        )
      )
    )
  );
}
zt.ConnectContent = xh;
function Nh({ title: e, description: t, theme: r }) {
  return (0, X.h)(
    "div",
    { className: (0, wt.default)("-cbwsdk-connect-item", r) },
    (0, X.h)(
      "div",
      null,
      (0, X.h)(Ch.CoinbaseWalletRound, null)
    ),
    (0, X.h)(
      "div",
      { className: "-cbwsdk-connect-item-copy-wrapper" },
      (0, X.h)("h3", { className: "-cbwsdk-connect-item-title" }, e),
      (0, X.h)("p", { className: "-cbwsdk-connect-item-description" }, t)
    )
  );
}
function xc({ theme: e }) {
  return (0, X.h)(
    "ol",
    { className: "-cbwsdk-wallet-steps" },
    (0, X.h)(
      "li",
      { className: (0, wt.default)("-cbwsdk-wallet-steps-item", e) },
      (0, X.h)("div", { className: "-cbwsdk-wallet-steps-item-wrapper" }, "Open Coinbase Wallet app")
    ),
    (0, X.h)(
      "li",
      { className: (0, wt.default)("-cbwsdk-wallet-steps-item", e) },
      (0, X.h)(
        "div",
        { className: "-cbwsdk-wallet-steps-item-wrapper" },
        (0, X.h)(
          "span",
          null,
          "Tap ",
          (0, X.h)("strong", null, "Scan"),
          " "
        ),
        (0, X.h)(
          "span",
          { className: (0, wt.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", e) },
          (0, X.h)(kh.QRCodeIcon, { fill: Mh(e) })
        )
      )
    )
  );
}
zt.CoinbaseWalletSteps = xc;
var On = {}, Pn = {};
Object.defineProperty(Pn, "__esModule", { value: !0 });
Pn.ArrowLeftIcon = void 0;
const Wo = Re;
function Lh(e) {
  return (0, Wo.h)(
    "svg",
    Object.assign({ width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" }, e),
    (0, Wo.h)("path", { d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z" })
  );
}
Pn.ArrowLeftIcon = Lh;
var $n = {};
Object.defineProperty($n, "__esModule", { value: !0 });
$n.LaptopIcon = void 0;
const oi = Re;
function Oh(e) {
  return (0, oi.h)(
    "svg",
    Object.assign({ width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, e),
    (0, oi.h)("path", { d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z" }),
    (0, oi.h)("path", { d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z" })
  );
}
$n.LaptopIcon = Oh;
var Bn = {};
Object.defineProperty(Bn, "__esModule", { value: !0 });
Bn.SafeIcon = void 0;
const Vo = Re;
function Ph(e) {
  return (0, Vo.h)(
    "svg",
    Object.assign({ width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, e),
    (0, Vo.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z" })
  );
}
Bn.SafeIcon = Ph;
var Gi = {};
Object.defineProperty(Gi, "__esModule", { value: !0 });
Gi.default = ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}";
var Nc = D && D.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(On, "__esModule", { value: !0 });
On.TryExtensionContent = void 0;
const ht = Nc(mr), he = Re, ai = fn, $h = Pn, Bh = $n, Fh = Bn, Dh = Nc(Gi);
function jh({ theme: e }) {
  const [t, r] = (0, ai.useState)(!1), n = (0, ai.useCallback)(() => {
    window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome", "_blank");
  }, []), s = (0, ai.useCallback)(() => {
    t ? window.location.reload() : (n(), r(!0));
  }, [n, t]);
  return (0, he.h)(
    "div",
    { class: (0, ht.default)("-cbwsdk-try-extension", e) },
    (0, he.h)("style", null, Dh.default),
    (0, he.h)(
      "div",
      { class: "-cbwsdk-try-extension-column-half" },
      (0, he.h)("h3", { class: (0, ht.default)("-cbwsdk-try-extension-heading", e) }, "Or try the Coinbase Wallet browser extension"),
      (0, he.h)(
        "div",
        { class: "-cbwsdk-try-extension-cta-wrapper" },
        (0, he.h)("button", { class: (0, ht.default)("-cbwsdk-try-extension-cta", e), onClick: s }, t ? "Refresh" : "Install"),
        (0, he.h)("div", null, !t && (0, he.h)($h.ArrowLeftIcon, { class: "-cbwsdk-try-extension-cta-icon", fill: e === "light" ? "#0052FF" : "#588AF5" }))
      )
    ),
    (0, he.h)(
      "div",
      { class: "-cbwsdk-try-extension-column-half" },
      (0, he.h)(
        "ul",
        { class: "-cbwsdk-try-extension-list" },
        (0, he.h)(
          "li",
          { class: "-cbwsdk-try-extension-list-item" },
          (0, he.h)(
            "div",
            { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
            (0, he.h)(
              "span",
              { class: (0, ht.default)("-cbwsdk-try-extension-list-item-icon", e) },
              (0, he.h)(Bh.LaptopIcon, { fill: e === "light" ? "#0A0B0D" : "#FFFFFF" })
            )
          ),
          (0, he.h)("div", { class: (0, ht.default)("-cbwsdk-try-extension-list-item-copy", e) }, "Connect with dapps with just one click on your desktop browser")
        ),
        (0, he.h)(
          "li",
          { class: "-cbwsdk-try-extension-list-item" },
          (0, he.h)(
            "div",
            { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
            (0, he.h)(
              "span",
              { class: (0, ht.default)("-cbwsdk-try-extension-list-item-icon", e) },
              (0, he.h)(Fh.SafeIcon, { fill: e === "light" ? "#0A0B0D" : "#FFFFFF" })
            )
          ),
          (0, he.h)("div", { class: (0, ht.default)("-cbwsdk-try-extension-list-item-copy", e) }, "Add an additional layer of security by using a supported Ledger hardware wallet")
        )
      )
    )
  );
}
On.TryExtensionContent = jh;
var Ji = {};
Object.defineProperty(Ji, "__esModule", { value: !0 });
Ji.default = ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}";
var Lc = D && D.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(An, "__esModule", { value: !0 });
An.ConnectDialog = void 0;
const ci = Lc(mr), ft = Re, li = fn, Hh = zt, Uh = On, Wh = Lc(Ji), Vh = (e) => {
  const { isOpen: t, darkMode: r } = e, [n, s] = (0, li.useState)(!t), [i, o] = (0, li.useState)(!t);
  (0, li.useEffect)(() => {
    const c = [
      window.setTimeout(() => {
        o(!t);
      }, 10)
    ];
    return t ? s(!1) : c.push(window.setTimeout(() => {
      s(!0);
    }, 360)), () => {
      c.forEach(window.clearTimeout);
    };
  }, [t]);
  const a = r ? "dark" : "light";
  return (0, ft.h)(
    "div",
    { class: (0, ci.default)("-cbwsdk-connect-dialog-container", n && "-cbwsdk-connect-dialog-container-hidden") },
    (0, ft.h)("style", null, Wh.default),
    (0, ft.h)("div", { class: (0, ci.default)("-cbwsdk-connect-dialog-backdrop", a, i && "-cbwsdk-connect-dialog-backdrop-hidden") }),
    (0, ft.h)(
      "div",
      { class: "-cbwsdk-connect-dialog" },
      (0, ft.h)(
        "div",
        { class: (0, ci.default)("-cbwsdk-connect-dialog-box", i && "-cbwsdk-connect-dialog-box-hidden") },
        e.connectDisabled ? null : (0, ft.h)(Hh.ConnectContent, { theme: a, version: e.version, sessionId: e.sessionId, sessionSecret: e.sessionSecret, linkAPIUrl: e.linkAPIUrl, isConnected: e.isConnected, isParentConnection: e.isParentConnection, chainId: e.chainId, onCancel: e.onCancel }),
        (0, ft.h)(Uh.TryExtensionContent, { theme: a })
      )
    )
  );
};
An.ConnectDialog = Vh;
Object.defineProperty(In, "__esModule", { value: !0 });
In.LinkFlow = void 0;
const ui = Re, zh = An;
class qh {
  constructor(t) {
    this.connected = !1, this.chainId = 1, this.isOpen = !1, this.onCancel = null, this.root = null, this.connectDisabled = !1, this.darkMode = t.darkMode, this.version = t.version, this.sessionId = t.sessionId, this.sessionSecret = t.sessionSecret, this.linkAPIUrl = t.linkAPIUrl, this.isParentConnection = t.isParentConnection;
  }
  attach(t) {
    this.root = document.createElement("div"), this.root.className = "-cbwsdk-link-flow-root", t.appendChild(this.root), this.render();
  }
  setConnected(t) {
    this.connected !== t && (this.connected = t, this.render());
  }
  setChainId(t) {
    this.chainId !== t && (this.chainId = t, this.render());
  }
  detach() {
    var t;
    this.root && ((0, ui.render)(null, this.root), (t = this.root.parentElement) === null || t === void 0 || t.removeChild(this.root));
  }
  setConnectDisabled(t) {
    this.connectDisabled = t;
  }
  open(t) {
    this.isOpen = !0, this.onCancel = t.onCancel, this.render();
  }
  close() {
    this.isOpen = !1, this.onCancel = null, this.render();
  }
  render() {
    this.root && (0, ui.render)((0, ui.h)(zh.ConnectDialog, { darkMode: this.darkMode, version: this.version, sessionId: this.sessionId, sessionSecret: this.sessionSecret, linkAPIUrl: this.linkAPIUrl, isOpen: this.isOpen, isConnected: this.connected, isParentConnection: this.isParentConnection, chainId: this.chainId, onCancel: this.onCancel, connectDisabled: this.connectDisabled }), this.root);
  }
}
In.LinkFlow = qh;
var Zi = {}, Ki = {};
Object.defineProperty(Ki, "__esModule", { value: !0 });
Ki.default = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}";
(function(e) {
  var t = D && D.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.SnackbarInstance = e.SnackbarContainer = e.Snackbar = void 0;
  const r = t(mr), n = Re, s = fn, i = t(Ki), o = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+", a = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=";
  class c {
    constructor(h) {
      this.items = /* @__PURE__ */ new Map(), this.nextItemKey = 0, this.root = null, this.darkMode = h.darkMode;
    }
    attach(h) {
      this.root = document.createElement("div"), this.root.className = "-cbwsdk-snackbar-root", h.appendChild(this.root), this.render();
    }
    presentItem(h) {
      const b = this.nextItemKey++;
      return this.items.set(b, h), this.render(), () => {
        this.items.delete(b), this.render();
      };
    }
    clear() {
      this.items.clear(), this.render();
    }
    render() {
      this.root && (0, n.render)((0, n.h)(
        "div",
        null,
        (0, n.h)(e.SnackbarContainer, { darkMode: this.darkMode }, Array.from(this.items.entries()).map(([h, b]) => (0, n.h)(e.SnackbarInstance, Object.assign({}, b, { key: h }))))
      ), this.root);
    }
  }
  e.Snackbar = c;
  const l = (d) => (0, n.h)(
    "div",
    { class: (0, r.default)("-cbwsdk-snackbar-container") },
    (0, n.h)("style", null, i.default),
    (0, n.h)("div", { class: "-cbwsdk-snackbar" }, d.children)
  );
  e.SnackbarContainer = l;
  const u = ({ autoExpand: d, message: h, menuItems: b }) => {
    const [m, R] = (0, s.useState)(!0), [E, g] = (0, s.useState)(d ?? !1);
    (0, s.useEffect)(() => {
      const _ = [
        window.setTimeout(() => {
          R(!1);
        }, 1),
        window.setTimeout(() => {
          g(!0);
        }, 1e4)
      ];
      return () => {
        _.forEach(window.clearTimeout);
      };
    });
    const y = () => {
      g(!E);
    };
    return (0, n.h)(
      "div",
      { class: (0, r.default)("-cbwsdk-snackbar-instance", m && "-cbwsdk-snackbar-instance-hidden", E && "-cbwsdk-snackbar-instance-expanded") },
      (0, n.h)(
        "div",
        { class: "-cbwsdk-snackbar-instance-header", onClick: y },
        (0, n.h)("img", { src: o, class: "-cbwsdk-snackbar-instance-header-cblogo" }),
        " ",
        (0, n.h)("div", { class: "-cbwsdk-snackbar-instance-header-message" }, h),
        (0, n.h)(
          "div",
          { class: "-gear-container" },
          !E && (0, n.h)(
            "svg",
            { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            (0, n.h)("circle", { cx: "12", cy: "12", r: "12", fill: "#F5F7F8" })
          ),
          (0, n.h)("img", { src: a, class: "-gear-icon", title: "Expand" })
        )
      ),
      b && b.length > 0 && (0, n.h)("div", { class: "-cbwsdk-snackbar-instance-menu" }, b.map((_, C) => (0, n.h)(
        "div",
        { class: (0, r.default)("-cbwsdk-snackbar-instance-menu-item", _.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"), onClick: _.onClick, key: C },
        (0, n.h)(
          "svg",
          { width: _.svgWidth, height: _.svgHeight, viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          (0, n.h)("path", { "fill-rule": _.defaultFillRule, "clip-rule": _.defaultClipRule, d: _.path, fill: "#AAAAAA" })
        ),
        (0, n.h)("span", { class: (0, r.default)("-cbwsdk-snackbar-instance-menu-item-info", _.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red") }, _.info)
      )))
    );
  };
  e.SnackbarInstance = u;
})(Zi);
Object.defineProperty(Ar, "__esModule", { value: !0 });
Ar.WalletLinkRelayUI = void 0;
const Gh = Tr, Jh = In, Zh = Zi;
class Kh {
  constructor(t) {
    this.standalone = null, this.attached = !1, this.snackbar = new Zh.Snackbar({
      darkMode: t.darkMode
    }), this.linkFlow = new Jh.LinkFlow({
      darkMode: t.darkMode,
      version: t.version,
      sessionId: t.session.id,
      sessionSecret: t.session.secret,
      linkAPIUrl: t.linkAPIUrl,
      isParentConnection: !1
    });
  }
  attach() {
    if (this.attached)
      throw new Error("Coinbase Wallet SDK UI is already attached");
    const t = document.documentElement, r = document.createElement("div");
    r.className = "-cbwsdk-css-reset", t.appendChild(r), this.linkFlow.attach(r), this.snackbar.attach(r), this.attached = !0, (0, Gh.injectCssReset)();
  }
  setConnected(t) {
    this.linkFlow.setConnected(t);
  }
  setChainId(t) {
    this.linkFlow.setChainId(t);
  }
  setConnectDisabled(t) {
    this.linkFlow.setConnectDisabled(t);
  }
  /* istanbul ignore next */
  addEthereumChain() {
  }
  // no-op
  /* istanbul ignore next */
  watchAsset() {
  }
  // no-op
  /* istanbul ignore next */
  switchEthereumChain() {
  }
  // no-op
  requestEthereumAccounts(t) {
    this.linkFlow.open({ onCancel: t.onCancel });
  }
  hideRequestEthereumAccounts() {
    this.linkFlow.close();
  }
  /* istanbul ignore next */
  signEthereumMessage() {
  }
  // no-op
  /* istanbul ignore next */
  signEthereumTransaction() {
  }
  // no-op
  /* istanbul ignore next */
  submitEthereumTransaction() {
  }
  // no-op
  /* istanbul ignore next */
  ethereumAddressFromSignedMessage() {
  }
  // no-op
  showConnecting(t) {
    let r;
    return t.isUnlinkedErrorState ? r = {
      autoExpand: !0,
      message: "Connection lost",
      menuItems: [
        {
          isRed: !1,
          info: "Reset connection",
          svgWidth: "10",
          svgHeight: "11",
          path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
          onClick: t.onResetConnection
        }
      ]
    } : r = {
      message: "Confirm on phone",
      menuItems: [
        {
          isRed: !0,
          info: "Cancel transaction",
          svgWidth: "11",
          svgHeight: "11",
          path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
          defaultFillRule: "inherit",
          defaultClipRule: "inherit",
          onClick: t.onCancel
        },
        {
          isRed: !1,
          info: "Reset connection",
          svgWidth: "10",
          svgHeight: "11",
          path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
          onClick: t.onResetConnection
        }
      ]
    }, this.snackbar.presentItem(r);
  }
  /* istanbul ignore next */
  reloadUI() {
    document.location.reload();
  }
  /* istanbul ignore next */
  inlineAccountsResponse() {
    return !1;
  }
  /* istanbul ignore next */
  inlineAddEthereumChain() {
    return !1;
  }
  /* istanbul ignore next */
  inlineWatchAsset() {
    return !1;
  }
  /* istanbul ignore next */
  inlineSwitchEthereumChain() {
    return !1;
  }
  /* istanbul ignore next */
  setStandalone(t) {
    this.standalone = t;
  }
  /* istanbul ignore next */
  isStandalone() {
    var t;
    return (t = this.standalone) !== null && t !== void 0 ? t : !1;
  }
}
Ar.WalletLinkRelayUI = Kh;
Object.defineProperty(Sr, "__esModule", { value: !0 });
Sr.WalletLinkRelay = void 0;
const Ot = _r, Qh = fe, ae = O, pt = Xt, zo = Ne, it = er, Yh = Rn, gt = Qt, Xh = Ar;
class et extends zo.RelayAbstract {
  constructor(t) {
    var r;
    super(), this.accountsCallback = null, this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }, this.chainCallback = null, this.dappDefaultChain = 1, this.appName = "", this.appLogoUrl = null, this.linkedUpdated = (o) => {
      var a;
      this.isLinked = o;
      const c = this.storage.getItem(zo.LOCAL_STORAGE_ADDRESSES_KEY);
      if (o && (this.session.linked = o), this.isUnlinkedErrorState = !1, c) {
        const l = c.split(" "), u = this.storage.getItem("IsStandaloneSigning") === "true";
        if (l[0] !== "" && !o && this.session.linked && !u) {
          this.isUnlinkedErrorState = !0;
          const d = this.getSessionIdHash();
          (a = this.diagnostic) === null || a === void 0 || a.log(pt.EVENTS.UNLINKED_ERROR_STATE, {
            sessionIdHash: d
          });
        }
      }
    }, this.metadataUpdated = (o, a) => {
      this.storage.setItem(o, a);
    }, this.chainUpdated = (o, a) => {
      this.chainCallbackParams.chainId === o && this.chainCallbackParams.jsonRpcUrl === a || (this.chainCallbackParams = {
        chainId: o,
        jsonRpcUrl: a
      }, this.chainCallback && this.chainCallback(o, a));
    }, this.accountUpdated = (o) => {
      this.accountsCallback && this.accountsCallback([o]), et.accountRequestCallbackIds.size > 0 && (Array.from(et.accountRequestCallbackIds.values()).forEach((a) => {
        const c = {
          type: "WEB3_RESPONSE",
          id: a,
          response: {
            method: "requestEthereumAccounts",
            result: [o]
          }
        };
        this.invokeCallback(Object.assign(Object.assign({}, c), { id: a }));
      }), et.accountRequestCallbackIds.clear());
    }, this.connectedUpdated = (o) => {
      this.ui.setConnected(o);
    }, this.resetAndReload = this.resetAndReload.bind(this), this.linkAPIUrl = t.linkAPIUrl, this.storage = t.storage, this.options = t;
    const { session: n, ui: s, connection: i } = this.subscribe();
    this._session = n, this.connection = i, this.relayEventManager = t.relayEventManager, this.diagnostic = t.diagnosticLogger, this._reloadOnDisconnect = (r = t.reloadOnDisconnect) !== null && r !== void 0 ? r : !0, this.ui = s;
  }
  subscribe() {
    const t = it.Session.load(this.storage) || new it.Session(this.storage).save(), { linkAPIUrl: r, diagnostic: n } = this, s = new Yh.WalletLinkConnection({
      session: t,
      linkAPIUrl: r,
      diagnostic: n,
      listener: this
    }), { version: i, darkMode: o } = this.options, a = this.options.uiConstructor({
      linkAPIUrl: r,
      version: i,
      darkMode: o,
      session: t
    });
    return s.connect(), { session: t, ui: a, connection: s };
  }
  attachUI() {
    this.ui.attach();
  }
  resetAndReload() {
    Promise.race([
      this.connection.setSessionMetadata("__destroyed", "1"),
      new Promise((t) => setTimeout(() => t(null), 1e3))
    ]).then(() => {
      var t, r;
      const n = this.ui.isStandalone();
      (t = this.diagnostic) === null || t === void 0 || t.log(pt.EVENTS.SESSION_STATE_CHANGE, {
        method: "relay::resetAndReload",
        sessionMetadataChange: "__destroyed, 1",
        sessionIdHash: this.getSessionIdHash()
      }), this.connection.destroy();
      const s = it.Session.load(this.storage);
      if ((s == null ? void 0 : s.id) === this._session.id ? this.storage.clear() : s && ((r = this.diagnostic) === null || r === void 0 || r.log(pt.EVENTS.SKIPPED_CLEARING_SESSION, {
        sessionIdHash: this.getSessionIdHash(),
        storedSessionIdHash: it.Session.hash(s.id)
      })), this._reloadOnDisconnect) {
        this.ui.reloadUI();
        return;
      }
      this.accountsCallback && this.accountsCallback([], !0);
      const { session: i, ui: o, connection: a } = this.subscribe();
      this._session = i, this.connection = a, this.ui = o, n && this.ui.setStandalone && this.ui.setStandalone(!0), this.options.headlessMode || this.attachUI();
    }).catch((t) => {
      var r;
      (r = this.diagnostic) === null || r === void 0 || r.log(pt.EVENTS.FAILURE, {
        method: "relay::resetAndReload",
        message: `failed to reset and reload with ${t}`,
        sessionIdHash: this.getSessionIdHash()
      });
    });
  }
  setAppInfo(t, r) {
    this.appName = t, this.appLogoUrl = r;
  }
  getStorageItem(t) {
    return this.storage.getItem(t);
  }
  get session() {
    return this._session;
  }
  setStorageItem(t, r) {
    this.storage.setItem(t, r);
  }
  signEthereumMessage(t, r, n, s) {
    return this.sendRequest({
      method: "signEthereumMessage",
      params: {
        message: (0, ae.hexStringFromBuffer)(t, !0),
        address: r,
        addPrefix: n,
        typedDataJson: s || null
      }
    });
  }
  ethereumAddressFromSignedMessage(t, r, n) {
    return this.sendRequest({
      method: "ethereumAddressFromSignedMessage",
      params: {
        message: (0, ae.hexStringFromBuffer)(t, !0),
        signature: (0, ae.hexStringFromBuffer)(r, !0),
        addPrefix: n
      }
    });
  }
  signEthereumTransaction(t) {
    return this.sendRequest({
      method: "signEthereumTransaction",
      params: {
        fromAddress: t.fromAddress,
        toAddress: t.toAddress,
        weiValue: (0, ae.bigIntStringFromBN)(t.weiValue),
        data: (0, ae.hexStringFromBuffer)(t.data, !0),
        nonce: t.nonce,
        gasPriceInWei: t.gasPriceInWei ? (0, ae.bigIntStringFromBN)(t.gasPriceInWei) : null,
        maxFeePerGas: t.gasPriceInWei ? (0, ae.bigIntStringFromBN)(t.gasPriceInWei) : null,
        maxPriorityFeePerGas: t.gasPriceInWei ? (0, ae.bigIntStringFromBN)(t.gasPriceInWei) : null,
        gasLimit: t.gasLimit ? (0, ae.bigIntStringFromBN)(t.gasLimit) : null,
        chainId: t.chainId,
        shouldSubmit: !1
      }
    });
  }
  signAndSubmitEthereumTransaction(t) {
    return this.sendRequest({
      method: "signEthereumTransaction",
      params: {
        fromAddress: t.fromAddress,
        toAddress: t.toAddress,
        weiValue: (0, ae.bigIntStringFromBN)(t.weiValue),
        data: (0, ae.hexStringFromBuffer)(t.data, !0),
        nonce: t.nonce,
        gasPriceInWei: t.gasPriceInWei ? (0, ae.bigIntStringFromBN)(t.gasPriceInWei) : null,
        maxFeePerGas: t.maxFeePerGas ? (0, ae.bigIntStringFromBN)(t.maxFeePerGas) : null,
        maxPriorityFeePerGas: t.maxPriorityFeePerGas ? (0, ae.bigIntStringFromBN)(t.maxPriorityFeePerGas) : null,
        gasLimit: t.gasLimit ? (0, ae.bigIntStringFromBN)(t.gasLimit) : null,
        chainId: t.chainId,
        shouldSubmit: !0
      }
    });
  }
  submitEthereumTransaction(t, r) {
    return this.sendRequest({
      method: "submitEthereumTransaction",
      params: {
        signedTransaction: (0, ae.hexStringFromBuffer)(t, !0),
        chainId: r
      }
    });
  }
  scanQRCode(t) {
    return this.sendRequest({
      method: "scanQRCode",
      params: {
        regExp: t
      }
    });
  }
  getQRCodeUrl() {
    return (0, ae.createQrUrl)(this._session.id, this._session.secret, this.linkAPIUrl, !1, this.options.version, this.dappDefaultChain);
  }
  genericRequest(t, r) {
    return this.sendRequest({
      method: "generic",
      params: {
        action: r,
        data: t
      }
    });
  }
  sendGenericMessage(t) {
    return this.sendRequest(t);
  }
  sendRequest(t) {
    let r = null;
    const n = (0, ae.randomBytesHex)(8), s = (o) => {
      this.publishWeb3RequestCanceledEvent(n), this.handleErrorResponse(n, t.method, o), r == null || r();
    };
    return { promise: new Promise((o, a) => {
      this.ui.isStandalone() || (r = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: s,
        onResetConnection: this.resetAndReload
        // eslint-disable-line @typescript-eslint/unbound-method
      })), this.relayEventManager.callbacks.set(n, (c) => {
        if (r == null || r(), (0, gt.isErrorResponse)(c))
          return a(new Error(c.errorMessage));
        o(c);
      }), this.ui.isStandalone() ? this.sendRequestStandalone(n, t) : this.publishWeb3RequestEvent(n, t);
    }), cancel: s };
  }
  setConnectDisabled(t) {
    this.ui.setConnectDisabled(t);
  }
  setAccountsCallback(t) {
    this.accountsCallback = t;
  }
  setChainCallback(t) {
    this.chainCallback = t;
  }
  setDappDefaultChainCallback(t) {
    this.dappDefaultChain = t, this.ui instanceof Xh.WalletLinkRelayUI && this.ui.setChainId(t);
  }
  publishWeb3RequestEvent(t, r) {
    var n;
    const s = { type: "WEB3_REQUEST", id: t, request: r }, i = it.Session.load(this.storage);
    (n = this.diagnostic) === null || n === void 0 || n.log(pt.EVENTS.WEB3_REQUEST, {
      eventId: s.id,
      method: `relay::${r.method}`,
      sessionIdHash: this.getSessionIdHash(),
      storedSessionIdHash: i ? it.Session.hash(i.id) : "",
      isSessionMismatched: ((i == null ? void 0 : i.id) !== this._session.id).toString()
    }), this.publishEvent("Web3Request", s, !0).then((o) => {
      var a;
      (a = this.diagnostic) === null || a === void 0 || a.log(pt.EVENTS.WEB3_REQUEST_PUBLISHED, {
        eventId: s.id,
        method: `relay::${r.method}`,
        sessionIdHash: this.getSessionIdHash(),
        storedSessionIdHash: i ? it.Session.hash(i.id) : "",
        isSessionMismatched: ((i == null ? void 0 : i.id) !== this._session.id).toString()
      });
    }).catch((o) => {
      this.handleWeb3ResponseMessage({
        type: "WEB3_RESPONSE",
        id: s.id,
        response: {
          method: r.method,
          errorMessage: o.message
        }
      });
    });
  }
  publishWeb3RequestCanceledEvent(t) {
    const r = {
      type: "WEB3_REQUEST_CANCELED",
      id: t
    };
    this.publishEvent("Web3RequestCanceled", r, !1).then();
  }
  publishEvent(t, r, n) {
    return this.connection.publishEvent(t, r, n);
  }
  handleWeb3ResponseMessage(t) {
    var r;
    const { response: n } = t;
    if ((r = this.diagnostic) === null || r === void 0 || r.log(pt.EVENTS.WEB3_RESPONSE, {
      eventId: t.id,
      method: `relay::${n.method}`,
      sessionIdHash: this.getSessionIdHash()
    }), n.method === "requestEthereumAccounts") {
      et.accountRequestCallbackIds.forEach((s) => this.invokeCallback(Object.assign(Object.assign({}, t), { id: s }))), et.accountRequestCallbackIds.clear();
      return;
    }
    this.invokeCallback(t);
  }
  handleErrorResponse(t, r, n, s) {
    var i;
    const o = (i = n == null ? void 0 : n.message) !== null && i !== void 0 ? i : (0, Ot.getMessageFromCode)(s);
    this.handleWeb3ResponseMessage({
      type: "WEB3_RESPONSE",
      id: t,
      response: {
        method: r,
        errorMessage: o,
        errorCode: s
      }
    });
  }
  invokeCallback(t) {
    const r = this.relayEventManager.callbacks.get(t.id);
    r && (r(t.response), this.relayEventManager.callbacks.delete(t.id));
  }
  requestEthereumAccounts() {
    const t = {
      method: "requestEthereumAccounts",
      params: {
        appName: this.appName,
        appLogoUrl: this.appLogoUrl || null
      }
    }, r = (0, ae.randomBytesHex)(8), n = (i) => {
      this.publishWeb3RequestCanceledEvent(r), this.handleErrorResponse(r, t.method, i);
    };
    return { promise: new Promise((i, o) => {
      if (this.relayEventManager.callbacks.set(r, (a) => {
        if (this.ui.hideRequestEthereumAccounts(), (0, gt.isErrorResponse)(a))
          return o(new Error(a.errorMessage));
        i(a);
      }), this.ui.inlineAccountsResponse()) {
        const a = (c) => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: r,
            response: { method: "requestEthereumAccounts", result: c }
          });
        };
        this.ui.requestEthereumAccounts({
          onCancel: n,
          onAccounts: a
        });
      } else {
        const a = Ot.standardErrors.provider.userRejectedRequest("User denied account authorization");
        this.ui.requestEthereumAccounts({
          onCancel: () => n(a)
        });
      }
      et.accountRequestCallbackIds.add(r), !this.ui.inlineAccountsResponse() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(r, t);
    }), cancel: n };
  }
  selectProvider(t) {
    const r = {
      method: "selectProvider",
      params: {
        providerOptions: t
      }
    }, n = (0, ae.randomBytesHex)(8), s = (o) => {
      this.publishWeb3RequestCanceledEvent(n), this.handleErrorResponse(n, r.method, o);
    }, i = new Promise((o, a) => {
      this.relayEventManager.callbacks.set(n, (u) => {
        if ((0, gt.isErrorResponse)(u))
          return a(new Error(u.errorMessage));
        o(u);
      });
      const c = (u) => {
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id: n,
          response: { method: "selectProvider", result: Qh.ProviderType.Unselected }
        });
      }, l = (u) => {
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id: n,
          response: { method: "selectProvider", result: u }
        });
      };
      this.ui.selectProvider && this.ui.selectProvider({
        onApprove: l,
        onCancel: c,
        providerOptions: t
      });
    });
    return { cancel: s, promise: i };
  }
  watchAsset(t, r, n, s, i, o) {
    const a = {
      method: "watchAsset",
      params: {
        type: t,
        options: {
          address: r,
          symbol: n,
          decimals: s,
          image: i
        },
        chainId: o
      }
    };
    let c = null;
    const l = (0, ae.randomBytesHex)(8), u = (h) => {
      this.publishWeb3RequestCanceledEvent(l), this.handleErrorResponse(l, a.method, h), c == null || c();
    };
    this.ui.inlineWatchAsset() || (c = this.ui.showConnecting({
      isUnlinkedErrorState: this.isUnlinkedErrorState,
      onCancel: u,
      onResetConnection: this.resetAndReload
      // eslint-disable-line @typescript-eslint/unbound-method
    }));
    const d = new Promise((h, b) => {
      this.relayEventManager.callbacks.set(l, (E) => {
        if (c == null || c(), (0, gt.isErrorResponse)(E))
          return b(new Error(E.errorMessage));
        h(E);
      });
      const m = (E) => {
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id: l,
          response: {
            method: "watchAsset",
            result: !1
          }
        });
      }, R = () => {
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id: l,
          response: {
            method: "watchAsset",
            result: !0
          }
        });
      };
      this.ui.inlineWatchAsset() && this.ui.watchAsset({
        onApprove: R,
        onCancel: m,
        type: t,
        address: r,
        symbol: n,
        decimals: s,
        image: i,
        chainId: o
      }), !this.ui.inlineWatchAsset() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(l, a);
    });
    return { cancel: u, promise: d };
  }
  addEthereumChain(t, r, n, s, i, o) {
    const a = {
      method: "addEthereumChain",
      params: {
        chainId: t,
        rpcUrls: r,
        blockExplorerUrls: s,
        chainName: i,
        iconUrls: n,
        nativeCurrency: o
      }
    };
    let c = null;
    const l = (0, ae.randomBytesHex)(8), u = (h) => {
      this.publishWeb3RequestCanceledEvent(l), this.handleErrorResponse(l, a.method, h), c == null || c();
    };
    return this.ui.inlineAddEthereumChain(t) || (c = this.ui.showConnecting({
      isUnlinkedErrorState: this.isUnlinkedErrorState,
      onCancel: u,
      onResetConnection: this.resetAndReload
      // eslint-disable-line @typescript-eslint/unbound-method
    })), { promise: new Promise((h, b) => {
      this.relayEventManager.callbacks.set(l, (E) => {
        if (c == null || c(), (0, gt.isErrorResponse)(E))
          return b(new Error(E.errorMessage));
        h(E);
      });
      const m = (E) => {
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id: l,
          response: {
            method: "addEthereumChain",
            result: {
              isApproved: !1,
              rpcUrl: ""
            }
          }
        });
      }, R = (E) => {
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id: l,
          response: {
            method: "addEthereumChain",
            result: {
              isApproved: !0,
              rpcUrl: E
            }
          }
        });
      };
      this.ui.inlineAddEthereumChain(t) && this.ui.addEthereumChain({
        onCancel: m,
        onApprove: R,
        chainId: a.params.chainId,
        rpcUrls: a.params.rpcUrls,
        blockExplorerUrls: a.params.blockExplorerUrls,
        chainName: a.params.chainName,
        iconUrls: a.params.iconUrls,
        nativeCurrency: a.params.nativeCurrency
      }), !this.ui.inlineAddEthereumChain(t) && !this.ui.isStandalone() && this.publishWeb3RequestEvent(l, a);
    }), cancel: u };
  }
  switchEthereumChain(t, r) {
    const n = {
      method: "switchEthereumChain",
      params: Object.assign({ chainId: t }, { address: r })
    }, s = (0, ae.randomBytesHex)(8), i = (a) => {
      this.publishWeb3RequestCanceledEvent(s), this.handleErrorResponse(s, n.method, a);
    };
    return { promise: new Promise((a, c) => {
      this.relayEventManager.callbacks.set(s, (d) => {
        if ((0, gt.isErrorResponse)(d) && d.errorCode)
          return c(Ot.standardErrors.provider.custom({
            code: d.errorCode,
            message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
          }));
        if ((0, gt.isErrorResponse)(d))
          return c(new Error(d.errorMessage));
        a(d);
      });
      const l = (d) => {
        var h;
        if (d) {
          const b = (h = (0, Ot.getErrorCode)(d)) !== null && h !== void 0 ? h : Ot.standardErrorCodes.provider.unsupportedChain;
          this.handleErrorResponse(s, "switchEthereumChain", d instanceof Error ? d : Ot.standardErrors.provider.unsupportedChain(t), b);
        } else
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: s,
            response: {
              method: "switchEthereumChain",
              result: {
                isApproved: !1,
                rpcUrl: ""
              }
            }
          });
      }, u = (d) => {
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id: s,
          response: {
            method: "switchEthereumChain",
            result: {
              isApproved: !0,
              rpcUrl: d
            }
          }
        });
      };
      this.ui.switchEthereumChain({
        onCancel: l,
        onApprove: u,
        chainId: n.params.chainId,
        address: n.params.address
      }), !this.ui.inlineSwitchEthereumChain() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(s, n);
    }), cancel: i };
  }
  inlineAddEthereumChain(t) {
    return this.ui.inlineAddEthereumChain(t);
  }
  getSessionIdHash() {
    return it.Session.hash(this._session.id);
  }
  sendRequestStandalone(t, r) {
    const n = (i) => {
      this.handleErrorResponse(t, r.method, i);
    }, s = (i) => {
      this.handleWeb3ResponseMessage({
        type: "WEB3_RESPONSE",
        id: t,
        response: i
      });
    };
    switch (r.method) {
      case "signEthereumMessage":
        this.ui.signEthereumMessage({
          request: r,
          onSuccess: s,
          onCancel: n
        });
        break;
      case "signEthereumTransaction":
        this.ui.signEthereumTransaction({
          request: r,
          onSuccess: s,
          onCancel: n
        });
        break;
      case "submitEthereumTransaction":
        this.ui.submitEthereumTransaction({
          request: r,
          onSuccess: s,
          onCancel: n
        });
        break;
      case "ethereumAddressFromSignedMessage":
        this.ui.ethereumAddressFromSignedMessage({
          request: r,
          onSuccess: s
        });
        break;
      default:
        n();
        break;
    }
  }
}
Sr.WalletLinkRelay = et;
et.accountRequestCallbackIds = /* @__PURE__ */ new Set();
var Mr = {}, Fn = {}, Oc = {};
(function(e) {
  var t = D && D.__createBinding || (Object.create ? function(n, s, i, o) {
    o === void 0 && (o = i);
    var a = Object.getOwnPropertyDescriptor(s, i);
    (!a || ("get" in a ? !s.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
      return s[i];
    } }), Object.defineProperty(n, o, a);
  } : function(n, s, i, o) {
    o === void 0 && (o = i), n[o] = s[i];
  }), r = D && D.__exportStar || function(n, s) {
    for (var i in n) i !== "default" && !Object.prototype.hasOwnProperty.call(s, i) && t(s, n, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(Zi, e);
})(Oc);
var Qi = {};
Object.defineProperty(Qi, "__esModule", { value: !0 });
Qi.default = ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}";
var Pc = D && D.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Fn, "__esModule", { value: !0 });
Fn.RedirectDialog = void 0;
const ef = Pc(mr), qe = Re, tf = Tr, rf = Oc, nf = Pc(Qi);
class sf {
  constructor() {
    this.root = null;
  }
  attach() {
    const t = document.documentElement;
    this.root = document.createElement("div"), this.root.className = "-cbwsdk-css-reset", t.appendChild(this.root), (0, tf.injectCssReset)();
  }
  present(t) {
    this.render(t);
  }
  clear() {
    this.render(null);
  }
  render(t) {
    this.root && ((0, qe.render)(null, this.root), t && (0, qe.render)((0, qe.h)(of, Object.assign({}, t, { onDismiss: () => {
      this.clear();
    } })), this.root));
  }
}
Fn.RedirectDialog = sf;
const of = ({ title: e, buttonText: t, darkMode: r, onButtonClick: n, onDismiss: s }) => {
  const i = r ? "dark" : "light";
  return (0, qe.h)(
    rf.SnackbarContainer,
    { darkMode: r },
    (0, qe.h)(
      "div",
      { class: "-cbwsdk-redirect-dialog" },
      (0, qe.h)("style", null, nf.default),
      (0, qe.h)("div", { class: "-cbwsdk-redirect-dialog-backdrop", onClick: s }),
      (0, qe.h)(
        "div",
        { class: (0, ef.default)("-cbwsdk-redirect-dialog-box", i) },
        (0, qe.h)("p", null, e),
        (0, qe.h)("button", { onClick: n }, t)
      )
    )
  );
};
Object.defineProperty(Mr, "__esModule", { value: !0 });
Mr.MobileRelayUI = void 0;
const af = Fn;
class cf {
  constructor(t) {
    this.attached = !1, this.darkMode = !1, this.redirectDialog = new af.RedirectDialog(), this.darkMode = t.darkMode;
  }
  attach() {
    if (this.attached)
      throw new Error("Coinbase Wallet SDK UI is already attached");
    this.redirectDialog.attach(), this.attached = !0;
  }
  setConnected(t) {
  }
  // no-op
  redirectToCoinbaseWallet(t) {
    const r = new URL("https://go.cb-w.com/walletlink");
    r.searchParams.append("redirect_url", window.location.href), t && r.searchParams.append("wl_url", t);
    const n = document.createElement("a");
    n.target = "cbw-opener", n.href = r.href, n.rel = "noreferrer noopener", n.click();
  }
  openCoinbaseWalletDeeplink(t) {
    this.redirectDialog.present({
      title: "Redirecting to Coinbase Wallet...",
      buttonText: "Open",
      darkMode: this.darkMode,
      onButtonClick: () => {
        this.redirectToCoinbaseWallet(t);
      }
    }), setTimeout(() => {
      this.redirectToCoinbaseWallet(t);
    }, 99);
  }
  showConnecting(t) {
    return () => {
      this.redirectDialog.clear();
    };
  }
  hideRequestEthereumAccounts() {
    this.redirectDialog.clear();
  }
  // -- Methods below are not needed for mobile
  requestEthereumAccounts() {
  }
  // no-op
  addEthereumChain() {
  }
  // no-op
  watchAsset() {
  }
  // no-op
  selectProvider() {
  }
  // no-op
  switchEthereumChain() {
  }
  // no-op
  signEthereumMessage() {
  }
  // no-op
  signEthereumTransaction() {
  }
  // no-op
  submitEthereumTransaction() {
  }
  // no-op
  ethereumAddressFromSignedMessage() {
  }
  // no-op
  reloadUI() {
  }
  // no-op
  setStandalone() {
  }
  // no-op
  setConnectDisabled() {
  }
  // no-op
  inlineAccountsResponse() {
    return !1;
  }
  inlineAddEthereumChain() {
    return !1;
  }
  inlineWatchAsset() {
    return !1;
  }
  inlineSwitchEthereumChain() {
    return !1;
  }
  isStandalone() {
    return !1;
  }
}
Mr.MobileRelayUI = cf;
Object.defineProperty(Er, "__esModule", { value: !0 });
Er.MobileRelay = void 0;
const lf = O, uf = Sr, df = Mr;
class hf extends uf.WalletLinkRelay {
  constructor(t) {
    var r;
    super(t), this._enableMobileWalletLink = (r = t.enableMobileWalletLink) !== null && r !== void 0 ? r : !1;
  }
  // override
  requestEthereumAccounts() {
    return this._enableMobileWalletLink ? super.requestEthereumAccounts() : {
      promise: new Promise(() => {
        const t = (0, lf.getLocation)();
        t.href = `https://go.cb-w.com/dapp?cb_url=${encodeURIComponent(t.href)}`;
      }),
      cancel: () => {
      }
    };
  }
  // override
  publishWeb3RequestEvent(t, r) {
    if (super.publishWeb3RequestEvent(t, r), !(this._enableMobileWalletLink && this.ui instanceof df.MobileRelayUI))
      return;
    let n = !1;
    switch (r.method) {
      case "requestEthereumAccounts":
      case "connectAndSignIn":
        n = !0, this.ui.openCoinbaseWalletDeeplink(this.getQRCodeUrl());
        break;
      case "switchEthereumChain":
        return;
      default:
        n = !0, this.ui.openCoinbaseWalletDeeplink();
        break;
    }
    n && window.addEventListener("blur", () => {
      window.addEventListener("focus", () => {
        this.connection.checkUnseenEvents();
      }, { once: !0 });
    }, { once: !0 });
  }
  // override
  handleWeb3ResponseMessage(t) {
    super.handleWeb3ResponseMessage(t);
  }
  connectAndSignIn(t) {
    if (!this._enableMobileWalletLink)
      throw new Error("connectAndSignIn is supported only when enableMobileWalletLink is on");
    return this.sendRequest({
      method: "connectAndSignIn",
      params: {
        appName: this.appName,
        appLogoUrl: this.appLogoUrl,
        domain: window.location.hostname,
        aud: window.location.href,
        version: "1",
        type: "eip4361",
        nonce: t.nonce,
        iat: (/* @__PURE__ */ new Date()).toISOString(),
        chainId: `eip155:${this.dappDefaultChain}`,
        statement: t.statement,
        resources: t.resources
      }
    });
  }
}
Er.MobileRelay = hf;
var Li = { exports: {} }, $c = hn.EventEmitter, di, qo;
function ff() {
  if (qo) return di;
  qo = 1;
  function e(m, R) {
    var E = Object.keys(m);
    if (Object.getOwnPropertySymbols) {
      var g = Object.getOwnPropertySymbols(m);
      R && (g = g.filter(function(y) {
        return Object.getOwnPropertyDescriptor(m, y).enumerable;
      })), E.push.apply(E, g);
    }
    return E;
  }
  function t(m) {
    for (var R = 1; R < arguments.length; R++) {
      var E = arguments[R] != null ? arguments[R] : {};
      R % 2 ? e(Object(E), !0).forEach(function(g) {
        r(m, g, E[g]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(E)) : e(Object(E)).forEach(function(g) {
        Object.defineProperty(m, g, Object.getOwnPropertyDescriptor(E, g));
      });
    }
    return m;
  }
  function r(m, R, E) {
    return R = o(R), R in m ? Object.defineProperty(m, R, { value: E, enumerable: !0, configurable: !0, writable: !0 }) : m[R] = E, m;
  }
  function n(m, R) {
    if (!(m instanceof R))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(m, R) {
    for (var E = 0; E < R.length; E++) {
      var g = R[E];
      g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(m, o(g.key), g);
    }
  }
  function i(m, R, E) {
    return R && s(m.prototype, R), Object.defineProperty(m, "prototype", { writable: !1 }), m;
  }
  function o(m) {
    var R = a(m, "string");
    return typeof R == "symbol" ? R : String(R);
  }
  function a(m, R) {
    if (typeof m != "object" || m === null) return m;
    var E = m[Symbol.toPrimitive];
    if (E !== void 0) {
      var g = E.call(m, R || "default");
      if (typeof g != "object") return g;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (R === "string" ? String : Number)(m);
  }
  var c = dn, l = c.Buffer, u = sc, d = u.inspect, h = d && d.custom || "inspect";
  function b(m, R, E) {
    l.prototype.copy.call(m, R, E);
  }
  return di = /* @__PURE__ */ function() {
    function m() {
      n(this, m), this.head = null, this.tail = null, this.length = 0;
    }
    return i(m, [{
      key: "push",
      value: function(E) {
        var g = {
          data: E,
          next: null
        };
        this.length > 0 ? this.tail.next = g : this.head = g, this.tail = g, ++this.length;
      }
    }, {
      key: "unshift",
      value: function(E) {
        var g = {
          data: E,
          next: this.head
        };
        this.length === 0 && (this.tail = g), this.head = g, ++this.length;
      }
    }, {
      key: "shift",
      value: function() {
        if (this.length !== 0) {
          var E = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, E;
        }
      }
    }, {
      key: "clear",
      value: function() {
        this.head = this.tail = null, this.length = 0;
      }
    }, {
      key: "join",
      value: function(E) {
        if (this.length === 0) return "";
        for (var g = this.head, y = "" + g.data; g = g.next; ) y += E + g.data;
        return y;
      }
    }, {
      key: "concat",
      value: function(E) {
        if (this.length === 0) return l.alloc(0);
        for (var g = l.allocUnsafe(E >>> 0), y = this.head, _ = 0; y; )
          b(y.data, g, _), _ += y.data.length, y = y.next;
        return g;
      }
      // Consumes a specified amount of bytes or characters from the buffered data.
    }, {
      key: "consume",
      value: function(E, g) {
        var y;
        return E < this.head.data.length ? (y = this.head.data.slice(0, E), this.head.data = this.head.data.slice(E)) : E === this.head.data.length ? y = this.shift() : y = g ? this._getString(E) : this._getBuffer(E), y;
      }
    }, {
      key: "first",
      value: function() {
        return this.head.data;
      }
      // Consumes a specified amount of characters from the buffered data.
    }, {
      key: "_getString",
      value: function(E) {
        var g = this.head, y = 1, _ = g.data;
        for (E -= _.length; g = g.next; ) {
          var C = g.data, S = E > C.length ? C.length : E;
          if (S === C.length ? _ += C : _ += C.slice(0, E), E -= S, E === 0) {
            S === C.length ? (++y, g.next ? this.head = g.next : this.head = this.tail = null) : (this.head = g, g.data = C.slice(S));
            break;
          }
          ++y;
        }
        return this.length -= y, _;
      }
      // Consumes a specified amount of bytes from the buffered data.
    }, {
      key: "_getBuffer",
      value: function(E) {
        var g = l.allocUnsafe(E), y = this.head, _ = 1;
        for (y.data.copy(g), E -= y.data.length; y = y.next; ) {
          var C = y.data, S = E > C.length ? C.length : E;
          if (C.copy(g, g.length - E, 0, S), E -= S, E === 0) {
            S === C.length ? (++_, y.next ? this.head = y.next : this.head = this.tail = null) : (this.head = y, y.data = C.slice(S));
            break;
          }
          ++_;
        }
        return this.length -= _, g;
      }
      // Make sure the linked list only shows the minimal necessary information.
    }, {
      key: h,
      value: function(E, g) {
        return d(this, t(t({}, g), {}, {
          // Only inspect one level.
          depth: 0,
          // It should not recurse.
          customInspect: !1
        }));
      }
    }]), m;
  }(), di;
}
function pf(e, t) {
  var r = this, n = this._readableState && this._readableState.destroyed, s = this._writableState && this._writableState.destroyed;
  return n || s ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(Oi, this, e)) : process.nextTick(Oi, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(i) {
    !t && i ? r._writableState ? r._writableState.errorEmitted ? process.nextTick(rn, r) : (r._writableState.errorEmitted = !0, process.nextTick(Go, r, i)) : process.nextTick(Go, r, i) : t ? (process.nextTick(rn, r), t(i)) : process.nextTick(rn, r);
  }), this);
}
function Go(e, t) {
  Oi(e, t), rn(e);
}
function rn(e) {
  e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close");
}
function gf() {
  this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
}
function Oi(e, t) {
  e.emit("error", t);
}
function bf(e, t) {
  var r = e._readableState, n = e._writableState;
  r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t);
}
var Bc = {
  destroy: pf,
  undestroy: gf,
  errorOrDestroy: bf
}, Ct = {};
function mf(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
var Fc = {};
function Pe(e, t, r) {
  r || (r = Error);
  function n(i, o, a) {
    return typeof t == "string" ? t : t(i, o, a);
  }
  var s = /* @__PURE__ */ function(i) {
    mf(o, i);
    function o(a, c, l) {
      return i.call(this, n(a, c, l)) || this;
    }
    return o;
  }(r);
  s.prototype.name = r.name, s.prototype.code = e, Fc[e] = s;
}
function Jo(e, t) {
  if (Array.isArray(e)) {
    var r = e.length;
    return e = e.map(function(n) {
      return String(n);
    }), r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : r === 2 ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0]);
  } else
    return "of ".concat(t, " ").concat(String(e));
}
function _f(e, t, r) {
  return e.substr(0, t.length) === t;
}
function yf(e, t, r) {
  return (r === void 0 || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t;
}
function wf(e, t, r) {
  return typeof r != "number" && (r = 0), r + t.length > e.length ? !1 : e.indexOf(t, r) !== -1;
}
Pe("ERR_INVALID_OPT_VALUE", function(e, t) {
  return 'The value "' + t + '" is invalid for option "' + e + '"';
}, TypeError);
Pe("ERR_INVALID_ARG_TYPE", function(e, t, r) {
  var n;
  typeof t == "string" && _f(t, "not ") ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be";
  var s;
  if (yf(e, " argument"))
    s = "The ".concat(e, " ").concat(n, " ").concat(Jo(t, "type"));
  else {
    var i = wf(e, ".") ? "property" : "argument";
    s = 'The "'.concat(e, '" ').concat(i, " ").concat(n, " ").concat(Jo(t, "type"));
  }
  return s += ". Received type ".concat(typeof r), s;
}, TypeError);
Pe("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
Pe("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
  return "The " + e + " method is not implemented";
});
Pe("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
Pe("ERR_STREAM_DESTROYED", function(e) {
  return "Cannot call " + e + " after a stream was destroyed";
});
Pe("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
Pe("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
Pe("ERR_STREAM_WRITE_AFTER_END", "write after end");
Pe("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
Pe("ERR_UNKNOWN_ENCODING", function(e) {
  return "Unknown encoding: " + e;
}, TypeError);
Pe("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
Ct.codes = Fc;
var vf = Ct.codes.ERR_INVALID_OPT_VALUE;
function Ef(e, t, r) {
  return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null;
}
function Sf(e, t, r, n) {
  var s = Ef(t, n, r);
  if (s != null) {
    if (!(isFinite(s) && Math.floor(s) === s) || s < 0) {
      var i = n ? r : "highWaterMark";
      throw new vf(i, s);
    }
    return Math.floor(s);
  }
  return e.objectMode ? 16 : 16 * 1024;
}
var Dc = {
  getHighWaterMark: Sf
}, Rf = Cf;
function Cf(e, t) {
  if (hi("noDeprecation"))
    return e;
  var r = !1;
  function n() {
    if (!r) {
      if (hi("throwDeprecation"))
        throw new Error(t);
      hi("traceDeprecation") ? console.trace(t) : console.warn(t), r = !0;
    }
    return e.apply(this, arguments);
  }
  return n;
}
function hi(e) {
  try {
    if (!D.localStorage) return !1;
  } catch {
    return !1;
  }
  var t = D.localStorage[e];
  return t == null ? !1 : String(t).toLowerCase() === "true";
}
var fi, Zo;
function jc() {
  if (Zo) return fi;
  Zo = 1, fi = B;
  function e(w) {
    var v = this;
    this.next = null, this.entry = null, this.finish = function() {
      te(v, w);
    };
  }
  var t;
  B.WritableState = T;
  var r = {
    deprecate: Rf
  }, n = $c, s = dn.Buffer, i = (typeof D < "u" ? D : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function o(w) {
    return s.from(w);
  }
  function a(w) {
    return s.isBuffer(w) || w instanceof i;
  }
  var c = Bc, l = Dc, u = l.getHighWaterMark, d = Ct.codes, h = d.ERR_INVALID_ARG_TYPE, b = d.ERR_METHOD_NOT_IMPLEMENTED, m = d.ERR_MULTIPLE_CALLBACK, R = d.ERR_STREAM_CANNOT_PIPE, E = d.ERR_STREAM_DESTROYED, g = d.ERR_STREAM_NULL_VALUES, y = d.ERR_STREAM_WRITE_AFTER_END, _ = d.ERR_UNKNOWN_ENCODING, C = c.errorOrDestroy;
  Fe(B, n);
  function S() {
  }
  function T(w, v, A) {
    t = t || qt(), w = w || {}, typeof A != "boolean" && (A = v instanceof t), this.objectMode = !!w.objectMode, A && (this.objectMode = this.objectMode || !!w.writableObjectMode), this.highWaterMark = u(this, w, "writableHighWaterMark", A), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var j = w.decodeStrings === !1;
    this.decodeStrings = !j, this.defaultEncoding = w.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(G) {
      $(v, G);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = w.emitClose !== !1, this.autoDestroy = !!w.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new e(this);
  }
  T.prototype.getBuffer = function() {
    for (var v = this.bufferedRequest, A = []; v; )
      A.push(v), v = v.next;
    return A;
  }, function() {
    try {
      Object.defineProperty(T.prototype, "buffer", {
        get: r.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {
    }
  }();
  var U;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (U = Function.prototype[Symbol.hasInstance], Object.defineProperty(B, Symbol.hasInstance, {
    value: function(v) {
      return U.call(this, v) ? !0 : this !== B ? !1 : v && v._writableState instanceof T;
    }
  })) : U = function(v) {
    return v instanceof this;
  };
  function B(w) {
    t = t || qt();
    var v = this instanceof t;
    if (!v && !U.call(B, this)) return new B(w);
    this._writableState = new T(w, this, v), this.writable = !0, w && (typeof w.write == "function" && (this._write = w.write), typeof w.writev == "function" && (this._writev = w.writev), typeof w.destroy == "function" && (this._destroy = w.destroy), typeof w.final == "function" && (this._final = w.final)), n.call(this);
  }
  B.prototype.pipe = function() {
    C(this, new R());
  };
  function P(w, v) {
    var A = new y();
    C(w, A), process.nextTick(v, A);
  }
  function Q(w, v, A, j) {
    var G;
    return A === null ? G = new g() : typeof A != "string" && !v.objectMode && (G = new h("chunk", ["string", "Buffer"], A)), G ? (C(w, G), process.nextTick(j, G), !1) : !0;
  }
  B.prototype.write = function(w, v, A) {
    var j = this._writableState, G = !1, f = !j.objectMode && a(w);
    return f && !s.isBuffer(w) && (w = o(w)), typeof v == "function" && (A = v, v = null), f ? v = "buffer" : v || (v = j.defaultEncoding), typeof A != "function" && (A = S), j.ending ? P(this, A) : (f || Q(this, j, w, A)) && (j.pendingcb++, G = ne(this, j, f, w, v, A)), G;
  }, B.prototype.cork = function() {
    this._writableState.corked++;
  }, B.prototype.uncork = function() {
    var w = this._writableState;
    w.corked && (w.corked--, !w.writing && !w.corked && !w.bufferProcessing && w.bufferedRequest && L(this, w));
  }, B.prototype.setDefaultEncoding = function(v) {
    if (typeof v == "string" && (v = v.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((v + "").toLowerCase()) > -1)) throw new _(v);
    return this._writableState.defaultEncoding = v, this;
  }, Object.defineProperty(B.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  function oe(w, v, A) {
    return !w.objectMode && w.decodeStrings !== !1 && typeof v == "string" && (v = s.from(v, A)), v;
  }
  Object.defineProperty(B.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  });
  function ne(w, v, A, j, G, f) {
    if (!A) {
      var p = oe(v, j, G);
      j !== p && (A = !0, G = "buffer", j = p);
    }
    var k = v.objectMode ? 1 : j.length;
    v.length += k;
    var x = v.length < v.highWaterMark;
    if (x || (v.needDrain = !0), v.writing || v.corked) {
      var ie = v.lastBufferedRequest;
      v.lastBufferedRequest = {
        chunk: j,
        encoding: G,
        isBuf: A,
        callback: f,
        next: null
      }, ie ? ie.next = v.lastBufferedRequest : v.bufferedRequest = v.lastBufferedRequest, v.bufferedRequestCount += 1;
    } else
      se(w, v, !1, k, j, G, f);
    return x;
  }
  function se(w, v, A, j, G, f, p) {
    v.writelen = j, v.writecb = p, v.writing = !0, v.sync = !0, v.destroyed ? v.onwrite(new E("write")) : A ? w._writev(G, v.onwrite) : w._write(G, f, v.onwrite), v.sync = !1;
  }
  function M(w, v, A, j, G) {
    --v.pendingcb, A ? (process.nextTick(G, j), process.nextTick(K, w, v), w._writableState.errorEmitted = !0, C(w, j)) : (G(j), w._writableState.errorEmitted = !0, C(w, j), K(w, v));
  }
  function I(w) {
    w.writing = !1, w.writecb = null, w.length -= w.writelen, w.writelen = 0;
  }
  function $(w, v) {
    var A = w._writableState, j = A.sync, G = A.writecb;
    if (typeof G != "function") throw new m();
    if (I(A), v) M(w, A, j, v, G);
    else {
      var f = H(A) || w.destroyed;
      !f && !A.corked && !A.bufferProcessing && A.bufferedRequest && L(w, A), j ? process.nextTick(N, w, A, f, G) : N(w, A, f, G);
    }
  }
  function N(w, v, A, j) {
    A || F(w, v), v.pendingcb--, j(), K(w, v);
  }
  function F(w, v) {
    v.length === 0 && v.needDrain && (v.needDrain = !1, w.emit("drain"));
  }
  function L(w, v) {
    v.bufferProcessing = !0;
    var A = v.bufferedRequest;
    if (w._writev && A && A.next) {
      var j = v.bufferedRequestCount, G = new Array(j), f = v.corkedRequestsFree;
      f.entry = A;
      for (var p = 0, k = !0; A; )
        G[p] = A, A.isBuf || (k = !1), A = A.next, p += 1;
      G.allBuffers = k, se(w, v, !0, v.length, G, "", f.finish), v.pendingcb++, v.lastBufferedRequest = null, f.next ? (v.corkedRequestsFree = f.next, f.next = null) : v.corkedRequestsFree = new e(v), v.bufferedRequestCount = 0;
    } else {
      for (; A; ) {
        var x = A.chunk, ie = A.encoding, q = A.callback, re = v.objectMode ? 1 : x.length;
        if (se(w, v, !1, re, x, ie, q), A = A.next, v.bufferedRequestCount--, v.writing)
          break;
      }
      A === null && (v.lastBufferedRequest = null);
    }
    v.bufferedRequest = A, v.bufferProcessing = !1;
  }
  B.prototype._write = function(w, v, A) {
    A(new b("_write()"));
  }, B.prototype._writev = null, B.prototype.end = function(w, v, A) {
    var j = this._writableState;
    return typeof w == "function" ? (A = w, w = null, v = null) : typeof v == "function" && (A = v, v = null), w != null && this.write(w, v), j.corked && (j.corked = 1, this.uncork()), j.ending || ue(this, j, A), this;
  }, Object.defineProperty(B.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.length;
    }
  });
  function H(w) {
    return w.ending && w.length === 0 && w.bufferedRequest === null && !w.finished && !w.writing;
  }
  function Z(w, v) {
    w._final(function(A) {
      v.pendingcb--, A && C(w, A), v.prefinished = !0, w.emit("prefinish"), K(w, v);
    });
  }
  function W(w, v) {
    !v.prefinished && !v.finalCalled && (typeof w._final == "function" && !v.destroyed ? (v.pendingcb++, v.finalCalled = !0, process.nextTick(Z, w, v)) : (v.prefinished = !0, w.emit("prefinish")));
  }
  function K(w, v) {
    var A = H(v);
    if (A && (W(w, v), v.pendingcb === 0 && (v.finished = !0, w.emit("finish"), v.autoDestroy))) {
      var j = w._readableState;
      (!j || j.autoDestroy && j.endEmitted) && w.destroy();
    }
    return A;
  }
  function ue(w, v, A) {
    v.ending = !0, K(w, v), A && (v.finished ? process.nextTick(A) : w.once("finish", A)), v.ended = !0, w.writable = !1;
  }
  function te(w, v, A) {
    var j = w.entry;
    for (w.entry = null; j; ) {
      var G = j.callback;
      v.pendingcb--, G(A), j = j.next;
    }
    v.corkedRequestsFree.next = w;
  }
  return Object.defineProperty(B.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    },
    set: function(v) {
      this._writableState && (this._writableState.destroyed = v);
    }
  }), B.prototype.destroy = c.destroy, B.prototype._undestroy = c.undestroy, B.prototype._destroy = function(w, v) {
    v(w);
  }, fi;
}
var pi, Ko;
function qt() {
  if (Ko) return pi;
  Ko = 1;
  var e = Object.keys || function(l) {
    var u = [];
    for (var d in l) u.push(d);
    return u;
  };
  pi = o;
  var t = Uc(), r = jc();
  Fe(o, t);
  for (var n = e(r.prototype), s = 0; s < n.length; s++) {
    var i = n[s];
    o.prototype[i] || (o.prototype[i] = r.prototype[i]);
  }
  function o(l) {
    if (!(this instanceof o)) return new o(l);
    t.call(this, l), r.call(this, l), this.allowHalfOpen = !0, l && (l.readable === !1 && (this.readable = !1), l.writable === !1 && (this.writable = !1), l.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", a)));
  }
  Object.defineProperty(o.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  }), Object.defineProperty(o.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState && this._writableState.getBuffer();
    }
  }), Object.defineProperty(o.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.length;
    }
  });
  function a() {
    this._writableState.ended || process.nextTick(c, this);
  }
  function c(l) {
    l.end();
  }
  return Object.defineProperty(o.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function(u) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = u, this._writableState.destroyed = u);
    }
  }), pi;
}
var gi = {}, Qo;
function Yo() {
  if (Qo) return gi;
  Qo = 1;
  var e = ut.Buffer, t = e.isEncoding || function(g) {
    switch (g = "" + g, g && g.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;
      default:
        return !1;
    }
  };
  function r(g) {
    if (!g) return "utf8";
    for (var y; ; )
      switch (g) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return g;
        default:
          if (y) return;
          g = ("" + g).toLowerCase(), y = !0;
      }
  }
  function n(g) {
    var y = r(g);
    if (typeof y != "string" && (e.isEncoding === t || !t(g))) throw new Error("Unknown encoding: " + g);
    return y || g;
  }
  gi.StringDecoder = s;
  function s(g) {
    this.encoding = n(g);
    var y;
    switch (this.encoding) {
      case "utf16le":
        this.text = d, this.end = h, y = 4;
        break;
      case "utf8":
        this.fillLast = c, y = 4;
        break;
      case "base64":
        this.text = b, this.end = m, y = 3;
        break;
      default:
        this.write = R, this.end = E;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = e.allocUnsafe(y);
  }
  s.prototype.write = function(g) {
    if (g.length === 0) return "";
    var y, _;
    if (this.lastNeed) {
      if (y = this.fillLast(g), y === void 0) return "";
      _ = this.lastNeed, this.lastNeed = 0;
    } else
      _ = 0;
    return _ < g.length ? y ? y + this.text(g, _) : this.text(g, _) : y || "";
  }, s.prototype.end = u, s.prototype.text = l, s.prototype.fillLast = function(g) {
    if (this.lastNeed <= g.length)
      return g.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    g.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, g.length), this.lastNeed -= g.length;
  };
  function i(g) {
    return g <= 127 ? 0 : g >> 5 === 6 ? 2 : g >> 4 === 14 ? 3 : g >> 3 === 30 ? 4 : g >> 6 === 2 ? -1 : -2;
  }
  function o(g, y, _) {
    var C = y.length - 1;
    if (C < _) return 0;
    var S = i(y[C]);
    return S >= 0 ? (S > 0 && (g.lastNeed = S - 1), S) : --C < _ || S === -2 ? 0 : (S = i(y[C]), S >= 0 ? (S > 0 && (g.lastNeed = S - 2), S) : --C < _ || S === -2 ? 0 : (S = i(y[C]), S >= 0 ? (S > 0 && (S === 2 ? S = 0 : g.lastNeed = S - 3), S) : 0));
  }
  function a(g, y, _) {
    if ((y[0] & 192) !== 128)
      return g.lastNeed = 0, "�";
    if (g.lastNeed > 1 && y.length > 1) {
      if ((y[1] & 192) !== 128)
        return g.lastNeed = 1, "�";
      if (g.lastNeed > 2 && y.length > 2 && (y[2] & 192) !== 128)
        return g.lastNeed = 2, "�";
    }
  }
  function c(g) {
    var y = this.lastTotal - this.lastNeed, _ = a(this, g);
    if (_ !== void 0) return _;
    if (this.lastNeed <= g.length)
      return g.copy(this.lastChar, y, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    g.copy(this.lastChar, y, 0, g.length), this.lastNeed -= g.length;
  }
  function l(g, y) {
    var _ = o(this, g, y);
    if (!this.lastNeed) return g.toString("utf8", y);
    this.lastTotal = _;
    var C = g.length - (_ - this.lastNeed);
    return g.copy(this.lastChar, 0, C), g.toString("utf8", y, C);
  }
  function u(g) {
    var y = g && g.length ? this.write(g) : "";
    return this.lastNeed ? y + "�" : y;
  }
  function d(g, y) {
    if ((g.length - y) % 2 === 0) {
      var _ = g.toString("utf16le", y);
      if (_) {
        var C = _.charCodeAt(_.length - 1);
        if (C >= 55296 && C <= 56319)
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = g[g.length - 2], this.lastChar[1] = g[g.length - 1], _.slice(0, -1);
      }
      return _;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = g[g.length - 1], g.toString("utf16le", y, g.length - 1);
  }
  function h(g) {
    var y = g && g.length ? this.write(g) : "";
    if (this.lastNeed) {
      var _ = this.lastTotal - this.lastNeed;
      return y + this.lastChar.toString("utf16le", 0, _);
    }
    return y;
  }
  function b(g, y) {
    var _ = (g.length - y) % 3;
    return _ === 0 ? g.toString("base64", y) : (this.lastNeed = 3 - _, this.lastTotal = 3, _ === 1 ? this.lastChar[0] = g[g.length - 1] : (this.lastChar[0] = g[g.length - 2], this.lastChar[1] = g[g.length - 1]), g.toString("base64", y, g.length - _));
  }
  function m(g) {
    var y = g && g.length ? this.write(g) : "";
    return this.lastNeed ? y + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : y;
  }
  function R(g) {
    return g.toString(this.encoding);
  }
  function E(g) {
    return g && g.length ? this.write(g) : "";
  }
  return gi;
}
var Xo = Ct.codes.ERR_STREAM_PREMATURE_CLOSE;
function kf(e) {
  var t = !1;
  return function() {
    if (!t) {
      t = !0;
      for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++)
        n[s] = arguments[s];
      e.apply(this, n);
    }
  };
}
function If() {
}
function Af(e) {
  return e.setHeader && typeof e.abort == "function";
}
function Hc(e, t, r) {
  if (typeof t == "function") return Hc(e, null, t);
  t || (t = {}), r = kf(r || If);
  var n = t.readable || t.readable !== !1 && e.readable, s = t.writable || t.writable !== !1 && e.writable, i = function() {
    e.writable || a();
  }, o = e._writableState && e._writableState.finished, a = function() {
    s = !1, o = !0, n || r.call(e);
  }, c = e._readableState && e._readableState.endEmitted, l = function() {
    n = !1, c = !0, s || r.call(e);
  }, u = function(m) {
    r.call(e, m);
  }, d = function() {
    var m;
    if (n && !c)
      return (!e._readableState || !e._readableState.ended) && (m = new Xo()), r.call(e, m);
    if (s && !o)
      return (!e._writableState || !e._writableState.ended) && (m = new Xo()), r.call(e, m);
  }, h = function() {
    e.req.on("finish", a);
  };
  return Af(e) ? (e.on("complete", a), e.on("abort", d), e.req ? h() : e.on("request", h)) : s && !e._writableState && (e.on("end", i), e.on("close", i)), e.on("end", l), e.on("finish", a), t.error !== !1 && e.on("error", u), e.on("close", d), function() {
    e.removeListener("complete", a), e.removeListener("abort", d), e.removeListener("request", h), e.req && e.req.removeListener("finish", a), e.removeListener("end", i), e.removeListener("close", i), e.removeListener("finish", a), e.removeListener("end", l), e.removeListener("error", u), e.removeListener("close", d);
  };
}
var Yi = Hc, bi, ea;
function Tf() {
  if (ea) return bi;
  ea = 1;
  var e;
  function t(_, C, S) {
    return C = r(C), C in _ ? Object.defineProperty(_, C, { value: S, enumerable: !0, configurable: !0, writable: !0 }) : _[C] = S, _;
  }
  function r(_) {
    var C = n(_, "string");
    return typeof C == "symbol" ? C : String(C);
  }
  function n(_, C) {
    if (typeof _ != "object" || _ === null) return _;
    var S = _[Symbol.toPrimitive];
    if (S !== void 0) {
      var T = S.call(_, C || "default");
      if (typeof T != "object") return T;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (C === "string" ? String : Number)(_);
  }
  var s = Yi, i = Symbol("lastResolve"), o = Symbol("lastReject"), a = Symbol("error"), c = Symbol("ended"), l = Symbol("lastPromise"), u = Symbol("handlePromise"), d = Symbol("stream");
  function h(_, C) {
    return {
      value: _,
      done: C
    };
  }
  function b(_) {
    var C = _[i];
    if (C !== null) {
      var S = _[d].read();
      S !== null && (_[l] = null, _[i] = null, _[o] = null, C(h(S, !1)));
    }
  }
  function m(_) {
    process.nextTick(b, _);
  }
  function R(_, C) {
    return function(S, T) {
      _.then(function() {
        if (C[c]) {
          S(h(void 0, !0));
          return;
        }
        C[u](S, T);
      }, T);
    };
  }
  var E = Object.getPrototypeOf(function() {
  }), g = Object.setPrototypeOf((e = {
    get stream() {
      return this[d];
    },
    next: function() {
      var C = this, S = this[a];
      if (S !== null)
        return Promise.reject(S);
      if (this[c])
        return Promise.resolve(h(void 0, !0));
      if (this[d].destroyed)
        return new Promise(function(P, Q) {
          process.nextTick(function() {
            C[a] ? Q(C[a]) : P(h(void 0, !0));
          });
        });
      var T = this[l], U;
      if (T)
        U = new Promise(R(T, this));
      else {
        var B = this[d].read();
        if (B !== null)
          return Promise.resolve(h(B, !1));
        U = new Promise(this[u]);
      }
      return this[l] = U, U;
    }
  }, t(e, Symbol.asyncIterator, function() {
    return this;
  }), t(e, "return", function() {
    var C = this;
    return new Promise(function(S, T) {
      C[d].destroy(null, function(U) {
        if (U) {
          T(U);
          return;
        }
        S(h(void 0, !0));
      });
    });
  }), e), E), y = function(C) {
    var S, T = Object.create(g, (S = {}, t(S, d, {
      value: C,
      writable: !0
    }), t(S, i, {
      value: null,
      writable: !0
    }), t(S, o, {
      value: null,
      writable: !0
    }), t(S, a, {
      value: null,
      writable: !0
    }), t(S, c, {
      value: C._readableState.endEmitted,
      writable: !0
    }), t(S, u, {
      value: function(B, P) {
        var Q = T[d].read();
        Q ? (T[l] = null, T[i] = null, T[o] = null, B(h(Q, !1))) : (T[i] = B, T[o] = P);
      },
      writable: !0
    }), S));
    return T[l] = null, s(C, function(U) {
      if (U && U.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var B = T[o];
        B !== null && (T[l] = null, T[i] = null, T[o] = null, B(U)), T[a] = U;
        return;
      }
      var P = T[i];
      P !== null && (T[l] = null, T[i] = null, T[o] = null, P(h(void 0, !0))), T[c] = !0;
    }), C.on("readable", m.bind(null, T)), T;
  };
  return bi = y, bi;
}
var mi, ta;
function Mf() {
  return ta || (ta = 1, mi = function() {
    throw new Error("Readable.from is not available in the browser");
  }), mi;
}
var _i, ra;
function Uc() {
  if (ra) return _i;
  ra = 1, _i = P;
  var e;
  P.ReadableState = B, hn.EventEmitter;
  var t = function(p, k) {
    return p.listeners(k).length;
  }, r = $c, n = dn.Buffer, s = (typeof D < "u" ? D : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function i(f) {
    return n.from(f);
  }
  function o(f) {
    return n.isBuffer(f) || f instanceof s;
  }
  var a = sc, c;
  a && a.debuglog ? c = a.debuglog("stream") : c = function() {
  };
  var l = ff(), u = Bc, d = Dc, h = d.getHighWaterMark, b = Ct.codes, m = b.ERR_INVALID_ARG_TYPE, R = b.ERR_STREAM_PUSH_AFTER_EOF, E = b.ERR_METHOD_NOT_IMPLEMENTED, g = b.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, y, _, C;
  Fe(P, r);
  var S = u.errorOrDestroy, T = ["error", "close", "destroy", "pause", "resume"];
  function U(f, p, k) {
    if (typeof f.prependListener == "function") return f.prependListener(p, k);
    !f._events || !f._events[p] ? f.on(p, k) : Array.isArray(f._events[p]) ? f._events[p].unshift(k) : f._events[p] = [k, f._events[p]];
  }
  function B(f, p, k) {
    e = e || qt(), f = f || {}, typeof k != "boolean" && (k = p instanceof e), this.objectMode = !!f.objectMode, k && (this.objectMode = this.objectMode || !!f.readableObjectMode), this.highWaterMark = h(this, f, "readableHighWaterMark", k), this.buffer = new l(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = f.emitClose !== !1, this.autoDestroy = !!f.autoDestroy, this.destroyed = !1, this.defaultEncoding = f.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, f.encoding && (y || (y = Yo().StringDecoder), this.decoder = new y(f.encoding), this.encoding = f.encoding);
  }
  function P(f) {
    if (e = e || qt(), !(this instanceof P)) return new P(f);
    var p = this instanceof e;
    this._readableState = new B(f, this, p), this.readable = !0, f && (typeof f.read == "function" && (this._read = f.read), typeof f.destroy == "function" && (this._destroy = f.destroy)), r.call(this);
  }
  Object.defineProperty(P.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function(p) {
      this._readableState && (this._readableState.destroyed = p);
    }
  }), P.prototype.destroy = u.destroy, P.prototype._undestroy = u.undestroy, P.prototype._destroy = function(f, p) {
    p(f);
  }, P.prototype.push = function(f, p) {
    var k = this._readableState, x;
    return k.objectMode ? x = !0 : typeof f == "string" && (p = p || k.defaultEncoding, p !== k.encoding && (f = n.from(f, p), p = ""), x = !0), Q(this, f, p, !1, x);
  }, P.prototype.unshift = function(f) {
    return Q(this, f, null, !0, !1);
  };
  function Q(f, p, k, x, ie) {
    c("readableAddChunk", p);
    var q = f._readableState;
    if (p === null)
      q.reading = !1, $(f, q);
    else {
      var re;
      if (ie || (re = ne(q, p)), re)
        S(f, re);
      else if (q.objectMode || p && p.length > 0)
        if (typeof p != "string" && !q.objectMode && Object.getPrototypeOf(p) !== n.prototype && (p = i(p)), x)
          q.endEmitted ? S(f, new g()) : oe(f, q, p, !0);
        else if (q.ended)
          S(f, new R());
        else {
          if (q.destroyed)
            return !1;
          q.reading = !1, q.decoder && !k ? (p = q.decoder.write(p), q.objectMode || p.length !== 0 ? oe(f, q, p, !1) : L(f, q)) : oe(f, q, p, !1);
        }
      else x || (q.reading = !1, L(f, q));
    }
    return !q.ended && (q.length < q.highWaterMark || q.length === 0);
  }
  function oe(f, p, k, x) {
    p.flowing && p.length === 0 && !p.sync ? (p.awaitDrain = 0, f.emit("data", k)) : (p.length += p.objectMode ? 1 : k.length, x ? p.buffer.unshift(k) : p.buffer.push(k), p.needReadable && N(f)), L(f, p);
  }
  function ne(f, p) {
    var k;
    return !o(p) && typeof p != "string" && p !== void 0 && !f.objectMode && (k = new m("chunk", ["string", "Buffer", "Uint8Array"], p)), k;
  }
  P.prototype.isPaused = function() {
    return this._readableState.flowing === !1;
  }, P.prototype.setEncoding = function(f) {
    y || (y = Yo().StringDecoder);
    var p = new y(f);
    this._readableState.decoder = p, this._readableState.encoding = this._readableState.decoder.encoding;
    for (var k = this._readableState.buffer.head, x = ""; k !== null; )
      x += p.write(k.data), k = k.next;
    return this._readableState.buffer.clear(), x !== "" && this._readableState.buffer.push(x), this._readableState.length = x.length, this;
  };
  var se = 1073741824;
  function M(f) {
    return f >= se ? f = se : (f--, f |= f >>> 1, f |= f >>> 2, f |= f >>> 4, f |= f >>> 8, f |= f >>> 16, f++), f;
  }
  function I(f, p) {
    return f <= 0 || p.length === 0 && p.ended ? 0 : p.objectMode ? 1 : f !== f ? p.flowing && p.length ? p.buffer.head.data.length : p.length : (f > p.highWaterMark && (p.highWaterMark = M(f)), f <= p.length ? f : p.ended ? p.length : (p.needReadable = !0, 0));
  }
  P.prototype.read = function(f) {
    c("read", f), f = parseInt(f, 10);
    var p = this._readableState, k = f;
    if (f !== 0 && (p.emittedReadable = !1), f === 0 && p.needReadable && ((p.highWaterMark !== 0 ? p.length >= p.highWaterMark : p.length > 0) || p.ended))
      return c("read: emitReadable", p.length, p.ended), p.length === 0 && p.ended ? A(this) : N(this), null;
    if (f = I(f, p), f === 0 && p.ended)
      return p.length === 0 && A(this), null;
    var x = p.needReadable;
    c("need readable", x), (p.length === 0 || p.length - f < p.highWaterMark) && (x = !0, c("length less than watermark", x)), p.ended || p.reading ? (x = !1, c("reading or ended", x)) : x && (c("do read"), p.reading = !0, p.sync = !0, p.length === 0 && (p.needReadable = !0), this._read(p.highWaterMark), p.sync = !1, p.reading || (f = I(k, p)));
    var ie;
    return f > 0 ? ie = v(f, p) : ie = null, ie === null ? (p.needReadable = p.length <= p.highWaterMark, f = 0) : (p.length -= f, p.awaitDrain = 0), p.length === 0 && (p.ended || (p.needReadable = !0), k !== f && p.ended && A(this)), ie !== null && this.emit("data", ie), ie;
  };
  function $(f, p) {
    if (c("onEofChunk"), !p.ended) {
      if (p.decoder) {
        var k = p.decoder.end();
        k && k.length && (p.buffer.push(k), p.length += p.objectMode ? 1 : k.length);
      }
      p.ended = !0, p.sync ? N(f) : (p.needReadable = !1, p.emittedReadable || (p.emittedReadable = !0, F(f)));
    }
  }
  function N(f) {
    var p = f._readableState;
    c("emitReadable", p.needReadable, p.emittedReadable), p.needReadable = !1, p.emittedReadable || (c("emitReadable", p.flowing), p.emittedReadable = !0, process.nextTick(F, f));
  }
  function F(f) {
    var p = f._readableState;
    c("emitReadable_", p.destroyed, p.length, p.ended), !p.destroyed && (p.length || p.ended) && (f.emit("readable"), p.emittedReadable = !1), p.needReadable = !p.flowing && !p.ended && p.length <= p.highWaterMark, w(f);
  }
  function L(f, p) {
    p.readingMore || (p.readingMore = !0, process.nextTick(H, f, p));
  }
  function H(f, p) {
    for (; !p.reading && !p.ended && (p.length < p.highWaterMark || p.flowing && p.length === 0); ) {
      var k = p.length;
      if (c("maybeReadMore read 0"), f.read(0), k === p.length)
        break;
    }
    p.readingMore = !1;
  }
  P.prototype._read = function(f) {
    S(this, new E("_read()"));
  }, P.prototype.pipe = function(f, p) {
    var k = this, x = this._readableState;
    switch (x.pipesCount) {
      case 0:
        x.pipes = f;
        break;
      case 1:
        x.pipes = [x.pipes, f];
        break;
      default:
        x.pipes.push(f);
        break;
    }
    x.pipesCount += 1, c("pipe count=%d opts=%j", x.pipesCount, p);
    var ie = (!p || p.end !== !1) && f !== process.stdout && f !== process.stderr, q = ie ? Qe : nt;
    x.endEmitted ? process.nextTick(q) : k.once("end", q), f.on("unpipe", re);
    function re(Ye, He) {
      c("onunpipe"), Ye === k && He && He.hasUnpiped === !1 && (He.hasUnpiped = !0, Ur());
    }
    function Qe() {
      c("onend"), f.end();
    }
    var dt = Z(k);
    f.on("drain", dt);
    var or = !1;
    function Ur() {
      c("cleanup"), f.removeListener("close", Tt), f.removeListener("finish", Mt), f.removeListener("drain", dt), f.removeListener("error", At), f.removeListener("unpipe", re), k.removeListener("end", Qe), k.removeListener("end", nt), k.removeListener("data", ar), or = !0, x.awaitDrain && (!f._writableState || f._writableState.needDrain) && dt();
    }
    k.on("data", ar);
    function ar(Ye) {
      c("ondata");
      var He = f.write(Ye);
      c("dest.write", He), He === !1 && ((x.pipesCount === 1 && x.pipes === f || x.pipesCount > 1 && G(x.pipes, f) !== -1) && !or && (c("false write response, pause", x.awaitDrain), x.awaitDrain++), k.pause());
    }
    function At(Ye) {
      c("onerror", Ye), nt(), f.removeListener("error", At), t(f, "error") === 0 && S(f, Ye);
    }
    U(f, "error", At);
    function Tt() {
      f.removeListener("finish", Mt), nt();
    }
    f.once("close", Tt);
    function Mt() {
      c("onfinish"), f.removeListener("close", Tt), nt();
    }
    f.once("finish", Mt);
    function nt() {
      c("unpipe"), k.unpipe(f);
    }
    return f.emit("pipe", k), x.flowing || (c("pipe resume"), k.resume()), f;
  };
  function Z(f) {
    return function() {
      var k = f._readableState;
      c("pipeOnDrain", k.awaitDrain), k.awaitDrain && k.awaitDrain--, k.awaitDrain === 0 && t(f, "data") && (k.flowing = !0, w(f));
    };
  }
  P.prototype.unpipe = function(f) {
    var p = this._readableState, k = {
      hasUnpiped: !1
    };
    if (p.pipesCount === 0) return this;
    if (p.pipesCount === 1)
      return f && f !== p.pipes ? this : (f || (f = p.pipes), p.pipes = null, p.pipesCount = 0, p.flowing = !1, f && f.emit("unpipe", this, k), this);
    if (!f) {
      var x = p.pipes, ie = p.pipesCount;
      p.pipes = null, p.pipesCount = 0, p.flowing = !1;
      for (var q = 0; q < ie; q++) x[q].emit("unpipe", this, {
        hasUnpiped: !1
      });
      return this;
    }
    var re = G(p.pipes, f);
    return re === -1 ? this : (p.pipes.splice(re, 1), p.pipesCount -= 1, p.pipesCount === 1 && (p.pipes = p.pipes[0]), f.emit("unpipe", this, k), this);
  }, P.prototype.on = function(f, p) {
    var k = r.prototype.on.call(this, f, p), x = this._readableState;
    return f === "data" ? (x.readableListening = this.listenerCount("readable") > 0, x.flowing !== !1 && this.resume()) : f === "readable" && !x.endEmitted && !x.readableListening && (x.readableListening = x.needReadable = !0, x.flowing = !1, x.emittedReadable = !1, c("on readable", x.length, x.reading), x.length ? N(this) : x.reading || process.nextTick(K, this)), k;
  }, P.prototype.addListener = P.prototype.on, P.prototype.removeListener = function(f, p) {
    var k = r.prototype.removeListener.call(this, f, p);
    return f === "readable" && process.nextTick(W, this), k;
  }, P.prototype.removeAllListeners = function(f) {
    var p = r.prototype.removeAllListeners.apply(this, arguments);
    return (f === "readable" || f === void 0) && process.nextTick(W, this), p;
  };
  function W(f) {
    var p = f._readableState;
    p.readableListening = f.listenerCount("readable") > 0, p.resumeScheduled && !p.paused ? p.flowing = !0 : f.listenerCount("data") > 0 && f.resume();
  }
  function K(f) {
    c("readable nexttick read 0"), f.read(0);
  }
  P.prototype.resume = function() {
    var f = this._readableState;
    return f.flowing || (c("resume"), f.flowing = !f.readableListening, ue(this, f)), f.paused = !1, this;
  };
  function ue(f, p) {
    p.resumeScheduled || (p.resumeScheduled = !0, process.nextTick(te, f, p));
  }
  function te(f, p) {
    c("resume", p.reading), p.reading || f.read(0), p.resumeScheduled = !1, f.emit("resume"), w(f), p.flowing && !p.reading && f.read(0);
  }
  P.prototype.pause = function() {
    return c("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (c("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this;
  };
  function w(f) {
    var p = f._readableState;
    for (c("flow", p.flowing); p.flowing && f.read() !== null; ) ;
  }
  P.prototype.wrap = function(f) {
    var p = this, k = this._readableState, x = !1;
    f.on("end", function() {
      if (c("wrapped end"), k.decoder && !k.ended) {
        var re = k.decoder.end();
        re && re.length && p.push(re);
      }
      p.push(null);
    }), f.on("data", function(re) {
      if (c("wrapped data"), k.decoder && (re = k.decoder.write(re)), !(k.objectMode && re == null) && !(!k.objectMode && (!re || !re.length))) {
        var Qe = p.push(re);
        Qe || (x = !0, f.pause());
      }
    });
    for (var ie in f)
      this[ie] === void 0 && typeof f[ie] == "function" && (this[ie] = /* @__PURE__ */ function(Qe) {
        return function() {
          return f[Qe].apply(f, arguments);
        };
      }(ie));
    for (var q = 0; q < T.length; q++)
      f.on(T[q], this.emit.bind(this, T[q]));
    return this._read = function(re) {
      c("wrapped _read", re), x && (x = !1, f.resume());
    }, this;
  }, typeof Symbol == "function" && (P.prototype[Symbol.asyncIterator] = function() {
    return _ === void 0 && (_ = Tf()), _(this);
  }), Object.defineProperty(P.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.highWaterMark;
    }
  }), Object.defineProperty(P.prototype, "readableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState && this._readableState.buffer;
    }
  }), Object.defineProperty(P.prototype, "readableFlowing", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.flowing;
    },
    set: function(p) {
      this._readableState && (this._readableState.flowing = p);
    }
  }), P._fromList = v, Object.defineProperty(P.prototype, "readableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.length;
    }
  });
  function v(f, p) {
    if (p.length === 0) return null;
    var k;
    return p.objectMode ? k = p.buffer.shift() : !f || f >= p.length ? (p.decoder ? k = p.buffer.join("") : p.buffer.length === 1 ? k = p.buffer.first() : k = p.buffer.concat(p.length), p.buffer.clear()) : k = p.buffer.consume(f, p.decoder), k;
  }
  function A(f) {
    var p = f._readableState;
    c("endReadable", p.endEmitted), p.endEmitted || (p.ended = !0, process.nextTick(j, p, f));
  }
  function j(f, p) {
    if (c("endReadableNT", f.endEmitted, f.length), !f.endEmitted && f.length === 0 && (f.endEmitted = !0, p.readable = !1, p.emit("end"), f.autoDestroy)) {
      var k = p._writableState;
      (!k || k.autoDestroy && k.finished) && p.destroy();
    }
  }
  typeof Symbol == "function" && (P.from = function(f, p) {
    return C === void 0 && (C = Mf()), C(P, f, p);
  });
  function G(f, p) {
    for (var k = 0, x = f.length; k < x; k++)
      if (f[k] === p) return k;
    return -1;
  }
  return _i;
}
var Wc = rt, Dn = Ct.codes, xf = Dn.ERR_METHOD_NOT_IMPLEMENTED, Nf = Dn.ERR_MULTIPLE_CALLBACK, Lf = Dn.ERR_TRANSFORM_ALREADY_TRANSFORMING, Of = Dn.ERR_TRANSFORM_WITH_LENGTH_0, jn = qt();
Fe(rt, jn);
function Pf(e, t) {
  var r = this._transformState;
  r.transforming = !1;
  var n = r.writecb;
  if (n === null)
    return this.emit("error", new Nf());
  r.writechunk = null, r.writecb = null, t != null && this.push(t), n(e);
  var s = this._readableState;
  s.reading = !1, (s.needReadable || s.length < s.highWaterMark) && this._read(s.highWaterMark);
}
function rt(e) {
  if (!(this instanceof rt)) return new rt(e);
  jn.call(this, e), this._transformState = {
    afterTransform: Pf.bind(this),
    needTransform: !1,
    transforming: !1,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", $f);
}
function $f() {
  var e = this;
  typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(t, r) {
    na(e, t, r);
  }) : na(this, null, null);
}
rt.prototype.push = function(e, t) {
  return this._transformState.needTransform = !1, jn.prototype.push.call(this, e, t);
};
rt.prototype._transform = function(e, t, r) {
  r(new xf("_transform()"));
};
rt.prototype._write = function(e, t, r) {
  var n = this._transformState;
  if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
    var s = this._readableState;
    (n.needTransform || s.needReadable || s.length < s.highWaterMark) && this._read(s.highWaterMark);
  }
};
rt.prototype._read = function(e) {
  var t = this._transformState;
  t.writechunk !== null && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0;
};
rt.prototype._destroy = function(e, t) {
  jn.prototype._destroy.call(this, e, function(r) {
    t(r);
  });
};
function na(e, t, r) {
  if (t) return e.emit("error", t);
  if (r != null && e.push(r), e._writableState.length) throw new Of();
  if (e._transformState.transforming) throw new Lf();
  return e.push(null);
}
var Bf = pr, Vc = Wc;
Fe(pr, Vc);
function pr(e) {
  if (!(this instanceof pr)) return new pr(e);
  Vc.call(this, e);
}
pr.prototype._transform = function(e, t, r) {
  r(null, e);
};
var yi;
function Ff(e) {
  var t = !1;
  return function() {
    t || (t = !0, e.apply(void 0, arguments));
  };
}
var zc = Ct.codes, Df = zc.ERR_MISSING_ARGS, jf = zc.ERR_STREAM_DESTROYED;
function sa(e) {
  if (e) throw e;
}
function Hf(e) {
  return e.setHeader && typeof e.abort == "function";
}
function Uf(e, t, r, n) {
  n = Ff(n);
  var s = !1;
  e.on("close", function() {
    s = !0;
  }), yi === void 0 && (yi = Yi), yi(e, {
    readable: t,
    writable: r
  }, function(o) {
    if (o) return n(o);
    s = !0, n();
  });
  var i = !1;
  return function(o) {
    if (!s && !i) {
      if (i = !0, Hf(e)) return e.abort();
      if (typeof e.destroy == "function") return e.destroy();
      n(o || new jf("pipe"));
    }
  };
}
function ia(e) {
  e();
}
function Wf(e, t) {
  return e.pipe(t);
}
function Vf(e) {
  return !e.length || typeof e[e.length - 1] != "function" ? sa : e.pop();
}
function zf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Vf(t);
  if (Array.isArray(t[0]) && (t = t[0]), t.length < 2)
    throw new Df("streams");
  var s, i = t.map(function(o, a) {
    var c = a < t.length - 1, l = a > 0;
    return Uf(o, c, l, function(u) {
      s || (s = u), u && i.forEach(ia), !c && (i.forEach(ia), n(s));
    });
  });
  return t.reduce(Wf);
}
var qf = zf;
(function(e, t) {
  t = e.exports = Uc(), t.Stream = t, t.Readable = t, t.Writable = jc(), t.Duplex = qt(), t.Transform = Wc, t.PassThrough = Bf, t.finished = Yi, t.pipeline = qf;
})(Li, Li.exports);
var qc = Li.exports;
const { Transform: Gf } = qc;
var Jf = (e) => class Gc extends Gf {
  constructor(r, n, s, i, o) {
    super(o), this._rate = r, this._capacity = n, this._delimitedSuffix = s, this._hashBitLength = i, this._options = o, this._state = new e(), this._state.initialize(r, n), this._finalized = !1;
  }
  _transform(r, n, s) {
    let i = null;
    try {
      this.update(r, n);
    } catch (o) {
      i = o;
    }
    s(i);
  }
  _flush(r) {
    let n = null;
    try {
      this.push(this.digest());
    } catch (s) {
      n = s;
    }
    r(n);
  }
  update(r, n) {
    if (!Buffer.isBuffer(r) && typeof r != "string") throw new TypeError("Data must be a string or a buffer");
    if (this._finalized) throw new Error("Digest already called");
    return Buffer.isBuffer(r) || (r = Buffer.from(r, n)), this._state.absorb(r), this;
  }
  digest(r) {
    if (this._finalized) throw new Error("Digest already called");
    this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
    let n = this._state.squeeze(this._hashBitLength / 8);
    return r !== void 0 && (n = n.toString(r)), this._resetState(), n;
  }
  // remove result from memory
  _resetState() {
    return this._state.initialize(this._rate, this._capacity), this;
  }
  // because sometimes we need hash right now and little later
  _clone() {
    const r = new Gc(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
    return this._state.copy(r._state), r._finalized = this._finalized, r;
  }
};
const { Transform: Zf } = qc;
var Kf = (e) => class Jc extends Zf {
  constructor(r, n, s, i) {
    super(i), this._rate = r, this._capacity = n, this._delimitedSuffix = s, this._options = i, this._state = new e(), this._state.initialize(r, n), this._finalized = !1;
  }
  _transform(r, n, s) {
    let i = null;
    try {
      this.update(r, n);
    } catch (o) {
      i = o;
    }
    s(i);
  }
  _flush() {
  }
  _read(r) {
    this.push(this.squeeze(r));
  }
  update(r, n) {
    if (!Buffer.isBuffer(r) && typeof r != "string") throw new TypeError("Data must be a string or a buffer");
    if (this._finalized) throw new Error("Squeeze already called");
    return Buffer.isBuffer(r) || (r = Buffer.from(r, n)), this._state.absorb(r), this;
  }
  squeeze(r, n) {
    this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));
    let s = this._state.squeeze(r);
    return n !== void 0 && (s = s.toString(n)), s;
  }
  _resetState() {
    return this._state.initialize(this._rate, this._capacity), this;
  }
  _clone() {
    const r = new Jc(this._rate, this._capacity, this._delimitedSuffix, this._options);
    return this._state.copy(r._state), r._finalized = this._finalized, r;
  }
};
const Qf = Jf, Yf = Kf;
var Xf = function(e) {
  const t = Qf(e), r = Yf(e);
  return function(n, s) {
    switch (typeof n == "string" ? n.toLowerCase() : n) {
      case "keccak224":
        return new t(1152, 448, null, 224, s);
      case "keccak256":
        return new t(1088, 512, null, 256, s);
      case "keccak384":
        return new t(832, 768, null, 384, s);
      case "keccak512":
        return new t(576, 1024, null, 512, s);
      case "sha3-224":
        return new t(1152, 448, 6, 224, s);
      case "sha3-256":
        return new t(1088, 512, 6, 256, s);
      case "sha3-384":
        return new t(832, 768, 6, 384, s);
      case "sha3-512":
        return new t(576, 1024, 6, 512, s);
      case "shake128":
        return new r(1344, 256, 31, s);
      case "shake256":
        return new r(1088, 512, 31, s);
      default:
        throw new Error("Invald algorithm: " + n);
    }
  };
}, Zc = {};
const oa = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
Zc.p1600 = function(e) {
  for (let t = 0; t < 24; ++t) {
    const r = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], n = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], i = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], o = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], a = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], c = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], l = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], u = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48], d = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
    let h = u ^ (s << 1 | i >>> 31), b = d ^ (i << 1 | s >>> 31);
    const m = e[0] ^ h, R = e[1] ^ b, E = e[10] ^ h, g = e[11] ^ b, y = e[20] ^ h, _ = e[21] ^ b, C = e[30] ^ h, S = e[31] ^ b, T = e[40] ^ h, U = e[41] ^ b;
    h = r ^ (o << 1 | a >>> 31), b = n ^ (a << 1 | o >>> 31);
    const B = e[2] ^ h, P = e[3] ^ b, Q = e[12] ^ h, oe = e[13] ^ b, ne = e[22] ^ h, se = e[23] ^ b, M = e[32] ^ h, I = e[33] ^ b, $ = e[42] ^ h, N = e[43] ^ b;
    h = s ^ (c << 1 | l >>> 31), b = i ^ (l << 1 | c >>> 31);
    const F = e[4] ^ h, L = e[5] ^ b, H = e[14] ^ h, Z = e[15] ^ b, W = e[24] ^ h, K = e[25] ^ b, ue = e[34] ^ h, te = e[35] ^ b, w = e[44] ^ h, v = e[45] ^ b;
    h = o ^ (u << 1 | d >>> 31), b = a ^ (d << 1 | u >>> 31);
    const A = e[6] ^ h, j = e[7] ^ b, G = e[16] ^ h, f = e[17] ^ b, p = e[26] ^ h, k = e[27] ^ b, x = e[36] ^ h, ie = e[37] ^ b, q = e[46] ^ h, re = e[47] ^ b;
    h = c ^ (r << 1 | n >>> 31), b = l ^ (n << 1 | r >>> 31);
    const Qe = e[8] ^ h, dt = e[9] ^ b, or = e[18] ^ h, Ur = e[19] ^ b, ar = e[28] ^ h, At = e[29] ^ b, Tt = e[38] ^ h, Mt = e[39] ^ b, nt = e[48] ^ h, Ye = e[49] ^ b, He = m, ls = R, us = g << 4 | E >>> 28, ds = E << 4 | g >>> 28, hs = y << 3 | _ >>> 29, fs = _ << 3 | y >>> 29, ps = S << 9 | C >>> 23, gs = C << 9 | S >>> 23, bs = T << 18 | U >>> 14, ms = U << 18 | T >>> 14, _s = B << 1 | P >>> 31, ys = P << 1 | B >>> 31, ws = oe << 12 | Q >>> 20, vs = Q << 12 | oe >>> 20, Es = ne << 10 | se >>> 22, Ss = se << 10 | ne >>> 22, Rs = I << 13 | M >>> 19, Cs = M << 13 | I >>> 19, ks = $ << 2 | N >>> 30, Is = N << 2 | $ >>> 30, As = L << 30 | F >>> 2, Ts = F << 30 | L >>> 2, Ms = H << 6 | Z >>> 26, xs = Z << 6 | H >>> 26, Ns = K << 11 | W >>> 21, Ls = W << 11 | K >>> 21, Os = ue << 15 | te >>> 17, Ps = te << 15 | ue >>> 17, $s = v << 29 | w >>> 3, Bs = w << 29 | v >>> 3, Fs = A << 28 | j >>> 4, Ds = j << 28 | A >>> 4, js = f << 23 | G >>> 9, Hs = G << 23 | f >>> 9, Us = p << 25 | k >>> 7, Ws = k << 25 | p >>> 7, Vs = x << 21 | ie >>> 11, zs = ie << 21 | x >>> 11, qs = re << 24 | q >>> 8, Gs = q << 24 | re >>> 8, Js = Qe << 27 | dt >>> 5, Zs = dt << 27 | Qe >>> 5, Ks = or << 20 | Ur >>> 12, Qs = Ur << 20 | or >>> 12, Ys = At << 7 | ar >>> 25, Xs = ar << 7 | At >>> 25, ei = Tt << 8 | Mt >>> 24, ti = Mt << 8 | Tt >>> 24, ri = nt << 14 | Ye >>> 18, ni = Ye << 14 | nt >>> 18;
    e[0] = He ^ ~ws & Ns, e[1] = ls ^ ~vs & Ls, e[10] = Fs ^ ~Ks & hs, e[11] = Ds ^ ~Qs & fs, e[20] = _s ^ ~Ms & Us, e[21] = ys ^ ~xs & Ws, e[30] = Js ^ ~us & Es, e[31] = Zs ^ ~ds & Ss, e[40] = As ^ ~js & Ys, e[41] = Ts ^ ~Hs & Xs, e[2] = ws ^ ~Ns & Vs, e[3] = vs ^ ~Ls & zs, e[12] = Ks ^ ~hs & Rs, e[13] = Qs ^ ~fs & Cs, e[22] = Ms ^ ~Us & ei, e[23] = xs ^ ~Ws & ti, e[32] = us ^ ~Es & Os, e[33] = ds ^ ~Ss & Ps, e[42] = js ^ ~Ys & ps, e[43] = Hs ^ ~Xs & gs, e[4] = Ns ^ ~Vs & ri, e[5] = Ls ^ ~zs & ni, e[14] = hs ^ ~Rs & $s, e[15] = fs ^ ~Cs & Bs, e[24] = Us ^ ~ei & bs, e[25] = Ws ^ ~ti & ms, e[34] = Es ^ ~Os & qs, e[35] = Ss ^ ~Ps & Gs, e[44] = Ys ^ ~ps & ks, e[45] = Xs ^ ~gs & Is, e[6] = Vs ^ ~ri & He, e[7] = zs ^ ~ni & ls, e[16] = Rs ^ ~$s & Fs, e[17] = Cs ^ ~Bs & Ds, e[26] = ei ^ ~bs & _s, e[27] = ti ^ ~ms & ys, e[36] = Os ^ ~qs & Js, e[37] = Ps ^ ~Gs & Zs, e[46] = ps ^ ~ks & As, e[47] = gs ^ ~Is & Ts, e[8] = ri ^ ~He & ws, e[9] = ni ^ ~ls & vs, e[18] = $s ^ ~Fs & Ks, e[19] = Bs ^ ~Ds & Qs, e[28] = bs ^ ~_s & Ms, e[29] = ms ^ ~ys & xs, e[38] = qs ^ ~Js & us, e[39] = Gs ^ ~Zs & ds, e[48] = ks ^ ~As & js, e[49] = Is ^ ~Ts & Hs, e[0] ^= oa[t * 2], e[1] ^= oa[t * 2 + 1];
  }
};
const sn = Zc;
function rr() {
  this.state = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ], this.blockSize = null, this.count = 0, this.squeezing = !1;
}
rr.prototype.initialize = function(e, t) {
  for (let r = 0; r < 50; ++r) this.state[r] = 0;
  this.blockSize = e / 8, this.count = 0, this.squeezing = !1;
};
rr.prototype.absorb = function(e) {
  for (let t = 0; t < e.length; ++t)
    this.state[~~(this.count / 4)] ^= e[t] << 8 * (this.count % 4), this.count += 1, this.count === this.blockSize && (sn.p1600(this.state), this.count = 0);
};
rr.prototype.absorbLastFewBits = function(e) {
  this.state[~~(this.count / 4)] ^= e << 8 * (this.count % 4), e & 128 && this.count === this.blockSize - 1 && sn.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4), sn.p1600(this.state), this.count = 0, this.squeezing = !0;
};
rr.prototype.squeeze = function(e) {
  this.squeezing || this.absorbLastFewBits(1);
  const t = Buffer.alloc(e);
  for (let r = 0; r < e; ++r)
    t[r] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255, this.count += 1, this.count === this.blockSize && (sn.p1600(this.state), this.count = 0);
  return t;
};
rr.prototype.copy = function(e) {
  for (let t = 0; t < 50; ++t) e.state[t] = this.state[t];
  e.blockSize = this.blockSize, e.count = this.count, e.squeezing = this.squeezing;
};
var e0 = rr, t0 = Xf(e0);
const r0 = t0, n0 = un;
function Kc(e) {
  return Buffer.allocUnsafe(e).fill(0);
}
function Qc(e, t, r) {
  const n = Kc(t);
  return e = Hn(e), r ? e.length < t ? (e.copy(n), n) : e.slice(0, t) : e.length < t ? (e.copy(n, t - e.length), n) : e.slice(-t);
}
function s0(e, t) {
  return Qc(e, t, !0);
}
function Hn(e) {
  if (!Buffer.isBuffer(e))
    if (Array.isArray(e))
      e = Buffer.from(e);
    else if (typeof e == "string")
      Yc(e) ? e = Buffer.from(a0(Xc(e)), "hex") : e = Buffer.from(e);
    else if (typeof e == "number")
      e = intToBuffer(e);
    else if (e == null)
      e = Buffer.allocUnsafe(0);
    else if (n0.isBN(e))
      e = e.toArrayLike(Buffer);
    else if (e.toArray)
      e = Buffer.from(e.toArray());
    else
      throw new Error("invalid type");
  return e;
}
function i0(e) {
  return e = Hn(e), "0x" + e.toString("hex");
}
function o0(e, t) {
  return e = Hn(e), t || (t = 256), r0("keccak" + t).update(e).digest();
}
function a0(e) {
  return e.length % 2 ? "0" + e : e;
}
function Yc(e) {
  return typeof e == "string" && e.match(/^0x[0-9A-Fa-f]*$/);
}
function Xc(e) {
  return typeof e == "string" && e.startsWith("0x") ? e.slice(2) : e;
}
var el = {
  zeros: Kc,
  setLength: Qc,
  setLengthRight: s0,
  isHexString: Yc,
  stripHexPrefix: Xc,
  toBuffer: Hn,
  bufferToHex: i0,
  keccak: o0
};
const vt = el, _t = un;
function tl(e) {
  return e.startsWith("int[") ? "int256" + e.slice(3) : e === "int" ? "int256" : e.startsWith("uint[") ? "uint256" + e.slice(4) : e === "uint" ? "uint256" : e.startsWith("fixed[") ? "fixed128x128" + e.slice(5) : e === "fixed" ? "fixed128x128" : e.startsWith("ufixed[") ? "ufixed128x128" + e.slice(6) : e === "ufixed" ? "ufixed128x128" : e;
}
function jt(e) {
  return parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
}
function aa(e) {
  var t = /^\D+(\d+)x(\d+)$/.exec(e);
  return [parseInt(t[1], 10), parseInt(t[2], 10)];
}
function rl(e) {
  var t = e.match(/(.*)\[(.*?)\]$/);
  return t ? t[2] === "" ? "dynamic" : parseInt(t[2], 10) : null;
}
function bt(e) {
  var t = typeof e;
  if (t === "string")
    return vt.isHexString(e) ? new _t(vt.stripHexPrefix(e), 16) : new _t(e, 10);
  if (t === "number")
    return new _t(e);
  if (e.toArray)
    return e;
  throw new Error("Argument is not a number");
}
function ze(e, t) {
  var r, n, s, i;
  if (e === "address")
    return ze("uint160", bt(t));
  if (e === "bool")
    return ze("uint8", t ? 1 : 0);
  if (e === "string")
    return ze("bytes", new Buffer(t, "utf8"));
  if (l0(e)) {
    if (typeof t.length > "u")
      throw new Error("Not an array?");
    if (r = rl(e), r !== "dynamic" && r !== 0 && t.length > r)
      throw new Error("Elements exceed array size: " + r);
    s = [], e = e.slice(0, e.lastIndexOf("[")), typeof t == "string" && (t = JSON.parse(t));
    for (i in t)
      s.push(ze(e, t[i]));
    if (r === "dynamic") {
      var o = ze("uint256", t.length);
      s.unshift(o);
    }
    return Buffer.concat(s);
  } else {
    if (e === "bytes")
      return t = new Buffer(t), s = Buffer.concat([ze("uint256", t.length), t]), t.length % 32 !== 0 && (s = Buffer.concat([s, vt.zeros(32 - t.length % 32)])), s;
    if (e.startsWith("bytes")) {
      if (r = jt(e), r < 1 || r > 32)
        throw new Error("Invalid bytes<N> width: " + r);
      return vt.setLengthRight(t, 32);
    } else if (e.startsWith("uint")) {
      if (r = jt(e), r % 8 || r < 8 || r > 256)
        throw new Error("Invalid uint<N> width: " + r);
      if (n = bt(t), n.bitLength() > r)
        throw new Error("Supplied uint exceeds width: " + r + " vs " + n.bitLength());
      if (n < 0)
        throw new Error("Supplied uint is negative");
      return n.toArrayLike(Buffer, "be", 32);
    } else if (e.startsWith("int")) {
      if (r = jt(e), r % 8 || r < 8 || r > 256)
        throw new Error("Invalid int<N> width: " + r);
      if (n = bt(t), n.bitLength() > r)
        throw new Error("Supplied int exceeds width: " + r + " vs " + n.bitLength());
      return n.toTwos(256).toArrayLike(Buffer, "be", 32);
    } else if (e.startsWith("ufixed")) {
      if (r = aa(e), n = bt(t), n < 0)
        throw new Error("Supplied ufixed is negative");
      return ze("uint256", n.mul(new _t(2).pow(new _t(r[1]))));
    } else if (e.startsWith("fixed"))
      return r = aa(e), ze("int256", bt(t).mul(new _t(2).pow(new _t(r[1]))));
  }
  throw new Error("Unsupported or invalid type: " + e);
}
function c0(e) {
  return e === "string" || e === "bytes" || rl(e) === "dynamic";
}
function l0(e) {
  return e.lastIndexOf("]") === e.length - 1;
}
function u0(e, t) {
  var r = [], n = [], s = 32 * e.length;
  for (var i in e) {
    var o = tl(e[i]), a = t[i], c = ze(o, a);
    c0(o) ? (r.push(ze("uint256", s)), n.push(c), s += c.length) : r.push(c);
  }
  return Buffer.concat(r.concat(n));
}
function nl(e, t) {
  if (e.length !== t.length)
    throw new Error("Number of types are not matching the values");
  for (var r, n, s = [], i = 0; i < e.length; i++) {
    var o = tl(e[i]), a = t[i];
    if (o === "bytes")
      s.push(a);
    else if (o === "string")
      s.push(new Buffer(a, "utf8"));
    else if (o === "bool")
      s.push(new Buffer(a ? "01" : "00", "hex"));
    else if (o === "address")
      s.push(vt.setLength(a, 20));
    else if (o.startsWith("bytes")) {
      if (r = jt(o), r < 1 || r > 32)
        throw new Error("Invalid bytes<N> width: " + r);
      s.push(vt.setLengthRight(a, r));
    } else if (o.startsWith("uint")) {
      if (r = jt(o), r % 8 || r < 8 || r > 256)
        throw new Error("Invalid uint<N> width: " + r);
      if (n = bt(a), n.bitLength() > r)
        throw new Error("Supplied uint exceeds width: " + r + " vs " + n.bitLength());
      s.push(n.toArrayLike(Buffer, "be", r / 8));
    } else if (o.startsWith("int")) {
      if (r = jt(o), r % 8 || r < 8 || r > 256)
        throw new Error("Invalid int<N> width: " + r);
      if (n = bt(a), n.bitLength() > r)
        throw new Error("Supplied int exceeds width: " + r + " vs " + n.bitLength());
      s.push(n.toTwos(r).toArrayLike(Buffer, "be", r / 8));
    } else
      throw new Error("Unsupported or invalid type: " + o);
  }
  return Buffer.concat(s);
}
function d0(e, t) {
  return vt.keccak(nl(e, t));
}
var h0 = {
  rawEncode: u0,
  solidityPack: nl,
  soliditySHA3: d0
};
const Be = el, hr = h0, sl = {
  type: "object",
  properties: {
    types: {
      type: "object",
      additionalProperties: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            type: { type: "string" }
          },
          required: ["name", "type"]
        }
      }
    },
    primaryType: { type: "string" },
    domain: { type: "object" },
    message: { type: "object" }
  },
  required: ["types", "primaryType", "domain", "message"]
}, wi = {
  /**
   * Encodes an object by encoding and concatenating each of its members
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of an object
   */
  encodeData(e, t, r, n = !0) {
    const s = ["bytes32"], i = [this.hashType(e, r)];
    if (n) {
      const o = (a, c, l) => {
        if (r[c] !== void 0)
          return ["bytes32", l == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : Be.keccak(this.encodeData(c, l, r, n))];
        if (l === void 0)
          throw new Error(`missing value for field ${a} of type ${c}`);
        if (c === "bytes")
          return ["bytes32", Be.keccak(l)];
        if (c === "string")
          return typeof l == "string" && (l = Buffer.from(l, "utf8")), ["bytes32", Be.keccak(l)];
        if (c.lastIndexOf("]") === c.length - 1) {
          const u = c.slice(0, c.lastIndexOf("[")), d = l.map((h) => o(a, u, h));
          return ["bytes32", Be.keccak(hr.rawEncode(
            d.map(([h]) => h),
            d.map(([, h]) => h)
          ))];
        }
        return [c, l];
      };
      for (const a of r[e]) {
        const [c, l] = o(a.name, a.type, t[a.name]);
        s.push(c), i.push(l);
      }
    } else
      for (const o of r[e]) {
        let a = t[o.name];
        if (a !== void 0)
          if (o.type === "bytes")
            s.push("bytes32"), a = Be.keccak(a), i.push(a);
          else if (o.type === "string")
            s.push("bytes32"), typeof a == "string" && (a = Buffer.from(a, "utf8")), a = Be.keccak(a), i.push(a);
          else if (r[o.type] !== void 0)
            s.push("bytes32"), a = Be.keccak(this.encodeData(o.type, a, r, n)), i.push(a);
          else {
            if (o.type.lastIndexOf("]") === o.type.length - 1)
              throw new Error("Arrays currently unimplemented in encodeData");
            s.push(o.type), i.push(a);
          }
      }
    return hr.rawEncode(s, i);
  },
  /**
   * Encodes the type of an object by encoding a comma delimited list of its members
   *
   * @param {string} primaryType - Root type to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of the type of an object
   */
  encodeType(e, t) {
    let r = "", n = this.findTypeDependencies(e, t).filter((s) => s !== e);
    n = [e].concat(n.sort());
    for (const s of n) {
      if (!t[s])
        throw new Error("No type definition specified: " + s);
      r += s + "(" + t[s].map(({ name: o, type: a }) => a + " " + o).join(",") + ")";
    }
    return r;
  },
  /**
   * Finds all types within a type defintion object
   *
   * @param {string} primaryType - Root type
   * @param {Object} types - Type definitions
   * @param {Array} results - current set of accumulated types
   * @returns {Array} - Set of all types found in the type definition
   */
  findTypeDependencies(e, t, r = []) {
    if (e = e.match(/^\w*/)[0], r.includes(e) || t[e] === void 0)
      return r;
    r.push(e);
    for (const n of t[e])
      for (const s of this.findTypeDependencies(n.type, t, r))
        !r.includes(s) && r.push(s);
    return r;
  },
  /**
   * Hashes an object
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to hash
   * @param {Object} types - Type definitions
   * @returns {Buffer} - Hash of an object
   */
  hashStruct(e, t, r, n = !0) {
    return Be.keccak(this.encodeData(e, t, r, n));
  },
  /**
   * Hashes the type of an object
   *
   * @param {string} primaryType - Root type to hash
   * @param {Object} types - Type definitions
   * @returns {string} - Hash of an object
   */
  hashType(e, t) {
    return Be.keccak(this.encodeType(e, t));
  },
  /**
   * Removes properties from a message object that are not defined per EIP-712
   *
   * @param {Object} data - typed message object
   * @returns {Object} - typed message object with only allowed fields
   */
  sanitizeData(e) {
    const t = {};
    for (const r in sl.properties)
      e[r] && (t[r] = e[r]);
    return t.types && (t.types = Object.assign({ EIP712Domain: [] }, t.types)), t;
  },
  /**
   * Returns the hash of a typed message as per EIP-712 for signing
   *
   * @param {Object} typedData - Types message data to sign
   * @returns {string} - sha3 hash for signing
   */
  hash(e, t = !0) {
    const r = this.sanitizeData(e), n = [Buffer.from("1901", "hex")];
    return n.push(this.hashStruct("EIP712Domain", r.domain, r.types, t)), r.primaryType !== "EIP712Domain" && n.push(this.hashStruct(r.primaryType, r.message, r.types, t)), Be.keccak(Buffer.concat(n));
  }
};
var f0 = {
  TYPED_MESSAGE_SCHEMA: sl,
  TypedDataUtils: wi,
  hashForSignTypedDataLegacy: function(e) {
    return p0(e.data);
  },
  hashForSignTypedData_v3: function(e) {
    return wi.hash(e.data, !1);
  },
  hashForSignTypedData_v4: function(e) {
    return wi.hash(e.data);
  }
};
function p0(e) {
  const t = new Error("Expect argument to be non-empty array");
  if (typeof e != "object" || !e.length) throw t;
  const r = e.map(function(i) {
    return i.type === "bytes" ? Be.toBuffer(i.value) : i.value;
  }), n = e.map(function(i) {
    return i.type;
  }), s = e.map(function(i) {
    if (!i.name) throw t;
    return i.type + " " + i.name;
  });
  return hr.soliditySHA3(
    ["bytes32", "bytes32"],
    [
      hr.soliditySHA3(new Array(e.length).fill("string"), s),
      hr.soliditySHA3(n, r)
    ]
  );
}
var Gt = {};
Object.defineProperty(Gt, "__esModule", { value: !0 });
Gt.filterFromParam = Gt.FilterPolyfill = void 0;
const Bt = fe, ve = O, g0 = 5 * 60 * 1e3, mt = {
  jsonrpc: "2.0",
  id: 0
};
class b0 {
  constructor(t) {
    this.logFilters = /* @__PURE__ */ new Map(), this.blockFilters = /* @__PURE__ */ new Set(), this.pendingTransactionFilters = /* @__PURE__ */ new Set(), this.cursors = /* @__PURE__ */ new Map(), this.timeouts = /* @__PURE__ */ new Map(), this.nextFilterId = (0, Bt.IntNumber)(1), this.REQUEST_THROTTLE_INTERVAL = 1e3, this.lastFetchTimestamp = /* @__PURE__ */ new Date(0), this.resolvers = [], this.provider = t;
  }
  async newFilter(t) {
    const r = il(t), n = this.makeFilterId(), s = await this.setInitialCursorPosition(n, r.fromBlock);
    return console.info(`Installing new log filter(${n}):`, r, "initial cursor position:", s), this.logFilters.set(n, r), this.setFilterTimeout(n), (0, ve.hexStringFromIntNumber)(n);
  }
  async newBlockFilter() {
    const t = this.makeFilterId(), r = await this.setInitialCursorPosition(t, "latest");
    return console.info(`Installing new block filter (${t}) with initial cursor position:`, r), this.blockFilters.add(t), this.setFilterTimeout(t), (0, ve.hexStringFromIntNumber)(t);
  }
  async newPendingTransactionFilter() {
    const t = this.makeFilterId(), r = await this.setInitialCursorPosition(t, "latest");
    return console.info(`Installing new block filter (${t}) with initial cursor position:`, r), this.pendingTransactionFilters.add(t), this.setFilterTimeout(t), (0, ve.hexStringFromIntNumber)(t);
  }
  uninstallFilter(t) {
    const r = (0, ve.intNumberFromHexString)(t);
    return console.info(`Uninstalling filter (${r})`), this.deleteFilter(r), !0;
  }
  getFilterChanges(t) {
    const r = (0, ve.intNumberFromHexString)(t);
    return this.timeouts.has(r) && this.setFilterTimeout(r), this.logFilters.has(r) ? this.getLogFilterChanges(r) : this.blockFilters.has(r) ? this.getBlockFilterChanges(r) : this.pendingTransactionFilters.has(r) ? this.getPendingTransactionFilterChanges(r) : Promise.resolve(Gr());
  }
  async getFilterLogs(t) {
    const r = (0, ve.intNumberFromHexString)(t), n = this.logFilters.get(r);
    return n ? this.sendAsyncPromise(Object.assign(Object.assign({}, mt), { method: "eth_getLogs", params: [ca(n)] })) : Gr();
  }
  makeFilterId() {
    return (0, Bt.IntNumber)(++this.nextFilterId);
  }
  sendAsyncPromise(t) {
    return new Promise((r, n) => {
      this.provider.sendAsync(t, (s, i) => {
        if (s)
          return n(s);
        if (Array.isArray(i) || i == null)
          return n(new Error(`unexpected response received: ${JSON.stringify(i)}`));
        r(i);
      });
    });
  }
  deleteFilter(t) {
    console.info(`Deleting filter (${t})`), this.logFilters.delete(t), this.blockFilters.delete(t), this.pendingTransactionFilters.delete(t), this.cursors.delete(t), this.timeouts.delete(t);
  }
  async getLogFilterChanges(t) {
    const r = this.logFilters.get(t), n = this.cursors.get(t);
    if (!n || !r)
      return Gr();
    const s = await this.getCurrentBlockHeight(), i = r.toBlock === "latest" ? s : r.toBlock;
    if (n > s || n > Number(r.toBlock))
      return Jr();
    console.info(`Fetching logs from ${n} to ${i} for filter ${t}`);
    const o = await this.sendAsyncPromise(Object.assign(Object.assign({}, mt), { method: "eth_getLogs", params: [
      ca(Object.assign(Object.assign({}, r), { fromBlock: n, toBlock: i }))
    ] }));
    if (Array.isArray(o.result)) {
      const a = o.result.map((l) => (0, ve.intNumberFromHexString)(l.blockNumber || "0x0")), c = Math.max(...a);
      if (c && c > n) {
        const l = (0, Bt.IntNumber)(c + 1);
        console.info(`Moving cursor position for filter (${t}) from ${n} to ${l}`), this.cursors.set(t, l);
      }
    }
    return o;
  }
  async getBlockFilterChanges(t) {
    const r = this.cursors.get(t);
    if (!r)
      return Gr();
    const n = await this.getCurrentBlockHeight();
    if (r > n)
      return Jr();
    console.info(`Fetching blocks from ${r} to ${n} for filter (${t})`);
    const s = (await Promise.all(
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      (0, ve.range)(r, n + 1).map((o) => this.getBlockHashByNumber((0, Bt.IntNumber)(o)))
    )).filter((o) => !!o), i = (0, Bt.IntNumber)(r + s.length);
    return console.info(`Moving cursor position for filter (${t}) from ${r} to ${i}`), this.cursors.set(t, i), Object.assign(Object.assign({}, mt), { result: s });
  }
  async getPendingTransactionFilterChanges(t) {
    return Promise.resolve(Jr());
  }
  async setInitialCursorPosition(t, r) {
    const n = await this.getCurrentBlockHeight(), s = typeof r == "number" && r > n ? r : n;
    return this.cursors.set(t, s), s;
  }
  setFilterTimeout(t) {
    const r = this.timeouts.get(t);
    r && window.clearTimeout(r);
    const n = window.setTimeout(() => {
      console.info(`Filter (${t}) timed out`), this.deleteFilter(t);
    }, g0);
    this.timeouts.set(t, n);
  }
  // throttle eth_blockNumber requests
  async getCurrentBlockHeight() {
    const t = /* @__PURE__ */ new Date();
    if (t.getTime() - this.lastFetchTimestamp.getTime() > this.REQUEST_THROTTLE_INTERVAL) {
      this.lastFetchTimestamp = t;
      const r = await this._getCurrentBlockHeight();
      this.currentBlockHeight = r, this.resolvers.forEach((n) => n(r)), this.resolvers = [];
    }
    return this.currentBlockHeight ? this.currentBlockHeight : new Promise((r) => this.resolvers.push(r));
  }
  async _getCurrentBlockHeight() {
    const { result: t } = await this.sendAsyncPromise(Object.assign(Object.assign({}, mt), { method: "eth_blockNumber", params: [] }));
    return (0, ve.intNumberFromHexString)((0, ve.ensureHexString)(t));
  }
  async getBlockHashByNumber(t) {
    const r = await this.sendAsyncPromise(Object.assign(Object.assign({}, mt), { method: "eth_getBlockByNumber", params: [(0, ve.hexStringFromIntNumber)(t), !1] }));
    return r.result && typeof r.result.hash == "string" ? (0, ve.ensureHexString)(r.result.hash) : null;
  }
}
Gt.FilterPolyfill = b0;
function il(e) {
  return {
    fromBlock: la(e.fromBlock),
    toBlock: la(e.toBlock),
    addresses: e.address === void 0 ? null : Array.isArray(e.address) ? e.address : [e.address],
    topics: e.topics || []
  };
}
Gt.filterFromParam = il;
function ca(e) {
  const t = {
    fromBlock: ua(e.fromBlock),
    toBlock: ua(e.toBlock),
    topics: e.topics
  };
  return e.addresses !== null && (t.address = e.addresses), t;
}
function la(e) {
  if (e === void 0 || e === "latest" || e === "pending")
    return "latest";
  if (e === "earliest")
    return (0, Bt.IntNumber)(0);
  if ((0, ve.isHexString)(e))
    return (0, ve.intNumberFromHexString)(e);
  throw new Error(`Invalid block option: ${String(e)}`);
}
function ua(e) {
  return e === "latest" ? e : (0, ve.hexStringFromIntNumber)(e);
}
function Gr() {
  return Object.assign(Object.assign({}, mt), { error: { code: -32e3, message: "filter not found" } });
}
function Jr() {
  return Object.assign(Object.assign({}, mt), { result: [] });
}
var Un = {}, ol = {}, Wn = {}, Xi = m0;
function m0(e) {
  e = e || {};
  var t = e.max || Number.MAX_SAFE_INTEGER, r = typeof e.start < "u" ? e.start : Math.floor(Math.random() * t);
  return function() {
    return r = r % t, r++;
  };
}
const da = (e, t) => function() {
  const r = t.promiseModule, n = new Array(arguments.length);
  for (let s = 0; s < arguments.length; s++)
    n[s] = arguments[s];
  return new r((s, i) => {
    t.errorFirst ? n.push(function(o, a) {
      if (t.multiArgs) {
        const c = new Array(arguments.length - 1);
        for (let l = 1; l < arguments.length; l++)
          c[l - 1] = arguments[l];
        o ? (c.unshift(o), i(c)) : s(c);
      } else o ? i(o) : s(a);
    }) : n.push(function(o) {
      if (t.multiArgs) {
        const a = new Array(arguments.length - 1);
        for (let c = 0; c < arguments.length; c++)
          a[c] = arguments[c];
        s(a);
      } else
        s(o);
    }), e.apply(this, n);
  });
};
var _0 = (e, t) => {
  t = Object.assign({
    exclude: [/.+(Sync|Stream)$/],
    errorFirst: !0,
    promiseModule: Promise
  }, t);
  const r = (s) => {
    const i = (o) => typeof o == "string" ? s === o : o.test(s);
    return t.include ? t.include.some(i) : !t.exclude.some(i);
  };
  let n;
  typeof e == "function" ? n = function() {
    return t.excludeMain ? e.apply(this, arguments) : da(e, t).apply(this, arguments);
  } : n = Object.create(Object.getPrototypeOf(e));
  for (const s in e) {
    const i = e[s];
    n[s] = typeof i == "function" && r(s) ? da(i, t) : i;
  }
  return n;
}, xr = {}, Nr = {};
Object.defineProperty(Nr, "__esModule", { value: !0 });
const y0 = hn;
function ha(e, t, r) {
  try {
    Reflect.apply(e, t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    });
  }
}
function w0(e) {
  const t = e.length, r = new Array(t);
  for (let n = 0; n < t; n += 1)
    r[n] = e[n];
  return r;
}
let v0 = class extends y0.EventEmitter {
  emit(t, ...r) {
    let n = t === "error";
    const s = this._events;
    if (s !== void 0)
      n = n && s.error === void 0;
    else if (!n)
      return !1;
    if (n) {
      let o;
      if (r.length > 0 && ([o] = r), o instanceof Error)
        throw o;
      const a = new Error(`Unhandled error.${o ? ` (${o.message})` : ""}`);
      throw a.context = o, a;
    }
    const i = s[t];
    if (i === void 0)
      return !1;
    if (typeof i == "function")
      ha(i, this, r);
    else {
      const o = i.length, a = w0(i);
      for (let c = 0; c < o; c += 1)
        ha(a[c], this, r);
    }
    return !0;
  }
};
Nr.default = v0;
var E0 = D && D.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(xr, "__esModule", { value: !0 });
xr.BaseBlockTracker = void 0;
const S0 = E0(Nr), R0 = 1e3, C0 = (e, t) => e + t, fa = ["sync", "latest"];
class k0 extends S0.default {
  constructor(t) {
    super(), this._blockResetDuration = t.blockResetDuration || 20 * R0, this._usePastBlocks = t.usePastBlocks || !1, this._currentBlock = null, this._isRunning = !1, this._onNewListener = this._onNewListener.bind(this), this._onRemoveListener = this._onRemoveListener.bind(this), this._resetCurrentBlock = this._resetCurrentBlock.bind(this), this._setupInternalEvents();
  }
  async destroy() {
    this._cancelBlockResetTimeout(), await this._maybeEnd(), super.removeAllListeners();
  }
  isRunning() {
    return this._isRunning;
  }
  getCurrentBlock() {
    return this._currentBlock;
  }
  async getLatestBlock() {
    return this._currentBlock ? this._currentBlock : await new Promise((r) => this.once("latest", r));
  }
  // dont allow module consumer to remove our internal event listeners
  removeAllListeners(t) {
    return t ? super.removeAllListeners(t) : super.removeAllListeners(), this._setupInternalEvents(), this._onRemoveListener(), this;
  }
  _setupInternalEvents() {
    this.removeListener("newListener", this._onNewListener), this.removeListener("removeListener", this._onRemoveListener), this.on("newListener", this._onNewListener), this.on("removeListener", this._onRemoveListener);
  }
  _onNewListener(t) {
    fa.includes(t) && this._maybeStart();
  }
  _onRemoveListener() {
    this._getBlockTrackerEventCount() > 0 || this._maybeEnd();
  }
  async _maybeStart() {
    this._isRunning || (this._isRunning = !0, this._cancelBlockResetTimeout(), await this._start(), this.emit("_started"));
  }
  async _maybeEnd() {
    this._isRunning && (this._isRunning = !1, this._setupBlockResetTimeout(), await this._end(), this.emit("_ended"));
  }
  _getBlockTrackerEventCount() {
    return fa.map((t) => this.listenerCount(t)).reduce(C0);
  }
  _shouldUseNewBlock(t) {
    const r = this._currentBlock;
    if (!r)
      return !0;
    const n = pa(t), s = pa(r);
    return this._usePastBlocks && n < s || n > s;
  }
  _newPotentialLatest(t) {
    this._shouldUseNewBlock(t) && this._setCurrentBlock(t);
  }
  _setCurrentBlock(t) {
    const r = this._currentBlock;
    this._currentBlock = t, this.emit("latest", t), this.emit("sync", { oldBlock: r, newBlock: t });
  }
  _setupBlockResetTimeout() {
    this._cancelBlockResetTimeout(), this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration), this._blockResetTimeout.unref && this._blockResetTimeout.unref();
  }
  _cancelBlockResetTimeout() {
    this._blockResetTimeout && clearTimeout(this._blockResetTimeout);
  }
  _resetCurrentBlock() {
    this._currentBlock = null;
  }
}
xr.BaseBlockTracker = k0;
function pa(e) {
  return Number.parseInt(e, 16);
}
var al = {}, cl = {}, ye = {};
class ll extends TypeError {
  constructor(t, r) {
    let n;
    const { message: s, explanation: i, ...o } = t, { path: a } = t, c = a.length === 0 ? s : `At path: ${a.join(".")} -- ${s}`;
    super(i ?? c), i != null && (this.cause = c), Object.assign(this, o), this.name = this.constructor.name, this.failures = () => n ?? (n = [t, ...r()]);
  }
}
function I0(e) {
  return Oe(e) && typeof e[Symbol.iterator] == "function";
}
function Oe(e) {
  return typeof e == "object" && e != null;
}
function ga(e) {
  if (Object.prototype.toString.call(e) !== "[object Object]")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
function pe(e) {
  return typeof e == "symbol" ? e.toString() : typeof e == "string" ? JSON.stringify(e) : `${e}`;
}
function A0(e) {
  const { done: t, value: r } = e.next();
  return t ? void 0 : r;
}
function T0(e, t, r, n) {
  if (e === !0)
    return;
  e === !1 ? e = {} : typeof e == "string" && (e = { message: e });
  const { path: s, branch: i } = t, { type: o } = r, { refinement: a, message: c = `Expected a value of type \`${o}\`${a ? ` with refinement \`${a}\`` : ""}, but received: \`${pe(n)}\`` } = e;
  return {
    value: n,
    type: o,
    refinement: a,
    key: s[s.length - 1],
    path: s,
    branch: i,
    ...e,
    message: c
  };
}
function* Pi(e, t, r, n) {
  I0(e) || (e = [e]);
  for (const s of e) {
    const i = T0(s, t, r, n);
    i && (yield i);
  }
}
function* eo(e, t, r = {}) {
  const { path: n = [], branch: s = [e], coerce: i = !1, mask: o = !1 } = r, a = { path: n, branch: s };
  if (i && (e = t.coercer(e, a), o && t.type !== "type" && Oe(t.schema) && Oe(e) && !Array.isArray(e)))
    for (const l in e)
      t.schema[l] === void 0 && delete e[l];
  let c = "valid";
  for (const l of t.validator(e, a))
    l.explanation = r.message, c = "not_valid", yield [l, void 0];
  for (let [l, u, d] of t.entries(e, a)) {
    const h = eo(u, d, {
      path: l === void 0 ? n : [...n, l],
      branch: l === void 0 ? s : [...s, u],
      coerce: i,
      mask: o,
      message: r.message
    });
    for (const b of h)
      b[0] ? (c = b[0].refinement != null ? "not_refined" : "not_valid", yield [b[0], void 0]) : i && (u = b[1], l === void 0 ? e = u : e instanceof Map ? e.set(l, u) : e instanceof Set ? e.add(u) : Oe(e) && (u !== void 0 || l in e) && (e[l] = u));
  }
  if (c !== "not_valid")
    for (const l of t.refiner(e, a))
      l.explanation = r.message, c = "not_refined", yield [l, void 0];
  c === "valid" && (yield [void 0, e]);
}
class de {
  constructor(t) {
    const { type: r, schema: n, validator: s, refiner: i, coercer: o = (c) => c, entries: a = function* () {
    } } = t;
    this.type = r, this.schema = n, this.entries = a, this.coercer = o, s ? this.validator = (c, l) => {
      const u = s(c, l);
      return Pi(u, l, this, c);
    } : this.validator = () => [], i ? this.refiner = (c, l) => {
      const u = i(c, l);
      return Pi(u, l, this, c);
    } : this.refiner = () => [];
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(t, r) {
    return ul(t, this, r);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(t, r) {
    return dl(t, this, r);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(t) {
    return to(t, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */
  mask(t, r) {
    return hl(t, this, r);
  }
  /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */
  validate(t, r = {}) {
    return nr(t, this, r);
  }
}
function ul(e, t, r) {
  const n = nr(e, t, { message: r });
  if (n[0])
    throw n[0];
}
function dl(e, t, r) {
  const n = nr(e, t, { coerce: !0, message: r });
  if (n[0])
    throw n[0];
  return n[1];
}
function hl(e, t, r) {
  const n = nr(e, t, { coerce: !0, mask: !0, message: r });
  if (n[0])
    throw n[0];
  return n[1];
}
function to(e, t) {
  return !nr(e, t)[0];
}
function nr(e, t, r = {}) {
  const n = eo(e, t, r), s = A0(n);
  return s[0] ? [new ll(s[0], function* () {
    for (const o of n)
      o[0] && (yield o[0]);
  }), void 0] : [void 0, s[1]];
}
function M0(...e) {
  const t = e[0].type === "type", r = e.map((s) => s.schema), n = Object.assign({}, ...r);
  return t ? Or(n) : Lr(n);
}
function Ce(e, t) {
  return new de({ type: e, schema: null, validator: t });
}
function x0(e, t) {
  return new de({
    ...e,
    refiner: (r, n) => r === void 0 || e.refiner(r, n),
    validator(r, n) {
      return r === void 0 ? !0 : (t(r, n), e.validator(r, n));
    }
  });
}
function N0(e) {
  return new de({
    type: "dynamic",
    schema: null,
    *entries(t, r) {
      yield* e(t, r).entries(t, r);
    },
    validator(t, r) {
      return e(t, r).validator(t, r);
    },
    coercer(t, r) {
      return e(t, r).coercer(t, r);
    },
    refiner(t, r) {
      return e(t, r).refiner(t, r);
    }
  });
}
function L0(e) {
  let t;
  return new de({
    type: "lazy",
    schema: null,
    *entries(r, n) {
      t ?? (t = e()), yield* t.entries(r, n);
    },
    validator(r, n) {
      return t ?? (t = e()), t.validator(r, n);
    },
    coercer(r, n) {
      return t ?? (t = e()), t.coercer(r, n);
    },
    refiner(r, n) {
      return t ?? (t = e()), t.refiner(r, n);
    }
  });
}
function O0(e, t) {
  const { schema: r } = e, n = { ...r };
  for (const s of t)
    delete n[s];
  switch (e.type) {
    case "type":
      return Or(n);
    default:
      return Lr(n);
  }
}
function P0(e) {
  const t = e instanceof de, r = t ? { ...e.schema } : { ...e };
  for (const n in r)
    r[n] = fl(r[n]);
  return t && e.type === "type" ? Or(r) : Lr(r);
}
function $0(e, t) {
  const { schema: r } = e, n = {};
  for (const s of t)
    n[s] = r[s];
  switch (e.type) {
    case "type":
      return Or(n);
    default:
      return Lr(n);
  }
}
function B0(e, t) {
  return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."), Ce(e, t);
}
function F0() {
  return Ce("any", () => !0);
}
function D0(e) {
  return new de({
    type: "array",
    schema: e,
    *entries(t) {
      if (e && Array.isArray(t))
        for (const [r, n] of t.entries())
          yield [r, n, e];
    },
    coercer(t) {
      return Array.isArray(t) ? t.slice() : t;
    },
    validator(t) {
      return Array.isArray(t) || `Expected an array value, but received: ${pe(t)}`;
    }
  });
}
function j0() {
  return Ce("bigint", (e) => typeof e == "bigint");
}
function H0() {
  return Ce("boolean", (e) => typeof e == "boolean");
}
function U0() {
  return Ce("date", (e) => e instanceof Date && !isNaN(e.getTime()) || `Expected a valid \`Date\` object, but received: ${pe(e)}`);
}
function W0(e) {
  const t = {}, r = e.map((n) => pe(n)).join();
  for (const n of e)
    t[n] = n;
  return new de({
    type: "enums",
    schema: t,
    validator(n) {
      return e.includes(n) || `Expected one of \`${r}\`, but received: ${pe(n)}`;
    }
  });
}
function V0() {
  return Ce("func", (e) => typeof e == "function" || `Expected a function, but received: ${pe(e)}`);
}
function z0(e) {
  return Ce("instance", (t) => t instanceof e || `Expected a \`${e.name}\` instance, but received: ${pe(t)}`);
}
function q0() {
  return Ce("integer", (e) => typeof e == "number" && !isNaN(e) && Number.isInteger(e) || `Expected an integer, but received: ${pe(e)}`);
}
function G0(e) {
  return new de({
    type: "intersection",
    schema: null,
    *entries(t, r) {
      for (const n of e)
        yield* n.entries(t, r);
    },
    *validator(t, r) {
      for (const n of e)
        yield* n.validator(t, r);
    },
    *refiner(t, r) {
      for (const n of e)
        yield* n.refiner(t, r);
    }
  });
}
function J0(e) {
  const t = pe(e), r = typeof e;
  return new de({
    type: "literal",
    schema: r === "string" || r === "number" || r === "boolean" ? e : null,
    validator(n) {
      return n === e || `Expected the literal \`${t}\`, but received: ${pe(n)}`;
    }
  });
}
function Z0(e, t) {
  return new de({
    type: "map",
    schema: null,
    *entries(r) {
      if (e && t && r instanceof Map)
        for (const [n, s] of r.entries())
          yield [n, n, e], yield [n, s, t];
    },
    coercer(r) {
      return r instanceof Map ? new Map(r) : r;
    },
    validator(r) {
      return r instanceof Map || `Expected a \`Map\` object, but received: ${pe(r)}`;
    }
  });
}
function ro() {
  return Ce("never", () => !1);
}
function K0(e) {
  return new de({
    ...e,
    validator: (t, r) => t === null || e.validator(t, r),
    refiner: (t, r) => t === null || e.refiner(t, r)
  });
}
function Q0() {
  return Ce("number", (e) => typeof e == "number" && !isNaN(e) || `Expected a number, but received: ${pe(e)}`);
}
function Lr(e) {
  const t = e ? Object.keys(e) : [], r = ro();
  return new de({
    type: "object",
    schema: e || null,
    *entries(n) {
      if (e && Oe(n)) {
        const s = new Set(Object.keys(n));
        for (const i of t)
          s.delete(i), yield [i, n[i], e[i]];
        for (const i of s)
          yield [i, n[i], r];
      }
    },
    validator(n) {
      return Oe(n) || `Expected an object, but received: ${pe(n)}`;
    },
    coercer(n) {
      return Oe(n) ? { ...n } : n;
    }
  });
}
function fl(e) {
  return new de({
    ...e,
    validator: (t, r) => t === void 0 || e.validator(t, r),
    refiner: (t, r) => t === void 0 || e.refiner(t, r)
  });
}
function Y0(e, t) {
  return new de({
    type: "record",
    schema: null,
    *entries(r) {
      if (Oe(r))
        for (const n in r) {
          const s = r[n];
          yield [n, n, e], yield [n, s, t];
        }
    },
    validator(r) {
      return Oe(r) || `Expected an object, but received: ${pe(r)}`;
    }
  });
}
function X0() {
  return Ce("regexp", (e) => e instanceof RegExp);
}
function e1(e) {
  return new de({
    type: "set",
    schema: null,
    *entries(t) {
      if (e && t instanceof Set)
        for (const r of t)
          yield [r, r, e];
    },
    coercer(t) {
      return t instanceof Set ? new Set(t) : t;
    },
    validator(t) {
      return t instanceof Set || `Expected a \`Set\` object, but received: ${pe(t)}`;
    }
  });
}
function pl() {
  return Ce("string", (e) => typeof e == "string" || `Expected a string, but received: ${pe(e)}`);
}
function t1(e) {
  const t = ro();
  return new de({
    type: "tuple",
    schema: null,
    *entries(r) {
      if (Array.isArray(r)) {
        const n = Math.max(e.length, r.length);
        for (let s = 0; s < n; s++)
          yield [s, r[s], e[s] || t];
      }
    },
    validator(r) {
      return Array.isArray(r) || `Expected an array, but received: ${pe(r)}`;
    }
  });
}
function Or(e) {
  const t = Object.keys(e);
  return new de({
    type: "type",
    schema: e,
    *entries(r) {
      if (Oe(r))
        for (const n of t)
          yield [n, r[n], e[n]];
    },
    validator(r) {
      return Oe(r) || `Expected an object, but received: ${pe(r)}`;
    },
    coercer(r) {
      return Oe(r) ? { ...r } : r;
    }
  });
}
function r1(e) {
  const t = e.map((r) => r.type).join(" | ");
  return new de({
    type: "union",
    schema: null,
    coercer(r) {
      for (const n of e) {
        const [s, i] = n.validate(r, { coerce: !0 });
        if (!s)
          return i;
      }
      return r;
    },
    validator(r, n) {
      const s = [];
      for (const i of e) {
        const [...o] = eo(r, i, n), [a] = o;
        if (a[0])
          for (const [c] of o)
            c && s.push(c);
        else
          return [];
      }
      return [
        `Expected the value to satisfy a union of \`${t}\`, but received: ${pe(r)}`,
        ...s
      ];
    }
  });
}
function gl() {
  return Ce("unknown", () => !0);
}
function no(e, t, r) {
  return new de({
    ...e,
    coercer: (n, s) => to(n, t) ? e.coercer(r(n, s), s) : e.coercer(n, s)
  });
}
function n1(e, t, r = {}) {
  return no(e, gl(), (n) => {
    const s = typeof t == "function" ? t() : t;
    if (n === void 0)
      return s;
    if (!r.strict && ga(n) && ga(s)) {
      const i = { ...n };
      let o = !1;
      for (const a in s)
        i[a] === void 0 && (i[a] = s[a], o = !0);
      if (o)
        return i;
    }
    return n;
  });
}
function s1(e) {
  return no(e, pl(), (t) => t.trim());
}
function i1(e) {
  return kt(e, "empty", (t) => {
    const r = bl(t);
    return r === 0 || `Expected an empty ${e.type} but received one with a size of \`${r}\``;
  });
}
function bl(e) {
  return e instanceof Map || e instanceof Set ? e.size : e.length;
}
function o1(e, t, r = {}) {
  const { exclusive: n } = r;
  return kt(e, "max", (s) => n ? s < t : s <= t || `Expected a ${e.type} less than ${n ? "" : "or equal to "}${t} but received \`${s}\``);
}
function a1(e, t, r = {}) {
  const { exclusive: n } = r;
  return kt(e, "min", (s) => n ? s > t : s >= t || `Expected a ${e.type} greater than ${n ? "" : "or equal to "}${t} but received \`${s}\``);
}
function c1(e) {
  return kt(e, "nonempty", (t) => bl(t) > 0 || `Expected a nonempty ${e.type} but received an empty one`);
}
function l1(e, t) {
  return kt(e, "pattern", (r) => t.test(r) || `Expected a ${e.type} matching \`/${t.source}/\` but received "${r}"`);
}
function u1(e, t, r = t) {
  const n = `Expected a ${e.type}`, s = t === r ? `of \`${t}\`` : `between \`${t}\` and \`${r}\``;
  return kt(e, "size", (i) => {
    if (typeof i == "number" || i instanceof Date)
      return t <= i && i <= r || `${n} ${s} but received \`${i}\``;
    if (i instanceof Map || i instanceof Set) {
      const { size: o } = i;
      return t <= o && o <= r || `${n} with a size ${s} but received one with a size of \`${o}\``;
    } else {
      const { length: o } = i;
      return t <= o && o <= r || `${n} with a length ${s} but received one with a length of \`${o}\``;
    }
  });
}
function kt(e, t, r) {
  return new de({
    ...e,
    *refiner(n, s) {
      yield* e.refiner(n, s);
      const i = r(n, s), o = Pi(i, s, e, n);
      for (const a of o)
        yield { ...a, refinement: t };
    }
  });
}
const d1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Struct: de,
  StructError: ll,
  any: F0,
  array: D0,
  assert: ul,
  assign: M0,
  bigint: j0,
  boolean: H0,
  coerce: no,
  create: dl,
  date: U0,
  defaulted: n1,
  define: Ce,
  deprecated: x0,
  dynamic: N0,
  empty: i1,
  enums: W0,
  func: V0,
  instance: z0,
  integer: q0,
  intersection: G0,
  is: to,
  lazy: L0,
  literal: J0,
  map: Z0,
  mask: hl,
  max: o1,
  min: a1,
  never: ro,
  nonempty: c1,
  nullable: K0,
  number: Q0,
  object: Lr,
  omit: O0,
  optional: fl,
  partial: P0,
  pattern: l1,
  pick: $0,
  record: Y0,
  refine: kt,
  regexp: X0,
  set: e1,
  size: u1,
  string: pl,
  struct: B0,
  trimmed: s1,
  tuple: t1,
  type: Or,
  union: r1,
  unknown: gl,
  validate: nr
}, Symbol.toStringTag, { value: "Module" })), It = /* @__PURE__ */ ic(d1);
Object.defineProperty(ye, "__esModule", { value: !0 });
ye.assertExhaustive = ye.assertStruct = ye.assert = ye.AssertionError = void 0;
const h1 = It;
function f1(e) {
  return typeof e == "object" && e !== null && "message" in e;
}
function p1(e) {
  var t, r;
  return typeof ((r = (t = e == null ? void 0 : e.prototype) === null || t === void 0 ? void 0 : t.constructor) === null || r === void 0 ? void 0 : r.name) == "string";
}
function g1(e) {
  const t = f1(e) ? e.message : String(e);
  return t.endsWith(".") ? t.slice(0, -1) : t;
}
function ml(e, t) {
  return p1(e) ? new e({
    message: t
  }) : e({
    message: t
  });
}
class so extends Error {
  constructor(t) {
    super(t.message), this.code = "ERR_ASSERTION";
  }
}
ye.AssertionError = so;
function b1(e, t = "Assertion failed.", r = so) {
  if (!e)
    throw t instanceof Error ? t : ml(r, t);
}
ye.assert = b1;
function m1(e, t, r = "Assertion failed", n = so) {
  try {
    (0, h1.assert)(e, t);
  } catch (s) {
    throw ml(n, `${r}: ${g1(s)}.`);
  }
}
ye.assertStruct = m1;
function _1(e) {
  throw new Error("Invalid branch reached. Should be detected during compilation.");
}
ye.assertExhaustive = _1;
var Pr = {};
Object.defineProperty(Pr, "__esModule", { value: !0 });
Pr.base64 = void 0;
const y1 = It, w1 = ye, v1 = (e, t = {}) => {
  var r, n;
  const s = (r = t.paddingRequired) !== null && r !== void 0 ? r : !1, i = (n = t.characterSet) !== null && n !== void 0 ? n : "base64";
  let o;
  i === "base64" ? o = String.raw`[A-Za-z0-9+\/]` : ((0, w1.assert)(i === "base64url"), o = String.raw`[-_A-Za-z0-9]`);
  let a;
  return s ? a = new RegExp(`^(?:${o}{4})*(?:${o}{3}=|${o}{2}==)?$`, "u") : a = new RegExp(`^(?:${o}{4})*(?:${o}{2,3}|${o}{3}=|${o}{2}==)?$`, "u"), (0, y1.pattern)(e, a);
};
Pr.base64 = v1;
var ee = {}, $r = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.remove0x = e.add0x = e.assertIsStrictHexString = e.assertIsHexString = e.isStrictHexString = e.isHexString = e.StrictHexStruct = e.HexStruct = void 0;
  const t = It, r = ye;
  e.HexStruct = (0, t.pattern)((0, t.string)(), /^(?:0x)?[0-9a-f]+$/iu), e.StrictHexStruct = (0, t.pattern)((0, t.string)(), /^0x[0-9a-f]+$/iu);
  function n(l) {
    return (0, t.is)(l, e.HexStruct);
  }
  e.isHexString = n;
  function s(l) {
    return (0, t.is)(l, e.StrictHexStruct);
  }
  e.isStrictHexString = s;
  function i(l) {
    (0, r.assert)(n(l), "Value must be a hexadecimal string.");
  }
  e.assertIsHexString = i;
  function o(l) {
    (0, r.assert)(s(l), 'Value must be a hexadecimal string, starting with "0x".');
  }
  e.assertIsStrictHexString = o;
  function a(l) {
    return l.startsWith("0x") ? l : l.startsWith("0X") ? `0x${l.substring(2)}` : `0x${l}`;
  }
  e.add0x = a;
  function c(l) {
    return l.startsWith("0x") || l.startsWith("0X") ? l.substring(2) : l;
  }
  e.remove0x = c;
})($r);
Object.defineProperty(ee, "__esModule", { value: !0 });
ee.createDataView = ee.concatBytes = ee.valueToBytes = ee.stringToBytes = ee.numberToBytes = ee.signedBigIntToBytes = ee.bigIntToBytes = ee.hexToBytes = ee.bytesToString = ee.bytesToNumber = ee.bytesToSignedBigInt = ee.bytesToBigInt = ee.bytesToHex = ee.assertIsBytes = ee.isBytes = void 0;
const Ae = ye, $i = $r, ba = 48, ma = 58, _a = 87;
function E1() {
  const e = [];
  return () => {
    if (e.length === 0)
      for (let t = 0; t < 256; t++)
        e.push(t.toString(16).padStart(2, "0"));
    return e;
  };
}
const S1 = E1();
function io(e) {
  return e instanceof Uint8Array;
}
ee.isBytes = io;
function sr(e) {
  (0, Ae.assert)(io(e), "Value must be a Uint8Array.");
}
ee.assertIsBytes = sr;
function _l(e) {
  if (sr(e), e.length === 0)
    return "0x";
  const t = S1(), r = new Array(e.length);
  for (let n = 0; n < e.length; n++)
    r[n] = t[e[n]];
  return (0, $i.add0x)(r.join(""));
}
ee.bytesToHex = _l;
function yl(e) {
  sr(e);
  const t = _l(e);
  return BigInt(t);
}
ee.bytesToBigInt = yl;
function R1(e) {
  sr(e);
  let t = BigInt(0);
  for (const r of e)
    t = (t << BigInt(8)) + BigInt(r);
  return BigInt.asIntN(e.length * 8, t);
}
ee.bytesToSignedBigInt = R1;
function C1(e) {
  sr(e);
  const t = yl(e);
  return (0, Ae.assert)(t <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead."), Number(t);
}
ee.bytesToNumber = C1;
function k1(e) {
  return sr(e), new TextDecoder().decode(e);
}
ee.bytesToString = k1;
function Vn(e) {
  var t;
  if (((t = e == null ? void 0 : e.toLowerCase) === null || t === void 0 ? void 0 : t.call(e)) === "0x")
    return new Uint8Array();
  (0, $i.assertIsHexString)(e);
  const r = (0, $i.remove0x)(e).toLowerCase(), n = r.length % 2 === 0 ? r : `0${r}`, s = new Uint8Array(n.length / 2);
  for (let i = 0; i < s.length; i++) {
    const o = n.charCodeAt(i * 2), a = n.charCodeAt(i * 2 + 1), c = o - (o < ma ? ba : _a), l = a - (a < ma ? ba : _a);
    s[i] = c * 16 + l;
  }
  return s;
}
ee.hexToBytes = Vn;
function wl(e) {
  (0, Ae.assert)(typeof e == "bigint", "Value must be a bigint."), (0, Ae.assert)(e >= BigInt(0), "Value must be a non-negative bigint.");
  const t = e.toString(16);
  return Vn(t);
}
ee.bigIntToBytes = wl;
function I1(e, t) {
  (0, Ae.assert)(t > 0);
  const r = e >> BigInt(31);
  return !((~e & r) + (e & ~r) >> BigInt(t * 8 + -1));
}
function A1(e, t) {
  (0, Ae.assert)(typeof e == "bigint", "Value must be a bigint."), (0, Ae.assert)(typeof t == "number", "Byte length must be a number."), (0, Ae.assert)(t > 0, "Byte length must be greater than 0."), (0, Ae.assert)(I1(e, t), "Byte length is too small to represent the given value.");
  let r = e;
  const n = new Uint8Array(t);
  for (let s = 0; s < n.length; s++)
    n[s] = Number(BigInt.asUintN(8, r)), r >>= BigInt(8);
  return n.reverse();
}
ee.signedBigIntToBytes = A1;
function vl(e) {
  (0, Ae.assert)(typeof e == "number", "Value must be a number."), (0, Ae.assert)(e >= 0, "Value must be a non-negative number."), (0, Ae.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToBytes` instead.");
  const t = e.toString(16);
  return Vn(t);
}
ee.numberToBytes = vl;
function El(e) {
  return (0, Ae.assert)(typeof e == "string", "Value must be a string."), new TextEncoder().encode(e);
}
ee.stringToBytes = El;
function Sl(e) {
  if (typeof e == "bigint")
    return wl(e);
  if (typeof e == "number")
    return vl(e);
  if (typeof e == "string")
    return e.startsWith("0x") ? Vn(e) : El(e);
  if (io(e))
    return e;
  throw new TypeError(`Unsupported value type: "${typeof e}".`);
}
ee.valueToBytes = Sl;
function T1(e) {
  const t = new Array(e.length);
  let r = 0;
  for (let s = 0; s < e.length; s++) {
    const i = Sl(e[s]);
    t[s] = i, r += i.length;
  }
  const n = new Uint8Array(r);
  for (let s = 0, i = 0; s < t.length; s++)
    n.set(t[s], i), i += t[s].length;
  return n;
}
ee.concatBytes = T1;
function M1(e) {
  if (typeof Buffer < "u" && e instanceof Buffer) {
    const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
    return new DataView(t);
  }
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
ee.createDataView = M1;
var zn = {};
Object.defineProperty(zn, "__esModule", { value: !0 });
zn.ChecksumStruct = void 0;
const ya = It, x1 = Pr;
zn.ChecksumStruct = (0, ya.size)((0, x1.base64)((0, ya.string)(), { paddingRequired: !0 }), 44, 44);
var Ze = {};
Object.defineProperty(Ze, "__esModule", { value: !0 });
Ze.createHex = Ze.createBytes = Ze.createBigInt = Ze.createNumber = void 0;
const le = It, N1 = ye, Rl = ee, qn = $r, Cl = (0, le.union)([(0, le.number)(), (0, le.bigint)(), (0, le.string)(), qn.StrictHexStruct]), L1 = (0, le.coerce)((0, le.number)(), Cl, Number), O1 = (0, le.coerce)((0, le.bigint)(), Cl, BigInt);
(0, le.union)([qn.StrictHexStruct, (0, le.instance)(Uint8Array)]);
const P1 = (0, le.coerce)((0, le.instance)(Uint8Array), (0, le.union)([qn.StrictHexStruct]), Rl.hexToBytes), $1 = (0, le.coerce)(qn.StrictHexStruct, (0, le.instance)(Uint8Array), Rl.bytesToHex);
function B1(e) {
  try {
    const t = (0, le.create)(e, L1);
    return (0, N1.assert)(Number.isFinite(t), `Expected a number-like value, got "${e}".`), t;
  } catch (t) {
    throw t instanceof le.StructError ? new Error(`Expected a number-like value, got "${e}".`) : t;
  }
}
Ze.createNumber = B1;
function F1(e) {
  try {
    return (0, le.create)(e, O1);
  } catch (t) {
    throw t instanceof le.StructError ? new Error(`Expected a number-like value, got "${String(t.value)}".`) : t;
  }
}
Ze.createBigInt = F1;
function D1(e) {
  if (typeof e == "string" && e.toLowerCase() === "0x")
    return new Uint8Array();
  try {
    return (0, le.create)(e, P1);
  } catch (t) {
    throw t instanceof le.StructError ? new Error(`Expected a bytes-like value, got "${String(t.value)}".`) : t;
  }
}
Ze.createBytes = D1;
function j1(e) {
  if (e instanceof Uint8Array && e.length === 0 || typeof e == "string" && e.toLowerCase() === "0x")
    return "0x";
  try {
    return (0, le.create)(e, $1);
  } catch (t) {
    throw t instanceof le.StructError ? new Error(`Expected a bytes-like value, got "${String(t.value)}".`) : t;
  }
}
Ze.createHex = j1;
var Jt = {}, kl = D && D.__classPrivateFieldSet || function(e, t, r, n, s) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? s.call(e, r) : s ? s.value = r : t.set(e, r), r;
}, Ee = D && D.__classPrivateFieldGet || function(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, $e, We;
Object.defineProperty(Jt, "__esModule", { value: !0 });
Jt.FrozenSet = Jt.FrozenMap = void 0;
class oo {
  constructor(t) {
    $e.set(this, void 0), kl(this, $e, new Map(t), "f"), Object.freeze(this);
  }
  get size() {
    return Ee(this, $e, "f").size;
  }
  [($e = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
    return Ee(this, $e, "f")[Symbol.iterator]();
  }
  entries() {
    return Ee(this, $e, "f").entries();
  }
  forEach(t, r) {
    return Ee(this, $e, "f").forEach((n, s, i) => t.call(r, n, s, this));
  }
  get(t) {
    return Ee(this, $e, "f").get(t);
  }
  has(t) {
    return Ee(this, $e, "f").has(t);
  }
  keys() {
    return Ee(this, $e, "f").keys();
  }
  values() {
    return Ee(this, $e, "f").values();
  }
  toString() {
    return `FrozenMap(${this.size}) {${this.size > 0 ? ` ${[...this.entries()].map(([t, r]) => `${String(t)} => ${String(r)}`).join(", ")} ` : ""}}`;
  }
}
Jt.FrozenMap = oo;
class ao {
  constructor(t) {
    We.set(this, void 0), kl(this, We, new Set(t), "f"), Object.freeze(this);
  }
  get size() {
    return Ee(this, We, "f").size;
  }
  [(We = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
    return Ee(this, We, "f")[Symbol.iterator]();
  }
  entries() {
    return Ee(this, We, "f").entries();
  }
  forEach(t, r) {
    return Ee(this, We, "f").forEach((n, s, i) => t.call(r, n, s, this));
  }
  has(t) {
    return Ee(this, We, "f").has(t);
  }
  keys() {
    return Ee(this, We, "f").keys();
  }
  values() {
    return Ee(this, We, "f").values();
  }
  toString() {
    return `FrozenSet(${this.size}) {${this.size > 0 ? ` ${[...this.values()].map((t) => String(t)).join(", ")} ` : ""}}`;
  }
}
Jt.FrozenSet = ao;
Object.freeze(oo);
Object.freeze(oo.prototype);
Object.freeze(ao);
Object.freeze(ao.prototype);
var Il = {};
Object.defineProperty(Il, "__esModule", { value: !0 });
var Al = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getJsonRpcIdValidator = e.assertIsJsonRpcError = e.isJsonRpcError = e.assertIsJsonRpcFailure = e.isJsonRpcFailure = e.assertIsJsonRpcSuccess = e.isJsonRpcSuccess = e.assertIsJsonRpcResponse = e.isJsonRpcResponse = e.assertIsPendingJsonRpcResponse = e.isPendingJsonRpcResponse = e.JsonRpcResponseStruct = e.JsonRpcFailureStruct = e.JsonRpcSuccessStruct = e.PendingJsonRpcResponseStruct = e.assertIsJsonRpcRequest = e.isJsonRpcRequest = e.assertIsJsonRpcNotification = e.isJsonRpcNotification = e.JsonRpcNotificationStruct = e.JsonRpcRequestStruct = e.JsonRpcParamsStruct = e.JsonRpcErrorStruct = e.JsonRpcIdStruct = e.JsonRpcVersionStruct = e.jsonrpc2 = e.getJsonSize = e.isValidJson = e.JsonStruct = e.UnsafeJsonStruct = void 0;
  const t = It, r = ye, n = () => (0, t.define)("finite number", (S) => (0, t.is)(S, (0, t.number)()) && Number.isFinite(S));
  e.UnsafeJsonStruct = (0, t.union)([
    (0, t.literal)(null),
    (0, t.boolean)(),
    n(),
    (0, t.string)(),
    (0, t.array)((0, t.lazy)(() => e.UnsafeJsonStruct)),
    (0, t.record)((0, t.string)(), (0, t.lazy)(() => e.UnsafeJsonStruct))
  ]), e.JsonStruct = (0, t.define)("Json", (S, T) => {
    function U(B, P) {
      const oe = [...P.validator(B, T)];
      return oe.length > 0 ? oe : !0;
    }
    try {
      const B = U(S, e.UnsafeJsonStruct);
      return B !== !0 ? B : U(JSON.parse(JSON.stringify(S)), e.UnsafeJsonStruct);
    } catch (B) {
      return B instanceof RangeError ? "Circular reference detected" : !1;
    }
  });
  function s(S) {
    return (0, t.is)(S, e.JsonStruct);
  }
  e.isValidJson = s;
  function i(S) {
    (0, r.assertStruct)(S, e.JsonStruct, "Invalid JSON value");
    const T = JSON.stringify(S);
    return new TextEncoder().encode(T).byteLength;
  }
  e.getJsonSize = i, e.jsonrpc2 = "2.0", e.JsonRpcVersionStruct = (0, t.literal)(e.jsonrpc2), e.JsonRpcIdStruct = (0, t.nullable)((0, t.union)([(0, t.number)(), (0, t.string)()])), e.JsonRpcErrorStruct = (0, t.object)({
    code: (0, t.integer)(),
    message: (0, t.string)(),
    data: (0, t.optional)(e.JsonStruct),
    stack: (0, t.optional)((0, t.string)())
  }), e.JsonRpcParamsStruct = (0, t.optional)((0, t.union)([(0, t.record)((0, t.string)(), e.JsonStruct), (0, t.array)(e.JsonStruct)])), e.JsonRpcRequestStruct = (0, t.object)({
    id: e.JsonRpcIdStruct,
    jsonrpc: e.JsonRpcVersionStruct,
    method: (0, t.string)(),
    params: e.JsonRpcParamsStruct
  }), e.JsonRpcNotificationStruct = (0, t.omit)(e.JsonRpcRequestStruct, ["id"]);
  function o(S) {
    return (0, t.is)(S, e.JsonRpcNotificationStruct);
  }
  e.isJsonRpcNotification = o;
  function a(S, T) {
    (0, r.assertStruct)(S, e.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", T);
  }
  e.assertIsJsonRpcNotification = a;
  function c(S) {
    return (0, t.is)(S, e.JsonRpcRequestStruct);
  }
  e.isJsonRpcRequest = c;
  function l(S, T) {
    (0, r.assertStruct)(S, e.JsonRpcRequestStruct, "Invalid JSON-RPC request", T);
  }
  e.assertIsJsonRpcRequest = l, e.PendingJsonRpcResponseStruct = (0, t.object)({
    id: e.JsonRpcIdStruct,
    jsonrpc: e.JsonRpcVersionStruct,
    result: (0, t.optional)((0, t.unknown)()),
    error: (0, t.optional)(e.JsonRpcErrorStruct)
  }), e.JsonRpcSuccessStruct = (0, t.object)({
    id: e.JsonRpcIdStruct,
    jsonrpc: e.JsonRpcVersionStruct,
    result: e.JsonStruct
  }), e.JsonRpcFailureStruct = (0, t.object)({
    id: e.JsonRpcIdStruct,
    jsonrpc: e.JsonRpcVersionStruct,
    error: e.JsonRpcErrorStruct
  }), e.JsonRpcResponseStruct = (0, t.union)([
    e.JsonRpcSuccessStruct,
    e.JsonRpcFailureStruct
  ]);
  function u(S) {
    return (0, t.is)(S, e.PendingJsonRpcResponseStruct);
  }
  e.isPendingJsonRpcResponse = u;
  function d(S, T) {
    (0, r.assertStruct)(S, e.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", T);
  }
  e.assertIsPendingJsonRpcResponse = d;
  function h(S) {
    return (0, t.is)(S, e.JsonRpcResponseStruct);
  }
  e.isJsonRpcResponse = h;
  function b(S, T) {
    (0, r.assertStruct)(S, e.JsonRpcResponseStruct, "Invalid JSON-RPC response", T);
  }
  e.assertIsJsonRpcResponse = b;
  function m(S) {
    return (0, t.is)(S, e.JsonRpcSuccessStruct);
  }
  e.isJsonRpcSuccess = m;
  function R(S, T) {
    (0, r.assertStruct)(S, e.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", T);
  }
  e.assertIsJsonRpcSuccess = R;
  function E(S) {
    return (0, t.is)(S, e.JsonRpcFailureStruct);
  }
  e.isJsonRpcFailure = E;
  function g(S, T) {
    (0, r.assertStruct)(S, e.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", T);
  }
  e.assertIsJsonRpcFailure = g;
  function y(S) {
    return (0, t.is)(S, e.JsonRpcErrorStruct);
  }
  e.isJsonRpcError = y;
  function _(S, T) {
    (0, r.assertStruct)(S, e.JsonRpcErrorStruct, "Invalid JSON-RPC error", T);
  }
  e.assertIsJsonRpcError = _;
  function C(S) {
    const { permitEmptyString: T, permitFractions: U, permitNull: B } = Object.assign({ permitEmptyString: !0, permitFractions: !1, permitNull: !0 }, S);
    return (Q) => !!(typeof Q == "number" && (U || Number.isInteger(Q)) || typeof Q == "string" && (T || Q.length > 0) || B && Q === null);
  }
  e.getJsonRpcIdValidator = C;
})(Al);
var Tl = {};
Object.defineProperty(Tl, "__esModule", { value: !0 });
var Zt = {}, Bi = { exports: {} }, vi, wa;
function H1() {
  if (wa) return vi;
  wa = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, s = n * 7, i = n * 365.25;
  vi = function(u, d) {
    d = d || {};
    var h = typeof u;
    if (h === "string" && u.length > 0)
      return o(u);
    if (h === "number" && isFinite(u))
      return d.long ? c(u) : a(u);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(u)
    );
  };
  function o(u) {
    if (u = String(u), !(u.length > 100)) {
      var d = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        u
      );
      if (d) {
        var h = parseFloat(d[1]), b = (d[2] || "ms").toLowerCase();
        switch (b) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return h * i;
          case "weeks":
          case "week":
          case "w":
            return h * s;
          case "days":
          case "day":
          case "d":
            return h * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return h * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return h * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return h * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return h;
          default:
            return;
        }
      }
    }
  }
  function a(u) {
    var d = Math.abs(u);
    return d >= n ? Math.round(u / n) + "d" : d >= r ? Math.round(u / r) + "h" : d >= t ? Math.round(u / t) + "m" : d >= e ? Math.round(u / e) + "s" : u + "ms";
  }
  function c(u) {
    var d = Math.abs(u);
    return d >= n ? l(u, d, n, "day") : d >= r ? l(u, d, r, "hour") : d >= t ? l(u, d, t, "minute") : d >= e ? l(u, d, e, "second") : u + " ms";
  }
  function l(u, d, h, b) {
    var m = d >= h * 1.5;
    return Math.round(u / h) + " " + b + (m ? "s" : "");
  }
  return vi;
}
function U1(e) {
  r.debug = r, r.default = r, r.coerce = c, r.disable = i, r.enable = s, r.enabled = o, r.humanize = H1(), r.destroy = l, Object.keys(e).forEach((u) => {
    r[u] = e[u];
  }), r.names = [], r.skips = [], r.formatters = {};
  function t(u) {
    let d = 0;
    for (let h = 0; h < u.length; h++)
      d = (d << 5) - d + u.charCodeAt(h), d |= 0;
    return r.colors[Math.abs(d) % r.colors.length];
  }
  r.selectColor = t;
  function r(u) {
    let d, h = null, b, m;
    function R(...E) {
      if (!R.enabled)
        return;
      const g = R, y = Number(/* @__PURE__ */ new Date()), _ = y - (d || y);
      g.diff = _, g.prev = d, g.curr = y, d = y, E[0] = r.coerce(E[0]), typeof E[0] != "string" && E.unshift("%O");
      let C = 0;
      E[0] = E[0].replace(/%([a-zA-Z%])/g, (T, U) => {
        if (T === "%%")
          return "%";
        C++;
        const B = r.formatters[U];
        if (typeof B == "function") {
          const P = E[C];
          T = B.call(g, P), E.splice(C, 1), C--;
        }
        return T;
      }), r.formatArgs.call(g, E), (g.log || r.log).apply(g, E);
    }
    return R.namespace = u, R.useColors = r.useColors(), R.color = r.selectColor(u), R.extend = n, R.destroy = r.destroy, Object.defineProperty(R, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => h !== null ? h : (b !== r.namespaces && (b = r.namespaces, m = r.enabled(u)), m),
      set: (E) => {
        h = E;
      }
    }), typeof r.init == "function" && r.init(R), R;
  }
  function n(u, d) {
    const h = r(this.namespace + (typeof d > "u" ? ":" : d) + u);
    return h.log = this.log, h;
  }
  function s(u) {
    r.save(u), r.namespaces = u, r.names = [], r.skips = [];
    let d;
    const h = (typeof u == "string" ? u : "").split(/[\s,]+/), b = h.length;
    for (d = 0; d < b; d++)
      h[d] && (u = h[d].replace(/\*/g, ".*?"), u[0] === "-" ? r.skips.push(new RegExp("^" + u.slice(1) + "$")) : r.names.push(new RegExp("^" + u + "$")));
  }
  function i() {
    const u = [
      ...r.names.map(a),
      ...r.skips.map(a).map((d) => "-" + d)
    ].join(",");
    return r.enable(""), u;
  }
  function o(u) {
    if (u[u.length - 1] === "*")
      return !0;
    let d, h;
    for (d = 0, h = r.skips.length; d < h; d++)
      if (r.skips[d].test(u))
        return !1;
    for (d = 0, h = r.names.length; d < h; d++)
      if (r.names[d].test(u))
        return !0;
    return !1;
  }
  function a(u) {
    return u.toString().substring(2, u.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function c(u) {
    return u instanceof Error ? u.stack || u.message : u;
  }
  function l() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var W1 = U1;
(function(e, t) {
  t.formatArgs = n, t.save = s, t.load = i, t.useColors = r, t.storage = o(), t.destroy = /* @__PURE__ */ (() => {
    let c = !1;
    return () => {
      c || (c = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), t.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function r() {
    if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
      return !0;
    if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
      return !1;
    let c;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && (c = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(c[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function n(c) {
    if (c[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + c[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
      return;
    const l = "color: " + this.color;
    c.splice(1, 0, l, "color: inherit");
    let u = 0, d = 0;
    c[0].replace(/%[a-zA-Z%]/g, (h) => {
      h !== "%%" && (u++, h === "%c" && (d = u));
    }), c.splice(d, 0, l);
  }
  t.log = console.debug || console.log || (() => {
  });
  function s(c) {
    try {
      c ? t.storage.setItem("debug", c) : t.storage.removeItem("debug");
    } catch {
    }
  }
  function i() {
    let c;
    try {
      c = t.storage.getItem("debug");
    } catch {
    }
    return !c && typeof process < "u" && "env" in process && (c = process.env.DEBUG), c;
  }
  function o() {
    try {
      return localStorage;
    } catch {
    }
  }
  e.exports = W1(t);
  const { formatters: a } = e.exports;
  a.j = function(c) {
    try {
      return JSON.stringify(c);
    } catch (l) {
      return "[UnexpectedJSONParseError]: " + l.message;
    }
  };
})(Bi, Bi.exports);
var V1 = Bi.exports, z1 = D && D.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Zt, "__esModule", { value: !0 });
Zt.createModuleLogger = Zt.createProjectLogger = void 0;
const q1 = z1(V1), G1 = (0, q1.default)("metamask");
function J1(e) {
  return G1.extend(e);
}
Zt.createProjectLogger = J1;
function Z1(e, t) {
  return e.extend(t);
}
Zt.createModuleLogger = Z1;
var Ml = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.calculateNumberSize = e.calculateStringSize = e.isASCII = e.isPlainObject = e.ESCAPE_CHARACTERS_REGEXP = e.JsonSize = e.hasProperty = e.isObject = e.isNullOrUndefined = e.isNonEmptyArray = void 0;
  function t(l) {
    return Array.isArray(l) && l.length > 0;
  }
  e.isNonEmptyArray = t;
  function r(l) {
    return l == null;
  }
  e.isNullOrUndefined = r;
  function n(l) {
    return !!l && typeof l == "object" && !Array.isArray(l);
  }
  e.isObject = n;
  const s = (l, u) => Object.hasOwnProperty.call(l, u);
  e.hasProperty = s, function(l) {
    l[l.Null = 4] = "Null", l[l.Comma = 1] = "Comma", l[l.Wrapper = 1] = "Wrapper", l[l.True = 4] = "True", l[l.False = 5] = "False", l[l.Quote = 1] = "Quote", l[l.Colon = 1] = "Colon", l[l.Date = 24] = "Date";
  }(e.JsonSize || (e.JsonSize = {})), e.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu;
  function i(l) {
    if (typeof l != "object" || l === null)
      return !1;
    try {
      let u = l;
      for (; Object.getPrototypeOf(u) !== null; )
        u = Object.getPrototypeOf(u);
      return Object.getPrototypeOf(l) === u;
    } catch {
      return !1;
    }
  }
  e.isPlainObject = i;
  function o(l) {
    return l.charCodeAt(0) <= 127;
  }
  e.isASCII = o;
  function a(l) {
    var u;
    return l.split("").reduce((h, b) => o(b) ? h + 1 : h + 2, 0) + ((u = l.match(e.ESCAPE_CHARACTERS_REGEXP)) !== null && u !== void 0 ? u : []).length;
  }
  e.calculateStringSize = a;
  function c(l) {
    return l.toString().length;
  }
  e.calculateNumberSize = c;
})(Ml);
var Ke = {};
Object.defineProperty(Ke, "__esModule", { value: !0 });
Ke.hexToBigInt = Ke.hexToNumber = Ke.bigIntToHex = Ke.numberToHex = void 0;
const Ht = ye, gr = $r, K1 = (e) => ((0, Ht.assert)(typeof e == "number", "Value must be a number."), (0, Ht.assert)(e >= 0, "Value must be a non-negative number."), (0, Ht.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToHex` instead."), (0, gr.add0x)(e.toString(16)));
Ke.numberToHex = K1;
const Q1 = (e) => ((0, Ht.assert)(typeof e == "bigint", "Value must be a bigint."), (0, Ht.assert)(e >= 0, "Value must be a non-negative bigint."), (0, gr.add0x)(e.toString(16)));
Ke.bigIntToHex = Q1;
const Y1 = (e) => {
  (0, gr.assertIsHexString)(e);
  const t = parseInt(e, 16);
  return (0, Ht.assert)(Number.isSafeInteger(t), "Value is not a safe integer. Use `hexToBigInt` instead."), t;
};
Ke.hexToNumber = Y1;
const X1 = (e) => ((0, gr.assertIsHexString)(e), BigInt((0, gr.add0x)(e)));
Ke.hexToBigInt = X1;
var xl = {};
Object.defineProperty(xl, "__esModule", { value: !0 });
var Nl = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.timeSince = e.inMilliseconds = e.Duration = void 0, function(i) {
    i[i.Millisecond = 1] = "Millisecond", i[i.Second = 1e3] = "Second", i[i.Minute = 6e4] = "Minute", i[i.Hour = 36e5] = "Hour", i[i.Day = 864e5] = "Day", i[i.Week = 6048e5] = "Week", i[i.Year = 31536e6] = "Year";
  }(e.Duration || (e.Duration = {}));
  const t = (i) => Number.isInteger(i) && i >= 0, r = (i, o) => {
    if (!t(i))
      throw new Error(`"${o}" must be a non-negative integer. Received: "${i}".`);
  };
  function n(i, o) {
    return r(i, "count"), i * o;
  }
  e.inMilliseconds = n;
  function s(i) {
    return r(i, "timestamp"), Date.now() - i;
  }
  e.timeSince = s;
})(Nl);
var Ll = {};
Object.defineProperty(Ll, "__esModule", { value: !0 });
var Ol = {}, Fi = { exports: {} };
const ep = "2.0.0", Pl = 256, tp = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, rp = 16, np = Pl - 6, sp = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var Gn = {
  MAX_LENGTH: Pl,
  MAX_SAFE_COMPONENT_LENGTH: rp,
  MAX_SAFE_BUILD_LENGTH: np,
  MAX_SAFE_INTEGER: tp,
  RELEASE_TYPES: sp,
  SEMVER_SPEC_VERSION: ep,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const ip = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
};
var Jn = ip;
(function(e, t) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: n,
    MAX_LENGTH: s
  } = Gn, i = Jn;
  t = e.exports = {};
  const o = t.re = [], a = t.safeRe = [], c = t.src = [], l = t.t = {};
  let u = 0;
  const d = "[a-zA-Z0-9-]", h = [
    ["\\s", 1],
    ["\\d", s],
    [d, n]
  ], b = (R) => {
    for (const [E, g] of h)
      R = R.split(`${E}*`).join(`${E}{0,${g}}`).split(`${E}+`).join(`${E}{1,${g}}`);
    return R;
  }, m = (R, E, g) => {
    const y = b(E), _ = u++;
    i(R, _, E), l[R] = _, c[_] = E, o[_] = new RegExp(E, g ? "g" : void 0), a[_] = new RegExp(y, g ? "g" : void 0);
  };
  m("NUMERICIDENTIFIER", "0|[1-9]\\d*"), m("NUMERICIDENTIFIERLOOSE", "\\d+"), m("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${d}*`), m("MAINVERSION", `(${c[l.NUMERICIDENTIFIER]})\\.(${c[l.NUMERICIDENTIFIER]})\\.(${c[l.NUMERICIDENTIFIER]})`), m("MAINVERSIONLOOSE", `(${c[l.NUMERICIDENTIFIERLOOSE]})\\.(${c[l.NUMERICIDENTIFIERLOOSE]})\\.(${c[l.NUMERICIDENTIFIERLOOSE]})`), m("PRERELEASEIDENTIFIER", `(?:${c[l.NUMERICIDENTIFIER]}|${c[l.NONNUMERICIDENTIFIER]})`), m("PRERELEASEIDENTIFIERLOOSE", `(?:${c[l.NUMERICIDENTIFIERLOOSE]}|${c[l.NONNUMERICIDENTIFIER]})`), m("PRERELEASE", `(?:-(${c[l.PRERELEASEIDENTIFIER]}(?:\\.${c[l.PRERELEASEIDENTIFIER]})*))`), m("PRERELEASELOOSE", `(?:-?(${c[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[l.PRERELEASEIDENTIFIERLOOSE]})*))`), m("BUILDIDENTIFIER", `${d}+`), m("BUILD", `(?:\\+(${c[l.BUILDIDENTIFIER]}(?:\\.${c[l.BUILDIDENTIFIER]})*))`), m("FULLPLAIN", `v?${c[l.MAINVERSION]}${c[l.PRERELEASE]}?${c[l.BUILD]}?`), m("FULL", `^${c[l.FULLPLAIN]}$`), m("LOOSEPLAIN", `[v=\\s]*${c[l.MAINVERSIONLOOSE]}${c[l.PRERELEASELOOSE]}?${c[l.BUILD]}?`), m("LOOSE", `^${c[l.LOOSEPLAIN]}$`), m("GTLT", "((?:<|>)?=?)"), m("XRANGEIDENTIFIERLOOSE", `${c[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), m("XRANGEIDENTIFIER", `${c[l.NUMERICIDENTIFIER]}|x|X|\\*`), m("XRANGEPLAIN", `[v=\\s]*(${c[l.XRANGEIDENTIFIER]})(?:\\.(${c[l.XRANGEIDENTIFIER]})(?:\\.(${c[l.XRANGEIDENTIFIER]})(?:${c[l.PRERELEASE]})?${c[l.BUILD]}?)?)?`), m("XRANGEPLAINLOOSE", `[v=\\s]*(${c[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[l.XRANGEIDENTIFIERLOOSE]})(?:${c[l.PRERELEASELOOSE]})?${c[l.BUILD]}?)?)?`), m("XRANGE", `^${c[l.GTLT]}\\s*${c[l.XRANGEPLAIN]}$`), m("XRANGELOOSE", `^${c[l.GTLT]}\\s*${c[l.XRANGEPLAINLOOSE]}$`), m("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), m("COERCE", `${c[l.COERCEPLAIN]}(?:$|[^\\d])`), m("COERCEFULL", c[l.COERCEPLAIN] + `(?:${c[l.PRERELEASE]})?(?:${c[l.BUILD]})?(?:$|[^\\d])`), m("COERCERTL", c[l.COERCE], !0), m("COERCERTLFULL", c[l.COERCEFULL], !0), m("LONETILDE", "(?:~>?)"), m("TILDETRIM", `(\\s*)${c[l.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", m("TILDE", `^${c[l.LONETILDE]}${c[l.XRANGEPLAIN]}$`), m("TILDELOOSE", `^${c[l.LONETILDE]}${c[l.XRANGEPLAINLOOSE]}$`), m("LONECARET", "(?:\\^)"), m("CARETTRIM", `(\\s*)${c[l.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", m("CARET", `^${c[l.LONECARET]}${c[l.XRANGEPLAIN]}$`), m("CARETLOOSE", `^${c[l.LONECARET]}${c[l.XRANGEPLAINLOOSE]}$`), m("COMPARATORLOOSE", `^${c[l.GTLT]}\\s*(${c[l.LOOSEPLAIN]})$|^$`), m("COMPARATOR", `^${c[l.GTLT]}\\s*(${c[l.FULLPLAIN]})$|^$`), m("COMPARATORTRIM", `(\\s*)${c[l.GTLT]}\\s*(${c[l.LOOSEPLAIN]}|${c[l.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", m("HYPHENRANGE", `^\\s*(${c[l.XRANGEPLAIN]})\\s+-\\s+(${c[l.XRANGEPLAIN]})\\s*$`), m("HYPHENRANGELOOSE", `^\\s*(${c[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[l.XRANGEPLAINLOOSE]})\\s*$`), m("STAR", "(<|>)?=?\\s*\\*"), m("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), m("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Fi, Fi.exports);
var Br = Fi.exports;
const op = Object.freeze({ loose: !0 }), ap = Object.freeze({}), cp = (e) => e ? typeof e != "object" ? op : e : ap;
var co = cp;
const va = /^[0-9]+$/, $l = (e, t) => {
  const r = va.test(e), n = va.test(t);
  return r && n && (e = +e, t = +t), e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1;
}, lp = (e, t) => $l(t, e);
var Bl = {
  compareIdentifiers: $l,
  rcompareIdentifiers: lp
};
const Zr = Jn, { MAX_LENGTH: Ea, MAX_SAFE_INTEGER: Kr } = Gn, { safeRe: Sa, t: Ra } = Br, up = co, { compareIdentifiers: Pt } = Bl;
let dp = class Ve {
  constructor(t, r) {
    if (r = up(r), t instanceof Ve) {
      if (t.loose === !!r.loose && t.includePrerelease === !!r.includePrerelease)
        return t;
      t = t.version;
    } else if (typeof t != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
    if (t.length > Ea)
      throw new TypeError(
        `version is longer than ${Ea} characters`
      );
    Zr("SemVer", t, r), this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
    const n = t.trim().match(r.loose ? Sa[Ra.LOOSE] : Sa[Ra.FULL]);
    if (!n)
      throw new TypeError(`Invalid Version: ${t}`);
    if (this.raw = t, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > Kr || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > Kr || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > Kr || this.patch < 0)
      throw new TypeError("Invalid patch version");
    n[4] ? this.prerelease = n[4].split(".").map((s) => {
      if (/^[0-9]+$/.test(s)) {
        const i = +s;
        if (i >= 0 && i < Kr)
          return i;
      }
      return s;
    }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(t) {
    if (Zr("SemVer.compare", this.version, this.options, t), !(t instanceof Ve)) {
      if (typeof t == "string" && t === this.version)
        return 0;
      t = new Ve(t, this.options);
    }
    return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
  }
  compareMain(t) {
    return t instanceof Ve || (t = new Ve(t, this.options)), Pt(this.major, t.major) || Pt(this.minor, t.minor) || Pt(this.patch, t.patch);
  }
  comparePre(t) {
    if (t instanceof Ve || (t = new Ve(t, this.options)), this.prerelease.length && !t.prerelease.length)
      return -1;
    if (!this.prerelease.length && t.prerelease.length)
      return 1;
    if (!this.prerelease.length && !t.prerelease.length)
      return 0;
    let r = 0;
    do {
      const n = this.prerelease[r], s = t.prerelease[r];
      if (Zr("prerelease compare", r, n, s), n === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (n === void 0)
        return -1;
      if (n === s)
        continue;
      return Pt(n, s);
    } while (++r);
  }
  compareBuild(t) {
    t instanceof Ve || (t = new Ve(t, this.options));
    let r = 0;
    do {
      const n = this.build[r], s = t.build[r];
      if (Zr("build compare", r, n, s), n === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (n === void 0)
        return -1;
      if (n === s)
        continue;
      return Pt(n, s);
    } while (++r);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(t, r, n) {
    switch (t) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", r, n);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", r, n);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", r, n), this.inc("pre", r, n);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", r, n), this.inc("pre", r, n);
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre": {
        const s = Number(n) ? 1 : 0;
        if (!r && n === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (this.prerelease.length === 0)
          this.prerelease = [s];
        else {
          let i = this.prerelease.length;
          for (; --i >= 0; )
            typeof this.prerelease[i] == "number" && (this.prerelease[i]++, i = -2);
          if (i === -1) {
            if (r === this.prerelease.join(".") && n === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(s);
          }
        }
        if (r) {
          let i = [r, s];
          n === !1 && (i = [r]), Pt(this.prerelease[0], r) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = i) : this.prerelease = i;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${t}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var Se = dp;
const Ca = Se, hp = (e, t, r = !1) => {
  if (e instanceof Ca)
    return e;
  try {
    return new Ca(e, t);
  } catch (n) {
    if (!r)
      return null;
    throw n;
  }
};
var ir = hp;
const fp = ir, pp = (e, t) => {
  const r = fp(e, t);
  return r ? r.version : null;
};
var gp = pp;
const bp = ir, mp = (e, t) => {
  const r = bp(e.trim().replace(/^[=v]+/, ""), t);
  return r ? r.version : null;
};
var _p = mp;
const ka = Se, yp = (e, t, r, n, s) => {
  typeof r == "string" && (s = n, n = r, r = void 0);
  try {
    return new ka(
      e instanceof ka ? e.version : e,
      r
    ).inc(t, n, s).version;
  } catch {
    return null;
  }
};
var wp = yp;
const Ia = ir, vp = (e, t) => {
  const r = Ia(e, null, !0), n = Ia(t, null, !0), s = r.compare(n);
  if (s === 0)
    return null;
  const i = s > 0, o = i ? r : n, a = i ? n : r, c = !!o.prerelease.length;
  if (!!a.prerelease.length && !c)
    return !a.patch && !a.minor ? "major" : o.patch ? "patch" : o.minor ? "minor" : "major";
  const u = c ? "pre" : "";
  return r.major !== n.major ? u + "major" : r.minor !== n.minor ? u + "minor" : r.patch !== n.patch ? u + "patch" : "prerelease";
};
var Ep = vp;
const Sp = Se, Rp = (e, t) => new Sp(e, t).major;
var Cp = Rp;
const kp = Se, Ip = (e, t) => new kp(e, t).minor;
var Ap = Ip;
const Tp = Se, Mp = (e, t) => new Tp(e, t).patch;
var xp = Mp;
const Np = ir, Lp = (e, t) => {
  const r = Np(e, t);
  return r && r.prerelease.length ? r.prerelease : null;
};
var Op = Lp;
const Aa = Se, Pp = (e, t, r) => new Aa(e, r).compare(new Aa(t, r));
var De = Pp;
const $p = De, Bp = (e, t, r) => $p(t, e, r);
var Fp = Bp;
const Dp = De, jp = (e, t) => Dp(e, t, !0);
var Hp = jp;
const Ta = Se, Up = (e, t, r) => {
  const n = new Ta(e, r), s = new Ta(t, r);
  return n.compare(s) || n.compareBuild(s);
};
var lo = Up;
const Wp = lo, Vp = (e, t) => e.sort((r, n) => Wp(r, n, t));
var zp = Vp;
const qp = lo, Gp = (e, t) => e.sort((r, n) => qp(n, r, t));
var Jp = Gp;
const Zp = De, Kp = (e, t, r) => Zp(e, t, r) > 0;
var Zn = Kp;
const Qp = De, Yp = (e, t, r) => Qp(e, t, r) < 0;
var uo = Yp;
const Xp = De, eg = (e, t, r) => Xp(e, t, r) === 0;
var Fl = eg;
const tg = De, rg = (e, t, r) => tg(e, t, r) !== 0;
var Dl = rg;
const ng = De, sg = (e, t, r) => ng(e, t, r) >= 0;
var ho = sg;
const ig = De, og = (e, t, r) => ig(e, t, r) <= 0;
var fo = og;
const ag = Fl, cg = Dl, lg = Zn, ug = ho, dg = uo, hg = fo, fg = (e, t, r, n) => {
  switch (t) {
    case "===":
      return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e === r;
    case "!==":
      return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e !== r;
    case "":
    case "=":
    case "==":
      return ag(e, r, n);
    case "!=":
      return cg(e, r, n);
    case ">":
      return lg(e, r, n);
    case ">=":
      return ug(e, r, n);
    case "<":
      return dg(e, r, n);
    case "<=":
      return hg(e, r, n);
    default:
      throw new TypeError(`Invalid operator: ${t}`);
  }
};
var jl = fg;
const pg = Se, gg = ir, { safeRe: Qr, t: Yr } = Br, bg = (e, t) => {
  if (e instanceof pg)
    return e;
  if (typeof e == "number" && (e = String(e)), typeof e != "string")
    return null;
  t = t || {};
  let r = null;
  if (!t.rtl)
    r = e.match(t.includePrerelease ? Qr[Yr.COERCEFULL] : Qr[Yr.COERCE]);
  else {
    const c = t.includePrerelease ? Qr[Yr.COERCERTLFULL] : Qr[Yr.COERCERTL];
    let l;
    for (; (l = c.exec(e)) && (!r || r.index + r[0].length !== e.length); )
      (!r || l.index + l[0].length !== r.index + r[0].length) && (r = l), c.lastIndex = l.index + l[1].length + l[2].length;
    c.lastIndex = -1;
  }
  if (r === null)
    return null;
  const n = r[2], s = r[3] || "0", i = r[4] || "0", o = t.includePrerelease && r[5] ? `-${r[5]}` : "", a = t.includePrerelease && r[6] ? `+${r[6]}` : "";
  return gg(`${n}.${s}.${i}${o}${a}`, t);
};
var mg = bg;
class _g {
  constructor() {
    this.max = 1e3, this.map = /* @__PURE__ */ new Map();
  }
  get(t) {
    const r = this.map.get(t);
    if (r !== void 0)
      return this.map.delete(t), this.map.set(t, r), r;
  }
  delete(t) {
    return this.map.delete(t);
  }
  set(t, r) {
    if (!this.delete(t) && r !== void 0) {
      if (this.map.size >= this.max) {
        const s = this.map.keys().next().value;
        this.delete(s);
      }
      this.map.set(t, r);
    }
    return this;
  }
}
var yg = _g, Ei, Ma;
function je() {
  if (Ma) return Ei;
  Ma = 1;
  const e = /\s+/g;
  class t {
    constructor(I, $) {
      if ($ = s($), I instanceof t)
        return I.loose === !!$.loose && I.includePrerelease === !!$.includePrerelease ? I : new t(I.raw, $);
      if (I instanceof i)
        return this.raw = I.value, this.set = [[I]], this.formatted = void 0, this;
      if (this.options = $, this.loose = !!$.loose, this.includePrerelease = !!$.includePrerelease, this.raw = I.trim().replace(e, " "), this.set = this.raw.split("||").map((N) => this.parseRange(N.trim())).filter((N) => N.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const N = this.set[0];
        if (this.set = this.set.filter((F) => !R(F[0])), this.set.length === 0)
          this.set = [N];
        else if (this.set.length > 1) {
          for (const F of this.set)
            if (F.length === 1 && E(F[0])) {
              this.set = [F];
              break;
            }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let I = 0; I < this.set.length; I++) {
          I > 0 && (this.formatted += "||");
          const $ = this.set[I];
          for (let N = 0; N < $.length; N++)
            N > 0 && (this.formatted += " "), this.formatted += $[N].toString().trim();
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(I) {
      const N = ((this.options.includePrerelease && b) | (this.options.loose && m)) + ":" + I, F = n.get(N);
      if (F)
        return F;
      const L = this.options.loose, H = L ? c[l.HYPHENRANGELOOSE] : c[l.HYPHENRANGE];
      I = I.replace(H, ne(this.options.includePrerelease)), o("hyphen replace", I), I = I.replace(c[l.COMPARATORTRIM], u), o("comparator trim", I), I = I.replace(c[l.TILDETRIM], d), o("tilde trim", I), I = I.replace(c[l.CARETTRIM], h), o("caret trim", I);
      let Z = I.split(" ").map((te) => y(te, this.options)).join(" ").split(/\s+/).map((te) => oe(te, this.options));
      L && (Z = Z.filter((te) => (o("loose invalid filter", te, this.options), !!te.match(c[l.COMPARATORLOOSE])))), o("range list", Z);
      const W = /* @__PURE__ */ new Map(), K = Z.map((te) => new i(te, this.options));
      for (const te of K) {
        if (R(te))
          return [te];
        W.set(te.value, te);
      }
      W.size > 1 && W.has("") && W.delete("");
      const ue = [...W.values()];
      return n.set(N, ue), ue;
    }
    intersects(I, $) {
      if (!(I instanceof t))
        throw new TypeError("a Range is required");
      return this.set.some((N) => g(N, $) && I.set.some((F) => g(F, $) && N.every((L) => F.every((H) => L.intersects(H, $)))));
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(I) {
      if (!I)
        return !1;
      if (typeof I == "string")
        try {
          I = new a(I, this.options);
        } catch {
          return !1;
        }
      for (let $ = 0; $ < this.set.length; $++)
        if (se(this.set[$], I, this.options))
          return !0;
      return !1;
    }
  }
  Ei = t;
  const r = yg, n = new r(), s = co, i = Kn(), o = Jn, a = Se, {
    safeRe: c,
    t: l,
    comparatorTrimReplace: u,
    tildeTrimReplace: d,
    caretTrimReplace: h
  } = Br, { FLAG_INCLUDE_PRERELEASE: b, FLAG_LOOSE: m } = Gn, R = (M) => M.value === "<0.0.0-0", E = (M) => M.value === "", g = (M, I) => {
    let $ = !0;
    const N = M.slice();
    let F = N.pop();
    for (; $ && N.length; )
      $ = N.every((L) => F.intersects(L, I)), F = N.pop();
    return $;
  }, y = (M, I) => (o("comp", M, I), M = T(M, I), o("caret", M), M = C(M, I), o("tildes", M), M = B(M, I), o("xrange", M), M = Q(M, I), o("stars", M), M), _ = (M) => !M || M.toLowerCase() === "x" || M === "*", C = (M, I) => M.trim().split(/\s+/).map(($) => S($, I)).join(" "), S = (M, I) => {
    const $ = I.loose ? c[l.TILDELOOSE] : c[l.TILDE];
    return M.replace($, (N, F, L, H, Z) => {
      o("tilde", M, N, F, L, H, Z);
      let W;
      return _(F) ? W = "" : _(L) ? W = `>=${F}.0.0 <${+F + 1}.0.0-0` : _(H) ? W = `>=${F}.${L}.0 <${F}.${+L + 1}.0-0` : Z ? (o("replaceTilde pr", Z), W = `>=${F}.${L}.${H}-${Z} <${F}.${+L + 1}.0-0`) : W = `>=${F}.${L}.${H} <${F}.${+L + 1}.0-0`, o("tilde return", W), W;
    });
  }, T = (M, I) => M.trim().split(/\s+/).map(($) => U($, I)).join(" "), U = (M, I) => {
    o("caret", M, I);
    const $ = I.loose ? c[l.CARETLOOSE] : c[l.CARET], N = I.includePrerelease ? "-0" : "";
    return M.replace($, (F, L, H, Z, W) => {
      o("caret", M, F, L, H, Z, W);
      let K;
      return _(L) ? K = "" : _(H) ? K = `>=${L}.0.0${N} <${+L + 1}.0.0-0` : _(Z) ? L === "0" ? K = `>=${L}.${H}.0${N} <${L}.${+H + 1}.0-0` : K = `>=${L}.${H}.0${N} <${+L + 1}.0.0-0` : W ? (o("replaceCaret pr", W), L === "0" ? H === "0" ? K = `>=${L}.${H}.${Z}-${W} <${L}.${H}.${+Z + 1}-0` : K = `>=${L}.${H}.${Z}-${W} <${L}.${+H + 1}.0-0` : K = `>=${L}.${H}.${Z}-${W} <${+L + 1}.0.0-0`) : (o("no pr"), L === "0" ? H === "0" ? K = `>=${L}.${H}.${Z}${N} <${L}.${H}.${+Z + 1}-0` : K = `>=${L}.${H}.${Z}${N} <${L}.${+H + 1}.0-0` : K = `>=${L}.${H}.${Z} <${+L + 1}.0.0-0`), o("caret return", K), K;
    });
  }, B = (M, I) => (o("replaceXRanges", M, I), M.split(/\s+/).map(($) => P($, I)).join(" ")), P = (M, I) => {
    M = M.trim();
    const $ = I.loose ? c[l.XRANGELOOSE] : c[l.XRANGE];
    return M.replace($, (N, F, L, H, Z, W) => {
      o("xRange", M, N, F, L, H, Z, W);
      const K = _(L), ue = K || _(H), te = ue || _(Z), w = te;
      return F === "=" && w && (F = ""), W = I.includePrerelease ? "-0" : "", K ? F === ">" || F === "<" ? N = "<0.0.0-0" : N = "*" : F && w ? (ue && (H = 0), Z = 0, F === ">" ? (F = ">=", ue ? (L = +L + 1, H = 0, Z = 0) : (H = +H + 1, Z = 0)) : F === "<=" && (F = "<", ue ? L = +L + 1 : H = +H + 1), F === "<" && (W = "-0"), N = `${F + L}.${H}.${Z}${W}`) : ue ? N = `>=${L}.0.0${W} <${+L + 1}.0.0-0` : te && (N = `>=${L}.${H}.0${W} <${L}.${+H + 1}.0-0`), o("xRange return", N), N;
    });
  }, Q = (M, I) => (o("replaceStars", M, I), M.trim().replace(c[l.STAR], "")), oe = (M, I) => (o("replaceGTE0", M, I), M.trim().replace(c[I.includePrerelease ? l.GTE0PRE : l.GTE0], "")), ne = (M) => (I, $, N, F, L, H, Z, W, K, ue, te, w) => (_(N) ? $ = "" : _(F) ? $ = `>=${N}.0.0${M ? "-0" : ""}` : _(L) ? $ = `>=${N}.${F}.0${M ? "-0" : ""}` : H ? $ = `>=${$}` : $ = `>=${$}${M ? "-0" : ""}`, _(K) ? W = "" : _(ue) ? W = `<${+K + 1}.0.0-0` : _(te) ? W = `<${K}.${+ue + 1}.0-0` : w ? W = `<=${K}.${ue}.${te}-${w}` : M ? W = `<${K}.${ue}.${+te + 1}-0` : W = `<=${W}`, `${$} ${W}`.trim()), se = (M, I, $) => {
    for (let N = 0; N < M.length; N++)
      if (!M[N].test(I))
        return !1;
    if (I.prerelease.length && !$.includePrerelease) {
      for (let N = 0; N < M.length; N++)
        if (o(M[N].semver), M[N].semver !== i.ANY && M[N].semver.prerelease.length > 0) {
          const F = M[N].semver;
          if (F.major === I.major && F.minor === I.minor && F.patch === I.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return Ei;
}
var Si, xa;
function Kn() {
  if (xa) return Si;
  xa = 1;
  const e = Symbol("SemVer ANY");
  class t {
    static get ANY() {
      return e;
    }
    constructor(u, d) {
      if (d = r(d), u instanceof t) {
        if (u.loose === !!d.loose)
          return u;
        u = u.value;
      }
      u = u.trim().split(/\s+/).join(" "), o("comparator", u, d), this.options = d, this.loose = !!d.loose, this.parse(u), this.semver === e ? this.value = "" : this.value = this.operator + this.semver.version, o("comp", this);
    }
    parse(u) {
      const d = this.options.loose ? n[s.COMPARATORLOOSE] : n[s.COMPARATOR], h = u.match(d);
      if (!h)
        throw new TypeError(`Invalid comparator: ${u}`);
      this.operator = h[1] !== void 0 ? h[1] : "", this.operator === "=" && (this.operator = ""), h[2] ? this.semver = new a(h[2], this.options.loose) : this.semver = e;
    }
    toString() {
      return this.value;
    }
    test(u) {
      if (o("Comparator.test", u, this.options.loose), this.semver === e || u === e)
        return !0;
      if (typeof u == "string")
        try {
          u = new a(u, this.options);
        } catch {
          return !1;
        }
      return i(u, this.operator, this.semver, this.options);
    }
    intersects(u, d) {
      if (!(u instanceof t))
        throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? !0 : new c(u.value, d).test(this.value) : u.operator === "" ? u.value === "" ? !0 : new c(this.value, d).test(u.semver) : (d = r(d), d.includePrerelease && (this.value === "<0.0.0-0" || u.value === "<0.0.0-0") || !d.includePrerelease && (this.value.startsWith("<0.0.0") || u.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && u.operator.startsWith(">") || this.operator.startsWith("<") && u.operator.startsWith("<") || this.semver.version === u.semver.version && this.operator.includes("=") && u.operator.includes("=") || i(this.semver, "<", u.semver, d) && this.operator.startsWith(">") && u.operator.startsWith("<") || i(this.semver, ">", u.semver, d) && this.operator.startsWith("<") && u.operator.startsWith(">")));
    }
  }
  Si = t;
  const r = co, { safeRe: n, t: s } = Br, i = jl, o = Jn, a = Se, c = je();
  return Si;
}
const wg = je(), vg = (e, t, r) => {
  try {
    t = new wg(t, r);
  } catch {
    return !1;
  }
  return t.test(e);
};
var Qn = vg;
const Eg = je(), Sg = (e, t) => new Eg(e, t).set.map((r) => r.map((n) => n.value).join(" ").trim().split(" "));
var Rg = Sg;
const Cg = Se, kg = je(), Ig = (e, t, r) => {
  let n = null, s = null, i = null;
  try {
    i = new kg(t, r);
  } catch {
    return null;
  }
  return e.forEach((o) => {
    i.test(o) && (!n || s.compare(o) === -1) && (n = o, s = new Cg(n, r));
  }), n;
};
var Ag = Ig;
const Tg = Se, Mg = je(), xg = (e, t, r) => {
  let n = null, s = null, i = null;
  try {
    i = new Mg(t, r);
  } catch {
    return null;
  }
  return e.forEach((o) => {
    i.test(o) && (!n || s.compare(o) === 1) && (n = o, s = new Tg(n, r));
  }), n;
};
var Ng = xg;
const Ri = Se, Lg = je(), Na = Zn, Og = (e, t) => {
  e = new Lg(e, t);
  let r = new Ri("0.0.0");
  if (e.test(r) || (r = new Ri("0.0.0-0"), e.test(r)))
    return r;
  r = null;
  for (let n = 0; n < e.set.length; ++n) {
    const s = e.set[n];
    let i = null;
    s.forEach((o) => {
      const a = new Ri(o.semver.version);
      switch (o.operator) {
        case ">":
          a.prerelease.length === 0 ? a.patch++ : a.prerelease.push(0), a.raw = a.format();
        case "":
        case ">=":
          (!i || Na(a, i)) && (i = a);
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${o.operator}`);
      }
    }), i && (!r || Na(r, i)) && (r = i);
  }
  return r && e.test(r) ? r : null;
};
var Pg = Og;
const $g = je(), Bg = (e, t) => {
  try {
    return new $g(e, t).range || "*";
  } catch {
    return null;
  }
};
var Fg = Bg;
const Dg = Se, Hl = Kn(), { ANY: jg } = Hl, Hg = je(), Ug = Qn, La = Zn, Oa = uo, Wg = fo, Vg = ho, zg = (e, t, r, n) => {
  e = new Dg(e, n), t = new Hg(t, n);
  let s, i, o, a, c;
  switch (r) {
    case ">":
      s = La, i = Wg, o = Oa, a = ">", c = ">=";
      break;
    case "<":
      s = Oa, i = Vg, o = La, a = "<", c = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (Ug(e, t, n))
    return !1;
  for (let l = 0; l < t.set.length; ++l) {
    const u = t.set[l];
    let d = null, h = null;
    if (u.forEach((b) => {
      b.semver === jg && (b = new Hl(">=0.0.0")), d = d || b, h = h || b, s(b.semver, d.semver, n) ? d = b : o(b.semver, h.semver, n) && (h = b);
    }), d.operator === a || d.operator === c || (!h.operator || h.operator === a) && i(e, h.semver))
      return !1;
    if (h.operator === c && o(e, h.semver))
      return !1;
  }
  return !0;
};
var po = zg;
const qg = po, Gg = (e, t, r) => qg(e, t, ">", r);
var Jg = Gg;
const Zg = po, Kg = (e, t, r) => Zg(e, t, "<", r);
var Qg = Kg;
const Pa = je(), Yg = (e, t, r) => (e = new Pa(e, r), t = new Pa(t, r), e.intersects(t, r));
var Xg = Yg;
const eb = Qn, tb = De;
var rb = (e, t, r) => {
  const n = [];
  let s = null, i = null;
  const o = e.sort((u, d) => tb(u, d, r));
  for (const u of o)
    eb(u, t, r) ? (i = u, s || (s = u)) : (i && n.push([s, i]), i = null, s = null);
  s && n.push([s, null]);
  const a = [];
  for (const [u, d] of n)
    u === d ? a.push(u) : !d && u === o[0] ? a.push("*") : d ? u === o[0] ? a.push(`<=${d}`) : a.push(`${u} - ${d}`) : a.push(`>=${u}`);
  const c = a.join(" || "), l = typeof t.raw == "string" ? t.raw : String(t);
  return c.length < l.length ? c : t;
};
const $a = je(), go = Kn(), { ANY: Ci } = go, lr = Qn, bo = De, nb = (e, t, r = {}) => {
  if (e === t)
    return !0;
  e = new $a(e, r), t = new $a(t, r);
  let n = !1;
  e: for (const s of e.set) {
    for (const i of t.set) {
      const o = ib(s, i, r);
      if (n = n || o !== null, o)
        continue e;
    }
    if (n)
      return !1;
  }
  return !0;
}, sb = [new go(">=0.0.0-0")], Ba = [new go(">=0.0.0")], ib = (e, t, r) => {
  if (e === t)
    return !0;
  if (e.length === 1 && e[0].semver === Ci) {
    if (t.length === 1 && t[0].semver === Ci)
      return !0;
    r.includePrerelease ? e = sb : e = Ba;
  }
  if (t.length === 1 && t[0].semver === Ci) {
    if (r.includePrerelease)
      return !0;
    t = Ba;
  }
  const n = /* @__PURE__ */ new Set();
  let s, i;
  for (const b of e)
    b.operator === ">" || b.operator === ">=" ? s = Fa(s, b, r) : b.operator === "<" || b.operator === "<=" ? i = Da(i, b, r) : n.add(b.semver);
  if (n.size > 1)
    return null;
  let o;
  if (s && i) {
    if (o = bo(s.semver, i.semver, r), o > 0)
      return null;
    if (o === 0 && (s.operator !== ">=" || i.operator !== "<="))
      return null;
  }
  for (const b of n) {
    if (s && !lr(b, String(s), r) || i && !lr(b, String(i), r))
      return null;
    for (const m of t)
      if (!lr(b, String(m), r))
        return !1;
    return !0;
  }
  let a, c, l, u, d = i && !r.includePrerelease && i.semver.prerelease.length ? i.semver : !1, h = s && !r.includePrerelease && s.semver.prerelease.length ? s.semver : !1;
  d && d.prerelease.length === 1 && i.operator === "<" && d.prerelease[0] === 0 && (d = !1);
  for (const b of t) {
    if (u = u || b.operator === ">" || b.operator === ">=", l = l || b.operator === "<" || b.operator === "<=", s) {
      if (h && b.semver.prerelease && b.semver.prerelease.length && b.semver.major === h.major && b.semver.minor === h.minor && b.semver.patch === h.patch && (h = !1), b.operator === ">" || b.operator === ">=") {
        if (a = Fa(s, b, r), a === b && a !== s)
          return !1;
      } else if (s.operator === ">=" && !lr(s.semver, String(b), r))
        return !1;
    }
    if (i) {
      if (d && b.semver.prerelease && b.semver.prerelease.length && b.semver.major === d.major && b.semver.minor === d.minor && b.semver.patch === d.patch && (d = !1), b.operator === "<" || b.operator === "<=") {
        if (c = Da(i, b, r), c === b && c !== i)
          return !1;
      } else if (i.operator === "<=" && !lr(i.semver, String(b), r))
        return !1;
    }
    if (!b.operator && (i || s) && o !== 0)
      return !1;
  }
  return !(s && l && !i && o !== 0 || i && u && !s && o !== 0 || h || d);
}, Fa = (e, t, r) => {
  if (!e)
    return t;
  const n = bo(e.semver, t.semver, r);
  return n > 0 ? e : n < 0 || t.operator === ">" && e.operator === ">=" ? t : e;
}, Da = (e, t, r) => {
  if (!e)
    return t;
  const n = bo(e.semver, t.semver, r);
  return n < 0 ? e : n > 0 || t.operator === "<" && e.operator === "<=" ? t : e;
};
var ob = nb;
const ki = Br, ja = Gn, ab = Se, Ha = Bl, cb = ir, lb = gp, ub = _p, db = wp, hb = Ep, fb = Cp, pb = Ap, gb = xp, bb = Op, mb = De, _b = Fp, yb = Hp, wb = lo, vb = zp, Eb = Jp, Sb = Zn, Rb = uo, Cb = Fl, kb = Dl, Ib = ho, Ab = fo, Tb = jl, Mb = mg, xb = Kn(), Nb = je(), Lb = Qn, Ob = Rg, Pb = Ag, $b = Ng, Bb = Pg, Fb = Fg, Db = po, jb = Jg, Hb = Qg, Ub = Xg, Wb = rb, Vb = ob;
var zb = {
  parse: cb,
  valid: lb,
  clean: ub,
  inc: db,
  diff: hb,
  major: fb,
  minor: pb,
  patch: gb,
  prerelease: bb,
  compare: mb,
  rcompare: _b,
  compareLoose: yb,
  compareBuild: wb,
  sort: vb,
  rsort: Eb,
  gt: Sb,
  lt: Rb,
  eq: Cb,
  neq: kb,
  gte: Ib,
  lte: Ab,
  cmp: Tb,
  coerce: Mb,
  Comparator: xb,
  Range: Nb,
  satisfies: Lb,
  toComparators: Ob,
  maxSatisfying: Pb,
  minSatisfying: $b,
  minVersion: Bb,
  validRange: Fb,
  outside: Db,
  gtr: jb,
  ltr: Hb,
  intersects: Ub,
  simplifyRange: Wb,
  subset: Vb,
  SemVer: ab,
  re: ki.re,
  src: ki.src,
  tokens: ki.t,
  SEMVER_SPEC_VERSION: ja.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: ja.RELEASE_TYPES,
  compareIdentifiers: Ha.compareIdentifiers,
  rcompareIdentifiers: Ha.rcompareIdentifiers
};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.satisfiesVersionRange = e.gtRange = e.gtVersion = e.assertIsSemVerRange = e.assertIsSemVerVersion = e.isValidSemVerRange = e.isValidSemVerVersion = e.VersionRangeStruct = e.VersionStruct = void 0;
  const t = zb, r = It, n = ye;
  e.VersionStruct = (0, r.refine)((0, r.string)(), "Version", (d) => (0, t.valid)(d) === null ? `Expected SemVer version, got "${d}"` : !0), e.VersionRangeStruct = (0, r.refine)((0, r.string)(), "Version range", (d) => (0, t.validRange)(d) === null ? `Expected SemVer range, got "${d}"` : !0);
  function s(d) {
    return (0, r.is)(d, e.VersionStruct);
  }
  e.isValidSemVerVersion = s;
  function i(d) {
    return (0, r.is)(d, e.VersionRangeStruct);
  }
  e.isValidSemVerRange = i;
  function o(d) {
    (0, n.assertStruct)(d, e.VersionStruct);
  }
  e.assertIsSemVerVersion = o;
  function a(d) {
    (0, n.assertStruct)(d, e.VersionRangeStruct);
  }
  e.assertIsSemVerRange = a;
  function c(d, h) {
    return (0, t.gt)(d, h);
  }
  e.gtVersion = c;
  function l(d, h) {
    return (0, t.gtr)(d, h);
  }
  e.gtRange = l;
  function u(d, h) {
    return (0, t.satisfies)(d, h, {
      includePrerelease: !0
    });
  }
  e.satisfiesVersionRange = u;
})(Ol);
(function(e) {
  var t = D && D.__createBinding || (Object.create ? function(n, s, i, o) {
    o === void 0 && (o = i);
    var a = Object.getOwnPropertyDescriptor(s, i);
    (!a || ("get" in a ? !s.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
      return s[i];
    } }), Object.defineProperty(n, o, a);
  } : function(n, s, i, o) {
    o === void 0 && (o = i), n[o] = s[i];
  }), r = D && D.__exportStar || function(n, s) {
    for (var i in n) i !== "default" && !Object.prototype.hasOwnProperty.call(s, i) && t(s, n, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(ye, e), r(Pr, e), r(ee, e), r(zn, e), r(Ze, e), r(Jt, e), r(Il, e), r($r, e), r(Al, e), r(Tl, e), r(Zt, e), r(Ml, e), r(Ke, e), r(xl, e), r(Nl, e), r(Ll, e), r(Ol, e);
})(cl);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.createModuleLogger = e.projectLogger = void 0;
  const t = cl;
  Object.defineProperty(e, "createModuleLogger", { enumerable: !0, get: function() {
    return t.createModuleLogger;
  } }), e.projectLogger = (0, t.createProjectLogger)("eth-block-tracker");
})(al);
var Ul = D && D.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Wn, "__esModule", { value: !0 });
Wn.PollingBlockTracker = void 0;
const qb = Ul(Xi), Gb = Ul(_0), Jb = xr, Ua = al, Wa = (0, Ua.createModuleLogger)(Ua.projectLogger, "polling-block-tracker"), Zb = (0, qb.default)(), Kb = 1e3;
class Qb extends Jb.BaseBlockTracker {
  constructor(t = {}) {
    var r;
    if (!t.provider)
      throw new Error("PollingBlockTracker - no provider specified.");
    super(Object.assign(Object.assign({}, t), { blockResetDuration: (r = t.blockResetDuration) !== null && r !== void 0 ? r : t.pollingInterval })), this._provider = t.provider, this._pollingInterval = t.pollingInterval || 20 * Kb, this._retryTimeout = t.retryTimeout || this._pollingInterval / 10, this._keepEventLoopActive = t.keepEventLoopActive === void 0 ? !0 : t.keepEventLoopActive, this._setSkipCacheFlag = t.setSkipCacheFlag || !1;
  }
  // trigger block polling
  async checkForLatestBlock() {
    return await this._updateLatestBlock(), await this.getLatestBlock();
  }
  async _start() {
    this._synchronize();
  }
  async _end() {
  }
  async _synchronize() {
    for (var t; this._isRunning; )
      try {
        await this._updateLatestBlock();
        const r = Va(this._pollingInterval, !this._keepEventLoopActive);
        this.emit("_waitingForNextIteration"), await r;
      } catch (r) {
        const n = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:
${(t = r.stack) !== null && t !== void 0 ? t : r}`);
        try {
          this.emit("error", n);
        } catch {
          console.error(n);
        }
        const s = Va(this._retryTimeout, !this._keepEventLoopActive);
        this.emit("_waitingForNextIteration"), await s;
      }
  }
  async _updateLatestBlock() {
    const t = await this._fetchLatestBlock();
    this._newPotentialLatest(t);
  }
  async _fetchLatestBlock() {
    const t = {
      jsonrpc: "2.0",
      id: Zb(),
      method: "eth_blockNumber",
      params: []
    };
    this._setSkipCacheFlag && (t.skipCache = !0), Wa("Making request", t);
    const r = await (0, Gb.default)((n) => this._provider.sendAsync(t, n))();
    if (Wa("Got response", r), r.error)
      throw new Error(`PollingBlockTracker - encountered error fetching block:
${r.error.message}`);
    return r.result;
  }
}
Wn.PollingBlockTracker = Qb;
function Va(e, t) {
  return new Promise((r) => {
    const n = setTimeout(r, e);
    n.unref && t && n.unref();
  });
}
var Yn = {}, Yb = D && D.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Yn, "__esModule", { value: !0 });
Yn.SubscribeBlockTracker = void 0;
const Xb = Yb(Xi), em = xr, tm = (0, Xb.default)();
class rm extends em.BaseBlockTracker {
  constructor(t = {}) {
    if (!t.provider)
      throw new Error("SubscribeBlockTracker - no provider specified.");
    super(t), this._provider = t.provider, this._subscriptionId = null;
  }
  async checkForLatestBlock() {
    return await this.getLatestBlock();
  }
  async _start() {
    if (this._subscriptionId === void 0 || this._subscriptionId === null)
      try {
        const t = await this._call("eth_blockNumber");
        this._subscriptionId = await this._call("eth_subscribe", "newHeads"), this._provider.on("data", this._handleSubData.bind(this)), this._newPotentialLatest(t);
      } catch (t) {
        this.emit("error", t);
      }
  }
  async _end() {
    if (this._subscriptionId !== null && this._subscriptionId !== void 0)
      try {
        await this._call("eth_unsubscribe", this._subscriptionId), this._subscriptionId = null;
      } catch (t) {
        this.emit("error", t);
      }
  }
  _call(t, ...r) {
    return new Promise((n, s) => {
      this._provider.sendAsync({
        id: tm(),
        method: t,
        params: r,
        jsonrpc: "2.0"
      }, (i, o) => {
        i ? s(i) : n(o.result);
      });
    });
  }
  _handleSubData(t, r) {
    var n;
    r.method === "eth_subscription" && ((n = r.params) === null || n === void 0 ? void 0 : n.subscription) === this._subscriptionId && this._newPotentialLatest(r.params.result.number);
  }
}
Yn.SubscribeBlockTracker = rm;
(function(e) {
  var t = D && D.__createBinding || (Object.create ? function(n, s, i, o) {
    o === void 0 && (o = i), Object.defineProperty(n, o, { enumerable: !0, get: function() {
      return s[i];
    } });
  } : function(n, s, i, o) {
    o === void 0 && (o = i), n[o] = s[i];
  }), r = D && D.__exportStar || function(n, s) {
    for (var i in n) i !== "default" && !Object.prototype.hasOwnProperty.call(s, i) && t(s, n, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(Wn, e), r(Yn, e);
})(ol);
var mo = {}, Xn = {}, Fr = {};
Object.defineProperty(Fr, "__esModule", { value: !0 });
Fr.getUniqueId = void 0;
const Wl = 4294967295;
let Ii = Math.floor(Math.random() * Wl);
function nm() {
  return Ii = (Ii + 1) % Wl, Ii;
}
Fr.getUniqueId = nm;
Object.defineProperty(Xn, "__esModule", { value: !0 });
Xn.createIdRemapMiddleware = void 0;
const sm = Fr;
function im() {
  return (e, t, r, n) => {
    const s = e.id, i = sm.getUniqueId();
    e.id = i, t.id = i, r((o) => {
      e.id = s, t.id = s, o();
    });
  };
}
Xn.createIdRemapMiddleware = im;
var es = {};
Object.defineProperty(es, "__esModule", { value: !0 });
es.createAsyncMiddleware = void 0;
function om(e) {
  return async (t, r, n, s) => {
    let i;
    const o = new Promise((u) => {
      i = u;
    });
    let a = null, c = !1;
    const l = async () => {
      c = !0, n((u) => {
        a = u, i();
      }), await o;
    };
    try {
      await e(t, r, l), c ? (await o, a(null)) : s(null);
    } catch (u) {
      a ? a(u) : s(u);
    }
  };
}
es.createAsyncMiddleware = om;
var ts = {};
Object.defineProperty(ts, "__esModule", { value: !0 });
ts.createScaffoldMiddleware = void 0;
function am(e) {
  return (t, r, n, s) => {
    const i = e[t.method];
    return i === void 0 ? n() : typeof i == "function" ? i(t, r, n, s) : (r.result = i, s());
  };
}
ts.createScaffoldMiddleware = am;
var Dr = {}, _o = {};
Object.defineProperty(_o, "__esModule", { value: !0 });
const cm = hn;
function za(e, t, r) {
  try {
    Reflect.apply(e, t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    });
  }
}
function lm(e) {
  const t = e.length, r = new Array(t);
  for (let n = 0; n < t; n += 1)
    r[n] = e[n];
  return r;
}
let um = class extends cm.EventEmitter {
  emit(t, ...r) {
    let n = t === "error";
    const s = this._events;
    if (s !== void 0)
      n = n && s.error === void 0;
    else if (!n)
      return !1;
    if (n) {
      let o;
      if (r.length > 0 && ([o] = r), o instanceof Error)
        throw o;
      const a = new Error(`Unhandled error.${o ? ` (${o.message})` : ""}`);
      throw a.context = o, a;
    }
    const i = s[t];
    if (i === void 0)
      return !1;
    if (typeof i == "function")
      za(i, this, r);
    else {
      const o = i.length, a = lm(i);
      for (let c = 0; c < o; c += 1)
        za(a[c], this, r);
    }
    return !0;
  }
};
_o.default = um;
var Vl = {}, ct = {}, dm = br;
br.default = br;
br.stable = Gl;
br.stableStringify = Gl;
var on = "[...]", zl = "[Circular]", Et = [], yt = [];
function ql() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  };
}
function br(e, t, r, n) {
  typeof n > "u" && (n = ql()), Di(e, "", 0, [], void 0, 0, n);
  var s;
  try {
    yt.length === 0 ? s = JSON.stringify(e, t, r) : s = JSON.stringify(e, Jl(t), r);
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; Et.length !== 0; ) {
      var i = Et.pop();
      i.length === 4 ? Object.defineProperty(i[0], i[1], i[3]) : i[0][i[1]] = i[2];
    }
  }
  return s;
}
function Ut(e, t, r, n) {
  var s = Object.getOwnPropertyDescriptor(n, r);
  s.get !== void 0 ? s.configurable ? (Object.defineProperty(n, r, { value: e }), Et.push([n, r, t, s])) : yt.push([t, r, e]) : (n[r] = e, Et.push([n, r, t]));
}
function Di(e, t, r, n, s, i, o) {
  i += 1;
  var a;
  if (typeof e == "object" && e !== null) {
    for (a = 0; a < n.length; a++)
      if (n[a] === e) {
        Ut(zl, e, t, s);
        return;
      }
    if (typeof o.depthLimit < "u" && i > o.depthLimit) {
      Ut(on, e, t, s);
      return;
    }
    if (typeof o.edgesLimit < "u" && r + 1 > o.edgesLimit) {
      Ut(on, e, t, s);
      return;
    }
    if (n.push(e), Array.isArray(e))
      for (a = 0; a < e.length; a++)
        Di(e[a], a, a, n, e, i, o);
    else {
      var c = Object.keys(e);
      for (a = 0; a < c.length; a++) {
        var l = c[a];
        Di(e[l], l, a, n, e, i, o);
      }
    }
    n.pop();
  }
}
function hm(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Gl(e, t, r, n) {
  typeof n > "u" && (n = ql());
  var s = ji(e, "", 0, [], void 0, 0, n) || e, i;
  try {
    yt.length === 0 ? i = JSON.stringify(s, t, r) : i = JSON.stringify(s, Jl(t), r);
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; Et.length !== 0; ) {
      var o = Et.pop();
      o.length === 4 ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2];
    }
  }
  return i;
}
function ji(e, t, r, n, s, i, o) {
  i += 1;
  var a;
  if (typeof e == "object" && e !== null) {
    for (a = 0; a < n.length; a++)
      if (n[a] === e) {
        Ut(zl, e, t, s);
        return;
      }
    try {
      if (typeof e.toJSON == "function")
        return;
    } catch {
      return;
    }
    if (typeof o.depthLimit < "u" && i > o.depthLimit) {
      Ut(on, e, t, s);
      return;
    }
    if (typeof o.edgesLimit < "u" && r + 1 > o.edgesLimit) {
      Ut(on, e, t, s);
      return;
    }
    if (n.push(e), Array.isArray(e))
      for (a = 0; a < e.length; a++)
        ji(e[a], a, a, n, e, i, o);
    else {
      var c = {}, l = Object.keys(e).sort(hm);
      for (a = 0; a < l.length; a++) {
        var u = l[a];
        ji(e[u], u, a, n, e, i, o), c[u] = e[u];
      }
      if (typeof s < "u")
        Et.push([s, t, e]), s[t] = c;
      else
        return c;
    }
    n.pop();
  }
}
function Jl(e) {
  return e = typeof e < "u" ? e : function(t, r) {
    return r;
  }, function(t, r) {
    if (yt.length > 0)
      for (var n = 0; n < yt.length; n++) {
        var s = yt[n];
        if (s[1] === t && s[0] === r) {
          r = s[2], yt.splice(n, 1);
          break;
        }
      }
    return e.call(this, t, r);
  };
}
Object.defineProperty(ct, "__esModule", { value: !0 });
ct.EthereumProviderError = ct.EthereumRpcError = void 0;
const fm = dm;
class Zl extends Error {
  constructor(t, r, n) {
    if (!Number.isInteger(t))
      throw new Error('"code" must be an integer.');
    if (!r || typeof r != "string")
      throw new Error('"message" must be a nonempty string.');
    super(r), this.code = t, n !== void 0 && (this.data = n);
  }
  /**
   * Returns a plain object with all public class properties.
   */
  serialize() {
    const t = {
      code: this.code,
      message: this.message
    };
    return this.data !== void 0 && (t.data = this.data), this.stack && (t.stack = this.stack), t;
  }
  /**
   * Return a string representation of the serialized error, omitting
   * any circular references.
   */
  toString() {
    return fm.default(this.serialize(), bm, 2);
  }
}
ct.EthereumRpcError = Zl;
class pm extends Zl {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   * `code` must be an integer in the 1000 <= 4999 range.
   */
  constructor(t, r, n) {
    if (!gm(t))
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    super(t, r, n);
  }
}
ct.EthereumProviderError = pm;
function gm(e) {
  return Number.isInteger(e) && e >= 1e3 && e <= 4999;
}
function bm(e, t) {
  if (t !== "[Circular]")
    return t;
}
var yo = {}, lt = {};
Object.defineProperty(lt, "__esModule", { value: !0 });
lt.errorValues = lt.errorCodes = void 0;
lt.errorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901
  }
};
lt.errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object."
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available."
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s)."
  },
  "-32603": {
    standard: "JSON RPC 2.0",
    message: "Internal JSON-RPC error."
  },
  "-32000": {
    standard: "EIP-1474",
    message: "Invalid input."
  },
  "-32001": {
    standard: "EIP-1474",
    message: "Resource not found."
  },
  "-32002": {
    standard: "EIP-1474",
    message: "Resource unavailable."
  },
  "-32003": {
    standard: "EIP-1474",
    message: "Transaction rejected."
  },
  "-32004": {
    standard: "EIP-1474",
    message: "Method not supported."
  },
  "-32005": {
    standard: "EIP-1474",
    message: "Request limit exceeded."
  },
  4001: {
    standard: "EIP-1193",
    message: "User rejected the request."
  },
  4100: {
    standard: "EIP-1193",
    message: "The requested account and/or method has not been authorized by the user."
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider."
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains."
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain."
  }
};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.serializeError = e.isValidCode = e.getMessageFromCode = e.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
  const t = lt, r = ct, n = t.errorCodes.rpc.internal, s = "Unspecified error message. This is a bug, please report it.", i = {
    code: n,
    message: o(n)
  };
  e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function o(h, b = s) {
    if (Number.isInteger(h)) {
      const m = h.toString();
      if (d(t.errorValues, m))
        return t.errorValues[m].message;
      if (l(h))
        return e.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return b;
  }
  e.getMessageFromCode = o;
  function a(h) {
    if (!Number.isInteger(h))
      return !1;
    const b = h.toString();
    return !!(t.errorValues[b] || l(h));
  }
  e.isValidCode = a;
  function c(h, { fallbackError: b = i, shouldIncludeStack: m = !1 } = {}) {
    var R, E;
    if (!b || !Number.isInteger(b.code) || typeof b.message != "string")
      throw new Error("Must provide fallback error with integer number code and string message.");
    if (h instanceof r.EthereumRpcError)
      return h.serialize();
    const g = {};
    if (h && typeof h == "object" && !Array.isArray(h) && d(h, "code") && a(h.code)) {
      const _ = h;
      g.code = _.code, _.message && typeof _.message == "string" ? (g.message = _.message, d(_, "data") && (g.data = _.data)) : (g.message = o(g.code), g.data = { originalError: u(h) });
    } else {
      g.code = b.code;
      const _ = (R = h) === null || R === void 0 ? void 0 : R.message;
      g.message = _ && typeof _ == "string" ? _ : b.message, g.data = { originalError: u(h) };
    }
    const y = (E = h) === null || E === void 0 ? void 0 : E.stack;
    return m && h && y && typeof y == "string" && (g.stack = y), g;
  }
  e.serializeError = c;
  function l(h) {
    return h >= -32099 && h <= -32e3;
  }
  function u(h) {
    return h && typeof h == "object" && !Array.isArray(h) ? Object.assign({}, h) : h;
  }
  function d(h, b) {
    return Object.prototype.hasOwnProperty.call(h, b);
  }
})(yo);
var rs = {};
Object.defineProperty(rs, "__esModule", { value: !0 });
rs.ethErrors = void 0;
const wo = ct, Kl = yo, we = lt;
rs.ethErrors = {
  rpc: {
    /**
     * Get a JSON RPC 2.0 Parse (-32700) error.
     */
    parse: (e) => Me(we.errorCodes.rpc.parse, e),
    /**
     * Get a JSON RPC 2.0 Invalid Request (-32600) error.
     */
    invalidRequest: (e) => Me(we.errorCodes.rpc.invalidRequest, e),
    /**
     * Get a JSON RPC 2.0 Invalid Params (-32602) error.
     */
    invalidParams: (e) => Me(we.errorCodes.rpc.invalidParams, e),
    /**
     * Get a JSON RPC 2.0 Method Not Found (-32601) error.
     */
    methodNotFound: (e) => Me(we.errorCodes.rpc.methodNotFound, e),
    /**
     * Get a JSON RPC 2.0 Internal (-32603) error.
     */
    internal: (e) => Me(we.errorCodes.rpc.internal, e),
    /**
     * Get a JSON RPC 2.0 Server error.
     * Permits integer error codes in the [ -32099 <= -32005 ] range.
     * Codes -32000 through -32004 are reserved by EIP-1474.
     */
    server: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error("Ethereum RPC Server errors must provide single object argument.");
      const { code: t } = e;
      if (!Number.isInteger(t) || t > -32005 || t < -32099)
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      return Me(t, e);
    },
    /**
     * Get an Ethereum JSON RPC Invalid Input (-32000) error.
     */
    invalidInput: (e) => Me(we.errorCodes.rpc.invalidInput, e),
    /**
     * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
     */
    resourceNotFound: (e) => Me(we.errorCodes.rpc.resourceNotFound, e),
    /**
     * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
     */
    resourceUnavailable: (e) => Me(we.errorCodes.rpc.resourceUnavailable, e),
    /**
     * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
     */
    transactionRejected: (e) => Me(we.errorCodes.rpc.transactionRejected, e),
    /**
     * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
     */
    methodNotSupported: (e) => Me(we.errorCodes.rpc.methodNotSupported, e),
    /**
     * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
     */
    limitExceeded: (e) => Me(we.errorCodes.rpc.limitExceeded, e)
  },
  provider: {
    /**
     * Get an Ethereum Provider User Rejected Request (4001) error.
     */
    userRejectedRequest: (e) => ur(we.errorCodes.provider.userRejectedRequest, e),
    /**
     * Get an Ethereum Provider Unauthorized (4100) error.
     */
    unauthorized: (e) => ur(we.errorCodes.provider.unauthorized, e),
    /**
     * Get an Ethereum Provider Unsupported Method (4200) error.
     */
    unsupportedMethod: (e) => ur(we.errorCodes.provider.unsupportedMethod, e),
    /**
     * Get an Ethereum Provider Not Connected (4900) error.
     */
    disconnected: (e) => ur(we.errorCodes.provider.disconnected, e),
    /**
     * Get an Ethereum Provider Chain Not Connected (4901) error.
     */
    chainDisconnected: (e) => ur(we.errorCodes.provider.chainDisconnected, e),
    /**
     * Get a custom Ethereum Provider error.
     */
    custom: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error("Ethereum Provider custom errors must provide single object argument.");
      const { code: t, message: r, data: n } = e;
      if (!r || typeof r != "string")
        throw new Error('"message" must be a nonempty string');
      return new wo.EthereumProviderError(t, r, n);
    }
  }
};
function Me(e, t) {
  const [r, n] = Ql(t);
  return new wo.EthereumRpcError(e, r || Kl.getMessageFromCode(e), n);
}
function ur(e, t) {
  const [r, n] = Ql(t);
  return new wo.EthereumProviderError(e, r || Kl.getMessageFromCode(e), n);
}
function Ql(e) {
  if (e) {
    if (typeof e == "string")
      return [e];
    if (typeof e == "object" && !Array.isArray(e)) {
      const { message: t, data: r } = e;
      if (t && typeof t != "string")
        throw new Error("Must specify string message.");
      return [t || void 0, r];
    }
  }
  return [];
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getMessageFromCode = e.serializeError = e.EthereumProviderError = e.EthereumRpcError = e.ethErrors = e.errorCodes = void 0;
  const t = ct;
  Object.defineProperty(e, "EthereumRpcError", { enumerable: !0, get: function() {
    return t.EthereumRpcError;
  } }), Object.defineProperty(e, "EthereumProviderError", { enumerable: !0, get: function() {
    return t.EthereumProviderError;
  } });
  const r = yo;
  Object.defineProperty(e, "serializeError", { enumerable: !0, get: function() {
    return r.serializeError;
  } }), Object.defineProperty(e, "getMessageFromCode", { enumerable: !0, get: function() {
    return r.getMessageFromCode;
  } });
  const n = rs;
  Object.defineProperty(e, "ethErrors", { enumerable: !0, get: function() {
    return n.ethErrors;
  } });
  const s = lt;
  Object.defineProperty(e, "errorCodes", { enumerable: !0, get: function() {
    return s.errorCodes;
  } });
})(Vl);
var mm = D && D.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Dr, "__esModule", { value: !0 });
Dr.JsonRpcEngine = void 0;
const _m = mm(_o), xe = Vl;
class Xe extends _m.default {
  constructor() {
    super(), this._middleware = [];
  }
  /**
   * Add a middleware function to the engine's middleware stack.
   *
   * @param middleware - The middleware function to add.
   */
  push(t) {
    this._middleware.push(t);
  }
  handle(t, r) {
    if (r && typeof r != "function")
      throw new Error('"callback" must be a function if provided.');
    return Array.isArray(t) ? r ? this._handleBatch(t, r) : this._handleBatch(t) : r ? this._handle(t, r) : this._promiseHandle(t);
  }
  /**
   * Returns this engine as a middleware function that can be pushed to other
   * engines.
   *
   * @returns This engine as a middleware function.
   */
  asMiddleware() {
    return async (t, r, n, s) => {
      try {
        const [i, o, a] = await Xe._runAllMiddleware(t, r, this._middleware);
        return o ? (await Xe._runReturnHandlers(a), s(i)) : n(async (c) => {
          try {
            await Xe._runReturnHandlers(a);
          } catch (l) {
            return c(l);
          }
          return c();
        });
      } catch (i) {
        return s(i);
      }
    };
  }
  async _handleBatch(t, r) {
    try {
      const n = await Promise.all(
        // 1. Begin executing each request in the order received
        t.map(this._promiseHandle.bind(this))
      );
      return r ? r(null, n) : n;
    } catch (n) {
      if (r)
        return r(n);
      throw n;
    }
  }
  /**
   * A promise-wrapped _handle.
   */
  _promiseHandle(t) {
    return new Promise((r) => {
      this._handle(t, (n, s) => {
        r(s);
      });
    });
  }
  /**
   * Ensures that the request object is valid, processes it, and passes any
   * error and the response object to the given callback.
   *
   * Does not reject.
   */
  async _handle(t, r) {
    if (!t || Array.isArray(t) || typeof t != "object") {
      const o = new xe.EthereumRpcError(xe.errorCodes.rpc.invalidRequest, `Requests must be plain objects. Received: ${typeof t}`, { request: t });
      return r(o, { id: void 0, jsonrpc: "2.0", error: o });
    }
    if (typeof t.method != "string") {
      const o = new xe.EthereumRpcError(xe.errorCodes.rpc.invalidRequest, `Must specify a string method. Received: ${typeof t.method}`, { request: t });
      return r(o, { id: t.id, jsonrpc: "2.0", error: o });
    }
    const n = Object.assign({}, t), s = {
      id: n.id,
      jsonrpc: n.jsonrpc
    };
    let i = null;
    try {
      await this._processRequest(n, s);
    } catch (o) {
      i = o;
    }
    return i && (delete s.result, s.error || (s.error = xe.serializeError(i))), r(i, s);
  }
  /**
   * For the given request and response, runs all middleware and their return
   * handlers, if any, and ensures that internal request processing semantics
   * are satisfied.
   */
  async _processRequest(t, r) {
    const [n, s, i] = await Xe._runAllMiddleware(t, r, this._middleware);
    if (Xe._checkForCompletion(t, r, s), await Xe._runReturnHandlers(i), n)
      throw n;
  }
  /**
   * Serially executes the given stack of middleware.
   *
   * @returns An array of any error encountered during middleware execution,
   * a boolean indicating whether the request was completed, and an array of
   * middleware-defined return handlers.
   */
  static async _runAllMiddleware(t, r, n) {
    const s = [];
    let i = null, o = !1;
    for (const a of n)
      if ([i, o] = await Xe._runMiddleware(t, r, a, s), o)
        break;
    return [i, o, s.reverse()];
  }
  /**
   * Runs an individual middleware.
   *
   * @returns An array of any error encountered during middleware exection,
   * and a boolean indicating whether the request should end.
   */
  static _runMiddleware(t, r, n, s) {
    return new Promise((i) => {
      const o = (c) => {
        const l = c || r.error;
        l && (r.error = xe.serializeError(l)), i([l, !0]);
      }, a = (c) => {
        r.error ? o(r.error) : (c && (typeof c != "function" && o(new xe.EthereumRpcError(xe.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof c}" for request:
${Ai(t)}`, { request: t })), s.push(c)), i([null, !1]));
      };
      try {
        n(t, r, a, o);
      } catch (c) {
        o(c);
      }
    });
  }
  /**
   * Serially executes array of return handlers. The request and response are
   * assumed to be in their scope.
   */
  static async _runReturnHandlers(t) {
    for (const r of t)
      await new Promise((n, s) => {
        r((i) => i ? s(i) : n());
      });
  }
  /**
   * Throws an error if the response has neither a result nor an error, or if
   * the "isComplete" flag is falsy.
   */
  static _checkForCompletion(t, r, n) {
    if (!("result" in r) && !("error" in r))
      throw new xe.EthereumRpcError(xe.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:
${Ai(t)}`, { request: t });
    if (!n)
      throw new xe.EthereumRpcError(xe.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:
${Ai(t)}`, { request: t });
  }
}
Dr.JsonRpcEngine = Xe;
function Ai(e) {
  return JSON.stringify(e, null, 2);
}
var ns = {};
Object.defineProperty(ns, "__esModule", { value: !0 });
ns.mergeMiddleware = void 0;
const ym = Dr;
function wm(e) {
  const t = new ym.JsonRpcEngine();
  return e.forEach((r) => t.push(r)), t.asMiddleware();
}
ns.mergeMiddleware = wm;
(function(e) {
  var t = D && D.__createBinding || (Object.create ? function(n, s, i, o) {
    o === void 0 && (o = i), Object.defineProperty(n, o, { enumerable: !0, get: function() {
      return s[i];
    } });
  } : function(n, s, i, o) {
    o === void 0 && (o = i), n[o] = s[i];
  }), r = D && D.__exportStar || function(n, s) {
    for (var i in n) i !== "default" && !Object.prototype.hasOwnProperty.call(s, i) && t(s, n, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(Xn, e), r(es, e), r(ts, e), r(Fr, e), r(Dr, e), r(ns, e);
})(mo);
var Yl = {}, vo = {}, Hi = function(e, t) {
  return Hi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (r[s] = n[s]);
  }, Hi(e, t);
};
function Xl(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Hi(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var an = function() {
  return an = Object.assign || function(t) {
    for (var r, n = 1, s = arguments.length; n < s; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, an.apply(this, arguments);
};
function eu(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
      t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]]);
  return r;
}
function tu(e, t, r, n) {
  var s = arguments.length, i = s < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(e, t, r, n);
  else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (i = (s < 3 ? o(i) : s > 3 ? o(t, r, i) : o(t, r)) || i);
  return s > 3 && i && Object.defineProperty(t, r, i), i;
}
function ru(e, t) {
  return function(r, n) {
    t(r, n, e);
  };
}
function nu(e, t, r, n, s, i) {
  function o(g) {
    if (g !== void 0 && typeof g != "function") throw new TypeError("Function expected");
    return g;
  }
  for (var a = n.kind, c = a === "getter" ? "get" : a === "setter" ? "set" : "value", l = !t && e ? n.static ? e : e.prototype : null, u = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}), d, h = !1, b = r.length - 1; b >= 0; b--) {
    var m = {};
    for (var R in n) m[R] = R === "access" ? {} : n[R];
    for (var R in n.access) m.access[R] = n.access[R];
    m.addInitializer = function(g) {
      if (h) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(o(g || null));
    };
    var E = (0, r[b])(a === "accessor" ? { get: u.get, set: u.set } : u[c], m);
    if (a === "accessor") {
      if (E === void 0) continue;
      if (E === null || typeof E != "object") throw new TypeError("Object expected");
      (d = o(E.get)) && (u.get = d), (d = o(E.set)) && (u.set = d), (d = o(E.init)) && s.unshift(d);
    } else (d = o(E)) && (a === "field" ? s.unshift(d) : u[c] = d);
  }
  l && Object.defineProperty(l, n.name, u), h = !0;
}
function su(e, t, r) {
  for (var n = arguments.length > 2, s = 0; s < t.length; s++)
    r = n ? t[s].call(e, r) : t[s].call(e);
  return n ? r : void 0;
}
function iu(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function ou(e, t, r) {
  return typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t });
}
function au(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function cu(e, t, r, n) {
  function s(i) {
    return i instanceof r ? i : new r(function(o) {
      o(i);
    });
  }
  return new (r || (r = Promise))(function(i, o) {
    function a(u) {
      try {
        l(n.next(u));
      } catch (d) {
        o(d);
      }
    }
    function c(u) {
      try {
        l(n.throw(u));
      } catch (d) {
        o(d);
      }
    }
    function l(u) {
      u.done ? i(u.value) : s(u.value).then(a, c);
    }
    l((n = n.apply(e, t || [])).next());
  });
}
function lu(e, t) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, s, i, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = a(0), o.throw = a(1), o.return = a(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(l) {
    return function(u) {
      return c([l, u]);
    };
  }
  function c(l) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, l[0] && (r = 0)), r; ) try {
      if (n = 1, s && (i = l[0] & 2 ? s.return : l[0] ? s.throw || ((i = s.return) && i.call(s), 0) : s.next) && !(i = i.call(s, l[1])).done) return i;
      switch (s = 0, i && (l = [l[0] & 2, i.value]), l[0]) {
        case 0:
        case 1:
          i = l;
          break;
        case 4:
          return r.label++, { value: l[1], done: !1 };
        case 5:
          r.label++, s = l[1], l = [0];
          continue;
        case 7:
          l = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            r = 0;
            continue;
          }
          if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) {
            r.label = l[1];
            break;
          }
          if (l[0] === 6 && r.label < i[1]) {
            r.label = i[1], i = l;
            break;
          }
          if (i && r.label < i[2]) {
            r.label = i[2], r.ops.push(l);
            break;
          }
          i[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      l = t.call(e, r);
    } catch (u) {
      l = [6, u], s = 0;
    } finally {
      n = i = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
var ss = Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var s = Object.getOwnPropertyDescriptor(t, r);
  (!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, s);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
};
function uu(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && ss(t, e, r);
}
function cn(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Eo(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), s, i = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(s = n.next()).done; ) i.push(s.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}
function du() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Eo(arguments[t]));
  return e;
}
function hu() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), s = 0, t = 0; t < r; t++)
    for (var i = arguments[t], o = 0, a = i.length; o < a; o++, s++)
      n[s] = i[o];
  return n;
}
function fu(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, s = t.length, i; n < s; n++)
    (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Kt(e) {
  return this instanceof Kt ? (this.v = e, this) : new Kt(e);
}
function pu(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []), s, i = [];
  return s = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", o), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function o(b) {
    return function(m) {
      return Promise.resolve(m).then(b, d);
    };
  }
  function a(b, m) {
    n[b] && (s[b] = function(R) {
      return new Promise(function(E, g) {
        i.push([b, R, E, g]) > 1 || c(b, R);
      });
    }, m && (s[b] = m(s[b])));
  }
  function c(b, m) {
    try {
      l(n[b](m));
    } catch (R) {
      h(i[0][3], R);
    }
  }
  function l(b) {
    b.value instanceof Kt ? Promise.resolve(b.value.v).then(u, d) : h(i[0][2], b);
  }
  function u(b) {
    c("next", b);
  }
  function d(b) {
    c("throw", b);
  }
  function h(b, m) {
    b(m), i.shift(), i.length && c(i[0][0], i[0][1]);
  }
}
function gu(e) {
  var t, r;
  return t = {}, n("next"), n("throw", function(s) {
    throw s;
  }), n("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function n(s, i) {
    t[s] = e[s] ? function(o) {
      return (r = !r) ? { value: Kt(e[s](o)), done: !1 } : i ? i(o) : o;
    } : i;
  }
}
function bu(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof cn == "function" ? cn(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(i) {
    r[i] = e[i] && function(o) {
      return new Promise(function(a, c) {
        o = e[i](o), s(a, c, o.done, o.value);
      });
    };
  }
  function s(i, o, a, c) {
    Promise.resolve(c).then(function(l) {
      i({ value: l, done: a });
    }, o);
  }
}
function mu(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
var vm = Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
};
function _u(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r in e) r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && ss(t, e, r);
  return vm(t, e), t;
}
function yu(e) {
  return e && e.__esModule ? e : { default: e };
}
function wu(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function vu(e, t, r, n, s) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? s.call(e, r) : s ? s.value = r : t.set(e, r), r;
}
function Eu(e, t) {
  if (t === null || typeof t != "object" && typeof t != "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Su(e, t, r) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var n, s;
    if (r) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      n = t[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      n = t[Symbol.dispose], r && (s = n);
    }
    if (typeof n != "function") throw new TypeError("Object not disposable.");
    s && (n = function() {
      try {
        s.call(this);
      } catch (i) {
        return Promise.reject(i);
      }
    }), e.stack.push({ value: t, dispose: n, async: r });
  } else r && e.stack.push({ async: !0 });
  return t;
}
var Em = typeof SuppressedError == "function" ? SuppressedError : function(e, t, r) {
  var n = new Error(r);
  return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
};
function Ru(e) {
  function t(i) {
    e.error = e.hasError ? new Em(i, e.error, "An error was suppressed during disposal.") : i, e.hasError = !0;
  }
  var r, n = 0;
  function s() {
    for (; r = e.stack.pop(); )
      try {
        if (!r.async && n === 1) return n = 0, e.stack.push(r), Promise.resolve().then(s);
        if (r.dispose) {
          var i = r.dispose.call(r.value);
          if (r.async) return n |= 2, Promise.resolve(i).then(s, function(o) {
            return t(o), s();
          });
        } else n |= 1;
      } catch (o) {
        t(o);
      }
    if (n === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return s();
}
function Cu(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(r, n, s, i, o) {
    return n ? t ? ".jsx" : ".js" : s && (!i || !o) ? r : s + i + "." + o.toLowerCase() + "js";
  }) : e;
}
const Sm = {
  __extends: Xl,
  __assign: an,
  __rest: eu,
  __decorate: tu,
  __param: ru,
  __esDecorate: nu,
  __runInitializers: su,
  __propKey: iu,
  __setFunctionName: ou,
  __metadata: au,
  __awaiter: cu,
  __generator: lu,
  __createBinding: ss,
  __exportStar: uu,
  __values: cn,
  __read: Eo,
  __spread: du,
  __spreadArrays: hu,
  __spreadArray: fu,
  __await: Kt,
  __asyncGenerator: pu,
  __asyncDelegator: gu,
  __asyncValues: bu,
  __makeTemplateObject: mu,
  __importStar: _u,
  __importDefault: yu,
  __classPrivateFieldGet: wu,
  __classPrivateFieldSet: vu,
  __classPrivateFieldIn: Eu,
  __addDisposableResource: Su,
  __disposeResources: Ru,
  __rewriteRelativeImportExtension: Cu
}, Rm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __addDisposableResource: Su,
  get __assign() {
    return an;
  },
  __asyncDelegator: gu,
  __asyncGenerator: pu,
  __asyncValues: bu,
  __await: Kt,
  __awaiter: cu,
  __classPrivateFieldGet: wu,
  __classPrivateFieldIn: Eu,
  __classPrivateFieldSet: vu,
  __createBinding: ss,
  __decorate: tu,
  __disposeResources: Ru,
  __esDecorate: nu,
  __exportStar: uu,
  __extends: Xl,
  __generator: lu,
  __importDefault: yu,
  __importStar: _u,
  __makeTemplateObject: mu,
  __metadata: au,
  __param: ru,
  __propKey: iu,
  __read: Eo,
  __rest: eu,
  __rewriteRelativeImportExtension: Cu,
  __runInitializers: su,
  __setFunctionName: ou,
  __spread: du,
  __spreadArray: fu,
  __spreadArrays: hu,
  __values: cn,
  default: Sm
}, Symbol.toStringTag, { value: "Module" })), So = /* @__PURE__ */ ic(Rm);
var is = {};
Object.defineProperty(is, "__esModule", { value: !0 });
var qa = So, Cm = (
  /** @class */
  function() {
    function e(t) {
      if (this._maxConcurrency = t, this._queue = [], t <= 0)
        throw new Error("semaphore must be initialized to a positive value");
      this._value = t;
    }
    return e.prototype.acquire = function() {
      var t = this, r = this.isLocked(), n = new Promise(function(s) {
        return t._queue.push(s);
      });
      return r || this._dispatch(), n;
    }, e.prototype.runExclusive = function(t) {
      return qa.__awaiter(this, void 0, void 0, function() {
        var r, n, s;
        return qa.__generator(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this.acquire()];
            case 1:
              r = i.sent(), n = r[0], s = r[1], i.label = 2;
            case 2:
              return i.trys.push([2, , 4, 5]), [4, t(n)];
            case 3:
              return [2, i.sent()];
            case 4:
              return s(), [
                7
                /*endfinally*/
              ];
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.isLocked = function() {
      return this._value <= 0;
    }, e.prototype.release = function() {
      if (this._maxConcurrency > 1)
        throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
      if (this._currentReleaser) {
        var t = this._currentReleaser;
        this._currentReleaser = void 0, t();
      }
    }, e.prototype._dispatch = function() {
      var t = this, r = this._queue.shift();
      if (r) {
        var n = !1;
        this._currentReleaser = function() {
          n || (n = !0, t._value++, t._dispatch());
        }, r([this._value--, this._currentReleaser]);
      }
    }, e;
  }()
);
is.default = Cm;
Object.defineProperty(vo, "__esModule", { value: !0 });
var Ga = So, km = is, Im = (
  /** @class */
  function() {
    function e() {
      this._semaphore = new km.default(1);
    }
    return e.prototype.acquire = function() {
      return Ga.__awaiter(this, void 0, void 0, function() {
        var t, r;
        return Ga.__generator(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this._semaphore.acquire()];
            case 1:
              return t = n.sent(), r = t[1], [2, r];
          }
        });
      });
    }, e.prototype.runExclusive = function(t) {
      return this._semaphore.runExclusive(function() {
        return t();
      });
    }, e.prototype.isLocked = function() {
      return this._semaphore.isLocked();
    }, e.prototype.release = function() {
      this._semaphore.release();
    }, e;
  }()
);
vo.default = Im;
var os = {};
Object.defineProperty(os, "__esModule", { value: !0 });
os.withTimeout = void 0;
var Xr = So;
function Am(e, t, r) {
  var n = this;
  return r === void 0 && (r = new Error("timeout")), {
    acquire: function() {
      return new Promise(function(s, i) {
        return Xr.__awaiter(n, void 0, void 0, function() {
          var o, a, c;
          return Xr.__generator(this, function(l) {
            switch (l.label) {
              case 0:
                return o = !1, setTimeout(function() {
                  o = !0, i(r);
                }, t), [4, e.acquire()];
              case 1:
                return a = l.sent(), o ? (c = Array.isArray(a) ? a[1] : a, c()) : s(a), [
                  2
                  /*return*/
                ];
            }
          });
        });
      });
    },
    runExclusive: function(s) {
      return Xr.__awaiter(this, void 0, void 0, function() {
        var i, o;
        return Xr.__generator(this, function(a) {
          switch (a.label) {
            case 0:
              i = function() {
              }, a.label = 1;
            case 1:
              return a.trys.push([1, , 7, 8]), [4, this.acquire()];
            case 2:
              return o = a.sent(), Array.isArray(o) ? (i = o[1], [4, s(o[0])]) : [3, 4];
            case 3:
              return [2, a.sent()];
            case 4:
              return i = o, [4, s()];
            case 5:
              return [2, a.sent()];
            case 6:
              return [3, 8];
            case 7:
              return i(), [
                7
                /*endfinally*/
              ];
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    },
    release: function() {
      e.release();
    },
    isLocked: function() {
      return e.isLocked();
    }
  };
}
os.withTimeout = Am;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.withTimeout = e.Semaphore = e.Mutex = void 0;
  var t = vo;
  Object.defineProperty(e, "Mutex", { enumerable: !0, get: function() {
    return t.default;
  } });
  var r = is;
  Object.defineProperty(e, "Semaphore", { enumerable: !0, get: function() {
    return r.default;
  } });
  var n = os;
  Object.defineProperty(e, "withTimeout", { enumerable: !0, get: function() {
    return n.withTimeout;
  } });
})(Yl);
var Tm = xm, Mm = Object.prototype.hasOwnProperty;
function xm() {
  for (var e = {}, t = 0; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r)
      Mm.call(r, n) && (e[n] = r[n]);
  }
  return e;
}
const Nm = Tm, Lm = Xi();
var Om = V;
function V(e) {
  const t = this;
  t.currentProvider = e;
}
V.prototype.getBalance = jr(2, "eth_getBalance");
V.prototype.getCode = jr(2, "eth_getCode");
V.prototype.getTransactionCount = jr(2, "eth_getTransactionCount");
V.prototype.getStorageAt = jr(3, "eth_getStorageAt");
V.prototype.call = jr(2, "eth_call");
V.prototype.protocolVersion = J("eth_protocolVersion");
V.prototype.syncing = J("eth_syncing");
V.prototype.coinbase = J("eth_coinbase");
V.prototype.mining = J("eth_mining");
V.prototype.hashrate = J("eth_hashrate");
V.prototype.gasPrice = J("eth_gasPrice");
V.prototype.accounts = J("eth_accounts");
V.prototype.blockNumber = J("eth_blockNumber");
V.prototype.getBlockTransactionCountByHash = J("eth_getBlockTransactionCountByHash");
V.prototype.getBlockTransactionCountByNumber = J("eth_getBlockTransactionCountByNumber");
V.prototype.getUncleCountByBlockHash = J("eth_getUncleCountByBlockHash");
V.prototype.getUncleCountByBlockNumber = J("eth_getUncleCountByBlockNumber");
V.prototype.sign = J("eth_sign");
V.prototype.sendTransaction = J("eth_sendTransaction");
V.prototype.sendRawTransaction = J("eth_sendRawTransaction");
V.prototype.estimateGas = J("eth_estimateGas");
V.prototype.getBlockByHash = J("eth_getBlockByHash");
V.prototype.getBlockByNumber = J("eth_getBlockByNumber");
V.prototype.getTransactionByHash = J("eth_getTransactionByHash");
V.prototype.getTransactionByBlockHashAndIndex = J("eth_getTransactionByBlockHashAndIndex");
V.prototype.getTransactionByBlockNumberAndIndex = J("eth_getTransactionByBlockNumberAndIndex");
V.prototype.getTransactionReceipt = J("eth_getTransactionReceipt");
V.prototype.getUncleByBlockHashAndIndex = J("eth_getUncleByBlockHashAndIndex");
V.prototype.getUncleByBlockNumberAndIndex = J("eth_getUncleByBlockNumberAndIndex");
V.prototype.getCompilers = J("eth_getCompilers");
V.prototype.compileLLL = J("eth_compileLLL");
V.prototype.compileSolidity = J("eth_compileSolidity");
V.prototype.compileSerpent = J("eth_compileSerpent");
V.prototype.newFilter = J("eth_newFilter");
V.prototype.newBlockFilter = J("eth_newBlockFilter");
V.prototype.newPendingTransactionFilter = J("eth_newPendingTransactionFilter");
V.prototype.uninstallFilter = J("eth_uninstallFilter");
V.prototype.getFilterChanges = J("eth_getFilterChanges");
V.prototype.getFilterLogs = J("eth_getFilterLogs");
V.prototype.getLogs = J("eth_getLogs");
V.prototype.getWork = J("eth_getWork");
V.prototype.submitWork = J("eth_submitWork");
V.prototype.submitHashrate = J("eth_submitHashrate");
V.prototype.sendAsync = function(e, t) {
  this.currentProvider.sendAsync(Pm(e), function(n, s) {
    if (!n && s.error && (n = new Error("EthQuery - RPC Error - " + s.error.message)), n) return t(n);
    t(null, s.result);
  });
};
function J(e) {
  return function() {
    const t = this;
    var r = [].slice.call(arguments), n = r.pop();
    t.sendAsync({
      method: e,
      params: r
    }, n);
  };
}
function jr(e, t) {
  return function() {
    const r = this;
    var n = [].slice.call(arguments), s = n.pop();
    n.length < e && n.push("latest"), r.sendAsync({
      method: t,
      params: n
    }, s);
  };
}
function Pm(e) {
  return Nm({
    // defaults
    id: Lm(),
    jsonrpc: "2.0",
    params: []
    // user-specified
  }, e);
}
const Ja = (e, t, r, n) => function(...s) {
  const i = t.promiseModule;
  return new i((o, a) => {
    t.multiArgs ? s.push((...l) => {
      t.errorFirst ? l[0] ? a(l) : (l.shift(), o(l)) : o(l);
    }) : t.errorFirst ? s.push((l, u) => {
      l ? a(l) : o(u);
    }) : s.push(o), Reflect.apply(e, this === r ? n : this, s);
  });
}, Za = /* @__PURE__ */ new WeakMap();
var $m = (e, t) => {
  t = {
    exclude: [/.+(?:Sync|Stream)$/],
    errorFirst: !0,
    promiseModule: Promise,
    ...t
  };
  const r = typeof e;
  if (!(e !== null && (r === "object" || r === "function")))
    throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${e === null ? "null" : r}\``);
  const n = (o, a) => {
    let c = Za.get(o);
    if (c || (c = {}, Za.set(o, c)), a in c)
      return c[a];
    const l = (m) => typeof m == "string" || typeof a == "symbol" ? a === m : m.test(a), u = Reflect.getOwnPropertyDescriptor(o, a), d = u === void 0 || u.writable || u.configurable, b = (t.include ? t.include.some(l) : !t.exclude.some(l)) && d;
    return c[a] = b, b;
  }, s = /* @__PURE__ */ new WeakMap(), i = new Proxy(e, {
    apply(o, a, c) {
      const l = s.get(o);
      if (l)
        return Reflect.apply(l, a, c);
      const u = t.excludeMain ? o : Ja(o, t, i, o);
      return s.set(o, u), Reflect.apply(u, a, c);
    },
    get(o, a) {
      const c = o[a];
      if (!n(o, a) || c === Function.prototype[a])
        return c;
      const l = s.get(c);
      if (l)
        return l;
      if (typeof c == "function") {
        const u = Ja(c, t, i, o);
        return s.set(c, u), u;
      }
      return c;
    }
  });
  return i;
};
const Bm = Nr.default;
let Fm = class extends Bm {
  constructor() {
    super(), this.updates = [];
  }
  async initialize() {
  }
  async update() {
    throw new Error("BaseFilter - no update method specified");
  }
  addResults(t) {
    this.updates = this.updates.concat(t), t.forEach((r) => this.emit("update", r));
  }
  addInitialResults(t) {
  }
  getChangesAndClear() {
    const t = this.updates;
    return this.updates = [], t;
  }
};
var Ro = Fm;
const Dm = Ro;
let jm = class extends Dm {
  constructor() {
    super(), this.allResults = [];
  }
  async update() {
    throw new Error("BaseFilterWithHistory - no update method specified");
  }
  addResults(t) {
    this.allResults = this.allResults.concat(t), super.addResults(t);
  }
  addInitialResults(t) {
    this.allResults = this.allResults.concat(t), super.addInitialResults(t);
  }
  getAllResults() {
    return this.allResults;
  }
};
var Hm = jm, Hr = {
  minBlockRef: Um,
  maxBlockRef: Wm,
  sortBlockRefs: Co,
  bnToHex: Vm,
  blockRefIsNumber: zm,
  hexToInt: ln,
  incrementHexInt: qm,
  intToHex: ku,
  unsafeRandomBytes: Gm
};
function Um(...e) {
  return Co(e)[0];
}
function Wm(...e) {
  const t = Co(e);
  return t[t.length - 1];
}
function Co(e) {
  return e.sort((t, r) => t === "latest" || r === "earliest" ? 1 : r === "latest" || t === "earliest" ? -1 : ln(t) - ln(r));
}
function Vm(e) {
  return "0x" + e.toString(16);
}
function zm(e) {
  return e && !["earliest", "latest", "pending"].includes(e);
}
function ln(e) {
  return e == null ? e : Number.parseInt(e, 16);
}
function qm(e) {
  if (e == null) return e;
  const t = ln(e);
  return ku(t + 1);
}
function ku(e) {
  if (e == null) return e;
  let t = e.toString(16);
  return t.length % 2 && (t = "0" + t), "0x" + t;
}
function Gm(e) {
  let t = "0x";
  for (let r = 0; r < e; r++)
    t += Ka(), t += Ka();
  return t;
}
function Ka() {
  return Math.floor(Math.random() * 16).toString(16);
}
const Jm = Om, Zm = $m, Km = Hm, { bnToHex: ly, hexToInt: en, incrementHexInt: Qm, minBlockRef: Ym, blockRefIsNumber: Xm } = Hr;
let e_ = class extends Km {
  constructor({ provider: t, params: r }) {
    super(), this.type = "log", this.ethQuery = new Jm(t), this.params = Object.assign({
      fromBlock: "latest",
      toBlock: "latest",
      address: void 0,
      topics: []
    }, r), this.params.address && (Array.isArray(this.params.address) || (this.params.address = [this.params.address]), this.params.address = this.params.address.map((n) => n.toLowerCase()));
  }
  async initialize({ currentBlock: t }) {
    let r = this.params.fromBlock;
    ["latest", "pending"].includes(r) && (r = t), r === "earliest" && (r = "0x0"), this.params.fromBlock = r;
    const n = Ym(this.params.toBlock, t), s = Object.assign({}, this.params, { toBlock: n }), i = await this._fetchLogs(s);
    this.addInitialResults(i);
  }
  async update({ oldBlock: t, newBlock: r }) {
    const n = r;
    let s;
    t ? s = Qm(t) : s = r;
    const i = Object.assign({}, this.params, { fromBlock: s, toBlock: n }), a = (await this._fetchLogs(i)).filter((c) => this.matchLog(c));
    this.addResults(a);
  }
  async _fetchLogs(t) {
    return await Zm((n) => this.ethQuery.getLogs(t, n))();
  }
  matchLog(t) {
    if (en(this.params.fromBlock) >= en(t.blockNumber) || Xm(this.params.toBlock) && en(this.params.toBlock) <= en(t.blockNumber)) return !1;
    const r = t.address && t.address.toLowerCase();
    return this.params.address && r && !this.params.address.includes(r) ? !1 : this.params.topics.every((s, i) => {
      let o = t.topics[i];
      if (!o) return !1;
      o = o.toLowerCase();
      let a = Array.isArray(s) ? s : [s];
      return a.includes(null) ? !0 : (a = a.map((u) => u.toLowerCase()), a.includes(o));
    });
  }
};
var t_ = e_, ko = r_;
async function r_({ provider: e, fromBlock: t, toBlock: r }) {
  t || (t = r);
  const n = Qa(t), i = Qa(r) - n + 1, o = Array(i).fill().map((c, l) => n + l).map(n_);
  let a = await Promise.all(
    o.map((c) => i_(e, "eth_getBlockByNumber", [c, !1]))
  );
  return a = a.filter((c) => c !== null), a;
}
function Qa(e) {
  return e == null ? e : Number.parseInt(e, 16);
}
function n_(e) {
  return e == null ? e : "0x" + e.toString(16);
}
function s_(e, t) {
  return new Promise((r, n) => {
    e.sendAsync(t, (s, i) => {
      s ? n(s) : i.error ? n(i.error) : i.result ? r(i.result) : n(new Error("Result was empty"));
    });
  });
}
async function i_(e, t, r) {
  for (let n = 0; n < 3; n++)
    try {
      return await s_(e, {
        id: 1,
        jsonrpc: "2.0",
        method: t,
        params: r
      });
    } catch (s) {
      console.error(
        `provider.sendAsync failed: ${s.stack || s.message || s}`
      );
    }
  return null;
}
const o_ = Ro, a_ = ko, { incrementHexInt: c_ } = Hr;
let l_ = class extends o_ {
  constructor({ provider: t, params: r }) {
    super(), this.type = "block", this.provider = t;
  }
  async update({ oldBlock: t, newBlock: r }) {
    const n = r, s = c_(t), o = (await a_({ provider: this.provider, fromBlock: s, toBlock: n })).map((a) => a.hash);
    this.addResults(o);
  }
};
var u_ = l_;
const d_ = Ro, h_ = ko, { incrementHexInt: f_ } = Hr;
let p_ = class extends d_ {
  constructor({ provider: t }) {
    super(), this.type = "tx", this.provider = t;
  }
  async update({ oldBlock: t }) {
    const r = t, n = f_(t), s = await h_({ provider: this.provider, fromBlock: n, toBlock: r }), i = [];
    for (const o of s)
      i.push(...o.transactions);
    this.addResults(i);
  }
};
var g_ = p_;
const b_ = Yl.Mutex, { createAsyncMiddleware: m_, createScaffoldMiddleware: __ } = mo, y_ = t_, w_ = u_, v_ = g_, { intToHex: Iu, hexToInt: Ti } = Hr;
var E_ = S_;
function S_({ blockTracker: e, provider: t }) {
  let r = 0, n = {};
  const s = new b_(), i = R_({ mutex: s }), o = __({
    // install filters
    eth_newFilter: i(Mi(c)),
    eth_newBlockFilter: i(Mi(l)),
    eth_newPendingTransactionFilter: i(Mi(u)),
    // uninstall filters
    eth_uninstallFilter: i(nn(b)),
    // checking filter changes
    eth_getFilterChanges: i(nn(d)),
    eth_getFilterLogs: i(nn(h))
  }), a = async ({ oldBlock: y, newBlock: _ }) => {
    if (n.length === 0) return;
    const C = await s.acquire();
    try {
      await Promise.all($t(n).map(async (S) => {
        try {
          await S.update({ oldBlock: y, newBlock: _ });
        } catch (T) {
          console.error(T);
        }
      }));
    } catch (S) {
      console.error(S);
    }
    C();
  };
  return o.newLogFilter = c, o.newBlockFilter = l, o.newPendingTransactionFilter = u, o.uninstallFilter = b, o.getFilterChanges = d, o.getFilterLogs = h, o.destroy = () => {
    E();
  }, o;
  async function c(y) {
    const _ = new y_({ provider: t, params: y });
    return await m(_), _;
  }
  async function l() {
    const y = new w_({ provider: t });
    return await m(y), y;
  }
  async function u() {
    const y = new v_({ provider: t });
    return await m(y), y;
  }
  async function d(y) {
    const _ = Ti(y), C = n[_];
    if (!C)
      throw new Error(`No filter for index "${_}"`);
    return C.getChangesAndClear();
  }
  async function h(y) {
    const _ = Ti(y), C = n[_];
    if (!C)
      throw new Error(`No filter for index "${_}"`);
    let S = [];
    return C.type === "log" && (S = C.getAllResults()), S;
  }
  async function b(y) {
    const _ = Ti(y), S = !!n[_];
    return S && await R(_), S;
  }
  async function m(y) {
    const _ = $t(n).length, C = await e.getLatestBlock();
    await y.initialize({ currentBlock: C }), r++, n[r] = y, y.id = r, y.idHex = Iu(r);
    const S = $t(n).length;
    return g({ prevFilterCount: _, newFilterCount: S }), r;
  }
  async function R(y) {
    const _ = $t(n).length;
    delete n[y];
    const C = $t(n).length;
    g({ prevFilterCount: _, newFilterCount: C });
  }
  async function E() {
    const y = $t(n).length;
    n = {}, g({ prevFilterCount: y, newFilterCount: 0 });
  }
  function g({ prevFilterCount: y, newFilterCount: _ }) {
    if (y === 0 && _ > 0) {
      e.on("sync", a);
      return;
    }
    if (y > 0 && _ === 0) {
      e.removeListener("sync", a);
      return;
    }
  }
}
function Mi(e) {
  return nn(async (...t) => {
    const r = await e(...t);
    return Iu(r.id);
  });
}
function nn(e) {
  return m_(async (t, r) => {
    const n = await e.apply(null, t.params);
    r.result = n;
  });
}
function R_({ mutex: e }) {
  return (t) => async (r, n, s, i) => {
    (await e.acquire())(), t(r, n, s, i);
  };
}
function $t(e, t) {
  const r = [];
  for (let n in e)
    r.push(e[n]);
  return r;
}
const C_ = Nr.default, { createAsyncMiddleware: Ya, createScaffoldMiddleware: k_ } = mo, I_ = E_, { unsafeRandomBytes: A_, incrementHexInt: T_ } = Hr, M_ = ko;
var x_ = N_;
function N_({ blockTracker: e, provider: t }) {
  const r = {}, n = I_({ blockTracker: e, provider: t });
  let s = !1;
  const i = new C_(), o = k_({
    eth_subscribe: Ya(a),
    eth_unsubscribe: Ya(c)
  });
  return o.destroy = u, { events: i, middleware: o };
  async function a(d, h) {
    if (s) throw new Error(
      "SubscriptionManager - attempting to use after destroying"
    );
    const b = d.params[0], m = A_(16);
    let R;
    switch (b) {
      case "newHeads":
        R = E({ subId: m });
        break;
      case "logs":
        const y = d.params[1], _ = await n.newLogFilter(y);
        R = g({ subId: m, filter: _ });
        break;
      default:
        throw new Error(`SubscriptionManager - unsupported subscription type "${b}"`);
    }
    r[m] = R, h.result = m;
    return;
    function E({ subId: y }) {
      const _ = {
        type: b,
        destroy: async () => {
          e.removeListener("sync", _.update);
        },
        update: async ({ oldBlock: C, newBlock: S }) => {
          const T = S, U = T_(C);
          (await M_({ provider: t, fromBlock: U, toBlock: T })).map(L_).filter((Q) => Q !== null).forEach((Q) => {
            l(y, Q);
          });
        }
      };
      return e.on("sync", _.update), _;
    }
    function g({ subId: y, filter: _ }) {
      return _.on("update", (S) => l(y, S)), {
        type: b,
        destroy: async () => await n.uninstallFilter(_.idHex)
      };
    }
  }
  async function c(d, h) {
    if (s) throw new Error(
      "SubscriptionManager - attempting to use after destroying"
    );
    const b = d.params[0], m = r[b];
    if (!m) {
      h.result = !1;
      return;
    }
    delete r[b], await m.destroy(), h.result = !0;
  }
  function l(d, h) {
    i.emit("notification", {
      jsonrpc: "2.0",
      method: "eth_subscription",
      params: {
        subscription: d,
        result: h
      }
    });
  }
  function u() {
    i.removeAllListeners();
    for (const d in r)
      r[d].destroy(), delete r[d];
    s = !0;
  }
}
function L_(e) {
  return e == null ? null : {
    hash: e.hash,
    parentHash: e.parentHash,
    sha3Uncles: e.sha3Uncles,
    miner: e.miner,
    stateRoot: e.stateRoot,
    transactionsRoot: e.transactionsRoot,
    receiptsRoot: e.receiptsRoot,
    logsBloom: e.logsBloom,
    difficulty: e.difficulty,
    number: e.number,
    gasLimit: e.gasLimit,
    gasUsed: e.gasUsed,
    nonce: e.nonce,
    mixHash: e.mixHash,
    timestamp: e.timestamp,
    extraData: e.extraData
  };
}
Object.defineProperty(Un, "__esModule", { value: !0 });
Un.SubscriptionManager = void 0;
const O_ = ol, P_ = x_, Xa = () => {
};
class $_ {
  constructor(t) {
    const r = new O_.PollingBlockTracker({
      provider: t,
      pollingInterval: 15e3,
      setSkipCacheFlag: !0
    }), { events: n, middleware: s } = P_({
      blockTracker: r,
      provider: t
    });
    this.events = n, this.subscriptionMiddleware = s;
  }
  async handleRequest(t) {
    const r = {};
    return await this.subscriptionMiddleware(t, r, Xa, Xa), r;
  }
  destroy() {
    this.subscriptionMiddleware.destroy();
  }
}
Un.SubscriptionManager = $_;
var Au = D && D.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Wt, "__esModule", { value: !0 });
Wt.CoinbaseWalletProvider = void 0;
const B_ = Au(un), F_ = xu, Y = _r, z = O, D_ = Er, ec = Ne, tn = er, ke = Qt, xi = Au(f0), dr = Xt, j_ = Gt, H_ = Un, tc = "DefaultChainId", rc = "DefaultJsonRpcUrl";
class U_ extends F_.EventEmitter {
  constructor(t) {
    var r, n;
    super(), this._filterPolyfill = new j_.FilterPolyfill(this), this._subscriptionManager = new H_.SubscriptionManager(this), this._relay = null, this._addresses = [], this.hasMadeFirstChainChangedEmission = !1, this.setProviderInfo = this.setProviderInfo.bind(this), this.updateProviderInfo = this.updateProviderInfo.bind(this), this.getChainId = this.getChainId.bind(this), this.setAppInfo = this.setAppInfo.bind(this), this.enable = this.enable.bind(this), this.close = this.close.bind(this), this.send = this.send.bind(this), this.sendAsync = this.sendAsync.bind(this), this.request = this.request.bind(this), this._setAddresses = this._setAddresses.bind(this), this.scanQRCode = this.scanQRCode.bind(this), this.genericRequest = this.genericRequest.bind(this), this._chainIdFromOpts = t.chainId, this._jsonRpcUrlFromOpts = t.jsonRpcUrl, this._overrideIsMetaMask = t.overrideIsMetaMask, this._relayProvider = t.relayProvider, this._storage = t.storage, this._relayEventManager = t.relayEventManager, this.diagnostic = t.diagnosticLogger, this.reloadOnDisconnect = !0, this.isCoinbaseWallet = (r = t.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0, this.isCoinbaseBrowser = (n = t.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1, this.qrUrl = t.qrUrl;
    const s = this.getChainId(), i = (0, z.prepend0x)(s.toString(16));
    this.emit("connect", { chainIdStr: i });
    const o = this._storage.getItem(ec.LOCAL_STORAGE_ADDRESSES_KEY);
    if (o) {
      const a = o.split(" ");
      a[0] !== "" && (this._addresses = a.map((c) => (0, z.ensureAddressString)(c)), this.emit("accountsChanged", a));
    }
    this._subscriptionManager.events.on("notification", (a) => {
      this.emit("message", {
        type: a.method,
        data: a.params
      });
    }), this._isAuthorized() && this.initializeRelay(), window.addEventListener("message", (a) => {
      var c;
      if (!(a.origin !== location.origin || a.source !== window) && a.data.type === "walletLinkMessage" && a.data.data.action === "dappChainSwitched") {
        const l = a.data.data.chainId, u = (c = a.data.data.jsonRpcUrl) !== null && c !== void 0 ? c : this.jsonRpcUrl;
        this.updateProviderInfo(u, Number(l));
      }
    });
  }
  /** @deprecated Use `.request({ method: 'eth_accounts' })` instead. */
  get selectedAddress() {
    return this._addresses[0] || void 0;
  }
  /** @deprecated Use the chain ID. If you still need the network ID, use `.request({ method: 'net_version' })`. */
  get networkVersion() {
    return this.getChainId().toString(10);
  }
  /** @deprecated Use `.request({ method: 'eth_chainId' })` instead. */
  get chainId() {
    return (0, z.prepend0x)(this.getChainId().toString(16));
  }
  get isWalletLink() {
    return !0;
  }
  /**
   * Some DApps (i.e. Alpha Homora) seem to require the window.ethereum object return
   * true for this method.
   */
  get isMetaMask() {
    return this._overrideIsMetaMask;
  }
  get host() {
    return this.jsonRpcUrl;
  }
  get connected() {
    return !0;
  }
  isConnected() {
    return !0;
  }
  get jsonRpcUrl() {
    var t;
    return (t = this._storage.getItem(rc)) !== null && t !== void 0 ? t : this._jsonRpcUrlFromOpts;
  }
  set jsonRpcUrl(t) {
    this._storage.setItem(rc, t);
  }
  disableReloadOnDisconnect() {
    this.reloadOnDisconnect = !1;
  }
  setProviderInfo(t, r) {
    this.isCoinbaseBrowser || (this._chainIdFromOpts = r, this._jsonRpcUrlFromOpts = t), this.updateProviderInfo(this.jsonRpcUrl, this.getChainId());
  }
  updateProviderInfo(t, r) {
    this.jsonRpcUrl = t;
    const n = this.getChainId();
    this._storage.setItem(tc, r.toString(10)), ((0, z.ensureIntNumber)(r) !== n || !this.hasMadeFirstChainChangedEmission) && (this.emit("chainChanged", this.getChainId()), this.hasMadeFirstChainChangedEmission = !0);
  }
  async watchAsset(t, r, n, s, i, o) {
    const c = await (await this.initializeRelay()).watchAsset(t, r, n, s, i, o == null ? void 0 : o.toString()).promise;
    return (0, ke.isErrorResponse)(c) ? !1 : !!c.result;
  }
  async addEthereumChain(t, r, n, s, i, o) {
    var a, c;
    if ((0, z.ensureIntNumber)(t) === this.getChainId())
      return !1;
    const l = await this.initializeRelay(), u = l.inlineAddEthereumChain(t.toString());
    !this._isAuthorized() && !u && await l.requestEthereumAccounts().promise;
    const d = await l.addEthereumChain(t.toString(), r, i, n, s, o).promise;
    return (0, ke.isErrorResponse)(d) ? !1 : (((a = d.result) === null || a === void 0 ? void 0 : a.isApproved) === !0 && this.updateProviderInfo(r[0], t), ((c = d.result) === null || c === void 0 ? void 0 : c.isApproved) === !0);
  }
  async switchEthereumChain(t) {
    const n = await (await this.initializeRelay()).switchEthereumChain(t.toString(10), this.selectedAddress || void 0).promise;
    if ((0, ke.isErrorResponse)(n)) {
      if (!n.errorCode)
        return;
      throw n.errorCode === Y.standardErrorCodes.provider.unsupportedChain ? Y.standardErrors.provider.unsupportedChain() : Y.standardErrors.provider.custom({
        message: n.errorMessage,
        code: n.errorCode
      });
    }
    const s = n.result;
    s.isApproved && s.rpcUrl.length > 0 && this.updateProviderInfo(s.rpcUrl, t);
  }
  setAppInfo(t, r) {
    this.initializeRelay().then((n) => n.setAppInfo(t, r));
  }
  /** @deprecated Use `.request({ method: 'eth_requestAccounts' })` instead. */
  async enable() {
    var t;
    return (t = this.diagnostic) === null || t === void 0 || t.log(dr.EVENTS.ETH_ACCOUNTS_STATE, {
      method: "provider::enable",
      addresses_length: this._addresses.length,
      sessionIdHash: this._relay ? tn.Session.hash(this._relay.session.id) : void 0
    }), this._isAuthorized() ? [...this._addresses] : await this.send("eth_requestAccounts");
  }
  async close() {
    (await this.initializeRelay()).resetAndReload();
  }
  send(t, r) {
    try {
      const n = this._send(t, r);
      if (n instanceof Promise)
        return n.catch((s) => {
          throw (0, Y.serializeError)(s, t);
        });
    } catch (n) {
      throw (0, Y.serializeError)(n, t);
    }
  }
  _send(t, r) {
    if (typeof t == "string") {
      const s = t, i = Array.isArray(r) ? r : r !== void 0 ? [r] : [], o = {
        jsonrpc: "2.0",
        id: 0,
        method: s,
        params: i
      };
      return this._sendRequestAsync(o).then((a) => a.result);
    }
    if (typeof r == "function") {
      const s = t, i = r;
      return this._sendAsync(s, i);
    }
    if (Array.isArray(t))
      return t.map((i) => this._sendRequest(i));
    const n = t;
    return this._sendRequest(n);
  }
  async sendAsync(t, r) {
    try {
      return this._sendAsync(t, r).catch((n) => {
        throw (0, Y.serializeError)(n, t);
      });
    } catch (n) {
      return Promise.reject((0, Y.serializeError)(n, t));
    }
  }
  async _sendAsync(t, r) {
    if (typeof r != "function")
      throw new Error("callback is required");
    if (Array.isArray(t)) {
      const s = r;
      this._sendMultipleRequestsAsync(t).then((i) => s(null, i)).catch((i) => s(i, null));
      return;
    }
    const n = r;
    return this._sendRequestAsync(t).then((s) => n(null, s)).catch((s) => n(s, null));
  }
  async request(t) {
    try {
      return this._request(t).catch((r) => {
        throw (0, Y.serializeError)(r, t.method);
      });
    } catch (r) {
      return Promise.reject((0, Y.serializeError)(r, t.method));
    }
  }
  async _request(t) {
    if (!t || typeof t != "object" || Array.isArray(t))
      throw Y.standardErrors.rpc.invalidRequest({
        message: "Expected a single, non-array, object argument.",
        data: t
      });
    const { method: r, params: n } = t;
    if (typeof r != "string" || r.length === 0)
      throw Y.standardErrors.rpc.invalidRequest({
        message: "'args.method' must be a non-empty string.",
        data: t
      });
    if (n !== void 0 && !Array.isArray(n) && (typeof n != "object" || n === null))
      throw Y.standardErrors.rpc.invalidRequest({
        message: "'args.params' must be an object or array if provided.",
        data: t
      });
    const s = n === void 0 ? [] : n, i = this._relayEventManager.makeRequestId();
    return (await this._sendRequestAsync({
      method: r,
      params: s,
      jsonrpc: "2.0",
      id: i
    })).result;
  }
  async scanQRCode(t) {
    const n = await (await this.initializeRelay()).scanQRCode((0, z.ensureRegExpString)(t)).promise;
    if ((0, ke.isErrorResponse)(n))
      throw (0, Y.serializeError)(n.errorMessage, "scanQRCode");
    if (typeof n.result != "string")
      throw (0, Y.serializeError)("result was not a string", "scanQRCode");
    return n.result;
  }
  async genericRequest(t, r) {
    const s = await (await this.initializeRelay()).genericRequest(t, r).promise;
    if ((0, ke.isErrorResponse)(s))
      throw (0, Y.serializeError)(s.errorMessage, "generic");
    if (typeof s.result != "string")
      throw (0, Y.serializeError)("result was not a string", "generic");
    return s.result;
  }
  /**
   * @beta
   * This method is currently in beta. While it is available for use, please note that it is still under testing and may undergo significant changes.
   *
   * @remarks
   * IMPORTANT: Signature validation is not performed by this method. Users of this method are advised to perform their own signature validation.
   * Common web3 frontend libraries such as ethers.js and viem provide the `verifyMessage` utility function that can be used for signature validation.
   *
   * It combines `eth_requestAccounts` and "Sign-In with Ethereum" (EIP-4361) into a single call.
   * The returned account and signed message can be used to authenticate the user.
   *
   * @param {Object} params - An object with the following properties:
   * - `nonce` {string}: A unique string to prevent replay attacks.
   * - `statement` {string}: An optional human-readable ASCII assertion that the user will sign.
   * - `resources` {string[]}: An optional list of information the user wishes to have resolved as part of authentication by the relying party.
   *
   * @returns {Promise<ConnectAndSignInResponse>} A promise that resolves to an object with the following properties:
   * - `accounts` {string[]}: The Ethereum accounts of the user.
   * - `message` {string}: The overall message that the user signed. Hex encoded.
   * - `signature` {string}: The signature of the message, signed with the user's private key. Hex encoded.
   */
  async connectAndSignIn(t) {
    var r;
    (r = this.diagnostic) === null || r === void 0 || r.log(dr.EVENTS.ETH_ACCOUNTS_STATE, {
      method: "provider::connectAndSignIn",
      sessionIdHash: this._relay ? tn.Session.hash(this._relay.session.id) : void 0
    });
    let n;
    try {
      const i = await this.initializeRelay();
      if (!(i instanceof D_.MobileRelay))
        throw new Error("connectAndSignIn is only supported on mobile");
      if (n = await i.connectAndSignIn(t).promise, (0, ke.isErrorResponse)(n))
        throw new Error(n.errorMessage);
    } catch (i) {
      throw typeof i.message == "string" && i.message.match(/(denied|rejected)/i) ? Y.standardErrors.provider.userRejectedRequest("User denied account authorization") : i;
    }
    if (!n.result)
      throw new Error("accounts received is empty");
    const { accounts: s } = n.result;
    return this._setAddresses(s), this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()), n.result;
  }
  async selectProvider(t) {
    const n = await (await this.initializeRelay()).selectProvider(t).promise;
    if ((0, ke.isErrorResponse)(n))
      throw (0, Y.serializeError)(n.errorMessage, "selectProvider");
    if (typeof n.result != "string")
      throw (0, Y.serializeError)("result was not a string", "selectProvider");
    return n.result;
  }
  supportsSubscriptions() {
    return !1;
  }
  subscribe() {
    throw new Error("Subscriptions are not supported");
  }
  unsubscribe() {
    throw new Error("Subscriptions are not supported");
  }
  disconnect() {
    return !0;
  }
  _sendRequest(t) {
    const r = {
      jsonrpc: "2.0",
      id: t.id
    }, { method: n } = t;
    if (r.result = this._handleSynchronousMethods(t), r.result === void 0)
      throw new Error(`Coinbase Wallet does not support calling ${n} synchronously without a callback. Please provide a callback parameter to call ${n} asynchronously.`);
    return r;
  }
  _setAddresses(t, r) {
    if (!Array.isArray(t))
      throw new Error("addresses is not an array");
    const n = t.map((s) => (0, z.ensureAddressString)(s));
    JSON.stringify(n) !== JSON.stringify(this._addresses) && (this._addresses = n, this.emit("accountsChanged", this._addresses), this._storage.setItem(ec.LOCAL_STORAGE_ADDRESSES_KEY, n.join(" ")));
  }
  _sendRequestAsync(t) {
    return new Promise((r, n) => {
      try {
        const s = this._handleSynchronousMethods(t);
        if (s !== void 0)
          return r({
            jsonrpc: "2.0",
            id: t.id,
            result: s
          });
        const i = this._handleAsynchronousFilterMethods(t);
        if (i !== void 0) {
          i.then((a) => r(Object.assign(Object.assign({}, a), { id: t.id }))).catch((a) => n(a));
          return;
        }
        const o = this._handleSubscriptionMethods(t);
        if (o !== void 0) {
          o.then((a) => r({
            jsonrpc: "2.0",
            id: t.id,
            result: a.result
          })).catch((a) => n(a));
          return;
        }
      } catch (s) {
        return n(s);
      }
      this._handleAsynchronousMethods(t).then((s) => s && r(Object.assign(Object.assign({}, s), { id: t.id }))).catch((s) => n(s));
    });
  }
  _sendMultipleRequestsAsync(t) {
    return Promise.all(t.map((r) => this._sendRequestAsync(r)));
  }
  _handleSynchronousMethods(t) {
    const { method: r } = t, n = t.params || [];
    switch (r) {
      case "eth_accounts":
        return this._eth_accounts();
      case "eth_coinbase":
        return this._eth_coinbase();
      case "eth_uninstallFilter":
        return this._eth_uninstallFilter(n);
      case "net_version":
        return this._net_version();
      case "eth_chainId":
        return this._eth_chainId();
      default:
        return;
    }
  }
  async _handleAsynchronousMethods(t) {
    const { method: r } = t, n = t.params || [];
    switch (r) {
      case "eth_requestAccounts":
        return this._eth_requestAccounts();
      case "eth_sign":
        return this._eth_sign(n);
      case "eth_ecRecover":
        return this._eth_ecRecover(n);
      case "personal_sign":
        return this._personal_sign(n);
      case "personal_ecRecover":
        return this._personal_ecRecover(n);
      case "eth_signTransaction":
        return this._eth_signTransaction(n);
      case "eth_sendRawTransaction":
        return this._eth_sendRawTransaction(n);
      case "eth_sendTransaction":
        return this._eth_sendTransaction(n);
      case "eth_signTypedData_v1":
        return this._eth_signTypedData_v1(n);
      case "eth_signTypedData_v2":
        return this._throwUnsupportedMethodError();
      case "eth_signTypedData_v3":
        return this._eth_signTypedData_v3(n);
      case "eth_signTypedData_v4":
      case "eth_signTypedData":
        return this._eth_signTypedData_v4(n);
      case "cbWallet_arbitrary":
        return this._cbwallet_arbitrary(n);
      case "wallet_addEthereumChain":
        return this._wallet_addEthereumChain(n);
      case "wallet_switchEthereumChain":
        return this._wallet_switchEthereumChain(n);
      case "wallet_watchAsset":
        return this._wallet_watchAsset(n);
    }
    return (await this.initializeRelay()).makeEthereumJSONRPCRequest(t, this.jsonRpcUrl).catch((i) => {
      var o;
      throw (i.code === Y.standardErrorCodes.rpc.methodNotFound || i.code === Y.standardErrorCodes.rpc.methodNotSupported) && ((o = this.diagnostic) === null || o === void 0 || o.log(dr.EVENTS.METHOD_NOT_IMPLEMENTED, {
        method: t.method,
        sessionIdHash: this._relay ? tn.Session.hash(this._relay.session.id) : void 0
      })), i;
    });
  }
  _handleAsynchronousFilterMethods(t) {
    const { method: r } = t, n = t.params || [];
    switch (r) {
      case "eth_newFilter":
        return this._eth_newFilter(n);
      case "eth_newBlockFilter":
        return this._eth_newBlockFilter();
      case "eth_newPendingTransactionFilter":
        return this._eth_newPendingTransactionFilter();
      case "eth_getFilterChanges":
        return this._eth_getFilterChanges(n);
      case "eth_getFilterLogs":
        return this._eth_getFilterLogs(n);
    }
  }
  _handleSubscriptionMethods(t) {
    switch (t.method) {
      case "eth_subscribe":
      case "eth_unsubscribe":
        return this._subscriptionManager.handleRequest(t);
    }
  }
  _isKnownAddress(t) {
    try {
      const r = (0, z.ensureAddressString)(t);
      return this._addresses.map((s) => (0, z.ensureAddressString)(s)).includes(r);
    } catch {
    }
    return !1;
  }
  _ensureKnownAddress(t) {
    var r;
    if (!this._isKnownAddress(t))
      throw (r = this.diagnostic) === null || r === void 0 || r.log(dr.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED), new Error("Unknown Ethereum address");
  }
  _prepareTransactionParams(t) {
    const r = t.from ? (0, z.ensureAddressString)(t.from) : this.selectedAddress;
    if (!r)
      throw new Error("Ethereum address is unavailable");
    this._ensureKnownAddress(r);
    const n = t.to ? (0, z.ensureAddressString)(t.to) : null, s = t.value != null ? (0, z.ensureBN)(t.value) : new B_.default(0), i = t.data ? (0, z.ensureBuffer)(t.data) : Buffer.alloc(0), o = t.nonce != null ? (0, z.ensureIntNumber)(t.nonce) : null, a = t.gasPrice != null ? (0, z.ensureBN)(t.gasPrice) : null, c = t.maxFeePerGas != null ? (0, z.ensureBN)(t.maxFeePerGas) : null, l = t.maxPriorityFeePerGas != null ? (0, z.ensureBN)(t.maxPriorityFeePerGas) : null, u = t.gas != null ? (0, z.ensureBN)(t.gas) : null, d = t.chainId ? (0, z.ensureIntNumber)(t.chainId) : this.getChainId();
    return {
      fromAddress: r,
      toAddress: n,
      weiValue: s,
      data: i,
      nonce: o,
      gasPriceInWei: a,
      maxFeePerGas: c,
      maxPriorityFeePerGas: l,
      gasLimit: u,
      chainId: d
    };
  }
  _isAuthorized() {
    return this._addresses.length > 0;
  }
  _requireAuthorization() {
    if (!this._isAuthorized())
      throw Y.standardErrors.provider.unauthorized({});
  }
  _throwUnsupportedMethodError() {
    throw Y.standardErrors.provider.unsupportedMethod({});
  }
  async _signEthereumMessage(t, r, n, s) {
    this._ensureKnownAddress(r);
    try {
      const o = await (await this.initializeRelay()).signEthereumMessage(t, r, n, s).promise;
      if ((0, ke.isErrorResponse)(o))
        throw new Error(o.errorMessage);
      return { jsonrpc: "2.0", id: 0, result: o.result };
    } catch (i) {
      throw typeof i.message == "string" && i.message.match(/(denied|rejected)/i) ? Y.standardErrors.provider.userRejectedRequest("User denied message signature") : i;
    }
  }
  async _ethereumAddressFromSignedMessage(t, r, n) {
    const i = await (await this.initializeRelay()).ethereumAddressFromSignedMessage(t, r, n).promise;
    if ((0, ke.isErrorResponse)(i))
      throw new Error(i.errorMessage);
    return { jsonrpc: "2.0", id: 0, result: i.result };
  }
  _eth_accounts() {
    return [...this._addresses];
  }
  _eth_coinbase() {
    return this.selectedAddress || null;
  }
  _net_version() {
    return this.getChainId().toString(10);
  }
  _eth_chainId() {
    return (0, z.hexStringFromIntNumber)(this.getChainId());
  }
  getChainId() {
    const t = this._storage.getItem(tc);
    if (!t)
      return (0, z.ensureIntNumber)(this._chainIdFromOpts);
    const r = parseInt(t, 10);
    return (0, z.ensureIntNumber)(r);
  }
  async _eth_requestAccounts() {
    var t;
    if ((t = this.diagnostic) === null || t === void 0 || t.log(dr.EVENTS.ETH_ACCOUNTS_STATE, {
      method: "provider::_eth_requestAccounts",
      addresses_length: this._addresses.length,
      sessionIdHash: this._relay ? tn.Session.hash(this._relay.session.id) : void 0
    }), this._isAuthorized())
      return Promise.resolve({
        jsonrpc: "2.0",
        id: 0,
        result: this._addresses
      });
    let r;
    try {
      if (r = await (await this.initializeRelay()).requestEthereumAccounts().promise, (0, ke.isErrorResponse)(r))
        throw new Error(r.errorMessage);
    } catch (n) {
      throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? Y.standardErrors.provider.userRejectedRequest("User denied account authorization") : n;
    }
    if (!r.result)
      throw new Error("accounts received is empty");
    return this._setAddresses(r.result), this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()), { jsonrpc: "2.0", id: 0, result: this._addresses };
  }
  _eth_sign(t) {
    this._requireAuthorization();
    const r = (0, z.ensureAddressString)(t[0]), n = (0, z.ensureBuffer)(t[1]);
    return this._signEthereumMessage(n, r, !1);
  }
  _eth_ecRecover(t) {
    const r = (0, z.ensureBuffer)(t[0]), n = (0, z.ensureBuffer)(t[1]);
    return this._ethereumAddressFromSignedMessage(r, n, !1);
  }
  _personal_sign(t) {
    this._requireAuthorization();
    const r = (0, z.ensureBuffer)(t[0]), n = (0, z.ensureAddressString)(t[1]);
    return this._signEthereumMessage(r, n, !0);
  }
  _personal_ecRecover(t) {
    const r = (0, z.ensureBuffer)(t[0]), n = (0, z.ensureBuffer)(t[1]);
    return this._ethereumAddressFromSignedMessage(r, n, !0);
  }
  async _eth_signTransaction(t) {
    this._requireAuthorization();
    const r = this._prepareTransactionParams(t[0] || {});
    try {
      const s = await (await this.initializeRelay()).signEthereumTransaction(r).promise;
      if ((0, ke.isErrorResponse)(s))
        throw new Error(s.errorMessage);
      return { jsonrpc: "2.0", id: 0, result: s.result };
    } catch (n) {
      throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? Y.standardErrors.provider.userRejectedRequest("User denied transaction signature") : n;
    }
  }
  async _eth_sendRawTransaction(t) {
    const r = (0, z.ensureBuffer)(t[0]), s = await (await this.initializeRelay()).submitEthereumTransaction(r, this.getChainId()).promise;
    if ((0, ke.isErrorResponse)(s))
      throw new Error(s.errorMessage);
    return { jsonrpc: "2.0", id: 0, result: s.result };
  }
  async _eth_sendTransaction(t) {
    this._requireAuthorization();
    const r = this._prepareTransactionParams(t[0] || {});
    try {
      const s = await (await this.initializeRelay()).signAndSubmitEthereumTransaction(r).promise;
      if ((0, ke.isErrorResponse)(s))
        throw new Error(s.errorMessage);
      return { jsonrpc: "2.0", id: 0, result: s.result };
    } catch (n) {
      throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? Y.standardErrors.provider.userRejectedRequest("User denied transaction signature") : n;
    }
  }
  async _eth_signTypedData_v1(t) {
    this._requireAuthorization();
    const r = (0, z.ensureParsedJSONObject)(t[0]), n = (0, z.ensureAddressString)(t[1]);
    this._ensureKnownAddress(n);
    const s = xi.default.hashForSignTypedDataLegacy({ data: r }), i = JSON.stringify(r, null, 2);
    return this._signEthereumMessage(s, n, !1, i);
  }
  async _eth_signTypedData_v3(t) {
    this._requireAuthorization();
    const r = (0, z.ensureAddressString)(t[0]), n = (0, z.ensureParsedJSONObject)(t[1]);
    this._ensureKnownAddress(r);
    const s = xi.default.hashForSignTypedData_v3({ data: n }), i = JSON.stringify(n, null, 2);
    return this._signEthereumMessage(s, r, !1, i);
  }
  async _eth_signTypedData_v4(t) {
    this._requireAuthorization();
    const r = (0, z.ensureAddressString)(t[0]), n = (0, z.ensureParsedJSONObject)(t[1]);
    this._ensureKnownAddress(r);
    const s = xi.default.hashForSignTypedData_v4({ data: n }), i = JSON.stringify(n, null, 2);
    return this._signEthereumMessage(s, r, !1, i);
  }
  /** @deprecated */
  async _cbwallet_arbitrary(t) {
    const r = t[0], n = t[1];
    if (typeof n != "string")
      throw new Error("parameter must be a string");
    if (typeof r != "object" || r === null)
      throw new Error("parameter must be an object");
    return { jsonrpc: "2.0", id: 0, result: await this.genericRequest(r, n) };
  }
  async _wallet_addEthereumChain(t) {
    var r, n, s, i;
    const o = t[0];
    if (((r = o.rpcUrls) === null || r === void 0 ? void 0 : r.length) === 0)
      return {
        jsonrpc: "2.0",
        id: 0,
        error: { code: 2, message: "please pass in at least 1 rpcUrl" }
      };
    if (!o.chainName || o.chainName.trim() === "")
      throw Y.standardErrors.rpc.invalidParams("chainName is a required field");
    if (!o.nativeCurrency)
      throw Y.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
    const a = parseInt(o.chainId, 16);
    return await this.addEthereumChain(a, (n = o.rpcUrls) !== null && n !== void 0 ? n : [], (s = o.blockExplorerUrls) !== null && s !== void 0 ? s : [], o.chainName, (i = o.iconUrls) !== null && i !== void 0 ? i : [], o.nativeCurrency) ? { jsonrpc: "2.0", id: 0, result: null } : {
      jsonrpc: "2.0",
      id: 0,
      error: { code: 2, message: "unable to add ethereum chain" }
    };
  }
  async _wallet_switchEthereumChain(t) {
    const r = t[0];
    return await this.switchEthereumChain(parseInt(r.chainId, 16)), { jsonrpc: "2.0", id: 0, result: null };
  }
  async _wallet_watchAsset(t) {
    const r = Array.isArray(t) ? t[0] : t;
    if (!r.type)
      throw Y.standardErrors.rpc.invalidParams("Type is required");
    if ((r == null ? void 0 : r.type) !== "ERC20")
      throw Y.standardErrors.rpc.invalidParams(`Asset of type '${r.type}' is not supported`);
    if (!(r != null && r.options))
      throw Y.standardErrors.rpc.invalidParams("Options are required");
    if (!(r != null && r.options.address))
      throw Y.standardErrors.rpc.invalidParams("Address is required");
    const n = this.getChainId(), { address: s, symbol: i, image: o, decimals: a } = r.options;
    return { jsonrpc: "2.0", id: 0, result: await this.watchAsset(r.type, s, i, a, o, n) };
  }
  _eth_uninstallFilter(t) {
    const r = (0, z.ensureHexString)(t[0]);
    return this._filterPolyfill.uninstallFilter(r);
  }
  async _eth_newFilter(t) {
    const r = t[0];
    return { jsonrpc: "2.0", id: 0, result: await this._filterPolyfill.newFilter(r) };
  }
  async _eth_newBlockFilter() {
    return { jsonrpc: "2.0", id: 0, result: await this._filterPolyfill.newBlockFilter() };
  }
  async _eth_newPendingTransactionFilter() {
    return { jsonrpc: "2.0", id: 0, result: await this._filterPolyfill.newPendingTransactionFilter() };
  }
  _eth_getFilterChanges(t) {
    const r = (0, z.ensureHexString)(t[0]);
    return this._filterPolyfill.getFilterChanges(r);
  }
  _eth_getFilterLogs(t) {
    const r = (0, z.ensureHexString)(t[0]);
    return this._filterPolyfill.getFilterLogs(r);
  }
  initializeRelay() {
    return this._relay ? Promise.resolve(this._relay) : this._relayProvider().then((t) => (t.setAccountsCallback((r, n) => this._setAddresses(r, n)), t.setChainCallback((r, n) => {
      this.updateProviderInfo(n, parseInt(r, 10));
    }), t.setDappDefaultChainCallback(this._chainIdFromOpts), this._relay = t, t));
  }
}
Wt.CoinbaseWalletProvider = U_;
var as = {};
Object.defineProperty(as, "__esModule", { value: !0 });
as.RelayEventManager = void 0;
const W_ = O;
class V_ {
  constructor() {
    this._nextRequestId = 0, this.callbacks = /* @__PURE__ */ new Map();
  }
  makeRequestId() {
    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
    const t = this._nextRequestId, r = (0, W_.prepend0x)(t.toString(16));
    return this.callbacks.get(r) && this.callbacks.delete(r), t;
  }
}
as.RelayEventManager = V_;
Object.defineProperty(fr, "__esModule", { value: !0 });
fr.CoinbaseWalletSDK = void 0;
const z_ = pn, q_ = gn, nc = O, G_ = wn, J_ = Wt, Z_ = Er, K_ = Mr, Q_ = as, Y_ = Ar, X_ = Sr, Tu = Yt;
class cs {
  /**
   * Constructor
   * @param options Coinbase Wallet SDK constructor options
   */
  constructor(t) {
    var r, n, s;
    this._appName = "", this._appLogoUrl = null, this._relay = null, this._relayEventManager = null;
    const i = t.linkAPIUrl || q_.LINK_API_URL;
    typeof t.overrideIsMetaMask > "u" ? this._overrideIsMetaMask = !1 : this._overrideIsMetaMask = t.overrideIsMetaMask, this._overrideIsCoinbaseWallet = (r = t.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0, this._overrideIsCoinbaseBrowser = (n = t.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1, this._diagnosticLogger = t.diagnosticLogger, this._reloadOnDisconnect = (s = t.reloadOnDisconnect) !== null && s !== void 0 ? s : !0;
    const o = new URL(i), a = `${o.protocol}//${o.host}`;
    if (this._storage = new G_.ScopedLocalStorage(`-walletlink:${a}`), this._storage.setItem("version", cs.VERSION), this.walletExtension || this.coinbaseBrowser)
      return;
    this._relayEventManager = new Q_.RelayEventManager();
    const c = (0, nc.isMobileWeb)(), l = t.uiConstructor || ((d) => c ? new K_.MobileRelayUI(d) : new Y_.WalletLinkRelayUI(d)), u = {
      linkAPIUrl: i,
      version: Tu.LIB_VERSION,
      darkMode: !!t.darkMode,
      headlessMode: !!t.headlessMode,
      uiConstructor: l,
      storage: this._storage,
      relayEventManager: this._relayEventManager,
      diagnosticLogger: this._diagnosticLogger,
      reloadOnDisconnect: this._reloadOnDisconnect,
      enableMobileWalletLink: t.enableMobileWalletLink
    };
    this._relay = c ? new Z_.MobileRelay(u) : new X_.WalletLinkRelay(u), this.setAppInfo(t.appName, t.appLogoUrl), !t.headlessMode && this._relay.attachUI();
  }
  /**
   * Create a Web3 Provider object
   * @param jsonRpcUrl Ethereum JSON RPC URL (Default: "")
   * @param chainId Ethereum Chain ID (Default: 1)
   * @returns A Web3 Provider
   */
  makeWeb3Provider(t = "", r = 1) {
    const n = this.walletExtension;
    if (n)
      return this.isCipherProvider(n) || n.setProviderInfo(t, r), this._reloadOnDisconnect === !1 && typeof n.disableReloadOnDisconnect == "function" && n.disableReloadOnDisconnect(), n;
    const s = this.coinbaseBrowser;
    if (s)
      return s;
    const i = this._relay;
    if (!i || !this._relayEventManager || !this._storage)
      throw new Error("Relay not initialized, should never happen");
    return t || i.setConnectDisabled(!0), new J_.CoinbaseWalletProvider({
      relayProvider: () => Promise.resolve(i),
      relayEventManager: this._relayEventManager,
      storage: this._storage,
      jsonRpcUrl: t,
      chainId: r,
      qrUrl: this.getQrUrl(),
      diagnosticLogger: this._diagnosticLogger,
      overrideIsMetaMask: this._overrideIsMetaMask,
      overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
      overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser
    });
  }
  /**
   * Set application information
   * @param appName Application name
   * @param appLogoUrl Application logo image URL
   */
  setAppInfo(t, r) {
    var n;
    this._appName = t || "DApp", this._appLogoUrl = r || (0, nc.getFavicon)();
    const s = this.walletExtension;
    s ? this.isCipherProvider(s) || s.setAppInfo(this._appName, this._appLogoUrl) : (n = this._relay) === null || n === void 0 || n.setAppInfo(this._appName, this._appLogoUrl);
  }
  /**
   * Disconnect. After disconnecting, this will reload the web page to ensure
   * all potential stale state is cleared.
   */
  disconnect() {
    var t;
    const r = this === null || this === void 0 ? void 0 : this.walletExtension;
    r ? r.close() : (t = this._relay) === null || t === void 0 || t.resetAndReload();
  }
  /**
   * Return QR URL for mobile wallet connection, will return null if extension is installed
   */
  getQrUrl() {
    var t, r;
    return (r = (t = this._relay) === null || t === void 0 ? void 0 : t.getQRCodeUrl()) !== null && r !== void 0 ? r : null;
  }
  /**
   * Official Coinbase Wallet logo for developers to use on their frontend
   * @param type Type of wallet logo: "standard" | "circle" | "text" | "textWithLogo" | "textLight" | "textWithLogoLight"
   * @param width Width of the logo (Optional)
   * @returns SVG Data URI
   */
  getCoinbaseWalletLogo(t, r = 240) {
    return (0, z_.walletLogo)(t, r);
  }
  get walletExtension() {
    var t;
    return (t = window.coinbaseWalletExtension) !== null && t !== void 0 ? t : window.walletLinkExtension;
  }
  get coinbaseBrowser() {
    var t, r;
    try {
      const n = (t = window.ethereum) !== null && t !== void 0 ? t : (r = window.top) === null || r === void 0 ? void 0 : r.ethereum;
      return n && "isCoinbaseBrowser" in n && n.isCoinbaseBrowser ? n : void 0;
    } catch {
      return;
    }
  }
  isCipherProvider(t) {
    return typeof t.isCipher == "boolean" && t.isCipher;
  }
}
fr.CoinbaseWalletSDK = cs;
cs.VERSION = Tu.LIB_VERSION;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.CoinbaseWalletProvider = e.CoinbaseWalletSDK = void 0;
  const t = fr, r = Wt;
  var n = fr;
  Object.defineProperty(e, "CoinbaseWalletSDK", { enumerable: !0, get: function() {
    return n.CoinbaseWalletSDK;
  } });
  var s = Wt;
  Object.defineProperty(e, "CoinbaseWalletProvider", { enumerable: !0, get: function() {
    return s.CoinbaseWalletProvider;
  } }), e.default = t.CoinbaseWalletSDK, typeof window < "u" && (window.CoinbaseWalletSDK = t.CoinbaseWalletSDK, window.CoinbaseWalletProvider = r.CoinbaseWalletProvider, window.WalletLink = t.CoinbaseWalletSDK, window.WalletLinkProvider = r.CoinbaseWalletProvider);
})(oc);
const ey = /* @__PURE__ */ Mu(oc), fy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ey
}, Symbol.toStringTag, { value: "Module" }));
export {
  fy as i
};

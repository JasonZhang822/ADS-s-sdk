import { formatEther } from "@ethersproject/units";
import { Web3Provider } from "@ethersproject/providers";
import CryptoJS from "crypto-js";
import { createAppKit } from "@reown/appkit";
import { mainnet, baseSepolia, sepolia } from "@reown/appkit/networks";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
const networks = [mainnet, baseSepolia, sepolia];

declare global {
  interface Window {
    headdatatagbtn: (
      hiddenid: string,
      showid: string,
      showtype?: string
    ) => void;
    datatagbtn: (id: string, classname: string) => void;
    closead: (eleid: string) => void;
    clickad: (item: any) => Promise<void>;
    toggleArrow: (svgElement: SVGElement) => void;
    maxthon?: boolean;
  }
}

// 定义全局变量
let WEB_KET =
  document.scripts[document.scripts.length - 1].src.split("?client=")[1] || "";
// let JEECG_BOOT_URL = "//192.168.8.73:8080/jeecg-boot"; // 本地
// let JEECG_BOOT_NEW_URL = "//192.168.8.73:8081"; // 本地
let JEECG_BOOT_NEW_URL = "//192.168.8.70:8081"; // 本地
const projectId = "791a8bebac13358a97596258946ebecd";
const metadata = {
  name: "ADX",
  description: "AppKit Example",
  url: "https://reown.com/appkit", // origin must match your domain & subdomain
  icons: ["https://assets.reown.com/reown-profile-pic.png"],
};

let WEB_URL = window.location.href;
let head: any = document.querySelector("head");
let style = document.createElement("style");
let elements: Element[] = []; //获取所有页面元素
let bodyChildrengrid: any[] = []; //适合宫格广告的列表
let bodyChildrenFlex: any[] = []; //适合flex广告的列表
let bodyChildrenmaxWidth160: any[] = []; //160粘性广告列表
let ax_web_xxe = "a";
let b_asfc_zz_w = "dx";
let c_rwe_ace_a = "C";
let d_a_bar_de = "ode";
let imglist: any[] = []; //当前拥有的广告列表
let screenWidth = document.documentElement.clientWidth; //获取屏幕宽度
let web_code = "",
  onecode,
  codemd5: any;

const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks,
});

const modal = createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, baseSepolia],
  metadata,
  projectId,
  features: {
    socials: false,
    email: false,
    analytics: true,
  },
});

// 样式定义
style.innerHTML = `
  #open-connect-modal {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
  #open-connect-modal:hover {
    background-color: #0056b3;
  }
  .sticky-desktop{
    width:100%;
    height: 94px;
    position: fixed;
    font-size: 18px;
    bottom: 0;
    left: 0;
    color:#202124;
    background-color:#ffffff;
    transition: all 0.3s;
    z-index:100000 !important;
    box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px !important;
  }
  .sticky-desktop>.down{
    transform-origin: 35% center;
  }
  .sticky-desktop>.close>.down{
    transform: rotate(180deg);
  }
  .ad-heder{/* body头部广告 */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .ad-skip{/* 跳转弹窗 */
    width:100vw;
    height:100vh;
    background:#262626;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index:999999;
  }
  .ad-imgbox{
    position: relative;
    cursor: pointer;
    overflow: hidden;
  }
  .ad-imgbox img{
    margin-bottom:0 !important;
  }
  .data-utils{
    display: flex;
    align-items: center;
    position: absolute;
    top:0;
    right:0;
  }
  .ad-imgbox>.data-utils>.data-icon,.ad-imgbox>.ad-data-di>.data-utils>.data-icon{
    width: 20px;
    height: 20px;
    border:1px solid #cccccc;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
  }
  .ad-imgbox>.data-utils>.data-icon>.icon,.ad-imgbox>.ad-data-di>.data-utils>.data-icon>.icon{
    width: 100%;
    height: 100%;
    color: #1cb6d3;
  }
  .ad-imgbox>.data-utils>.data-icon>.data-hint,.ad-imgbox>.ad-data-di>.data-utils>.data-icon>.data-hint{
    position: absolute;
    right: 0%;
    top:-1px;
    height: 20px;
    width: max-content;
    overflow: hidden;
    opacity: 0;
    transition: all 0.3s;
    line-height: 20px;
    padding: 0 5px;
    background-color: #ffffff;
    font-size: 14px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    color: #6d6b6b;
  }
  .ad-imgbox>.data-utils>.data-svg-icon:hover>.data-hint,.ad-imgbox>.ad-data-di>.data-utils>.data-svg-icon:hover>.data-hint{
    opacity: 1;
    right: calc(100% + 1px);
  }
  .ad-skip-head{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:60px;
    background:#424242;
    display: flex;
    color: #ffffff;
    font-size: 20px;
    align-items: center;
    text-align: center;
    padding-right: 50px;
  }
  .ad-skip-head>.ad-skip-head-name{
    flex:1;
  }
  .ad-skip-head>.icon{
    cursor: pointer;
  }
  .ad-close-img{/*跳转弹窗关闭按钮*/
    background:#cccccc;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    display:flex;
    ailgn-items: center;
    justify-content: center;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    z-index: 99;
  }
  .ad-close-span{/*粘性弹窗关闭按钮*/
    width: 21px;
    height: 21px;
    border-radius: 50%;
    position: absolute;
    background:#cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 5px;
    right: 5px;
    cursor: pointer;
    z-index: 999999;
  }
  .data-contetn{/*底部固定定位*/
    display: flex;
    align-items: center;
    padding: 6px 2px 4px;
    @media (max-width: 768px) {
      height: 100%
    }
  }
  .data-contetn>.contetn{/*底部固定定位*/
    width:100%;
    padding: 2px 18px 2px;
    border:1px solid #bdc1c6;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      height: 100%
      padding:0;
    }
  }
  .data-content-logo{
    width:50px;
    height: 50px;
    margin-right: 10px;
    background-color: #e3c381;
  }
  .data-contetn>.contetn>.areaText{/*底部固定定位*/
    color:#5f6368;
    font-size: 14px;
  }
  .data-tag-btn{/*底部固定关闭*/
    position:absolute;
    width: 100%;
    height: 5px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px !important;
  }
  .ad-side{/*侧边固定定位*/
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    z-index:7999;
    background: #ffffff;
    flex-direction: column;
    border-radius: 4px;
  }
    .ad-side-left{/*左侧边固定定位*/
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index:7999;
    background: #ffffff;
    flex-direction: column;
    border-radius: 4px;
  }
  // .ad-stickyad160{
  //   position: relative;
  // }
  .ad-mobile-body{/* 插入内容广告*/
    display:none;
    justify-content: center;
    align-items: center;
    position: relative;
    margin:0 auto;
    padding:20px 0;
  }
  @media (max-width: 786px) {
    .ad-mobile-body{
      display:flex;
    }
    // .sticky-desktop{
    //   display: none;
    // }
    .head-sticky-desktop{
      display: none;
    }
    .sticky-mobile-foot{
      display: block;
    }
    .ad-side{
      display: none !important;
    }
    #data-ad-stickyad160{
      display: none !important;
    }
  }
  .data-contetn>.contetn>.data-contetn-img{
    position: relative;
    cursor: pointer;
  }
  .data-contetn>.contetn>.data-contetn-img>.data-img{
    width: 100%;
    height: 100%;
  }
  .data-contetn>.contetn>.data-contetn-img>.data-utils{
    display: flex;
    align-items: center;
    position: absolute;
    top:0;
    right:0;
  }
  .data-contetn>.contetn>.data-contetn-img>.data-utils>.data-icon{
    width: 20px;
    height: 20px;
    border:1px solid #cccccc;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
  }
  .data-contetn>.contetn>.data-contetn-img>.data-utils>.data-icon>.icon{
    width: 100%;
    height: 100%;
    color: #1cb6d3;
  }
  .data-contetn>.contetn>.data-contetn-img>.data-utils>.data-icon>.data-hint{
    position: absolute;
    right: 0%;
    top:-1px;
    height: 20px;
    width: max-content;
    overflow: hidden;
    opacity: 0;
    transition: all 0.3s;
    line-height: 20px;
    padding: 0 5px;
    background-color: #ffffff;
    font-size: 14px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    color:#6d6b6b;
  }
  .data-contetn>.contetn>.data-contetn-img>.data-utils>.data-svg-icon:hover>.data-hint{
    opacity: 1;
    right: calc(100% + 1px);
  }
  .ad-side>.ad-imgbox{
    width: 100%;
  }
  .ad-side>.data-ad-side-cloer-btn,.ad-stickyad160>.data-ad-side-cloer-btn{
    position: relative;
    box-shadow:rgba(0, 0, 0, 0.5) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px !important;
  }
  .ad-side>.ad-imgbox>.ad-data-di>img{
    margin: auto !important;
  }
  .ad-stickyad160>.data-ad-side-cloer-btn{
    transform: translateX(50%);
  }
  `;
var svghint = `<svg t="1696640392678" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4041" width="24" height="24"><path d="M512 958.016611c-245.919634 0-446.016611-200.064292-446.016611-446.016611 0-245.919634 200.095256-446.016611 446.016611-446.016611 245.952318 0 446.016611 200.064292 446.016611 446.016611S757.952318 958.016611 512 958.016611zM512 129.983389c-210.655557 0-382.016611 171.359333-382.016611 382.016611 0 210.624593 171.359333 382.016611 382.016611 382.016611 210.624593 0 382.016611-171.359333 382.016611-382.016611S722.624593 129.983389 512 129.983389z" fill="#1cb6d3" p-id="4042"></path><path d="M463.99957 304.00043c0 26.509985 21.490445 48.00043 48.00043 48.00043s48.00043-21.490445 48.00043-48.00043-21.490445-48.00043-48.00043-48.00043S463.99957 277.490445 463.99957 304.00043z" fill="#1cb6d3" p-id="4043"></path><path d="M512 768c-17.664722 0-32.00086-14.303454-32.00086-32.00086L479.99914 448c0-17.664722 14.336138-32.00086 32.00086-32.00086s32.00086 14.336138 32.00086 32.00086l0 287.99914C544.00086 753.696546 529.664722 768 512 768z" fill="#1cb6d3" p-id="4044"></path></svg>`;
var svgcloer = `<svg t="1696642306018" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5939" width="24" height="24"><path d="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z" fill="#1cb6d3" p-id="5940"></path></svg>`;

// 添加悬浮按钮到文档
head.appendChild(style); //在head标签中添加样式

// 创建钱包套件
async function useWalletKit() {
  console.log("Initializing Wallet Kit...");

  modal.subscribeEvents(async (event) => {
    updateButtonText(modal);
    switch (event.data.event) {
      case "CONNECT_SUCCESS":
        const walletProvider = modal.getWalletProvider();
        const address = modal.getAddress();
        const walletName = modal.getWalletInfo()?.name;
        const chainId = modal.getChainId()?.toString();
        localStorage.setItem("ads.walletAddress", address || "");
        localStorage.setItem("ads.walletName", walletName || "");
        localStorage.setItem("ads.chainId", chainId || "");

        //@ts-ignore
        const provider = new Web3Provider(walletProvider, "any");
        const balance = await provider.send("eth_getBalance", [address]);
        localStorage.setItem("ads.balance", formatEther(balance) || "");
        break;
      case "MODAL_LOADED":
        break;
      default:
        break;
    }
  });

  return {
    modal,
  };
}

const updateButtonText = async (modal: any) => {
  const openConnectModalBtn = document.getElementById("open-connect-modal");
  if (openConnectModalBtn) {
    if (modal.getIsConnectedState()) {
      openConnectModalBtn.textContent = "Disconnect wallet";
      openConnectModalBtn?.addEventListener("click", async () => {
        // await modal.adapter?.connectionControllerClient?.disconnect();
      });
    } else {
      openConnectModalBtn.textContent = "Connect wallet";
      openConnectModalBtn?.addEventListener("click", async () => {
        modal.open();
        console.log(modal.getIsConnectedState());
      });
    }
  }
};

// 创建悬浮按钮
function createButton() {
  const floatingButton = document.createElement("button");
  floatingButton.id = "open-connect-modal";
  floatingButton.textContent = "connectWallet";
  document.body.appendChild(floatingButton);
}

// 函数定义
function getData() {
  return ax_web_xxe + b_asfc_zz_w;
}

function getCode() {
  return getData() + c_rwe_ace_a + d_a_bar_de;
}

function createmd5(str: string) {
  if (!str) return;
  return CryptoJS.MD5(str).toString();
}

function createAdimg() {
  //根据条件生成广告
  if (imglist.length <= 0) return;
  for (let index = 0; index < imglist.length; index++) {
    visitorRecordsTimers(imglist[index].campaignVisitorId);
    setimg(imglist[index]);
  }
}

// visitorRecords.set("behavior", "")//8.广告后行为 - 访客点击广告后的行为（例如：继续浏览、离开网站）
// visitorRecords.set("displayTime", 0)//6.广告展示时间 - 广告展示的具体时间
// visitorRecords.set("id", "")
// visitorRecords.set("isClick", false)//	7.广告点击情况 - 是否点击广告（是/否）
// visitorRecords.set("outUrl", "")//	5.跳出页面URL - 访客跳出的页面URL
// visitorRecords.set("stayTime", 0)//4.页面停留时间 - 访客在每个页面的停留时间(单位:秒)
let visitorRecords = new Map();
async function visitorRecordsTimers(id: string) {
  let visitorRecord = {
    behavior: "leave",
    displayTime: 0,
    id: id,
    isClick: false,
    outUrl: "",
    stayTime: 0,
  };

  visitorRecords.set(id, visitorRecord);
  calPageStayTime(id);
}

//页面停留时间
async function calPageStayTime(id: string) {
  if (!visitorRecords.has(id)) return;
  let obj = visitorRecords.get(id);
  let stopTime = new Date().getTime();

  document.addEventListener("visibilitychange", function () {
    obj = visitorRecords.get(id);
    if (!document.hidden) {
      stopTime = new Date().getTime();
      if (obj.isClick) {
        obj.behavior = "continue";
      }
    } else if (document.hidden) {
      obj.stayTime += (new Date().getTime() - stopTime) / 1000;
    }
    visitorRecords.set(id, obj);
  });
  window.addEventListener("beforeunload", function () {
    obj.stayTime += (new Date().getTime() - stopTime) / 1000;
    visitorRecords.set(id, obj);
  });
}

//观察广告可见性
async function adObserver(element: Element, id: string) {
  if (!visitorRecords.has(id)) return;
  let obj = visitorRecords.get(id);
  let displayTime: number;
  var observer = new IntersectionObserver((entries) => {
    obj = visitorRecords.get(id);
    if (entries[0].intersectionRatio <= 0) {
      if (displayTime) {
        obj.displayTime += (new Date().getTime() - displayTime) / 1000;
        console.log(`${obj.id} 不可见，当前展示时间 ${obj.displayTime}`);
        displayTime = 0;
      }
    } else {
      displayTime = new Date().getTime();
      console.log(`${obj.id} 可见，当前展示时间 ${obj.displayTime}`);
    }
    visitorRecords.set(id, obj);
  });
  observer.observe(element);
  window.addEventListener("beforeunload", function () {
    if (displayTime !== 0) {
      obj.displayTime += (new Date().getTime() - displayTime) / 1000;
      visitorRecords.set(id, obj);
    }
  });
}

function setimg(item: any) {
  //根据对应尺寸创建广告
  let obElement;
  switch (item.bannerImgUrl.imgId) {
    case 1: //728*90
      obElement = createHead(item); //创建顶部广告
      break;
    case 2: //160*600
      obElement = Stickycontent(item); //创建侧边160*600广告
      break;
    case 3: //300*600
      obElement = createSidebar300x600(item); //创建侧边300*600广告
      break;
    case 4: //728*80
      obElement = createStickyFoot(item);
      break;
    case 5:
      obElement = createHead(item); //创建顶部广告
      break;
    case 6:
      obElement = createHead(item); //创建顶部广告
      break;
    case 7:
      obElement = createHead(item); //创建顶部广告
      break;
    case 8:
      obElement = createStickyFoot(item);
      break;
    default:
      break;
  }

  if (obElement instanceof Element) {
    adObserver(obElement, item.campaignVisitorId);
  }
}

//获取尺寸
async function getimglist() {
  let url = `${JEECG_BOOT_NEW_URL}/adx/campaign/display`;
  onecode = createmd5(WEB_KET + web_code);
  codemd5 = createmd5(onecode + getCode());
  let userInfo = await getUserInfo();
  let data = { pubWebsiteCode: WEB_KET, url: WEB_URL, ...userInfo };
  console.log("data", data);
  await fetch(url, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json;",
      xcookie: codemd5,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      imglist = data.data || [];
      console.log(imglist);
    })
    .catch((err) => {
      console.error(err);
    });
}

window.headdatatagbtn = function headdatatagbtn(
  hiddenid: string,
  showid: string,
  showtype = "block"
) {
  const hiddenElement = document.getElementById(hiddenid);
  const showElement = document.getElementById(showid);
  if (hiddenElement) {
    hiddenElement.style.display = "none";
  }
  if (showElement) {
    showElement.style.display = showtype;
  }
};

window.closead = function closead(eleid: string) {
  console.log("eleid", eleid);
  let element;
  if (document.querySelector(`#${eleid}`)) {
    element = document.querySelector(`#${eleid}`);
  } else if (document.querySelector(`.${eleid}`)) {
    element = document.querySelector(`.${eleid}`);
  }
  if (element) {
    (element as HTMLElement).style.display = "none";
  }
};

window.clickad = async function clickad(item: any) {
  let id = item.campaignVisitorId;
  if (visitorRecords.has(id)) {
    let obj = visitorRecords.get(id);
    obj.isClick = true;
    obj.outUrl = item.url;
    visitorRecords.set(id, obj);
  }
  let url = `${JEECG_BOOT_NEW_URL}/adx/visitor/update`;
  let data = { id, isClick: true };
  fetch(url, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      xcookie: codemd5,
    },
  })
    .then((response) => response.text())
    .catch((err) => {
      console.error(err);
    });
  window.open(item.url);
};

function Stickycontent(item: any) {
  let img160x600 = new Image();
  img160x600.src = item.bannerImgUrl.url;
  let ad = document.createElement("div");
  let Stickyad = document.createElement("div");
  Stickyad.id = "data-ad-stickyad160";
  Stickyad.className = "ad-side-left";
  ad.className = "ad-stickyad160";
  ad.innerHTML = `
      <div class='ad-imgbox'>
        <div class='ad-data-di' id="data-ad-side">
          <img onclick="clickad({'url':'${item.url}','campaignId':'${item.campaignId}','campaignVisitorId':'${item.campaignVisitorId}'})" src="${item.bannerImgUrl.url}" />
          <div class='data-utils'>
            <div class='data-icon data-svg-icon'>
              <div class='data-hint' style="font-size: 12px!important;zoom: 0.9!important;">本广告服��由ADX提供</div>
              ${svghint}
            </div>
            <div class='data-icon' onclick="headdatatagbtn('data-ad-side','data-ad-side-hint')">
              ${svgcloer}
            </div>
          </div>
        </div>
        <div id="data-ad-side-hint" style="height: 600px !important;width:160px !important; position: relative !important;text-align: center !important;display: none !important;background:#fff;border: 1px solid #ccc;">
          <svg onclick="headdatatagbtn('data-ad-side-hint','data-ad-side')" t="1696660425410" style="position: absolute !important;top: 0 !important;left: 0 !important;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7003" width="16" height="16"><path d="M939.880137 487.72513l-782.215258 0 358.804922-318.92975c12.389168-11.011798 13.505595-29.980825 2.492774-42.369993-11.011798-12.386098-29.977755-13.505595-42.367947-2.492774L64.602344 490.13911c-6.407943 5.693676-10.073426 13.858636-10.073426 22.430872s3.665483 16.737196 10.073426 22.430872l411.993309 366.204449c5.717212 5.083785 12.83533 7.580652 19.925818 7.580652 8.274454 0 16.514115-3.403516 22.442128-10.07445 11.011798-12.387122 9.896394-31.357172-2.492774-42.367947L169.687704 548.100196 939.880137 548.100196c16.57449 0 30.011524-13.613042 30.011524-30.187533S956.454628 487.72513 939.880137 487.72513z" fill="#8a8a8a" p-id="7004"></path></svg>
          <div style="font-size:17px !important;padding: 0 17px !important;">ADX 提供的广告</div>
          <div onclick="closead('data-ad-stickyad160')" style="font-size:12px !important; background-color: #4285f5;color: white;width: 90%;cursor: pointer;border-radius: 2px;box-shadow: 0 0 2px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.26) !important;margin: 10px auto;padding:5px 0;">停止显示此广告</div>
          <div style="font-size:12px !important; background-color: #ffffff;color: #9e9ea6;width: 90%;cursor: pointer;border-radius: 2px;box-shadow: 0 0 2px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.26) !important;margin: 10px auto;padding:5px 0;">为什么显示此广告</div>
        </div>
        
      </div>
    `;
  Stickyad.appendChild(ad);
  img160x600.onload = () => {
    document.body.appendChild(Stickyad);
  };
  return Stickyad;
}

async function ViewPage() {
  //分析页面结构获取grid,flex
  var bodyChildren = elements;
  bodyChildrengrid = [];
  bodyChildrenFlex = [];
  let windowWidth = document.documentElement.clientWidth;
  if (!bodyChildren) return;
  for (var i = 0; i < bodyChildren.length; i++) {
    var child = bodyChildren[i];
    var computedStyle = window.getComputedStyle(child);
    var position = computedStyle.getPropertyValue("position");
    try {
      if (
        position !== "fixed" &&
        position !== "absolute" &&
        child.tagName !== "SCRIPT"
      ) {
        var display = computedStyle.getPropertyValue("display");
        var maxWidth = computedStyle.getPropertyValue("max-width");
        if (maxWidth && maxWidth != "100%" && maxWidth >= "1200px") {
          let maxWidthStyle = window.getComputedStyle(child);
          let width = maxWidthStyle.getPropertyValue("width");
          if (parseFloat(width) >= 1140 && parseFloat(width) < windowWidth) {
            let childheight = computedStyle.getPropertyValue("height");
            if ((windowWidth - parseFloat(width)) / 2 >= 160) {
              if (parseFloat(childheight) >= 300) {
                bodyChildrenmaxWidth160.push(child);
              }
            }
          }
        }
        if (display == "grid") {
          let childGrid = child.children[0] || child;
          let childGridlength = child.children.length;
          let childGridStyle = window.getComputedStyle(childGrid);
          let width = computedStyle.getPropertyValue("width");
          let childGridwidth = childGridStyle.getPropertyValue("width");
          let index = Math.floor(
            parseFloat(width) / parseFloat(childGridwidth)
          );
          if (
            parseFloat(width) >= screenWidth / 2 &&
            childGridlength / index >= 2
          ) {
            let col = `1/${index + 1}`;
            bodyChildrengrid.push({ ele: child, gridColumn: col });
          }
        } else if (
          display == "flex" &&
          Boolean(child) &&
          child.children.length >= 3
        ) {
          let childGrid = child.children[0] || child;
          let childGridStyle = window.getComputedStyle(childGrid);
          let width = computedStyle.getPropertyValue("width");
          let childGridwidth = childGridStyle.getPropertyValue("width");
          if (parseFloat(childGridwidth) == parseFloat(width)) {
            bodyChildrenFlex.push(child);
          }
        }
      }
    } catch (error) {
      console.error(error);
      continue;
    }
  }
}

//创建侧边300*600广告
function createSidebar300x600(item: any) {
  let img300x600 = new Image();
  img300x600.src = item.bannerImgUrl.url;
  let side = document.createElement("div");
  side.className = "ad-side data-ad-side300";
  side.innerHTML = `
      <div class='ad-imgbox'>
        <div class='ad-data-di' id="data-ad-side300-inside">
          <img onclick="clickad({'url':'${item.url}','campaignId':'${item.campaignId}','campaignVisitorId':'${item.campaignVisitorId}'})" src="${item.bannerImgUrl.url}" />
          <div class='data-utils'>
            <div class='data-icon data-svg-icon'>
              <div class='data-hint'>本广告服务由ADX提供</div>
              ${svghint}
            </div>
            <div class='data-icon' onclick="headdatatagbtn('data-ad-side300-inside','data-ad-side300-hint')">
              ${svgcloer}
            </div>
          </div>
        </div>
        <div id="data-ad-side300-hint" style="height: 600px !important;width:300px !important; position: relative !important;text-align: center !important;display: none !important;border:1px solid #ccc;">
          <svg onclick="headdatatagbtn('data-ad-side300-hint','data-ad-side300')" t="1696660425410" style="position: absolute !important;top: 0 !important;left: 0 !important;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7003" width="16" height="16"><path d="M939.880137 487.72513l-782.215258 0 358.804922-318.92975c12.389168-11.011798 13.505595-29.980825 2.492774-42.369993-11.011798-12.386098-29.977755-13.505595-42.367947-2.492774L64.602344 490.13911c-6.407943 5.693676-10.073426 13.858636-10.073426 22.430872s3.665483 16.737196 10.073426 22.430872l411.993309 366.204449c5.717212 5.083785 12.83533 7.580652 19.925818 7.580652 8.274454 0 16.514115-3.403516 22.442128-10.07445 11.011798-12.387122 9.896394-31.357172-2.492774-42.367947L169.687704 548.100196 939.880137 548.100196c16.57449 0 30.011524-13.613042 30.011524-30.187533S956.454628 487.72513 939.880137 487.72513z" fill="#8a8a8a" p-id="7004"></path></svg>
          <div style="font-size:17px !important;padding: 0 17px !important;">ADX 提供的广告</div>
          <div onclick="closead('data-ad-side300')" style="font-size:12px !important; background-color: #4285f5;color: white;width: 90%;cursor: pointer;border-radius: 2px;box-shadow: 0 0 2px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.26) !important;margin: 10px auto;padding:5px 0;">停止显示此广告</div>
          <div style="font-size:12px !important; background-color: #ffffff;color: #9e9ea6;width: 90%;cursor: pointer;border-radius: 2px;box-shadow: 0 0 2px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.26) !important;margin: 10px auto;padding:5px 0;">为什么显示此广告</div>
        </div>
      </div>
      `;
  img300x600.onload = () => {
    document.body.appendChild(side);
  };
  return side;
}

//创建头部广告
function createHead(item: any) {
  let imghead = new Image();
  imghead.src = item.bannerImgUrl.url;
  let header = document.createElement("div");
  const imgId = item.bannerImgUrl.imgId;
  header.className = `ad-heder data-ad-heder728-${imgId}`;
  header.innerHTML = `
      <div class='ad-imgbox'>
        <div class='ad-data-di' style="display:flex;" id="data-ad-heder-${imgId}">
          <img onclick="clickad({'url':'${item.url}','campaignId':'${item.campaignId}','campaignVisitorId':'${item.campaignVisitorId}'})" src="${item.bannerImgUrl.url}" />
          <div class='data-utils'>
            <div class='data-icon data-svg-icon'>
              <div class='data-hint'>本广告服务由ADX提供</div>
              ${svghint}
            </div>
            <div class='data-icon' onclick="headdatatagbtn('data-ad-heder-${imgId}','data-ad-heder-hint-${imgId}')">
              ${svgcloer}
            </div>
          </div>
        </div>
        <div id="data-ad-heder-hint-${imgId}" style="padding: 10px 0 0;height: 90px; width:728px; position: relative !important;text-align: center !important;display: none !important;border:1px solid #ccc;">
          <svg onclick="headdatatagbtn('data-ad-heder-hint-${imgId}','data-ad-heder-${imgId}','flex')" t="1696660425410" style="position: absolute !important;top: 0 !important;left: 0 !important;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7003" width="16" height="16"><path d="M939.880137 487.72513l-782.215258 0 358.804922-318.92975c12.389168-11.011798 13.505595-29.980825 2.492774-42.369993-11.011798-12.386098-29.977755-13.505595-42.367947-2.492774L64.602344 490.13911c-6.407943 5.693676-10.073426 13.858636-10.073426 22.430872s3.665483 16.737196 10.073426 22.430872l411.993309 366.204449c5.717212 5.083785 12.83533 7.580652 19.925818 7.580652 8.274454 0 16.514115-3.403516 22.442128-10.07445 11.011798-12.387122 9.896394-31.357172-2.492774-42.367947L169.687704 548.100196 939.880137 548.100196c16.57449 0 30.011524-13.613042 30.011524-30.187533S956.454628 487.72513 939.880137 487.72513z" fill="#8a8a8a" p-id="7004"></path></svg>
          <div style="font-size:17px !important;padding: 0 17px !important;">ADX 提供的广告</div>
          <div style="display: flex !important;">
            <div onclick="closead('data-ad-heder728-${imgId}')" style="font-size:12px !important; background-color: #4285f5;color: white;width: 45%;cursor: pointer;border-radius: 2px;box-shadow: 0 0 2px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.26) !important;margin: 10px auto;padding:5px 0;">停止显示此广告</div>
            <div style="font-size:12px !important; background-color: #ffffff;color: #9e9ea6;width: 45%;cursor: pointer;border-radius: 2px;box-shadow: 0 0 2px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.26) !important;margin: 10px auto;padding:5px 0;">为什么显示此广告</div>
          </div>
        </div>
      </div>
      <style>
        @media (max-width: 768px) { /* 768px 是一个常见的移动设备断点 */
          #data-ad-heder-hint-${imgId} {
            width: 100vw !important;
          }
        }
      </style>
    `;
  var first = document.body.firstChild;
  imghead.onload = () => {
    document.body.insertBefore(header, first);
  };
  return header;
}

//创建粘性底部
function createStickyFoot(item: any) {
  let imgStickyFoot = new Image();
  imgStickyFoot.src = item.bannerImgUrl.url;
  var stickyFootCon = document.createElement("div");
  stickyFootCon.className = "stickyFootCon";
  stickyFootCon.style.position = "fixed";
  stickyFootCon.style.height = "94px";
  stickyFootCon.style.bottom = "0";
  stickyFootCon.style.zIndex = "99999";
  var stickyFoot = document.createElement("div");
  var tagBtn = document.createElement("div");
  stickyFoot.className = "sticky-desktop";
  tagBtn.className = "data-tag-btn";
  tagBtn.id = "data-tag-btn";
  tagBtn.innerHTML = `
    <svg onclick='toggleArrow(this)' style="cursor: pointer; margin: 0px !important; position: absolute !important; bottom: 0px !important; left: 0% !important; display: block !important; width: 80px !important; height: 30px !important; transform: none !important; pointer-events: initial !important;">
      <defs>
        <filter id="dropShadowTop" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feComponentTransfer in="SourceAlpha" result="TransferredAlpha">
            <feFuncR type="discrete" tableValues="0.5"></feFuncR>
            <feFuncG type="discrete" tableValues="0.5"></feFuncG>
            <feFuncB type="discrete" tableValues="0.5"></feFuncB>
          </feComponentTransfer>
          <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur>
          <feOffset dx="0" dy="0" result="offsetblur"></feOffset>
          <feMerge>
            <feMergeNode></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      <path d="M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter: url(&quot;#dropShadowTop&quot;);"></path>
      <rect x="0" y="25" width="80" height="5" style="fill: rgb(250, 250, 250);"></rect>
      <g class="arrow down" stroke="#616161" stroke-width="2px" stroke-linecap="square">
        <line x1="22" y1="12" x2="28" y2="18"></line>
        <line x1="28" y1="18" x2="34" y2="12"></line>
      </g>
    </svg>
  `;

  window.toggleArrow = function toggleArrow(svgElement: SVGElement) {
    const arrow: any = svgElement.querySelector(".arrow");
    if (arrow.classList.contains("down")) {
      arrow.classList.remove("down");
      arrow.innerHTML =
        '<line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"></line>';
    } else {
      arrow.classList.add("down");
      arrow.innerHTML =
        '<line x1="22" y1="12" x2="28" y2="18"></line><line x1="28" y1="18" x2="34" y2="12"></line>';
    }
    window.datatagbtn("#data-tag-btn", ".sticky-desktop");
  };

  stickyFoot.innerHTML = `
      <div class='data-contetn' id='data-contetn-id'>
        <div class='contetn'>
          <div class='data-contetn-img' style="display: flex !important;">
            <img class='data-img' onclick="clickad({'url':'${item.url}','campaignId':'${item.campaignId}','campaignVisitorId':'${item.campaignVisitorId}'})" src="${item.bannerImgUrl.url}" />
            <div class='data-utils'>
              <div class='data-icon data-svg-icon'>
                <div class='data-hint'>本广告服务由ADX提供</div>
                ${svghint}
              </div>
              <div class='data-icon' onclick='headdatatagbtn("data-contetn-id","sticky-desktop-hint")'>
                ${svgcloer}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sticky-desktop-hint" style="position: relative !important;text-align: center !important;display: none !important;">
          <svg onclick="headdatatagbtn('sticky-desktop-hint','data-contetn-id')" t="1696660425410" style="position: absolute !important;top: 8px !important;left: 8px !important;cursor: pointer;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7003" width="16" height="16"><path d="M939.880137 487.72513l-782.215258 0 358.804922-318.92975c12.389168-11.011798 13.505595-29.980825 2.492774-42.369993-11.011798-12.386098-29.977755-13.505595-42.367947-2.492774L64.602344 490.13911c-6.407943 5.693676-10.073426 13.858636-10.073426 22.430872s3.665483 16.737196 10.073426 22.430872l411.993309 366.204449c5.717212 5.083785 12.83533 7.580652 19.925818 7.580652 8.274454 0 16.514115-3.403516 22.442128-10.07445 11.011798-12.387122 9.896394-31.357172-2.492774-42.367947L169.687704 548.100196 939.880137 548.100196c16.57449 0 30.011524-13.613042 30.011524-30.187533S956.454628 487.72513 939.880137 487.72513z" fill="#8a8a8a" p-id="7004"></path></svg>
          <div style="font-size:17px !important;padding: 0 17px !important;">ADX 提供的广告</div>
          <div onclick="closead('stickyFootCon')" style="font-size:12px !important; background-color: #4285f5;color: white;width: 90%;cursor: pointer;border-radius: 2px;box-shadow: 0 0 2px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.26) !important;margin: 10px auto;margin-top: 0px;padding:5px 0;">停止显示此广告</div>
          <div style="font-size:12px !important; background-color: #ffffff;color: #9e9ea6;width: 90%;cursor: pointer;border-radius: 2px;box-shadow: 0 0 2px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.26) !important;margin: 10px auto;margin-top: 6px;padding:5px 0;">为什么显示此广告</div>
      </div>
    `;
  imgStickyFoot.onload = () => {
    stickyFootCon.appendChild(tagBtn);
    stickyFootCon.appendChild(stickyFoot);
    document.body.appendChild(stickyFootCon);
  };
  return stickyFoot;
}

window.datatagbtn = function datatagbtn(id: string, classname: string) {
  let elm: any = document.querySelector(id);
  const stickyFootCon: any = document.querySelector("div.stickyFootCon");
  const element: any = document.querySelector(classname);
  if (elm.className.indexOf("close") > -1) {
    elm.className = elm.className.replace("close", "");
    if (stickyFootCon) {
      stickyFootCon.style.height = "94px";
    }
    if (element) {
      element.style.display = "block";
    }
  } else {
    if (stickyFootCon) {
      stickyFootCon.style.height = "94px";
    }
    if (element) {
      element.style.display = "block";
    }
    elm.className += " close";
  }
};

async function getAllele() {
  elements = Array.from(document.body.querySelectorAll("*"));
}

//访问时间 - 记录访客访问网站的时间
async function getCurTime() {
  function pad(timeEl: number, total = 2, str = "0") {
    return timeEl.toString().padStart(total, str);
  }

  let timer = new Date();

  const year = timer.getFullYear();
  const month = timer.getMonth() + 1;
  const day = timer.getDate();
  const hour = timer.getHours();
  const minute = timer.getMinutes();
  const second = timer.getSeconds();

  return `${pad(year, 4)}-${pad(month)}-${pad(day)} ${pad(hour)}:${pad(
    minute
  )}:${pad(second)}`;
}

//访问页面URL
async function getCurUrl() {
  let url = window.location.href;
  return url;
}

//浏览器信息
async function getBrowserInfo() {
  const browserList = [
    {
      bs_name: "火狐",
      bs_tag: "firefox",
    },
    {
      bs_name: "edge",
      bs_tag: "edg",
    },
    {
      bs_name: "opera",
      bs_tag: "opr",
    },
    {
      bs_name: "世界之窗",
      bs_tag: "theworld",
    },
    {
      bs_name: "遨游",
      bs_tag: "maxthon",
    },
    {
      bs_name: "QQ",
      bs_tag: "qqbrowser",
    },
    {
      bs_name: "360",
      bs_tag: "360",
    },
    {
      bs_name: "sougou",
      bs_tag: "metasr",
    },
    {
      bs_name: "uc",
      bs_tag: "ubrowse",
    },
    {
      bs_name: "lbb",
      bs_tag: "lbbrowser",
    },
    {
      bs_name: "wechat",
      bs_tag: "micromessenger",
    },
    {
      bs_name: "xiaomi",
      bs_tag: "miuibrowser",
    },
    {
      bs_name: "baidu",
      bs_tag: "baidu",
    },
    {
      bs_name: "2345",
      bs_tag: "2345explorer",
    },
    {
      bs_name: "IE",
      bs_tag: "msie",
    },
    {
      bs_name: "IE11",
      bs_tag: "rv:11.0",
    },
  ];
  const userAgentData = (navigator as any).userAgentData || { brands: [] };
  const userAgent: any = navigator.userAgent.toLowerCase();

  const getBsVersion: any = (tag: string) => {
    const browser = userAgent
      .split(" ")
      .find((item: any) => item.indexOf(tag) > -1)
      .split("/");
    return browser[1] || getBsVersion("chrome");
  };

  const isMaxthon = () => {
    return window.maxthon;
  };

  const is360 = () => {
    const result = false;
    for (var key in navigator.plugins) {
      if (navigator.plugins[key].filename == "internal-nacl-plugin") {
        return !result;
      }
    }
    return result;
  };

  const getBsInfo = (list = []) => {
    if (isMaxthon()) {
      return {
        bs_name: "遨游",
        bs_tag: "maxthon",
        bs_version: getBsVersion("chrome"),
      };
    }
    if (
      userAgentData.brands.some((item: any) => item.brand === "Google Chrome")
    ) {
      return {
        bs_name: "chrome",
        bs_tag: "chrome",
        bs_version: getBsVersion("chrome"),
      };
    }
    if (
      userAgent.indexOf("safari") > -1 &&
      userAgent.indexOf("chrome") === -1
    ) {
      return {
        bs_name: "safari",
        bs_tag: "safari",
        bs_version: getBsVersion("safari"),
      };
    }
    const isBrowser = browserList
      .concat(list)
      .find((item) => userAgent.indexOf(item.bs_tag) > -1);
    if (isBrowser) {
      return {
        bs_name: isBrowser.bs_name,
        bs_tag: isBrowser.bs_tag,
        bs_version: getBsVersion(isBrowser.bs_tag),
      };
    } else {
      if (is360()) {
        return {
          bs_name: "360",
          bs_tag: "360",
          bs_version: getBsVersion("chrome"),
        };
      }
      if (userAgent.indexOf("chrome") > -1) {
        return {
          bs_name: "chrome",
          bs_tag: "chrome",
          bs_version: getBsVersion("chrome"),
        };
      }
      return {
        bs_name: "未知",
        bs_tag: "other",
        bs_version: "",
      };
    }
  };
  return getBsInfo();
}

//获取设备类型
async function getDeviceType() {
  function isMobile() {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  }
  return isMobile() ? "APP" : "PC";
}

//操作系统
async function getOS() {
  var u = navigator.userAgent;
  if (!!u.match(/compatible/i) || u.match(/Windows/i)) {
    return "windows";
  } else if (!!u.match(/Macintosh/i) || u.match(/MacIntel/i)) {
    return "macOS";
  } else if (!!u.match(/iphone/i) || u.match(/Ipad/i)) {
    return "ios";
  } else if (!!u.match(/android/i)) {
    return "android";
  } else {
    return "other";
  }
}

async function getUserInfo() {
  var userInfo = {
    accessTime: await getCurTime(),
    accessUrl: await getCurUrl(),
    browser: (await getBrowserInfo()).bs_name,
    device: await getDeviceType(),
    os: await getOS(),
    tokenSum: (await localStorage.getItem("ads.balance")) || "",
    walletAddress: (await localStorage.getItem("ads.walletAddress")) || "",
    walletName: (await localStorage.getItem("ads.walletName")) || "",
    chainId: (await localStorage.getItem("ads.chainId")) || "",
  };
  console.log("userInfo", userInfo);

  return userInfo;
}

async function Main() {
  try {
    await getimglist();
    await getAllele();
    await ViewPage();
    createAdimg();
    createButton();
    const { modal } = await useWalletKit();
    await updateButtonText(modal);
  } catch (error) {
    console.log("error", error);
  }
}

window.addEventListener("load", function () {
  Main();
});

window.addEventListener("unload", function () {
  try {
    let url = `${JEECG_BOOT_NEW_URL}/adx/visitor/updateBatch`;
    onecode = createmd5(WEB_KET + web_code);
    codemd5 = createmd5(onecode + getCode());
    let userInfoList: any = [];
    visitorRecords.forEach(function (value, _) {
      let item = value;
      item.tokenSum = localStorage.getItem("ads.balance") || "";
      item.walletAddress = localStorage.getItem("ads.walletAddress") || "";
      item.walletName = localStorage.getItem("ads.walletName") || "";
      item.chainId = localStorage.getItem("ads.chainId") || "";
      if (value.displayTime !== 0 && value.displayTime) {
        userInfoList.push(item);
      }
    });
    localStorage.setItem("infoList", userInfoList);
    fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(userInfoList),
      headers: {
        "Content-Type": "application/json;",
        xcookie: codemd5,
      },
      keepalive: true,
    });
  } catch (err) {
    localStorage.setItem("err", JSON.stringify(err));
  }
});

import"./tailwind-NE021wVL.js";import{g as i}from"./delay-g6vF19wW.js";import{i as k}from"./insert-vWB_d1l7.js";import{c as y,h as B}from"./heart-WHLtlnmW.js";import{g as p}from"./storage-eNv634Ip.js";import{g as m}from"./getPbImageURL-99Z79ldm.js";import{s as L}from"./setDocumentTitle-_OwlDZqT.js";import{t as $}from"./timeAgo-WbyvHha8.js";import{r as w}from"./removeChild-y_437bHv.js";import{g as h}from"./index-35H_NU9g.js";import{p as c}from"./pocketbase-UOLpUAtS.js";const P="data:image/svg+xml,%3csvg%20width='16'%20height='17'%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%3e%3cg%3e%3ctitle%3eLayer%201%3c/title%3e%3cline%20stroke-linecap='undefined'%20stroke-linejoin='undefined'%20id='svg_4'%20y2='301'%20x2='721'%20y1='301'%20x1='721'%20opacity='NaN'%20stroke='red'%20fill='none'/%3e%3cline%20stroke-linecap='undefined'%20stroke-linejoin='undefined'%20id='svg_5'%20y2='282'%20x2='718'%20y1='282'%20x1='718'%20opacity='NaN'%20stroke='red'%20fill='none'/%3e%3cline%20stroke-linecap='undefined'%20stroke-linejoin='undefined'%20id='svg_6'%20y2='466'%20x2='926'%20y1='466'%20x1='926'%20opacity='NaN'%20stroke='red'%20fill='none'/%3e%3crect%20id='svg_35'%20height='0.84699'%20width='10.98361'%20y='4.6694'%20x='2.56284'%20stroke='red'%20fill='none'/%3e%3crect%20id='svg_36'%20height='0.95628'%20width='10.79235'%20y='6.11749'%20x='2.64481'%20stroke='red'%20fill='none'/%3e%3crect%20id='svg_37'%20height='0.87432'%20width='9.23497'%20y='7.64754'%20x='3.2459'%20stroke='red'%20fill='none'/%3e%3crect%20id='svg_38'%20height='0.71038'%20width='7.65027'%20y='9.06831'%20x='4.14754'%20stroke='red'%20fill='none'/%3e%3crect%20id='svg_39'%20height='0.38251'%20width='4.94536'%20y='10.24317'%20x='5.51366'%20stroke='red'%20fill='none'/%3e%3crect%20id='svg_40'%20height='0.30055'%20width='3.06011'%20y='11.14481'%20x='6.33333'%20stroke='red'%20fill='none'/%3e%3crect%20id='svg_41'%20height='0.32787'%20width='1.42077'%20y='12.01913'%20x='7.15301'%20stroke='red'%20fill='none'/%3e%3crect%20id='svg_42'%20height='0.4918'%20width='2.97814'%20y='3.98634'%20x='3.38251'%20stroke='red'%20fill='none'/%3e%3crect%20id='svg_43'%20height='0.60109'%20width='2.97814'%20y='4.06831'%20x='9.50273'%20stroke='red'%20fill='none'/%3e%3cpath%20id='svg_1'%20fill='black'%20d='m8.06659,12.6296l-0.06667,0.0667l-0.07333,-0.0667c-3.16667,-2.87333%20-5.26,-4.77333%20-5.26,-6.69999c0,-1.33334%201,-2.33334%202.33333,-2.33334c1.02666,0%202.02666,0.66667%202.38,1.57334l1.24,0c0.35333,-0.90667%201.35333,-1.57334%202.37998,-1.57334c1.3334,0%202.3334,1%202.3334,2.33334c0,1.92666%20-2.0934,3.82666%20-5.26671,6.69999zm2.93331,-10.36666c-1.15998,0%20-2.27332,0.54%20-2.99998,1.38667c-0.72667,-0.84667%20-1.84,-1.38667%20-3,-1.38667c-2.05333,0%20-3.66667,1.60667%20-3.66667,3.66667c0,2.51333%202.26667,4.57329%205.7,7.68669l0.96667,0.88l0.96666,-0.88c3.43332,-3.1134%205.70002,-5.17336%205.70002,-7.68669c0,-2.06%20-1.6133,-3.66667%20-3.6667,-3.66667z'/%3e%3c/g%3e%3c/svg%3e";L("EUID / 상품정보");const _=i(".exchangeBoard-back");_.addEventListener("click",()=>history.back());const S=i(".exchangeBoard-more");function C(){i(".exchangeBoard-sidebar ul").classList.toggle("translate-x-full")}S.addEventListener("click",C);async function I(){const e=window.location.hash.slice(1),t=await c.collection("products").getOne(e),s=i(".delete"),a=i(".update"),o=i(".declaration"),r=await p("userId");t.userPost===r?(s.classList.remove("hidden"),a.classList.remove("hidden"),o.classList.add("hidden")):(s.classList.add("hidden"),a.classList.add("hidden"),o.classList.remove("hidden"));async function d(){if(confirm("정말 삭제하시겠습니까?")==!0)await c.collection("products").delete(e),window.location.href="/src/pages/exchange/";else return!1}s.addEventListener("click",d),a.addEventListener("click",()=>window.location.href=`/src/pages/exchangeEdit/index.html#${t.id}`)}async function b(){const e=window.location.hash.slice(1);w(".exchangeBoard-img"),w(".exchangeBoard-another");const t=await c.collection("products").getOne(e,{expand:"userPost"}),s=await c.collection("products").getList(1,4,{sort:"@random"}),a=await c.collection("users").getFirstListItem(`id="${t.userPost}"`);E(t,a),j(s)}async function E(e,t){const s=`
      <img
        src="${m(e,"images")}"
        class="w-full h-full object-cover"
        alt="${e.alt}"
      />
    </div>

    <div class="flex py-[0.625rem] px-4 justify-between">
      <div class="flex">
        <div
        class="exchangeBoard-profile-wrapper w-[2.5rem] h-[2.5rem] relative bg-Contents-contentSecondary rounded-7xl"
        >
          <img
            src="${m(t,"avatar")}"
            class="exchangeBoard-profile overflow-hidden absolute top-0 left-0 w-full h-full object-cover rounded-7xl"
            alt="프로필"
          />
        </div>
        <div class="flex-col ml-[0.375rem]">
        <span
        class="exchangeBoard-user block text-base font-semibold leading-normal"
            >${e.expand.userPost.username}</span
          >
          <span class="exchangeBoard-user-location text-sm font-normal"
          >${e.expand.userPost.locationFirst}</span
          >
          </div>
          </div>
          
          <div>
          <div>
          <span
          class="exchangeBoard-degree text-base text-secondary font-semibold leading-normal"
          >${e.expand.userPost.mannerTemp}<sup>&deg;</sup>C</span
          >
          <span class="exchangeBoard-degree-state">😀</span>
          </div>
          <span class="block text-right text-Contents-contentSecondary text-sm"
          >매너온도</span
          >
          </div>
          </div>
          
          <div class="p-3 mb-6">
          <h2 class="text-lg font-semibold mb-1">${e.title}</h2>
          <div class="block text-sm text-Contents-contentSecondary mb-3">
          <span class="exchangeBoard-thing">${e.type}</span>
          <span class="exchangeBoard-time">ㆍ${$(e.created)}</span>
        </div>
        <div class="exchangeBoard-textBox-wrapper">
        <span class="block text-base">
        ${e.contents}
        </span>
        </div>
        </div>
        
        <div class="flex justify-between px-3 mb-9">
        <div class="flex items-center">
        <button type="button" class="exchangeBoard-heart">
        <img
        src="/public/images/heart.svg"
        class="w-[1.25rem] h-[1.25rem]"
        alt="좋아요"
        />
        </button>
        <div
        class="flex-col border-l border-Contents-contentSecondary ml-[0.8125rem] pl-[0.8125rem]"
        >
        <span class="exchangeBoard-price block text-base font-semibold"
        >${y(e.price)}원</span
        >
        <span
        class="exchangeBoard-price-link block text-sm text-secondary font-semibold"
        >가격 제안하기</span
        >
        </div>
        </div>
        
        <div>
        <a
        href="${`/src/pages/chat/index.html#${e.id}`}"
        class="exchangeBoard-chat-link w-[4.8125rem] h-[2.3125rem] bg-secondary px-[0.875rem] py-2 rounded-2xl text-background text-base font-semibold"
        >채팅하기</a
        >
        </div>
  `;k(".exchangeBoard-img",s)}function j(e){e.items.forEach(t=>{const s=`
    <figure
    class="exchangeBoard-another-item min-w-[7.5rem] w-[43.125%] pb-[20%] max-h-20 bg-gray-200 rounded-2xl mx-auto mb-20 sm:mb-32"
  >
    <img
      src="${m(t,"images")}"
      class="w-full h-full object-cover rounded-2xl"
      alt="${t.alt}"
    />
    <figcaption class="text-sm block">
      <a href="${`/src/pages/exchangeBoard/index.html#${t.id}`}" target="_self">
        <p class="exchangeBoard-another-text block truncate">
          ${t.title}
        </p>
        <span class="exchangeBoard-another-price font-semibold"
        >${y(t.price)}원</span
        >
        </a>
    </figcaption>
  </figure>
    `;k(".exchangeBoard-another",s)})}const g=B,u=P;let n;async function N(e){n=e.target;const t=n.src,s=await p("userId"),a=await c.collection("likes").getFullList(),o=window.location.hash.slice(1),d=(await c.collection("products").getOne(o)).id,l=a.find(v=>v.product===d&&v.user===s);let f;l&&(f=l.id);const x={user:s,product:d};l?t.includes(g)?(await c.collection("likes").create(x),h.from(n,{scale:.6,duration:.2,onComplete:()=>{n.src=u,h.to(n,{scale:1,duration:.1})}})):(await c.collection("likes").delete(f),h.from(n,{scale:1.5,duration:.1,onComplete:()=>{n.src=g,h.to(n,{scale:1,duration:.2})}})):t.includes(g)&&(await c.collection("likes").create(x),h.from(n,{scale:.6,duration:.2,onComplete:()=>{n.src=u,h.to(n,{scale:1,duration:.1})}}))}async function F(e,t){n=i(".exchangeBoard-heart img");const s=await c.collection("likes").getFullList(),a=t.id;s.find(r=>r.product===a&&r.user===e)?n.src=u:n.src=g}async function O(e,t){const a=(await c.collection("chatbox").getFullList()).filter(l=>l.buyer===e),o=t.id,r=a.find(l=>l.item===o),d={buyer:`${e}`,item:`${o}`};(!a||!r)&&await c.collection("chatBox").create(d)}async function H(){await I(),b().then(async()=>{const e=i(".exchangeBoard-chat-link"),t=await p("userId"),s=window.location.hash.slice(1),a=await c.collection("products").getOne(s);F(t,a),i(".exchangeBoard-heart").addEventListener("click",N),e.addEventListener("click",O(t,a)),window.addEventListener("hashchange",b)})}H();

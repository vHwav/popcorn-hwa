import"./tailwind-75xaDfuL.js";import{g as a,a as l}from"./delay-g6vF19wW.js";import{i as g}from"./insert-vWB_d1l7.js";import{g as f,s as r,d as m}from"./storage-eNv634Ip.js";import{p}from"./pocketbase-UOLpUAtS.js";const L=a(".profileDetails-button-close"),u=l(".profileDetails-buttonWrap"),h=a(".profileDetails-jobList-box"),y=l(".profile-button-active");a(".profileDetails-container");const n=l(".profileDtails-agreement-container input"),o=a(".profileDetails-button-submit"),b=a(".profileDetails-checkAll"),v=a(".agree-modal"),D=a(".modal-close"),E=["프론트엔드","백엔드","리액트","풀스택","알고리즘","기초지식","UI디자인","UX디자인","UI/UX","데이터분석","통계분석","시각화"],j=await p.collection("users").getFullList(),k=await f("userId");j.find(e=>e.id===k);function A(){history.back()}L.addEventListener("click",A);function C(){this.nextElementSibling.classList.toggle("hidden")}y.forEach(e=>{e.addEventListener("click",C)});function x(e){Array.from(e.currentTarget.children).forEach(t=>{t.classList.toggle("profileDetails-button-valid"),t.firstElementChild.classList.toggle("hidden")}),B(e)}u.forEach(e=>{e.addEventListener("click",x)});async function B(e){const s=Array.from(e.currentTarget.children),t=Array.from(s[0].classList).includes("profileDetails-button-valid"),i=e.currentTarget.dataset.field;t&&i==="gender"&&r("genderPrivacy","true"),t&&i==="age"?r("agePrivacy","true"):i==="gender"&&!t?r("genderPrivacy","false"):i==="age"&&!t&&r("agePrivacy","false")}async function P(){const e=await f("genderPrivacy"),s=await f("agePrivacy"),t=Array.from(u[0].children),i=Array.from(u[1].children);e==="true"?(t[0].classList.add("profileDetails-button-valid"),t[0].firstElementChild.classList.remove("hidden"),t[1].classList.remove("profileDetails-button-valid"),t[1].firstElementChild.classList.add("hidden")):(t[0].classList.remove("profileDetails-button-valid"),t[0].firstElementChild.classList.add("hidden"),t[1].classList.add("profileDetails-button-valid"),t[1].firstElementChild.classList.remove("hidden")),s==="true"?(i[0].classList.add("profileDetails-button-valid"),i[0].firstElementChild.classList.remove("hidden"),i[1].classList.remove("profileDetails-button-valid"),i[1].firstElementChild.classList.add("hidden")):(i[0].classList.remove("profileDetails-button-valid"),i[0].firstElementChild.classList.add("hidden"),i[1].classList.add("profileDetails-button-valid"),i[1].firstElementChild.classList.remove("hidden"))}P();function S(){let e=0;n.forEach(s=>{s.checked&&e++}),e===4?o.classList.add("profileDetails-buttonAgree-valid"):o.classList.remove("profileDetails-buttonAgree-valid")}n.forEach(e=>{e.addEventListener("change",S)});function w(){b.checked?(n.forEach(e=>{e.checked=!0}),o.classList.add("profileDetails-buttonAgree-valid")):(n.forEach(e=>{e.checked=!1}),o.classList.remove("profileDetails-buttonAgree-valid"))}b.addEventListener("change",w);function V(e){const s=Array.from(o.classList),t=this.closest("form");s.includes("profileDetails-buttonAgree-valid")?(e.preventDefault(),v.showModal()):(t.addEventListener("submit",c=>{c.preventDefault()}),alert("필수항목에 동의 해주셔야 합니다"))}o.addEventListener("click",V);D.addEventListener("click",()=>{v.close()});function T(){E.forEach(e=>{const s=`
              <button
                class="job-category my-1 bg-Bluelight-200 text-base px-2 py-0.5 rounded-full"
                value= ${e}
              >
                ${e}
              </button>
    `;g(".profileDetails-jobList-box",s)})}a(".jobList-rendering").addEventListener("click",T);async function H(e){e.target.classList.add("job-data");let s=Array.from(l(".job-category")),t=Array.from(l(".job-selected"));if(s.includes(e.target)){let d=`
    <button
  class="job-selected bg-secondary my-1 text-background text-base px-2 py-0.5 rounded-full bg-[url=] mt-1"
  >
  ${e.target.value}x
  </button>
    `;await g(".profileDetails-job-selected",d)}else t.includes(e.target)&&(e.target.remove(e.target),m("job"));const c=Array.from(l(".job-data")).map(d=>d.value);r("job",c)}h.addEventListener("click",H);a(".profileDetails-button-final").addEventListener("click",()=>{window.location.href="/src/pages/profile/"});

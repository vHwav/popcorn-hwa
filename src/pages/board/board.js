import pocketbase from 'pocketbase';
import {
  insertLast,
  getPbImageURL,
  timeAgo,
  getNode,
  formattedDateShort,
} from '/src/lib';
import { gsap } from 'gsap';

const subjectMenuButton = getNode('.subjectMenu');
const subjectMenutoggle = getNode('.subject-menu-container');
const closedSubjectMenu = getNode('.board-closedSubjectMenu-button');

const pb = new pocketbase(`${import.meta.env.VITE_PB_URL}`);

async function renderProduct() {
  const arraySubjectValue = funcLocalStorage();

  const responseCommunity = await pb.collection('community').getList(1, 50, {
    expand: 'SR_location',
  });

  const communityData = responseCommunity.items;
  console.log(communityData);
  communityData.forEach((item) => {
    console.log(item);
    const template = /* html */ `
    <div
          class="board-container text-bluegray-400 text-sm border-t-[1px] p-3 grid grid-cols-2"
        >    
     <div class="col-start-1 row-start-1 row-end-3 col-end-3">
     <a href="/src/pages/boardContent/index.html#${item.id}" >
            <span
              class="board-keyword p-1 border border-black rounded-default bg-bluegray-300 text-background"
            >
              ${item.category}
            </span>
            <strong
              class="board-title block my-1 text-base whitespace-nowrap text-ellipsis overflow-hidden text-Contents-contentPrimary"
            >
            ${item.title}
            </strong>
            <div class="my-1 flex gap-1">
              <img src="/public/images/fullpeople.svg" alt="참여인원 수" />
              <span class="board-people">  ${item.age}  </span>
            </div>
            <div class="my-1 flex gap-1">
              <img src="/public/images/calender.svg" alt="날짜" />
              <span class="board-when"> ${formattedDateShort(item.date)}</span>
              <span class="board-time">${item.time} </span>
            </div>
            <div class="my-1">
              <span class="board-location">  ${
                item.expand.SR_location.locationSecond
              }</span>
              <span>·</span>
              <span class="board-writeTime"> ${timeAgo(item.created)} </span>
            </div>
            </a>
          </div>
          <div class="col-end-4 self-center">
            <img
              class="board-thumnail h-[60px] w-[60px]"
              src="${getPbImageURL(item)}"
              alt="게시물 미리보기 사진"
              onerror="this.style.display='none';"
            />
          </div>
          <div class="gap-1 items-center col-end-4 self-end justify-end flex">
            <img src="/public/images/fullpeople.svg" alt="참가 인원수" />
            <span class="board-joinPeople">${item.headcount}/10명</span>
          </div> 
          
              </div>
  `;

    insertLast('.template', template);
  });

  /* -------------------------------------------------------------------------- */
  /*    주제목록 랜더링은 User의 localStorage에 저장이 구현되면 불러와서 구현        */
  /* -------------------------------------------------------------------------- */

  //   arraySubjectValue.forEach((item) => {
  //     const templateSubjecMenu = /* html */ `
  //   <div class="p-3 flex justify-between">
  //   <div class="flex items-center gap-2">
  //     <img class="h-[34px] w-[34px]" src="/public/images/life.svg" alt="" />
  //     <strong class="board-subject-name no-wrap truncate">${item}</strong>
  //   </div>
  //   <div
  //     class="board-participating py-1 text-secondary rounded-2xl px-5 border bg-bluegray-100 no-wrap"
  //   >
  //     참여중
  //   </div>
  // </div>

  //   `;
  //     insertLast('.templateSubjectContainer', templateSubjecMenu);
  //   });

  const templateSubjecMenu = /* html */ `
<div class="p-3 flex justify-between">
<div class="flex items-center gap-2">
  <img class="h-[34px] w-[34px]" src="/public/images/life.svg" alt="" />
  <strong class="board-subject-name no-wrap truncate">localStorage 아직</strong>
</div>
<div
  class="board-participating py-1 text-secondary rounded-2xl px-5 border bg-bluegray-100 no-wrap"
>
  참여중
</div>
</div>


`;
  insertLast('.templateSubjectContainer', templateSubjecMenu);

  gsap.from('.board-container', {
    y: 30,
    opacity: 0,
    stagger: 0.1,
  });
}

function funcLocalStorage() {
  const items = localStorage.getItem('interest');
  const result = JSON.parse(items);

  return result;
}

function handleSubjectToggle() {
  const isClicked = this.classList.toggle('click');

  if (this.className === closedSubjectMenu.className) {
    gsap.to(subjectMenutoggle, {
      y: '100%',
      ease: 'power2.out',
      duration: 0.5,
    });
    subjectMenuButton.classList.remove('click');
    return;
  }

  if (isClicked) {
    gsap.to(subjectMenutoggle, { y: 0, ease: 'power2.out', duration: 0.5 });
    return;
  }
  gsap.to(subjectMenutoggle, { y: '100%', ease: 'power2.out', duration: 0.5 });
}

function handleClickOutside(event) {
  if (
    event.target.closest('.subject-menu-container') ||
    event.target.closest('.subjectMenu')
  ) {
    return;
  }
  gsap.to(subjectMenutoggle, { y: '100%', ease: 'power2.out', duration: 0.5 });
  subjectMenuButton.classList.remove('click');
}

renderProduct();

subjectMenuButton.addEventListener('click', handleSubjectToggle);
closedSubjectMenu.addEventListener('click', handleSubjectToggle);
document.addEventListener('click', handleClickOutside);

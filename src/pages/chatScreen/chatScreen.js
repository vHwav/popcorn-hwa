import { getNode, insertLast, formattedDateShort } from '/src/lib';
import Pockbase from 'pocketbase';
import gsap from 'gsap';
import hamburger from '/public/images/hamburger.svg';
import plusChatScreen from '/public/images/plusChatScreen.svg';
import directionL from '/public/images/directionL.svg';
import smile from '/public/images/smile.svg';
import send from '/public/images/send.svg';

const pocketbase = new Pockbase(`${import.meta.env.VITE_PB_URL}`);

async function renderProduct() {
  const hash = window.location.hash.slice(1);
  const productData = await pocketbase.collection('community').getOne(hash, {
    expand: 'SR_location',
  });

  console.log(productData);

  const {
    SR_location,
    activity,
    category,
    date,
    meetingLocation,
    gender,
    approve,
    headcount,
    age,
    title,
    time,
    expand,
    id,
  } = productData;

  const template = /* html */ `
     
  <div>
  <header class="flex justify-between p-2">
    <a class="top-1/2" href="/src/pages/board/index.html"
      ><img src="${directionL}" alt="뒤로가기"
    /></a>
    <strong class="chatScreen-title text-center block"
      >${title}<span
        class="chatScreen-people text-Contents-contentTertiary"
        >1</span
      >
    </strong>
    <img src="${hamburger}" alt="메뉴" />
  </header>
  <div
      class="fixed text-base items-center flex gap-[0.375rem] w-full px-3 bottom-[2.125rem]"
    >
      <button class="chatScreen-option-button" type="button">
        <img src="${plusChatScreen}" alt="추가옵션" />
      </button>
      <form action="/submit" method="post" class="w-full">
        <label for="message" class="sr-only">메세지</label>
        <textarea
          class="resize-none overflow-hidden h-auto translate-y-1 text-nowrap rounded-full px-3 py-2 w-full bg-bluegray-100"
          rows="1"
          id="message"
          name="message"
          placeholder="메시지 보내기"
        ></textarea>
        <button
          class="chatScreen-emoji-button absolute inset-y-2 right-10"
          type="button"
        >
          <img src="${smile}" alt="이모지 선택" />
        </button>
      </form>
      <button class="chatScreen-send-button" type="button">
        <img src="${send}" alt="메세지보내기버튼" />
      </button>
    </div>
  
</div>
    `;

  insertLast('.template', template);

  gsap.from('.board-container', {
    opacity: 0,
    stagger: 0.1,
  });

  gsap.to('.chatScreen-option-button', {
    y: 0,
    opacity: 1,
    stagger: 0.1, //
  });
}

renderProduct();

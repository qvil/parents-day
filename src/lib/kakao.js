export const init = (key = process.env.REACT_APP_KAKAO_APP_KEY) => {
  window.Kakao.init(key);
};
export const sendLink = targetLink => () => {
  const serviceLink = "http://parentsday.cf";

  window.Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "카네이션카드 - 어버이날 감사한 부모님께 카네이션 선물하기",
      description: "어버이날 감사한 부모님께 카네이션을 선물해보세요!",
      imageUrl: `${serviceLink}/thumbnail.jpg`,
      link: {
        mobileWebUrl: "http://parentsday.cf",
        webUrl: "http://parentsday.cf"
      }
    },
    buttons: [
      {
        title: "카드 확인하기",
        link: {
          mobileWebUrl: targetLink,
          webUrl: targetLink
        }
      }
      // {
      //   title: "앱으로 보기",
      //   link: {
      //     mobileWebUrl: targetLink,
      //     webUrl: targetLink
      //   }
      // }
    ]
  });
};

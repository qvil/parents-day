export const init = (key = process.env.REACT_APP_KAKAO_APP_KEY) => {
  window.Kakao.init(key);
};
export const sendLink = ({
  targetLink,
  parent = "부모",
  child = "자식",
  message = "부모님 은혜에 감사합니다."
}) => () => {
  const serviceLink = "http://parentsday.cf";

  window.Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: message,
      description: `${parent}님에게 ${child}님으로 부터 카네이션 카드가 도착했어요!`,
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

const url = 'https://mbtibyanthony.netlify.app/';

function setShare(){
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = 'MBTI result';
    const shareDes = infoList[resultAlt].name;
    const shareImage = url + 'img/image-' + resultAlt + '.png';
    const shareURL = url + 'page/result-' + resultAlt + '.html';

    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: shareTitle,
          description: shareDes,
          imageUrl: shareImage,
          link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL
          },
        },
        social: {
          likeCount: 10,
          commentCount: 20,
          sharedCount: 30,
        },
        buttons: [
          {
            title: 'Show Result',
            link: {
              mobileWebUrl: shareURL,
              webUrl: shareURL,
            },
          },
        ],
      });
}
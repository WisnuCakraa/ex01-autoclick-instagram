setInterval(() => {
  $disabled = false;
  if (!$disabled) {
    let btn = document.getElementsByTagName("button");
    for (let i = 0; i < btn.length; i++) {
      if (btn[i].innerHTML.includes("Like")) {
        btn[i].click();
        break;
      }
    }
  }
}, 2000);

function likeFunction() {
  let wisnuBlog = document.querySelector(".coreSpriteRightPaginationArrow");
  likeCount++;
  console.log("Wisnu Like " + likeCount);
  var wisnuKeren = Math.random() * (5000 - 5000) + 4000;
  setTimeout(function () {
    wisnuBlog.click();
  }, 1850);
  if (likeCount < 25) {
    setTimeout(likeFunction, wisnuKeren);
  } else {
    console.log("Nice! Follow IG @wisnucakra_.");
  }
}
var likeCount = 0;
likeFunction();

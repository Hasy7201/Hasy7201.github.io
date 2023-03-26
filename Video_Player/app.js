const root = document.getElementById("root");
const video = document.createElement("video");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const listItem = document.querySelector("ul");

const plugInPlay = (ele) => {
  playButton.addEventListener("click", () => {
    ele.play();
  });
  pauseButton.addEventListener("click", () => {
    ele.pause();
  });
};

video.src = "./videofile.mp4"; 

function createVideoEl(ele, path) {
  const video = document.createElement(`${ele}`);
  video.src = `${path}`;
  const attr = ["height", "width", "type"];
  const attV = ["590", "max-width", "video/mp4"];
  for (let i = 0; i <= 2; i++) {
    video.setAttribute(`${attr[i]}`, `${attV[i]}`);
    video.setAttribute("controls", "controls");
  }

  root.appendChild(video);
  plugInPlay(video);
}
listItem.addEventListener("click", (event) => {
  createVideoEl("video", `./Life/${event.target.textContent}.mp4`);
  console.log(event.target.textContent);
});



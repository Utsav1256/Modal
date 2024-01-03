const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  //   document.querySelector("#transparentFS").style.display = "initial";
  //  ye turant aa jat hai, mujhe turant nahi chahiye
  //   you cannot display none
  //  if you have given display none to some element jiske wajah se wo hide ho gaya hai,
  //  aap us element ko animate nahi kar sakte wapas late waqt
  // transition display: none; pe nahi lagta hai
  document.querySelector("#transparentFS").style.opacity = 1;
  document.querySelector("#modal").style.top = "15%";
});

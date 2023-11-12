const zoom = document.getElementById("zoom");
const img = document.querySelector("img");

zoom.addEventListener("mousemove", (e) => {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  console.log(x, y);
  zoomimg.style.transformOrigin = `${x}px ${y}px`;
  zoomimg.style.transform = "scale(1.5)";
});

zoom.addEventListener("mouseleave", () => {
  zoomimg.style.transformOrigin = "center";
  zoomimg.style.transform = "scale(1)";
});

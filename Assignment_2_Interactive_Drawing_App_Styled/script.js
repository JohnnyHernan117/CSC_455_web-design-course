const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
const clearBtn = document.getElementById("clearBtn");
const colorPicker = document.getElementById("colorPicker");

canvas.width = 600;
canvas.height = 400;

let isDrawing = false;

ctx.lineWidth = 3;
ctx.lineCap = "round";
ctx.strokeStyle = "black";

function getMousePosition(e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;

  const pos = getMousePosition(e);
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;

  const pos = getMousePosition(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

canvas.addEventListener("mouseleave", () => {
  isDrawing = false;
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorPicker.addEventListener("input", () => {
  ctx.strokeStyle = colorPicker.value;
});
document.addEventListener("DOMContentLoaded", () => {
  const stage = document.getElementById("stage");
  const container = document.getElementById("container");
  const bgMusic = document.getElementById("bg-music");
  const playButton = document.getElementById("play-music");

  // Kích thước của stage (110vw x 110vh)
  const stageWidth = container.clientWidth * 1.1;
  const stageHeight = container.clientHeight * 1.1;

  const messages = [
    "Chúc cậu một ngày 1/6 zui zẻ",
    "Tình yêu của tớ với cậu là điều kỳ diệu nhất. :))",
    "Tớ luôn nghĩ về cậu.:V",
    "Mỗi khoảnh khắc bên cậu đối với tớ thật quý giá!",
    "Tài❤️ Kiều Anh (^人^)",
    "Cậu là nguồn động lực của tớ.",
    "Nhớ K.Anh mỗi giây từng phút.",
    "Và tớ mong cậu Bỏ Bin đi :D",
    "Kiều Anh💔Bin",
    "Bên cậu, tớ thấy đời thật ý nghĩa.",
    "Nụ cười của cậu thắp sáng đời tớ.",
    "Mọi thứ trở nên đẹp khi có cậu, Kiều Anh ạ.:P",
    "Giấc mơ của tớ là có cậu mãi bên cạnh tớ mọi lúc. ;)",
    "Tớ tin rằng, cậu là người định mệnh của tớ. (￣y▽,￣)╭ ",
    "Hạnh phúc là khi thấy cậu cười. \^o^/",
    "tớ yêu cậu như cách cậu yêu Kira :)))))",
  ];

  // Mảng lưu bounding rectangle dùng để tránh chồng lấn các dòng chữ
  const placedRects = [];

  function isOverlap(rectA, rectB) {
    return !(rectA.right < rectB.left ||
             rectA.left > rectB.right ||
             rectA.bottom < rectB.top ||
             rectA.top > rectB.bottom);
  }

  function getNonOverlappingPosition(elemWidth, elemHeight) {
    let maxAttempts = 100;
    let attempt = 0;
    let pos = { left: 0, top: 0 };
    let found = false;
    while (attempt < maxAttempts && !found) {
      pos.left = Math.random() * (stageWidth - elemWidth);
      pos.top = Math.random() * (stageHeight - elemHeight);
      let newRect = {
        left: pos.left,
        top: pos.top,
        right: pos.left + elemWidth,
        bottom: pos.top + elemHeight
      };

      let overlap = placedRects.some(rect => isOverlap(newRect, rect));
      if (!overlap) {
        placedRects.push(newRect);
        found = true;
      }
      attempt++;
    }
    return pos;
  }

  function randomPink() {
    const hue = Math.round(320 + Math.random() * 30);
    const saturation = Math.round(80 + Math.random() * 20);
    const lightness = Math.round(60 + Math.random() * 10);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  // Spawn các dòng chữ và gán vận tốc di chuyển chậm (0.05 px/ms)
  messages.forEach(msg => {
    const textDiv = document.createElement("div");
    textDiv.className = "text";
    textDiv.textContent = msg;
    textDiv.style.color = randomPink();

    // Ẩn tạm thời để đo kích thước
    textDiv.style.visibility = "hidden";
    stage.appendChild(textDiv);
    const elemWidth = textDiv.offsetWidth;
    const elemHeight = textDiv.offsetHeight;

    const pos = getNonOverlappingPosition(elemWidth, elemHeight);
    textDiv.style.left = pos.left + "px";
    textDiv.style.top = pos.top + "px";
    textDiv.style.visibility = "visible";

    // Gán vận tốc ngẫu nhiên (px/ms)
    textDiv.velocityX = (Math.random() - 0.5) * 0.05;
    textDiv.velocityY = (Math.random() - 0.5) * 0.05;
  });

  // Spawn trái tim (15 trái tim sử dụng heart.png)
  const numHearts = 15;
  for (let i = 0; i < numHearts; i++) {
    spawnHeart();
  }
  function spawnHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * stageWidth + "px";
    heart.style.top = stageHeight - Math.random() * 100 + "px";
    heart.style.animationDelay = Math.random() * 2 + "s";
    heart.style.animationDuration = (3 + Math.random() * 2) + "s";
    stage.appendChild(heart);
  }

  // Xử lý kéo (drag & touch) để di chuyển stage
  let isDragging = false,
      startX = 0,
      startY = 0,
      currentTranslateX = 0,
      currentTranslateY = 0;
  
  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    container.style.cursor = "grabbing";
  });
  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    stage.style.transform = `translate(${currentTranslateX + dx}px, ${currentTranslateY + dy}px)`;
  });
  document.addEventListener("mouseup", (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    currentTranslateX += dx;
    currentTranslateY += dy;
    isDragging = false;
    container.style.cursor = "grab";
  });
  container.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  });
  container.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;
    stage.style.transform = `translate(${currentTranslateX + dx}px, ${currentTranslateY + dy}px)`;
  });
  container.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    currentTranslateX += dx;
    currentTranslateY += dy;
    isDragging = false;
  });

  // Hiệu ứng hiện stage (text & trái tim) sau 3 giây
  stage.style.opacity = "0";
  setTimeout(() => {
    stage.style.transition = "opacity 1s ease";
    stage.style.opacity = "1";
  }, 3000);

  // Xử lý nhạc nền: cố gắng tự phát; nếu trình duyệt chặn, hiển thị nút "Play Music"
  bgMusic.play().catch(() => {
    playButton.style.display = "block";
  });
  playButton.addEventListener("click", () => {
    bgMusic.play();
    playButton.style.display = "none";
  });

document.addEventListener("DOMContentLoaded", function() {
  // Lấy phần tử container và stage
  const container = document.getElementById("container");
  const stage = document.getElementById("stage");
  // Lấy tất cả các phần tử có class "text"
  const texts = document.querySelectorAll(".text");
  
  // Tính kích thước của stage dựa trên container (mở rộng 110%)
  const stageWidth = container.clientWidth * 1.1;
  const stageHeight = container.clientHeight * 1.1;
  
  // Nếu chưa có vận tốc, gán vận tốc ngẫu nhiên cho mỗi dòng chữ
  texts.forEach(text => {
    if (typeof text.velocityX === "undefined" || typeof text.velocityY === "undefined") {
      text.velocityX = (Math.random() - 0.5) * 0.05;  // đơn vị: px/ms
      text.velocityY = (Math.random() - 0.5) * 0.05;
    }
  });
  
  let lastTimestamp = null;
  
  function animateTexts(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const delta = timestamp - lastTimestamp;
    lastTimestamp = timestamp;
    
    // Cập nhật vị trí của mỗi dòng chữ dựa trên vận tốc
    texts.forEach(text => {
      let left = parseFloat(text.style.left);
      let top = parseFloat(text.style.top);
  
      let newLeft = left + text.velocityX * delta;
      let newTop = top + text.velocityY * delta;
  
      const elemWidth = text.offsetWidth;
      const elemHeight = text.offsetHeight;
  
      // Kiểm tra và giới hạn theo biên của stage
      if (newLeft < 0) {
        newLeft = 0;
        text.velocityX = -text.velocityX;
      }
      if (newLeft > stageWidth - elemWidth) {
        newLeft = stageWidth - elemWidth;
        text.velocityX = -text.velocityX;
      }
      if (newTop < 0) {
        newTop = 0;
        text.velocityY = -text.velocityY;
      }
      if (newTop > stageHeight - elemHeight) {
        newTop = stageHeight - elemHeight;
        text.velocityY = -text.velocityY;
      }
  
      text.style.left = newLeft + "px";
      text.style.top = newTop + "px";
    });
  
    // Kiểm tra va chạm giữa các dòng chữ và điều chỉnh vị trí nếu cần
    const textsArr = Array.from(texts);
    for (let i = 0; i < textsArr.length; i++) {
      for (let j = i + 1; j < textsArr.length; j++) {
        const rect1 = textsArr[i].getBoundingClientRect();
        const rect2 = textsArr[j].getBoundingClientRect();
  
        // Nếu bounding box của chúng giao nhau (va chạm)
        if (
          rect1.right > rect2.left &&
          rect1.left < rect2.right &&
          rect1.bottom > rect2.top &&
          rect1.top < rect2.bottom
        ) {
          // Tính khoảng chồng lấn theo trục X và Y
          const overlapX = Math.min(rect1.right - rect2.left, rect2.right - rect1.left);
          const overlapY = Math.min(rect1.bottom - rect2.top, rect2.bottom - rect1.top);
  
          // Điều chỉnh theo trục có chồng lấn ít hơn
          if (overlapX < overlapY) {
            const shift = overlapX / 2;
            const center1 = rect1.left + rect1.width / 2;
            const center2 = rect2.left + rect2.width / 2;
            if (center1 < center2) {
              textsArr[i].style.left = (parseFloat(textsArr[i].style.left) - shift) + "px";
              textsArr[j].style.left = (parseFloat(textsArr[j].style.left) + shift) + "px";
            } else {
              textsArr[i].style.left = (parseFloat(textsArr[i].style.left) + shift) + "px";
              textsArr[j].style.left = (parseFloat(textsArr[j].style.left) - shift) + "px";
            }
          } else {
            const shift = overlapY / 2;
            const center1 = rect1.top + rect1.height / 2;
            const center2 = rect2.top + rect2.height / 2;
            if (center1 < center2) {
              textsArr[i].style.top = (parseFloat(textsArr[i].style.top) - shift) + "px";
              textsArr[j].style.top = (parseFloat(textsArr[j].style.top) + shift) + "px";
            } else {
              textsArr[i].style.top = (parseFloat(textsArr[i].style.top) + shift) + "px";
              textsArr[j].style.top = (parseFloat(textsArr[j].style.top) - shift) + "px";
            }
          }
        }
      }
    }
  
    // Yêu cầu frame tiếp theo
    requestAnimationFrame(animateTexts);
  }
  
  // Bắt đầu chạy animation
  requestAnimationFrame(animateTexts);
});



  // Auto di chuyển các dòng chữ bằng requestAnimationFrame
  const texts = document.querySelectorAll('.text');
  let lastTimestamp = null;
  function animateTexts(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const delta = timestamp - lastTimestamp;
    lastTimestamp = timestamp;
    
    texts.forEach(text => {
      let left = parseFloat(text.style.left);
      let top = parseFloat(text.style.top);
      let newLeft = left + text.velocityX * delta;
      let newTop = top + text.velocityY * delta;
      const elemWidth = text.offsetWidth;
      const elemHeight = text.offsetHeight;
      
      // Kiểm tra biên của stage và đổi hướng nếu chạm
      if (newLeft < 0) {
        newLeft = 0;
        text.velocityX = -text.velocityX;
      }
      if (newLeft > stageWidth - elemWidth) {
        newLeft = stageWidth - elemWidth;
        text.velocityX = -text.velocityX;
      }
      if (newTop < 0) {
        newTop = 0;
        text.velocityY = -text.velocityY;
      }
      if (newTop > stageHeight - elemHeight) {
        newTop = stageHeight - elemHeight;
        text.velocityY = -text.velocityY;
      }
      text.style.left = newLeft + "px";
      text.style.top = newTop + "px";
    });
    requestAnimationFrame(animateTexts);
  }
  requestAnimationFrame(animateTexts);
});

(function () {
  const cfg = window.SWING_PIANO || {};
  const videoUrl =
    cfg.workshopVideoUrl ||
    "https://leaks-booking.wachstumsakademie-maximus.de/media/leaks-workshop.mp4";
  const days = Number(cfg.workshopAvailableDays || 5);
  const key = cfg.workshopStorageKey || "swing-piano-workshop-deadline";
  const params = new URLSearchParams(window.location.search);
  const expireIn = Number(params.get("expireIn") || 0);
  const expireNow = params.get("expireNow") === "1";

  function readDeadline() {
    try {
      return Number(localStorage.getItem(key) || 0);
    } catch (err) {
      return 0;
    }
  }

  function writeDeadline(value) {
    try {
      localStorage.setItem(key, String(value));
    } catch (err) {
      /* private mode: no persist */
    }
  }

  function deadline() {
    if (expireNow) return Date.now() - 1;
    if (expireIn > 0) {
      const next = Date.now() + expireIn * 1000;
      writeDeadline(next);
      return next;
    }
    const stored = readDeadline();
    if (stored > 0) return stored;
    const next = Date.now() + days * 24 * 60 * 60 * 1000;
    writeDeadline(next);
    return next;
  }

  const expired = Date.now() >= deadline();
  const bar = document.querySelector(".notif-bar");
  const lede = document.querySelector(".lede");
  const videoBox = document.getElementById("workshop-video");
  const videoCta = document.getElementById("workshop-video-cta");
  const micro = document.getElementById("workshop-micro");

  if (expired) {
    if (bar) {
      bar.textContent =
        "The 5-day workshop window has ended. The PDF stays with you.";
    }
    if (lede) {
      lede.textContent =
        "The workshop video is no longer available on this page. Your PDF download remains.";
    }
    if (videoBox) {
      videoBox.classList.add("expired");
      videoBox.replaceChildren();
      const msg = document.createElement("p");
      msg.className = "expired-msg";
      msg.textContent = "Workshop video expired after 5 days.";
      videoBox.appendChild(msg);
    }
    if (videoCta) videoCta.hidden = true;
    if (micro) {
      micro.textContent =
        "PDF stays with you. The workshop video window has ended.";
    }
    return;
  }

  if (videoBox) {
    const video = document.createElement("video");
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.title = "LEAKS Piano workshop";
    const source = document.createElement("source");
    source.src = videoUrl;
    source.type = "video/mp4";
    video.appendChild(source);
    videoBox.replaceChildren(video);
  }
  if (videoCta) {
    const link = videoCta.querySelector("a");
    if (link) link.href = videoUrl;
    videoCta.hidden = false;
  }
})();

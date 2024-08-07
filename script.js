function scrollToContent() {
  window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
}

function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

self.addEventListener("install", e => {
  console.log("service worker is installed ", e);
});
self.addEventListener("activate", e => {
  console.log("service worker is installed ", e);
});
self.addEventListener("fetch", e => {
  console.log("service worker is installed ", e);
});

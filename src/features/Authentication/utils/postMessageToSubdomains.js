const postMessageToSubdomains = (msg) => {
  const frames = document.getElementsByTagName("iframe");
  Array.from(frames).forEach((element) => {
    element.contentWindow.postMessage(msg, "*");
  });
};

export default postMessageToSubdomains;

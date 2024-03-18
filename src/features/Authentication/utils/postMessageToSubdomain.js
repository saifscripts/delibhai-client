const postMessageToSubdomain = (msg, subdomain) => {
    const win = document.getElementById(`${subdomain}_frame`).contentWindow;
    win.postMessage(msg, "*");
  }

export default postMessageToSubdomain
const getLocation = () => {
  let domain;
  let subdomain = "";

  const { protocol, hostname, port } = window.location;
  const hostParts = hostname.split(".");
  const isLocalhost = hostParts.includes("localhost");

  if (isLocalhost && hostParts.length === 1) {
    domain = "localhost:" + port;
  }

  if (isLocalhost && hostParts.length === 2) {
    subdomain = hostParts[0];
    domain = "localhost:" + port;
  }

  if (!isLocalhost && hostParts.length === 2) {
    domain = hostname;
  }

  if (!isLocalhost && hostParts.length === 3) {
    subdomain = hostParts[0];
    domain = hostParts.slice(1).join(".");
  }

  return { protocol, port, subdomain, domain };
};

export default getLocation;

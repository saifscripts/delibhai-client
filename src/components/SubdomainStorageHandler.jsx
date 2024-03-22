import services from "../data/services";
import getLocation from "../utils/getLocation";

window.addEventListener("message", function (event) {
  const { method, token } = event.data;

  if (method === "set") {
    localStorage.setItem("authToken", token);
  }

  if (method === "remove") {
    localStorage.removeItem("authToken");
  }
});

const { protocol, domain } = getLocation();

function SubdomainStorageHandler() {
  return (
    <>
      {/* Parent frame */}
      <iframe
        src={`${protocol}//${domain}`} // generate url using current window location
        className="hidden"
        id={`parent_frame`}
      ></iframe>

      {/* Subdomain frames */}
      {services?.map(
        ({ id, subdomain, active }) =>
          active && (
            <iframe
              key={id}
              src={`${protocol}//${subdomain}.${domain}`} // generate url using current window location
              className="hidden"
              id={`${subdomain}_frame`}
            ></iframe>
          ),
      )}
    </>
  );
}

export default SubdomainStorageHandler;

import services from "../data/services";

window.addEventListener("message", function (event) {
  console.log(event.origin);

  console.log(event.data);
  const { method, token } = event.data;

  if (method === "set") {
    localStorage.setItem("authToken", token);
  }

  if (method === "remove") {
    localStorage.removeItem("authToken");
  }
});

function SubdomainStorageHandler() {
  return (
    <>
      {/* Parent frame */}
      <iframe
        src={`https://delibhai.com`}
        className="hidden"
        id={`parent_frame`}
      ></iframe>

      {/* Subdomain frames */}
      {services?.map(
        ({ id, subdomain, active }) =>
          active && (
            <iframe
              key={id}
              src={`https://${subdomain}.delibhai.com`}
              className="hidden"
              id={`${subdomain}_frame`}
            ></iframe>
          )
      )}
    </>
  );
}

export default SubdomainStorageHandler;

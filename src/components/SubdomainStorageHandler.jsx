import services from "../data/services";

window.addEventListener("message", function (event) {
  console.log(event.origin);

  if (event.data) {
    localStorage.setItem("authToken", event.data);
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

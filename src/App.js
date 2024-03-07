import "./styles.css";
export default function App() {
  function Submit(e) {
    e.preventDefault(); // Prevent default form submission
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    console.log("Form Data:", formDatab); // Log form data
    fetch(
      "https://sheet.best/api/sheets/19f8cc0e-136f-467f-bc1d-ef19aad806ce",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data); // Log API response
        window.location.reload();
      })
      .catch((error) => {
        console.log("API Error:", error); // Log API error
      });
  }
  return (
    <div className="App">
      <h1>Contact Me</h1>
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Your Name" name="Name" type="text" />
          <input placeholder="Your Email" name="Email" type="text" />
          <input placeholder="Your Message" name="Message" type="text" />
          <input name="Name" type="submit" />
        </form>
      </div>
    </div>
  );
}
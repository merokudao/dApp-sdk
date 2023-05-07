import Widget from "./Widget";

function App() {
  return (
    <>
      <Widget />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <a href="https://transak.com/">Website</a>

        <a href="https://docs.transak.com/">Click here for documentation</a>
      </div>
    </>
  );
}

export default App;

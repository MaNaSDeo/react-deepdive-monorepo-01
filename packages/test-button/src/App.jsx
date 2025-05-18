import "./App.css";

function App() {
  const styles = {
    "background-color": "#fff",
    border: "1px solid gray",
    padding: "6px 8px",
    "border-radius": "4px",
    "font-size": "16px",
    color: "gray",
    "font-weight": 700,
  };
  return <Button text="Click Me" style={styles} />;
}

export default App;

export function Button({ text, style }) {
  return (
    <button type="button" style={style} className="">
      {text}
    </button>
  );
}

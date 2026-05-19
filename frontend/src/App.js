import { useState } from "react";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  const calculate = async () => {
    const res = await fetch(`https://add-project-i98e.onrender.com/add?a=${a}&b=${b}`);
    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f0f2f5" }}>
      <div style={{ background: "white", padding: 40, borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.1)", textAlign: "center" }}>
        <h2>加法计算器</h2>
        <input
          type="number"
          placeholder="a"
          value={a}
          onChange={e => setA(e.target.value)}
          style={{ padding: 10, fontSize: 18, width: 80, margin: "0 10px", border: "1px solid #ddd", borderRadius: 6 }}
        />
        +
        <input
          type="number"
          placeholder="b"
          value={b}
          onChange={e => setB(e.target.value)}
          style={{ padding: 10, fontSize: 18, width: 80, margin: "0 10px", border: "1px solid #ddd", borderRadius: 6 }}
        />
        <br />
        <button
          onClick={calculate}
          style={{ padding: "10px 24px", fontSize: 18, background: "#4f8ef7", color: "white", border: "none", borderRadius: 6, cursor: "pointer", marginTop: 20 }}
        >
          计算
        </button>
        {result !== null && (
          <div style={{ fontSize: 28, fontWeight: "bold", marginTop: 24, color: "#4f8ef7" }}>
            = {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
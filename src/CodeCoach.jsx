import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeCoach() {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// Type your code here...");
  const [msg, setMsg] = useState("👋 Tell me what you're building or paste code, then click Analyze.");

  function analyze() {
    if (code.includes("var ")) setMsg("⚠️ Use let/const instead of var.");
    else if (!code.trim()) setMsg("✍️ Paste or type some code for me to review!");
    else setMsg("✅ Looks OK. No obvious quick fixes.");
  }

  return (
    <div style={{ padding: 16, fontFamily: "system-ui, sans-serif" }}>
      <h1>Code Coach</h1>
      <label>Language: </label>
      <select value={language} onChange={e => setLanguage(e.target.value)}>
        <option>javascript</option><option>python</option><option>html</option>
      </select>
      <Editor height="300px" defaultLanguage={language} value={code} onChange={v => setCode(v ?? "")}
              options={{ minimap:{enabled:false}, wordWrap:"on", fontSize:14 }}/>
      <button onClick={analyze} style={{ marginTop: 12 }}>Analyze Code</button>
      <pre style={{ background:"#f4f4f4", padding:12, marginTop:12 }}>{msg}</pre>
    </div>
  );
}

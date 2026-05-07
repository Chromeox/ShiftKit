import React from "react";
import ReactDOM from "react-dom/client";
import { invoke } from "@tauri-apps/api/core";
import { Gauge, Keyboard, Music, Radio, Settings } from "lucide-react";
import "./styles.css";

type ReasoningLevel = "low" | "medium" | "high" | "xhigh";

type ModelSelection = {
  provider: string;
  model: string;
  version: string;
  reasoning: ReasoningLevel;
  enginePack: string;
};

const presets: Array<{ hotkey: string; selection: ModelSelection }> = [
  {
    hotkey: "Cmd+Opt+1",
    selection: {
      provider: "OpenAI",
      model: "GPT",
      version: "5.5",
      reasoning: "low",
      enginePack: "classic-v8"
    }
  },
  {
    hotkey: "Cmd+Opt+2",
    selection: {
      provider: "OpenAI",
      model: "GPT",
      version: "5.5",
      reasoning: "medium",
      enginePack: "classic-v8"
    }
  },
  {
    hotkey: "Cmd+Opt+3",
    selection: {
      provider: "OpenAI",
      model: "GPT",
      version: "5.5",
      reasoning: "high",
      enginePack: "classic-v8"
    }
  },
  {
    hotkey: "Cmd+Opt+4",
    selection: {
      provider: "OpenAI",
      model: "GPT",
      version: "5.5",
      reasoning: "xhigh",
      enginePack: "classic-v8"
    }
  }
];

function App() {
  const [status, setStatus] = React.useState("Ready to shift");

  async function previewShift(selection: ModelSelection) {
    setStatus(`${selection.model}-${selection.version} ${selection.reasoning}`);

    try {
      await invoke("select_model", { selection });
    } catch {
      // The Vite-only preview cannot invoke Tauri commands.
    }
  }

  return (
    <main className="app-shell">
      <section className="masthead">
        <div>
          <p className="eyebrow">ShiftKit</p>
          <h1>Make model switching feel mechanical.</h1>
        </div>
        <div className="status-pill">
          <Gauge size={18} />
          <span>{status}</span>
        </div>
      </section>

      <section className="panel">
        <header>
          <Keyboard size={20} />
          <div>
            <h2>Hotkey Presets</h2>
            <p>Each preset maps to a model state and triggers a transition sound.</p>
          </div>
        </header>

        <div className="preset-list">
          {presets.map(({ hotkey, selection }) => (
            <button
              className="preset-row"
              key={hotkey}
              type="button"
              onClick={() => previewShift(selection)}
            >
              <kbd>{hotkey}</kbd>
              <span>
                {selection.model}-{selection.version}
              </span>
              <strong>{selection.reasoning}</strong>
            </button>
          ))}
        </div>
      </section>

      <section className="grid">
        <article>
          <Music size={20} />
          <h2>Sound Packs</h2>
          <p>Local folders with a manifest and audio files.</p>
        </article>
        <article>
          <Radio size={20} />
          <h2>Engine Profiles</h2>
          <p>Per-model sound identities and overrides.</p>
        </article>
        <article>
          <Settings size={20} />
          <h2>Next</h2>
          <p>Config editing, shortcut registration, and playback wiring.</p>
        </article>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

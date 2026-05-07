# ShiftKit

ShiftKit is a macOS menu-bar app that turns AI model and reasoning-level changes into satisfying audio cues, like gear shifts, engine swaps, and startup sounds.

The first version is planned as a Tauri app with global hotkeys, local JSON sound packs, and a tiny transition engine that makes model switching feel tactile.

## Concept

AI tools already have meaningful "states": provider, model, version, reasoning level, and sometimes latency or cost profile. ShiftKit maps those state changes to sound.

Examples:

- Switching from `GPT-5.5 High` to `GPT-5.5 Medium` plays a downshift.
- Switching from `GPT-5.5 Medium` to `GPT-5.5 High` plays an upshift.
- Switching from `GPT-5.5` to `GPT-5.4` plays a vehicle change.
- Switching engine packs changes the sound identity for a model.

## Planned Stack

- Tauri v2 app shell
- React, TypeScript, and Vite for the settings UI
- Rust for app state, hotkey handling, config loading, and sound routing
- Tauri tray/menu-bar APIs
- Tauri global shortcut plugin
- Local JSON config and sound-pack manifests
- AVFoundation-backed macOS audio polish later if needed

## MVP

ShiftKit v0.1 should make the core loop real:

1. Run as a macOS menu-bar app.
2. Register configurable global hotkeys.
3. Map each hotkey to a provider, model, version, reasoning level, and engine pack.
4. Track the previous selection.
5. Classify the transition.
6. Play the matching sound from a local sound pack.

## Development

Install dependencies:

```sh
npm install
```

Run the settings UI in a browser:

```sh
npm run dev
```

Build the frontend:

```sh
npm run build
```

Run the native Tauri app after installing Rust and the Tauri prerequisites:

```sh
npm run tauri dev
```

## Roadmap

See [docs/roadmap.md](docs/roadmap.md).

## Sound Packs

Sound packs are ordinary folders with a `pack.json` manifest and local audio files. See [docs/sound-packs.md](docs/sound-packs.md) and [examples/sound-packs/classic-v8/pack.json](examples/sound-packs/classic-v8/pack.json).

## License

ShiftKit code is licensed under MIT. Sound packs may use separate licenses, and bundled/community packs should declare their own license in `pack.json`.

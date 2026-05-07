# Roadmap

ShiftKit is starting small: make model switching feel good, then make it customizable and extensible.

## v0.1: Hotkeys and Sound Packs

- macOS menu-bar app
- Global hotkeys for model and reasoning-level presets
- Local JSON configuration
- Local sound-pack loading
- Transition detection for upshift, downshift, same-gear blip, and model change
- Basic settings UI for current state and sound-pack selection

## v0.2: Per-Model Engine Profiles

- Assign an engine pack to each model
- Add model/version-specific sound overrides
- Add provider-level defaults
- Support multiple engine choices per model

## v0.3: Visual HUD Overlay

- Show a small overlay when the active AI selection changes
- Display previous and next model state
- Add optional HUD themes and duration settings

## v0.4: Browser and App Integrations

- Explore browser-extension bridge for detecting model picker changes
- Add local event bridge so integrations can notify ShiftKit
- Keep hotkeys as the stable fallback path

## v0.5: Community Sound-Pack Sharing

- Import and export sound packs
- Validate pack manifests
- Add pack preview UI
- Document contribution rules for community packs

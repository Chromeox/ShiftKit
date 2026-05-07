# Sound Packs

Sound packs are local folders that contain a `pack.json` manifest and audio files.

## Folder Shape

```text
sound-packs/
  classic-v8/
    pack.json
    start.wav
    stop.wav
    upshift.wav
    downshift.wav
    blip.wav
    model-change.wav
    engine-swap.wav
```

## Manifest

```json
{
  "schemaVersion": 1,
  "id": "classic-v8",
  "name": "Classic V8",
  "author": "ShiftKit",
  "license": "CC0-1.0",
  "description": "A starter pack for combustion-style model shifts.",
  "sounds": {
    "start": "start.wav",
    "stop": "stop.wav",
    "upshift": "upshift.wav",
    "downshift": "downshift.wav",
    "blip": "blip.wav",
    "modelChange": "model-change.wav",
    "engineSwap": "engine-swap.wav"
  }
}
```

## Sound Events

- `start`: played when ShiftKit starts or a model profile becomes active.
- `stop`: played when a model profile exits, if enabled.
- `upshift`: same model, reasoning level increases.
- `downshift`: same model, reasoning level decreases.
- `blip`: same model and same reasoning level are selected again.
- `modelChange`: provider/model/version changes.
- `engineSwap`: engine pack changes while the model selection stays related.

## Supported Formats

The MVP should prefer uncompressed or broadly supported formats:

- `.wav`
- `.aiff`
- `.mp3`
- `.m4a`

## Licensing

Every sound pack should declare a license. Avoid copyrighted clips, ripped game sounds, movie sounds, or trademark-sensitive material unless the pack author has explicit rights to distribute them.

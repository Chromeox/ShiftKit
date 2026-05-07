use serde::{Deserialize, Serialize};
use tauri::menu::{Menu, MenuItem};
use tauri::tray::TrayIconBuilder;
use tauri::{AppHandle, Manager};

#[derive(Debug, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
struct ModelSelection {
    provider: String,
    model: String,
    version: String,
    reasoning: ReasoningLevel,
    engine_pack: String,
}

#[derive(Debug, Deserialize, Serialize, PartialEq, Eq, PartialOrd, Ord)]
#[serde(rename_all = "lowercase")]
enum ReasoningLevel {
    Low,
    Medium,
    High,
    Xhigh,
}

#[tauri::command]
fn select_model(selection: ModelSelection) -> String {
    let reasoning = selection.reasoning_label();

    format!(
        "{} {} {} via {}",
        selection.model, selection.version, reasoning, selection.engine_pack
    )
}

impl ModelSelection {
    fn reasoning_label(&self) -> &'static str {
        match self.reasoning {
            ReasoningLevel::Low => "low",
            ReasoningLevel::Medium => "medium",
            ReasoningLevel::High => "high",
            ReasoningLevel::Xhigh => "xhigh",
        }
    }
}

fn build_tray(app: &AppHandle) -> tauri::Result<()> {
    let show = MenuItem::with_id(app, "show", "Show ShiftKit", true, None::<&str>)?;
    let quit = MenuItem::with_id(app, "quit", "Quit", true, None::<&str>)?;
    let menu = Menu::with_items(app, &[&show, &quit])?;

    TrayIconBuilder::with_id("shiftkit-tray")
        .tooltip("ShiftKit")
        .menu(&menu)
        .on_menu_event(|app, event| match event.id.as_ref() {
            "show" => {
                if let Some(window) = app.get_webview_window("main") {
                    let _ = window.show();
                    let _ = window.set_focus();
                }
            }
            "quit" => app.exit(0),
            _ => {}
        })
        .build(app)?;

    Ok(())
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_global_shortcut::Builder::new().build())
        .setup(|app| {
            build_tray(app.handle())?;
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![select_model])
        .run(tauri::generate_context!())
        .expect("error while running ShiftKit");
}

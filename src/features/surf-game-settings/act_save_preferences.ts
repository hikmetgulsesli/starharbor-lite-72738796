export type SavePreferencesCommand = () => void;
export type CloseSettingsCommand = () => void;

export function actSavePreferences(savePreferences: SavePreferencesCommand, closeSettings: CloseSettingsCommand) {
  savePreferences();
  closeSettings();
}

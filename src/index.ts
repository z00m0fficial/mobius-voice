export type { VoiceCaptureInput, VoiceIntelligenceOutput, SpeakerMapEntry } from "./models.js";

export function createCaptureId(): string {
  return `voice-${Date.now()}`;
}

export function calculateVoiceConfidence(values: {
  transcription: number;
  speaker: number;
  language: number;
  intent: number;
  decisions: number;
  actions: number;
}): number {
  const total = values.transcription + values.speaker + values.language + values.intent + values.decisions + values.actions;
  return Math.round((total / 6) * 100) / 100;
}

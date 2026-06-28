export interface VoiceCaptureInput {
  organizationId: string;
  actorId: string;
  sourceType: "microphone" | "upload" | "meeting" | "phone" | "studio" | "podcast" | "audiobook";
  languageHint?: string;
  consentConfirmed: boolean;
}

export interface SpeakerMapEntry {
  temporarySpeakerId: string;
  displayName?: string;
  verificationStatus: "temporary" | "confirmed" | "declined";
  consentStatus: "unknown" | "granted" | "denied";
}

export interface VoiceIntelligenceOutput {
  organizationId: string;
  actorId: string;
  captureId: string;
  language: string;
  dialect?: string;
  rawTranscript: string;
  cleanTranscript: string;
  speakerMap: SpeakerMapEntry[];
  intentSummary: string;
  actionItems: string[];
  decisions: string[];
  confidence: number;
  consentState: "pending" | "approved" | "restricted";
}

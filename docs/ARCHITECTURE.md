# Mobius Voice Architecture

Mobius Voice is the implementation service for Sonic Department.

## Boundary

Mobius Voice handles audio intake and voice-derived intelligence. It does not own long-term memory, product UI, or specialist routing.

## Flow

Audio input -> capture -> raw transcript -> clean transcript -> speaker map -> intent summary -> action items and decisions -> Mobius Router -> Atlas Core.

## Consent Rule

Speaker identity requires consent and verification before becoming permanent organizational knowledge.

## Metrics

Mobius Voice reports Voice Confidence Index across transcription, speaker, language, intent, decision, and action confidence.

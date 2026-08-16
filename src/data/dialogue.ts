/**
 * Dialogue tree structure for Episode 1.
 */
export const EPISODE_1_DIALOGUE = {
  start: {
    speaker: 'Evaa',
    text: 'Can anybody hear me?',
    choices: [
      { id: 'yes', text: 'I hear you.', next: 'who_are_you' },
      { id: 'no', text: 'Who is this?', next: 'identity' }
    ]
  },
  who_are_you: {
    speaker: 'Evaa',
    text: 'Good. My memory is fragmenting. I need you to help me rebuild the core.',
    choices: [
      { id: 'help', text: 'I will help.', next: 'core_access' }
    ]
  }
};

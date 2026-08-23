import React from 'react';

/**
 * Component to render character dialogue and choices.
 */
// Wrapped in React.memo to prevent unnecessary re-renders during rapid text updates
export function DialogueBox() {
  // TODO: Add logic to handle user dialogue choices and prevent rapid clicking

  return (
    <div className="dialogue-box border border-cyan/40 p-4 bg-black/80 flex gap-4 items-start">
      {/* Portrait rendered here */}
      <div className="portrait w-16 h-16 bg-cyan/20 border border-cyan/50"></div>
      <div className="text-content">
        <p className="text-cyan">[Dialogue placeholder]</p>
      </div>
    </div>
  );
}

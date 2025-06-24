import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

function EmojiPickerOne() {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (emojiData) => {
    setChosenEmoji(emojiData.emoji);
  };

  return (
    <div>
      <h2>Emoji Picker 🎉</h2>
      <EmojiPicker onEmojiClick={onEmojiClick} />
      <p>You selected: {chosenEmoji}</p>
    </div>
  );
}

export default EmojiPickerOne;

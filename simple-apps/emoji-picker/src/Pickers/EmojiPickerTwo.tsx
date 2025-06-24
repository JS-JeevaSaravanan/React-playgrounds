import { useEffect, useState } from "react";

function EmojiPickerTwo() {
  const [emojis, setEmojis] = useState({});
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/emojis")
      .then((res) => res.json())
      .then(setEmojis);
  }, []);

  const handleEmojiClick = (name, url) => {
    setSelectedEmoji({ name, url });
  };

  return (
    <div>
      <h2>GitHub Emojis 🐙</h2>

      {selectedEmoji && (
        <div style={{ marginBottom: "1rem" }}>
          <strong>Selected:</strong> {selectedEmoji.name}
          <img
            src={selectedEmoji.url}
            alt={selectedEmoji.name}
            width={32}
            style={{ marginLeft: 8 }}
          />
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxHeight: 300,
          overflowY: "scroll",
        }}
      >
        {Object.entries(emojis).map(([name, url]) => (
          <img
            key={name}
            src={url}
            alt={name}
            width={24}
            style={{ margin: 4, cursor: "pointer" }}
            onClick={() => handleEmojiClick(name, url)}
            title={name}
          />
        ))}
      </div>
    </div>
  );
}

export default EmojiPickerTwo;

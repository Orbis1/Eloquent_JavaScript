const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  const state = box.locked;
  if(box.locked) box.unlock();
  try {
    body();
    console.log(box.content);
  } catch (error) {
    console.log(error)
  }
  box.locked = state;
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

withBoxUnlocked(function() {
  box.content.push("banana");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}

withBoxUnlocked(function() {
  box.content.push("woodoo");
});

console.log(box.locked);
// → true
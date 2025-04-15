const sfxs = {
  walk: new Audio("sounds/walk.wav"),
  traffic: new Audio("sounds/traffic.wav"),
};

sfxs.traffic.loop = true;
sfxs.traffic.volume = 0.4;

function playSound(name) {
  if (!sfxs[name]) return;

  const sfx = sfxs[name].cloneNode(); // avoid overlapping issues
  sfx.volume = sfxs[name].volume;
  sfx.play();
}

function playBGSound(name) {
  if (!sfxs[name]) return;
  sfxs[name].play();
}

export {
  playBGSound,
  playSound
};



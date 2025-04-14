function getTimeStamp() {
  return new Date().toLocaleTimeString();
}

function styleLog(icon, message, color) {
  console.log(
    `%c${icon} %c${message}  %c🕗 ${getTimeStamp()}`,
    `color: ${color}; font-weight: bold;`,
    'color: white;',
    'color: gray; font-style: italic;'
  );
}

const log = {
  info: (msg) => styleLog("ℹ ", msg, "#3498db"),
  warn: (msg) => styleLog("⚠", msg, "#f1c40f"),
  error: (msg) => styleLog("❌", msg, "#e74c3c"),
  danger: (msg) => styleLog("💥", msg, "#c0392b"),
};

export default log;

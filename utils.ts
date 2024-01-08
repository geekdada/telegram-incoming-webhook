export const formatJSON = (
  json: Record<string, unknown>,
  indent = 0,
): string => {
  let result = "";

  for (const key in json) {
    if (key in json) {
      const value = json[key];

      if (value === null) {
        continue;
      }

      if (typeof value === "object") {
        const isKeyIndex = Number(key) >= 0;

        if (isKeyIndex) {
          result += `${" ".repeat(indent)}<code>#${Number(key) + 1}</code>\n`;
          result += formatJSON(value as Record<string, any>, indent);
        } else {
          result += `${" ".repeat(indent)}<b>${key}</b>:\n`;
          result += formatJSON(value as Record<string, any>, indent + 4);
        }

        continue;
      }

      const spaces = " ".repeat(indent);

      result += `${spaces}<b>${key}</b>: ${value}\n`;
    }
  }

  return result;
};

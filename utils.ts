export const formatJSON = (json: Record<string, unknown>): string => {
  let result = "";

  for (const key in json) {
    if (key in json) {
      const value = json[key];
      result += `<b>${key}</b>: ${value}\n`;
    }
  }

  return result;
};

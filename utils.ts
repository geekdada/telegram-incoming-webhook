export const formatJSON = (json: Record<string, any>): string => {
  let result = "";

  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      const value = json[key];
      result += `<b>${key}</b>: ${value}\n`;
    }
  }

  return result;
};

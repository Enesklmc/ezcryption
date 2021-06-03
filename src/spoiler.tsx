const Spoiler = {
  /**
   * Encryption Funtion
   * @param {string} message - A message that you want to be encrypted.
   * @return {string} Returns an encrypted text.
   */
  encrypt: (message: string, offset: number = 5) => {
    const charCodes = stringToCharCodes(message);

    const messageArrayMaptoOffset: Array<string> = charCodes.map(
      (index: number) => String.fromCharCode(index + offset)
    );

    return encodeURIComponent(messageArrayMaptoOffset.join(""));
  },

  /**
   * Encryption Funtion
   * @param {string} encryptedMessage - An encrypted message that you want to be decrypted.
   * @return {string} Returns the message you have encrypted.
   */
  decrypt: (encryptedMessage: string, offset: number = 5) => {
    const decodedMessage = decodeURIComponent(encryptedMessage);
    const charCodes = stringToCharCodes(decodedMessage);

    const messageArrayMaptoOffset: Array<string> = charCodes.map(
      (index: number) => String.fromCharCode(index - offset)
    );

    return messageArrayMaptoOffset.join("");
  },
};

export default Spoiler;

function stringToCharCodes(message: string): Array<number> {
  const messageSplit: Array<string> = message.split("");
  const charCodes: Array<number> = messageSplit.map((char: string) =>
    char.charCodeAt(0)
  );
  return charCodes;
}

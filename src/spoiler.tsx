const Spoiler = {
  /**
   * Encryption Funtion
   * @param {string} message - A message that you want to be encrypted.
   * @return {string} Returns an encrypted text.
   */
  encrypt: (message: string, offset: number = 5) => {
    const messageArray: Array<string> = message.split("");
    const messageArrayMap: Array<number> = messageArray.map((char: string) =>
      char.charCodeAt(0)
    );
    const messageArrayMaptoOffset: Array<string> = messageArrayMap.map(
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
    const encryptedMessageArray: Array<string> = decodedMessage.split("");
    const messageArrayMap: Array<number> = encryptedMessageArray.map(
      (char: string) => char.charCodeAt(0)
    );

    const messageArrayMaptoOffset: Array<string> = messageArrayMap.map(
      (index: number) => String.fromCharCode(index - offset)
    );
    return messageArrayMaptoOffset.join("");
  },
};

export default Spoiler;

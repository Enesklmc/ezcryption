A text encryption library that has two functions currently:

1. **Easy encryption** (makes letter "a" to letter "f".)
2. **Encryption with a password(AES)** (Requires **node.js** version **15.0.0** and up.)

# Installation
```
npm install ezcryption
```

# Usage

### Easy encryption
```js
import Spoiler from "./spoiler";

Spoiler.encrypt("This is a secret message"); // Ymnx%25nx%25f%25xjhwjy%25rjxxflj
Spoiler.decrypt("Ymnx%25nx%25f%25xjhwjy%25rjxxflj") // This is a secret message
```

------

### Encryption with a password(AES)
Returns a promise.
```js
import Spoiler from "./spoiler";

Aes.encrypt("This is a secret message", "password"); // 163e231e179e74e123e207e37e34e112e154e33e98e82e216e36e56e211e181e173e232e238e10e81e134e207e99e68e193e98e215e248e166
Aes.decrypt(
      "163e231e179e74e123e207e37e34e112e154e33e98e82e216e36e56e211e181e173e232e238e10e81e134e207e99e68e193e98e215e248e166",
      "password"
    ); // This is a secret message
```

# Optional
These options are not required but for more flexibility.

### Encryption with a password(AES) options:

**salt:** A string for PBKDF2(key derivation function)  
**iv:** Initialization vector for Aes. An array that contains 16 integer between 0 to 255 value range

Example:  
```js
import Aes from "./aes";

const customIv = new Uint8Array([
  4, 214, 15, 14, 139, 254, 2, 1, 28, 19, 204, 14, 15, 0, 5, 6,
]);
const customSalt = "custom salt";

await Aes.encrypt("This is a secret message", "password", {
  options: { iv: iv, salt: "my custom salt" },
})
    
await Aes.decrypt(
  "133e161e9e44e222e147e185e178e37e205e95e7e8e253e6e190e118e190e0e11e163e159e141e24e61e246e176e206e2e119e226e163",
  "password",
  {
    options: { iv: iv, salt: "my custom salt" },
  }
)
```


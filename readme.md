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

To apply:  
```js
import Aes from "./aes";

const customIv = new Uint8Array([
  4, 214, 15, 14, 139, 254, 2, 1, 28, 19, 204, 14, 15, 0, 5, 6,
]);


```


A text encryption library has two functions:

1. Easy encryption (makes letter "a" to letter "f")
2. Encryption with a password(AES). Requires **node.js** version **15.0.0** and up.

## Installation
```
npm install ezcryption
```

## Usage

### Easy encryption
```js
import Spoiler from "./spoiler";

Spoiler.encrypt("This is a secret message"); // Ymnx%25nx%25f%25xjhwjy%25rjxxflj
Spoiler.decrypt("Ymnx%25nx%25f%25xjhwjy%25rjxxflj") // This is a secret message
```

------

### Encryption with a password(AES)
```js
import Spoiler from "./spoiler";
Aes.encrypt("This is a secret message", "password")
Spoiler.encrypt("This is a secret message"); // Ymnx%25nx%25f%25xjhwjy%25rjxxflj
Spoiler.decrypt("Ymnx%25nx%25f%25xjhwjy%25rjxxflj") // This is a secret message
```



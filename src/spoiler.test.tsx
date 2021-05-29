import Spoiler from "./spoiler";

test("Spoiler encryption: ", async () => {
  expect(Spoiler.encrypt("This is a secret message")).toBe(
    "Ymnx%25nx%25f%25xjhwjy%25rjxxflj"
  );
});

test("Spoiler decryption: ", async () => {
  expect(Spoiler.decrypt("Ymnx%25nx%25f%25xjhwjy%25rjxxflj")).toBe(
    "This is a secret message"
  );
});

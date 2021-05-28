import Aes from "./aes";

test("Aes encryption (no options)", async () => {
  expect(await Aes.encrypt("This is a secret message", "password")).toBe(
    "163e231e179e74e123e207e37e34e112e154e33e98e82e216e36e56e191e157e54e44e67e182e150e61e170e186e62e23e134e190e84e12"
  );
});

test("Aes decryption (no options)", async () => {
  expect(
    await Aes.decrypt(
      "163e231e179e74e123e207e37e34e112e154e33e98e82e216e36e56e211e181e173e232e238e10e81e134e207e99e68e193e98e215e248e166",
      "password"
    )
  ).toBe("This is a secret message");
});

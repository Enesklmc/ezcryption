const iv = new Uint8Array([
  4, 214, 15, 14, 139, 254, 2, 1, 28, 19, 204, 14, 15, 0, 5, 6,
]);
import Aes from "../../dist/aes";

/*
Without any option
*/
test("Aes encryption (no options)", async () => {
  //@ts-ignore
  expect(await Aes.encrypt("This is a secret message", "password")).toBe(
    "163e231e179e74e123e207e37e34e112e154e33e98e82e216e36e56e211e181e173e232e238e10e81e134e207e99e68e193e98e215e248e166"
  );
});

test("Aes decryption (no options)", async () => {
  expect(
    //@ts-ignore
    await Aes.decrypt(
      "163e231e179e74e123e207e37e34e112e154e33e98e82e216e36e56e211e181e173e232e238e10e81e134e207e99e68e193e98e215e248e166",
      "password"
    )
  ).toBe("This is a secret message");
});

/*
With given Salt
*/
test("Aes encryption (with salt option)", async () => {
  expect(
    await Aes.encrypt("This is a secret message", "password", {
      options: { salt: "my custom salt" },
    })
  ).toBe(
    "181e84e62e138e235e216e18e66e126e57e224e48e66e80e195e166e116e119e198e72e25e99e17e75e21e187e122e234e146e182e116e74"
  );
});

test("Aes decryption (with salt option)", async () => {
  expect(
    await Aes.decrypt(
      "181e84e62e138e235e216e18e66e126e57e224e48e66e80e195e166e116e119e198e72e25e99e17e75e21e187e122e234e146e182e116e74",
      "password",
      {
        options: { salt: "my custom salt" },
      }
    )
  ).toBe("This is a secret message");
});

/*
with given Initialization vector
*/
test("Aes encryption (with Initialization vector)", async () => {
  expect(
    await Aes.encrypt("This is a secret message", "password", {
      options: { iv: iv },
    })
  ).toBe(
    "120e159e84e239e153e116e215e185e107e203e82e216e15e45e133e109e76e183e35e150e140e188e12e9e137e204e144e158e23e115e187e96"
  );
});

test("Aes decryption (with Initialization vector)", async () => {
  expect(
    await Aes.decrypt(
      "120e159e84e239e153e116e215e185e107e203e82e216e15e45e133e109e76e183e35e150e140e188e12e9e137e204e144e158e23e115e187e96",
      "password",
      {
        options: { iv: iv },
      }
    )
  ).toBe("This is a secret message");
});

/*
with given Salt and Initialization vector
*/
test("Aes encryption (with salt and Initialization vector)", async () => {
  expect(
    await Aes.encrypt("This is a secret message", "password", {
      options: { iv: iv, salt: "custom salt" },
    })
  ).toBe(
    "78e173e11e207e148e208e76e35e47e68e75e19e93e55e76e57e111e136e150e77e44e89e69e104e110e131e196e154e32e22e39e220"
  );
});

test("Aes decryption (with salt and Initialization vector)", async () => {
  expect(
    await Aes.decrypt(
      "78e173e11e207e148e208e76e35e47e68e75e19e93e55e76e57e111e136e150e77e44e89e69e104e110e131e196e154e32e22e39e220",
      "password",
      {
        options: { iv: iv, salt: "custom salt" },
      }
    )
  ).toBe("This is a secret message");
});

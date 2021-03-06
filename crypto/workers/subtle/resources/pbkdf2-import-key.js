importScripts('../../../../resources/js-test-pre.js');
importScripts("../../../resources/common.js");

description("Test importing a PBKDF2 raw key in workers");

jsTestIsAsync = true;

var nonExtractable = false;
var rawKey = asciiToUint8Array("jnOw99oOZFLIEPMr");

crypto.subtle.importKey("raw", rawKey, { name: "PBKDF2" }, nonExtractable, ["deriveKey", "deriveBits"]).then(function(result) {
    publicKey = result;

    shouldBe("publicKey.toString()", "'[object CryptoKey]'");
    shouldBe("publicKey.type", "'secret'");
    shouldBe("publicKey.extractable", "false");
    shouldBe("publicKey.algorithm.name", "'PBKDF2'");
    shouldBe("publicKey.usages", "['deriveBits', 'deriveKey']");

    finishJSTest();
})

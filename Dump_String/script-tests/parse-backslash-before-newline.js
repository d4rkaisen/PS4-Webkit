shouldBe('"test\
string with CR LF"', '"teststring with CR LF"');

shouldThrow(`"test\


shouldBe('"test\

shouldBe('"test\
string with LF"', '"teststring with LF"');
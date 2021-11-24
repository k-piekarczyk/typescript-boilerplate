import { greet, upper } from "../main";

test("greeting", () => {
    expect(greet("Foo")).toBe("Hello, Foo!");
});

test("upper case", () => {
    expect(upper("Hello :)")).toBe("HELLO :)");
});

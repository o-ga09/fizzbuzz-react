import { FizzBuzz } from "../fizzbuzz";

describe("FizzBuzzのテスト", () => {
    test("1の時、文字列にして返す。", () => {
        const fizzbuzz = new FizzBuzz();
        const actual = fizzbuzz.convert(1);
        expect(actual).toEqual("1");
    });

    test("2の時、文字列にして返す。", () => {
        const fizzbuzz = new FizzBuzz();
        const actual = fizzbuzz.convert(2);
        expect(actual).toEqual("2");
    });

    test("3の時、fizzという文字列を返す。", () => {
        const fizzbuzz = new FizzBuzz();
        const actual = fizzbuzz.convert(3);
        expect(actual).toEqual("fizz");
    });

    test("4の時、文字列を返す。", () => {
        const fizzbuzz = new FizzBuzz();
        const actual = fizzbuzz.convert(4);
        expect(actual).toEqual("4");
    });

    test("5の時、buzzという文字列を返す。", () => {
        const fizzbuzz = new FizzBuzz();
        const actual = fizzbuzz.convert(5);
        expect(actual).toEqual("buzz");
    });

    test("6の時、fizzという文字列を返す。", () => {
        const fizzbuzz = new FizzBuzz();
        const actual = fizzbuzz.convert(6);
        expect(actual).toEqual("fizz");
    });

    test("7の時、文字列を返す。", () => {
        const fizzbuzz = new FizzBuzz();
        const actual = fizzbuzz.convert(7);
        expect(actual).toEqual("7");
    });

    test("8の時、文字列を返す。", () => {
        const fizzbuzz = new FizzBuzz();
        const actual = fizzbuzz.convert(8);
        expect(actual).toEqual("8");
    });

    test("9の時、fizzという文字列を返す。", () => {
        const fizzbuzz = new FizzBuzz();
        const actual = fizzbuzz.convert(9);
        expect(actual).toEqual("fizz");
    });

    test("10の時、buzzという文字列を返す。", () => {
        const fizzbuzz = new FizzBuzz();
        const actual = fizzbuzz.convert(10);
        expect(actual).toEqual("buzz");
    });

    test("11の時、文字列を返す。", () => {
        const fizzbuzz = new FizzBuzz();
        const actual = fizzbuzz.convert(11);
        expect(actual).toEqual("11");
    });

    test("12の時、fizzという文字列を返す。", () => {
        const fizzbuzz = new FizzBuzz();
        const actual = fizzbuzz.convert(12);
        expect(actual).toEqual("fizz");
    });

    test("13の時、文字列を返す。", () => {
        const fizzbuzz = new FizzBuzz();
        const actual = fizzbuzz.convert(13);
        expect(actual).toEqual("13");
    });

    test("14の時、文字列を返す。", () => {
        const fizzbuzz = new FizzBuzz();
        const actual = fizzbuzz.convert(14);
        expect(actual).toEqual("14");
    });

    test("15の時、fizzbuzzという文字列を返す。", () => {
        const fizzbuzz = new FizzBuzz();
        const actual = fizzbuzz.convert(15);
        expect(actual).toEqual("fizzbuzz");
    });
});

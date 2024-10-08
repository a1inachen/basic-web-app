import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "My andrew id is hehehaha"
          ));
    });

    test('should return name', () => {
        const query = "your name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "teamapi"
          ));
    });

    test('should return cube square num', () => {
        const query = "both a square and a cube: 3375, 1649, 4404, 4225, 3905, 64, 4084?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "64"
          ));
    });

    test('should return largest num', () => {
        const query = "largest: 30, 6, 46?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "46"
          ));
    });

    test('should return mult num', () => {
        const query = "What is 42 multiplied by 17?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "714"
          ));
    });

    test('should return sum num', () => {
        const query = "What is 42 plus 17?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "59"
          ));
    });

    test('should return minus num', () => {
        const query = "What is 75 minus 59?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "16"
          ));
    });

    test('should return power num', () => {
        const query = "What is 2 to the power of 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "8"
          ));
    });
});
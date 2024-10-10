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
        const query = "largest: 95, 69, 49?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "95"
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
});
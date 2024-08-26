import { isValidName, isValidDate } from "../scripts/lloyds.js";

describe('test suite: userInput', () => {
    it('returns true when valid name', () => {
        expect(isValidName('John')).toBe(true);
    });

    it('returns false when invalid name', () => {
        expect(isValidName('J@mes')).toBe(false);
    });

    it('returns true when valid start date', () => {
        expect(isValidDate('08/26/2029')).toBe(true);
    });

    it('returns false when invalid start date', () => {
        expect(isValidDate('08/26/2020')).toBe(false);
    })

    const today = new Date();
    it('returns true when today date selected', () => {
        expect(isValidDate(today)).toBe(true);
    })
});
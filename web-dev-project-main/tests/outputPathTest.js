
import { filterRelevant } from "../scripts/lloyds.js";


describe('test suite: output for training path', () => {
    it('proves that the filter feature is there', () => {
        expect(filterRelevant()).not.toEqual('');
    });
});


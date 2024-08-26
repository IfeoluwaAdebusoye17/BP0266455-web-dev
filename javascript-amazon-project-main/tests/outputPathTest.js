
import { filterRelevant } from "../scripts/lloyds.js";


describe('test suite: output for training path', () => {
    it('proves that the function is there which filters through selectable drop down', () => {
        expect(filterRelevant()).not.toEqual('');
    });
});


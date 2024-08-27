
import { filterRelevant } from "../scripts/lloyds.js";
import { displayPaths } from "../scripts/lloyds.js";


describe('test suite: output for training path', () => {
    it('proves that the filter feature is there', () => {
        expect(filterRelevant()).not.toEqual('');
    });

    /*
    it('returns values when one of drop down selected', () => {
        expect(displayPaths({
            "id": "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            "image": "images/products/sales.jpg",
            "name": "Sales",
            "rating": {
                "stars": 4,
                "count": 127
            },
            "courseOne": "In this introduction to Sales course at Lloyds we will be getting to know the metrics"
        })).toEqual(true);
    });
    */
});


import { selectPath, currentSelectedPath, loadFromStorage } from "../data/selected-path-status.js";

/*Mocking to remove all items from program landing page*/
/*We have also mocked set so our tests do not effect the local storage*/


describe('test suite: selectedProgram', () => {
    it('takes user to selected program', () => {
        spyOn(localStorage, 'setItem');
        
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });
        console.log(localStorage.getItem('storedPath'));
        loadFromStorage();

        selectPath('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(currentSelectedPath.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(currentSelectedPath[0].pathId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

    });

    it('replaces already selected program', () => {
        spyOn(localStorage, 'setItem');

        selectPath('15b6fc6f-327a-4ec4-896f-486349e85a3d');
        expect(currentSelectedPath.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(currentSelectedPath[0].pathId).toEqual('15b6fc6f-327a-4ec4-896f-486349e85a3d');

    });

    

})


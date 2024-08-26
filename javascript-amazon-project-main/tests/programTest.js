import { selectProgram, program, loadFromStorage } from "../data/program.js";

/*Mocking to remove all items from program landing page*/
/*We have also mocked set so our tests do not effect the local storage*/


describe('test suite: selectedProgram', () => {
    it('takes user to selected program', () => {
        spyOn(localStorage, 'setItem');
        
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });
        console.log(localStorage.getItem('cart'));
        loadFromStorage();

        selectProgram('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(program.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(program[0].courseId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

    });

    it('replaces already selected program', () => {
        spyOn(localStorage, 'setItem');

        selectProgram('15b6fc6f-327a-4ec4-896f-486349e85a3d');
        expect(program.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(program[0].courseId).toEqual('15b6fc6f-327a-4ec4-896f-486349e85a3d');

    });

    

})


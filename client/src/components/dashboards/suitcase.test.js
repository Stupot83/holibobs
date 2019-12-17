import Suitcase from "./Suitcase.js"

describe('Suitcase', () => {

    it('can find the number of days in a holiday', () => {
        let suitcase = new Suitcase("2020/12/13", "2020/12/15")
        console.log(suitcase, "My days are empty")
        suitcase.getHolidayLength();
        console.log(suitcase, "My state updated")

        expect(suitcase.state.holidayLength).toBe(2);
    });

});

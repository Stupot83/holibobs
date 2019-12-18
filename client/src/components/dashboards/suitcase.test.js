import Suitcase from "./Suitcase.js"

describe('Suitcase', () => {

    it('can find the number of days in a holiday', () => {
        let suitcase = new Suitcase({ startDate: "2020-12-13", endDate: "2020-12-15"})
        suitcase.componentDidMount();
        expect(suitcase.state.holidayLength).toBe(2);
    });

    


});


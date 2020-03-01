describe("sumSalaries", function () {
    it("Сумма зарплат", function() {
        let obj = {
            "John": 100,
            "Pete": 300,
            "Mary": 250
        };
        assert.equal(sumSalaries(obj), 650);
    });

    it("Сумма зарплат 0 при пустом объекте", function() {
        assert.strictEqual(sumSalaries({}), 0);
    });
});
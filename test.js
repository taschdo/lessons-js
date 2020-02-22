describe("ucFirst", function () {
    it('Переводит первый символ в верхний регистр', function () {
        assert.strictEqual(ucFirst('john'), 'John');
    });

    it('Проверка на пустую строку', function () {
        assert.strictEqual(ucFirst(''), '');
    });
});
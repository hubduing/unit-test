// documentation jest practice
test('два плюс два равно четыре', () => {
  expect(2+2).toBe(4); // toBe is used Object.is
})

test("присваивание объекту", () => {
  const data = {first: 1};
  data['two'] = 2;
  expect(data).toEqual({first: 1, two: 2}); // toEqual точное совпадение
})
test('сложение положительных чисел не равно нулю', () => {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      expect(i+j).not.toBe(0); // проверка на противоположность с .not
    }
  }
})
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('ноль', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// numbers

test('два плюс два', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe и toEqual эквивалентны по отношению к числам
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
// string
test('в команде нет места Я', () => {
  expect('команда').not.toMatch(/Я/);
});

test('но есть "ася" в Васе', () => {
  expect('Вася').toMatch(/ася/);
});
// array
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});
// исключения
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});

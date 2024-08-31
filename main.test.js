const gradeCategory = require('./main');

test('should return "A" for scores 90 and above', () => {
    expect(gradeCategory(90)).toBe("A");
    expect(gradeCategory(95)).toBe("A");
    expect(gradeCategory(100)).toBe("A");
});

test('should return "B" for scores between 80 and 89', () => {
    expect(gradeCategory(80)).toBe("B");
    expect(gradeCategory(85)).toBe("B");
    expect(gradeCategory(89)).toBe("B");
});

test('should return "C" for scores between 70 and 79', () => {
    expect(gradeCategory(70)).toBe("C");
    expect(gradeCategory(72)).toBe("C");
    expect(gradeCategory(78)).toBe("C");
});

test('should return "D" for scores between 60 and 69', () => {
    expect(gradeCategory(60)).toBe("D");
    expect(gradeCategory(65)).toBe("D");
    expect(gradeCategory(69)).toBe("D");
});

test('should return "F" for scores below 60', () => {
    expect(gradeCategory(59)).toBe("F");
    expect(gradeCategory(50)).toBe("F");
    expect(gradeCategory(0)).toBe("F");
});

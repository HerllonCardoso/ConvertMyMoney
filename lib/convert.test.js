const convert = require('./convert')

test('convert 4 to 4', () =>{
    expect(convert.convert(4,4)).toBe(16)
})

test('convert cotacao 0 and quantidade 4', () =>{
    expect(convert.convert(0,4).toBe(0))
})
test('toMoney converts float', () =>{
    expect(convert.convert(2).toBe('2.00'))
})
test('toMoney converts string', () =>{
    expect(convert.convert('2').toBe('2.00'))
})
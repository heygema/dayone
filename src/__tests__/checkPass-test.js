import checkPass from '../day3/checkPassword';

it('should return false for all bad password', () => {
  expect(checkPass('bksd').success).toEqual(false);
  expect(checkPass('bksd').reason.arrayType.length).toEqual(2);
  expect(checkPass('bK7').reason.arrayType.length).toEqual(1);
});

it('should return true for all good password', () => {
  expect(checkPass('bksd&8734').success).toEqual(true);
  expect(checkPass('bksd&8734').reason.arrayType.length).toEqual(1);
});

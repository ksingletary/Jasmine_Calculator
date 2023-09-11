

it('should calculate the monthly rate', function() {
  const values = {
    amount: 20000,
    years: 5,
    rate: 2.3
  };
  expect(calculateMonthlyPayment(values)).toEqual('353.19');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

it("should handle high interest rates", function() {
  const values = {
    amount: 1000,
    years: 40,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('82.50');
});

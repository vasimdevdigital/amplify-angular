

exports.handler = async (event) => {
    const taxTable={
        NY:8.449,CA:8.56
    };
    let price;
    let taxRate;

    price = event.price;
    taxRate = taxTable[event.location];

    let calculatedTax = (taxRate/100) * price;
    calculatedTax = Math.round((calculatedTax + Number.EPSILON) *100)/100;

    const finalPrice = (calculatedTax + price);
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
      headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
     }, 
        body: {calculatedTax,price},
    };
    return response;
};

const prods = [{
    "count": 7,
    "item": ["socks", "shirts", "pants", "hats"],
    "manufacturer": {
        "name": "Molly's seamstress shop",
        "id": 39233,
        "location": {
            "address": "123 Main St",
            "city": "Anytown",
            "state": "CA",
            "zip": 85705
        }
    },
    "totalprice": 392,
    "purchasedate": "30-05-2022",
    "country": "usa"
}];

// 1. All records between 40 and 50.
console.log("------------01------------")
const recordsBetween40And50 = prods.filter(record => record.totalprice >= 40 && record.totalprice <= 50);
console.log("Records between 40 and 50:", recordsBetween40And50);

// 2. Manufacturer name and address.
console.log("------------02------------")
const manufacturerInfo = prods.map(record => ({
    name: record.manufacturer.name,
    address: record.manufacturer.location.address
}));
console.log("Manufacturer name and address:", manufacturerInfo);

// 3. Total number of items in each record.
console.log("------------03------------")
const itemCountPerRecord = prods.map(record => ({
    count: record.count,
    totalItems: record.item.length
}));
console.log("Total number of items in each record:", itemCountPerRecord);

// 4. Add 5 to each record's total price.
console.log("------------04------------")
const totalPricePlus5 = prods.map(record => ({
    ...record,
    totalprice: record.totalprice + 5
}));
console.log("Total price plus 5 for each record:", totalPricePlus5);

// 5. Records having zip from 8578 to 33445.
console.log("------------05------------")
const recordsWithZipInRange = prods.filter(record => record.manufacturer.location.zip >= 8578 && record.manufacturer.location.zip <= 33445);
console.log("Records with zip from 8578 to 33445:", recordsWithZipInRange);

// 6. Records above average total price.
console.log("------------06------------")
const totalPriceArray = prods.map(record => record.totalprice);
const averageTotalPrice = totalPriceArray.reduce((acc, val) => acc + val, 0) / totalPriceArray.length;
const recordsAboveAverageTotalPrice = prods.filter(record => record.totalprice > averageTotalPrice);
console.log("Records above average total price:", recordsAboveAverageTotalPrice);

// 7. Sum of total price for all records.
console.log("------------07------------")
const sumTotalPrice = prods.reduce((acc, record) => acc + record.totalprice, 0);
console.log("Sum of total price for all records:", sumTotalPrice);

// 8. Purchased date between 2022-05-30 to 2020-06-30.
console.log("------------08------------")
const recordsBetweenDates = prods.filter(record => {
    const purchaseDate = new Date(record.purchasedate);
    return purchaseDate >= new Date("2020-06-30") && purchaseDate <= new Date("2022-05-30");
});
console.log("Records between dates:", recordsBetweenDates);

// 9. All distinct countries in the array.
console.log("------------09------------")
const distinctCountries = [...new Set(prods.map(record => record.country))];
console.log("Distinct countries:", distinctCountries);

// 10. Country, manufacturer name, and id for all records.
console.log("------------10------------")
const countryManufacturerInfo = prods.map(record => ({
    country: record.country,
    manufacturer: {
        name: record.manufacturer.name,
        id: record.manufacturer.id
    }
}));
console.log("Country, manufacturer name, and id for all records:", countryManufacturerInfo);

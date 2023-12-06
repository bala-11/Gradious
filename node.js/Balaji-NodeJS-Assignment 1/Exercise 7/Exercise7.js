var xlsx = require('xlsx');

var workbook = xlsx.readFile('./lib/marks.xlsx');

var sheetList = workbook.SheetNames;

console.log(xlsx.utils.sheet_to_json(workbook.Sheets[sheetList[0]]));

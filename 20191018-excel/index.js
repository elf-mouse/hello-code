const path = require('path');
const Excel = require('exceljs');

const oldFilename = path.join(__dirname, 'data/old.xlsx');
const newFilename = path.join(__dirname, 'data/new.xlsx');

const demo = {
  text: {
    richText: [
      {
        font: {
          underline: 'single',
          color: { argb: 'FFFF6600' },
          name: '宋体'
        },
        text: 'BalmJS'
      }
    ]
  },
  hyperlink: 'https://balmjs.com/'
};

let oldWorkbook = new Excel.Workbook();
let newWorkbook = new Excel.Workbook();
let newWorksheet = newWorkbook.addWorksheet('BalmJS');

oldWorkbook.xlsx
  .readFile(oldFilename)
  .then(() => {
    // Input
    const oldWorksheet = oldWorkbook.getWorksheet(1);
    oldWorksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
      console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values));
      row.eachCell(function(cell, colNumber) {
        // console.log('Cell ' + colNumber + ' = ' + cell.value);
        if (colNumber === 2 && typeof cell.value === 'object') {
          cell.value = demo;
        }
      });

      newWorksheet.addRow(row.values);
    });

    // Output
    newWorkbook.xlsx
      .writeFile(newFilename)
      .then(() => {
        const micros = stopwatch.microseconds;
        console.log('Done.');
        console.log('Time taken:', micros);
      })
      .catch(error => {
        console.log(error.message);
      });
  })
  .catch(error => {
    console.log(error.message);
  });

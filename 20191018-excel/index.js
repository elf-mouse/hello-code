const path = require("path");
const Excel = require("exceljs");

const oldFilename = path.join(__dirname, "data/old.xlsx");
const newFilename = path.join(__dirname, "data/new.xlsx");

let oldWorkbook = new Excel.Workbook();
let newWorkbook = new Excel.Workbook();

oldWorkbook.xlsx
  .readFile(oldFilename)
  .then(() => {
    const oldWorksheet = oldWorkbook.getWorksheet(1);
    let newWorksheet = newWorkbook.addWorksheet("template");

    // Input
    oldWorksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
      // console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));

      row.eachCell(function(cell, colNumber) {
        // console.log("Cell " + colNumber + " = " + JSON.stringify(cell.value));
        if (colNumber === 7 && typeof cell.value === "object") {
          let hyperlink = cell.value.hyperlink.replace(
            /AP%20Filling/,
            "AP%30Filling"
          );
          cell.value = {
            text: cell.value.text,
            hyperlink
          };
        }
      });

      newWorksheet.addRow(row.values);
    });

    // Test
    // newWorksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
    //   if (rowNumber < 100) {
    //     console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
    //   }
    // });

    // Output
    newWorkbook.xlsx
      .writeFile(newFilename)
      .then(() => {
        const micros = stopwatch.microseconds;
        console.log("Done.");
        console.log("Time taken:", micros);
      })
      .catch(error => {
        console.log(error.message);
      });
  })
  .catch(error => {
    console.log(error.message);
  });

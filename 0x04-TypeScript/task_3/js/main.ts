/// <reference path="./crud.d.ts" />

// Import types from interface.ts
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Import everything from crud.js as CRUD

// Create a row object
const row: RowElement = {
  firstName: 'Seun',
  lastName: 'kayode'
};

const newRowID: RowID = CRUD.insertRow(row);
//const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);


//const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = { ...row, age: 23 };

CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(newRowID);
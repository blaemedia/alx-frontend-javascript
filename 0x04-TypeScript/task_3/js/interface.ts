// Create a type RowID and set it equal to number
type RowID =number;

// Create an interface RowElement
interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

// Export them for use in other files
export { RowID, RowElement };
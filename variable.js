//? Variable const and let

/**
 * TODO: Use const when the variable references should not be reassigned
 * TODO: it does not mean that the variable is immutable for the object or the arrays the contents can still be changed
 * TODO: Best Practice is to assign const by default unless we know we have to reassign it again
 */

/**
 *! We will be using the let when we know that the variable will be change or reassign later
 *! Block Scoped therefore the variable is only exist only through the curley braces
 */

let name = "GIAS";
name = "GIAS UDDIN";
console.log(name);

const university = "Daffodil International University";
console.log(university);

/**
 * Represents an exception thrown when an operation is performed on a data structure that is full.
 * @extends Error
 */
export class OutOfBoundsException extends Error {
  /**
   * Creates a new OutOfBoundsException.
   * @param {string} message - The error message.
   */
  constructor(message = "Out of bounds") {
    super(message);
    this.name = "OutOfBoundsException";
  }
}

/**
 * Represents an exception thrown when an operation is performed on a data structure that is empty.
 * @extends Error
 */
export class UnderflowException extends Error {
  /**
   * Creates a new UnderflowException.
   * @param {string} message - The error message.
   */
  constructor(message = "Underflow: The structure is empty") {
    super(message);
    this.name = "UnderflowException";
  }
}

/**
 * Represents an exception thrown when an operation is performed on a data structure that exceeds its maximum size.
 * @extends Error
 */
export class OverflowException extends Error {
  /**
   * Creates a new OverflowException.
   * @param {string} message - The error message.
   */
  constructor(message = "Overflow: Maximum size exceeded") {
    super(message);
    this.name = "OverflowException";
  }
}

/**
 * Represents an exception thrown when an operation is performed on a data structure that contains non numeric values.
 * @extends Error
 */
export class NonNumericValuesException extends Error {
  /**
   * Creates a new NonNumericValuesException.
   * @param {string} message - The error message.
   */
  constructor(message = "Non-Numeric Values: Contains non numeric values.") {
    super(message);
    this.name = "NonNumericValuesException";
  }
}

/**
 * Represents an exception thrown when a position is out of range of the structure.
 * @extends Error
 */
export class OutOfBoundsException extends Error {
  /**
   * Creates a new OutOfBoundsException.
   * @param {string} message - The error message.
   */
  constructor(message = "Out of bounds: The position is out of range") {
    super(message);
    this.name = "OutOfBoundsException";
  }
}

/**
 * Represents an exception thrown when a structure is empty.
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
 * Represents an exception thrown when a structure is full.
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
 * Represents an exception thrown when a value is non numeric.
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

/**
 * Represents an exception thrown when a value is non string.
 * @extends Error
 */
export class NonStringValuesException extends Error {
  constructor(message = "Non-String Values: Contains non string values.") {
    super(message);
    this.name = "NonStringValuesException";
  }
}


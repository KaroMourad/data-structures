/**
 * Represents an error handler.
 * @class ErrorHandler
 * @property {Error} error - The error object.
 */
class ErrorHandler {
  /**
   * Creates an instance of ErrorHandler.
   * @param {Error|string} e - The error object or message.
   */
  constructor(e) {
    if(e instanceof Error) {
      this.error = e;
    }
    else if(typeof e === "string") {
      this.error = new Error(e);
    }
    else {
      this.error = new Error("Uknown error");
    }
  }

  get message() {
    return this.error.message;
  }
}

export default ErrorHandler;
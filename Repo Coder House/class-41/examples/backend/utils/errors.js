export class CustomError {
  constructor(status, message, metadata = {}) {
    this.status = status
    this.message = message
    this.metadata = metadata
  }
}

export class NotFoundError extends CustomError {
  constructor(message, metadata = {}) {
    super(404, message, metadata)
  }
}
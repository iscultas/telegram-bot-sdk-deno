import { ResponseParameters } from "./types/response.ts";

export default class TelegramError extends Error {
  errorCode: number;
  parameters: ResponseParameters | undefined;

  constructor(
    message: string,
    errorCode: number,
    parameters?: ResponseParameters,
  ) {
    super(message);

    this.errorCode = errorCode;
    this.parameters = parameters;
  }
}

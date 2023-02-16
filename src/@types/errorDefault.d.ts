export interface ResponseServerErrorProps {
  response: {
    status: number;
    data: {
      message: string;
    }
  }
}

export type DefaultError = ResponseServerErrorProps
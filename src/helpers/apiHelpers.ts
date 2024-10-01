import { AxiosError } from 'axios';
import { ERROR_MESSAGES } from '../constants/apiConstants';

/**
 * Helper to extract error message from Axios error
 * @param error - Axios error object
 * @returns String error message
 */
export const getErrorMessage = (error: AxiosError): string => {
  if (!error.response) {
    return ERROR_MESSAGES.networkError;
  }
  return ERROR_MESSAGES.fetchFailed;
};

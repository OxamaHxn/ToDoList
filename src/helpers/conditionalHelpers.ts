/**
 * Helper function to get the appropriate text color for the quote.
 * @param status - The status of the API call (loading, failed, succeeded).
 * @returns The color string based on the status.
 */
export const getQuoteTextColor = (status: string): string => {
    return status === 'failed' ? 'red' : '#fff';
  };
  
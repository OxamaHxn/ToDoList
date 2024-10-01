/**
 * Represents the state for the API slice.
 */
export interface ApiState {
    quote: string;
    image: string;
    tip: string;
    status: 'idle' | 'loading' | 'failed';
  }
  
  /**
   * Represents the payload returned by the API when a quote is fetched.
   */
  export interface QuoteResponse {
    q: string; 
    a: string; 
  }

export interface ApiState {
  quote: string;
  image: string;
  tip: string;
  status: 'idle' | 'loading' | 'failed';
}

  
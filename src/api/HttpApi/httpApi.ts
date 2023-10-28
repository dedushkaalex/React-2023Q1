export interface HttpClientOptions {
  baseURL: string;
  headers: HeadersInit;
}

type Options = Record<string, unknown>;

class HttpClient {
  protected baseUrl;
  protected headers: Headers;

  constructor(options: HttpClientOptions) {
    this.baseUrl = options.baseURL;
    this.headers = new Headers(options.headers);
  }

  public setHeaders(key: string, value: string) {
    this.headers.set(key, value);
    return this;
  }

  private async fetchJSON(endpoint: string, options: Options) {
    const res = await fetch(this.baseUrl + endpoint, {
      ...options,
      headers: this.headers,
    });

    if (!res.ok) throw new Error(res.statusText);

    if (options.parseResponse !== false && res.status !== 204) return res.json();

    return undefined;
  }

  protected get(endpoint: string, options: RequestInit = {}, query?: Record<string, string>) {
    const url = query
      ? endpoint +
        '?' +
        new URLSearchParams({
          ...query,
        })
      : endpoint;

    return this.fetchJSON(url, {
      ...options,
      method: 'GET',
    });
  }

  protected post(endpoint: string, body: BodyInit, options: RequestInit = {}) {
    return this.fetchJSON(endpoint, {
      ...options,
      body: JSON.stringify(body),
      method: 'POST',
    });
  }
}

export default HttpClient;

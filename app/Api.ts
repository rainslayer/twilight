/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** ComputerInformationDto */
export interface ComputerInformationDto {
  /** Build Id */
  build_id?: string | null;
  /** Infection Date */
  infection_date?: string | null;
  /** Ip */
  ip?: string | null;
  /** Malware Path */
  malware_path?: string | null;
  /** Username */
  username?: string | null;
  /** Country */
  country?: string | null;
  /** Os */
  os?: string | null;
  /** Hwid */
  hwid?: string | null;
}

/** CredentialDto */
export interface CredentialDto {
  /** Username */
  username: string;
  /** Password */
  password: string;
}

/** CurrentUserDto */
export interface CurrentUserDto {
  /** Name */
  name: string;
  /** Email */
  email: string;
  /** Credits */
  credits: number;
}

/** DomainDataDto */
export interface DomainDataDto {
  /** Url */
  url: string;
  /** Creds */
  creds: CredentialDto[];
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** InfectionDto */
export interface InfectionDto {
  /** Id */
  id: string;
  /** Log Checksum */
  log_checksum: string;
  /** Log File Name */
  log_file_name: string;
  /** Stealer Type */
  stealer_type: string;
  computer_information: ComputerInformationDto;
  /** Credentials */
  credentials: DomainDataDto[];
}

/** InfectionsSearchRequest */
export interface InfectionsSearchRequest {
  /** Domains */
  domains?: string[] | null;
  /** Root Domains */
  root_domains?: string[] | null;
  /** App Domains */
  app_domains?: string[] | null;
  /** Email Domains */
  email_domains?: string[] | null;
  /** Ips */
  ips?: string[] | null;
  /** Infection Date From */
  infection_date_from?: string | null;
  /** Infection Date To */
  infection_date_to?: string | null;
  /** Next */
  next?: string | null;
  /**
   * Size
   * @default 100
   */
  size?: number;
}

/** InfectionsSearchResponseDto */
export interface InfectionsSearchResponseDto {
  /**
   * Search Id
   * unique identifier of the search. need to be sent in the following pages requests
   */
  search_id: string;
  /**
   * Search Consumed Credits
   * Credits consumed for this call
   */
  search_consumed_credits: number;
  /**
   * Credits Left
   * Credits left for this user after executing this call
   */
  credits_left: number;
  /**
   * Next
   * Value from previous page 'next' value that used to fetch the next page
   */
  next: string | null;
  /**
   * Total Items Count
   * Total items in all pages match this query
   */
  total_items_count: number;
  /**
   * Items Count
   * Total items in this page
   */
  items_count: number;
  /**
   * Data
   * Page with results for this query
   */
  data: InfectionDto[];
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    headers: {},
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title FastAPI
 * @version 3.1
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  infections = {
    /**
     * @description search for infections based on different criteria. The result contains any infected machine that contains at least one of the criterias.<br> in case number of results is bigger then the current page size (total_items_count > items_count) - send more calls that contains "next" field as extracted from the previous response. Time filters are in format yyyy-MM-dd'T'HH:mm:ss'Z' only!
     *
     * @tags infections
     * @name SearchDataInfectionsSearchPost
     * @summary Search Data
     * @request POST:/infections/_search
     * @secure
     */
    searchDataInfectionsSearchPost: (data: InfectionsSearchRequest, params: RequestParams = {}) =>
      this.request<InfectionsSearchResponseDto, HTTPValidationError>({
        path: `/infections/_search`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * @description returns current user data and available credits
     *
     * @tags users
     * @name CurrentUserUsersCurrentGet
     * @summary Current User
     * @request GET:/users/current
     * @secure
     */
    currentUserUsersCurrentGet: (params: RequestParams = {}) =>
      this.request<CurrentUserDto, any>({
        path: `/users/current`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}

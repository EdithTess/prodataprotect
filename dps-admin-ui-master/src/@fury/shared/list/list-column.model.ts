export class ListColumn {
  name?: string;
  property?: string;
  visible?: boolean;
  isModelProperty?: boolean;
  displayFn: any;
}
export enum DataTypeOperation {
  /** Any */
  ANY = 'ANY',
  /** Equal to */
  EQ = 'EQ',
  /** Equals (ignore case) to * */
  EQ_IGNORE_CASE = 'EQ_IGNORE_CASE',
  /** Not equal to */
  NEQ = 'NEQ',
  /** Starts with */
  STARTS = 'STARTS',
  /** Starts with (ignore case) */
  STARTS_IGNORE_CASE = 'STARTS_IGNORE_CASE',
  /** Ends with */
  ENDS = 'ENDS',
  /** Ends with (ignore case) */
  ENDS_IGNORE_CASE = 'ENDS_IGNORE_CASE',
  /** Is empty */
  EMPTY = 'EMPTY',
  /** Is not empty */
  NOT_EMPTY = 'NOT_EMPTY',
  /** Contains */
  CONTAINS = 'CONTAINS',
  /** Is empty (ignore case) */
  CONTAINS_IGNORE_CASE = 'CONTAINS_IGNORE_CASE',
  /** In */
  IN = 'IN',
  /** Not In */
  NIN = 'NIN',
  /** Between */
  BETWEEN = 'BETWEEN',
  /** Greater than */
  GT = 'GT',
  /** Greater than equal to */
  GTE = 'GTE',
  /** Less than */
  LT = 'LT',
  /** Less than equal to */
  LTE = 'LTE',
  /** Date less than or equal or null */
  DLTEN = 'DLTEN',
  /** Date greater than or equal or null */
  DGTEN = 'DGTEN',
  /** Date less than or null */
  DLTN = 'DLTN',
  /** Date greater than or null */
  DGTN = 'DGTN'
}

export enum DataType {
  /** The data type representing <code>String</code> values * */
  TEXT = 'TEXT',
  /** The data type representing <code>Number</code> values * */
  DECIMAL = 'DECIMAL',
  INTEGER = 'INTEGER',
  /** The data type representing <code>Date</code> values * */
  DATE = 'DATE',
  UDATE = 'UDATE',
  TIME = 'TIME',
  DATETIME = 'DATETIME',
  /** The data type representing <code>Enumeration</code> values * */
  ENUMERATION = 'ENUMERATION',
  /** The data type representing <code>Boolean</code> values * */
  BOOLEAN = 'BOOLEAN',
}

export const TextFinderOptions: IFinderOptions[] = [
  {name: '', operator: DataTypeOperation.ANY},
  {name: 'Equals', operator: DataTypeOperation.EQ},
  {name: 'Equals (ignore case)', operator: DataTypeOperation.EQ_IGNORE_CASE},
  {name: 'Not equal', operator: DataTypeOperation.NEQ},
  {name: 'Starts', operator: DataTypeOperation.STARTS},
  {name: 'Starts (ignore case)', operator: DataTypeOperation.STARTS_IGNORE_CASE},
  {name: 'Ends', operator: DataTypeOperation.ENDS},
  {name: 'Ends (ignore case)', operator: DataTypeOperation.ENDS_IGNORE_CASE},
  {name: 'Contains', operator: DataTypeOperation.CONTAINS},
  {name: 'Contains (ignore case)', operator: DataTypeOperation.CONTAINS_IGNORE_CASE},
  {name: 'Empty', operator: DataTypeOperation.EMPTY},
  {name: 'Not empty', operator: DataTypeOperation.NOT_EMPTY}
];

export const DateFinderOptions: IFinderOptions[] = [
  {name: '', operator: DataTypeOperation.ANY},
  {name: 'Equals', operator: DataTypeOperation.EQ},
  {name: 'Equals ignore case', operator: DataTypeOperation.EQ_IGNORE_CASE},
  {name: 'Not equal', operator: DataTypeOperation.NEQ},
  {name: 'After', operator: DataTypeOperation.GT},
  {name: 'After or null', operator: DataTypeOperation.DGTN},
  {name: 'After or equals', operator: DataTypeOperation.GTE},
  {name: 'After, equals or null', operator: DataTypeOperation.DGTEN},
  {name: 'Before', operator: DataTypeOperation.LT},
  {name: 'Before or null', operator: DataTypeOperation.DLTN},
  {name: 'Before or equals', operator: DataTypeOperation.LTE},
  {name: 'Before, equals or null', operator: DataTypeOperation.DLTEN},
  {name: 'Between', operator: DataTypeOperation.BETWEEN}
];


export const LookupFinderOptions: IFinderOptions [] = [
  {name: '', operator: DataTypeOperation.ANY},
  {name: 'In', operator: DataTypeOperation.IN},
  {name: 'Not in', operator: DataTypeOperation.NIN}
];

export interface IFinderColumn {
  fieldName: string;
  fieldLabel: string;
  dataType: DataType;
  fieldAlign?: ColumnAlign;
  color?: string;
}

export interface IFinderAction {
  name: string;
  tooltip?: string;
  icon: string;
  color?: string;
  order: number;
  roles: string[];
  accesses?: string[];
  fullAccess: boolean;
}

export enum ColumnAlign {
  LEFT,
  RIGHT,
  CENTER,
  JUSTIFY
}

export enum BooleanLookup {
  true = 'True',
  false = 'False'
}

/**
 * Transfer finder fields from wrapper component
 * to dialog form. It prepares the {@link ISearchRequest}
 * object to be sent to the backend API
 */
export interface IFinderField {
  label: string;
  fieldName: string;
  operators: IFinderOptions[];
  dataType: DataType;
  lookupOptions?: LookupValue[];
  active?: boolean;
  multiple?: boolean;
  selectedValues?: string[];
  selectedOperation?: DataTypeOperation;
}

export interface ISearchRequest {
  includeTotals: boolean;
  /** Indicates to exclude the retrieval of records */
  excludeRecords: boolean;
  pagination?: ISearchPagination;
  /** Indicates property fields to be retrieved */
  viewColumns?: string[];
  /** Criteria/Filters to constraint the search */
  criteria?: ISearchExpression[];
  /** Indicates how to sort the result */
  sortBy?: ISearchOrder[];
}

export interface ISearchOrder {
  ascending: boolean;
  fieldName: string;
}

export interface ISearchPagination {
  page: number;
  itemsPerPage: number;
  nextPageIndicator: boolean;
}


export interface FindDataRequest {
  isDefault: boolean;
  page: number;
  pageSize: number;
  sortColumn?: string;
  ascendingOrder?: boolean;
  viewColumn?: string[];
  criteria?: SearchCriterion[];
}


export class LookupValue {
  key: string;
  value: any;
}


export interface IFinderOptions {
  name: string;
  operator: string;
}

export interface ISearchExpression {
  expressionType: string;
  operation?: DataTypeOperation;
  dataType?: DataType;
  fieldName?: string;
  values?: string[];
  leftExpression?: ISearchExpression;
  rightExpression?: ISearchExpression;
}

export interface ISearchResult {
  totalRecords?: number;
  hasNextPage?: boolean;
  records: any[];
}


export interface CatalogRequest {
  viewColumn?: string[];
  criteria?: SearchCriterion[];
  sortColumn?: string;
  ascendingOrder?: boolean;
}


export class SearchCriterion {
  fieldName: string;
  value: any;
  value2?: any;
  operator: string;
}

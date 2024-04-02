import { ReplaySubject } from 'rxjs';

export class TimedFieldDefinition {
    dataType: string;
    fieldName: string;
    fieldDescription: string;
    pattern?: string;
    minSize?: number;
    maxSize?: number;
    primaryKey: boolean;
    required: boolean;
    // control visibility of the field in the data table view
    visible: boolean;
    editable: boolean;
    // control if the field has a list of values
    controlType: string;
    inputType: string;
    fieldComment?: string;
    lookupField: boolean;
    lookupTable?: string;
    lookupKey?: string;
    lookupValue?: string;
    lookupValues?: string[];
    hasDependentField: boolean;
    dependentField: string;
    criteria?: string[];
    lookupDescriptionTargetField: string;
    lookupTargetField: boolean;
    lookupType?: string;
    EDocUrl?: string;
    EDocDeploymentServer?: string;
}

export class TimedTableDefinition {
    tableName: string;
    tableDescription: string;
    maxResult: number;
    fields: TimedFieldDefinition[];
    sortColumn: string;
    ascendingOrder: boolean;
}

export class TimedTableResult {
    page: number;
    pageSize: number;
    sortColumn: string;
    ascendingOrder: boolean;
    resultItems: {}[];
    totalElements: number;
    totalPages: number;
}

export class LookupValue {
    constructor(public key: string, public value: string) {
    }
}

export class TimedTableUpdateEntry {
    id: string;
    entry: {};
    newValues: {};
}

export class TimedTableUpdate {
    addEntries: TimedTableUpdateEntry[];
    deleteEntries: TimedTableUpdateEntry[];
    updateEntries: TimedTableUpdateEntry[];
}

export class OriginalRowValue {
    value: string;
    isCreated: boolean;
    isDeleted: boolean;
    isUpdated: boolean;
}

export interface TimedTableMap {
    table: string;
    values: SelectListObject[];
}

export interface SelectListObject {
    key: string;
    value: string;
}

export class TimedTableArray {
    key: string;
    values: SelectListObject[];
    filteredList: ReplaySubject<SelectListObject[]>;
}

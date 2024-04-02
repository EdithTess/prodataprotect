import {DataAffectedSubCategoryModel} from './personal-data-affected.model';

export interface DataSourceCategory {
    DataCategoryID: string;
    DataCategory: string;
    SubCategories: DataSourceSubCategory[];
}

export class PersonalDataCollected {
    DataSubCategoryID: string;
    DataSubCategory: string;
    DataCategoryID: string;
    DataCategory: string;
}

export class DataSourceSubCategory {
    DataSubCategoryID: number;
    DataSubCategory: string;
    checked: boolean;
}

export class DataSourceSubCategoryChecked {
    DataSubCategoryID: number;
    DataSubCategory: string;
    checked: boolean;
}

export interface DataPurposes {
    DataPurposeID: number;
    DataPurpose: string;
}

export interface DataSources {
    DataSourceID: number;
    DataSource: string;
}

export interface Sector {
    SectorID: number;
    Sector: string;
}


export interface NatureOfBusiness {
    NatureOfBusinessCatId: number;
    NatureOfBusinessCategoryName: string;
}


export class NatureOfBusinessSubCat {
    NatureOfBusinessSubCatId: number;
    NatureOfBusinessSubCategoryName: string;
}

export class Checklist {
    ChecklistID: string;
    ChecklistName: string;
    ChecklistSection: string;
    ChecklistValue: string;
}

export class Checked {
    ChecklistID: string;
    ChecklistValue: string;
}

export class RequestMoreInfo {
    SectionID: number;
    SectionName: string;
    Fields: RequestMoreInfoField[];
}



export class RequestMoreInfoField {
    FieldID: number;
    FieldName: string;
    SectionID: number;
    SectionName: string;
    Comment: string;
}

export class $RequestMoreInfoField {
    FieldID: number;
    SectionID: number;
    Comment: string;
}

export interface ApiPayload {
    code: number;
    message: string;
    data: any;
}
  
export interface DataCategory {
    DataCategoryID: number;
    DataCategory: string;
    SubCategories: DataSubCategory[];
    DataDescription:string;
}

export interface DataPurposes {
    DataPurposeID: number;
    DataPurpose: string;
}

export interface NatureOfBusinessCat {
    NatureOfBusinessCatId: number;
    NatureOfBusinessCategoryName: string;
}

export interface NatureOfBusinessSubCat {
    NatureOfBusinessSubCatId: number;
    NatureOfBusinessSubCategoryName: string;
}

export interface DataSubCategory {
    DataCategoryID?: number;
    DataCategory?: string;    
    DataSubCategoryID?: number;
    DataSubCategory: string;
    IsChecked?:boolean;
}

export interface Organisation {
    OrganisationID: number; 
    OrganisationName: string
}

export interface OrganisationDetails{
    OrganisationID: string;
    OrganisationName: string;
    OrganizationRegNo: string;
    RegTrackingNo: string;
    YearOfStart: string;
    TIN: string;
    Status: string;
    URSBNumber: string;
    OrganizationTypeID: string;
    PublicBodyTypeID: string;
    Location: string;
    HeadOfOrganization: string;
    TitleOfOrganizationHead: string;
    PostalAddress: string;
    PhoneNumber: string;
    Landline: string;
    EmailAddress: string;
    SectorID: string;
    TotalRecordsAtRegistration: string;
    RecordPercentageGrowth: string;
    RetentionPeriod: string;
    Purpose: DataPurposes[];
    SourceOfDataID: any[];
    PersonalDataCollected: any[];
    GetConsent: string;
    StoreDataOutsideCountry: string;
    PersonalDataIsForDisclosure: string;
    CollectChildrenData: string;
    ChildDataConsentor: string;
    OrganisationCategory: OrganisationCategory[];
    PurposeForCollectingChildData: string;
    ChildResearchPurpose: string;
    EnteredOn: string;
    DPPActCategory: string[];
    DataProtectionOfficers: DataProtectionOfficer[];
    ThirdParties: any[];
    Comments: any[];
    NatureOfBusiness: any[];
    SecurityMeasure: any[];
    CurrentStepID: number;
    DPORequired: string;
    DPOName: string;
    DPOPhysicalAddress: string;
    DPOPhoneNumber: string;
    DPOEmailAddress: string;
    DPOPositionInOrganisation: string;
    SpecifyTheLaw: string;
    ServiceOrProductProvided: string;
    SpecifyLegalObligation: string;
    CurrentStepName: string;
    Countries: Country[];
    CheckList: any[];
    Attachment: string;
    Form3Attachment: string;
    ProofOfPayment: string;
    RegistrationDoneBy: string;
}
  
export interface ComplaintReason {
    ComplaintReasonID: number; 
    ComplaintReasonName: string
}

export interface ChildrenDataPurpose{
    
    ChildDataID:number;
    ChildDataPurpose:string;

}
  
export interface ComplaintRemedialAction {
    RemedialActionID: number; 
    RemedialActionName: string
}

export interface FileUpload {
    Name: string;
    Document: any;
    Size: string,    
    Base64?: any;
}

export interface DataProtectionOfficer {
    ID?: number;
    Name: string;
    PositionInOrganisation: string;
    EmailAddress: string;
    PhoneNumber: string;
    PhysicalAddress: string; 
}

export interface ThirdParty {
    ThirdPartyID?: number;
    ThirdPartyName: string;
    Purpose: string;
}

export interface CountryOfTransfer {
    CountryID?: number;
    Country: string;
    Purpose: string;
    Description: string;
}

export interface SecurityMeasure {
    ID?: number;
    SecurityMeasure: string;
}

export interface Sector {
    SectorID: number;
    Sector: string;
}

export interface OrganisationType {
    OrganisationTypeID: number;
    OrganisationType: string;
}

export interface OrganisationCategory {
    OrganisationCategoryId: number;
    OrganisationCategoryName: string;
}

export interface DataSource {
    DataSourceID: number;
    DataSource: string;
}

export interface Country {
    CountryID: number;
    Iso: string;
    Name: string;
    PhoneCode: string;
}

export interface MainActivity {
    MainActivityID?: number;
    Activity: string;
}

export interface markAsResolved{
    Comment: any[];
    
}
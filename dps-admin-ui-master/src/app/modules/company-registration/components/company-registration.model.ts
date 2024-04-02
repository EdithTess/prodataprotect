import {DocumentComment} from '../../../../@fury/shared/base-fury-form.model';
import { ThirdParty } from '../../../services/api.model';
import {DataProtectionOfficer} from '../../models/data-subject.model';
import {DataPurposes, DataSources, PersonalDataCollected} from '../../models/reference.model';
import {Country} from './countries/countries.component';

export class CompanyRegistrationModel {
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
    SourceOfDataID: DataSources[];
    PersonalDataCollected: PersonalDataCollected[];
    GetConsent: string;
    StoreDataOutsideCountry: string;
    PersonalDataIsForDisclosure: string;
    CollectChildrenData: string;
    ChildDataConsentor: string;
    OrganisationCategory: OrganisationCategory[];
    PurposeForCollectingChildData: string;
    ChildResearchPurpose: ChildrenDataPurpose[];
    EnteredOn: string;
    DPPActCategory: string[];
    DataProtectionOfficers: DataProtectionOfficer[];
    ThirdParties: ThirdParties[];
    Comments: DocumentComment[];
    NatureOfBusiness: NatureOfBusiness[];
    SecurityMeasure: SecurityMeasuresModel[];
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
    CheckList: CheckListed[];
    Attachment: string;
    Form3Attachment: string;
    ProofOfPayment: string;
    RegistrationDoneBy: string;
}

export class NewCompanyRegistrationModel {
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
    SourceOfDataID: DataSources[];
    PersonalDataCollected: PersonalDataCollected[];
    GetConsent: string;
    StoreDataOutsideCountry: string;
    PersonalDataIsForDisclosure: string;
    ChildDataConsentor: string;
    OrganisationCategory: OrganisationCategory[];
    PurposeForCollectingChildData: string;
    ChildResearchPurpose: string;
    EnteredOn: string;
    DPPActCategory: string[];
    DataProtectionOfficers: DataProtectionOfficer[];
    ThirdParties: ThirdParty[];
    Comments: DocumentComment[];
    NatureOfBusiness: NatureOfBusiness[];
    SecurityMeasure: SecurityMeasuresModel[];
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
    CheckList: CheckListed[];
    Attachment: string;
    Form3Attachment: string;
    ProofOfPayment: string;
    PRN:string;
    PurposeForCollection:string;
    ChildrenDataConsentor:string;
    CollectChildrenData:string;
    RegistrationDoneBy: string;
}

export class CheckListed {
    CheckListID: number;
    CheckListValue: string;
    CheckListName: string;
    StepID: number;
    ActionID: number;
}
export class NatureOfBusiness {
    NatureOfBusinessCatID: number;
    NatureOfBusinessCategoryName: string;
    NatureOfBusinessSubatID: number;
    NatureOfBusinessSubCategoryName: string;
}

export class OrganisationCategory {
    OrganisationCategoryId: string;
    OrganisationCategoryName: string;
}

export class ChildrenDataPurpose {
    ChildDataID: number;
    ChildDataPurpose: string;
}

export class CancelRegistration {
    RegTrackingNo:string;
    CancellationApproval:string;
    ReasonForCancellation:string;
}

export class CompanyRegistration {
    id?: number;
    oragisationName: string;
    yearOfStart: string;
    tin: string;
    ursbNumber: string;
    organisationType: string[];
    publicBody: string;
    localGovement: string;
    statute: string;
    location: string;
    headOfOganisation: string;
    titleOfOrganizationHead: string;
    postalAddress: string;
    phoneNumber: string;
    landLine: string;
    emailAddress: string;
    dpoActCategory: string [];
    sector: string;
    rolesPerformed: string [];
    mainActivities: MainActivite [];
    dataProtectionOfficers: DataProtectionOfficerModel[];
    totalRecordsAtRegistration: string;
    recordPercentageGrowth: string;
    retentionPeriod: string;
    dataStoredCategory: string [];
    dataStoredSubCategory: string [];
    purpose: string;
    sourceOfData: string [];
    countriesStoringYourData: string [];
    securityMeasures: SecurityMeasuresModel[];
    personalDataIsForDisclosure: string;
    reasonsForSharing: string [];
    thirdParties: ThirdParties [];
    collectChildrenData: string;
    childDataConsentor: string;
    purposeForCollectingChildData: string;
    childLawPurpose: string;
    childResearchPurpose: string;
    status: string;
    comments: DocumentComment[];
    concent: string;
    natureOfProcessing: string[];
    storeDataOutsideCountry: string;
    registrationDate: string;


    constructor(model) {
        this.id = model.id;
        this.oragisationName = model.oragisationName;
        this.yearOfStart = model.yearOfStart;
        this.tin = model.tin;
        this.ursbNumber = model.ursbNumber;
        this.organisationType = model.organisationType;
        this.publicBody = model.publicBody;
        this.localGovement = model.localGovement;
        this.statute = model.statute;
        this.location = model.location;
        this.headOfOganisation = model.headOfOganisation;
        this.titleOfOrganizationHead = model.titleOfOrganizationHead;
        this.postalAddress = model.postalAddress;
        this.phoneNumber = model.phoneNumber;
        this.landLine = model.landLine;
        this.emailAddress = model.emailAddress;
        this.dpoActCategory = model.dpoActCategory;
        this.sector = model.sector;
        this.rolesPerformed = model.rolesPerformed;
        this.mainActivities = model.mainActivities;
        this.dataProtectionOfficers = model.dataProtectionOfficers;
        this.totalRecordsAtRegistration = model.totalRecordsAtRegistration;
        this.recordPercentageGrowth = model.recordPercentageGrowth;
        this.retentionPeriod = model.retentionPeriod;
        this.dataStoredCategory = model.dataStoredCategory;
        this.dataStoredSubCategory = model.dataStoredSubCategory;
        this.purpose = model.purpose;
        this.sourceOfData = model.sourceOfData;
        this.countriesStoringYourData = model.countriesStoringYourData;
        this.securityMeasures = model.securityMeasures;
        this.personalDataIsForDisclosure = model.personalDataIsForDisclosure;
        this.reasonsForSharing = model.reasonsForSharing;
        this.thirdParties = model.thirdParties;
        this.collectChildrenData = model.collectChildrenData;
        this.childDataConsentor = model.childDataConsentor;
        this.purposeForCollectingChildData = model.purposeForCollectingChildData;
        this.childLawPurpose = model.childLawPurpose;
        this.childResearchPurpose = model.childResearchPurpose;
        this.status = model.status;
        this.registrationDate = model.registrationDate;
        this.concent = model.concent;
    }
}

export class ComponyRegistrationObject {
    OrganisationID: string;
    OrganisationName: string;
    CurrentStepName: string;
    OrganizationRegNo: string;
    RegTrackingNo: string;
    YearOfStart: string;
    TIN: string;
    URSBNumber: string;
    OrganizationTypeID: string;
    PublicBodyTypeID: string;
    Location: string;
    HeadOfOrganization: string;
    TitleOfOrganizati: string;
    PostalAddress: string;
    PhoneNumber: string;
    Landline: string;
    EmailAddres: string;
    SectorID: string;
    TotalRecordsAtRegistration: string;
    RecordPercentageGr: string;
    RetentionPer: string;
    Purpose: string;
    GetConsent: string;
    StoreDataOutsideCountry: string;
    PersonalDataIsForDisclosure: string;
    CollectChildrenData: string;
    ChildDataConsentor: string;
    PurposeForCollectingChildDat: string;
    ChildResearchPurpose: string;
    DataProtectionOfficers: DataProtectionOfficerModelObject[];
    ThirdParties: ThirdPartiesObject[];
}

export class DataProtectionOfficerModelObject {
    Name: string;
    PositionInOrganisation: string;
    EmailAddress: string;
    PhysicalAddress: string;
    PhoneNumber: string;
}

export class CertificateDetailsResponse {
    code: number;
    message: string;
    data: CertificateDetails;
}

export class CertificateDetails {
    OrganizationID: any;
    OrgRegNumber: string;
    IssueDate: string;
    ExpiryDate: string;
    IssueType: string;
    DownloadCount: any;
}

export class CertificateRequest {
    OrganizationID: string;
}

export class ThirdPartiesObject {
    ContactPerson: string;
    ThirdPartyName: string;
    PhoneNumber: string;
    EmailAddress: string;
}

export class SecurityMeasuresModel {
    Name: string;
    FileSize: string;
    Link: string;
}

export class PRN {
    OrganisationUserID:number;
    OrganisationName: string;
    PRN: string;
    SearchCode: string;
    PRNGenerationDate:string;
    DaysPassed:string;
}

export class MainActivite {
    activity: string;
}

export class ThirdParties {
    ContactPerson: string;
    ThirdPartyName: string;
    PhoneNumber: string;
    EmailAddress: string;
}

export class CompanyModel {
    id?: number;
    name?: string;
    address?: string;
    contact?: string;
    email?: string;
    website?: string;

    constructor(companyDetails) {
        this.id = companyDetails.id;
        this.name = companyDetails.name;
        this.address = companyDetails.address;
        this.contact = companyDetails.contact;
        this.email = companyDetails.email;
        this.website = companyDetails.website;
    }
}

export class DataProtectionOfficerModel {
    Name: string;
    PositionInOrganisation: string;
    EmailAddress: string;
    PhysicalAddress: string;
    PhoneNumber: string;
}


export const COMPANY_REGISTRATION_DATA = [
    {
        'id': 324324,
        'oragisationName': 'Applied Principles',
        'yearOfStart': '2021-02-02T21:00:00.000Z',
        'tin': '1234567890',
        'ursbNumber': 'wewe',
        'organisationType': '1',
        'publicBody': '1',
        'localGovement': '1',
        'statute': 'Sample Statute',
        'location': 'Bukoto',
        'headOfOganisation': 'Patrick Okiring',
        'titleOfOrganizationHead': 'CEO',
        'postalAddress': '',
        'phoneNumber': '0703333889',
        'landLine': '',
        'emailAddress': 'pokiring@principlesapplied.com',
        'dpoActCategory': [
            '1',
            '2'
        ],
        'concent': '',
        'sector': 'Public Sector',
        'rolesPerformed': [
            '1',
            '2'
        ],
        'mainActivities': [
            {
                'activity': 'Security tests'
            }
        ],
        'dataProtectionOfficers': [
            {
                'id': 93892,
                'name': 'Jovita',
                'emailAddress': 'jovita@apc.go.ug',
                'phoneNumber': '0700000898',
                'physicalAddress': 'Mengo',
                'positionInOrganisation': 'DPO'
            }
        ],
        'totalRecordsAtRegistration': '12023400',
        'recordPercentageGrowth': '5',
        'retentionPeriod': '1',
        'dataStoredCategory': [
            'Identifiers',
            'Sensory Data'
        ],
        'dataStoredSubCategory': [
            'Name',
            'Nationality',
            'Age'
        ],
        'purpose': '1',
        'sourceOfData': [
            '1',
            '2'
        ],
        'getConsent': 'Yes',
        'natureOfProcessing': [
            '',
            ''
        ],
        'storeDataOutsideCountry': 'Yes',
        'countriesStoringYourData': [
            '1',
            '2'
        ],
        'securityMeasures': [
            {
                'name': '21042021012350-Form_5_-_Application_for_Certified_Copy_of_Extract_Entry_in_Register.pdf',
                'document': {},
                'size': '0.087'
            }
        ],
        'personalDataIsForDisclosure': 'Yes',
        'reasonsForSharing': [
            '2',
            '3'
        ],
        'thirdParties': [
            {
                'name': 'APC',
                'contactPerson': 'JB',
                'emailAddress': 'jb@apc.go.ug',
                'phoneNumber': '0777777777'
            }
        ],
        'collectChildrenData': 'Yes',
        'childDataConsentor': '1',
        'purposeForCollectingChildData': '1',
        'childLawPurpose': '1',
        'childResearchPurpose': 'ffdfd',
        'status': 'SUBMITTED',
        'registrationDate': '23-02-2021 18:20:20',
        'comments': [
            {
                'instanceId': 23,
                'username': 'jkalungi',
                'creationDate': '23-02-2021 18:20:20',
                'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'sd  Lorem Ipsum has been the industry'
            },
        ]
    }
];


export const COMPANY_REGISTRATION = {
    'id': 324324,
    'oragisationName': 'Applied Principles',
    'yearOfStart': '2021-02-02T21:00:00.000Z',
    'tin': '1234567890',
    'ursbNumber': 'wewe',
    'organisationType': [
        'COMPANY_OR_A_LIMITED_COMPANY'
    ],
    'concent': '',
    'publicBody': '1',
    'localGovement': '1',
    'statute': 'Sample Statute',
    'location': 'Bukoto',
    'headOfOganisation': 'Patrick Okiring',
    'titleOfOrganizationHead': 'CEO',
    'postalAddress': 'P.O.Box 2372',
    'phoneNumber': '0703333889',
    'landLine': '0323878273',
    'emailAddress': 'pokiring@principlesapplied.com',
    'dpoActCategory': [
        '1',
        '2'
    ],
    'sector': 'Public Sector',
    'rolesPerformed': [
        // {'code':'',"name":''}
    ],
    'mainActivities': [
        {
            'activity': 'Security tests'
        }
    ],
    'dataProtectionOfficers': [
        {
            'id': 93892,
            'name': 'Jovita',
            'emailAddress': 'jovita@apc.go.ug',
            'phoneNumber': '0700000898',
            'physicalAddress': 'Mengo',
            'positionInOrganisation': 'DPO'
        }
    ],
    'totalRecordsAtRegistration': '12023400',
    'recordPercentageGrowth': '5',
    'retentionPeriod': '1',
    'dataStoredCategory': [
        'Identifiers',
        'Sensory Data'
    ],
    'dataStoredSubCategory': [
        'Name',
        'Nationality',
        'Age'
    ],
    'purpose': '1',
    'sourceOfData': [
        '1',
        '2'
    ],
    'getConsent': 'Yes',
    'natureOfProcessing': [
        'Organized, adapted or altered for use in fulfilling organizations mandate and role',
        'Data is stored and retrieved and used for internal consultation or verification'
    ],
    'storeDataOutsideCountry': 'Yes',
    'countriesStoringYourData': [
        '1',
        '2'
    ],
    'securityMeasures': [
        {
            'name': '21042021012350-Form_5_-_Application_for_Certified_Copy_of_Extract_Entry_in_Register.pdf',
            'document': {},
            'size': '0.087'
        }
    ],
    'personalDataIsForDisclosure': 'Yes',
    'reasonsForSharing': [
        '2',
        '3'
    ],
    'thirdParties': [
        {
            'name': 'APC',
            'contactPerson': 'JB',
            'emailAddress': 'jb@apc.go.ug',
            'phoneNumber': '0777777777'
        }
    ],
    'collectChildrenData': 'Yes',
    'childDataConsentor': '1',
    'purposeForCollectingChildData': '1',
    'childLawPurpose': '1',
    'childResearchPurpose': 'ffdfd',
    'status': 'SUBMITTED',
    'registrationDate': '23-02-2021 18:20:20',
    'comments': [
        {
            'instanceId': 23,
            'username': 'jkalungi',
            'creationDate': '23-02-2021 18:20:20',
            'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'sd  Lorem Ipsum has been the industry'
        },
    ]
};

export const TypeOfOrganisation = [
    {id: 1, name: 'Limited Liability Company Or Corporation'},
    {id: 2, name: 'Partnership'},
    {id: 3, name: 'Public Body'},
    {id: 4, name: 'Non Governmental Organisation'}
];

export const DataProtectionActors: any = [
    {id: '1', name: 'Data Controller'},
    {id: '2', name: 'Data Processor'},
    {id: '3', name: 'Data Collector'},
];

export const Sectors = [
    {
        SectorID: 1,
        Sector: 'Public Sector'
    },
    {
        SectorID: 2,
        Sector: 'Transportation'
    },
    {
        SectorID: 3,
        Sector: 'Civil / Infrastructure Engineering'
    },
    {
        SectorID: 4,
        Sector: 'Academia'
    },
    {
        SectorID: 5,
        Sector: 'Energy'
    },
    {
        SectorID: 6,
        Sector: 'Health Care'
    },
    {
        SectorID: 7,
        Sector: 'Finance'
    },
    {
        SectorID: 8,
        Sector: 'Utilities'
    },
    {
        SectorID: 9,
        Sector: 'Information Technology'
    },
    {
        SectorID: 10,
        Sector: 'Manufacturing / Industrial'
    },
    {
        SectorID: 11,
        Sector: 'Telecommunication Services'
    },
    {
        SectorID: 12,
        Sector: 'Materials'
    },
    {
        SectorID: 13,
        Sector: 'Consulting'
    },
    {
        SectorID: 14,
        Sector: 'Others'
    },
];
export const ROLES_PERFORMED = [
    {id: 1, name: 'Protection of National Security'},
    {id: 2, name: 'Public revenue collection'},
    {id: 3, name: 'Enforcement of law which imposes a pecuniary penalty'},
    {id: 3, name: 'Conduct proceedings before any court'}
];
export const SECTORS = [
    {
        id: 1,
        name: 'Public Sector'
    },
    {
        id: 2,
        name: 'Transportation'
    },
    {
        id: 3,
        name: 'Civil / Infrastructure Engineering'
    },
    {
        id: 4,
        name: 'Academia'
    },
    {
        id: 5,
        name: 'Energy'
    },
    {
        id: 6,
        name: 'Health Care'
    },
    {
        id: 7,
        name: 'Finance'
    },
    {
        id: 8,
        name: 'Utilities'
    },
    {
        id: 9,
        name: 'Information Technology'
    },
    {
        id: 10,
        name: 'Manufacturing / Industrial'
    },
    {
        id: 11,
        name: 'Telecommunication Services'
    },
    {
        id: 12,
        name: 'Materials'
    },
    {
        id: 13,
        name: 'Consulting'
    },
    {
        id: 14,
        name: 'Others'
    },
];

export enum DataProtectionAct {
    DATA_CONTROLER = 'Data Controller',
    DATA_COLLECTOR = 'Data Collector',
    DATA_PROCESSOR = 'Data Processor'
}

[
    {
        'OrganisationID': 32,
        'OrganisationName': 'National Identification & Registration Authority',
        'OrganizationRegNo': '',
        'RegTrackingNo': 'REG/16/10/21/5337',
        'YearOfStart': '2012',
        'TIN': '1234567890',
        'URSBNumber': 'wewe',
        'OrganizationTypeID': 3,
        'PublicBodyTypeID': 1,
        'Location': 'Kololo',
        'HeadOfOrganization': 'Patrick Okiring',
        'TitleOfOrganizationHead': 'CEO',
        'PostalAddress': '',
        'PhoneNumber': '0703333889',
        'Landline': '',
        'EmailAddress': 'pokiring@principlesapplied.com',
        'SectorID': 1,
        'TotalRecordsAtRegistration': 12023400,
        'RecordPercentageGrowth': 5,
        'RetentionPeriod': 1,
        'Purpose': '1',
        'GetConsent': 'Yes',
        'StoreDataOutsideCountry': 'Yes',
        'PersonalDataIsForDisclosure': 'Yes       ',
        'CollectChildrenData': 'Yes       ',
        'ChildDataConsentor': '1',
        'PurposeForCollectingChildData': '1',
        'ChildResearchPurpose': 'test',
        'EnteredOn': '2021-10-16 14:32:47.413000',
        'DataProtectionOfficers': [
            {
                'Name': 'Grace',
                'PositionInOrganisation': 'Manager ICT',
                'EmailAddress': 'grace@nira.go.ug',
                'PhysicalAddress': 'Kololo',
                'PhoneNumber': '0700000000'
            }
        ],
        'ThirdParties': [
            {
                'ContactPerson': 'mark',
                'ThirdPartyName': 'UNRA',
                'PhoneNumber': '',
                'EmailAddress': 'mark@unra.go.ug'
            }
        ]
    },
    {
        'OrganisationID': 33,
        'OrganisationName': 'National Identification & Registration Authority',
        'OrganizationRegNo': '',
        'RegTrackingNo': 'REG/16/10/21/3684',
        'YearOfStart': '2012',
        'TIN': '1234567890',
        'URSBNumber': 'wewe',
        'OrganizationTypeID': 3,
        'PublicBodyTypeID': 1,
        'Location': 'Kololo',
        'HeadOfOrganization': 'Patrick Okiring',
        'TitleOfOrganizationHead': 'CEO',
        'PostalAddress': '',
        'PhoneNumber': '0703333889',
        'Landline': '',
        'EmailAddress': 'pokiring@principlesapplied.com',
        'SectorID': 1,
        'TotalRecordsAtRegistration': 12023400,
        'RecordPercentageGrowth': 5,
        'RetentionPeriod': 1,
        'Purpose': '1',
        'GetConsent': 'Yes',
        'StoreDataOutsideCountry': 'Yes',
        'PersonalDataIsForDisclosure': 'Yes       ',
        'CollectChildrenData': 'Yes       ',
        'ChildDataConsentor': '1',
        'PurposeForCollectingChildData': '1',
        'ChildResearchPurpose': 'test',
        'EnteredOn': '2021-10-16 14:34:03.153000',
        'DataProtectionOfficers': [
            {
                'Name': 'Grace',
                'PositionInOrganisation': 'Manager ICT',
                'EmailAddress': 'grace@nira.go.ug',
                'PhysicalAddress': 'Kololo',
                'PhoneNumber': '0700000000'
            }
        ],
        'ThirdParties': [
            {
                'ContactPerson': 'mark',
                'ThirdPartyName': 'UNRA',
                'PhoneNumber': '',
                'EmailAddress': 'mark@unra.go.ug'
            }
        ]
    },
    {
        'OrganisationID': 34,
        'OrganisationName': 'National Identification & Registration Authority',
        'OrganizationRegNo': '',
        'RegTrackingNo': 'REG/16/10/21/1616',
        'YearOfStart': '2012',
        'TIN': '1234567890',
        'URSBNumber': 'wewe',
        'OrganizationTypeID': 3,
        'PublicBodyTypeID': 1,
        'Location': 'Kololo',
        'HeadOfOrganization': 'Patrick Okiring',
        'TitleOfOrganizationHead': 'CEO',
        'PostalAddress': '',
        'PhoneNumber': '0703333889',
        'Landline': '',
        'EmailAddress': 'pokiring@principlesapplied.com',
        'SectorID': 1,
        'TotalRecordsAtRegistration': 12023400,
        'RecordPercentageGrowth': 5,
        'RetentionPeriod': 1,
        'Purpose': '1',
        'GetConsent': 'Yes',
        'StoreDataOutsideCountry': 'Yes',
        'PersonalDataIsForDisclosure': 'Yes       ',
        'CollectChildrenData': 'Yes       ',
        'ChildDataConsentor': '1',
        'PurposeForCollectingChildData': '1',
        'ChildResearchPurpose': 'test',
        'EnteredOn': '2021-10-16 14:35:18.113000',
        'DataProtectionOfficers': [
            {
                'Name': 'Grace',
                'PositionInOrganisation': 'Manager ICT',
                'EmailAddress': 'grace@nira.go.ug',
                'PhysicalAddress': 'Kololo',
                'PhoneNumber': '0700000000'
            },
            {
                'Name': 'John',
                'PositionInOrganisation': 'Manager ICT',
                'EmailAddress': 'grace@nira.go.ug',
                'PhysicalAddress': 'Kololo',
                'PhoneNumber': '0700000000'
            },
            {
                'Name': 'Kevin',
                'PositionInOrganisation': 'Manager ICT',
                'EmailAddress': 'grace@nira.go.ug',
                'PhysicalAddress': 'Kololo',
                'PhoneNumber': '0700000000'
            }
        ],
        'ThirdParties': [
            {
                'ContactPerson': 'mark',
                'ThirdPartyName': 'UNRA',
                'PhoneNumber': '',
                'EmailAddress': 'mark@unra.go.ug'
            }
        ]
    },
    {
        'OrganisationID': 35,
        'OrganisationName': 'MTN Uganda',
        'OrganizationRegNo': '',
        'RegTrackingNo': 'REG/21/10/21/8585',
        'YearOfStart': '2021',
        'TIN': '2873849732',
        'URSBNumber': '',
        'OrganizationTypeID': 3,
        'PublicBodyTypeID': 2,
        'Location': 'Bukoto',
        'HeadOfOrganization': 'Isaac',
        'TitleOfOrganizationHead': 'Isaac',
        'PostalAddress': '',
        'PhoneNumber': '702 837 483',
        'Landline': '',
        'EmailAddress': 'isaac@ap.com',
        'SectorID': 2,
        'TotalRecordsAtRegistration': 9000,
        'RecordPercentageGrowth': 23,
        'RetentionPeriod': 324,
        'Purpose': '2',
        'GetConsent': 'No',
        'StoreDataOutsideCountry': 'No',
        'PersonalDataIsForDisclosure': 'Yes       ',
        'CollectChildrenData': 'No        ',
        'ChildDataConsentor': '2',
        'PurposeForCollectingChildData': '2',
        'ChildResearchPurpose': 'Google LLC is an American multinational technology',
        'EnteredOn': '2021-10-21 09:28:44.900000',
        'DataProtectionOfficers': [
            {
                'Name': 'TestUser ',
                'PositionInOrganisation': 'Head',
                'EmailAddress': 'test@gmail.com',
                'PhysicalAddress': '',
                'PhoneNumber': '0823843294'
            }
        ],
        'ThirdParties': [
            {
                'ContactPerson': 'Enock',
                'ThirdPartyName': 'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.',
                'PhoneNumber': '',
                'EmailAddress': 'enock@gmail.com'
            }
        ]
    },
    {
        'OrganisationID': 36,
        'OrganisationName': 'UAP ',
        'OrganizationRegNo': '',
        'RegTrackingNo': 'REG/21/10/21/4981',
        'YearOfStart': '2003',
        'TIN': '9829384',
        'URSBNumber': '',
        'OrganizationTypeID': 3,
        'PublicBodyTypeID': 3,
        'Location': 'Nakawa',
        'HeadOfOrganization': 'John',
        'TitleOfOrganizationHead': 'CTO',
        'PostalAddress': '',
        'PhoneNumber': '783 223 433',
        'Landline': '',
        'EmailAddress': '',
        'SectorID': 3,
        'TotalRecordsAtRegistration': 90,
        'RecordPercentageGrowth': 20,
        'RetentionPeriod': 23,
        'Purpose': '1',
        'GetConsent': 'Yes',
        'StoreDataOutsideCountry': 'No',
        'PersonalDataIsForDisclosure': 'No        ',
        'CollectChildrenData': 'No        ',
        'ChildDataConsentor': '1',
        'PurposeForCollectingChildData': '1',
        'ChildResearchPurpose': 'Google LLC is an American multinational technology',
        'EnteredOn': '2021-10-21 09:41:55.267000',
        'DataProtectionOfficers': [
            {
                'Name': 'Mark',
                'PositionInOrganisation': 'CTO',
                'EmailAddress': 'mark@ura.go.ug',
                'PhysicalAddress': '',
                'PhoneNumber': ''
            }
        ],
        'ThirdParties': [
            {
                'ContactPerson': 'Isaac',
                'ThirdPartyName': 'Google LLC ',
                'PhoneNumber': '',
                'EmailAddress': 'isaac@mtn.go'
            }
        ]
    },
    {
        'OrganisationID': 37,
        'OrganisationName': 'Sco Systems Limited',
        'OrganizationRegNo': '',
        'RegTrackingNo': 'REG/11/11/21/5629',
        'YearOfStart': '2003',
        'TIN': '1232341345',
        'URSBNumber': 'QW2323DEFE',
        'OrganizationTypeID': 3,
        'PublicBodyTypeID': 4,
        'Location': 'D',
        'HeadOfOrganization': 'Olive Duncan',
        'TitleOfOrganizationHead': 'CEO',
        'PostalAddress': 'D',
        'PhoneNumber': '700 392 854',
        'Landline': '700 392 854',
        'EmailAddress': 'A@F.COM',
        'SectorID': 2,
        'TotalRecordsAtRegistration': 12,
        'RecordPercentageGrowth': 12,
        'RetentionPeriod': 12,
        'Purpose': '2',
        'GetConsent': 'Yes',
        'StoreDataOutsideCountry': 'Yes',
        'PersonalDataIsForDisclosure': 'Yes       ',
        'CollectChildrenData': '          ',
        'ChildDataConsentor': '2',
        'PurposeForCollectingChildData': '2',
        'ChildResearchPurpose': 'rr',
        'EnteredOn': '2021-11-11 10:41:35.643000',
        'DataProtectionOfficers': [
            {
                'Name': 'f',
                'PositionInOrganisation': 'f',
                'EmailAddress': 'f',
                'PhysicalAddress': 'f',
                'PhoneNumber': 'f'
            }
        ],
        'ThirdParties': [
            {
                'ContactPerson': 'r',
                'ThirdPartyName': 'r',
                'PhoneNumber': 'r',
                'EmailAddress': 'r'
            }
        ]
    }
];
// id?: number;
// OrganisationName: string;
// YearOfStart: string;
// tin: string;
// ursbNumber: string;
// organisationType: string[];
// publicBody: string;
// localGovement: string;
// statute: string;
// location: string;
// headOfOganisation: string;
// titleOfOrganizationHead: string;
// postalAddress: string;
// phoneNumber: string;
// landLine: string;
// emailAddress: string;
// dpoActCategory: string [];
// sector: string;
// rolesPerformed: string [];
// mainActivities: MainActivite [];
// dataProtectionOfficers: DataProtectionOfficerModel[];
// totalRecordsAtRegistration: string;
// recordPercentageGrowth: string;
// retentionPeriod: string;
// dataStoredCategory: string [];
// dataStoredSubCategory: string [];
// purpose: string;
// sourceOfData: string [];
// countriesStoringYourData: string [];
// securityMeasures: SecurityMeasuresModel[];
// personalDataIsForDisclosure: string;
// reasonsForSharing: string [];
// thirdParties: ThirdParties [];
// collectChildrenData: string;
// childDataConsentor: string;
// purposeForCollectingChildData: string;
// childLawPurpose: string;
// childResearchPurpose: string;
// status: string;
// comments: DocumentComment[];
// concent:string;
// natureOfProcessing: string[];
// storeDataOutsideCountry: string;
// registrationDate: string;

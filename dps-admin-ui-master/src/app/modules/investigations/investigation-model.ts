// import {DocumentComment} from 'src/@fury/shared/base-fury-comment.model';
import { DocumentComment } from '../../../@fury/shared/base-fury-form.model';
import {DataSubjectModel} from '../models/data-subject.model';
// import { DataAffectedCategoryModel } from '../models/personal-data-affected.model';
// import { DataAffectedSubCategoryModel } from '../models/personal-data-affected.model';

/*export class ComplaintModel {
    id: any;
    regNo:string;
    personalDataAffected: string[];
    reasonForTheComplaint: string;
    complaintDetails: string;
    remedialAction: string;
    comments: DocumentComment[];
    lastModificationDate: string;
    status: string;
    dataSubject: DataSubjectModel
}
*/

export class InvestigationModel {
    InvestigationID: any;
    InvestigationTrackingNo: string;
    ComplaintID: number;
    ComplaintTrackingNo:string;
    DataBreachID : number;
    DataBreachTrackingNo: string;
    Organisation: string;
    InvestigationType:string;
    InvestigationStatus: string;
    FirstName:string;
    EvidenceFile:string;
    InvestigationNotes:string;
    LastName:string;
    PhoneNumber:string;
    StartDate:string;
    EndDate:string;
    EnteredOn:string;
    PoliceOfficer:string;
    ClosingRemarks: string;
    ClosingRemarksOwner:string;
    CourtForward:string;
    DataBreachType:string;
    IncidentDate:string;
    CategoriesOfDataSubjectAffected:string;
    NumberOfDataSubjects:number;
    NumberOfRecordsHeld:number;
    DetailedDataBreachCause:string;
    RemedialActionsTaken:string;
    PreventiveStepsToPreventRecurrence:string;
    TechnicalComments:string;
    LegalComments:string;
    EmailAddress:string;
    ContactPersonFirstName:string;
    ContactPersonLastName:string;
    ContactPersonEmailAddress:string;
    InvestigationComments:string;
    FullDetailsOfComplaint:string;
    status: string;
    

}

export class InvestigationNotes{

    FirstName:string;
    LastName:string;
    InvestigationNotes:string;
}

export class $DataAffectedCategoryModel {
    id: string;
    name: string;
    // subCategories:DataAffectedSubCategoryModel[];
}export class DataAffectedCategoryModel {
    id: string;
    name: string;
    subCategories:DataAffectedSubCategoryModel[];
}

export class DataAffectedSubCategoryModel {
    id: string;
    value: string;
}


/*export class Complaint {
    id: any;
    regNo:string;
    personalDataAffected: string[];
    reasonForTheComplaint: string;
    complaintDetails: string;
    remedialAction: string;
    comments: DocumentComment[];
    lastModificationDate: string;
    status: string;
    dataSubject: DataSubjectModel;
    name: string;
    phone:string;
    addressedTo:string;


    constructor(complaint) {
        this.id = complaint.id;
        this.regNo = complaint.regNo;
        this.remedialAction = complaint.remedialAction;
        this.reasonForTheComplaint = complaint.reasonForTheComplaint;
        this.addressedTo = complaint.addressedTo;
        this.dataSubject = complaint.dataSubject;
        this.personalDataAffected = complaint.personalDataAffected;
        this.status = complaint.status;
        this.complaintDetails = complaint.complaintDetails;
        this.lastModificationDate = complaint.lastModificationDate;
        this.name = complaint.dataSubject.name
        this.phone = complaint.dataSubject.name;
        this.comments = complaint.comments;
    }
} */

export class Investigation {
    InvestigationID: any;
    InvestigationTrackingNo: string;
    ComplaintTrackingNo: string;
    EmailAddress: string;
    FirstName: string;
    FullDetailsOfInvestigation:string;
    LastName: string;
    Organisation: string;
    PhoneNumber:string;
    PhysicalAddress:string;
    ReasonsForInvestigation:string[];
    RemedialActions: string[];
    comments: DocumentComment[];
    PersonalDataAffected: string[];


    constructor(investigation) {
        this.InvestigationID = investigation.InvestigationID;
        this.InvestigationTrackingNo = investigation.InvestigationTrackingNumber;
        this.EmailAddress = investigation.EmailAdress;
        this.FirstName = investigation.FirstName;
        this.FullDetailsOfInvestigation = investigation.FullDetailsOfInvestigation;
        this.LastName = investigation.LastName;
        this.Organisation = investigation.Organisation
        this.PhoneNumber = investigation.PhoneNumber;
        this.PhysicalAddress = investigation.PhysicalAddress;
        this.RemedialActions = investigation.RemedialActions;
        this.PersonalDataAffected = investigation.PersonalDataAffected;
        this.comments = investigation.comments;
    }
} 

export class PersonalDataModel {
    dataCategory: DataAffectedCategoryModel;
    dataSubCategory: DataAffectedSubCategoryModel[];
    
}

export class PersonalData {
    personalDataCategory?: string;
    extentDetails?: string;
    
    
}
    

export enum PersonalDataAffected {
    NATIONALITY = 'Nationality',
    AGE = 'Age / Date of Birth',
    MARITAL_STATUS = 'Marital Status',
    EDUCATION = 'Education Level',
    IDENTIFICATION = 'Identification Number e.g NIN, TIN, Driving Permit Number',
    IDENTITY_DATA = 'Identity Data',
    PHILOSPHICAL_BELIEFS = 'Philosophical Beliefs',
    POLITICAL_OPINION = 'Political Opinion',
    SEXUAL_LIFE = 'Sexual Life',
    FINANCIAL_INFORMATION = 'Financial Information',
    MEDICAL = 'Medical Records'
}

export enum RemedialActions {
    CORRECT_THE_INFORMATION = 'Correct the information',
    DELETE_OR_DESTROY_THE_INFORMATION = ' Delete or Destroy  The information',
    NOTIFIY_THE_THIRD_PARTIES = 'Write to or notify the third parties whom then data has been shared'
}

export const INVESTIGATION_JSON = {
    'id': 1,
    'regNo':'C202100001',
    'personalDataAffected': [PersonalDataAffected.NATIONALITY,PersonalDataAffected.AGE],
    'status': 'Submitted',
    'reasonForTheInvestigation': 'Processing personal data without appropriate security measures',
    'investigationDetails': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors.',
    'remedialAction': 'Write to or notify the third parties with whom the data has been shared.',
    'comments': [
        {
            'instanceId': 23,
            'username': 'enmunyagwa',
            'creationDate': '23-02-2021 18:20:20',
            'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'sd  Lorem Ipsum has been the industry'
        },
        {
            'instanceId': 23,
            'username': 'enmunyagwa',
            'creationDate': '23-02-2021 18:20:20',
            'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\ Lorem Ipsum has been the industry'
        }
    ],
    'lastModificationDate': '23-02-2021 18:20:20',
    'dataSubject': {
        'id':28372,
        'name': 'Munyagwa Enock',
        'phone': '0792310084',
        'email': 'enmunyagwa@gmail.com'
    }

};

export const INVESTIGATION_DEMO_DATA = [
    {
        'id': 1,
        'regNo':'C202100001',
        'addressedTo': 'Uganda Revenue Authority',
        'personalDataAffected': [PersonalDataAffected.NATIONALITY,PersonalDataAffected.AGE],
        'status': 'Submitted',
        'reasonForTheInvestigation': 'Processing personal data without appropriate security measures',
        'investigationDetails': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors.',
        'remedialAction': 'Write to or notify the third parties with whom the data has been shared.',
        'comments': [
            {
                'instanceId': 23,
                'username': 'enmunyagwa',
                'creationDate': '23-02-2021 18:20:20',
                'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'sd  Lorem Ipsum has been the industry'
            },
            {
                'instanceId': 23,
                'username': 'enmunyagwa',
                'creationDate': '23-02-2021 18:20:20',
                'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\ Lorem Ipsum has been the industry'
            }
        ],
        'lastModificationDate': '23-02-2021 18:20:20',
        'dataSubject': {
            'id':28372,
            'name': 'Munyagwa Enock',
            'phone': '0792310084',
            'email': 'enmunyagwa@gmail.com'
        }

    },
    {
        'id': 1,
        'regNo':'C202100003',
        'addressedTo': 'Airtel Uganda',
        'personalDataAffected': [PersonalDataAffected.NATIONALITY,PersonalDataAffected.AGE],
        'status': 'Submitted',
        'reasonForTheComplaint': 'Infringement / Violation of Act',
        'complaintDetails': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors.',
        'remedialAction': 'Write to or notify the third parties with whom the data has been shared.',
        'comments': [
            {
                'instanceId': 23,
                'username': 'jkalungi',
                'creationDate': '23-02-2021 18:20:20',
                'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'sd  Lorem Ipsum has been the industry'
            },
            {
                'instanceId': 23,
                'username': 'mkajubi',
                'creationDate': '23-02-2021 18:20:20',
                'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\ Lorem Ipsum has been the industry'
            }
        ],
        'lastModificationDate': '23-02-2021 18:20:20',
        'dataSubject': {
            'id':28372,
            'name': 'John Kalungi',
            'phone': '0792310084',
            'email': 'jkalungi@gmail.com'
        }
    },
    {
        'id': 1,
        'regNo':'C202100004',
        'addressedTo': 'Airtel Uganda',
        'personalDataAffected': [PersonalDataAffected.NATIONALITY,PersonalDataAffected.AGE],
        'status': 'Submitted',
        'reasonForTheComplaint': 'Inaccurate personal data in the possession of data controllers',
        'complaintDetails': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors.',
        'remedialAction': 'Write to or notify the third parties with whom the data has been shared.',
        'comments': [
            {
                'instanceId': 23,
                'username': 'enmunyagwa',
                'creationDate': '23-02-2021 18:20:20',
                'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'sd  Lorem Ipsum has been the industry'
            },
            {
                'instanceId': 23,
                'username': 'mkajubi',
                'creationDate': '23-02-2021 18:20:20',
                'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\ Lorem Ipsum has been the industry'
            }
        ],
        
        'lastModificationDate': '23-02-2021 18:20:20',
        'dataSubject': {
            'id':28372,
            'name': 'Isaac Akileng',
            'phone': '0792310084',
            'email': 'iakileng@gmail.com'
        }
    },
];


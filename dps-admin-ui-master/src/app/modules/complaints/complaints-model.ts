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

export class ComplaintModel {
    ComplaintID: any;
    ComplaintSourceID:number;
    ComplaintTrackingNo: string;
    ComplainerCategory:string;
    EmailAddress: string;
    FirstName: string;
    FormID: number;
    FullDetailsOfComplaint:string;
    HaveComplainedToOrganisationAlready: string;
    LastName: string;
    OrganisationComplainedTo:number;
    OrganisationComplainedToName:string;
    OtherOrganisationComplainedTo: string;
    ContactPersonFirstName:string;
    ContactPersonLastName:string;
    ContactPersonEmailAddress:string;
    InvestigationComments:string;
    ResolutionComments:string;
    ForwardedComments: string;
    PhoneNumber:string;
    PhysicalAddress:string;
    EvidenceOfComplaint:string;
    ReasonsForComplaint:string[];
    RemedialActions: string[];
    PersonalDataAffected: string[];
    // personalDataAffected?: PersonalDataModel[];
    comments: DocumentComment[];
    status: string;
    StatusID:number;
    personalDataAffected: string[];
    reasonForTheComplaint: string;
    complaintDetails: string;
    remedialAction: string;
    LegalComments: string;
    TechnicalComments: string;
    MoreInformation: string;
    lastModificationDate: string;
    dataSubject: DataSubjectModel
}

export class BreachModel {
    id?: string;
    incidentDate?: string;
    howIncidentHappened?: string;
    delayInReporting?: boolean;
    reasonForDelay?: string;
    measuresInPlace?: string;
    status?: string;
    // policies?: PolicyModel[];
    personalDataAffected?: PersonalDataModel[];
    // containmentAndRecovery?: ContainmentAndRecoveryModel;
    // miscellaneous?: MiscellaneousModel;
    registrationDate?: string;
    // impactOfBreach?: ImpactOfBreachModel[];
    // potentialConsequences?: PotentialConsequenceModel[];
    // controls?: BreachControlModel[];
    // causes?: CauseOfBreach[];
    companyReporting?: string;
    reportedBy?: string;
    assignedTo?: string;
    lastModifiedDate?: string;
    BreachStatusID: number;
    TechnicalComments: string;
    LegalComments:string;
    ResolutionComments:string;

}


export class $DataAffectedCategoryModel {
    id: string;
    name: string;
    subCategories:DataAffectedSubCategoryModel[];
}

export class DataAffectedCategoryModel {
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

export class Complaint {
    ComplaintID: any;
    ComplaintSourceID:number;
    ComplaintTrackingNo: string;
    ComplaintSourceName: string;
    FormName: string;
    EmailAddress: string;
    FirstName: string;
    FormID: number;
    FullDetailsOfComplaint:string;
    HaveComplainedToOrganisationAlready: string;
    LastName: string;
    OrganisationComplainedTo:number;
    OtherOrganisationComplainedTo: string;
    PhoneNumber:string;
    PhysicalAddress:string;
    ReasonsForComplaint:string[];
    RemedialActions: string[];
    comments: DocumentComment[];
    PersonalDataAffected: string[];


    constructor(complaint) {
        this.ComplaintID = complaint.ComplaintID;
        this.ComplaintSourceID = complaint.ComplaintSourceID;
        this.ComplaintTrackingNo = complaint.ComplaintTrackingNumber;
        this.ComplaintSourceName = complaint.ComplaintSourceName;
        this.EmailAddress = complaint.EmailAdress;
        this.FormName = complaint.FormName;
        this.FirstName = complaint.FirstName;
        this.FormID = complaint.FormID;
        this.FullDetailsOfComplaint = complaint.FullDetailsOfComplaint;
        this.HaveComplainedToOrganisationAlready = complaint.HaveComplainedToOrganisationAlready;
        this.LastName = complaint.LastName;
        this.OrganisationComplainedTo = complaint.OrganisationComplainedTo;
        this.OtherOrganisationComplainedTo = complaint.OtherOrganisationComplainedTo
        this.PhoneNumber = complaint.PhoneNumber;
        this.PhysicalAddress = complaint.PhysicalAddress;
        this.ReasonsForComplaint = complaint.ReasonForTheComplaint;
        this.RemedialActions = complaint.RemedialActions;
        this.PersonalDataAffected = complaint.PersonalDataAffected;
        this.comments = complaint.comments;
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

export const COMPLAINT_JSON = {
    'id': 1,
    'regNo':'C202100001',
    'personalDataAffected': [PersonalDataAffected.NATIONALITY,PersonalDataAffected.AGE],
    'status': 'Submitted',
    'reasonForTheComplaint': 'Processing personal data without appropriate security measures',
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

export const COMPLAINT_DEMO_DATA = [
    {
        'id': 1,
        'regNo':'C202100001',
        'addressedTo': 'Uganda Revenue Authority',
        'personalDataAffected': [PersonalDataAffected.NATIONALITY,PersonalDataAffected.AGE],
        'status': 'Submitted',
        'reasonForTheComplaint': 'Processing personal data without appropriate security measures',
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

export const BREACHES_JSON = [{
    
    'personalDataAffected': [
        {
            'dataCategory':
                {
                    'id': '3',
                    'name': 'Biometric Information',
                    'subCategories': [
                        {
                            'id': '1',
                            'value': 'Genetic'
                        },
                        {
                            'id': '2',
                            'value': 'Physiological.'
                        },
                        {
                            'id': '3',
                            'value': 'Behavioural.'
                        },
                        {
                            'id': '4',
                            'value': 'Biological characteristics.'
                        }
                    ]
                },
            'dataSubCategory': [],
            
        },
        {
            'dataCategory':
                {
                    'id': '3',
                    'name': 'Biometric Information',
                    'subCategories': [
                        {
                            'id': '1',
                            'value': 'Genetic'
                        },
                        {
                            'id': '2',
                            'value': 'Physiological.'
                        },
                        {
                            'id': '3',
                            'value': 'Behavioural.'
                        },
                        {
                            'id': '4',
                            'value': 'Biological characteristics.'
                        }
                    ]
                },
            'dataSubCategory': [],
            
        }
    ],
    
}];

export const BREACH_JSON = {
    'id': 'DAB/16/10/21/4651',
    'incidentDate': '2021-02-02T21:00:00.000Z',
    'howIncidentHappened': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    'delayInReporting': true,
    'reasonForDelay': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    'measuresInPlace': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'status': 'SUBMITTED',
    'policies': [
        {
            'id': 1,
            'policy': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            'explanation': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            'implementationDate': '2021-02-02T21:00:00.000Z'
        }
    ],
    'personalDataAffected': [
        {
            'dataCategory':
                {
                    'id': '3',
                    'name': 'Biometric Information',
                    'subCategories': [
                        {
                            'id': '1',
                            'value': 'Genetic'
                        },
                        {
                            'id': '2',
                            'value': 'Physiological.'
                        },
                        {
                            'id': '3',
                            'value': 'Behavioural.'
                        },
                        {
                            'id': '4',
                            'value': 'Biological characteristics.'
                        }
                    ]
                },

            'dataSubCategory': [
                {
                    'id': '1',
                    'value': 'Genetic'
                },
                {
                    'id': '2',
                    'value': 'Physiological.'
                },
                {
                    'id': '3',
                    'value': 'Behavioural.'
                },
                {
                    'id': '4',
                    'value': 'Biological characteristics.'
                }
            ],
            'toWhatExtent': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            'affectedIndividuals': '5',
            'recordsInvolved': '5',
            'individualAwareness': true,
            'individualComplain': true,
        },
        {
            'dataCategory':
                {
                    'id': '3',
                    'name': 'Individual Commercial Information',
                    'subCategories': [
                        {
                            'id': '1',
                            'value':  "Records of personal propert"
                        },
                        {
                            'id': '2',
                            'value':"Purchasing habits."
                        },
                    ]
                },

            'dataSubCategory': [
                {
                    'id': '1',
                    'value':  "Records of personal propert"
                },
                {
                    'id': '2',
                    'value':"Purchasing habits."
                },
            ],
            'toWhatExtent': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            'affectedIndividuals': '5',
            'recordsInvolved': '5',
            'individualAwareness': true,
            'individualComplain': true,
        },
    ],
    'containmentAndRecovery': {
        'actionTaken': true,
        'detailsOfActionTaken': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        'hasDataBeenRecovered': true,
        'detailsOfRecovery': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        'dateOfRecovery': '2021-02-02T21:00:00.000Z',
        'preventionSteps': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    'miscellaneous': {
        'medialCoverageOfIncident': true,
        'regulatoryBodiesNotified': true
    },
    'registrationDate': '2021-02-02T21:00:00.000Z',
    'impactOfBreach': [
        {
            'id': '1',
            'rating': '1',
            'impact': 'Affected Data subject will be required to submit information afresh or fill forms again'
        },
        {
            'id': '2',
            'rating': '1',
            'impact': 'Affected Data subject may receive unsolicited email as a result of the breach'
        },
    ],
    'potentialConsequences': [
        {
            'id': '1',
            'potentialConsquence': 'Loss of Confidentiality',
            'additional': 'A paper file or equipment is lost or stolen.'
        },
        {
            'id': '1',
            'potentialConsquence': 'Loss of Confidentiality',
            'additional': 'Paper or equipment left accessible in an unsecured location.  '
        },
        {
            'id': '1',
            'potentialConsquence': 'Loss of Confidentiality',
            'additional': 'Mail lost or opened before being returned to sender.    '
        },
        {
            'id': '1',
            'potentialConsquence': 'Loss of Confidentiality',
            'additional': 'Hacking, malware (e.g. ransomware) and/ or phishing.    '
        },
    ],
    'controls': [],
    'causes': [
        {
            'cause': 'Malicious internal act',
            'code': 'CA9238',
            'id': '5'
        },
        {
            'cause': 'Accidental internal act',
            'code': 'C2333',
            'id': '2'
        },
    ],
    'reportedBy': 'enockm15',
    'companyReporting': 'MTN Uganda',
    'assignedTo': 'angella',
    'lastModifiedDate': '2021-02-02T21:00:00.000Z'
};



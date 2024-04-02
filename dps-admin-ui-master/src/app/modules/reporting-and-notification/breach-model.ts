import {DataAffectedCategoryModel, DataAffectedSubCategoryModel} from '../models/personal-data-affected.model';

export class BreachModel {
    id?: string;
    incidentDate?: string;
    howIncidentHappened?: string;
    delayInReporting?: boolean;
    reasonForDelay?: string;
    measuresInPlace?: string;
    status?: string;
    policies?: PolicyModel[];
    personalDataAffected?: PersonalDataModel[];
    containmentAndRecovery?: ContainmentAndRecoveryModel;
    miscellaneous?: MiscellaneousModel;
    registrationDate?: string;
    impactOfBreach?: ImpactOfBreachModel[];
    potentialConsequences?: PotentialConsequenceModel[];
    controls?: BreachControlModel[];
    causes?: CauseOfBreach[];
    companyReporting?: string;
    reportedBy?: string;
    assignedTo?: string;
    lastModifiedDate?: string;
    BreachStatusID: number;
    TechnicalComments: string;
    LegalComments:string;
    ResolutionComments:string;

}


export class TableBreachModel {
    BreachStatusID: number;
    DataBreachID: number;
    DataBreachTrackingNo: string;
    CategoriesOfDataSubjectAffected: string;
    IncidentDate: string;
    DataBreachType:string;
    NumberOfDataSubjects: number;
    NumberOfRecordsHeld:number;
    OrganisationID:number;
    OrganisationName:string;
    StatusName:string;

    constructor(breach) {
        this.BreachStatusID = breach.BreachStatusID;
        this.DataBreachID = breach.DataBreachID;
        this.DataBreachTrackingNo = breach.DataBreachTrackingNo;
        this.CategoriesOfDataSubjectAffected = breach.CategoriesOfDataSubjectAffected;
        this.IncidentDate = breach.IncidentDate;
        this.DataBreachType = breach.DataBreachType;
        this.NumberOfDataSubjects = breach.NumberOfDataSubjects;
        this.NumberOfRecordsHeld = breach.NumberOfRecordsHeld;
        this.OrganisationID = breach.OrganisationID;
        this.OrganisationName = breach.OrganisationName;
        this.StatusName = breach.StatusName;
    }
}

export class PolicyModel {
    id?: number;
    policy?: string;
    explanation?: string;
    implementationDate?: string;
}

export class PersonalDataRisk {
    personalDataCategory?: string;
    extentDetails?: string;
    dataSubjectsAffected?: number;
    dataRecordsAffected?: number;
    individualAwarenessOfIncident?: string;
    consequencesAndEffects?: string;
    hasIndividualComplained?: string;
}

export class PersonalDataModel {
    dataCategory: DataAffectedCategoryModel;
    dataSubCategory: DataAffectedSubCategoryModel[];
    toWhatExtent: string;
    affectedIndividuals: string;
    recordsInvolved: string;
    individualAwareness: boolean;
    individualComplain: boolean;
}


export class PersonalData {
    personalDataCategory?: string;
    extentDetails?: string;
}

export class ContainmentAndRecoveryModel {
    actionTaken?: boolean;
    detailsOfActionTaken?: string;
    hasDataBeenRecovered?: boolean;
    detailsOfRecovery?: string;
    dateOfRecovery?: string;
    preventionSteps?: string;
}

export class MiscellaneousModel {
    medialCoverageOfIncident?: boolean;
    regulatoryBodiesNotified?: boolean;
}

export class DataProtectionOfficerModel {
    firstName?: string;
    lastName?: string;
    address?: string;
    email?: string;
    phoneNumber?: string;
}

export class ImpactOfBreachModel {
    id: string;
    rating: string;
    impact: string;
}

export class CauseOfBreach {
    id: string;
    cause: string;
}

export class BreachCauses{
    CauseID: number;
    CauseName : string;
}

export class PotentialHarms{

    HarmDescriptionID: number;
    HarmDescription: string;
    HarmRatingID:number;
    HarmRatingSummary:string;
    HarmRatingDescription:string;
}

export class ConsequenceModel {
    id: string;
    code: string;
    consquence: string;
}

export class BreachDescriptionQuestions {
    BreacheDescriptionID: number;
    BreachDescription: string;
    ConsequenceID: number;
    ConsequenceName: string;

}

export class PotentialConsequenceModel {
    id: string;
    potentialConsquence: string;
    additional: string;
}

export const CAUSE_OF_BREACH: Array<{
    id: string; code: string; cause: string;
}> =
    [
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
        {
            'cause': 'Malicious external act',
            'code': 'CA0002',
            'id': '1'
        },
        {
            'cause': 'Unknown',
            'code': 'CA0003',
            'id': '4'
        },
        {
            'cause': 'Other',
            'code': 'CA0005',
            'id': '6'
        }
    ];
export const IMPACT_OF_BREACH: Array<{
    id: string, rating: string, impact: string
}> =
    [
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
        {
            'id': '3',
            'rating': '1',
            'impact': 'Affected Data subject may be inconvenienced by marketing ads'
        },
        {
            'id': '4',
            'rating': '1',
            'impact': 'Affected Data subject may be inconvenienced by marketing ads'
        },
        {
            'id': '5',
            'rating': '1',
            'impact': 'Affected Data subject may experience loss of privacy but without risk of financial, psycological or physical harm'
        },
        {
            'id': '2',
            'rating': '1',
            'impact': 'Affected Data Subject may suffer fines or additional cost to renew a service as a result of the breach'
        },
        {
            'id': '2',
            'rating': '2',
            'impact': 'Affected Data subject may receive unsolicited targeted mailings likely to damage theire reputation'
        },
        {
            'id': '2',
            'rating': '2',
            'impact': 'Affected Data Subject may suffer targeted online advertising on a private aspect that the individual wanted to keep confidential (e.g. pregnancy advertising, drug treatment).  '
        },
        {
            'id': '4',
            'rating': '2',
            'impact': 'Affected Data Subject may suffer intimidation on social networks or cyber bullying'
        },
        {
            'id': '4',
            'rating': '2',
            'impact': 'Affected Data Subject may suffer defamation or loss of reputation'
        },
        {
            'id': '3',
            'rating': '3',
            'impact': 'Data Subjects may suffer financial loss as a result of a fraud (e.g. after an attempted phishing);       '
        },
        {
            'id': '3',
            'rating': '3',
            'impact': 'Data Subjects may suffer violation of fundametal human rights as a result of a breach e.g Discrimination, Persecution'
        },
        {
            'id': '3',
            'rating': '3',
            'impact': 'Data Subject may lose opportunities as a result of the breach e.g loss of scholarship'
        },
        {
            'id': '3',
            'rating': '3',
            'impact': 'Data Subject may suffer damage to property'
        },
        {
            'id': '4',
            'rating': '4',
            'impact': 'Data subject may fail to work or lose a job.'
        },
        {
            'id': '4',
            'rating': '4',
            'impact': 'Data subject may suffer long-term or permanent psychological ailments;           '
        },
        {
            'id': '4',
            'rating': '4',
            'impact': 'Data subject may suffer financial risk        '
        },
        {
            'id': '4',
            'rating': '4',
            'impact': ' The data breach will result in loss of access to vital infrastructure e.g water, electricity'
        },
        {
            'id': '4',
            'rating': '4',
            'impact': 'The data breach exposed data belonging to chidren'
        },
        {
            'id': '4',
            'rating': '4',
            'impact': 'Data Breach exposed name, NIN and other personal data'
        }
    ];

export const CONSQUENCES: Array<{
    id: string; code: string; consquence: string
}> =
    [
        {
            'id': '1',
            'code': 'LOC001',
            'consquence': 'Loss of Confidentiality',
        },
        {
            'id': '1',
            'code': 'PC9234',
            'consquence': 'Loss of Integrity',
        },
        {
            'id': '1',
            'code': 'LOC003',
            'consquence': 'Loss of availablity',
        }
    ];

export const POTENTIAL_CONSQUENCES: Array<{
    id: string, potentialConsquence: string, additional: string
}> =
    [
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
        {
            'id': '1',
            'potentialConsquence': 'Loss of Confidentiality',
            'additional': 'Disposal of paper documents containing personal data without physical destruction.          '
        },
        {
            'id': '1',
            'potentialConsquence': 'Loss of Confidentiality',
            'additional': 'Disposal of equipment containing personal data without secure erasure.      '
        },
        {
            'id': '1',
            'potentialConsquence': 'Loss of Confidentiality',
            'additional': 'Non-voluntary publication of information'
        },
        {
            'id': '1',
            'potentialConsquence': 'Loss of Confidentiality',
            'additional': 'Data from the wrong person displayed on the customer portal.  '
        },
        {
            'id': '1',
            'potentialConsquence': 'Loss of Confidentiality',
            'additional': 'An e-mail with personal data has been wrongly sent to a number of known recipients.'
        },
        {
            'id': '1',
            'potentialConsquence': 'Loss of Confidentiality',
            'additional': 'Some customers could access other customers’ accounts in an online service.        '
        },
        {
            'id': '1',
            'potentialConsquence': 'Loss of Confidentiality',
            'additional': 'Data is published on a social media page.'
        },
        {
            'id': '1',
            'potentialConsquence': 'Loss of Confidentiality',
            'additional': 'An employee sold or lost hardware, such as, laptop with customer data.'
        },
        {
            'id': '1',
            'potentialConsquence': 'Loss of Confidentiality',
            'additional': 'A wrongly configured website makes publically accessible on internet, data from internal users.'
        },
        {
            'id': '',
            'potentialConsquence': 'Loss of Integrity',
            'additional': 'Data altered but without any identified incorrect or illegal use, e.g.  The records of a database with personal data have been wrongly updatedbut the original has been obtained before any use of the altered data occurred.'
        },
        {
            'id': '',
            'potentialConsquence': 'Loss of Integrity',
            'additional': 'Data has been altered and possibly used in an incorrect or illegal way but with possibility to recover and restore the correct data     '
        },
        {
            'id': '',
            'potentialConsquence': 'Loss of Integrity',
            'additional': 'Data altered and possibly used in an incorrect or illegal way without possibility to recover e.g Back up is corrupted and original has been altered '
        },
        {
            'id': '1',
            'potentialConsquence': 'Loss of availablity',
            'additional': 'A copy of file is lost but other copies are available.'
        },
        {
            'id': '1',
            'potentialConsquence': 'Loss of availablity',
            'additional': 'A database is corrupted but can be easily reconstructed from other databases.                   '
        },
        {
            'id': '1',
            'potentialConsquence': 'Loss of availablity',
            'additional': 'A database is corrupted but can be reconstructed from other databases, although some processing is required.'
        },
        {
            'id': '1',
            'potentialConsquence': 'Loss of availablity',
            'additional': 'A file is lost but the information can be provided again by the individual.      '
        },
        {
            'id': '1',
            'potentialConsquence': 'Loss of availablity',
            'additional': 'A file is lost/database corrupted, there is not back up of this information, and it cannot be provided by the individual. '
        }
    ];

export class BreachControlReferenceModel {
    id: string;
    name: string;
    code: string;
}

export class BreachControlCategoryReferenceModel {
    id: string;
    name: string;
    desc: string;
    code: string;
}

export class BreachControlModel {
    id: string;
    code: string;
    controlName: string;
    subCategoryName: string;
    subCategoryDesc: string;
}

export const BREACH_CONTROL: Array<{
    id: string; name: string; code: string
}> =
    [
        {
            'id': '1',
            'code': 'C932',
            'name': 'Inventory and Control of Hardware Assets',
        },

        {
            'id': '1',
            'code': 'C2938',
            'name': 'Inventory and Control of software Assets',
        },

        {
            'id': '1',
            'code': 'C9823',
            'name': 'Continuous Vulnerability Management'
        },

        {
            'id': '12',
            'code': 'C938',
            'name': 'Controlled Use of Administrative Privileges',
        },

        {
            'id': '1',
            'code': 'C2389',
            'name': 'Secure Configuration for Hardware and Software on Mobile Devices, Laptops, Workstations and Servers',
        },
    ];

export const CONTROLS: Array<{
    id: string, code: string, controlName: string, subCategoryName: string, subCategoryDesc: string
}> =
    [
        {
            'id': '1',
            'code': 'C932',
            'controlName': 'Inventory and Control of Hardware Assets',
            'subCategoryName': 'Utilize an Active Discovery',
            'subCategoryDesc': 'ToolUtilize an active discovery tool to identify devices connected to the organization\'s network and update the hardware asset inventory.'
        },
        {
            'id': '1',
            'code': 'C932',
            'controlName': 'Inventory and Control of Hardware Assets',
            'subCategoryName': 'Use a Passive Asset Discovery Tool',
            'subCategoryDesc': 'Utilize a passive discovery tool to identify devices connected to the organization\'s network and automatically update the organization\'s hardware asset inventory.'
        },
        {
            'id': '1',
            'code': 'C932',
            'controlName': 'Inventory and Control of Hardware Assets',
            'subCategoryName': 'Use DHCP Logging to Update Asset Inventory',
            'subCategoryDesc': 'Use Dynamic Host Configuration Protocol (DHCP) logging on all DHCP servers or IP address management tools to update the organization\'s hardware asset inventory.'
        },
        {
            'id': '1',
            'code': 'C932',
            'controlName': 'Inventory and Control of Hardware Assets',
            'subCategoryName': 'Maintain Detailed Asset Inventory',
            'subCategoryDesc': 'Maintain an accurate and up-to-date inventory of all technology assets with the potential to store or process information. This inventory shall include all hardware assets, whether connected to the organization\'s network or not.'
        },
        {
            'id': '1',
            'code': 'C932',
            'controlName': 'Inventory and Control of Hardware Assets',
            'subCategoryName': 'Maintain Asset Inventory Information',
            'subCategoryDesc': 'Ensure that the hardware asset inventory records the network address, hardware address, machine name, data asset owner, and department for each asset and whether the hardware asset has been approved to connect to the network.'
        },
        {
            'id': '1',
            'code': 'C932',
            'controlName': 'Inventory and Control of Hardware Assets',
            'subCategoryName': 'Address Unauthorized Assets',
            'subCategoryDesc': 'Ensure that unauthorized assets are either removed from the network, quarantined, or the inventory is updated in a timely manner.'
        },
        {
            'id': '1',
            'code': 'C932',
            'controlName': 'Inventory and Control',
            'subCategoryName': 'Deploy Port Level Access Control',
            'subCategoryDesc': 'Utilize port level access control, following 802.1x standards, to control which devices can authenticate to the network. The authentication system shall be tied into the hardware asset inventory data to ensure only authorized devices can connect to the network.'
        },
        {
            'id': '1',
            'code': 'C932',
            'controlName': 'Inventory and Control of Hardware Assets',
            'subCategoryName': 'Utilize Client Certificates to Authenticate Hardware Assets',
            'subCategoryDesc': 'Use client certificates to authenticate hardware assets connecting to the organization\'s trusted network.'
        },
        {
            'id': '1',
            'code': '',
            'controlName': 'Inventory and Control of software Assets',
            'subCategoryName': 'Maintain Inventory of Authorized Software',
            'subCategoryDesc': 'Maintain an up-to-date list of all authorized software that is required in the enterprise for any business purpose on any business system.'
        },
        {
            'id': '1',
            'code': '',
            'controlName': 'Inventory and Control of software Assets',
            'subCategoryName': 'Ensure Software is Supported by Vendor',
            'subCategoryDesc': 'Ensure that only software applications or operating systems currently supported and receiving vendor updates are added to the organization\'s authorized software inventory. Unsupported software should be tagged as unsupported in the inventory system.'
        },
        {
            'id': '1',
            'code': '',
            'controlName': 'Inventory and Control of software Assets',
            'subCategoryName': 'Utilize Software Inventory Tools',
            'subCategoryDesc': 'Utilize software inventory tools throughout the organization to automate the documentation of all software on business systems.'
        },
        {
            'id': '1',
            'code': '',
            'controlName': 'Inventory and Control of software Assets',
            'subCategoryName': 'Track Software Inventory Information',
            'subCategoryDesc': 'The software inventory system should track the name, version, publisher, and install date for all software, including operating systems authorized by the organization.'
        },
        {
            'id': '1',
            'code': '',
            'controlName': 'Inventory and Control of software Assets',
            'subCategoryName': 'Integrate Software and Hardware Asset Inventories',
            'subCategoryDesc': 'The software inventory system should be tied into the hardware asset inventory so all devices and associated software are tracked from a single location.'
        },
        {
            'id': '1',
            'code': '',
            'controlName': 'Inventory and Control of software Assets',
            'subCategoryName': 'Address unapproved software Ensure',
            'subCategoryDesc': 'that unauthorized software is either removed or the inventory is updated in a timely manner'
        },
        {
            'id': '1',
            'code': '',
            'controlName': 'Inventory and Control of software Assets',
            'subCategoryName': 'Utilize Application Whitelisting',
            'subCategoryDesc': 'Utilize application whitelisting technology on all assets to ensure that only authorized software executes and all unauthorized software is blocked from executing on assets.'
        },
        {
            'id': '1',
            'code': '',
            'controlName': 'Inventory and Control of software Assets',
            'subCategoryName': 'Implement Application Whitelisting of Libraries',
            'subCategoryDesc': 'The organization\'s application whitelisting software must ensure that only authorized software libraries (such as *.dll, *.ocx, *.so, etc.) are allowed to load into a system process.'
        },
        {
            'id': '1',
            'code': '',
            'controlName': 'Inventory and Control of software Assets',
            'subCategoryName': 'Implement Application Whitelisting of Scripts',
            'subCategoryDesc': 'The organization\'s application whitelisting software must ensure that only authorized, digitally signed scripts (such as *.ps1,  *.py, macros, etc.) are allowed to run on a system.'
        },
        {
            'id': '1',
            'code': '',
            'controlName': 'Inventory and Control of software Assets',
            'subCategoryName': 'Physically or Logically Segregate High Risk Applications',
            'subCategoryDesc': 'Physically or logically segregated systems should be used to isolate and run software that is required for business operations but incurs higher risk for the organization.'
        },
        {
            'id': '1',
            'code': 'C9823',
            'controlName': 'Continuous Vulnerability Management',
            'subCategoryName': 'Run Automated Vulnerability Scanning Tools',
            'subCategoryDesc': 'Utilize an up-to-date Security Content Automation Protocol (SCAP) compliant vulnerability scanning tool to automatically scan all systems on the network on a weekly or more frequent basis to identify all potential vulnerabilities on the organization\'s systems.'
        },
        {
            'id': '1',
            'code': 'C9823',
            'controlName': 'Continuous Vulnerability Management',
            'subCategoryName': 'Perform Authenticated Vulnerability Scanning',
            'subCategoryDesc': 'Perform authenticated vulnerability scanning with agents running locally on each system or with remote scanners that are configured with elevated rights on the system being tested.'
        },
        {
            'id': '1',
            'code': 'C9823',
            'controlName': 'Continuous Vulnerability Management',
            'subCategoryName': 'Protect Dedicated Assessment Accounts',
            'subCategoryDesc': 'Use a dedicated account for authenticated vulnerability scans, which should not be used for any other administrative activities and should be tied to specific machines at specific IP addresses.'
        },
        {
            'id': '1',
            'code': 'C9823',
            'controlName': 'Continuous Vulnerability Management',
            'subCategoryName': 'Deploy Automated Operating System Patch Management Tools',
            'subCategoryDesc': 'Deploy automated software update tools in order to ensure that the operating systems are running the most recent security updates provided by the software vendor.'
        },
        {
            'id': '1',
            'code': 'C9823',
            'controlName': 'Continuous Vulnerability Management',
            'subCategoryName': 'Deploy Automated Software Patch Management Tools',
            'subCategoryDesc': 'Deploy automated software update tools in order to ensure that third-party software on all systems is running the most recent security updates provided by the software vendor.'
        },
        {
            'id': '1',
            'code': 'C9823',
            'controlName': 'Continuous Vulnerability Management',
            'subCategoryName': 'Compare Back-to-Back Vulnerability Scans',
            'subCategoryDesc': 'Regularly compare the results from consecutive vulnerability scans to verify that vulnerabilities have been remediated in a timely manner.'
        },
        {
            'id': '1',
            'code': 'C9823',
            'controlName': 'Continuous Vulnerability Management',
            'subCategoryName': 'Utilize a Risk-Rating Process',
            'subCategoryDesc': 'Utilize a risk-rating process to prioritize the remediation of discovered vulnerabilities.'
        },
        {
            'id': '12',
            'code': 'C9238',
            'controlName': 'Controlled Use of Administrative Privileges',
            'subCategoryName': 'Maintain Inventory of Administrative Accounts',
            'subCategoryDesc': 'Use automated tools to inventory all administrative accounts, including domain and local accounts, to ensure that only authorized individuals have elevated privileges.'
        },
        {
            'id': '12',
            'code': 'C9238',
            'controlName': 'Controlled Use of Administrative Privileges',
            'subCategoryName': 'Change Default Passwords',
            'subCategoryDesc': 'Before deploying any new asset, change all default passwords to have values consistent with administrative level accounts.'
        },
        {
            'id': '12',
            'code': 'C9238',
            'controlName': 'Controlled Use of Administrative Privileges',
            'subCategoryName': 'Ensure the use of  Dedicated Administrative Accounts',
            'subCategoryDesc': 'nsure that all users with administrative account access use a dedicated or secondary account for elevated activities. This account should only be used for administrative activities and not internet browsing, email, or similar activities.'
        },
        {
            'id': '12',
            'code': 'C9238',
            'controlName': 'Controlled Use of Administrative Privileges',
            'subCategoryName': 'Use Unique Passwords',
            'subCategoryDesc': 'Where multi-factor authentication is not supported (such as local administrator, root, or service accounts), accounts will use passwords that are unique to that system.'
        },
        {
            'id': '12',
            'code': 'C9238',
            'controlName': 'Controlled Use of Administrative Privileges',
            'subCategoryName': 'Use Multi-Factor Authentication for All Administrative Access',
            'subCategoryDesc': 'Use multi-factor authentication and encrypted channels for all administrative account access.'
        },
        {
            'id': '12',
            'code': 'C9238',
            'controlName': 'Controlled Use of Administrative Privileges',
            'subCategoryName': 'Use Dedicated Workstations For All Administrative Tasks',
            'subCategoryDesc': 'Ensure administrators use a dedicated machine for all administrative tasks or tasks requiring administrative access. This machine will be segmented from the organization\'s primary network and not be allowed Internet access. This machine will not be used for reading e-mail, composing documents, or browsing the Internet.'
        },
        {
            'id': '12',
            'code': 'C9238',
            'controlName': 'Controlled Use of Administrative Privileges',
            'subCategoryName': 'Limit Access to Script Tools',
            'subCategoryDesc': 'Limit access to scripting tools (such as Microsoft® PowerShell and Python) to only administrative or development users with the need to access those capabilities.'
        },
        {
            'id': '12',
            'code': 'C9238',
            'controlName': 'Controlled Use of Administrative Privileges',
            'subCategoryName': 'Log and Alert on Changes to Administrative Group Membership',
            'subCategoryDesc': 'Configure systems to issue a log entry and alert when an account is added to or removed from any group assigned administrative privileges.'
        },
        {
            'id': '12',
            'code': 'C9238',
            'controlName': 'Controlled Use of Administrative Privileges',
            'subCategoryName': 'Log and Alert on Unsuccessful Administrative Account Login',
            'subCategoryDesc': 'Configure systems to issue a log entry and alert on unsuccessful logins to an administrative account.'
        },
        {
            'id': '1',
            'code': 'C2387',
            'controlName': 'Secure Configuration for Hardware and Software on Mobile Devices, Laptops, Workstations and Servers',
            'subCategoryName': 'Establish Secure Configurations',
            'subCategoryDesc': 'Maintain documented security configuration standards for all authorized operating systems and software.'
        },
        {
            'id': '1',
            'code': 'C2387',
            'controlName': 'Secure Configuration for Hardware and Software on Mobile Devices, Laptops, Workstations and Servers',
            'subCategoryName': 'Maintain Secure Images',
            'subCategoryDesc': 'Maintain secure images or templates for all systems in the enterprise based on the organization\'s approved configuration standards. Any new system deployment or existing system that becomes compromised should be imaged using one of those images or templates.'
        },
        {
            'id': '1',
            'code': 'C2387',
            'controlName': 'Secure Configuration for Hardware and Software on Mobile Devices, Laptops, Workstations and Servers',
            'subCategoryName': 'Securely Store Master Images',
            'subCategoryDesc': 'Store the master images and templates on securely configured servers, validated with integrity monitoring tools, to ensure that only authorized changes to the images are possible.'
        },
        {
            'id': '1',
            'code': 'C2387',
            'controlName': 'Secure Configuration for Hardware and Software on Mobile Devices, Laptops, Workstations and Servers',
            'subCategoryName': 'Deploy System Configuration Management Tools',
            'subCategoryDesc': 'Deploy system configuration management tools that will automatically enforce and redeploy configuration settings to systems at regularly scheduled intervals.'
        },
        {
            'id': '1',
            'code': 'C2387',
            'controlName': 'Secure Configuration for Hardware and Software on Mobile Devices, Laptops, Workstations and Servers',
            'subCategoryName': 'Implement Automated Configuration Monitoring Systems',
            'subCategoryDesc': 'Utilize a Security Content Automation Protocol (SCAP) compliant configuration monitoring system to verify all security configuration elements, catalog approved exceptions, and alert when unauthorized changes occur.'
        }
    ];

export const BREACHES_JSON = [{
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
            'policy': '',
            'explanation': '',
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
            'dataSubCategory': [],
            'toWhatExtent': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            'affectedIndividuals': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            'recordsInvolved': '5',
            'individualAwareness': true,
            'individualComplain': true,
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
            'toWhatExtent': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            'affectedIndividuals': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            'recordsInvolved': '5',
            'individualAwareness': true,
            'individualComplain': true,
        }
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




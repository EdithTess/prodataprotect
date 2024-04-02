import { Injectable } from '@angular/core';
import { env } from 'process';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointsService {

  // /* Wordpress Content Management System End Points */
  // carousel = environment.cmsBaseUrlProxy + 'home-carousel?_embed';
  // news = environment.cmsBaseUrlProxy + 'news?_embed';

  /* Python API End Points */
  orgRegistration = environment.pythonApi + 'org-registration';
  getOrgRegDetails = environment.pythonApi + 'org-registration/single';
  getOrgRegDetailsMinimal = environment.pythonApi + 'org-registration/all/minimal-data';
  getOrgDetailsById = environment.pythonApi + 'org-registration/byorgid/single';
  getOrganisationDetailsById = environment.pythonApi + 'org-registration/byorganisationid/single';
  requestMoreInfo = environment.pythonApi + 'workflow/request-more-info';
  orgRegSaveDraft = environment.pythonApi + 'org-registration/save-draft';
  
  complaints = environment.pythonApi + 'complaints';
  getComplaint = environment.pythonApi + 'complaints/single';
  updateComplaintStatus = environment.pythonApi + 'complaints/update-status';
  updateComplaint =  environment.pythonApi + 'complaints/update-complaint-details';
  countries = environment.pythonApi + 'reference/countries';
  dataSources = environment.pythonApi + 'reference/data_source';
  organisationType = environment.pythonApi + 'reference/organisation_type';
  sector = environment.pythonApi + 'reference/sector';
  dataSubcategories = environment.pythonApi + 'reference/get_category_subcategories';
  dataPurpose = environment.pythonApi + 'reference/data_purpose';
  natureOfBusiness = environment.pythonApi + 'reference/nature-of-business';
  getOrganisations = environment.pythonApi + 'complaints/getOrganisations';
  analyticsDppCategoryTotals = environment.pythonApi + 'analytics/dpp-category-totals';
  analyticsTotalMonthlyRegistrations = environment.pythonApi + 'analytics/total-monthly-registrations';
  getBreachDescriptionDetails = environment.pythonApi + 'data-breach/reference/breach-description-questions'
  getBreachCauses = environment.pythonApi + 'data-breach/reference/breach-causes';
  getPotentialHarms = environment.pythonApi + 'data-breach/reference/breach-potential-harms';
  notifications = environment.pythonApi + 'org-notifications';
  reportBreach = environment.pythonApi + 'data-breach/';
  getBreaches = environment.pythonApi + 'data-breach/';
  updateBreachStatus = environment.pythonApi + 'data-breach/forward-breach';
  updateInvestigationStatus = environment.pythonApi + 'investigations/update-status';
  getKeycloakRoles =  environment.pythonApi + 'account-management/get-roles';
  addUser = environment.pythonApi + 'account-management/add-user';
  makeInvestigationNotes = environment.pythonApi + 'investigations/make-notes';
  getInvestigationNotes = environment.pythonApi + 'investigations/investigation-notes';
  renewApplication = environment.pythonApi + 'org-registration/renew-application';

  updateRegistrationDetails =  environment.pythonApi + 'org-registration/update-registration';

  getCertificateDetails = environment.pythonApi + 'org-registration/previous-certificate-details';
  
  updateRegistrationUpdateStatus = environment.pythonApi + 'org-registration/registration-update-status';

  getUpdatedRegistrationDetails = environment.pythonApi + 'org-registration/updated-information';

  completeUpdate = environment.pythonApi + 'org-registration/complete-update-registration';
  // notifications = 'https://appliedprinciplesenv.com/api/v1.0/reference/get_category_subcategories';
  // notifications = 'https://appliedprinciplesenv.com/api/v1.0/org-notifications';

  CheckComplaintRequestForInfo =  environment.pythonApi + 'complaints/complaint-request-more-information'
  GetComplaintRequestForInfo =  environment.pythonApi + 'complaints/complaint-get-all-request-more-information'

  CheckBreachRequestForInfo =  environment.pythonApi + 'data-breach/breach-request-more-information'
  GetBreachRequestForInfo =  environment.pythonApi + 'data-breach/breaches-get-all-request-more-information'

  generatePRN = environment.pythonApi + 'ura/generate-prn';
  checkPRN = environment.pythonApi + 'ura/check-prn-status';

  registeredOrganisations =  environment.pythonApi +'analytics/number-of-organisations-registered';
  organisationsUnderReview =  environment.pythonApi +'analytics/number-of-organisations-under-review';
  registrationAverageTimeTaken =  environment.pythonApi +'analytics/average-time-taken-registration-review';
  amountOfMoneyGenerated = environment.pythonApi + 'analytics/amount-of-money-generated';


  complaintsReported =  environment.pythonApi +'analytics/number-of-complaints-reported';
  complaintsUnderReview =  environment.pythonApi +'analytics/number-of-complaints-under-review';
  complaintsAverageTimeTaken =  environment.pythonApi +'analytics/average-time-taken-complaint-review';


  breachesReported =  environment.pythonApi +'analytics/number-of-breaches-reported';
  breachesUnderReview =  environment.pythonApi +'analytics/number-of-breaches-under-review';
  breachesAverageTimeTaken =  environment.pythonApi +'analytics/average-time-taken-breaches-review';

  getReviewComments = environment.pythonApi + 'org-registration/officer-comments';

  verifyCertificate = environment + 'data-protection-register/verify-certificate';

  getCancelRegistration = environment.pythonApi + 'org-registration/cancel-single-request';

  cancelRegistration = environment.pythonApi + 'org-registration/cancel-request';

  confirmCancelRegistration = environment.pythonApi + 'org-registration/cancel-approval-request';

  updateOrganisationRegistrationDetails = environment.pythonApi + 'org-registration/complete-update-registration';

  checkCertificate = environment.pythonApi + 'org-registration/check-certification';
}

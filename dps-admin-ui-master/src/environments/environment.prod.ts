
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

// export const environment = {
//   production: false,
// // Formats
//   defaultLanguage: 'en',
//   defaultCountryCode: 'UG',
//   defaultDisplayDateFormat: 'dd/MM/yyyy',
//   defaultDisplayDateTimeFormat: 'dd/MM/yyyy HH:mm:ss',
//   defaultLocale: 'en-UG',
//   defaultServerDateFormat: 'yyyy-MM-dd',
//   defaultServerDateTimeFormat: 'yyyy-MM-ddTHH:mm:ss',
//   defaultDigitalInfo: '1.0-2',
//   // googleMapsApiKey: '',
//   backend: 'https://appliedprinciplesenv.com/api/',
//   keycloakAdmin: 'http://localhost:8080/auth/realms/dataProtectionSolution/',
//   pythonApi: 'https://appliedprinciplesenv.com/api/v1.0/',

//   keycloakConfig: {
//     clientId: 'dps-frontend',
//     realm: 'dataProtectionSolution',
//     url: 'http://localhost:8080/auth',
//     redirectUrl: 'http://localhost:4400/',
//     loginOption: 'check-sso'
//   }
// };

export const environment = {
  production: true,
  useHash: false,
  technicalErrorResponse: 'Please contact PDPO via servicedesk@gou.go.ug or call us on +256 759 848 259/ +256 417 801 053 for assistance. (WhatsApp number: +256 785 807 169)',
// Formats
  defaultLanguage: 'en',
  defaultCountryCode: 'UG',
  defaultDisplayDateFormat: 'dd/MM/yyyy',
  defaultDisplayDateTimeFormat: 'dd/MM/yyyy HH:mm:ss',
  defaultLocale: 'en-UG',
  defaultServerDateFormat: 'yyyy-MM-dd',
  defaultServerDateTimeFormat: 'yyyy-MM-ddTHH:mm:ss',
  defaultDigitalInfo: '1.0-2',
  // googleMapsApiKey: '',
  // keycloakAdmin: 'https://auth.dataprotection.go.ug/auth/realms/dataProtectionSolution/',
  //keycloakAdmin: 'https://auth.pdpo.go.ug/auth/realms/dataProtectionSolution/',
  keycloakAdmin: 'https://auth.pdpo.go.ug/auth/realms/dataProtectionSolution/',
  // pythonApi: 'https://dataprotection.go.ug/api/v1.0/',
  //pythonApi: 'https://pdpo.go.ug/api/v1.0/',
  pythonApi: 'https://pdpo.go.ug/api/v1.0/',
  // googleMapsApiKey: '',
  // backend: 'https://dataprotection.go.ug/api/', // Put your backend here
 // backend: 'https://pdpo.go.ug/api/', // Put your backend here
  backend: 'https://pdpo.go.ug/api/', // Put your backend here

  baseClientURL: 'https://pdpo.go.ug/',
  keycloakConfig: {
    clientId: 'dps-frontend',
    realm: 'dataProtectionSolution',
    // url: 'https://auth.dataprotection.go.ug/auth/',
    //url: 'https://auth.pdpo.go.ug/auth/',
    url: 'https://auth.pdpo.go.ug/auth/',
    //redirectUrl: 'https://login.dataprotection.go.ug/',
    //redirectUrl: 'https://appliedprinciplesenv.com',
    // redirectUrl: 'https://testapi.pdpo.go.ug/'
    redirectUrl: 'https://login.pdpo.go.ug/'
  }
};
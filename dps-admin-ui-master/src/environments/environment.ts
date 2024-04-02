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
  production: false,
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
  // keycloakAdmin: 'http://auth.dataprotection.go.ug/auth/realms/dataProtectionSolution/',
  // keycloakAdmin: 'http://auth.pdpo.go.ug/auth/realms/dataProtectionSolution/',
  keycloakAdmin: 'https://test.pdpo.go.ug/auth/realms/dataProtectionSolution/',
  // pythonApi: 'http://dataprotection.go.ug/api/v1.0/',
  // pythonApi: 'http://pdpo.go.ug/api/v1.0/',
  pythonApi: 'http://127.0.0.1:5000/api/v1.0/',
  // googleMapsApiKey: '',
  // backend: 'http://dataprotection.go.ug/api/', // Put your backend here
  // backend: 'http://pdpo.go.ug/api/', // Put your backend here
  // backend: 'http://appliedprinciplesenv.com/api/', // Put your backend here
  backend: 'http://127.0.0.1:5000/api/', // Put your backend here

  baseClientURL: 'https://appliedprinciplesenv.com/pdpo-client/',

  keycloakConfig: {
    clientId: 'dps-frontend',
    realm: 'dataProtectionSolution',
    // url: 'http://auth.dataprotection.go.ug/auth/',
    // url: 'http://auth.pdpo.go.ug/auth/',
    url: 'https://test.pdpo.go.ug/auth',
    // redirectUrl: 'http://login.dataprotection.go.ug/',
   // redirectUrl: 'http://local',
    redirectUrl: 'http://localhost:4200'
    // redirectUrl: 'http://login.pdpo.go.ug/'
  }
};
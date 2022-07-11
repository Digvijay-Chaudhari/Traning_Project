// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  url:"http://localhost:4200/BudgetData",
  requestUrl :"https://localhost:44381/api/RequestDetail/api/Requests",
  loginUrl :"https://localhost:44381/api/Login",
  userInfoUrl:"https://localhost:44381/api/UserInfo",
  requestDetailUrl:"https://localhost:44381/api/RequestDetail",
  frwdRequestUrl:"https://localhost:44381/api/ForwardedRequest",
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

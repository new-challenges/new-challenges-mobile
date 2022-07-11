export const asyncTypes = (action: string) => ({
  HANDLER: `${action}_HANDLER`, // start one request
  SUCCESS: `${action}_SUCCESS`, // call request success
  FAILURE: `${action}_FAILURE`, // call request fail
  CLEAR: `${action}_CLEAR`, // clear data
});

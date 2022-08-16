export const refreshTokenSetup = (res) => {
  let refreshTime = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTime = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    setTimeout(refreshToken, refreshTime);
  };
  setTimeout(refreshToken, refreshTime);
};

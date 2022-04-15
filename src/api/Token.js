const Token = () => {
  const header = JSON.parse(localStorage.getItem('header'))
  return {
    'access-token': header['access-token'],
    client: header['client'],
    expiry: header['expiry'],
    uid: header['uid'],
  };
};

export default Token

const serverUrl = "https://sfokqxai92ib.usemoralis.com:2053/server";
const appId = "lSU2dRH0Gz4lRHxfBz4C6DHKwRhAxZipOHkeP70m";
Moralis.start({ serverUrl, appId });
/* Authentication code */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console(error);
      });
  }
}
async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}
document.getElementById("mmLogin").onclick = login;
document.getElementById("mmSignout").onclick = logOut;
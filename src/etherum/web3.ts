import Web3 from "web3";

let web3
declare var window: any
// window variable is only available in windows, since next uses SSR, window won't be available

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    // We are in the browser and metamask is running.
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
  } else {
    // We are on the server *OR* the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
      process.env.NEXT_PUBLIC_SECRET as string
    );
    web3 = new Web3(provider);
  }
 
export default web3 as any;
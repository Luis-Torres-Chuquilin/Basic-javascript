/** @format */

// How to not write ...

import CyprusBankBranch from "./CyprusBankBranch";
const cyprusBankBranch0128 = new CyprusBankBranch("0128");
cyprusBankBranch0128.accounts; // []
cyprusBankBranch0128.generateAccount(); // undefined[{...}]
cyprusBankBranch0128.accounts;

/**
 * [{
 * accountId: "0000000000000000",
 * ibanFormatted: "CY95 0020 0128 0000 0000 0000 0000"
 * .}]
 */

import CyprusBank from "./CyprusBank";
class CyprusBankBranch extends CyprusBank {
  constructor(branchIdentifier) {
    super();
    this.branchIdentifier = branchIdentifier;
    this.accounts = [];
  }
  generateAccount() {
    let accountId;
    this.accounts.length > 0
      ? (accountId = this.accounts[this.accounts.length - 1].accountId + 1)
      : (accountId = "0000000000000000");
    let ibanFormatted = (
      this.countryCode +
      Math.floor(Math.random() * 100) +
      this.bankIdentifier +
      this.branchIdentifier +
      accountId
    )
      .match(/.{1,4}/g)
      .join(" ");

    this.accounts.push({ accountId, ibanFormatted });
  }
}

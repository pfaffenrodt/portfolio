

export default class MailLink {
  // to encrypt value use  btoa("xyz")
  decrypt(value: string) {
    return atob(value);
  }
  mailToPrefix() { return this.decrypt("bWFpbHRvOg=="); }
  mail() {
    return this.decrypt('ZGV2QHBmYWZmZW5yb2R0LmRl');
  }
  link() {
    return this.mailToPrefix() + this.mail();
  }
};

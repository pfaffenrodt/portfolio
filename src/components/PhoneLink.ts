

export default class PhoneLink {
  // to encrypt value use  btoa("xyz")
  decrypt(value: string) {
    return atob(value);
  }
  phoneToPrefix() { return this.decrypt("dGVsOg=="); }
  phone() {
    return this.decrypt('MDE1MiAyMzMwIDA5MTI=');
  }
  link() {
    return this.phoneToPrefix() + this.phone();
  }
};

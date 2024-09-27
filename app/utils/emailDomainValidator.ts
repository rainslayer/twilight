export function emailDomainValidator(tag: string): ValidatorReturnType {
  const valid = /^(http(s)?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})$/.test(tag);
  
  return { valid, message: "Incorrect email domain name" };
}
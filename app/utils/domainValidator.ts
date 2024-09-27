export function domainValidator(domain: string): ValidatorReturnType {
  const valid = /^(http(s)?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})$/.test(
    domain
  );

  return { valid, message: "Incorrect domain name" };
}

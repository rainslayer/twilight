export function rootDomainValidator(domain: string): ValidatorReturnType {
  const valid = /^([a-zA-Z0-9-]+\.[a-zA-Z]{2,})$/.test(
    domain
  );

  return { valid, message: "Incorrect root domain name" };
}

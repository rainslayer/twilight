export function ipValidator(tag: string): ValidatorReturnType {
  const valid = /^(?:\d{1,3}\.){3}\d{1,3}$|^((?:[A-Fa-f0-9]{1,4}:){7}[A-Fa-f0-9]{1,4}|([A-Fa-f0-9]{1,4}:){1,7}:|::([A-Fa-f0-9]{1,4}:){0,6}[A-Fa-f0-9]{1,4})$/.test(tag);
  
  return { valid, message: "Incorrect IP address" };
}
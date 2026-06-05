/**
 * data.js — KYC Risk Analysis Dashboard
 * Business Data Schema: Reflects industry-standard compliance fields.
 */
const DATA = {
  // Client entities: Fields like 'pep' (Politically Exposed Person) and 
  // 'sanctions' are critical for Anti-Money Laundering (AML) regulatory compliance.
  clients: [
    { id: "KYC-0041", name: "Andrei Volkov", country: "RU", score: 88, risk: "High", pep: true, sanctions: false, status: "Review" },
    // ...
  ],
  // ... reszta danych pozostaje bez zmian
};
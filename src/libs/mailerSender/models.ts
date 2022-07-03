export interface Substitutions {
  var: string;
  value: string;
}

export interface Variable {
  email: string;
  substitutions: Substitutions[];
}

export interface EmailRecipient {
  email: string;
  name: string;
}

export interface Template {
  id: string;
}

export enum TemplateType {
  Customer,
  QuoteForm
}

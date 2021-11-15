// Adding these lines causes parcel to output a .d.ts file that includes the definition for "message" but no augmentation declarations.
import { Person } from "library-original";
Person.prototype.greet = function() { return `Hello ${this.name}!` }

declare module "library-original" {
  interface Person {
    greet(): string;
  }
}

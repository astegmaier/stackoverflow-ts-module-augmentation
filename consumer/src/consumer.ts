import { Person } from 'library-original';
import "library-augmenter";

const andrew = new Person("Andrew");

// The "greet" method was added by "library-augmenter"
console.log(andrew.greet());
class Person {
    constructor(fullName, adress) {
        this.FullName = fullName;
        this.Adress = adress
    }
}

class Name {
    constructor(firstName, lastName) {
        this.FirstName = firstName;
        this.LastName = lastName
    }
}

class Address {
    constructor(street, city) {
        this.Street = street;
        this.City = city
    }
}

//I didn't understand if I need only 2 functions or I need that the 2 functions be in my answer. I decided to go on the second option that I reach to solve the assignment in time
class RelationUtility {
    constructor() {
        this.people = []
    }

    Init(people) {
        this.people = people
    }

    AreEqualName(nameA, nameB) {
        return nameA.FirstName === nameB.FirstName && nameA.LastName === nameB.LastName
    }

    AreEqualAddress(adressA, adressB) {
        return adressA.Street === adressB.Street && adressA.City === adressB.City
    }


    FindMinRelationLevel(personA, personB) {
        const persons = new Set();
        let currPerson = [{ person: personA, level: 0 }]

        while (currPerson.length > 0) {
            const { person, level } = currPerson.shift()
            persons.add(person)
            if (person === personB) {
                return level
            }
            for (const p of this.people) {
                if (!persons.has(p)) {
                    const nameMatch = this.AreEqualName(p.FullName, person.FullName)
                    const adressMatch = this.AreEqualAddress(p.Adress, person.Adress)
                    if (nameMatch || adressMatch) {
                        currPerson.push({ person: p, level: level + 1 })
                    }
                }
            }
        }
        return -1;
    }
}

//I didn't reached to design the graph, I preferred to spend my time on working answer
function OnLoaded() {
    const person1 = new Person(new Name("John", "Doe"), new Address("123 Main St", "Anytown"));
    const person2 = new Person(new Name("Jane", "Doe"), new Address("123 Main St", "Anytown"));
    const person3 = new Person(new Name("Alice", "Smith"), new Address("456 Oak St", "Othertown"));

    const people = [person1, person2, person3]
    const relationUtility = new RelationUtility();
    relationUtility.Init(people)
    const minLevel = relationUtility.FindMinRelationLevel(person1, person2)
    return minLevel
}

//thank you for the oppurtunity!!


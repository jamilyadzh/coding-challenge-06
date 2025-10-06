// Step 2: Base Employee class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in ${this.department}`;
    }
}

// Step 3: Manager subclass
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department); // inherit name and department
        this.teamSize = teamSize;
    }

    // Override describe method
    describe() {
        return `${this.name} manages ${this.department} people in ${this.teamSize}`;
    }
}

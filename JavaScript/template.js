const motelCustomer = {
  firstName: "Abraham Brown",
  birthDate: "2000-01-01",
  gender: "male",
  roomPrefrences: ["ocean view", "pet friendly", "balcony"],
  paymentMethod: "credit card",
  mailingAddress: {
    streetAddress: "18 Thorburn Rd.",
    city: "St. John's",
    province: "Newfoundland",
    postalCode: "A1B 4R1",
    country: "Canada",
  },
  phoneNumber: "709-744-2468",
  checkInDate: "2024-03-13",
  checkOutDate: {
    year: 2024,
    month: 3,
    day: 20,
  },

  calculateAge: function () {
    const today = new Date();
    const birthDate = new Date(this.birthDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const diffMonths = today.getMonth() - birthDate.getMonth();
    if (
      diffMonths < 0 ||
      (diffMonths === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  },

  calculateDurationOfStay: function () {
    const checkIn = new Date(this.checkInDate);
    const checkOut = new Date(
      this.checkOutDate.year,
      this.checkOutDate.month - 1,
      this.checkOutDate.day
    );
    const oneDays = 24 * 60 * 60 * 1000;
    const duration = Math.round(Math.abs((checkOut - checkIn) / oneDays));
    return duration;
  },

  motelCustomerDescription: function () {
    const age = this.calculateAge();
    const duration = this.calculateDurationOfStay();
    return `
     Customer Name: ${this.firstName}
     Birth Date: ${this.birthDate}
     Age: ${age}
     Gender: ${this.gender}
     Room Prefrences: ${this.roomPrefrences}
     Payment Method: ${this.paymentMethod}
     Mailing Address: ${this.mailingAddress.streetAddress}, ${this.mailingAddress.city}, ${this.mailingAddress.province}, ${this.mailingAddress.postalCode}, ${this.mailingAddress.country}
     Phone Number: ${this.phoneNumber}
     Check In Date: ${this.checkInDate}
     Check Out Date: ${this.checkOutDate.year}-${this.checkOutDate.month}-${this.checkOutDate.day}
     Duration of Stay: ${duration} days

${this.firstName} is a ${age} year old ${this.gender}. He is a checking into a motel with a room that is ${this.roomPrefrences[1]} and has a ${this.roomPrefrences[2]} with an ${this.roomPrefrences[0]}. While checking he needs to give them information. He tells them he wants to check in on ${this.checkInDate} and checkout on ${this.checkOutDate.year}-${this.checkOutDate.month}-${this.checkOutDate.day}, which will be a ${duration} day stay. They ask for his mailing address which is ${this.mailingAddress.streetAddress}, ${this.mailingAddress.city}, ${this.mailingAddress.province}, ${this.mailingAddress.postalCode}, ${this.mailingAddress.country}. He gives his birthdate which is ${this.birthDate} and finally he pays with his ${this.paymentMethod}.
     
     `;
  },
};

const customerDescription = motelCustomer.motelCustomerDescription();
console.log(customerDescription);

export const GenderOptions = ["Hombre", "Mujer", "Otro"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "hombre" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Partida de nacimiento",
  "Licencia de conducir",
  "Carnet de obra social",
  "Documento nacional de identidad",
  "Pasaporte",
];

export const Doctors = [
  {
    image: "/assets/images/kat-von-d.png",
    name: "Kat Von-D",
  },
  {
    image: "/assets/images/don-ed-hardy.png",
    name: "Don Ed Hardy",
  },
  {
    image: "/assets/images/dr-woo.png",
    name: "Dr Woo",
  },
  {
    image: "/assets/images/paul-booth.png",
    name: "Paul Booth",
  },
  {
    image: "/assets/images/scott-campbell.png",
    name: "Scott Campbell",
  },
  {
    image: "/assets/images/wes-lang.png",
    name: "Wes Lang",
  },
  {
    image: "/assets/images/zina-samoletova.png",
    name: "Zina Samoletova",
  },
  {
    image: "/assets/images/ryan-ashley.png",
    name: "Ryan Ashley Malarkey",
  },
  {
    image: "/assets/images/keith-mccurdy.png",
    name: "Keith McCurdy",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
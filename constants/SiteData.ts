
export const siteData = {
  brandName : "ProMedix",
  brandDesp : "A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
  brandLogo : "/assets/icons/logo-icon.svg",
  copyWrite : " © 2024 ProMedix",
  Loading : "Loading",
  FormHeader1 : "Hi there 👋",
  appointments : "Get started with appointments.",
  getStarted : "Get Started",
  RegisterFormHearder : "Welcome ",
  handwave : "👋",
  prayHands : "🙏",
  RegisterFormDesp : "Tell us more about yourself...",
  PersonalInfo : "Personal Information",
  MedicalInfo: "Medical Information",
  IDVerify:"Identification and Verfication",
  consent : "Consent and Privacy",
  sc : "Submit and Continue",
  privacyConsent : "I acknowledge that I have reviewed and agree to the privacy policy",
  disclosureConsent : "I consent to the use and disclosure of my health information for treatment purposes.",
  docScan : "Scanned Copy of Identification Document.",
  treatmentConsent : "I consent to receive treatment for my health condition.",
  uploadBtn : "Click to upload",
  dnd : "or drag and drop",
  allFileType : "SVG, PNG, JPG or GIF (max. 800x400px)",
  

};


export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
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
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "John Green",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan Peter",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Powell",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramirez",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
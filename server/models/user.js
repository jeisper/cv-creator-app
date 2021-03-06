import mongoose from "mongoose";

const educationSchema = mongoose.Schema({
  startDate: String,
  endDate: String,
  currentYear: String,
  institutionName: String,
  course: String,
  score: String,
  details: {
    modules: String,
    extra: String,
  },
});

const skillsSchema = mongoose.Schema({
  title: String,
  list: [String],
});

const workSchema = mongoose.Schema({
  startDate: String,
  endDate: String,
  jobTitle: String,
  company: String,
  description: String,
});

const experienceSchema = mongoose.Schema({
  startDate: String,
  endDate: String,
  title: String,
  org: String,
  type: String,
  description: String,
});

const achievementsSchema = mongoose.Schema({
  type: String,
  org: String,
  date: String,
  desc: String,
});
const linksSchema = mongoose.Schema({
  name: String,
  link: String,
});

export const profileData = mongoose.Schema({
  profileImg: String,
  name: {
    fname: String,
    lname: String,
  },
  contact: {
    phone: String,
    email: String,
  },
  links: [linksSchema],
  location: {
    city: String,
    country: String,
  },
  summary: String,
  education: [educationSchema],
  skills: [skillsSchema],
  work: [workSchema],
  experience: [experienceSchema],
  achievements: [achievementsSchema],
});

const userSchema = mongoose.Schema({
  googleID: String,
  saved: [String],
  profileData: profileData,
});

const templateModel = mongoose.model("User", userSchema, "users");

export default templateModel;

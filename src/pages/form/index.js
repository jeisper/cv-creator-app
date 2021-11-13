import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../../components/navbar";
import ProfileData from "./ProfileData";
import Summary from "./Summary";
import { useHistory } from "react-router-dom";
import Education from "./Education";
import Work from "./Work";
import Experience from "./Experience";
import Links from "./Links";
import Achievements from "./Achievements";
import Skills from "./Skills";
import ProfilePicture from "./ProfilePicture";
import Preview from "./Preview";

function Form() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: {
      fname: "",
      lname: "",
    },
    contact: {
      phone: "",
      email: "",
    },
    links: {
      linkedin: "",
      instagram: "",
      twitter: "",
      facebook: "",
      github: "",
      website: "",
      youtube: "",
    },
    location: {
      city: "",
      country: "",
    },
    summary: "",

    education: [
      {
        startDate: "19",
        endDate: "23",
        currentYear: "3",
        institutionName: "TUD",
        course: "CS",
        score: "3",
        details: {
          modules: "Math",
          extra: "No",
        },
      },
    ],
    skills: [
      {
        title: "",
        list: ["", "", ""],
      },
    ],
    work: [
      {
        startDate: "",
        endDate: "",
        jobTitle: "",
        company: "",
        description: "",
      },
    ],
    experience: [
      {
        startDate: "",
        endDate: "",
        title: "",
        org: "",
        type: "",
        description: "",
      },
    ],
    achievements: [
      {
        type: "",
        org: "",
        date: "",
        desc: "",
      },
    ],
  });
  const history = useHistory();

  let currentContent = <Flex>Loading</Flex>;
  const goNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const goBack = () => {
    if (currentStep === 0) {
      history.push("/templates");
    }
    setCurrentStep(currentStep - 1);
  };

  switch (currentStep) {
    case 0:
      currentContent = (
        <ProfileData
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;
    case 1:
      currentContent = (
        <ProfilePicture
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;

    case 2:
      currentContent = (
        <Summary
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;

    case 3:
      currentContent = (
        <Education
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;
    case 4:
      currentContent = (
        <Work
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;
    case 5:
      currentContent = (
        <Experience
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;
    case 6:
      currentContent = (
        <Achievements
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;
    case 7:
      currentContent = (
        <Skills
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;
    case 8:
      currentContent = (
        <Links
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;
    case 9:
      currentContent = (
        <Preview
          formData={formData}
          updateFormData={setFormData}
          goNext={goNext}
          goBack={goBack}
        />
      );
      break;

    default:
      break;
  }

  return (
    <Flex w="100%" flexDir="column">
      <Navbar />
      <Flex w="100%" justify="center">
        {currentContent}
      </Flex>
    </Flex>
  );
}

export default Form;

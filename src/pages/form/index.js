import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../../components/navbar";
import ProfileData from "./ProfileData";
import { RiArrowRightCircleLine } from "react-icons/ai";
import Sumary from "./Sumary";

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
        startDate: "",
        endDate: "",
        currentYear: "",
        institutionName: "",
        course: "",
        score: "",
        details: {
          info: "",
          modules: "",
          extra: "",
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

  return (
    <Flex w="100%" flexDir="column">
      <Navbar />
      <Flex w="100%" justify="center">
        <ProfileData formData={formData} updateFormData={setFormData} />
      </Flex>
    </Flex>
  );
}

export default Form;

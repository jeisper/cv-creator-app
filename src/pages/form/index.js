import { Flex, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from "axios";

function Form() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    profileImg: "",
    name: {
      fname: "",
      lname: "",
    },
    contact: {
      phone: "",
      email: "",
    },
    links: [
      {
        name: "",
        link: "",
      },
    ],
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

  const toast = useToast();
  const history = useHistory();
  const uploadDataToDatabase = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        const uid = user.uid;
        axios
          .post(`http://localhost:5000/api/v1/user/${uid}/data`, {
            googleID: uid + "",
            userData: user,
            saved: ["template1", "template2"],
            profileData: formData,
          })
          .then(function (response) {
            console.log("got response", response);
            toast({
              title: "Submitted!",
              description: "Your profile has been updated",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
            history.push("/templates");
          })
          .catch(function (error) {
            console.log("got an error", error);
            alert("Server Error");
          });
      } else {
        alert("Please Sign in to submit");
      }
    });
  };

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        axios
          .get("http://localhost:5000/api/v1/user/" + user.uid + "/data")
          .then(function (response) {
            console.log("throw");
            setFormData(response.data.data.profile.profileData);
            console.log("profile data", response.data.data.profile.profileData);

            // handle success
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
        console.log("User signed in");
      } else {
        console.log("User not signed in");
      }
    });
  }, []);

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

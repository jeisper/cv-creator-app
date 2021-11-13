import { Flex, Text, Spacer, Image } from "@chakra-ui/react";
import React from "react";
import TextDesign from "../../pages/form/TextDesign";
function Robust({ profileData }) {
  if (
    !profileData.name &&
    !profileData.contact &&
    !profileData.location &&
    !profileData.links &&
    !profileData.education &&
    !profileData.skills &&
    !profileData.work &&
    !profileData.experience &&
    !profileData.achievements
  ) {
    return null;
  }
  return (
    <Flex w="100%" justify="center">
      <Flex
        justify="center"
        w="50%"
        p="10"
        mb="10"
        direction="column"
        boxShadow="dark-lg"
        borderRadius="10px"
      >
        <Image
          src={profileData.profileImg}
          w="100px"
          h="100px"
          objectFit="cover"
          boxShadow="2xl"
          borderRadius="50"
        ></Image>

        <Flex
          justify="center"
          direction="column"
          p="5"
          boxShadow="2xl"
          borderRadius="10"
          w="100%"
          my="2"
        >
          <Flex justify="center" direction="column">
            <Flex m="2" justify="center" direction="row">
              <TextDesign
                text="First Name: "
                content={profileData.name.fname}
              />
              <Spacer />
              <TextDesign text="Last Name: " content={profileData.name.lname} />
            </Flex>
            <Flex justify="center" direction="row" m="2">
              <TextDesign text="Email: " content={profileData.contact.email} />
              <Spacer />
              <TextDesign
                text="Country: "
                content={profileData.location.country}
              />
            </Flex>
            <Flex justify="center" direction="row" m="2">
              <TextDesign
                text="Phone Number: "
                content={profileData.contact.phone}
              />
              <Spacer />
              <TextDesign text="City: " content={profileData.location.city} />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          justify="center"
          direction="column"
          p="5"
          boxShadow="2xl"
          borderRadius="10"
          w="100%"
          my="2"
        >
          <TextDesign text="Summary: " content={profileData.summary} />
        </Flex>
        <Flex
          justify="center"
          direction="column"
          p="5"
          boxShadow="2xl"
          borderRadius="10"
          w="100%"
          my="2"
        >
          <Flex justify="center" fontWeight="bold" fontSize="30">
            <Text>Education</Text>
          </Flex>
          {profileData.education.map((item) => {
            return (
              <Flex
                justify="center"
                direction="column"
                p="5"
                border="1px solid grey"
                borderRadius="10"
                w="100%"
                my="2"
              >
                <Flex my="1">
                  <TextDesign
                    text="Institute Name: "
                    content={item.institutionName}
                  />
                </Flex>
                <Flex justify="center" direction="row" my="1">
                  <TextDesign text="Start Date: " content={item.startDate} />
                  <Spacer />
                  <TextDesign text="End Date: " content={item.endDate} />
                  <Spacer />
                  <TextDesign
                    text="Current Year: "
                    content={item.currentYear}
                  />
                </Flex>
                <Flex justify="center" direction="row" my="1">
                  <TextDesign text="Course: " content={item.course} />
                  <Spacer />
                  <TextDesign text="Score: " content={item.score} />
                </Flex>
                <Flex my="1" direction="column">
                  <TextDesign text="Modules: " content={item.details.modules} />
                  <TextDesign
                    text="Extra Curricular Activities: "
                    content={item.details.extra}
                  />
                </Flex>
              </Flex>
            );
          })}
        </Flex>
        <Flex
          justify="center"
          direction="column"
          p="5"
          boxShadow="2xl"
          borderRadius="10"
          w="100%"
          my="2"
        >
          <Flex justify="center" fontWeight="bold" fontSize="30">
            <Text>Jobs</Text>
          </Flex>
          {profileData.work.map((item) => {
            return (
              <Flex
                justify="center"
                direction="column"
                p="5"
                border="1px solid grey"
                borderRadius="10"
                w="100%"
                my="2"
              >
                <TextDesign text="Company Name: " content={item.company} />
                <TextDesign text="Job Title: " content={item.jobTitle} />
                <Flex justify="center" direction="row">
                  <TextDesign text="Start Date: " content={item.startDate} />

                  <Spacer />
                  <TextDesign text="End Date: " content={item.endDate} />
                </Flex>
                <Flex>
                  <TextDesign
                    text="Job Descrription: "
                    content={item.description}
                  />
                </Flex>
              </Flex>
            );
          })}
        </Flex>
        <Flex
          justify="center"
          direction="column"
          p="5"
          boxShadow="2xl"
          borderRadius="10"
          w="100%"
          my="2"
        >
          <Flex justify="center" fontWeight="bold" fontSize="30">
            <Text>Experience</Text>
          </Flex>
          {profileData.experience.map((item) => {
            return (
              <Flex
                justify="center"
                direction="column"
                p="5"
                border="1px solid grey"
                borderRadius="10"
                w="100%"
                my="2"
              >
                <TextDesign text="Company Name: " content={item.company} />
                <TextDesign text="Job Title: " content={item.jobTitle} />
                <Flex justify="center" direction="row">
                  <TextDesign text="Start Date: " content={item.startDate} />

                  <Spacer />
                  <TextDesign text="End Date: " content={item.endDate} />
                </Flex>
                <Flex>
                  <TextDesign
                    text="Job Descrription: "
                    content={item.description}
                  />
                </Flex>
              </Flex>
            );
          })}
        </Flex>
        <Flex
          justify="center"
          direction="column"
          p="5"
          boxShadow="2xl"
          borderRadius="10"
          w="100%"
          my="2"
        >
          <Flex justify="center" fontWeight="bold" fontSize="30">
            <Text>Achievements</Text>
          </Flex>
          {profileData.achievements.map((item) => {
            return (
              <Flex
                justify="center"
                direction="column"
                p="5"
                border="1px solid grey"
                borderRadius="10"
                w="100%"
                my="2"
              >
                <Flex>
                  <TextDesign text="Achievement Title: " content={item.type} />
                </Flex>

                <Flex justify="center" direction="row">
                  <TextDesign text="Organization: " content={item.org} />
                  <Spacer />
                  <TextDesign text="Date: " content={item.date} />
                </Flex>
                <Flex>
                  <TextDesign
                    text="Achievement Description: "
                    content={item.desc}
                  />
                </Flex>
              </Flex>
            );
          })}
        </Flex>
        <Flex
          justify="center"
          direction="column"
          p="5"
          boxShadow="2xl"
          borderRadius="10"
          w="100%"
          my="2"
        >
          <Flex justify="center" fontWeight="bold" fontSize="30">
            <Text>Skills</Text>
          </Flex>
          {profileData.skills.map((item) => {
            return (
              <Flex
                justify="center"
                direction="column"
                p="5"
                border="1px solid grey"
                borderRadius="10"
                w="100%"
                my="2"
              >
                <Flex>
                  <TextDesign text="Skill Title: " content={item.title} />
                </Flex>
                <Flex>
                  <TextDesign text="Description: " content={item.list} />
                </Flex>
              </Flex>
            );
          })}
        </Flex>
        <Flex
          justify="center"
          direction="column"
          p="5"
          boxShadow="2xl"
          borderRadius="10"
          w="100%"
          my="2"
        >
          <Flex justify="center" fontWeight="bold" fontSize="30">
            <Text>Links</Text>
          </Flex>
          {profileData.links.map((item) => {
            return (
              <Flex
                justify="center"
                direction="column"
                p="5"
                border="1px solid grey"
                borderRadius="10"
                w="100%"
                my="2"
              >
                <Flex>
                  <TextDesign text="Name: " content={item.name} />
                </Flex>
                <Flex>
                  <TextDesign text="Link: " content={item.link} />
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Robust;

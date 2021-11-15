import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { getValue } from "../../Utils";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import School from "../School";
import WorkExperience from "../WorkExperience";
import Projects from "../Projects";

function Professional({ profileData }) {
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

  return profileData != null ? (
    <Flex flexDir="column" px="70" w="100vw" mt="10">
      <Flex border="1px" h="100%" w="100%" flexDir="column">
        <Flex
          flexWrap="wrap"
          flexDir="row"
          borderBottom="1px"
          w="100%"
          align="center"
          justifyContent="space-between"
          p="50"
        >
          <Image
            borderRadius="full"
            boxSize="20vw"
            src={getValue(
              profileData.profileImg,
              "https://miro.medium.com/max/3150/1*1a3GXrNqpIUImV_w084HfQ.jpeg"
            )}
          ></Image>
          <Flex h="100%" align="center">
            <UnorderedList
              justifyContent="center"
              alignSelf="right"
              fontSize="xl"
            >
              <ListItem>
                Name:{" "}
                {getValue(
                  profileData.name &&
                    profileData.name.fname + " " + profileData.name.lname,
                  "Neil Gibson"
                )}
              </ListItem>
              <ListItem>
                Email:{" "}
                {getValue(
                  profileData.contact && profileData.contact.email,
                  "1neilgibson1@gmail.com"
                )}
              </ListItem>
              <ListItem>
                Phone:{" "}
                {getValue(
                  profileData.contact && profileData.contact.phone,
                  "0852120992"
                )}
              </ListItem>
              <ListItem>
                {getValue(
                  profileData.links &&
                    profileData.links.map((social) => {
                      return social.name === "linkedIn" ? social.link : null;
                    }),
                  "neil-gibson linkedIn"
                )}
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          flexDir="column"
          w="100%"
          alignItems="center"
          p="25"
          flexWrap="wrap"
        >
          <Heading as="h2" size="2xl" color="blue.500">
            Profile
          </Heading>
          <Text size="xxl" my="10" mx="10">
            {getValue(
              profileData.summary,
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum quam at mauris laoreet, vel suscipit magna cursus. Pellentesque vel interdum urna. Nulla facilisi. Quisque scelerisque bibendum odio non ullamcorper. Maecenas ultrices justo velit, nec condimentum lorem semper non. Pellentesque id ex non sem volutpat tempus et quis ex. Proin commodo a mauris at rhoncus. Quisque rutrum feugiat lorem, ut convallis magna sollicitudin sit amet. Fusce id metus lorem. Aenean ut risus ac ligula auctor egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus enim leo, gravida eu risus id, lobortis rutrum libero. Suspendisse ut velit id justo eleifend"
            )}
          </Text>
          <Heading as="h2" size="2xl" color="blue.500" mb="10">
            Education
          </Heading>

          {profileData.education.map((school) => {
            return <School school={school} />;
          })}
          <Flex
            flexDir="column"
            w="100%"
            flexWrap="wrap"
            overflow="auto"
            align="center"
          >
            <Heading as="h2" size="2xl" ml="2" my="5" color="blue.500">
              Work Experience:
            </Heading>
            {profileData.work.map((work) => {
              return <WorkExperience work={work} />;
            })}
          </Flex>
          <Heading as="h2" size="2xl" color="blue.500" my="5">
            Projects
          </Heading>
          {profileData.experience.map((project) => {
            return <Projects project={project} />;
          })}
        </Flex>
      </Flex>
    </Flex>
  ) : null;
}

export default Professional;

// import {
//   ModalHeader,
//   Modal,
//   ModalCloseButton,
//   ModalContent,
//   ModalOverlay,
//   ModalBody,
//   ModalFooter,
//   Button,
//   Spacer,
//   Flex,
// } from "@chakra-ui/react";
// import React, { useState } from "react";
// import FormTextInput from "./FormTextInput";
// import FormTextInputNotRequired from "./FormTextInputNotRequired";

// function SkillsModel({ formData, updateFormData, isOpen, onClose }) {
//   const [currentSkill, setCurrentSkill] = useState({
//     title: "",
//     list: "",
//   });

//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
//       <ModalOverlay />
//       <ModalContent>
//         <ModalHeader>Skills</ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>
//           <Flex justify="center" direction="column">
//             <FormTextInput
//               label="Skill Title"
//               placeholder="Title"
//               value={currentSkill ? currentSkill.title : ""}
//               onChange={(text) => {
//                 const copy = { ...currentSkill };
//                 copy.title = text;
//                 setCurrentSkill(copy);
//               }}
//             />
//             <Flex justify="center" direction="row">
//               <FormTextInput
//                 label="Description"
//                 placeholder="Description"
//                 value={currentSkill ? currentSkill.list : ""}
//                 onChange={(text) => {
//                   const copy = { ...currentSkill };
//                   copy.list = text;
//                   setCurrentSkill(copy);
//                 }}
//               />
//             </Flex>
//           </Flex>
//         </ModalBody>

//         <ModalFooter>
//           <Button onClick={onClose}>Cancel</Button>
//           <Spacer />
//           <Button
//             onClick={() => {
//               const copy = { ...formData };
//               console.log("copy", copy);
//               const arr = [...copy.skills];
//               arr.push(currentSkill);
//               copy.skills = arr;
//               updateFormData(copy);
//               onClose();
//             }}
//           >
//             Add
//           </Button>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// }

// export default SkillsModel;

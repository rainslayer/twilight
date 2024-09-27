import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  List,
  ListItem,
  Text,
  Divider,
  Box,
} from "@chakra-ui/react";
import { InfectionDto, InfectionsSearchResponseDto } from "../Api";

interface ComponentProps {
  data: InfectionsSearchResponseDto | null;
  loadMoreInfections: () => void;
  closeModal: () => void;
}

export function InfectionsInfoModal({
  data,
  loadMoreInfections,
  closeModal,
}: ComponentProps) {
  return (
    <Modal isOpen={!!data} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Search results</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {data?.data.map((d: InfectionDto) => (
            <Box key={d.id}>
              <Text sx={{ fontWeight: 900, fontSize: 20, marginBottom: 3 }}>
                Infection id: {d.id}
              </Text>
              <List spacing={3}>
                <Text sx={{ fontWeight: 900 }}>Basic information:</Text>
                <ListItem>Log checksum: {d.log_checksum}</ListItem>
                <ListItem>Log filename: {d.log_file_name}</ListItem>
                <ListItem>Stealer type: {d.stealer_type}</ListItem>
                <Divider />
                <Text sx={{ fontWeight: 900 }}>Computer information:</Text>
                <List spacing={3}>
                  <ListItem>
                    Build Id: {d.computer_information.build_id}
                  </ListItem>
                  <ListItem>
                    Infection date: {d.computer_information.infection_date}
                  </ListItem>
                  <ListItem>IP: {d.computer_information.ip}</ListItem>
                  <ListItem>
                    Malware path: {d.computer_information.malware_path}
                  </ListItem>
                  <ListItem>
                    Username: {d.computer_information.username}
                  </ListItem>
                  <ListItem>Country: {d.computer_information.country}</ListItem>
                  <ListItem>OS: {d.computer_information.os}</ListItem>
                  <ListItem>HWID: {d.computer_information.hwid}</ListItem>
                </List>
                <Divider />
                <Text sx={{ fontWeight: 900 }}>Credentials information:</Text>
                <List spacing={3} overflowY="auto" maxHeight="20vh">
                  <ListItem>
                    {d.credentials.map((c) => (
                      <Box key={`${d.id}-${c.url}`}>
                        <List spacing={3}>
                          <ListItem>URL: {c.url}</ListItem>
                          {c.creds.map((creds) => (
                            <List
                              key={`${d.id}-${c.url}-${creds.password}`}
                              spacing={3}
                            >
                              <ListItem>Username: {creds.username}</ListItem>
                              <ListItem>Password: {creds.password}</ListItem>
                            </List>
                          ))}
                        </List>
                        <Divider marginY={2} />
                      </Box>
                    ))}
                  </ListItem>
                </List>
              </List>
              <Divider marginY={5} />
            </Box>
          ))}
        </ModalBody>
        <ModalFooter>
          {data?.next && (
            <Button colorScheme="blue" mr={3} onClick={loadMoreInfections}>
              Load more infections
            </Button>
          )}
          <Button colorScheme="blue" mr={3} onClick={closeModal}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

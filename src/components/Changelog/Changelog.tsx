import {
  Card,
  Center,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Change from './Change';

export default function Changelog({ title, changes }: Props) {
  return (
    <Center as="section" flexDir="column" paddingX={20} paddingBottom={40}>
      <Heading
        as="h2"
        size="xl"
        color="white"
        textTransform="capitalize"
        marginBottom={30}
      >
        {title}
      </Heading>
      <Card
        variant="outline"
        bgColor="transparent"
        width={{ base: '100%', lg: '65rem' }}
      >
        <TableContainer>
          <Table variant="simple">
            {changes.length === 0 && (
              <TableCaption>
                No load changes yet, check back later!
              </TableCaption>
            )}
            <Thead>
              <Tr borderColor="transparent">
                <Th>Date</Th>
                <Th>Change</Th>
                <Th>Type</Th>
              </Tr>
            </Thead>
            <Tbody>
              {changes.map((change, index) => (
                <Tr key={index}>
                  <Td>{change.date}</Td>
                  <Td>{change.change}</Td>
                  <Td>{change.type}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </Center>
  );
}

type Props = {
  title: string;
  changes: Change[];
};

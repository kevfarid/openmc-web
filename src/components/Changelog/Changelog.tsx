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

import useLang from '@/hooks/useLang';
import Change from './Change';

export default function Changelog({ title, changes }: Props) {
  const { t } = useLang();

  return (
    <Center as="section" flexDir="column" paddingX={20} paddingBottom={20}>
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
              <TableCaption>{t('changelog.no-changes')}</TableCaption>
            )}
            <Thead>
              <Tr borderColor="transparent">
                <Th>{t('changelog.date')}</Th>
                <Th>{t('changelog.change')}</Th>
                <Th>{t('changelog.type')}</Th>
                <Th>{t('changelog.version')}</Th>
              </Tr>
            </Thead>
            <Tbody>
              {changes.map((change, index) => (
                <Tr key={index}>
                  <Td>{change.date}</Td>
                  <Td>{change.change}</Td>
                  <Td>{change.type}</Td>
                  <Td>{change.version}</Td>
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

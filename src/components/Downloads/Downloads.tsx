import {
  Center,
  Heading,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import ButtonsLinkDownloads from '../ButtonsLinkDownloads';
import Icons from '../Icons';
import ITab from './Tab.interface';

export default function Downloads({ title, tabs }: Props) {
  return (
    <Center
      w="100%"
      flexDir="column"
      id="download"
      paddingX={20}
      paddingBottom={20}
    >
      <Heading
        as="h2"
        size="xl"
        color="white"
        textTransform="capitalize"
        marginBottom={30}
      >
        {title}
      </Heading>
      <Tabs>
        <TabList width="350px" justifyContent="center">
          {tabs.map((tab) => (
            <Tab key={tab.name} gap="10px" textAlign="center">
              {tab.icon && <Icon as={Icons[tab.icon]} w={5} h={5} />}
              {tab.name}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabs.map((tab) => (
            <TabPanel key={tab.name}>
              <ButtonsLinkDownloads links={tab.links} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Center>
  );
}

type Props = {
  title: string;
  tabs: ITab[];
};

import { ComponentWithAs, IconProps } from '@chakra-ui/react';

import AppleIcon from './Apple';
import DiscordIcon from './Discord';
import GithubIcon from './Github';
import LinuxIcon from './Linux';
import TwitterIcon from './Twiiter';
import WindowsIcon from './WindowsIcon';

const Icons: { [key: string]: ComponentWithAs<'svg', IconProps> } = {
  Windows: WindowsIcon,
  Apple: AppleIcon,
  Linux: LinuxIcon,
  Github: GithubIcon,
  Twitter: TwitterIcon,
  Discord: DiscordIcon,
};

export default Icons;

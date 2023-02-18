import { ComponentWithAs, IconProps } from '@chakra-ui/react';
import AppleIcon from './Apple';
import LinuxIcon from './Linux';
import WindowsIcon from './WindowsIcon';

const Icons: { [key: string]: ComponentWithAs<'svg', IconProps> } = {
  Windows: WindowsIcon,
  Apple: AppleIcon,
  Linux: LinuxIcon,
};

export default Icons;

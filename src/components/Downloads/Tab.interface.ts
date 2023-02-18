import Link from '../ButtonsLinkDownloads/Link.interface';

export default interface Tab {
  name: string;
  icon?: string;
  links: Link[];
}

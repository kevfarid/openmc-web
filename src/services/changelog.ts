import { CHANGELOG_URL } from '@/constants';
import formatChangelog from '@/utils/formatChangelog';

export function getChangelog() {
  return fetch(CHANGELOG_URL)
    .then((res) => res.text())
    .then((changelog) => formatChangelog(changelog));
}

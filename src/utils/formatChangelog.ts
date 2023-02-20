/**
Removes empty and newline elements from an array.
@param {string[]} array - The array to clean.
@returns {string[]} The cleaned array.
*/
function cleanArray(array: string[]): string[] {
  return array.filter((line) => line.trim() !== '' && !line.startsWith('\n'));
}

/**
Extracts version, date, change type and message from a string.
@param {string} change - The string containing the change information.
@param {string} version - The version number associated with the change.
@param {string} date - The date associated with the change.
@returns {object} An object containing the version, date, change type and message.
*/
function formaatChange(change: string, version: string, date: string) {
  const [type, rest] = change.split(':**');

  return {
    date,
    version,
    change: rest.trim(),
    type: type.replace(/(\*|-)/g, '').trim(),
  };
}

/**
Formats the version information into an array of objects.
@param {string} version - The version information.
@returns {array} An array of objects containing the version, date, change type and message.
*/
function formattedVersion(version: string) {
  const [info, ...chunk] = cleanArray(version.split('\n'));

  const [versionNumber, date] = info.replace(/\(|\)/g, '').split(' ');

  const changes = chunk.map((change) =>
    formaatChange(change, versionNumber, date)
  );

  return changes;
}

/**
Formats a Markdown changelog into an array of objects.
@param {string} changelogMD - The changelog in Markdown format.
@returns {array} An array of objects containing the version, date, change type and message.
*/
export default function formatChangelog(changelogMD: string) {
  const changelog = changelogMD.replace('# Changelog', '');
  const versions = cleanArray(changelog.split('## '));

  const formattedChanges = versions.map(formattedVersion);

  return formattedChanges;
}

const fs = require('fs');
const data = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf8'));

console.log('--- LINK TEXT ISSUES ---');
const linkAudit = data.audits['link-text'];
if (linkAudit && linkAudit.details && linkAudit.details.items) {
  linkAudit.details.items.forEach(item => {
    console.log(`- ${item.node ? item.node.snippet : JSON.stringify(item)}`);
  });
}

console.log('\n--- COLOR CONTRAST ISSUES ---');
const contrastAudit = data.audits['color-contrast'];
if (contrastAudit && contrastAudit.details && contrastAudit.details.items) {
  contrastAudit.details.items.forEach(item => {
    console.log(`- ${item.node ? item.node.snippet : JSON.stringify(item)}`);
  });
}

console.log('\n--- LABEL NAME ISSUES ---');
const labelAudit = data.audits['label-content-name-mismatch'];
if (labelAudit && labelAudit.details && labelAudit.details.items) {
  labelAudit.details.items.forEach(item => {
    console.log(`- ${item.node ? item.node.snippet : JSON.stringify(item)}`);
  });
}

console.log('\n--- CONSOLE ERRORS ---');
const errorsAudit = data.audits['errors-in-console'];
if (errorsAudit && errorsAudit.details && errorsAudit.details.items) {
  errorsAudit.details.items.forEach(item => {
    console.log(`- Error: ${item.source} - ${item.description}`);
  });
}

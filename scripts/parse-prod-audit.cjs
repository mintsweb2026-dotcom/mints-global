const fs = require('fs');
const data = JSON.parse(fs.readFileSync('prod-audit.json', 'utf8'));

let markdown = `# Audit Report: www.mintsglobal.ae\n\n`;
markdown += `## Scores\n`;
Object.keys(data.categories).forEach(k => {
  markdown += `- **${data.categories[k].title}**: ${Math.round(data.categories[k].score * 100)}\n`;
});

markdown += `\n## Failed Audits\n`;
const audits = data.audits;
for (const key in audits) {
  const audit = audits[key];
  if (audit.score !== null && audit.score < 1 && audit.scoreDisplayMode !== 'notApplicable' && audit.scoreDisplayMode !== 'informative') {
    markdown += `### ${audit.title} (Score: ${Math.round(audit.score * 100) || 0})\n`;
    markdown += `*${audit.description}*\n`;
    if (audit.details && audit.details.items && audit.details.items.length > 0) {
        markdown += `\n**Details:**\n`;
        audit.details.items.slice(0, 5).forEach(item => {
            if (item.node && item.node.snippet) {
                markdown += `- \`${item.node.snippet}\`\n`;
            } else if (item.url) {
                markdown += `- ${item.url}\n`;
            } else if (item.label) {
                markdown += `- ${item.label}\n`;
            } else if (item.href) {
                markdown += `- ${item.href}\n`;
            }
        });
        if (audit.details.items.length > 5) {
            markdown += `- *...and ${audit.details.items.length - 5} more items*\n`;
        }
    }
    markdown += `\n`;
  }
}

fs.writeFileSync('prod_audit_report.md', markdown, 'utf8');
console.log('Report generated at prod_audit_report.md');

import fs from "fs";
import path from "path";
import axios from "axios";

const urlsDir = "./urls";
const readmePath = "./README.md";

// Get all user JSON files
const userFiles = fs.readdirSync(urlsDir).filter(file => file.endsWith(".json"));

let totalUrls = 0;
let successful = 0;

async function pingUrls() {
  for (const file of userFiles) {
    const data = JSON.parse(fs.readFileSync(path.join(urlsDir, file), "utf8"));
    if (Array.isArray(data.urls)) {
      for (const url of data.urls) {
        try {
          await axios.get(url, { timeout: 8000 });
          console.log(`✅ Pinged: ${url}`);
          successful++;
        } catch (err) {
          console.log(`❌ Failed: ${url}`);
        }
        totalUrls++;
      }
    }
  }
}

// Update README.md stats
function updateReadme() {
  const readmeContent = fs.readFileSync(readmePath, "utf8");
  const newStats = `
**Last Run:** ${new Date().toUTCString()}  
**Users:** ${userFiles.length}  
**Total URLs:** ${totalUrls}  
**Successful Pings:** ${successful}  
`;

  const updated = readmeContent.replace(
    /<!--STATS_START-->[\s\S]*<!--STATS_END-->/,
    `<!--STATS_START-->\n${newStats}\n<!--STATS_END-->`
  );

  fs.writeFileSync(readmePath, updated);
}

(async () => {
  await pingUrls();
  updateReadme();
})();

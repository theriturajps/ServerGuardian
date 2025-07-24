# 🛡 ServerGuardian

**ServerGuardian** keeps your servers alive using **GitHub Actions** by pinging them every 5 minutes, so they never sleep.

## ✅ How to Use (Step-by-Step)

### Fork this Repository
Click **Fork** in the top-right corner of this page.

### Create Your JSON File
- Go to the `urls/` folder in your forked repository.
- Add a new file named **yourGitHubUsername.json**.
- Add your server URLs in the following format:
```json
{
  "urls": [
    "https://your-server-url.com",
    "https://another-server-url.com"
  ]
}
```

✅ You can add multiple URLs inside the urls array.

### Commit and Push

Save the file and push it to your forked repository.

### Relax

The GitHub Action will start pinging your URLs every 5 minutes to prevent them from sleeping.

---

## 📊 Uptime Stats

<!--STATS_START-->Last Run: Not yet
Users: 0
Total URLs: 0
Successful Pings: 0

<!--STATS_END-->
---

## ⚖ License

This project is under a Custom Proprietary License, See LICENSE for details.


---

⭐ If you like then consider giving it a star!

// Add an event listener to the resume buttons

GitHubCalendar(".calendar", "Rohit27698");

// or enable responsive functionality:
GitHubCalendar(".calendar", "Rohit27698", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "your-username", {
   proxy (username) {
     return fetch(`https://your-proxy.com/github?user=${username}`)
   }
}).then(r => r.text())
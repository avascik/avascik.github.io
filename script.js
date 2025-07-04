const api_url = "https://corsproxy.io/?" + encodeURIComponent("https://api.tuforums.com/v2/database/players/722");

async function getUser() {
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    const topDiff = data.topDiff;

    const rankedScore = data.rankedScore;
    document.getElementById("rankedScore").textContent = `ranked score: ${rankedScore.toFixed(2)}`;

    const generalScore = data.generalScore;
    document.getElementById("generalScore").textContent = `general score: ${generalScore.toFixed(2)}`;

    const ppScore = data.ppScore;
    document.getElementById("ppScore").textContent = `pp score: ${ppScore.toFixed(2)}`;

    const bestClear = data.bestClear;
    document.getElementById("bestClear").textContent = `best clear: ${topDiff.name}`;

    const averageXacc = data.averageXacc;
    const averageXaccPercentage = (averageXacc * 100).toFixed(2);
    document.getElementById("averageXacc").textContent = `average accuracy: ${averageXaccPercentage} %`;

  } catch (error) {
    console.error("Error fetching user data:", error);
    document.getElementById("rankedScore").textContent = "error loading ranked score.";
    document.getElementById("generalScore").textContent = "error loading general score.";
    document.getElementById("generalScore").textContent = "error loading pp score.";
    document.getElementById("bestClear").textContent = "error loading best clear rating.";
    document.getElementById("averageXacc").textContent = "error loading average accuracy.";
  }
}

getUser();
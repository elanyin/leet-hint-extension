// popup.js
document.getElementById("generate").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  try {
    const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            const titleEl = document.querySelector('.text-title-large.font-semibold a[href^="/problems/"]')
            const descEl = document.querySelector('div[data-track-load="description_content"]')

            return {
                title: titleEl?.innerText.trim() || "",
                description: descEl?.innerText.trim() || ""
            }
        }
    })

    const problem = results[0].result

    console.log("[LeetHint] Script executed, result:", problem);

    const response = await fetch("http://localhost:8080/api/hint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(problem)
    })
    
    const data = await response.json()

    console.log(data)

    const output = data?.hints || "No hints returned.";
    document.getElementById("hints").textContent = output;
    
    // chrome.runtime.sendMessage(
    //   {
    //     type: "leetcode-problem",
    //     problem: problem
    //   },
    //   (response) => {
    //     console.log(response)
    //     const output = response?.hints || "No hints returned.";
    //     document.getElementById("hints").textContent = output;
    //   }
    // );
  } catch (error) {
    console.log(error)
  }
});

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

    console.log("[LeetHint] Script executed, result:", results[0].result);
    
    chrome.runtime.sendMessage(
      {
        type: "leetcode-problem",
        problem: results[0].result
      },
      (response) => {
        console.log(response)
        const output = response?.hints || "No hints returned.";
        document.getElementById("hints").textContent = output;
      }
    );
  } catch (error) {
    console.log(error)
  }
});

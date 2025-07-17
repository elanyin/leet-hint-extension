chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'leetcode-problem') {
    ( async () => {
      try {
        const prompt = `You are an expert programming assistant. Give a hint (not full answers) to solve this LeetCode problem:\n\n${message.problem.title}\n\n${message.problem.description}, You only need to output the best and complete prompt, don't output any extra content, Do not include the word "AI" in the content and output an additional Chinese translation`;

        // key.txt
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
          })
        });

        const result = await response.json();
        const hints = result.candidates?.[0]?.content?.parts?.[0]?.text;
        console.log('[LeetHint] Hints:', hints);

        // send to content 
        sendResponse({ hints }); 
      } catch (error) {
        console.error("[LeetHint] Fetch failed:", e);
        sendResponse({ hints: "Wrong!" });
      }
    })()

    return true;
    
  }
  
});

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  console.log("[LeetHint] Activated Tab URL:", tab.url);
});
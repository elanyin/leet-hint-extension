function extractProblem() {
    const titleEl = document.querySelector('.text-title-large.font-semibold a[href^="/problems/"]')
    const descEl = document.querySelector('div[data-track-load="description_content"]')

    if (titleEl && descEl) {
        return {
          title: titleEl.innerText.trim(),
          description: descEl.innerText.trim()
        };
    }

    return null;
}

// 等待 DOM 加载完毕
// setTimeout(() => {
//   const problem = extractProblem();
//   if (problem) {
//     chrome.runtime.sendMessage({ type: 'leetcode-problem', problem });
//   }
// }, 2000);


const marker = document.createElement("div");
marker.textContent = "🧠 LeetHint Active!";
marker.style.position = "fixed";
marker.style.top = "10px";
marker.style.right = "10px";
marker.style.zIndex = "9999";
marker.style.backgroundColor = "#00acc1";
marker.style.color = "#fff";
marker.style.padding = "4px 8px";
marker.style.borderRadius = "4px";
marker.style.fontSize = "14px";
marker.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
document.body.appendChild(marker);

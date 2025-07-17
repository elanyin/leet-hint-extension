# 🧠 LeetHint - LeetCode AI 助手插件

LeetHint 是一个 Chrome 浏览器扩展，能够在 LeetCode 题目页面中自动识别当前题目，并通过 Gemini AI 模型生成简洁的解题提示（hint），帮助你更高效地思考问题，而不是直接看答案。

---

## ✅ 已完成功能 (Already Done)

- ✅ 插件 UI popup.html 基础结构完成
- ✅ 提供 `Generate Hint` 按钮点击触发脚本执行
- ✅ 利用 `chrome.scripting.executeScript` 获取当前页面题目标题与描述
- ✅ 正确提取题目标题和描述（LeetCode 的 DOM Selector）
- ✅ 将题目信息发送至 `background.js` 并构造 Gemini API 请求
- ✅ 成功调用 Gemini API（使用 gemini-1.5-flash 模型）
- ✅ 解析 Gemini 返回结果并提取提示文本（含中英文提示）
- ✅ 将返回内容正确显示到 popup.html 中
- ✅ 插件图标（icon.png）设置完成
- ✅ 插件 manifest v3 配置完成，调试模式运行正常

---

## 📝 待完成功能 (TODO)

- [ ] ✅ **隐藏 Gemini API Key**：改为通过服务器中转（Proxy），避免暴露 key（推荐使用 Vercel / Node.js）
- [ ] 增加错误处理机制：如网络异常、空数据等情况提示用户
- [ ] 增加“复制提示内容”按钮
- [ ] 增加多语言切换按钮（中英）
- [ ] 支持将提示缓存到本地（避免重复请求）
- [ ] 在 LeetCode 页面直接嵌入浮窗显示提示（无需点击扩展图标）
- [ ] 支持多模型切换（如 Gemini、GPT-4、Claude 等）
- [ ] 考虑引入 prompt 模板系统，自定义提示结构

---

## 🚀 使用方法

1. 打开 Chrome，进入 `chrome://extensions/`
2. 开启右上角 “开发者模式”
3. 点击 “加载已解压的扩展程序”
4. 选择本项目根目录（包含 manifest.json）
5. 打开任意 LeetCode 题目页面
6. 点击浏览器右上角 🧠 LeetHint 图标
7. 点击 “Generate Hint” 按钮，即可查看 Gemini 生成的解题提示

---

## 💡 技术栈

- **Chrome Extension (Manifest v3)**
- **JavaScript / HTML / CSS**
- **Google Gemini API（目前使用 gemini-1.5-flash）**
- **内容脚本 / 后台脚本 / popup 页面交互**
- （推荐）Node.js 后端代理隐藏 API Key（未来替代方案）

---

## 📁 项目结构

```bash
leet-hint/
├── manifest.json          # 插件配置文件
├── popup.html             # 插件弹窗 UI
├── popup.js               # 弹窗交互逻辑
├── content.js             # 注入页面脚本（暂未使用）
├── background.js          # 后台脚本，用于调用 AI 接口
├── icon.png               # 插件图标
└── README.md              # 当前文件

---

## 📦 示例展示

<img src="./preview.png" width="400" />



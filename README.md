
# LeetHint - LeetCode AI 助手插件

LeetHint 是一个 Chrome 浏览器扩展，能够在 LeetCode 题目页面中自动识别当前题目，并通过 Gemini AI 模型生成简洁的解题提示（hint），帮助你更高效地思考问题，而不是直接看答案。

---

## 🧩 已完成功能 (Already Done)

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
- ✅ **后端（Spring Boot）接入成功，用于隐藏 Gemini API Key**

---

## 🚧 待完成功能 (TODO)

- ✅ **隐藏 Gemini API Key**：已通过 Spring Boot 后端代理实现
- [ ] 增加错误处理机制：如网络异常、空数据等情况提示用户
- [ ] 增加“复制提示内容”按钮
- [ ] 增加多语言切换按钮（中英）
- [ ] 支持将提示缓存到本地（避免重复请求）
- [ ] 在 LeetCode 页面直接嵌入浮窗显示提示（无需点击扩展图标）
- [ ] 支持多模型切换（如 Gemini、GPT-4、Claude 等）
- [ ] 考虑引入 Prompt 模板系统，自定义提示结构
- [ ] 后端增加访问控制与调用频率限制

---

## 🚀 使用方法

### 加载插件

1. 打开 Chrome，进入 `chrome://extensions/`
2. 开启右上角 “开发者模式”
3. 点击 “加载已解压的扩展程序”
4. 选择本项目根目录（包含 manifest.json）
5. 打开任意 LeetCode 题目页面
6. 点击浏览器右上角 🧠 LeetHint 图标
7. 点击 “Generate Hint” 按钮，即可查看 Gemini 生成的解题提示

### 启动后端服务（可选）

> 如果你不想暴露 API Key，建议部署后端（已支持 Spring Boot）。

```bash
cd leethint-server
./mvnw spring-boot:run
```

启动后将监听 `http://localhost:8080/api/hint` 接口。

---

## 🧠 技术栈

### 前端（Chrome 插件）

- Chrome Extension (Manifest v3)
- JavaScript / HTML / CSS
- Chrome API：scripting、runtime、tabs
- Google Gemini API（gemini-1.5-flash）

### 后端（Spring Boot）

- Java 17
- Spring Boot 3.4.7
- Spring Web / WebMVC
- `.env` + `@ConfigurationProperties` 管理 API Key
- 使用 `RestTemplate` 向 Gemini API 发起请求

---

## 📁 项目结构

```
leet-hint/
├── manifest.json          # 插件配置文件
├── popup.html             # 插件弹窗 UI
├── popup.js               # 弹窗交互逻辑
├── background.js          # 后台脚本（与后端通信）
├── icon.png               # 插件图标
├── README.md              # 当前文件
└── leet-hint-backend/       # Spring Boot 后端服务
    ├── src/main/java/...  # 后端控制器、服务、配置
    ├── .env               # Gemini API Key 存放位置
    ├── application.yml    # Spring Boot 配置文件
    └── pom.xml            # Maven 配置
```

---

## 🖼️ 示例截图

> 在 LeetCode 页面点击插件图标后：

<img src="./preview.png" width="400" />

---

## 🌍 部署建议（可选）

- 使用 [Render](https://render.com)、[Railway](https://railway.app)、[Vercel (Java)](https://vercel.com/guides/deploying-java-with-vercel) 或自行部署 Spring Boot 后端；
- 将 `.env` 文件用于 API 密钥隔离；
- 前端调用 `https://yourdomain.com/api/hint` 即可；

---

## 💡 创意扩展（建议未来实现）

- 多种提示风格（初学者 / 面试官 / 算法标签）
- 一键生成代码骨架（伪代码 + 答题函数）
- 提示评分（Like / Dislike）反馈机制
- 每日一题 + AI 解读
- 提示历史记录 + 本地缓存
- 生成思维导图 / 算法流程图
- VS Code 插件版本

---

## 📜 License

MIT License

---

如果你喜欢这个项目，欢迎 Star ⭐ 或贡献改进建议！  
Enjoy your AI-powered LeetCode journey! 🚀

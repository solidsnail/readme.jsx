<p align="center">
  <img src="https://raw.githubusercontent.com/solidsnail/llmini.js/refs/heads/main/assets/logo.png" width="300" />
</p>

# llmini.js

**llmini.js** is a powerful and modular TypeScript SDK that enables AI/ML capabilities directly in the browser or Node.js. It leverages **Hugging Face Transformers** and **ONNX models**, supporting both GPU and CPU inference with privacy and performance in mind.

<p align="center">
  <a href="https://www.paypal.com/paypalme/X3MWorks">
    <img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" width="130" />
  </a>
</p>

## 🚀 Features

- 🌐 **Runs in the Browser** – Leverages WebGPU or WASM for fast, local inference
- 🧠 **Works in Node.js** – Use GPU or CPU on the server side
- 🔧 **Web Worker Support** – Enables smooth, non-blocking UI interactions
- 🔒 **Privacy-First** – All computation is local; no data leaves your device/server
- 💾 **Offline Capable** – Once loaded, models work without internet

---

## 📦 Installation

```bash
npm install llmini.js
```

## ⚡ Quick Start

### 🔍 In the Browser

```tsx
import { ChatSDK } from "llmini.js/categories/chat";

const chatSDK = new ChatSDK("FastThink-0.5B-Tiny", {
  withWorker: true,
  device: "webgpu", // or "wasm" for CPU inference
  callbacks: {
    onProgressChange: console.log,
    onMessagesChange: console.log,
    onResult: console.log,
  },
});

await chatSDK.load();
await chatSDK.prompt({ prompt: "Why is the sky blue?" });
```

### 🧑‍💻 In Node.js

```tsx
import { ChatSDK } from "llmini.js/categories/chat";
import { setCacheDir } from "llmini.js";

setCacheDir("cached-models"); // Specify local download folder

const chatSDK = new ChatSDK("FastThink-0.5B-Tiny", {
  withWorker: false,
  device: "gpu", // or "cpu"
  callbacks: {
    onProgressChange: console.log,
    onMessagesChange: console.log,
    onResult: console.log,
  },
});

await chatSDK.load();
await chatSDK.prompt({ prompt: "Why is the sky blue?" });
```

> **Note:** If your machine has dual GPUs, your browser may default to the integrated GPU (e.g., Intel). For best performance, switch to the dedicated GPU (e.g., NVIDIA/AMD).  
> Example (Windows 10):

<p align="center">
  <img src="https://raw.githubusercontent.com/solidsnail/llmini.js/refs/heads/main/assets/gpu.png" width="500" />
</p>

> **Windows + Node.js:** Ensure you have [MSVC C++](https://aka.ms/vs/17/release/vc_redist.x64.exe) installed to enable native dependencies.

---

## 🗺️ Roadmap

- ✅ Node.js support
- ⏳ More demos
- ⏳ More models
- ⏳ More task categories

---

## 💻 System Requirements

### ✅ Browser Support

- **WebGPU:** Chrome 113+, Edge 113+, Safari 18+
- **WebAssembly:** All modern browsers
- **Web Workers:** All modern browsers

### ⚙️ Hardware

- **Memory:** Minimum 4 GB RAM recommended
- **GPU:** WebGPU-compatible for browser acceleration
- **Storage:** Local caching of models (100MB – 2GB per model)

## 🎮 Demos

> Click on an image to open the demo

<table>
  <tr>
    <td>
      <strong>Chat</strong>
    </td>
    <td>
      <strong>Audio to text</strong>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://stackblitz.com/edit/llmini-js-examples-chat?file=src%2FApp.tsx">
        <img width="400px" src="https://raw.githubusercontent.com/solidsnail/llmini.js/refs/heads/main/assets/demos-chat.png" />
      </a>
    </td>
    <td>
      <a href="https://stackblitz.com/edit/llmini-js-examples-audio-to-text?file=src%2FApp.tsx">
        <img width="400px" src="https://raw.githubusercontent.com/solidsnail/llmini.js/refs/heads/main/assets/demos-audio-to-text.png" />
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <strong>Image to text</strong>
    </td>
    <td>
      <strong>Text to speech</strong>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://stackblitz.com/edit/llmini-js-examples-image-to-text?file=src%2FApp.tsx">
        <img width="400px" src="https://raw.githubusercontent.com/solidsnail/llmini.js/refs/heads/main/assets/demos-image-to-text.png" />
      </a>
    </td>
    <td>
      <a href="https://stackblitz.com/edit/llmini-js-examples-text-to-speech?file=src%2FApp.tsx">
        <img width="400px" src="https://raw.githubusercontent.com/solidsnail/llmini.js/refs/heads/main/assets/demos-text-to-speech.png" />
      </a>
    </td>
  </tr> <tr>
    <td>
      <strong>Document question answering</strong>
    </td>
    <td>
      <strong></strong>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://stackblitz.com/edit/llmini-js-examples-document-question-answering?file=src%2FApp.tsx">
        <img width="400px" src="https://raw.githubusercontent.com/solidsnail/llmini.js/refs/heads/main/assets/demos-document-qa.png" />
      </a>
    </td>
    <td>
     -
    </td>
  </tr>
</table>

---

## 🧩 Available Categories

| Category                         | Description                             |
| -------------------------------- | --------------------------------------- |
| 🗣️ `audio-text-to-text`          | Speech-to-text conversion               |
| 💬 `chat`                        | Language model chat interface           |
| 📰 `image-text-to-text`          | Visual question answering & captioning  |
| 🔊 `text-to-speech`              | Generate speech from text               |
| ❔ `document-question-answering` | QA on documents and images              |
| ⬜ `object-detection`            | Identify and classify objects in images |
| 📦 `image-classification`        | Label images with model predictions     |
| 🧊 `depth-estimation`            | Predict depth from images               |

---

## 🤝 Contributing

We welcome contributions!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a pull request

---

## 📄 License

MIT License. See the [LICENSE](./LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built on [Transformers.js](https://huggingface.co/docs/transformers.js)
- Powered by [ONNX Runtime Web](https://onnxruntime.ai/)
- Special thanks to the open-source ML/AI community
- ❤️ Shoutout to [Xenova](https://github.com/xenova) for foundational contributions

---

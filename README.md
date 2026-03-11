<div align="center">
  <h1>Yishu (艺术) · PDF Toolkit</h1>
  <p>
    <strong>Minimalist Art Gallery Design meets Native-Grade Privacy</strong>
  </p>
  <p>
    A completely rewritten, stunningly beautiful, and 100% private PDF processor built with Next.js, WebAssembly, and a modern physics-based motion system.
  </p>
</div>

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)

</div>

## 🎨 The Yishu Experience (New)

**Yishu** (which means "Art" in Chinese) is not just another utility tool. It is a completely reimagined digital workspace that feels like a modern art gallery:
- **Warm Paper & Vermilion Palette**: We dropped the generic tech-blue and harsh whites. Yishu uses a soothing 'Warm Paper' background coupled with deep 'Vermilion' (朱砂) and 'Graphite' accents.
- **Glass Neumorphism**: Cards aren't just transparent; they feature hyper-refined inner-glow shadows (`inset 0 1px 1px rgba(255,255,255,1)`), looking like precisely cut glass floating on your screen.
- **Physics-Based Kinetics**: We replaced linear CSS transitions with a custom spring curve (`--transition-spring`), bringing a jelly-like, satisfying tactile response to every click and hover.
- **Outfit Typography**: Bidding farewell to system defaults, Yishu leverages the geometric and commanding **Outfit** font for maximum legibility and architectural rigidity.

## ✨ Core Features

- **🔒 Absolute Privacy**: Powered by massive client-side WebAssembly engines (including a full LibreOffice WASM port). Files are processed securely in your browser's memory and **never uploaded**.
- **🚀 90+ Professional Tools**: Every conversion, merge, split, compression, and encryption tool you'll ever need.
- **🔄 Visual Workflow Editor**: A Node-based canvas to chain multiple PDF operations (e.g., "Merge -> Compress -> Watermark -> Encrypt") in a single run.
- **🌐 Global Reach**: Full localization support across 8 languages (English, Chinese, Japanese, Korean, Spanish, French, German, Portuguese).

## 🛠 Fixes in This Version

This release addresses persistent architectural bugs from previous upstream templates:
- **WASM 404 Bug Fixed**: Re-implemented the `predev` and `postbuild` hooks to automatically decompress the `soffice.wasm.gz` files locally, fixing the terminal white-screen/404 errors during Word conversions.
- **Node Permissions Unlocked**: Reconfigured Webpack in `next.config.js` to correctly ignore server-centric Node built-ins (`module`, `canvas`) during SSR, ending the `Cannot find module` crashes.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yishu-ziyu/pdfcraft.git
    cd pdfcraft
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Unlock WASM Engine (Important for Mac Users)**
    Because the WebAssembly engine is massive, it exists as `.gz` chunks in the repository. Before you run the server, ensure you have write access to the public directory so the pre-flight scripts can decompress them.
    ```bash
    sudo chown -R 501:20 public/
    ```

4.  **Start the development server**
    ```bash
    # This automatically runs the 'predev' hook to unpack the WASM engines
    npm run dev
    ```

5.  **Experience Yishu**
    Open [http://localhost:3000](http://localhost:3000) and feel the new interface.

## 💻 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) + Custom Spring Physics
- **PDF Core**: 
  - [PDF.js](https://github.com/mozilla/pdf.js)
  - [pdf-lib](https://github.com/Hopding/pdf-lib)
  - PyMuPDF (WASM)
  - LibreOffice (WASM)
- **State**: [Zustand](https://github.com/pmndrs/zustand)

## 🤝 Acknowledgements

The core PDF processing logic was heavily inspired by the pioneering work of [BentoPDF](https://github.com/alam00000/bentopdf). This iteration (Yishu) focuses on porting the architecture to Next.js 15, adding the novel Visual Workflow Editor, and orchestrating a complete avant-garde UI/UX redesign.

---
<div align="center">
  Crafted as Digital Art by <strong>Yishu</strong>
</div>

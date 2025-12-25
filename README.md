# 🏙️ Pune Local Guide - Kiro Week 5 Challenge

> **Challenge Theme**: The Local Guide - Local Culture Understanding  
> **City Focus**: Pune, Maharashtra  
> **Innovation**: Context engineering approach using curated local knowledge  

An AI-powered local guide that speaks like a true Punekar and understands Pune's culture, student life, and daily routines. Built for Kiro Week 5 Challenge.

## 🎯 Challenge Requirements Met

✅ **Theme Alignment**: "The Local Guide" with focus on local culture understanding  
✅ **Custom Context File**: Uses `.kiro/product.md` to teach AI about Pune  
✅ **Cultural Authenticity**: Responds in Marathi (romanized) like a local  
✅ **Specific City Focus**: Deep Pune knowledge with student-centric approach  
✅ **No External APIs**: Pure context-driven responses using curated knowledge  

## 🧠 Key Innovation: Context Engineering

Instead of using real-time APIs or external data sources, this project demonstrates **context engineering** - teaching AI to be region-aware through curated local knowledge:

- **Language Context**: Authentic Marathi expressions in English letters
- **Cultural Context**: Local food culture, student life, area characteristics  
- **Behavioral Context**: How locals speak, what they prioritize, timing patterns
- **Geographic Context**: Specific areas, transport, and local landmarks

## 🎭 AI Personality

The AI behaves like a **local Punekar friend**:
- Speaks in **Marathi written in English letters** ("Kasa kay?", "Chala na")
- Gives **contextual, specific answers** rather than generic lists
- Understands **student budget constraints** and local preferences
- Uses **authentic local expressions** naturally in conversation

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd pune-local-guide
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Add your Azure OpenAI credentials
   ```

4. **Run locally**
   ```bash
   node server-simple.js
   ```

5. **Open browser**
   ```
   http://localhost:3000
   ```

## 🎮 Test Queries

Try these authentic Pune questions:
- `"FC Road la best vada pav kuthe milel?"`
- `"Kothrud madhe PG kiti rent aahe?"`
- `"Kay re mhanje kay?"`
- `"Hinjewadi la traffic kasa aahe?"`
- `"Students sathi cheap jagah kuthe aahe?"`

## 🏗️ Project Structure

```
pune-local-guide/
├── .kiro/                    # Kiro configuration (REQUIRED)
│   ├── product.md           # Main context file (REQUIRED)
│   ├── settings/project.json
│   ├── steering/pune-guide-instructions.md
│   └── README.md
├── api/
│   └── chat-simple.js       # AI endpoint with Azure OpenAI
├── pune-context.js          # Local knowledge base
├── server-simple.js         # Development server
├── index.html              # Frontend interface
├── styles.css              # UI styling
├── script.js               # Frontend JavaScript
├── package.json            # Dependencies
└── README.md               # This file
```

## 🎯 Context Engineering Approach

### Traditional Approach (Not Used):
- Real-time APIs for weather, traffic, restaurants
- Generic responses with current data
- Formal, non-regional language

### Our Approach (Context Engineering):
- **Curated local knowledge** in `.kiro/product.md`
- **Cultural context** teaching AI to speak like locals
- **Behavioral patterns** of Pune residents
- **Authentic language** and expressions

## 🏆 Why This Fits the Challenge

1. **Directly addresses "Local Culture Understanding"**
2. **Uses required custom context file** (`.kiro/product.md`)
3. **Demonstrates AI cultural adaptation** through context
4. **Scalable approach** - can be replicated for any city
5. **No dependency on external services** - pure AI + context

## 🔮 Technical Highlights

- **AI Model**: Azure OpenAI GPT-4.1
- **Context Method**: Static knowledge base fed as system prompt
- **Language Processing**: Cultural context understanding
- **Response Style**: Conversational, not informational
- **Deployment**: Vercel-ready serverless architecture

## 🎨 Sample Interaction

**User**: "FC Road la best vada pav kuthe milel?"

**AI Response**: "Arre boss, FC Road la tar kuthe pan milto vada pav, pan ek uncle aahe Fergusson College samor, tyacha ekdum mast aahe. 15 rupaye madhe full pet bharun janar. Tu student ahes ka? Tar tithech ja, crowd pan changla aahe."

## 📝 Submission Checklist

✅ GitHub repository is public  
✅ `.kiro` directory included at root  
✅ `.kiro/product.md` contains Pune context knowledge  
✅ Project demonstrates local culture understanding  
✅ AI responds authentically in local language  
✅ Complete project code included  
✅ README with clear instructions  

---

**Made with ❤️ for Pune | Kiro Week 5 Challenge Submission**

*Demonstrates how AI can be made culturally aware through context engineering rather than external APIs*
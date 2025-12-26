# 🏙️ Pune Local Guide - Kiro Week 5 Challenge

> **Challenge Theme**: The Local Guide - Local Culture Understanding  
> **City Focus**: Pune, Maharashtra  
> **Innovation**: Multilingual context engineering with authentic cultural responses  

An AI-powered local guide that understands Pune's culture and responds in **English, Hindi, or Marathi** - matching the user's language preference while maintaining authentic local context. Built for Kiro Week 5 Challenge.

## 🎯 Challenge Requirements Met

✅ **Theme Alignment**: "The Local Guide" with focus on local culture understanding  
✅ **Custom Context File**: Uses `.kiro/product.md` to teach AI about Pune  
✅ **Multilingual Support**: Responds in English, Hindi, or Marathi based on user input  
✅ **Cultural Authenticity**: Authentic expressions and local context in all languages  
✅ **Specific City Focus**: Deep Pune knowledge with student-centric approach  
✅ **No External APIs**: Pure context-driven responses using curated knowledge  

## 🧠 Key Innovation: Context Engineering

The AI **automatically detects** the user's language and responds accordingly:

- **English Input** → **English Response** (with local Pune context)
- **Hindi Input** → **Hindi Response** (with authentic expressions)  
- **Marathi Input** → **Marathi Response** (romanized, like locals speak)

This creates an inclusive experience for locals, students, and visitors from different linguistic backgrounds.

Instead of using real-time APIs or external data sources, this project demonstrates **multilingual context engineering** - teaching AI to be culturally aware across languages:

- **Language Context**: Authentic expressions in English, Hindi, and Marathi
- **Cultural Context**: Local food culture, student life, area characteristics  
- **Behavioral Context**: How locals speak in different languages, cultural nuances
- **Geographic Context**: Specific areas, transport, and local landmarks

## 🎭 AI Personality

The AI behaves like a **multilingual local Punekar friend**:
- **Language Detection**: Automatically identifies user's language (English/Hindi/Marathi)
- **Native Responses**: Responds in the same language with authentic expressions
- **Cultural Context**: Maintains Pune local knowledge across all languages
- **Conversational Style**: Gives **contextual, specific answers** rather than generic lists
- **Local Awareness**: Understands **student budget constraints** and local preferences

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

## 🎮 Test Queries (Try in Any Language!)

**English Queries:**
- `"Best places to visit in one day?"`
- `"Where can I find good street food?"`
- `"What's the rent for PG in Kothrud?"`

**Hindi Queries:**
- `"Ek din mein ghoomne ki jagah bata do"`
- `"Sabse accha khana kahan milta hai?"`
- `"Kothrud mein PG ka rent kitna hai?"`

**Marathi Queries:**
- `"FC Road la best vada pav kuthe milel?"`
- `"Kothrud madhe PG kiti rent aahe?"`
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

### Our Approach (Multilingual Context Engineering):
- **Curated local knowledge** in `.kiro/product.md`
- **Multilingual cultural context** teaching AI authentic expressions
- **Language detection** and appropriate response matching
- **Behavioral patterns** of Pune residents across languages
- **Authentic expressions** in English, Hindi, and Marathi

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

## 🎨 Sample Interactions

**English Query:**
**User**: "Best places to visit in one day?"
**AI Response**: "Hey there! For a perfect one-day Pune tour, I'd suggest starting with Shaniwar Wada in the morning (great historical vibes), then head to FC Road for some authentic street food and college atmosphere. Afternoon you can visit Aga Khan Palace - beautiful architecture and peaceful. End your day at Koregaon Park for some nice cafes and evening chill!"

**Hindi Query:**
**User**: "Ek din mein ghoomne ki jagah bata do"
**AI Response**: "Arre yaar, ek din mein Pune ka maza lena hai? Subah Shaniwar Wada jao - history aur culture ka feel milega. Phir FC Road pe street food try karo, students ka adda hai wahan. Dopahar mein Aga Khan Palace - bahut sundar jagah hai. Shaam ko Koregaon Park, cafes aur chill karne ke liye perfect hai!"

**Marathi Query:**
**User**: "FC Road la best vada pav kuthe milel?"
**AI Response**: "Arre boss, FC Road la tar kuthe pan milto vada pav, pan ek uncle aahe Fergusson College samor, tyacha ekdum mast aahe. 15 rupaye madhe full pet bharun janar. Tu student ahes ka? Tar tithech ja, crowd pan changla aahe."

## 📝 Submission Checklist

✅ GitHub repository is public  
✅ `.kiro` directory included at root  
✅ `.kiro/product.md` contains Pune context knowledge  
✅ Project demonstrates local culture understanding  
✅ **Multilingual Support**: Detects and responds in English, Hindi, or Marathi  
✅ **Cultural Authenticity**: Authentic expressions in all supported languages  
✅ Complete project code included  
✅ README with clear instructions  

---

**Made with ❤️ for Pune | Kiro Week 5 Challenge Submission**

*Demonstrates how AI can be made culturally aware through context engineering rather than external APIs*
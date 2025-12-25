# Kiro Week 5 Challenge Submission

## Challenge: The Local Guide
**Theme**: Local Culture Understanding  
**City Focus**: Pune, Maharashtra  
**Submission Date**: December 2024  

## Project Overview
Pune Local Guide - An AI assistant that speaks like a true Punekar and understands local culture, built using context engineering approach.

## Key Innovation
Instead of using real-time APIs, we use **curated local context** (`product.md`) to teach the AI authentic Pune culture, language, and local knowledge.

## Files in .kiro Directory
- `product.md` - Main context file with Pune local knowledge (REQUIRED)
- `settings/project.json` - Project configuration
- `steering/pune-guide-instructions.md` - Development guidelines
- `README.md` - This submission summary

## Challenge Requirements Met
✅ Custom context file (`product.md`) teaches AI about Pune  
✅ AI understands local culture and responds authentically  
✅ Speaks in Marathi (romanized) like a local Punekar  
✅ Provides contextual, specific responses  
✅ No external APIs - pure context-driven approach  

## Demo Queries to Test
- "FC Road la best vada pav kuthe milel?"
- "Kothrud madhe PG kiti rent aahe?"
- "Kay re mhanje kay?"
- "Students sathi cheap jagah kuthe aahe?"

## Technical Stack
- **AI**: Azure OpenAI GPT-4.1
- **Context**: Custom Pune knowledge base
- **Frontend**: HTML/CSS/JavaScript
- **Backend**: Node.js serverless functions
- **Deployment**: Vercel-ready

---
*Built with ❤️ for Pune | Kiro Week 5 Challenge*
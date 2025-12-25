# Pune Local Guide - Development Instructions

## Project Context
This is a submission for Kiro Week 5 Challenge: "The Local Guide". The goal is to create an AI that understands local culture and responds authentically.

## Key Requirements Met
✅ **Theme Alignment**: "The Local Guide" - AI understands Pune local culture  
✅ **Custom Context**: Uses `product.md` and `pune-context.js` for local knowledge  
✅ **Cultural Understanding**: Responds in Marathi (romanized) like a local  
✅ **Specific Focus**: Pune city with student-centric approach  
✅ **No External APIs**: Pure context-driven responses  

## Development Guidelines

### Language Style
- Primary language: Marathi written in English letters
- Conversational tone, not formal or informational
- Use authentic Punekar expressions naturally
- Address users as "boss", "dost", "yaar"

### Response Pattern
- Give specific, contextual answers to user queries
- Avoid generic lists or brochure-style responses
- Sound like a local friend giving advice
- Include practical details (prices, timing, areas)

### Cultural Authenticity
- Reference specific Pune locations and landmarks
- Understand student budget constraints
- Know local food culture and timing patterns
- Use appropriate local expressions for different situations

## File Structure
```
pune-local-guide/
├── .kiro/                    # Kiro configuration (required)
│   ├── product.md           # Main context file (required)
│   ├── settings/
│   └── steering/
├── api/
│   └── chat-simple.js       # AI endpoint
├── pune-context.js          # Local knowledge base
├── server-simple.js         # Development server
├── index.html              # Frontend interface
├── styles.css              # UI styling
├── script.js               # Frontend logic
└── README.md               # Documentation
```

## Testing Scenarios
Test with these authentic Pune queries:
- "FC Road la best vada pav kuthe milel?"
- "Kothrud madhe PG kiti rent aahe?"
- "Hinjewadi la traffic kasa aahe?"
- "Kay re mhanje kay?"
- "Students sathi cheap jagah kuthe aahe?"

## Deployment Notes
- Uses Azure OpenAI GPT-4.1 for AI responses
- Local development server for testing
- Ready for Vercel deployment
- Environment variables for API keys

## Success Criteria
- Responses feel authentic and local
- Language is natural Marathi (romanized)
- Answers are specific to user questions
- Cultural context is accurate
- User experience is conversational and helpful
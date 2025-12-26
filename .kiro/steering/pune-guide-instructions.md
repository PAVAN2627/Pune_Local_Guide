# Pune Local Guide - Development Instructions

## Project Context
This is a submission for Kiro Week 5 Challenge: "The Local Guide". The goal is to create an AI that understands local culture and responds authentically.

## Key Requirements Met
✅ **Theme Alignment**: "The Local Guide" - AI understands Pune local culture  
✅ **Custom Context**: Uses `product.md` and `pune-context.js` for local knowledge  
✅ **Multilingual Support**: Responds in English, Hindi, or Marathi based on user input  
✅ **Cultural Understanding**: Authentic expressions and local context in all languages  
✅ **Specific Focus**: Pune city with student-centric approach  
✅ **No External APIs**: Pure context-driven responses  

## Development Guidelines

### Language Style
- **Multilingual Support**: English, Hindi, and Marathi (romanized)
- **Language Detection**: Automatically detect user's input language
- **Native Responses**: Respond in the same language as user input
- Conversational tone, not formal or informational
- Use authentic expressions naturally in each language
- Address users appropriately per language ("friend", "dost/yaar", "boss/re")

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
Test with these queries in multiple languages:

**English:**
- "Best places to visit in one day?"
- "Where can I find good street food?"
- "What's the PG rent in Kothrud?"

**Hindi:**
- "Ek din mein ghoomne ki jagah bata do"
- "Sabse accha khana kahan milta hai?"
- "Kothrud mein PG ka rent kitna hai?"

**Marathi:**
- "FC Road la best vada pav kuthe milel?"
- "Kothrud madhe PG kiti rent aahe?"
- "Students sathi cheap jagah kuthe aahe?"

## Deployment Notes
- Uses Azure OpenAI GPT-4.1 for AI responses
- Local development server for testing
- Ready for Vercel deployment
- Environment variables for API keys

## Success Criteria
- **Language Detection**: Correctly identifies user's input language
- **Native Responses**: Responds authentically in the detected language
- **Cultural Context**: Maintains Pune local knowledge across all languages
- **Conversational Flow**: Natural, friendly interactions in any language
- **Specific Answers**: Contextual responses, not generic information
- **User Experience**: Inclusive and helpful for diverse linguistic backgrounds
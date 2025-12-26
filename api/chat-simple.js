import { OpenAI } from 'openai';

// Pune context directly embedded for Vercel
const PUNE_CONTEXT = `
You are a local Pune guide AI who speaks like a true Punekar in Marathi language but written in English letters (Romanized Marathi). You have deep knowledge of Pune's culture, student life, and daily routines.

PERSONALITY & LANGUAGE STYLE:
- Speak primarily in Marathi written in English letters (like "kasa kay", "kuthe janar", "chala na")
- Mix some Hindi/English words naturally like locals do
- Be conversational, not like giving a list or brochure
- Use authentic Punekar expressions and tone
- Address users as "boss", "dost", "yaar", "re"
- Be helpful but casual, like talking to a friend

AUTHENTIC PUNEKAR EXPRESSIONS TO USE:
- "Kasa kay?" = How are things?
- "Kuthe janar?" = Where are you going?
- "Kay khanar?" = What will you eat?
- "Chala na" = Let's go
- "Arre yaar" = Oh friend
- "Bas kar na" = Stop it/Enough
- "Majja aali" = Had fun
- "Kiti vela?" = What time?
- "Kuthla area?" = Which area?
- "Pahije ka?" = Do you need?
- "Sangto mi" = I'm telling you
- "Ekdum mast" = Totally awesome
- "Ghana changla" = Very good
- "Timepass karaycha" = Want to have fun
- "Adda maraycha" = Want to hang out

RESPONSE STYLE:
- Give specific, contextual answers based on what user asks
- Don't give long lists unless specifically asked
- Be conversational and personal
- Share local insights and tips naturally
- Respond to the specific question, not generic information
- Use local knowledge to give practical advice

PUNE LOCAL KNOWLEDGE:

AREAS & WHAT THEY'RE KNOWN FOR:
- FC Road: Student adda, street food, shopping
- JM Road: Main shopping, restaurants
- Koregaon Park: Posh area, cafes, nightlife
- Kothrud: Residential, colleges, family area
- Hinjewadi: IT hub, traffic problem
- Shivajinagar: Central, good connectivity
- Aundh: Modern, IT people, malls
- Viman Nagar: Airport area, Symbiosis
- Hadapsar: IT companies, Magarpatta
- Wakad: IT area, restaurants

STREET FOOD CULTURE:
- Vada Pav: Everywhere, ₹10-15
- Misal Pav: Pune specialty, spicy
- Bhel Puri: Evening snack
- Pav Bhaji: Popular dinner
- Poha: Breakfast favorite
- Mastani: Thick milkshake, Sujata famous
- Bun Maska: With chai
- Chinese: Indo-Chinese popular

STUDENT LIFE:
- PG rent: ₹8,000-15,000
- Meal cost: ₹50-150
- Local transport: ₹100-200/day
- College areas: FC Road, Kothrud, Aundh

TRAFFIC & TRANSPORT:
- Peak hours: 8-10 AM, 6-8 PM
- Rickshaw: ₹15 base + ₹12/km
- PMPML bus: ₹8-25
- Avoid main roads in peak time

WEATHER & TIMING:
- Summer: Hot, 35-40°C
- Monsoon: Heavy rains
- Winter: Pleasant, 15-28°C
- Best street food time: Evening after 5 PM

IMPORTANT INSTRUCTIONS:
1. Always respond in Marathi written in English letters
2. Give specific answers to specific questions
3. Don't repeat the same information
4. Be conversational, not informational
5. Use local slang and expressions naturally
6. If asked about places outside Pune, gently redirect to Pune topics
7. Keep responses practical and budget-conscious for students
8. Sound like a local friend, not a guidebook

Example response style:
User: "Best vada pav kuthe milel?"
Good response: "Arre boss, vada pav tar kuthe pan milto, pan FC Road la ek uncle aahe, tyacha ekdum mast aahe. Kothrud madhe pan changla milto. Tu kuthe rahtos? Tya area madhe sangto."

Bad response: "Here are the top 5 vada pav places: 1. FC Road 2. JM Road..." (Don't do this!)
`;

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { message } = req.body;

        if (!message || message.trim().length === 0) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Check if required environment variables are set
        if (!process.env.AZURE_OPENAI_API_KEY || !process.env.AZURE_OPENAI_ENDPOINT) {
            return res.status(500).json({ 
                error: 'Server configuration error',
                response: 'Arre yaar, server configuration mein kahi problem ahe! Admin ko bolna padega. 😅'
            });
        }

        console.log('Using Azure OpenAI with deployment:', process.env.AZURE_OPENAI_DEPLOYMENT_NAME);

        // Initialize OpenAI client for Azure using environment variables
        const openai = new OpenAI({
            apiKey: process.env.AZURE_OPENAI_API_KEY,
            baseURL: `${process.env.AZURE_OPENAI_ENDPOINT}openai/deployments/${process.env.AZURE_OPENAI_DEPLOYMENT_NAME}`,
            defaultQuery: { 'api-version': process.env.AZURE_OPENAI_API_VERSION || '2024-12-01-preview' },
            defaultHeaders: {
                'api-key': process.env.AZURE_OPENAI_API_KEY,
            }
        });

        const completion = await openai.chat.completions.create({
            model: process.env.AZURE_OPENAI_DEPLOYMENT_NAME || 'gpt-4',
            messages: [
                {
                    role: 'system',
                    content: PUNE_CONTEXT
                },
                {
                    role: 'user',
                    content: message
                }
            ],
            max_tokens: 500,
            temperature: 0.7,
        });

        const response = completion.choices[0]?.message?.content || 'Sorry boss, kahi problem ahe. Try again!';

        res.status(200).json({ response });

    } catch (error) {
        console.error('OpenAI API Error:', error);
        
        // Return a user-friendly error in Pune style
        res.status(500).json({
            error: 'AI service error',
            response: 'Arre yaar, AI la kahi technical problem ahe! Thoda wait kara ani try kara. 😅'
        });
    }
}
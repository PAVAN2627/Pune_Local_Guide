const { OpenAI } = require('openai');
const { PUNE_CONTEXT } = require('../pune-context');

async function handler(req, res) {
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

module.exports = { default: handler };
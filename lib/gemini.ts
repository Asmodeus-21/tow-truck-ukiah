
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SERVICE_AREAS, PHONE_NUMBER } from "../constants";

const getApiKey = () => {
    // @ts-ignore
    const key = import.meta.env.VITE_GEMINI_API_KEY || (typeof process !== 'undefined' ? process.env?.VITE_GEMINI_API_KEY : "") || "AIzaSyAmiGfcziootsyd89NOUJfSZxmNV7sPIYA";
    return key;
};

const systemInstruction = `
You are the AI Roadside Assistant for 1 Lane Towing, a family-owned towing and recovery business in Ukiah, CA.
Your goal is to assist stranded drivers by gathering essential information and confirming if they are in our service area.

Our Service Areas:
${SERVICE_AREAS.join(", ")}

Our Primary Services:
1. Light & Medium Duty Towing (for breakdowns, accidents)
2. Off-Road Recovery (winch-outs from mud, snow, or ditches)
3. Roadside Assistance (lockouts, jumpstarts, tire changes, fuel delivery)

Guidelines:
- Be professional, calm, and helpful. People calling for towing are often stressed.
- If it's a life-threatening emergency, tell them to call 911 immediately.
- Always try to gather: 
  a) Type of vehicle
  b) Their current location
  c) The nature of the problem
- Check if their location is within our service areas. If it's outside Mendocino County, suggest we might still be able to help but they should call us directly to check.
- Once you have the details, encourage them to call us at ${PHONE_NUMBER} for immediate dispatch.
- Keep responses concise and focused on getting them help.
- Do not make up pricing. Tell them to call for a quote.
`;

export async function getChatResponse(history: { role: string; parts: string }[], message: string) {
    const apiKey = getApiKey();
    if (!apiKey) {
        return "The AI assistant is currently unavailable. Please call us directly at " + PHONE_NUMBER;
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash-001",
        systemInstruction,
    });

    try {
        // The Gemini API requires that the first message in the history be from the 'user' role.
        let sanitizedHistory = history;
        while (sanitizedHistory.length > 0 && sanitizedHistory[0].role !== 'user') {
            sanitizedHistory = sanitizedHistory.slice(1);
        }

        const chat = model.startChat({
            history: sanitizedHistory.map(h => ({ role: h.role, parts: [{ text: h.parts }] })),
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        return response.text();
    } catch (error: any) {
        console.error("Gemini API Error Detail:", error);
        return "I'm having trouble connecting right now. Please call us at " + PHONE_NUMBER + " for immediate assistance.";
    }
}

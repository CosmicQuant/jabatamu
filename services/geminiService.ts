
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || '' });
  }

  async chat(messages: ChatMessage[]) {
    try {
      const history = messages.slice(0, -1).map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const lastMessage = messages[messages.length - 1].text;

      const response = await this.ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...history.map(h => ({ role: h.role === 'model' ? 'model' : 'user', parts: h.parts })),
          { role: 'user', parts: [{ text: lastMessage }] }
        ],
        config: {
          systemInstruction: `You are the JabaTamu Juice Sommelier. 
          JabaTamu sells premium fresh khat-based juices in two flavors: Passion Fruit and Pineapple.
          Khat is a cultural botanical known for its energizing and focus-enhancing properties.
          Your tone is sophisticated, welcoming, and knowledgeable.
          Always mention the benefits of JabaTamu: natural energy, focus, and fresh ingredients.
          Keep responses concise and engaging. 
          If asked about price, Passion and Pineapple both cost 450 KES.
          Guide users to choose a flavor based on their mood: Passion for a refreshing zing, Pineapple for tropical focus.`,
          temperature: 0.7,
        }
      });

      return response.text || "I'm sorry, I'm having trouble connecting to my creative juices right now. How can I help you with JabaTamu today?";
    } catch (error) {
      console.error("Gemini Chat Error:", error);
      return "I'm momentarily unavailable, but JabaTamu is always fresh! Try again in a moment.";
    }
  }
}

export const geminiService = new GeminiService();

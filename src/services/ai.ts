export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatResponse {
  reply: string;
  suggestions: string[];
}

export class AIService {
  private static endpoint = '/.netlify/functions/chat';

  static async sendMessage(messages: Message[]): Promise<ChatResponse> {
    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }),
      });

      if (!response.ok) {
        throw new Error(`AI Service Error: ${response.statusText}`);
      }

      const data = await response.json();
      
      // Parse the JSON content from the LLM
      const content = data.choices[0].message.content;
      try {
        const parsed: ChatResponse = JSON.parse(content);
        return parsed;
      } catch (e) {
        // Fallback if model fails to output valid JSON (rare but possible)
        console.warn("Failed to parse JSON response, falling back to raw text");
        return {
            reply: content,
            suggestions: []
        };
      }
    } catch (error) {
      console.error('AI Service Failed:', error);
      throw error;
    }
  }
}

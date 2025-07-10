export async function generateGeminiPrompt(theme: string, userInput: string): Promise<string> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  let chatHistory = [];
  chatHistory.push({
    role: "user",
    parts: [{ text: `Based on the thought experiment about "${theme}" and the user's reflection "${userInput}", generate a follow-up question or a new perspective to consider. Keep it concise and thought-provoking.` }]
  });
  const payload = { contents: chatHistory };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    if (result.candidates && result.candidates.length > 0 && result.candidates[0].content && result.candidates[0].content.parts && result.candidates[0].content.parts.length > 0) {
      return result.candidates[0].content.parts[0].text;
    } else {
      console.error("Gemini API response structure unexpected:", result);
      return "Could not generate a prompt at this time. Please try again.";
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "An error occurred while generating the prompt. Please try again.";
  }
} 
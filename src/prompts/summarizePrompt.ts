export interface SummarizeParams {
  text: string;
  length?: 'short' | 'medium' | 'long'; // Optional length constraint
  format?: 'paragraph' | 'bullets';      // Optional format constraint
}

/**
 * Generates a prompt for summarizing long texts.
 * @param params - The input text and optional constraints.
 * @returns A formatted prompt string.
 */
export const createSummarizePrompt = ({
  text,
  length = 'short',
  format = 'bullets',
}: SummarizeParams): string => {
  return `
    System Persona: Act as an expert content editor and summarizer.
    Task: Summarize the input text below.
    
    Constraints:
    - Length: ${length}
    - Format: ${format}
    - Focus: Identify the key arguments, decisions, and main takeaways.
    - Style: Clear, concise, and professional.
    - Tone: Informative, avoid unnecessary filler phrases.

    Input Text:
    """
    ${text}
    """

    Summary:
  `.trim();
};

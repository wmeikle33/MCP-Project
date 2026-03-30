export const docsConfig = ({
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

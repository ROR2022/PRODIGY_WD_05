import { useState, useEffect } from "react";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const TextContent = () => {
  const [text, setText] = useState(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quasi recusandae praesentium sequi vero minima! Odio numquam saepe at veniam esse odit consectetur cum. Dolores quaerat tenetur suscipit animi dolor?"
  );

  const generateRandomText = () => {
    // Genera texto Lorem Ipsum con la longitud especificada
    const newText = lorem.generateParagraphs(70);
    //console.log(newText);
    setText(newText);
  };

  useEffect(() => {
    generateRandomText();
  }, []);
  useEffect(() => {}, [text]);
  return (
    <div>
      <p style={{ textAlign: "justify" }}>{text}</p>
    </div>
  );
};

export default TextContent;

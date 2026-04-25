import React from 'react';

const Article = ({ title, date, paragraphs, image }) => (
  <main>
    <article>
      <h2>{title}</h2>
      <time dateTime={date}>{date}</time>
      
      {paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}

      <figure>
        <img src={image.url} alt={image.alt} />
        <figcaption>{image.caption}</figcaption>
      </figure>
    </article>
  </main>
);

export default Article;
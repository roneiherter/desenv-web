import React from 'react';

const Sidebar = ({ relatedPosts }) => (
  <aside>
    <h3>Posts Relacionados</h3>
    <ul>
      {relatedPosts.map((post, index) => (
        <li key={index}><a href="#">{post}</a></li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
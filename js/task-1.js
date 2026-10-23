function slugify(title) {
  let slug = '';
  const slugArray = [];
  if (title != null && title.length > 0) {
    const wordArray = title.split(' ');
    for (const word of wordArray) {
      slugArray.push(word.toLowerCase());
    }
    slug = slugArray.join('-');
  }
  return slug;
}

console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

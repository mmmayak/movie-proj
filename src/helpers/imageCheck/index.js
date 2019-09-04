export function ImageCheck(img) {
  if (img.endsWith("null" || "undefined")) {
    return "https://www.elegantthemes.com/blog/wp-content/uploads/2017/08/featuredimage.jpg";
  }
  return img;
}

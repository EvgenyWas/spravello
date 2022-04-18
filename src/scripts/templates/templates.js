function createElement(tag, className, text = "") {
    const element = document.createElement(tag);
    element.className = className;
    const textElement = document.createTextNode(text);
    element.append(textElement);
    return element;
};
  
export { createElement };
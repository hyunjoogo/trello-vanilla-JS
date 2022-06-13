export const addClass = (node, className) => {
  node.classList.add(className);
};
export const setAttr = (node, name, value) => {
  node.setAttribute(name, value);
};

/**
 * 새로운 노드 생성기
 * 클래스 이름 1개, 어트리뷰트 1개, 텍스트 컨텍츠 추가 가능
 * 클래스이름, 어트리뷰트등을 Array 또는 Object로 받아서 for문 돌려서 여러개 생성하는 것도 좋을듯하다.
 * @param {String} tagName 생성할 노드의 엘리먼트
 * @param {String | Array} className 지정할 클래스 이름
 * @param {String} text 엘리먼트에 추가할 텍스트 (없으면 '')
 * @param {String} attrName 엘리먼트의 Attribute key (없으면 생성하지 않음)
 * @param {String} attrValue 엘리먼트의 Attribute value
 * @returns {Object} 생성한 노드
 */

export const createNode = (tagName, className, text, attrName, attrValue) => {
  const node = document.createElement(tagName);
  node.classList.add(className);
  node.textContent = text || '';
  if (attrName) {
    node.setAttribute(attrName, attrValue);
  }
  return node;
};

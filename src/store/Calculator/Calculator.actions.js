//Action creator -> função que retorna uma ação
export function sum(a, b) {
  return {
    type: "SUM",
    payload: [a, b],
  };
}

export function subtract(a, b) {
  return {
    type: "SUBTRACT",
    payload: [a, b],
  };
}

// Boiler plate necessary for tests to run using enzyme with React 16

const requestAnimationFrame = global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
}

export default requestAnimationFrame;
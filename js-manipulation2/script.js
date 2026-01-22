const container = document.querySelector('.items');
const cubes = document.querySelectorAll('.item');

let selectedCube = null;
let offsetX = 0;
let offsetY = 0;

cubes.forEach(cube => {
    cube.style.position = "absolute";

    cube.addEventListener('mousedown', (e) => {
        selectedCube = cube;

        const cubeRect = cube.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        offsetX = e.clientX - cubeRect.left;
        offsetY = e.clientY - cubeRect.top;

        cube.style.zIndex = 1000;
    });
});

document.addEventListener('mousemove', (e) => {
    if (!selectedCube) return;

    const containerRect = container.getBoundingClientRect();
    const cubeRect = selectedCube.getBoundingClientRect();

    let left = e.clientX - containerRect.left - offsetX;
    let top = e.clientY - containerRect.top - offsetY;

    // boundary conditions
    if (left < 0) left = 0;
    if (top < 0) top = 0;

    if (left + cubeRect.width > container.clientWidth)
        left = container.clientWidth - cubeRect.width;

    if (top + cubeRect.height > container.clientHeight)
        top = container.clientHeight - cubeRect.height;

    selectedCube.style.left = left + "px";
    selectedCube.style.top = top + "px";
});

document.addEventListener('mouseup', () => {
    if (selectedCube) {
        selectedCube.style.zIndex = 1;
    }
    selectedCube = null;
});


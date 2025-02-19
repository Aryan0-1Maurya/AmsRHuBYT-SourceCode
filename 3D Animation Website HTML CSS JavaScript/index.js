console.log("hii")
const beeModel = document.getElementById("bee-model");

const sections = Array.from(document.querySelectorAll("section"));

const shiftPositions = [0, -20, 0, 25];

const cameraOrbits = [[90, 90], [-45, 90], [-180, 0], [45, 90]];

const sectionOffsets = sections.map(section => section.offsetTop);

const lastSectionIndex = sections.length - 1;

const interpolate = (start, end, progress) => start + (end - start) * progress;

const getScrollProgress = scrollY => {

    for (let i = 0; i < lastSectionIndex; i++) {

        if (scrollY >= sectionOffsets[i] && scrollY < sectionOffsets[i + 1]) {

            return i + (scrollY - sectionOffsets[i]) / (sectionOffsets[i+1] - sectionOffsets[i]);

        }
    }

    return lastSectionIndex;

};

window.addEventListener("scroll", () => {

    const sectionIndex = Math.floor(scrollProgress);

    const sectionProgress = scrollProgress-sectionIndex;

    const currentShift = interpolate(

        shiftPositions[sectionIndex],

        shiftPositions[sectionIndex + 1] ?? shiftPositions[sectionIndex],

        sectionProgress

    );

    const currentOrbit = cameraOrbits[sectionIndex].map((val, i) =>

        interpolate(val, cameraOrbits[sectionIndex + 1]?.[i] ?? val, sectionProgress)

    );

    beeModel.style.transform = `translateX(${ currentShift } %)`;

    beeModel.setAttribute("camera-orbit", `${currentOrbit[0]}deg ${currentOrbit[1]}deg`);

});

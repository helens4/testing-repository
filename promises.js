const colorTypeA = document.querySelectorAll("input")[0]
const colorTypeB = document.querySelectorAll("input")[1]

let colorLeft = null, colorRight = null;

//event

colorTypeA.addEventListener("input", function (event) {
    colorLeft = event.target.value
    console.log('color left', colorLeft)
    if (colorRight !== null)
        setGradient();
})

colorTypeB.addEventListener("input", function (event) {
    colorRight = event.target.value
    console.log('color right', colorRight)
    if (colorLeft !== null)
        setGradient()
})

const setGradient = () => {
    document.body.style.background = `linear-gradient(to left, ${colorLeft}, ${colorRight})`
}
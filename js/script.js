// triangle
function calculateTriangleArea() {
    const inputBaseValue = getInputValueById('base-field');

    const inputHeightValue = getInputValueById('height-field');

    if (isNaN(inputBaseValue && inputHeightValue)) {
        return alert('please provide a number');
    }

    const totalValue = 0.5 * inputBaseValue * inputHeightValue;

    setValueById('triangle-area', totalValue);

    areaCalculator('Triangle', totalValue)

}

// Rectangle
function calculateRectangleArea() {
    const inputWValue = getInputValueById('width-field');

    const inputLValue = getInputValueById('length-field');

    if (isNaN(inputWValue && inputLValue)) {
        return alert('please provide a number');
    }

    const totalValue = inputWValue * inputLValue;

    setValueById('rectangle-area', totalValue);

    areaCalculator('Rectangle', totalValue)

}

// Parallelogram
function calculateParallelogramArea() {
    inputBValue = getInputValueById('parallelogram-base-field');

    inputHValue = getInputValueById('parallelogram-height-field');

    if (isNaN(inputBValue && inputHValue)) {
        return alert('please provide a number');
    }

    const totalValue = inputBValue * inputHValue;

    setValueById('parallelogram-area', totalValue);

    areaCalculator('Parallelogram', totalValue)

}

// Rhombus
function calculateRhombusArea() {
    const inputDiagonal1Value = getInputValueById('diagonal1-field');

    const inputDiagonal2Value = getInputValueById('diagonal2-field');

    if (isNaN(inputDiagonal1Value && inputDiagonal2Value)) {
        return alert('please provide a number');
    }

    const totalValue = 0.5 * inputDiagonal1Value * inputDiagonal2Value;

    setValueById('rhombus-area', totalValue);

    areaCalculator('Rhombus', totalValue)
}

// Pentagon
function calculatePentagonArea() {
    const inputPerimeterValue = getInputValueById('perimeter-field');

    const inputApothemValue = getInputValueById('apothem-field');

    if (isNaN(inputPerimeterValue && inputApothemValue)) {
        return alert('please provide a number');
    }

    const totalValue = 0.5 * inputPerimeterValue * inputApothemValue;

    setValueById('pentagon-area', totalValue);

    areaCalculator('Pentagon', totalValue)
}

// Ellipse
function calculateEllipseArea() {
    const inputEllipseAValue = getInputValueById('ellipse-a-field');

    const inputEllipseBValue = getInputValueById('ellipse-b-field');

    if (isNaN(inputEllipseAValue && inputEllipseBValue)) {
        return alert('please provide a number');
    }


    const totalValue = Math.PI * inputEllipseAValue * inputEllipseBValue;

    setValueById('ellipse-area', totalValue.toFixed(2)); //totalValue.toFixed(2)
    areaCalculator('Ellipse', totalValue.toFixed(2))
}


// <!-- area calculator -->
function areaCalculator(areaType, areaValue) {
    console.log(areaType + ' ' + areaValue);
    const calculationArea = document.getElementById('calculation-entry');

    const count = calculationArea.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `
        ${count + 1 }.  ${areaType}  ${areaValue} cm<sup>2</sup>
          <button class="btn btn-sm btn-success">Convert to m<sup>2</sup></button>
    `;
    calculationArea.appendChild(p)
}
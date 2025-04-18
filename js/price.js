const slider = document.getElementById('price-slider');
if(slider){

    noUiSlider.create(slider, {
        start: [15000, 127200],
        connect: true,
        range: {
            'min': 15000,
            'max': 150000
        },
        step: 10,
        format: {
            to: value => `${Math.round(value)}`,
            from: value => Number(value.replace('', ''))
        }
    });

}

const area = document.getElementById('area-slider');
if(area){
    noUiSlider.create(area, {
        start: [0.093, 223.28],
        connect: true,
        range: {
            'min': 0.093,
            'max': 300
        },
        step: 0.1,
        behavior: 'none',
        format: {
            to: value => `${Math.round(value)}`,
            from: value => Number(value.replace('', ''))
        }
    });
}

const thick = document.getElementById('thick-slider');
if(thick){
    noUiSlider.create(thick, {
        start: [10, 220],
        connect: true,
        range: {
            'min': 10,
            'max': 300
        },
        step: 10,
        format: {
            to: value => `${Math.round(value)}`,
            from: value => Number(value.replace('', ''))
        }
    });
}

const width = document.getElementById('width-slider');
if(width){
    noUiSlider.create(width, {
        start: [100, 3400],
        connect: true,
        range: {
            'min': 100,
            'max': 4000
        },
        step: 10,
        format: {
            to: value => `${Math.round(value)}`,
            from: value => Number(value.replace('', ''))
        }
    });
}
const height = document.getElementById('height-slider');
if(height){

    noUiSlider.create(height, {
        start: [100, 2000],
        connect: true,
        range: {
            'min': 100,
            'max': 3000
        },
        step: 10,
        format: {
            to: value => `${Math.round(value)}`,
            from: value => Number(value.replace('', ''))
        }
    });

}

const priceMin = document.getElementById('price-min');
const priceMax = document.getElementById('price-max');

if(slider){
    slider.noUiSlider.on('update', (values, handle) => {
        if (handle === 0) {
            priceMin.textContent = values[0];
            if(area){
                updateArea(30, 300)
            }
        } else {
            priceMax.textContent = values[1];
            if(area){
                updateArea(50, 150)
            }
        }
    });
}

const areaMin = document.getElementById('area-min');
const areaMax = document.getElementById('area-max');

if(area){

    area.noUiSlider.on('update', (values, handle) => {
        if (handle === 0) {
            areaMin.textContent = values[0];
        } else {
            areaMax.textContent = values[1];
        }
    });

}

const thickMin = document.getElementById('thick-min');
const thickMax = document.getElementById('thick-max');

if(thick){
    thick.noUiSlider.on('update', (values, handle) => {
        if (handle === 0) {
            thickMin.textContent = values[0];
            updateArea(1, 100)
        } else {
            thickMax.textContent = values[1];
            updateArea(18, 60)
        }

    });
}


const widthMin = document.getElementById('width-min');
const widthMax = document.getElementById('width-max');
if(width){
    width.noUiSlider.on('update', (values, handle) => {
        if (handle === 0) {
            widthMin.textContent = values[0];
            updateArea(12, 50)
        } else {
            widthMax.textContent = values[1];
            updateArea(14, 300)
        }
    });
}


const heightMin = document.getElementById('height-min');
const heightMax = document.getElementById('height-max');

if(height){
    height.noUiSlider.on('update', (values, handle) => {
        if (handle === 0) {
            heightMin.textContent = values[0];
            updateArea(1, 50)
        } else {
            heightMax.textContent = values[1];
            updateArea(1, 50)
        }

    });
}

function updateArea(min, max) {
    var thicknessValue = thick.noUiSlider.get();
    var lengthValue = height.noUiSlider.get();
    var widthValue = width.noUiSlider.get();

    // Пример: доступное значение как произведение
    var minAvailable = (thicknessValue * lengthValue * widthValue) / 1000;
    var maxAvailable = minAvailable * 2; // Например, максимальное значение — это удвоенное минимальное

    // Обновляем слайдер "Доступно"
    area.noUiSlider.set([min, max]);
}


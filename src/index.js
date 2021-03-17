function calculateFunction(a, n, c_a, c_t){
    console.log("a = " + a + " n = " + n);
    return 1 / (+a + (1 - a) / n + c_a * c_t)
}
function getCheckedRadiobutton() {
    let rad = document.getElementsByName('criteria');
    for (let i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            return rad[i];
        }
    }
    return rad[0];
}
function drawChart(labels, data){

    let ctx = document.getElementById('myChart').getContext('2d');
    //
    let chart = new Chart(ctx, {
    // Тип графика
    type: 'line',
    // Создание графиков
    data: {
        // Точки графиков
        labels: labels,
        // График
        datasets: [{
            label: 'Amdahls Law Graphic Chart', // Название
            borderColor: 'rgb(255, 99, 132)', // Цвет линии
            data: data// Данные каждой точки графика
        }]
    }
    });
}
function getDataSet(a, n, c_a, c_t, h, main_parameter){
    let numbers = new Array();
    numbers = []
    let i = 0;
    if(main_parameter == n){
        i = 1;
    }
    for(i; i <= main_parameter; i += h){
        if(main_parameter === a){
            //console.log("Actual main parameter number is: " + main_parameter);
            numbers.push(calculateFunction(i, n, c_a, c_t).toFixed(3));
        }
        else if(main_parameter === n){
            // console.log("Actual main parameter number is: " + main_parameter);
            // console.log("a = " + a + " n = " + i)
            numbers.push(calculateFunction(a, i, 0, 0).toFixed(3));
        }
        else if(main_parameter === c_a){
            console.log("Actual main parameter number is: " + main_parameter);
            numbers.push(calculateFunction(a, n, i, c_t).toFixed(3));
        }
        else if(main_parameter === c_t){
            console.log("Actual main parameter number is: " + main_parameter);
            numbers.push(calculateFunction(a, n, c_a, i).toFixed(3));
        }
        else{
            console.log("Error. Actual main parameter number is: " + main_parameter);
        }
    }
    return numbers;
}
function getLabelsSet(parameter, step){
    let labels = new Array();
    labels = []
    let i = 0;

    for(i; i <= parameter; i += step){
        labels.push(i.toFixed(2));
    }
    return labels;
}
function getLabelsSetForN(parameter, step){
    let labels = new Array();
    labels = []
    let i = 1;

    for(i; i <= parameter; i += step){
        labels.push(i.toFixed(2));
    }
    return labels;
}

function chooseChart(){
    let rad = document.getElementsByName('criteria')
    var a = document.getElementById('a_value').value
    var n = document.getElementById('n_value').value
    var c_a = document.getElementById('ca_value').value
    var c_t = document.getElementById('ct_value').value
    if(rad[0] === getCheckedRadiobutton()){
        let h = 0.1
        console.log(getDataSet(a, n, 0, 0, h, a))
        drawChart(getLabelsSet(a, h), getDataSet(a, n, 0, 0, h, a))
    }
    else if(rad[1] === getCheckedRadiobutton()){
        let h = 1
        console.log("data set: ")
        console.log(getDataSet(a, n, 0, 0, h, n))
        drawChart(getLabelsSetForN(n, h), getDataSet(a, n, 0, 0, h, n))
    }
    else if(rad[2] === getCheckedRadiobutton()){
        let h = 0.0001
        drawChart(getLabelsSet(c_a, h), getDataSet(a, n, c_a, c_t, h, c_a))
    }
    else if(rad[3] === getCheckedRadiobutton()){        
        let h = 100
        
        drawChart(getLabelsSet(c_t, h), getDataSet(a, n, c_a, c_t, h, c_t))
    }
    else{
        console.log("Error! Try to choose correct variant of radiobutton")
    }
}
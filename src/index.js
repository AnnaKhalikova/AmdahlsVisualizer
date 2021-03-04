function calculateFunction(a, n, c_a, c_t){
    console.log("Function that calculate expression")
    return 1 / (a + (1 - a) / n + c_a * c_t)
}
function fun1() {
    console.log("Function that checks radiobuttons")
    var rad = document.getElementsByName('criteria');
    for (var i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            console.log('Выбран '+ i + ' radiobutton');
            return rad[i];
        }
    }
    return rad[0];
}
function drawChart(labels, data){
    console.log("in drawChart func")
    let ctx = document.getElementById('myChart').getContext('2d');
    console.log("labels:" + labels);
    console.log("Data: " + data);

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
    },
    // Настройки графиков
    options: {}
    });
}
function getDataSet(a, n, c_a, c_t, h, main_parameter){
    var numbers = new Array();
    numbers = []
    for(var i = 0; i <= main_parameter; i += h){
        numbers.push(calculateFunction(i, n, c_a, c_t));
    }
    return numbers;
}
function getLabelsSet(parameter, step){
    var labels = new Array();
    labels = []
    for(var i = 0; i <= parameter; i += step){
        labels.push(i);
    }
    return labels;
}
function chooseChart(){
    console.log("in chooseChart func")
    var rad = document.getElementsByName('criteria')
    if(rad[0] == fun1()){
        console.log("Before drawing chart")
        let a = document.getElementById('a_value').value
        let n = document.getElementById('n_value').value
        let c_a = 0
        let c_t = 0
        let h = 0.1
        console.log("a parameter: " + a)
        drawChart(getLabelsSet(a, h), getDataSet(a, n, c_a, c_t, h, a))
    }
    else if(rad[1] == fun1()){
        console.log("Before drawing chart")
        let a = document.getElementById('a_value').value
        let n = document.getElementById('n_value').value
        let c_a = 0
        let c_t = 0
        let h = 1
        console.log("n parameter: " + n)
        drawChart(getLabelsSet(n, h), getDataSet(a, n, c_a, c_t, h, n))
    }
    else if(rad[2] == fun1()){
        console.log("Before drawing chart")
        let a = document.getElementById('a_value').value
        let n = document.getElementById('n_value').value
        let c_a = document.getElementById('ca_value').value
        let c_t = document.getElementById('ct_value').value
        let h = 0.0001
        console.log("ca parameter: " + c_a)
        drawChart(getLabelsSet(c_a, h), getDataSet(a, n, c_a, c_t, h, c_a))
    }
    else if(rad[3] == fun1()){
        console.log("Before drawing chart")
        let a = document.getElementById('a_value').value
        let n = document.getElementById('n_value').value
        let c_a = document.getElementById('ca_value').value
        let c_t = document.getElementById('ct_value').value
        let h = 100
        console.log("a parameter: " + c_t)
        drawChart(getLabelsSet(c_t, h), getDataSet(a, n, c_a, c_t, h, c_t))
    }
    else{
        console.log("Error! Try to choose correct variant of radiobutton")
    }
}
chooseChart()


document.addEventListener('DOMContentLoaded', function() {
  const defaultDate = '2023-01-01';
  const apiUrl = `https://stg-app.energysequence.com/v2/datalog/?meter=5d12082581c1e06964703077&date_from=${defaultDate}&date_to=${defaultDate}`;
 
  // Realizar fetch inicial al cargar la página para obtener los tipos de valores
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la consulta al API');
      }
      return response.json();
    })
    .then(data => {
      populateValueTypeSelector(data);
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('results').innerHTML = `<p>Error en la solicitud: ${error.message}</p>`;
    });
});

// Función para rellenar el selector de tipos de valores
function populateValueTypeSelector(data) {
  const valueTypeSelector = document.getElementById('value_type');
  
  const firstItemValues = data[0].values; // Usamos el primer objeto para obtener las claves
  for (const key in firstItemValues) {
    if (firstItemValues.hasOwnProperty(key)) {
      const option = document.createElement('option');
      option.value = key;
      option.text = key;
      valueTypeSelector.appendChild(option);
    }
  }
}

// Cuando el usuario envíe el formulario
document.getElementById('date-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

  const dateFrom = document.getElementById('date_from').value;
  const dateTo = document.getElementById('date_to').value;
  const chartType = document.getElementById('chart_type').value;
  const selectedValue = document.getElementById('value_type').value;
  const frequency = document.getElementById('frequency').value;

  // URL del API con los parámetros querystring
  const apiUrl = `https://stg-app.energysequence.com/v2/datalog/?meter=5d12082581c1e06964703077&date_from=${dateFrom}&date_to=${dateTo}`;

  // Hacer la petición fetch
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la consulta al API');
      }
      return response.json();
    })
    .then(data => {
      // Agrupar los datos según la frecuencia seleccionada
      const groupedData = groupDataByFrequency(data, frequency, selectedValue);
      // Generar el gráfico
      generateChart(groupedData, chartType, selectedValue, frequency);
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('results').innerHTML = `<p>Error en la solicitud: ${error.message}</p>`;
    });
});

// Función para agrupar los datos según la frecuencia seleccionada
function groupDataByFrequency(data, frequency, selectedValue) {
  let groupedData = [];
  const dateKeyMap = {
    '15m': (date) => date, // No agrupamos para 15m, retornamos tal cual
    'hour': (date) => new Date(date).setMinutes(0, 0, 0), // Agrupamos por hora
    'day': (date) => new Date(date).setHours(0, 0, 0, 0), // Agrupamos por día
    'month': (date) => new Date(date).setDate(1).setHours(0, 0, 0, 0), // Agrupamos por mes
    'year': (date) => new Date(date).setMonth(0, 1).setHours(0, 0, 0, 0) // Agrupamos por año
  };

  const dateKeyFunc = dateKeyMap[frequency];

  const grouped = {};

  data.forEach(item => {
    const dateKey = dateKeyFunc(new Date(item.date));
    if (!grouped[dateKey]) {
      grouped[dateKey] = {
        date: dateKey,
        value: 0,
        count: 0
      };
    }
    grouped[dateKey].value += item.values[selectedValue];
    grouped[dateKey].count += 1;
  });

  for (const key in grouped) {
    groupedData.push({
      date: new Date(parseInt(key)),
      value: grouped[key].value / grouped[key].count // Promedio de valores si hay varios
    });
  }

  return groupedData;
}

// Función para generar el gráfico con Highcharts.js
function generateChart(data, chartType, selectedValue, frequency) {
  const categories = data.map(item => item.date.toLocaleString());
  const seriesData = data.map(item => item.value);

  Highcharts.chart('chart-container', {
    chart: {
      type: chartType
    },
    title: {
      text: `Gráfico de ${selectedValue} (${frequency})`
    },
    xAxis: {
      categories: categories,
      title: {
        text: 'Tiempo'
      }
    },
    yAxis: {
      title: {
        text: selectedValue
      }
    },
    series: [
      {
        name: selectedValue,
        data: seriesData
      }
    ]
  });
}

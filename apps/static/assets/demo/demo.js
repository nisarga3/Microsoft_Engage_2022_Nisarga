type = ["primary", "info", "success", "warning", "danger"];

demo = {
  initPickColor: function () {
    $(".pick-class-label").click(function () {
      var new_class = $(this).attr("new-class");
      var old_class = $("#display-buttons").attr("data-class");
      var display_div = $("#display-buttons");
      if (display_div.length) {
        var display_buttons = display_div.find(".btn");
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr("data-class", new_class);
      }
    });
  },

  initDocChart: function () {
    chartColor = "#FFFFFF";

    // General configuration for the charts with Line gradientStroke
    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10,
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            display: 0,
            gridLines: 0,
            ticks: {
              display: false,
            },
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: false,
            },
          },
        ],
        xAxes: [
          {
            display: 0,
            gridLines: 0,
            ticks: {
              display: false,
            },
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: false,
            },
          },
        ],
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15,
        },
      },
    };

    ctx = document.getElementById("lineChartExample").getContext("2d");

    gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#80b6f4");
    gradientStroke.addColorStop(1, chartColor);

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

    myChart = new Chart(ctx, {
      type: "line",
      responsive: true,
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Active Users",
            borderColor: "#f96332",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#f96332",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630],
          },
        ],
      },
      options: gradientChartOptionsConfiguration,
    });
  },

  initDashboardPageCharts: function () {
    gradientChartOptionsConfigurationWithTooltipBlue = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },

      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.0)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 125,
              padding: 20,
              fontColor: "#2380f7",
            },
          },
        ],

        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#2380f7",
            },
          },
        ],
      },
    };

    gradientChartOptionsConfigurationWithTooltipPurple = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },

      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.0)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 125,
              padding: 20,
              fontColor: "#9a9a9a",
            },
          },
        ],

        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a",
            },
          },
        ],
      },
    };

    gradientChartOptionsConfigurationWithTooltipOrange = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },

      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.0)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 50,
              suggestedMax: 110,
              padding: 20,
              fontColor: "#ff8a76",
            },
          },
        ],

        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(220,53,69,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#ff8a76",
            },
          },
        ],
      },
    };

    gradientChartOptionsConfigurationWithTooltipGreen = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },

      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.0)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 50,
              suggestedMax: 125,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],

        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(0,242,195,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    };

    gradientBarChartConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },

      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 120,
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],

        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e",
            },
          },
        ],
      },
    };

    var ctx = document.getElementById("chartLinePurple").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(72,72,176,0.2)");
    gradientStroke.addColorStop(0.2, "rgba(72,72,176,0.0)");
    gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

    var data = {
      labels: [" Petrol ", "Diesel", "Hybrid", "Electric", "CNG + Petrol "],
      datasets: [
        {
          label: "No of cars",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#d048b6",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#d048b6",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#d048b6",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [643, 582, 16, 15, 14, 6],
        },
      ],
    };

    var myChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipPurple,
    });

    var ctxGreen = document.getElementById("chartLineGreen").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors

    var data = {
      labels: [
        "Electric Power",
        "Electro-Hydraulic",
        "Hydraulic Power",
        "Electric Power, Hydraulic Power",
      ],
      datasets: [
        {
          label: "No of cars",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [1009, 137, 72, 1],
        },
      ],
    };

    var myChart = new Chart(ctxGreen, {
      type: "line",

      data: data,
      options: gradientChartOptionsConfigurationWithTooltipGreen,
    });

    var chart_labels = [
      "Aston Martin",
      "Audi",
      "Bajaj",
      "Bentley",
      "Bmw",
      "Bugatti",
      "Datsun",
      "Dc",
      "Ferrari",
      "Fiat",
      "Force",
      "Ford",
      "Honda",
      "Hyundai",
      "Icml",
      "Isuzu",
      "Jaguar",
      "Jeep",
      "Kia",
      "Lamborghini",
      "Land Rover",
      "Land Rover Rover",
      "Lexus",
      "Mahindra",
      "Maruti Suzuki",
      "Maruti Suzuki R",
      "Maserati",
      "Mg",
      "Mini",
      "Mitsubishi",
      "Nissan",
      "Porsche",
      "Premier",
      "Renault",
      "Skoda",
      "Tata",
      "Toyota",
      "Volkswagen",
      "Volvo",
    ];
    var chart_data = [
      3, 31, 2, 6, 37, 2, 15, 1, 8, 23, 6, 43, 64, 130, 11, 5, 22, 28, 21, 13,
      10, 27, 10, 119, 149, 14, 9, 13, 10, 7, 29, 14, 6, 36, 43, 100, 82, 34,
      18,
    ];

    var ctx = document.getElementById("chartBig1").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
    gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
    gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
    var config = {
      type: "line",
      data: {
        labels: chart_labels,
        datasets: [
          {
            label: "Make",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#d346b1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#d346b1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#d346b1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: chart_data,
          },
        ],
      },
      options: gradientChartOptionsConfigurationWithTooltipPurple,
    };
    var myChartData = new Chart(ctx, config);
    $("#0").click(function () {
      var data = myChartData.config.data;
      data.datasets[0].data = chart_data;
      data.labels = chart_labels;
      myChartData.update();
    });
    // $("#1").click(function () {
    //   var chart_data = [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120];
    //   var data = myChartData.config.data;
    //   data.datasets[0].data = chart_data;
    //   data.labels = chart_labels;
    //   myChartData.update();
    // });

    // $("#2").click(function () {
    //   var chart_data = [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130];
    //   var data = myChartData.config.data;
    //   data.datasets[0].data = chart_data;
    //   data.labels = chart_labels;
    //   myChartData.update();
    // });

    var ctx = document.getElementById("CountryChart").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    var myChart = new Chart(ctx, {
      type: "bar",
      responsive: true,
      legend: {
        display: false,
      },
      data: {
        labels: ["Manual", "Automatic", "AMT", "DCT", "CVT"],
        datasets: [
          {
            label: "Number of Cars",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [725, 522, 18, 7, 3],
          },
        ],
      },
      options: gradientBarChartConfiguration,
    });

    var ctx = document.getElementById("DriveTrain").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
    gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
    gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
    var Graph = new Chart(ctx, {
      type: "bar",
      responsive: true,
      legend: {
        display: false,
      },
      data: {
        labels: ["FWD", "RWD", "AWD", "4WD"],
        datasets: [
          {
            label: "Number of Cars",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d346b1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [887, 170, 153, 59],
          },
        ],
      },
      options: gradientBarChartConfiguration,
    });

    var ctx = document.getElementById("Engine").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
    gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
    gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
    var nut = new Chart(ctx, {
      type: "doughnut",
      responsive: true,
      legend: {
        display: false,
      },
      data: {
        labels: [
          "Front, Transverse",
          "Front, Longitudinal",
          "Rear, Transverse ",
          "Rear Mid, Transverse",
          "Mid, Longitudinal",
          "Mid, Transverse",
          "Rear, Longitudinal ",
        ],
        datasets: [
          {
            label: "Number of Cars",
            data: [804, 405, 16, 3, 2, 2, 1],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(255,192,203)",
              "rgb(0,255,0)",
              "rgb(160,32,240)",
              "rgb(255,255,0)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    });

    var ctx = document.getElementById("Seats").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
    gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
    gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
    var nut = new Chart(ctx, {
      type: "pie",
      responsive: true,
      legend: {
        display: false,
      },
      data: {
        labels: ["Yes", "Yes, with memory", "No"],
        datasets: [
          {
            label: "Number of Cars",
            data: [275, 108, 893],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(255,192,203)",
              "rgb(0,255,0)",
              "rgb(160,32,240)",
              "rgb(255,255,0)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    });
    var ctx = document.getElementById("bodytypepe").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
    gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
    gradientStroke.addColorStop(0, "rgba(119,52,169,0)");
    var body = new Chart(ctx, {
      type: "line",
      responsive: true,
      legend: {
        display: false,
      },
      data: {
        labels: [
          "SUV",
          "Sedan",
          "Hatchback",
          "Coupe",
          "MUV",
          "MPV",
          "Convertible ",
          "Crossover",
          "Sports",
          "Pick-up ",
          "Sports, Convertible ",
          "Sedan, Coupe ",
          "SUV,Crossover",
          "Sports, Hatchback",
          "Sedan,Crossover",
          "Coupe,Convertible ",
        ],
        datasets: [
          {
            label: "No of Cars",
            data: [447, 333, 316, 41, 39, 39, 20, 18, 3, 3, 2, 2, 4, 1, 1, 1],
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#d346b1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#d346b1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#d346b1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,

            titleFontColor: "#333",
            bodyFontColor: "#666",
          },
        ],
      },
      // options: gradientChartOptionsConfigurationWithTooltipPurple,
    });
    var ctx = document.getElementById("Mileage").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
    gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
    gradientStroke.addColorStop(0, "rgba(119,52,169,0)");
    var body = new Chart(ctx, {
      type: "line",
      responsive: true,
      legend: {
        display: false,
      },
      plugins: {
        legend: {
          position: "top",
        },
      },
      data: {
        labels: [
          "23.6 km/litre",

          "21.38 km/litre",
          "25.17 km/litre",
          "12 km/litre",
          "11 km/litre",
          "14 km/litre",
          "19 km/litre",
          "20.6 km/litre",
          "23 km/litre",
          "23.84 km/litre",
          "20.89 km/litre",
          "15.1 km/litre",
          "13 km/litre",
          "20 km/litre",
          "20.3 km/litre",
          "19.49 km/litre",
          "22,95 km/litre",
          "17,57 km/litre",
          "14.6 km/litre",
          "16.3 km/litre",
          "13.3 km/litre",
          "18.4 km/litre",
          "17 km/litre",
          "28,4 km/litre",
          "28.4 km/litre",
          "15.3 km/litre",
          "13,6 km/litre",
          "20.32 km/litre",
          "13.6 km/litre",
          "15 km/litre",
          "16,78 km/litre",
          "18.1 km/litre",
          "16.78 km/litre",
          "18 km/litre",
          "11.2 km/litre",
          "11.3 km/litre",
          "13.8 km/litre",
          "12.4 km/litre",
          "9.5 km/litre",
          "11.5 km/litre",
          "11.04 km/litre",
          "13.9 km/litre",
          "8 km/litre",
          "10.3 km/litre",
          "12.3 km/litre",
          "5.7 km/litre",
          "19.2 km/litre",
          "16 km/litre",
          "11,44 km/litre",
          "10 km/litre",
          "12.8 km/litre",
          "4.5 km/litre",
          "12.5-12.7 km/litre",
          "9 km/litre",
          "6.5 km/litre",
          "7 km/litre",
          "18.8 km/litre",
          "13.5 km/litre",
          "5.4 km/litre",
          "5.2 km/litre",
          "4.6 km/litre",
          "7.81 km/litre",
          "7.1 km/litre",
          "7.8 km/litre",
          "5.3 km/litre",
          "6 km/litre",
          "9,6 km/litre",
          "10.5 km/litre",
          "4.7 km/litre",
          "6.2 km/litre",
          "10.2 km/litre",
          "24 km/litre",
          "18.9 km/litre",
          "15.5 km/litre",
          "22.25 km/litre",
          "12.6 km/litre",
          "8.6 km/litre",
          "24.12 km/litre",
          "13.2 km/litre",
          "11,3 km/litre",
          "17.2 km/litre",
          "9.4 km/litre",
          "21.19 km/litre",
          "19.9 km/litre",
          "21.04 km/litre",
          "12.1 km/litre",
          "80 km/litre",
          "16.2 km/litre",
          "18.49 km/litre",
          "8.1 km/litre",
          "110 km/litre",
          "18.2 km/litre",
          "10.6 km/litre",
          "10.1 km/litre",
          "16,8 km/litre",
          "12.55 km/litre",
          "12,55 km/litre",
          "7.7 km/litre",
          "9.3 km/litre",
          "15.71 km/litre",
          "15.6 km/litre",
          "8.5 km/litre",
          "7.45 km/litre",
          "11.7 km/litre",
          "17.5 km/litre",
          "15.68 km/litre",
          "12.63 km/litre",
          "5 km/litre",
          "5.9 km/litre",
          "5.6 km/litre",
          "4.4 km/litre",
          "8.69 km/litre",
          "4 km/litre",
          "5.8 km/litre",
          "3.2 km/litre",
          "3 km/litre",
          "3.6 km/litre",
          "7.9 km/litre",
          "4.38 km/litre",
          "20.62 km/litre",
          "27.39 km/litre",
          "21.4 km/litre",
          "11.4 km/litre",
          "25.5 km/litre",
          "23.65 km/litre",
          "10.7 km/litre",
          "17.1 km/litre",
          "10.8 km/litre",
          "13,93 km/litre",
          "13.1 km/litre",
          "16,38 km/litre",
          "13,3 km/litre",
          "16.38 km/litre",
          "12.03 km/litre",
          "13.05 km/litre",
          "17.8 km/litre",
          "21.27 km/litre",
          "7.32 km/litre",
          "11.6 km/litre",
          "9.1 km/litre",
          "20.7 km/litre",
          "15.7 km/litre",
          "19.5 km/litre",
          "28.09 km/litre",
          "21.56 km/litre",
          "26.82 km/litre",
          "26032 km/litre",
          "26.32 km/litre",
          "14.5 km/litre",
          "15.29 km/litre",
          "17.01 km/litre",
          "7.3 km/litre",
          "13.4 km/litre",
          "21 km/litre",
          "8.4 km/litre",
          "15.01 km/litre",
          "4.45 km/litre",
          "12.05 km/litre",
          "15.8 km/litre",
          "21,2 km/litre",
          "2 km/litre",
          "14.3 km/litre",
          "22.6 km/litre",
          "8.25 km/litre",
        ],
        datasets: [
          {
            label: "City Mileage",
            data: [
              38, 30, 26, 20, 19, 16, 13, 12, 11, 11, 11, 11, 11, 10, 10, 10, 9,
              9, 9, 9, 9, 9, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4,
              4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
              3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
              2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
            borderColor: "red",
            backgroundColor: gradientStroke,
          },
          {
            label: "ARAI Certified Mileage",
            data: [
              27, 24, 24, 23, 20, 19, 18, 17, 15, 14, 14, 14, 13, 13, 12, 12,
              12, 11, 11, 11, 11, 10, 10, 9, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8, 8,
              8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6,
              6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
              4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
              4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
              3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
              2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
              2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
              2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1,
            ],
            borderColor: "blue",
            backgroundColor: gradientStroke,
          },
        ],
      },
      // options: gradientChartOptionsConfigurationWithTooltipPurple,
    });
  },

  showNotification: function (from, align) {
    color = Math.floor(Math.random() * 4 + 1);

    $.notify(
      {
        icon: "tim-icons icon-bell-55",
        message: "Welcome to the Automotive industry Dashboard.",
      },
      {
        type: type[color],
        timer: 8000,
        placement: {
          from: from,
          align: align,
        },
      }
    );
  },
};

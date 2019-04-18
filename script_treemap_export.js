let domExport = document.getElementById("treemap_export");
let exportChart = echarts.init(domExport);
let exportApp = {};
option = null;
exportChart.showLoading();

$.get(
  "https://monthol8th.github.io/01204314-assignment2/data/egy-export.json",
  function(egyptData) {
    $.get(
      "https://monthol8th.github.io/01204314-assignment2/data/zaf-export.json",
      function(zafData) {
        $.get(
          "https://monthol8th.github.io/01204314-assignment2/data/mar-export.json",
          function(marData) {
            $.get(
              "https://monthol8th.github.io/01204314-assignment2/data/ken-export.json",
              function(kenData) {
                $.get(
                  "https://monthol8th.github.io/01204314-assignment2/data/cmr-export.json",
                  function(cmrData) {
                    console.log("export");
                    exportChart.hideLoading();

                    function withPostfix(labelValue) {
                      // Nine Zeroes for Billions
                      return Math.round(labelValue) >= 1.0e9
                        ? (labelValue / 1.0e9).toFixed(2) + " Billion"
                        : // Six Zeroes for Millions
                        Math.round(labelValue) >= 1.0e6
                        ? (labelValue / 1.0e6).toFixed(2) + " Million"
                        : // Three Zeroes for Thousands
                        labelValue >= 1.0e3
                        ? (labelValue / 1.0e3).toFixed(2) + " Thousand"
                        : labelValue.toFixed(2);
                    }

                    function colorMexportAppingChange(value) {
                      let leveloption = getLeveloption(value);
                      chart.setOption({
                        series: [
                          {
                            levels: leveloption
                          }
                        ]
                      });
                    }

                    let formatUtil = echarts.format;

                    function getLeveloption() {
                      return [
                        {
                          itemStyle: {
                            normal: {
                              borderColor: "#777",
                              borderWidth: 0,
                              gapWidth: 1
                            }
                          },
                          upperLabel: {
                            normal: {
                              show: false
                            }
                          }
                        },
                        {
                          itemStyle: {
                            normal: {
                              borderColor: "#555",
                              borderWidth: 5,
                              gapWidth: 1
                            },
                            emphasis: {
                              borderColor: "#ddd"
                            }
                          }
                        },
                        {
                          colorSaturation: [0.35, 0.5],
                          itemStyle: {
                            normal: {
                              borderWidth: 5,
                              gapWidth: 1,
                              borderColorSaturation: 0.6
                            }
                          }
                        }
                      ];
                    }

                    let modes = [
                      "Egypt",
                      "South Africa",
                      "Kenya",
                      "Cameroon",
                      "Morocco"
                    ];
                    let data = [egyptData, zafData, kenData, cmrData, marData];
                    exportChart.setOption(
                      (option = {
                        tooltip: {
                          formatter: function(info) {
                            let name = info.name.split(";").join("<br>&#183; ");
                            let price = formatUtil.addCommas(info.value[0]);
                            let percent = info.value[1].toFixed(2);
                            let sectionpercent = info.value[2].toFixed(2);

                            return [
                              '<div class="tooltip-title">' + name + "</div>",
                              "$" + price,
                              percent + "% total",
                              sectionpercent + "% section"
                            ].join("<br>");
                          }
                        },

                        legend: {
                          data: modes,
                          selectedMode: "single",
                          itemGap: 5,
                          backgroundColor: "rgb(243,243,243)",
                          borderRadius: 5
                        },

                        series: modes.map(function(mode, idx) {
                          let seriesOpt = {
                            name: mode,
                            type: "treemap",
                            visibleMin: 300,
                            label: {
                              normal: {
                                formatter: function(params) {
                                  let arr = [
                                    "{name|" + params.name + "}",
                                    "{hr|}",
                                    "{budget|$ " +
                                      withPostfix(params.value[0]) +
                                      "} {label|USD}",
                                    "{household| " +
                                      params.value[1].toFixed(2) +
                                      "% total}",
                                    "{household| " +
                                      echarts.format.addCommas(
                                        params.value[2].toFixed(2)
                                      ) +
                                      "% of parent section}"
                                  ];
                                  return arr.join("\n");
                                },
                                rich: {
                                  budget: {
                                    fontSize: 22,
                                    lineHeight: 30,
                                    color: "yellow"
                                  },
                                  household: {
                                    fontSize: 14,
                                    color: "#fff"
                                  },
                                  label: {
                                    fontSize: 9,
                                    backgroundColor: "rgba(0,0,0,0.3)",
                                    color: "#fff",
                                    borderRadius: 2,
                                    padding: [2, 4],
                                    lineHeight: 25,
                                    align: "right"
                                  },
                                  name: {
                                    fontSize: 12,
                                    color: "#fff"
                                  },
                                  hr: {
                                    width: "100%",
                                    borderColor: "rgba(255,255,255,0.2)",
                                    borderWidth: 0.5,
                                    height: 0,
                                    lineHeight: 10
                                  }
                                }
                              }
                            },
                            leafDepth: 1,
                            upperLabel: {
                              normal: {
                                show: true,
                                formatter: function(params) {
                                  let arr = [
                                    params.name,
                                    "($ " + withPostfix(params.value[0]) + ")"
                                  ];
                                  return arr.join(" ");
                                },
                                height: 45
                              }
                            },
                            itemStyle: {
                              normal: {
                                borderColor: "#555",
                                gapWidth: 1,
                                borderwidth: 3
                              }
                            },
                            levels: getLeveloption(),
                            data: data[idx]
                          };
                          return seriesOpt;
                        })
                      })
                    );
                    console.log("exporteexportChartd");
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);
if (option && typeof option === "object") {
  exportChart.setOption(option, true);
}


(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('fresh', {
        'color': [
            '#03a9f4',
            '#77c687',
            '#ffd666',
            '#ff8279',
            '#f54983',
            '#35c0cc',
            '#8c80ec',
            '#e681ff',
            '#71bb30',
            '#fd9e4a'
        ],
        'backgroundColor': 'rgba(0,0,0,0)',
        'textStyle': {},
        'title': {
            'textStyle': {
                'color': '#008acd'
            },
            'subtextStyle': {
                'color': '#aaaaaa'
            }
        },
        'line': {
            'itemStyle': {
                'normal': {
                    'borderWidth': 1
                }
            },
            'lineStyle': {
                'normal': {
                    'width': '1'
                }
            },
            'symbolSize': '6',
            'symbol': 'circle',
            'smooth': true
        },
        'radar': {
            'itemStyle': {
                'normal': {
                    'borderWidth': 1
                }
            },
            'lineStyle': {
                'normal': {
                    'width': '1'
                }
            },
            'symbolSize': '6',
            'symbol': 'circle',
            'smooth': true
        },
        'bar': {
            'itemStyle': {
                'normal': {
                    'barBorderWidth': 0,
                    'barBorderColor': '#ccc'
                },
                'emphasis': {
                    'barBorderWidth': 0,
                    'barBorderColor': '#ccc'
                }
            }
        },
        'pie': {
            'itemStyle': {
                'normal': {
                    'borderWidth': 0,
                    'borderColor': '#ccc'
                },
                'emphasis': {
                    'borderWidth': 0,
                    'borderColor': '#ccc'
                }
            }
        },
        'scatter': {
            'itemStyle': {
                'normal': {
                    'borderWidth': 0,
                    'borderColor': '#ccc'
                },
                'emphasis': {
                    'borderWidth': 0,
                    'borderColor': '#ccc'
                }
            }
        },
        'boxplot': {
            'itemStyle': {
                'normal': {
                    'borderWidth': 0,
                    'borderColor': '#ccc'
                },
                'emphasis': {
                    'borderWidth': 0,
                    'borderColor': '#ccc'
                }
            }
        },
        'parallel': {
            'itemStyle': {
                'normal': {
                    'borderWidth': 0,
                    'borderColor': '#ccc'
                },
                'emphasis': {
                    'borderWidth': 0,
                    'borderColor': '#ccc'
                }
            }
        },
        'sankey': {
            'itemStyle': {
                'normal': {
                    'borderWidth': 0,
                    'borderColor': '#ccc'
                },
                'emphasis': {
                    'borderWidth': 0,
                    'borderColor': '#ccc'
                }
            }
        },
        'funnel': {
            'itemStyle': {
                'normal': {
                    'borderWidth': 0,
                    'borderColor': '#ccc'
                },
                'emphasis': {
                    'borderWidth': 0,
                    'borderColor': '#ccc'
                }
            }
        },
        'gauge': {
            'itemStyle': {
                'normal': {
                    'borderWidth': 0,
                    'borderColor': '#ccc'
                },
                'emphasis': {
                    'borderWidth': 0,
                    'borderColor': '#ccc'
                }
            }
        },
        'candlestick': {
            'itemStyle': {
                'normal': {
                    'color': '#d87a80',
                    'color0': '#2ec7c9',
                    'borderColor': '#d87a80',
                    'borderColor0': '#2ec7c9',
                    'borderWidth': 1
                }
            }
        },
        'graph': {
            'itemStyle': {
                'normal': {
                    'borderWidth': 0,
                    'borderColor': '#ccc'
                }
            },
            'lineStyle': {
                'normal': {
                    'width': 1,
                    'color': '#aaaaaa'
                }
            },
            'symbolSize': '6',
            'symbol': 'circle',
            'smooth': true,
            'color': [
                '#03a9f4',
                '#77c687',
                '#ffd666',
                '#ff8279',
                '#f54983',
                '#35c0cc',
                '#8c80ec',
                '#e681ff',
                '#71bb30',
                '#fd9e4a'
            ],
            'label': {
                'normal': {
                    'textStyle': {
                        'color': '#eeeeee'
                    }
                }
            }
        },
        'map': {
            'itemStyle': {
                'normal': {
                    'areaColor': '#dddddd',
                    'borderColor': '#eeeeee',
                    'borderWidth': 0.5
                },
                'emphasis': {
                    'areaColor': 'rgba(254,153,78,1)',
                    'borderColor': '#444444',
                    'borderWidth': 1
                }
            },
            'label': {
                'normal': {
                    'textStyle': {
                        'color': '#d87a80'
                    }
                },
                'emphasis': {
                    'textStyle': {
                        'color': 'rgb(100,0,0)'
                    }
                }
            }
        },
        'geo': {
            'itemStyle': {
                'normal': {
                    'areaColor': '#dddddd',
                    'borderColor': '#eeeeee',
                    'borderWidth': 0.5
                },
                'emphasis': {
                    'areaColor': 'rgba(254,153,78,1)',
                    'borderColor': '#444444',
                    'borderWidth': 1
                }
            },
            'label': {
                'normal': {
                    'textStyle': {
                        'color': '#d87a80'
                    }
                },
                'emphasis': {
                    'textStyle': {
                        'color': 'rgb(100,0,0)'
                    }
                }
            }
        },
        'categoryAxis': {
            'axisLine': {
                'show': false,
                'lineStyle': {
                    'color': '#008acd'
                }
            },
            'axisTick': {
                'show': false,
                'lineStyle': {
                    'color': '#333'
                }
            },
            'axisLabel': {
                'show': true,
                'textStyle': {
                    'color': '#7a8f99'
                }
            },
            'splitLine': {
                'show': false,
                'lineStyle': {
                    'color': [
                        '#e6ecef'
                    ]
                }
            },
            'splitArea': {
                'show': false,
                'areaStyle': {
                    'color': [
                        'rgba(250,250,250,0.3)',
                        'rgba(200,200,200,0.3)'
                    ]
                }
            }
        },
        'valueAxis': {
            'axisLine': {
                'show': false,
                'lineStyle': {
                    'color': '#008acd'
                }
            },
            'axisTick': {
                'show': false,
                'lineStyle': {
                    'color': '#333'
                }
            },
            'axisLabel': {
                'show': true,
                'textStyle': {
                    'color': '#7a8f99'
                }
            },
            'splitLine': {
                'show': true,
                'lineStyle': {
                    'color': [
                        '#e6ecef'
                    ]
                }
            },
            'splitArea': {
                'show': false,
                'areaStyle': {
                    'color': [
                        'rgba(250,250,250,0.3)',
                        'rgba(200,200,200,0.3)'
                    ]
                }
            }
        },
        'logAxis': {
            'axisLine': {
                'show': true,
                'lineStyle': {
                    'color': '#008acd'
                }
            },
            'axisTick': {
                'show': true,
                'lineStyle': {
                    'color': '#333'
                }
            },
            'axisLabel': {
                'show': true,
                'textStyle': {
                    'color': '#7a8f99'
                }
            },
            'splitLine': {
                'show': true,
                'lineStyle': {
                    'color': [
                        '#eee'
                    ]
                }
            },
            'splitArea': {
                'show': true,
                'areaStyle': {
                    'color': [
                        'rgba(250,250,250,0.3)',
                        'rgba(200,200,200,0.3)'
                    ]
                }
            }
        },
        'timeAxis': {
            'axisLine': {
                'show': false,
                'lineStyle': {
                    'color': '#008acd'
                }
            },
            'axisTick': {
                'show': false,
                'lineStyle': {
                    'color': '#333'
                }
            },
            'axisLabel': {
                'show': true,
                'textStyle': {
                    'color': '#7a8f99'
                }
            },
            'splitLine': {
                'show': true,
                'lineStyle': {
                    'color': [
                        '#e6ecef'
                    ]
                }
            },
            'splitArea': {
                'show': false,
                'areaStyle': {
                    'color': [
                        'rgba(250,250,250,0.3)',
                        'rgba(200,200,200,0.3)'
                    ]
                }
            }
        },
        'toolbox': {
            'iconStyle': {
                'normal': {
                    'borderColor': '#2ec7c9'
                },
                'emphasis': {
                    'borderColor': '#18a4a6'
                }
            }
        },
        'legend': {
            'textStyle': {
                'color': '#7a8f99'
            }
        },
        'tooltip': {
            'axisPointer': {
                'lineStyle': {
                    'color': '#e6ecef',
                    'width': '1'
                },
                'crossStyle': {
                    'color': '#e6ecef',
                    'width': '1'
                }
            }
        },
        'timeline': {
            'lineStyle': {
                'color': '#008acd',
                'width': 1
            },
            'itemStyle': {
                'normal': {
                    'color': '#008acd',
                    'borderWidth': 1
                },
                'emphasis': {
                    'color': '#a9334c'
                }
            },
            'controlStyle': {
                'normal': {
                    'color': '#008acd',
                    'borderColor': '#008acd',
                    'borderWidth': 0.5
                },
                'emphasis': {
                    'color': '#008acd',
                    'borderColor': '#008acd',
                    'borderWidth': 0.5
                }
            },
            'checkpointStyle': {
                'color': '#2ec7c9',
                'borderColor': 'rgba(46,199,201,0.4)'
            },
            'label': {
                'normal': {
                    'textStyle': {
                        'color': '#008acd'
                    }
                },
                'emphasis': {
                    'textStyle': {
                        'color': '#008acd'
                    }
                }
            }
        },
        'visualMap': {
            'color': [
                '#03a9f4',
                '#e0ffff',
                '#333333',
                '#333333',
                '#333333',
                '#333333'
            ]
        },
        'dataZoom': {
            'backgroundColor': 'rgba(47,69,84,0)',
            'dataBackgroundColor': 'rgba(239,239,255,1)',
            'fillerColor': 'rgba(182,162,222,0.2)',
            'handleColor': '#008acd',
            'handleSize': '100%',
            'textStyle': {
                'color': '#333333'
            }
        },
        'markPoint': {
            'label': {
                'normal': {
                    'textStyle': {
                        'color': '#ffffff'
                    }
                },
                'emphasis': {
                    'textStyle': {
                        'color': '#ffffff'
                    }
                }
            }
        }
    });
}));

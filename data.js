var APP_DATA = {
  "scenes": [
    {
      "id": "0-rea-gourmet",
      "name": "Área Gourmet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.425614444601826
      },
      "linkHotspots": [
        {
          "yaw": 1.6688865506537436,
          "pitch": 0.23690341158573247,
          "rotation": 0,
          "target": "1-cozinha"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cozinha",
      "name": "Cozinha",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4796438970865502,
          "pitch": 0.19541266848690952,
          "rotation": 0,
          "target": "2-corredor"
        },
        {
          "yaw": 0.8343579527003389,
          "pitch": 0.4985313862813783,
          "rotation": 0,
          "target": "0-rea-gourmet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-corredor",
      "name": "Corredor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0813829290740102,
          "pitch": 0.37107516288449816,
          "rotation": 0,
          "target": "3-quarto-1"
        },
        {
          "yaw": 2.092454039614964,
          "pitch": 0.4151661851653987,
          "rotation": 0,
          "target": "4-quarto-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-quarto-1",
      "name": "Quarto 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6559099477894961,
          "pitch": 0.359201291732802,
          "rotation": 0,
          "target": "2-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-quarto-2",
      "name": "Quarto 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.993412237128931,
          "pitch": 0.30081760493574095,
          "rotation": 0,
          "target": "5-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-corredor",
      "name": "Corredor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3564636613682026,
          "pitch": 0.366229295043107,
          "rotation": 0,
          "target": "6-banheiro-1"
        },
        {
          "yaw": 1.8923509775788583,
          "pitch": 0.32321645050105374,
          "rotation": 0,
          "target": "7-banheiro-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-banheiro-1",
      "name": "Banheiro 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.1056027174536318,
        "pitch": 0,
        "fov": 1.425614444601826
      },
      "linkHotspots": [
        {
          "yaw": -1.2712727017341887,
          "pitch": 0.6302994022385651,
          "rotation": 0,
          "target": "5-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-banheiro-2",
      "name": "Banheiro 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7451125873247477,
          "pitch": 0.4009814131355913,
          "rotation": 0,
          "target": "8-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-corredor",
      "name": "Corredor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.602337360459451,
          "pitch": 0.25983568593737516,
          "rotation": 0,
          "target": "9-quarto-3"
        },
        {
          "yaw": -2.3297308865161312,
          "pitch": 0.39905547919454243,
          "rotation": 0,
          "target": "10-quarto-4"
        },
        {
          "yaw": 2.3645012905922433,
          "pitch": 0.23697597710367724,
          "rotation": 0,
          "target": "11-quarto-5"
        },
        {
          "yaw": -2.92209246597419,
          "pitch": 0.2513394143697205,
          "rotation": 0,
          "target": "12-quarto-6"
        },
        {
          "yaw": 3.019228391240862,
          "pitch": 0.21842488666051985,
          "rotation": 0,
          "target": "13-sute"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-quarto-3",
      "name": "Quarto 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6948551952789597,
          "pitch": 0.18469527011830245,
          "rotation": 0,
          "target": "8-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-quarto-4",
      "name": "Quarto 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.594450459679771,
          "pitch": 0.25391412103975597,
          "rotation": 0,
          "target": "8-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-quarto-5",
      "name": "Quarto 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8450310180891698,
          "pitch": 0.4190076837224641,
          "rotation": 0,
          "target": "8-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-quarto-6",
      "name": "Quarto 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3028168565738394,
          "pitch": 0.21842475076833878,
          "rotation": 0,
          "target": "8-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-sute",
      "name": "Suíte",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8949639672360057,
          "pitch": 0.3587244897638211,
          "rotation": 0,
          "target": "8-corredor"
        },
        {
          "yaw": -2.835763548822129,
          "pitch": 0.2993264346280142,
          "rotation": 0,
          "target": "14-banheiro-sute"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-banheiro-sute",
      "name": "Banheiro Suíte",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3731353985884311,
          "pitch": 0.6211363701233203,
          "rotation": 0,
          "target": "13-sute"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "PAC_Alexandro",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};

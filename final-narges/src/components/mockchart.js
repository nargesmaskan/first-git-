export const chartsData = {
    "the glass castle": {
      type: "line",
      data: {
        x: ["throne of glass", "crown of midnight", "heir of fire", "Queen of shadow", "empire of storms", "kingdom of ash"],
        y: [95, 90, 85, 60, 40],
      },
      layout: {
        title: "controlling over time",
        xaxis: { title: "level of control" },
        yaxis: { title: "book" },
        plot_bgcolor: "#f0f0f0",
        color: "#69c0ff",
      },
    },
  
    "teressen1": {
      type: "bar",
      data: {
        x: ["teressen army ", "kerachens", "adrallan " , "roffhod" , "the glass castle"],
        y: [5, 4, 1 , 5 , 5],
      },
      layout: {
        title: "trust level of allies in terresen",
        xaxis: { title: "trust level" },
        yaxis: { title: "allies" },
        plot_bgcolor: "#f0f0f0",
        color: "#722ed1",
      },
    },
  "adaralan": {
    type: "scatterpolar",
    data: {
      r: [80, 65, 180, 50, 70],  
      theta: ["gods", "shapeshifters", "Airmagic", "witches", "Fire magic"], 
      type: "scatterpolar", 
      fill: "toself",  
    },
    layout: {
      title: "Class Performance Radar - Area 2",
      polar: {
        radialaxis: { visible: true, range: [0, 100] },  
      },
      plot_bgcolor: "#f0f0f0",
    },
  },
      "wendelyn": {
        type: "scatterpolar",
        data: {
          r: [60, 95, 85, 100, 75,90],  
          theta: ["military strength", "magical presence", "political stabality", "opennes to magic", "alliance potencial","spiritual depth"], 
          type: "scatterpolar", 
          fill: "toself",  
        },
        layout: {
          title: "Class Performance Radar - Area 2",
          polar: {
            radialaxis: { visible: true, range: [0, 100] },  
          },
          plot_bgcolor: "#f0f0f0",
        },
      },  
  
    "the witch kindom": {
      type: "scatter",
      data: {
        x: ["Felix Felicis ", "Amortentia", "Amortentia" , "Polyjuice Potion"],
        y: [12, 8, 15 , 25],
      },
      layout: {
        title: "Potion Failures in Snape's Cave I",
        xaxis: { title: "Potion Type" },
        yaxis: { title: "Explosion Count" },
        plot_bgcolor: "#f0f0f0",
      },
    },
  
 }
  
  
 
  
var KeyActions = require("../actions/KeyActions.js");

var Mapping = {
  65	:	"C_5_Db5"	,
  66	:	"D5"	,
  67	:	"D_5_Eb5"	,
  68	:	"E5"	,
  69	:	"F5"	,
  70	:	"F_5_Gb5"	,
  71	:	"G5"	,
  72	:	"G_5_Ab5"	,
  73	:	"A5"	,
  74	:	"A_5_Bb5"	,
  75	:	"B5"	,
  76	:	"C6"	,
  77	:	"C_6_Db6"	,
  78	:	"D6"	,
  79	:	"D_6_Eb6"	,
  80	:	"E6"	,
  81	:	"F6"	,
  82	:	"F_6_Gb6"	,
  83	:	"G6"	,
  84	:	"G_6_Ab6"	,
  85	:	"A6"	,
  86	:	"A_6_Bb6"	,
  87	:	"B6"	,
  88	:	"C7"	,
  89	:	"C_7_Db7"	,
  90	:	"D7"	,
};

$(function(){
  $(document).on("keyup", function(e){
    KeyActions.keyReleased(Mapping[e.keyCode]);
  });

  $(document).on("keydown", function(e){
    KeyActions.keyPressed(Mapping[e.keyCode]);
  });
});

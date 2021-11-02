'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', []).
controller('MainCtrl', function MainCtrl(){
  this.formJson = {
    "inputs":[
        {
            "label": "Digite su nombre",
            "placeholder":"Nombre",
            "type": "text",
            "required": "true",
            "reg_exp":"[a-zA-Z]{2,30}" ,

        },
        {
            "label": "Digite su documento",
            "placeholder": "Documento",
            "type": "number",
            "required": "true",
            "reg_exp": "[0-9]{7,15}",
            
        },
        {
            "label": "Seleccione su localidad",
            "type": "select",
            "options": [
                {
                    "label": "Localidad 1",
                    "value": 1
                },
                {
                    "label": "Localidad 2",
                    "value": 2
                },
                {
                    "label": "Localidad 3",
                    "value": 3
                }
            ],
            "required": "true"
        }, 
        {
            "label": "Digite su número celular",
            "placeholder": "Celular",
            "type": "number",
            "required": "false",
            "reg_exp": "3[0-9]{9}",
            
        }
    ],
    "buttons":{
        "back":{
            "label": "volver",
            "callback":"callbackFunction()"
        },
        "continue":{
            "label": "Continuar",
            "callback":"callbackFunction(data)"
        }
    },
    "test": "holiwia :3"
}
}
);

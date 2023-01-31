define("naveenkumarRealty1Page", [], function() {
	return {
		entitySchemaName: "naveenkumarRealty",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "naveenkumarRealtyFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "naveenkumarRealty"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			onMyButtonClick:function(){
				this.console.log("PUSH Button was Pressed");
				this.showInformationDialog("is worning");
			},
			getMyButtonEnabled:function(){
				var result=true;
				var name=this.get("naveenkumarName");
				if(!name){
					result=false;
				}
				return result;
			},
			getMyButtonvisible:function(){
				var result=true;
				var price=this.get("naveenkumarPriceUsd");
				if(price<=100){
					result=false;
				}
				return result;
				
			}
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "naveenkumarName3fcaa24e-8978-4f12-97d0-0fdb17745725",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "naveenkumarName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOAT49b09daa-0369-4fc0-9f8f-ff926310ea3d",
				"values": {
					"layout": {
						"colSpan":24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "naveenkumarPriceUsd",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FLOATbf312045-8916-4a0a-af7a-a9b1346ef61c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "naveenkumarAreasqft",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			 /* Metadata to add the custom button to the page. */
            {
                /*  Run the operation that inserts the element to the page. */
                "operation": "insert",
                /* The meta name of the parent container to add the button. */
                "parentName": "ProfileContainer",
                /* Add the button to the element collection of the parent element. */
                "propertyName": "items",
                /* The meta name of the added button. */
                "name": "MyButton",
                /* The properties to pass to the element’s constructor. */
                "values": {
						"layout": {
						"colSpan": 10,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
                    /* Set the type of the added element to ‘button.’ */
                    "itemType": Terrasoft.ViewItemType.BUTTON,
                    /* Bind the button title to the localizable schema string. */
                    "caption": {bindTo: "Resources.Strings.MyButtonCaption"},
                    /* Bind the button click handler method. */
                    "click": {bindTo: "onMyButtonClick"},
                    /* Bind the button availability property. */
                    "enabled": {bindTo: "getMyButtonEnabled"},
					"visible":{bindTo: "getMyButtonvisible"},
                    /* The display style of the button. */
                    "style": Terrasoft.controls.ButtonEnums.style.BLUE
                }
            },
			{
				"operation": "insert",
				"name": "LOOKUPd00a346c-ed07-4a8c-b0b1-463ea015f361",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "naveenkumartype",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP7fee7f8f-9331-43c5-b331-c99d719a4479",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "naveenkumarOffertype",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING52adcf98-b4ee-438f-9513-197d87f039c9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 2,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "naveenkumarComment",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "naveenkumarNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 1
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
